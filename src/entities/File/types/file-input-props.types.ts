import { Nullable } from '@shared/types/nullable';

export interface IFileInputProps {
  labelText: string;
  handleChange: (file: Nullable<string | ArrayBuffer>) => void;

  renderResetBtn?: (resetFileCb: () => void) => React.ReactNode;

  handleReset?: () => void;
  handleErrorInvalidType?: () => void;
  handleErrorInvalidSize?: () => void;
}
