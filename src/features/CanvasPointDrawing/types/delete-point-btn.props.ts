import { ButtonProps } from '@shared/ui/Button/button.types';

export interface IDeletePointBtnProps extends Omit<ButtonProps, 'id'> {
  id: number;
}
