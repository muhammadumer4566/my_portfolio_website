export { default as About } from './about/about';
export { default as Contacts } from './contacts/contacts';
export { default as Education } from './education/education';
export { default as Experience } from './experience/experience';
export { default as Landing } from './landing/landing';
export { default as Navbar } from './navbar/navbar';
export { default as SingleProject } from './projects/project-card/project-card';
export { default as Projects } from './projects/projects';
export { default as Skills } from './skills/skills';

// Dynamic import for client-side only WhatsAppButton
import dynamic from 'next/dynamic';
export const WhatsAppButton = dynamic(
  () => import('./whatsApp/WhatsAppButton'),
  { ssr: false } // important for Vercel build
);