import { ReactNode } from 'react';

declare module 'react-awesome-reveal' {
  interface FadeProps {
    children?: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    triggerOnce?: boolean;
  }

  interface SlideProps {
    children?: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    triggerOnce?: boolean;
  }

  export const Fade: React.FC<FadeProps>;
  export const Slide: React.FC<SlideProps>;
} 