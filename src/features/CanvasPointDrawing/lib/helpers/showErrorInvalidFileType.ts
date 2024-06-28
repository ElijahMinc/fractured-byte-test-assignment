import { toast } from 'react-toastify';

export const showErrorInvalidFileType = () => {
  toast.error(`Invalid file type. Valid types of file is png, jpeg`);
};
