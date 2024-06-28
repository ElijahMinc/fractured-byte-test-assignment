import { useCanvasPointDrawing } from '@entities/Canvas';
import { RemoveBackgroundButton } from '../RemoveBackgroundButton';
import { showErrorInvalidFileType } from '@features/CanvasPointDrawing/lib/helpers/showErrorInvalidFileType';
import { showErrorInvalidFileSize } from '@features/CanvasPointDrawing/lib/helpers/showErrorInvalidFileSize';
import { FileInput } from '@entities/File';

// styles
import styles from './BackgroundImageUploader.module.css';

export const BackgroundImageUploader = () => {
  const { handleSetBackgroundImage, backgroundImage } = useCanvasPointDrawing();

  const handleResetImage = () => handleSetBackgroundImage(null);

  return (
    <div className={styles.uploader}>
      <FileInput
        labelText="Upload background"
        handleChange={handleSetBackgroundImage}
        handleErrorInvalidSize={showErrorInvalidFileSize}
        handleErrorInvalidType={showErrorInvalidFileType}
        handleReset={handleResetImage}
        renderResetBtn={(resetFileCb) =>
          backgroundImage && (
            <RemoveBackgroundButton
              className={styles.button}
              onClick={resetFileCb}
            />
          )
        }
      />
    </div>
  );
};
