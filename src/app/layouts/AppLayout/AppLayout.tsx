import styles from './AppLayout.module.css';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => (
  <div className={styles.container}>
    <Outlet />
  </div>
);
