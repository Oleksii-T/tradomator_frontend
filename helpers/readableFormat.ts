export const readableFormat = (permission: string): string => {
  return permission.replaceAll('_', ' ');
};
