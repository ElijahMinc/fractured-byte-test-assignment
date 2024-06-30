import { IPointItem } from '@entities/Canvas/types/points-item.type';

export const getPointsFromLocalStorage = () => {
  const pointsFromStorage = localStorage.getItem('points');

  if (!pointsFromStorage) {
    localStorage.setItem('points', JSON.stringify([]));

    return [];
  }

  const points = JSON.parse(pointsFromStorage);

  return points as IPointItem[];
};
