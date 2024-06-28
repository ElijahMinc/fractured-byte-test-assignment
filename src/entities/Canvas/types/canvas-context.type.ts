import { Nullable } from '@shared/types/nullable';
import { IPointItem } from './points-item.type';

export interface ICanvasContext {
  points: IPointItem[];
  backgroundImage: Nullable<string | ArrayBuffer>;

  handleSetBackgroundImage: (image: Nullable<string | ArrayBuffer>) => void;
  handleSetPoints: (points: IPointItem[]) => void;
}
