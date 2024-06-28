import { Circle } from 'react-konva';
import { IPointItem } from '../types/points-item.type';
import Konva from 'konva';
import { defaultDotRadius } from '../constants/default-dot-radius';

interface IPointsItemProps {
  point: IPointItem;

  radius?: number;

  konvaProps: Konva.CircleConfig;
}

// because we can have a lot of Canvases. We just follow SOLID principles
export const PointsItem = ({
  point: { x, y },
  radius = defaultDotRadius,
  konvaProps,
}: IPointsItemProps) => (
  <Circle x={x + radius} y={y + radius} radius={radius} {...konvaProps} />
);
