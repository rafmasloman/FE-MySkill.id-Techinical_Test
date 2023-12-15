import { ReactNode } from 'react';

export interface ICardTypesProps {
  title: string;
  description: string;
  startedDate: string;
  endDate: string;
  company: string;

  children?: ReactNode;
}
