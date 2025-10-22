
import { SVGProps } from 'react';

export const UserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

export const BotIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 11h-1.55c-.23-1.12-.68-2.16-1.3-3.07l1.1-1.1c.39-.39.39-1.02 0-1.41l-2.12-2.12c-.39-.39-1.02-.39-1.41 0l-1.1 1.1C11.66 4.23 10.63 3.78 9.5 3.55V2c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1.55c-1.12.23-2.16.68-3.07 1.3l-1.1-1.1c-.39-.39-1.02-.39-1.41 0L.3 5.86c-.39.39-.39 1.02 0 1.41l1.1 1.1C.73 9.34.28 10.37.05 11.5H2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h1.55c.23 1.12.68 2.16 1.3 3.07l-1.1 1.1c-.39-.39-.39-1.02 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l1.1-1.1c.91.62 1.95 1.07 3.07 1.3V22c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1.55c1.12-.23 2.16-.68 3.07-1.3l1.1 1.1c.39.39 1.02.39 1.41 0l2.12-2.12c.39-.39.39-1.02 0-1.41l-1.1-1.1c.62-.91 1.07-1.95 1.3-3.07H22c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-7 4c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
    </svg>
);

export const SendIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);
