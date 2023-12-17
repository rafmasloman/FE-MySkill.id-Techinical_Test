import '@mantine/dropzone/styles.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@/styles/globals.css';

import { MantineProvider, TextInput, createTheme } from '@mantine/core';
import type { AppProps } from 'next/app';
import { CustomeTheme } from '@/common/utils/theme.utils';

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme(CustomeTheme);

  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
