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
import ImageUploader from '@/common/components/molecul/dropzone/fileupload.dropzone.component';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Home() {
  const [portfolioSection, setPortfolioSection] = useState([{ id: 1 }]);
  const [storeData, setStoreData] = useState<any>({});

  const handleAddPortfolioSection = () => {
    setPortfolioSection((prevSections) => [
      ...prevSections,
      { id: prevSections.length + 1 },
    ]);
  };

  const form = useForm<IFormDataProps>({
    // initialValues: {
    //   portfolioName: '',
    //   company: '',
    //   portfolioPosition: '',
    //   portfolioDescription: '',
    //   backgroundImage: '',
    //   profileImage: '',
    //   startedDate: new Date(),
    //   endDate: new Date(),
    // },
  });

  const storeDataToLocal = form.onSubmit((values) => {
    localStorage.setItem('userData', JSON.stringify(values));
    setStoreData(localStorage.setItem('userData', JSON.stringify(values)));
  });

  // const getData = localStorage.getItem('userData');

  console.log('data : ', storeData);

  return (
    <main
      className={`flex bg-white-primary min-h-screen flex-col items-center justify-between p-4 lg:p-24 ${inter.className}`}
    >
      <Container size={'100%'} className="relative">
        <SimpleGrid cols={{ base: 1, md: 2 }} className="w-full">
          <form onSubmit={storeDataToLocal}>
            <Stack>
              <Group className="lg:absolute lg:-top-16 ">
                <Button
                  text="Add Portfolio"
                  variant="outline"
                  color={COLORS.LIGHT_BLUE}
                  leftIcon={<IconPlus size={15} color={COLORS.LIGHT_BLUE} />}
                  radius="md"
                  disable={false}
                  bg="white"
                  onClick={handleAddPortfolioSection}

                  // type="submit"
                />
                <Button
                  text="Simpan Perubahan"
                  variant="filled"
                  radius="md"
                  type="submit"
                  bg={COLORS.DISABLE_COLOR}
                />
              </Group>

              <Section title="Background Image" icon={<ICMinimize size="15" />}>
                <ImageUploader
                  form={form}
                  value="backgroundImage"
                  onDrop={() => {}}
                  fileTypes={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.mp4]}
                />
              </Section>

              <Section title="Profile Image" icon={<ICMinimize size="15" />}>
                <ImageUploader
                  form={form}
                  value="profileImage"
                  onDrop={() => {}}
                  fileTypes={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.mp4]}
                />
              </Section>

              <Section title="Profile" icon={<ICMinimize size="15" />}>
                <ProfileForm form={form} />
              </Section>

              {portfolioSection.map((portfolio) => {
                return (
                  <Section
                    key={portfolio.id}
                    title={`Portfolio ${portfolio.id}`}
                    icon={<ICMinimize size="15" />}
                  >
                    <PortfolioForm form={form} sectionId={portfolio.id} />
                  </Section>
                );
              })}
            </Stack>
          </form>

          <Box bg={'white'} className="rounded-lg pb-20">
            <Image
              src={BG_PROFILE.src}
              alt="Background Image"
              className="rounded-t-xl"
            />

            <Stack className="px-4 lg:px-16">
              <Stack align="center" className="-mt-[50px] lg:-mt-[100px]">
                <Avatar
                  src={PROFILE_IMG.src}
                  className="w-[70px] h-[70px] lg:w-[150px] lg:h-[150px]"
                />

                <Stack justify="center" align="center" gap={0}>
                  <Title className="text-black-primary text-xl lg:text-2xl">
                    Nama
                  </Title>
                  <Title
                    order={3}
                    className="text-gray-primary text-base lg:text-xl"
                  >
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
