import { fileSizeLimit } from '@shared/constants/max-file-size.constant';

export const isValidFileSize = (fileSize: number) => fileSize < fileSizeLimit;
