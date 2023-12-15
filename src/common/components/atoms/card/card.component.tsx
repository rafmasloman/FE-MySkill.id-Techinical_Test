import { ICardTypesProps } from '@/common/types/card.interfaces';
import { Card, Stack, Text, Title } from '@mantine/core';

const PortfolioCard = ({
  title,
  description,
  startedDate,
  endDate,
  company,
  children,
}: ICardTypesProps) => {
  return (
    <Card shadow="sm" px={25}>
      <Stack>
        <Stack gap={0}>
          <Title order={4} className="font-poppins font-medium">
            {title}
          </Title>
          <Text className="text-gray-primary font-poppins font-medium text-sm">
            {company}
          </Text>
          <Text className="text-gray-primary font-poppins text-sm">
            {startedDate} - {endDate}
          </Text>
        </Stack>

        <Text className="text-sm font-inter">{description}</Text>
      </Stack>
    </Card>
  );
};

export default PortfolioCard;
