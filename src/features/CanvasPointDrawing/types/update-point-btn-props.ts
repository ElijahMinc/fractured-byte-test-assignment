import { ButtonProps } from '@shared/ui/Button/button.types';

export interface IUpdatePointBtnProps extends Omit<ButtonProps, 'id'> {
  id: number;
  newCoords: any;
}
