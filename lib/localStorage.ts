export const setLibraryOrder = (itemNames: string[]) => {
  localStorage.setItem('order', JSON.stringify(itemNames));
};

export const getLibraryOrder = (): string[] => {
  const itemNames = localStorage.getItem('order');
  return JSON.parse(itemNames);
};
