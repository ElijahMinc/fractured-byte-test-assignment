import { fileSizeLimit } from '@shared/constants/max-file-size.constant';
import { toast } from 'react-toastify';

export const showErrorInvalidFileSize = () => {
  toast.error(`Invalid file size. Valid size of file is ${fileSizeLimit}`);
};
