export const object = (value: Object) => JSON.stringify(value);
export const array = (value: Array<unknown>) => object(value);
export const bool = (value: boolean) => value ? '' : null;
export const number = (value: number) => value;

export const bind = (value: unknown) => {
  switch(typeof value) {
    case 'object':
      return object(value);
    case 'boolean':
      return bool(value);
    case 'number':
      return number(value);
    case 'string':
      return value;
    default:
      return value;
  }
};