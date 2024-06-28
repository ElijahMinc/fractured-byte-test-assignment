import '@shared/main.css';
import 'react-toastify/dist/ReactToastify.css';

import { withErrorBoundary } from 'react-error-boundary';
import { ToastContainer } from 'react-toastify';
import { CanvasPointDrawingProvider } from './CanvasProvider';
import { withSuspense } from '@shared/lib';
import { BrowserRouter } from './RouterProvider';
import { Spinner } from '@shared/ui/Spinner';

function Providers() {
  return (
    <>
      <CanvasPointDrawingProvider>
        <BrowserRouter />
      </CanvasPointDrawingProvider>

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

const SuspensedProvider = withSuspense(Providers, {
  fallback: (
    <div className="full-h">
      <Spinner />
    </div>
  ),
});

export const MainProvider = withErrorBoundary(SuspensedProvider, {
  fallbackRender: () => <div>Something went wrong</div>,
});
