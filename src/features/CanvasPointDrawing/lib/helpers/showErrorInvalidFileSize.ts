import { toast } from 'react-toastify';

export const showErrorInvalidFileSize = () => {
  toast.error(`Invalid file size. Valid size of file is 2mb`);
};
