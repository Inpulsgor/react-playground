interface DateOptions {
  [key: string]: string;
}

export const convert: (value: string | number) => number = value => {
  return typeof value === 'string' ? parseInt(value) : value;
};

export const getLocalDate = (datetime: string): string => {
  const parsedDate = Date.parse(datetime);
  const date = new Date(parsedDate);

  const dateOptions: DateOptions = {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return date.toLocaleDateString('en-US', dateOptions);
};
