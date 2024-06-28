import { isValidFileSize } from '@shared/lib/helpers/isValidFileBySize';
import { isValidFileByTypes } from '@shared/lib/helpers/isValidFileByTypes';
import { useRef, useState } from 'react';
import { IFileInputProps } from '../../types/file-input-props.types';
import { Nullable } from '@shared/types/nullable';
import { Input } from '@shared/ui/Input';
import { Button } from '@shared/ui/Button';

// styles
import styles from './FileInput.module.css';

export const FileInput = ({
  labelText,
  handleChange,
  handleErrorInvalidSize,
  handleErrorInvalidType,
  handleReset,
  renderResetBtn,
}: IFileInputProps) => {
  const [file, setFile] = useState<Nullable<string | ArrayBuffer>>(null);
  const [fileName, setFileName] = useState<Nullable<string>>(null);
  const inputFileRef = useRef<Nullable<HTMLInputElement>>(null);

  const handleUpload = (e: unknown) => {
    if (!inputFileRef.current) return;

    const target = (e as Event).target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    if (!isValidFileByTypes(file.type)) {
      handleErrorInvalidType?.();
      setFile(null);
      inputFileRef.current.value = '';
      return;
    }

    if (!isValidFileSize(file.size)) {
      handleErrorInvalidSize?.();
      setFile(null);
      inputFileRef.current.value = '';
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setFile(reader.result);
      setFileName(file.name);

      handleChange(reader.result);
    };

    reader.onabort = () => {
      setFile(null);
      setFileName(null);
      handleChange(null);
    };

    reader.onerror = () => {
      setFile(null);
      setFileName(null);
      handleChange(null);
    };

    reader.readAsDataURL(file);
  };

  const resetFileCb = () => {
    if (!inputFileRef.current) return;
    setFileName(null);
    setFile(null);
    inputFileRef.current.value = '';
    handleReset?.();
  };

  const triggerInput = () => {
    inputFileRef.current?.click();
  };

  return (
    <>
      <Input
        ref={inputFileRef}
        id="fileInput"
        type="file"
        className={styles.fileInput}
        onChange={handleUpload}
      />

      {!file ? (
        <label
          htmlFor="fileInput"
          className={styles.fileInputLabel}
          onClick={triggerInput}
        >
          <Button appearence="primary">{labelText}</Button>
        </label>
      ) : (
        <div className={styles.fileNameWrapper}>
          <span className={styles.fileName}>{fileName}</span>
          {!renderResetBtn ? (
            <Button
              appearence="error"
              className={styles.fileNameButton}
              onClick={resetFileCb}
            >
              🗑️
            </Button>
          ) : (
            renderResetBtn(resetFileCb)
          )}
        </div>
      )}
    </>
  );
};
