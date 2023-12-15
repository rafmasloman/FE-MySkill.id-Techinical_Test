import { IIconTypes } from '@/common/types/icon.types';

const ICMinimize = ({ size }: IIconTypes) => {
  return (
    <svg
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 9.99999C10.7167 9.99999 10.4793 9.90399 10.288 9.71199C10.096 9.52065 10 9.28332 10 8.99999V2.99999C10 2.71665 10.096 2.47899 10.288 2.28699C10.4793 2.09565 10.7167 1.99999 11 1.99999C11.2833 1.99999 11.521 2.09565 11.713 2.28699C11.9043 2.47899 12 2.71665 12 2.99999V6.59999L17.9 0.699988C18.0833 0.516655 18.3167 0.424988 18.6 0.424988C18.8833 0.424988 19.1167 0.516655 19.3 0.699988C19.4833 0.883321 19.575 1.11665 19.575 1.39999C19.575 1.68332 19.4833 1.91665 19.3 2.09999L13.4 7.99999H17C17.2833 7.99999 17.5207 8.09565 17.712 8.28699C17.904 8.47899 18 8.71665 18 8.99999C18 9.28332 17.904 9.52065 17.712 9.71199C17.5207 9.90399 17.2833 9.99999 17 9.99999H11ZM0.699999 19.3C0.516666 19.1167 0.424999 18.8833 0.424999 18.6C0.424999 18.3167 0.516666 18.0833 0.699999 17.9L6.6 12H3C2.71667 12 2.479 11.904 2.287 11.712C2.09567 11.5207 2 11.2833 2 11C2 10.7167 2.09567 10.479 2.287 10.287C2.479 10.0957 2.71667 9.99999 3 9.99999H9C9.28333 9.99999 9.521 10.0957 9.713 10.287C9.90433 10.479 10 10.7167 10 11V17C10 17.2833 9.90433 17.5207 9.713 17.712C9.521 17.904 9.28333 18 9 18C8.71667 18 8.47933 17.904 8.288 17.712C8.096 17.5207 8 17.2833 8 17V13.4L2.1 19.3C1.91667 19.4833 1.68333 19.575 1.4 19.575C1.11667 19.575 0.883333 19.4833 0.699999 19.3Z"
        fill="#6C7074"
      />
    </svg>
  );
};

export default ICMinimize;
