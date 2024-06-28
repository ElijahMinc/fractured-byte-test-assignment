import ReactDOM from 'react-dom/client';
import { MainProvider } from './providers/Provider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MainProvider />
);
