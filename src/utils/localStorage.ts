export const getItem = (key: string) => {
  const getLs = localStorage.getItem(key) as unknown as string;
  const result = getLs !== null ? JSON.parse(getLs) : null;
  return result;
};

export const removeItem = (key: string) => localStorage.removeItem(key);

export const setItem = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify(value));
