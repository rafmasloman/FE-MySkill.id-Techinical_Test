import { IFormBaseProps } from '@/common/types/form.interfaces';
import {
  Box,
  Group,
  SimpleGrid,
  Stack,
  TextInput,
  Textarea,
} from '@mantine/core';
import { DateInput } from '@mantine/dates';

const PortfolioForm = ({ form }: IFormBaseProps) => {
  return (
    <Stack gap={20} className="">
      <TextInput placeholder="Nama" {...form.getInputProps('portfolioName')} />
      <TextInput
        placeholder="Posisi"
        {...form.getInputProps('portfolioPosition')}
      />
      <TextInput placeholder="Perusahaan" {...form.getInputProps('company')} />
      <SimpleGrid cols={2}>
        <DateInput
          placeholder="Tanggal Mulai"
          {...form.getInputProps('startedDate')}
        />
        <DateInput
          placeholder="Tanggal Selesai"
          {...form.getInputProps('endDate')}
        />
      </SimpleGrid>
      <Textarea
        placeholder="Deskripsi"
        {...form.getInputProps('portfolioDescription')}
        styles={{
          input: {
            height: 128,
          },
        }}
      />
    </Stack>
  );
};

export default PortfolioForm;
