import { validFileTypes } from '@shared/constants/file-types.constants';

export const isValidFileByTypes = (fileType: string) =>
  validFileTypes.includes(fileType);
