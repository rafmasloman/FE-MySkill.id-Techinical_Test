import { ReactNode } from 'react';

export interface IButtonProps {
  text: string;
  variant: string;
  color?: string;
  radius?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  disable?: boolean;
  bg?: string;
}
