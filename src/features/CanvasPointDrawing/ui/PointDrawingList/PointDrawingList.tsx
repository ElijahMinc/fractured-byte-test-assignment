import { PointDrawingItem } from '../PointDrawingItem/PointDrawingItem';
import { useCanvasPointDrawing } from '@entities/Canvas';

import { useRef } from 'react';
import { Nullable } from '@shared/types/nullable';

// styles
import styles from './PointDrawingList.module.css';
import { useScrollToBottomByContainerRef } from '@features/CanvasPointDrawing/lib/hooks/use-scroll-to-bottom-by-container-ref.hook';

export const PointDrawingList = () => {
  const listRef = useRef<Nullable<HTMLDivElement>>(null);

  const { points } = useCanvasPointDrawing();

  useScrollToBottomByContainerRef<HTMLDivElement>(
    listRef,
    JSON.stringify(points.length)
  );

  const isEmpty = !points.length;

  const emptyListText = 'The list of points is empty';

  return (
    <div ref={listRef} className={styles.wrapper}>
      {!isEmpty ? (
        <ul className={styles.list}>
          {points.map((point) => (
            <PointDrawingItem key={point.id} point={point} />
          ))}
        </ul>
      ) : (
        <h3 className={styles.title}>{emptyListText}</h3>
      )}
    </div>
  );
};
