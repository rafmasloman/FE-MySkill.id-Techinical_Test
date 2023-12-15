import {
  IFormBaseProps,
  IProfileFormProps,
} from '@/common/types/form.interfaces';
import { Box, Stack, TextInput, Textarea } from '@mantine/core';
import { useForm } from '@mantine/form';

const ProfileForm = ({ form }: IFormBaseProps) => {
  return (
    <Stack gap={20}>
      <TextInput placeholder="Name" {...form.getInputProps('profileName')} />
      <TextInput
        placeholder="Title/Posisi"
        {...form.getInputProps('profilePosition')}
      />
      <Textarea
        placeholder="Deskripsi"
        {...form.getInputProps('profileDescription')}
        styles={{
          input: {
            height: 128,
          },
        }}
      />
    </Stack>
  );
};

export default ProfileForm;
