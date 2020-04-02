export const setLibraryOrder = (itemNames: string[]) => {
  localStorage.setItem('order', JSON.stringify(itemNames));
};

export const getLibraryOrder = (): string[] => {
  const itemNames = localStorage.getItem('order');
  return JSON.parse(itemNames);
};

export const addLibraryOrder = (itemName: string) => {
  const items = getLibraryOrder();

  if (items) {
    setLibraryOrder([...items, itemName]);
  } else {
    setLibraryOrder([itemName]);
  }
};
