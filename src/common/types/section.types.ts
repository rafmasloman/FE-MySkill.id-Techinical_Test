import { ReactNode } from 'react';

export interface ISectionMainTypes {
  title: string;
  icon: ReactNode;
  children?: ReactNode;
  width?: string;
  height?: string;
  isMinimize?: boolean;
}
