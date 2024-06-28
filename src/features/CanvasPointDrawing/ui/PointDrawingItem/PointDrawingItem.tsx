import { useEffect, useState } from 'react';
import { UpdatePointButton } from '../UpdatePointButton';
import { IPointItem } from '@entities/Canvas/types/points-item.type';
import { Input } from '@shared/ui/Input';
import { DeletePointButton } from '../DeletePointButton';
import { Button } from '@shared/ui/Button';
import { getWithinCanvasLayoutStatus } from '@features/CanvasPointDrawing/lib/helpers/getWithinCanvasLayoutStatus';

// styles
import cn from 'classnames';
import styles from './PointDrawingItem.module.css';

export const PointDrawingItem = ({ point }: { point: IPointItem }) => {
  const [editing, setEditing] = useState(false);
  const [coords, setCoords] = useState({ x: point.x, y: point.y });

  const handleEdit = () => setEditing(true);

  const handleSave = () => setEditing(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const amount = +value;

    if (isNaN(amount)) return;

    const isAvaliable = getWithinCanvasLayoutStatus({
      ...coords,
      [name]: amount,
    });

    if (!isAvaliable) {
      return;
    }

    setCoords((prevCoords) => ({ ...prevCoords, [name]: Number(amount) }));
  };

  useEffect(() => {
    setCoords({ x: point.x, y: point.y });
  }, [JSON.stringify(point)]);

  return (
    <li className={styles.listItem}>
      {editing ? (
        <div className={styles.editingProccesswrapper}>
          <Input
            type="text"
            name="x"
            value={coords.x}
            labelOptions={{
              text: 'X',
            }}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="y"
            labelOptions={{
              text: 'Y',
            }}
            value={coords.y}
            onChange={handleChange}
          />
          <UpdatePointButton
            id={point.id}
            className={styles.button}
            newCoords={coords}
            onClick={handleSave}
          />
        </div>
      ) : (
        <div className={styles.passiveEditWrapper}>
          <span>ID: {point.id}</span> <span>X: {point.x}</span>
          <span>Y: {point.y}</span>
          <Button
            className={cn(styles.button, styles.editButton)}
            onClick={handleEdit}
          >
            Edit
          </Button>
          <DeletePointButton className={styles.button} id={point.id} />
        </div>
      )}
    </li>
  );
};
