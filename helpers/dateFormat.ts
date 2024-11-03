export const formatMDY = (date: Date | string): string => {
  if (!date) {
    return date;
  }

  if (typeof date == 'string') {
    date = new Date(date);
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};

export const formatTMDY = (date: Date | string): string => {
  if (!date) {
    return date;
  }

  if (typeof date == 'string') {
    date = new Date(date);
  }

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const formattedHours = hours % 12 || 12;
  const amPm = hours >= 12 ? 'PM' : 'AM';

  return `${formattedHours}:${minutes} ${amPm} ${month}/${day}/${year}`;
};

export const formatDMY = (date: Date | string): string => {
  if (typeof date == 'string') {
    date = new Date(date);
  }

  return date.toLocaleDateString('en-GB'); // DD/MM/YYYY
};

export const formatYMD = (date: Date | string): string => {
  if (typeof date == 'string') {
    date = new Date(date);
  }

  return date.toISOString().split('T')[0]; // YYYY-MM-DD
};

export function getDateAndTimeFromTimestamp(timestamp) {
  if (String(timestamp).length === 10) {
    timestamp *= 1000;
  }

  const dateObject = new Date(timestamp);
  let hours = dateObject.getUTCHours();
  const minutes = String(dateObject.getUTCMinutes()).padStart(2, '0');

  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;

  hours = String(hours).padStart(2, '0');

  const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0');
  const day = String(dateObject.getUTCDate()).padStart(2, '0');
  const year = dateObject.getUTCFullYear();
  return `${month}/${day}/${year} ${hours}:${minutes} ${ampm}`;
}
