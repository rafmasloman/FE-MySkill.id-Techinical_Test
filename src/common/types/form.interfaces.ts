import { UseFormReturnType } from '@mantine/form';

export interface IProfileFormProps {
  name: string;
  position: string;
  description: string;
}

export interface IFormDataProps {
  portfolioName: string;
  portfolioPosition: string;
  company: string;
  startedDate: Date;
  endDate: Date;
  backgroundImage: string;
  profileImage: string;
  portfolioDescription: string;
}

export interface IFormBaseProps {
  value?: string;
  form: UseFormReturnType<any>;
}
