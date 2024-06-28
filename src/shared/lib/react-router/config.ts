export enum ROUTER_PATHS {
  HOME = '/',
  NOT_FOUND = '404',
  //   AUTH = 'auth',
}

export const pathKeys = {
  root: '/',
  home() {
    return pathKeys.root;
  },
  page404() {
    return pathKeys.root.concat(ROUTER_PATHS.NOT_FOUND);
  },

  //? Comment is just for example another route
  //   auth() {
  //     return pathKeys.root.concat(ROUTER_PATHS.AUTH);
  //   },
};
