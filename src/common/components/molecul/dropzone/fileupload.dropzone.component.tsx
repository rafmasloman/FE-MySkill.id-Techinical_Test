import ICAttach from '@/assets/icons/attachment.icon';
import { COLORS } from '@/common/constant/colors.contant';
import { IFormBaseProps } from '@/common/types/form.interfaces';
import { IImageUploaderDataProps } from '@/common/types/uploader.interfaces';
import { Text } from '@mantine/core';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';

const ImageUploader = ({
  form,
  value,
  onDrop,
  fileTypes,
}: IImageUploaderDataProps) => {
  return (
    <Dropzone
      //   accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.mp4]}
      accept={fileTypes}
      onDrop={onDrop}
      styles={{
        root: {
          height: 200,
          backgroundColor: COLORS.DROPZONE_BG,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
      {...form.getInputProps(value!)}
    >
      <div className=" h-fit flex flex-col items-center gap-1">
        <ICAttach size="24" />
        <Text
          ta="center"
          className="font-medium font-poppins underline text-dropzone-gray-text text-xs lg:text-base"
        >
          Drag and drop files, or <span className="text-blue-500">Browse</span>
        </Text>
        <Text
          ta="center"
          className=" font-poppins underline  text-xs text-[#9F9F9F]  lg:text-sm"
        >
          Support formats : png, jpg, jpeg, mp4.
        </Text>

        <Text
          ta="center"
          className=" font-poppins underline  text-xs text-[#9F9F9F] lg:text-sm"
        >
          Max size : 500Mb
        </Text>
      </div>
    </Dropzone>
  );
};

export default ImageUploader;
