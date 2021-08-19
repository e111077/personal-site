import { ComplexAttributeConverter, defaultConverter } from 'lit';

export const converter: ComplexAttributeConverter = {
  toAttribute: defaultConverter.toAttribute,
  fromAttribute(value: string|null, type?: unknown) {
    switch (type) {
      case Boolean:
        return value !== null && value !== 'null';
      default:
        return defaultConverter.fromAttribute(value, type);
    }
  }
};

export const bool = {
  type: Boolean,
  converter,
  reflect: true,
};

export const array = {
  type: Array,
};

export const object = {
  type: Object,
};

export const number = {
  type: Number,
};

export const string = {
  type: String,
};