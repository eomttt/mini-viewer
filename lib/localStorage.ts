import { isWindowDefined } from './util';

export const setLibraryOrder = (itemNames: string[]) => {
  localStorage.setItem('order', JSON.stringify(itemNames));
};

export const getLibraryOrder = (): string[] => {
  if (isWindowDefined()) {
    const itemNames = localStorage.getItem('order');
    return JSON.parse(itemNames);
  }
  return [];
};

export const addLibraryOrder = (itemName: string) => {
  const items = getLibraryOrder();

  if (items) {
    setLibraryOrder([...items, itemName]);
  } else {
    setLibraryOrder([itemName]);
  }
};
