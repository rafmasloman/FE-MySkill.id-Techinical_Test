import { UseFormReturnType } from '@mantine/form';

export interface IImageUploaderDataProps {
  value?: string;
  onDrop: () => void;
  fileTypes: string[];
  form: UseFormReturnType<any>;
}
