import { IPointItem } from '@entities/Canvas/types/points-item.type';
import { getPointsFromLocalStorage } from './getPointsFromLocalStorage';

export const addPointsIntoLocalStorage = (newPoint: IPointItem) => {
  const points = getPointsFromLocalStorage();

  const updatedPoints = [...points, newPoint];

  localStorage.setItem('points', JSON.stringify(updatedPoints));
};
