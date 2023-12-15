import { ISectionMainTypes } from '@/common/types/section.types';
import { Box, Group, Space, Text } from '@mantine/core';

const Section = ({
  title,
  icon,
  children,
  height,
  width,
}: ISectionMainTypes) => {
  return (
    <Box className="bg-white rounded-xl p-6" h={height}>
      <Group justify="space-between" className="">
        <Text className="text-black-primary underline font-semibold">
          {title}
        </Text>
        {icon}
      </Group>

      <Space h={16} />
      {children}
    </Box>
  );
};

export default Section;
