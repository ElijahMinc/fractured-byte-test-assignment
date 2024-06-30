import { IPointItem } from '@entities/Canvas/types/points-item.type';
import { getPointsFromLocalStorage } from './getPointsFromLocalStorage';

export const deletePointsIntoLocalStorageById = (id: IPointItem['id']) => {
  const points = getPointsFromLocalStorage();

  const updatedPoints = points.filter((point) => point.id !== id);

  localStorage.setItem('points', JSON.stringify(updatedPoints));
};
