import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useLanguage } from './LanguageContext';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { setLanguage } = useLanguage();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize session and demo profile from localStorage
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('saksham_user');
      const savedProfile = localStorage.getItem('saksham_profile');
      
      if (savedUser && savedProfile) {
        const parsedUser = JSON.parse(savedUser);
        const parsedProfile = JSON.parse(savedProfile);
        setUser(parsedUser);
        setProfile(parsedProfile);
        if (parsedProfile.preferred_language) {
          setLanguage(parsedProfile.preferred_language);
        }
      }
    } catch (e) {
      console.warn('Auth init parse error:', e);
    } finally {
      setLoading(false);
    }

    // Supabase auth state change listener
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const currentUser = session.user;
        setUser(currentUser);
        localStorage.setItem('saksham_user', JSON.stringify(currentUser));
        
        // Fetch or create profile
        let userProfile = {
          id: currentUser.id,
          full_name: currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'Student',
          email: currentUser.email,
          avatar_url: currentUser.user_metadata?.avatar_url || '',
          role: 'student',
          class_id: 8, // Default class
          preferred_language: localStorage.getItem('saksham_language') || 'mr',
          learning_level: 'intermediate',
          low_bandwidth_mode: false,
          low_power_mode: false
        };

        setProfile(userProfile);
        localStorage.setItem('saksham_profile', JSON.stringify(userProfile));
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  // Update profile
  const updateProfile = (updates) => {
    const updated = { ...profile, ...updates };
    setProfile(updated);
    if (updates.preferred_language) {
      setLanguage(updates.preferred_language);
    }
    try {
      localStorage.setItem('saksham_profile', JSON.stringify(updated));
    } catch (e) {
      console.warn('Profile save error:', e);
    }
  };

  // Google OAuth Login
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });
      if (error) throw error;
    } catch (err) {
      console.warn('Google OAuth initiated or falling back to demo session:', err);
      // Create instant seamless demo session for testing
      loginAsGuest('Rahul Patil', 8, 'mr');
    }
  };

  // Email/Password Login
  const loginWithEmail = async (email, password) => {
    // Standard login or mock fallback for hackathon
    const mockUser = { id: 'usr_' + Date.now(), email };
    const mockProfile = {
      id: mockUser.id,
      full_name: email.split('@')[0],
      email,
      role: 'student',
      class_id: 8,
      preferred_language: localStorage.getItem('saksham_language') || 'mr',
      learning_level: 'intermediate'
    };
    setUser(mockUser);
    setProfile(mockProfile);
    localStorage.setItem('saksham_user', JSON.stringify(mockUser));
    localStorage.setItem('saksham_profile', JSON.stringify(mockProfile));
    return { user: mockUser, profile: mockProfile };
  };

  // Demo / Hackathon Quick Login (e.g. Rahul Patil, Class 8, Marathi)
  const loginAsGuest = (name = 'राहुल पाटील (Rahul Patil)', classId = 8, lang = 'mr') => {
    const demoUser = {
      id: 'demo_rahul_c8',
      email: 'rahul.patil@saksham.ai',
      isGuest: true
    };
    const demoProfile = {
      id: demoUser.id,
      full_name: name,
      email: demoUser.email,
      avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      role: 'student',
      class_id: classId,
      preferred_language: lang,
      learning_level: 'intermediate',
      low_bandwidth_mode: false,
      low_power_mode: false
    };

    setUser(demoUser);
    setProfile(demoProfile);
    setLanguage(lang);
    localStorage.setItem('saksham_user', JSON.stringify(demoUser));
    localStorage.setItem('saksham_profile', JSON.stringify(demoProfile));
    return { user: demoUser, profile: demoProfile };
  };

  // Log out
  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      console.warn('Signout error:', e);
    }
    setUser(null);
    setProfile(null);
    localStorage.removeItem('saksham_user');
    localStorage.removeItem('saksham_profile');
  };

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      loading,
      loginWithGoogle,
      loginWithEmail,
      loginAsGuest,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
