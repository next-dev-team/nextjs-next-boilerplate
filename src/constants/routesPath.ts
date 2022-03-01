export const ROUTE = {
  home: '/',
  detail: '/detail',
};

export type ROUTE_KEY = keyof typeof ROUTE;

export const getRouteName = (name: ROUTE_KEY) => {
  const getName = Object.keys(ROUTE).find((i) => i === name);

  return getName?.replace('_', ' ');
};

export const getRouteValue = (name: string) => {
  const getName = Object.values(ROUTE).find((i) => i === name);
  return getName?.replace('/', ' ');
};
