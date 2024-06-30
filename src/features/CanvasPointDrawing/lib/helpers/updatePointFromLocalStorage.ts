import { IPointItem } from '@entities/Canvas/types/points-item.type';
import { getPointsFromLocalStorage } from './getPointsFromLocalStorage';

export const updatePointsIntoLocalStorage = (
  newCoords: Pick<IPointItem, 'x' | 'y'>,
  id: IPointItem['id']
) => {
  const points = getPointsFromLocalStorage();

  const updatedPoints = points.map((point) =>
    point.id === id ? { ...point, ...newCoords } : point
  );

  localStorage.setItem('points', JSON.stringify(updatedPoints));
};
