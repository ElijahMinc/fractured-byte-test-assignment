import { AppLayout } from '@app/layouts';
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
  useRouteError,
} from 'react-router-dom';
import { ROUTER_PATHS, pathKeys } from '@shared/lib/react-router/config';
import { homePageRoute } from '@pages/HomePage';

// https://github.com/remix-run/react-router/discussions/10166
function BubbleError() {
  const error = useRouteError();
  if (error) throw error;
  return null;
}

// I decided to use BrowserRouter just for show FSD case and easily wai to handle not found page
const router = createBrowserRouter([
  {
    path: ROUTER_PATHS.HOME,
    errorElement: <BubbleError />,
    element: <AppLayout />,
    children: [
      homePageRoute,
      {
        // but here we can manage not found page
        // return to home page by default if page was not founded
        loader: async () => redirect(pathKeys.home()),
        path: '*',
      },
    ],
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
