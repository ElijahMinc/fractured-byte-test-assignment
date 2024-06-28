import { createElement } from 'react';
import { RouteObject } from 'react-router-dom';
import { HomePage } from '../HomePage';

export const homePageRoute: RouteObject = {
  index: true,
  element: createElement(HomePage),
};
