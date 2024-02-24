export const mergeObjects = (initial, dynamic) => {
  const initialEntries = Object.entries(initial);
  const merged = initialEntries.map(([key, value]) =>
    dynamic[key] ? [key, dynamic[key]] : [key, value]
  );
  return Object.fromEntries(merged);
};
