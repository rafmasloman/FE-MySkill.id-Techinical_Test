import { Inter, Poppins } from 'next/font/google';
import {
  Box,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Avatar,
  Title,
} from '@mantine/core';
import Section from '@/common/components/molecul/section/section.component';
import ICMinimize from '@/assets/icons/minimize.icon';
import BG_PROFILE from '@/assets/images/bg_test.png';
import PROFILE_IMG from '@/assets/images/avatar_test.png';
import PortfolioCard from '@/common/components/atoms/card/card.component';
import PortfolioForm from '@/common/components/molecul/form/portfolio.form';
import { useForm } from '@mantine/form';
import { IFormDataProps } from '@/common/types/form.interfaces';
import ProfileForm from '@/common/components/molecul/form/profile.form';
import Button from '@/common/components/atoms/button/button.component';
import { COLORS } from '@/common/constant/colors.contant';
import { IconPlus } from '@tabler/icons-react';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import dropzone_styles from './';
import ICAttach from '@/assets/icons/attachment.icon';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Home() {
  const form = useForm<IFormDataProps>({
    initialValues: {
      portfolioName: '',
      company: '',
      portfolioPosition: '',
      portfolioDescription: '',
      backgroundImage: '',
      profileImage: '',
      startedDate: new Date(),
      endDate: new Date(),
    },
  });

  return (
    <main
      className={`flex bg-white-primary min-h-screen flex-col items-center justify-between p-4 lg:p-24 ${inter.className}`}
    >
      <Container size={'100%'}>
        <SimpleGrid cols={{ base: 1, md: 2 }} className="w-full">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Stack>
              <Group>
                <Button
                  text="Add Portfolio"
                  variant="outline"
                  color={COLORS.LIGHT_BLUE}
                  leftIcon={<IconPlus size={15} color={COLORS.LIGHT_BLUE} />}
                  radius="md"
                  disable={false}
                  bg="white"
                  type="submit"
                />
                <Button
                  text="Simpan Perubahan"
                  variant="filled"
                  radius="md"
                  disable={true}
                  bg={COLORS.DISABLE_COLOR}
                />
              </Group>

              <Section
                title="Background Image"
                icon={<ICMinimize size="15" />}
                height="fit-content"
              >
                <Dropzone
                  accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.mp4]}
                  onDrop={() => {}}
                  styles={{
                    root: {
                      height: 200,
                      backgroundColor: COLORS.DROPZONE_BG,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  }}
                  {...form.getInputProps('backgroundImage')}
                >
                  <div className=" h-fit flex flex-col items-center gap-1">
                    <ICAttach size="24" />
                    <Text
                      ta="center"
                      className="font-medium font-poppins underline text-dropzone-gray-text"
                    >
                      Drag and drop files, or{' '}
                      <span className="text-blue-500">Browse</span>
                    </Text>
                    <Text
                      ta="center"
                      className=" font-poppins underline  text-sm text-[#9F9F9F]"
                    >
                      Support formats : png, jpg, jpeg, mp4.
                    </Text>

                    <Text
                      ta="center"
                      className=" font-poppins underline  text-sm text-[#9F9F9F]"
                    >
                      Max size : 500Mb
                    </Text>
                  </div>
                </Dropzone>
              </Section>

              <Section
                title="Profile Image"
                icon={<ICMinimize size="15" />}
              ></Section>

              <Section title="Profile" icon={<ICMinimize size="15" />}>
                <ProfileForm form={form} />
              </Section>

              <Section title="Portfolio 1" icon={<ICMinimize size="15" />}>
                <PortfolioForm form={form} />
              </Section>
            </Stack>
          </form>

          <Box bg={'white'} className="rounded-lg pb-20">
            <Image
              src={BG_PROFILE.src}
              alt="Background Image"
              className="rounded-t-xl"
            />

            <Stack className="px-16">
              <Stack align="center" mt={-100}>
                <Avatar src={PROFILE_IMG.src} size={150} />

                <Stack justify="center" align="center" gap={0}>
                  <Title className="text-black-primary">Nama</Title>
                  <Title order={3} className="text-gray-primary">
                    Title
                  </Title>
                  <Text ta={'center'} className="text-black-primary text-sm">
                    Deskripsi, lorem ipsum dolor sit amet lorem ipsum dolor sit
                    amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet{' '}
                  </Text>
                </Stack>
              </Stack>

              <Box className="mt-5">
                <Text className="text-black-primary font-bold">Portfolio</Text>

                <Stack mt={12}>
                  <PortfolioCard
                    title="Front End Developer"
                    company="MySkill"
                    description="Deskripsi, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet "
                    startedDate="Januari 2023"
                    endDate="Desember 2023"
                  />

                  <PortfolioCard
                    title="Front End Developer"
                    company="MySkill"
                    description="Deskripsi, lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet "
                    startedDate="Januari 2023"
                    endDate="Desember 2023"
                  />
                </Stack>
              </Box>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </main>
  );
}
