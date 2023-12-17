import { COLORS } from '@/common/constant/colors.contant';
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

const PortfolioForm = ({ form, sectionId }: IFormBaseProps) => {
  return (
    <Stack gap={20} className="">
      <TextInput
        placeholder="Nama"
        {...form!.getInputProps(`portfolioName_${sectionId}`)}
        styles={{
          input: {},
        }}
        // className="placeholder:text-red-500 text-red-500"
      />
      <TextInput
        placeholder="Posisi"
        {...form!.getInputProps(`portfolioPosition_${sectionId}`)}
      />
      <TextInput
        placeholder="Perusahaan"
        {...form!.getInputProps(`company_${sectionId}`)}
      />
      <SimpleGrid cols={2}>
        <DateInput
          placeholder="Tanggal Mulai"
          {...form!.getInputProps(`startedDate_${sectionId}`)}
        />
        <DateInput
          placeholder="Tanggal Selesai"
          {...form!.getInputProps(`endDate_${sectionId}`)}
        />
      </SimpleGrid>
      <Textarea
        placeholder="Deskripsi"
        {...form!.getInputProps(`portfolioDescription_${sectionId}`)}
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
