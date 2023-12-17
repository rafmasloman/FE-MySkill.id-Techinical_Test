import { TextInput, Textarea } from '@mantine/core';
import { DateInput } from '@mantine/dates';

export const CustomeTheme = {
  components: {
    TextInput: TextInput.extend({
      styles: {
        input: {
          height: 56,
          borderRadius: 8,
          fontFamily: 'Poppins',
        },
      },
    }),
    Textarea: Textarea.extend({
      styles: {
        input: {
          height: 128,
          borderRadius: 8,
          fontFamily: 'Poppins',
          paddingTop: 16,
        },
      },
    }),
    DateInput: DateInput.extend({
      styles: {
        input: {
          height: 64,
          borderRadius: 8,
          fontFamily: 'Poppins',
        },
      },
    }),
  },
};
