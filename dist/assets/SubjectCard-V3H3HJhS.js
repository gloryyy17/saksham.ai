import{e as a,u as i,f as m,d as h,B as r,F as p,j as e,c as x}from"./index-wP-Dav8U.js";import{C as u}from"./calculator-XMtgWOUz.js";import{A as k}from"./arrow-right-BQfjR-l_.js";/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],f=a("Atom",y);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M10 2v8l3-3 3 3V2",key:"sqw3rj"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],g=a("BookMarked",b);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]],v=a("Dna",j);/**
 * @license lucide-react v0.477.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],w=a("Globe",N),M={Calculator:u,FlaskConical:p,Atom:f,Dna:v,BookOpen:r,Languages:h,BookMarked:g,Globe:w};function C({subject:t}){const{language:s,t:n}=i(),{getSubjectProgress:l}=m();if(!t)return null;const c=M[t.icon]||r,o=l(t.id),d=s==="mr"?t.name_mr:s==="hi"?t.name_hi:t.name;return e.jsxs(x,{to:`/subject/${t.id}`,className:"saksham-card p-5 group flex flex-col justify-between hover:-translate-y-1 transition-all",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("div",{className:"w-12 h-12 rounded-2xl bg-brand-50 text-brand-800 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform",children:e.jsx(c,{className:"w-6 h-6 text-brand-800"})}),e.jsxs("span",{className:"text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full",children:[o,"% ",n("completed")]})]}),e.jsx("h3",{className:"text-sm font-bold text-slate-900 group-hover:text-brand-800 transition line-clamp-1 mb-1",children:d}),e.jsx("p",{className:"text-[11px] text-slate-500 font-medium",children:"Maharashtra State Board"})]}),e.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-100",children:[e.jsx("div",{className:"w-full bg-slate-100 h-2 rounded-full overflow-hidden mb-3",children:e.jsx("div",{className:"bg-gradient-to-r from-brand-800 to-teal-600 h-full rounded-full transition-all duration-500",style:{width:`${o}%`}})}),e.jsxs("div",{className:"flex items-center justify-between text-xs font-bold text-brand-800",children:[e.jsx("span",{children:n("exploreSubjects")}),e.jsx(k,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]})]})]})}export{C as S};
