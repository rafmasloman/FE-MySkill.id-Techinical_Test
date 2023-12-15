import { IButtonProps } from '@/common/types/button.interfaces';
import { Button as ButtonMantine } from '@mantine/core';

const Button = ({
  text,
  variant,
  color,
  radius,
  type,
  rightIcon,
  leftIcon,
  disable,
  bg,
}: IButtonProps) => {
  return (
    <ButtonMantine
      variant={variant}
      color={color}
      radius={radius}
      type={type}
      rightSection={rightIcon}
      leftSection={leftIcon}
      disabled={disable}
      bg={bg}
      className="h-[48px]"
    >
      {text}
    </ButtonMantine>
  );
};

export default Button;
