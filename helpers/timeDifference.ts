export const timeDifference = (startTime: string): string => {
  const start = new Date(startTime);
  const end = new Date();
  const diffInMilliseconds = end - start;

  const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
  const days = Math.floor(diffInMinutes / 1440);
  const hours = Math.floor((diffInMinutes % 1440) / 60);
  const minutes = diffInMinutes % 60;

  let result = '';
  if (days > 0) {
    result += `${days} day${days > 1 ? 's' : ''} `;
  }
  if (hours > 0) {
    result += `${hours} hour${hours > 1 ? 's' : ''} `;
  }
  result += `${minutes} minute${minutes > 1 ? 's' : ''}`;
  return result.trim();
};
