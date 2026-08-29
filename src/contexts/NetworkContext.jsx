import React, { createContext, useContext, useState, useEffect } from 'react';
import { syncService } from '../services/syncService';

const NetworkContext = createContext(null);

export function NetworkProvider({ children }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSimulatedOffline, setIsSimulatedOffline] = useState(false);
  const [syncStatus, setSyncStatus] = useState('synced');
  const [lastSyncTime, setLastSyncTime] = useState(null);
  const [pendingCount, setPendingCount] = useState(0);

  // Settings
  const [lowBandwidthMode, setLowBandwidthModeState] = useState(() => {
    return localStorage.getItem('saksham_low_bandwidth') === 'true';
  });

  const [lowPowerMode, setLowPowerModeState] = useState(() => {
    return localStorage.getItem('saksham_low_power') === 'true';
  });

  // Effective online state
  const effectiveOnline = isOnline && !isSimulatedOffline;

  // Listen to browser network changes
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      if (!isSimulatedOffline) {
        syncService.status = 'synced';
        syncService.notifyListeners();
        syncService.processQueue();
      }
    };

    const handleOffline = () => {
      setIsOnline(false);
      syncService.status = 'offline';
      syncService.notifyListeners();
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Subscribe to sync service state
    const unsubscribe = syncService.subscribe((state) => {
      if (isSimulatedOffline) {
        setSyncStatus('offline');
      } else {
        setSyncStatus(state.status);
        setLastSyncTime(state.lastSyncTime);
      }
      syncService.getPendingCount().then(setPendingCount);
    });

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      unsubscribe();
    };
  }, [isSimulatedOffline]);

  // Toggle simulated offline for demo
  const toggleSimulatedOffline = (forceState) => {
    setIsSimulatedOffline((prev) => {
      const next = forceState !== undefined ? forceState : !prev;
      if (next) {
        setSyncStatus('offline');
      } else {
        setSyncStatus(navigator.onLine ? 'synced' : 'offline');
        if (navigator.onLine) {
          syncService.processQueue();
        }
      }
      return next;
    });
  };

  const triggerSync = async () => {
    if (!effectiveOnline) return;
    await syncService.processQueue();
    const count = await syncService.getPendingCount();
    setPendingCount(count);
  };

  const setLowBandwidthMode = (val) => {
    setLowBandwidthModeState(val);
    localStorage.setItem('saksham_low_bandwidth', val ? 'true' : 'false');
  };

  const setLowPowerMode = (val) => {
    setLowPowerModeState(val);
    localStorage.setItem('saksham_low_power', val ? 'true' : 'false');
    if (val) {
      document.body.classList.add('low-power-mode');
    } else {
      document.body.classList.remove('low-power-mode');
    }
  };

  return (
    <NetworkContext.Provider value={{
      isOnline: effectiveOnline,
      rawIsOnline: isOnline,
      isSimulatedOffline,
      toggleSimulatedOffline,
      syncStatus: isSimulatedOffline ? 'offline' : syncStatus,
      lastSyncTime,
      pendingCount,
      triggerSync,
      lowBandwidthMode,
      setLowBandwidthMode,
      lowPowerMode,
      setLowPowerMode
    }}>
      {children}
    </NetworkContext.Provider>
  );
}

export function useNetwork() {
  const context = useContext(NetworkContext);
  if (!context) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  return context;
}
