import { CanvasPointDrawingContext, ICanvasContext } from '@entities/Canvas';
import { IPointItem } from '@entities/Canvas/types/points-item.type';
import { Nullable } from '@shared/types/nullable';
import { useState } from 'react';

export const CanvasPointDrawingProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [points, setPoints] = useState<IPointItem[]>([]);
  const [backgroundImage, setBackgroundImage] =
    useState<Nullable<string | ArrayBuffer>>(null);

  const handleSetBackgroundImage = (image: Nullable<string | ArrayBuffer>) =>
    setBackgroundImage(image);
  const handleSetPoints = (points: IPointItem[]) => setPoints(points);

  const value: ICanvasContext = {
    points,
    backgroundImage,
    handleSetBackgroundImage,
    handleSetPoints,
  };

  return (
    <CanvasPointDrawingContext.Provider value={value}>
      {children}
    </CanvasPointDrawingContext.Provider>
  );
};
