import { CanvasSizes } from '@entities/Canvas/constants/canvas-sizes';
import { BaseCanvas } from '@shared/ui/BaseCanvas';
import { Image, Line } from 'react-konva';
import useImage from 'use-image';
import { PointsItem } from '@entities/Canvas/ui/PointsItem';
import { useCanvasPointDrawing } from '@entities/Canvas';
import { CircleDragEventType } from '../../types/circle-drag-event.type';
import { getWithinCanvasLayoutStatus } from '../../lib/helpers/getWithinCanvasLayoutStatus';
import { defaultDotRadius } from '@entities/Canvas/constants/default-dot-radius';
import { defaultStrokeWidth } from '@entities/Canvas/constants/default-stroke-width';
import { getEvenNumber } from '@features/CanvasPointDrawing/lib/helpers/getEvenNumber';
import { debounce } from '@shared/lib/helpers/debounce';
import { updatePointsIntoLocalStorage } from '@features/CanvasPointDrawing/lib/helpers/updatePointFromLocalStorage';

// styles
import styles from './CanvasPointDrawing.module.css';

export const CanvasPointDrawing = () => {
  const { points, backgroundImage, handleSetPoints } = useCanvasPointDrawing();

  const [image] = useImage((backgroundImage ?? '') as string);

  const linePoints = points.flatMap((point) => [
    point.x + defaultDotRadius,
    point.y + defaultDotRadius,
  ]);

  const handleDragMove = (e: Event, id: number) => {
    if (!e.target) return;

    const { x, y } = (e.target as CircleDragEventType).position();

    const newCoords = { x: getEvenNumber(x), y: getEvenNumber(y) };

    const isAvailable = getWithinCanvasLayoutStatus(newCoords);

    if (!isAvailable) {
      const prevPointPosition = points.find((p) => p.id === id);

      if (!prevPointPosition) return;

      (e.target as CircleDragEventType).position({
        x: prevPointPosition.x,
        y: prevPointPosition.y,
      });
      return;
    }

    handleSetPoints(
      points.map((point) =>
        point.id === id ? { ...point, ...{ id, ...newCoords } } : point
      )
    );

    debounce(() => {
      updatePointsIntoLocalStorage(newCoords, id);
    }, 500)();
  };

  return (
    <div className={styles.wrapper}>
      <BaseCanvas width={CanvasSizes.WIDTH} height={CanvasSizes.HEIGHT}>
        {image && (
          <Image
            image={image}
            width={CanvasSizes.WIDTH}
            height={CanvasSizes.HEIGHT}
          />
        )}
        <Line
          points={linePoints}
          stroke="black"
          strokeWidth={defaultStrokeWidth}
          draggable
        />

        {points.map((point) => (
          <PointsItem
            key={point.id}
            point={point}
            konvaProps={{
              fill: '#646cff',
              draggable: true,
              onDragMove: (e: Event) => handleDragMove(e, point.id),
            }}
          />
        ))}
      </BaseCanvas>
    </div>
  );
};
