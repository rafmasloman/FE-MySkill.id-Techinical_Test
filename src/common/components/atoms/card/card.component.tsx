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
    <Card shadow="sm" className="lg:px-6">
      <Stack>
        <Stack gap={0}>
          <Title
            order={4}
            className="font-poppins font-medium text-sm lg:text-base"
          >
            {title}
          </Title>
          <Text className="text-gray-primary font-poppins font-medium text-sm lg:text-base">
            {company}
          </Text>
          <Text className="text-gray-primary font-poppins text-xs lg:text-base">
            {startedDate} - {endDate}
          </Text>
        </Stack>

        <Text className="text-xs font-inter lg:text-base">{description}</Text>
      </Stack>
    </Card>
  );
};

export default PortfolioCard;
