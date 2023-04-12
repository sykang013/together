import { tokens } from './tokens';

export const rem = (value: number | string, baseValue = 16): string => {
  return `${Number(value) / baseValue}rem`;
};

export const getFontStyle = (fontStyleAndVariant: string) => {
  const fontStyles = fontStyleAndVariant;
  return tokens.fonts[fontStyles];
};
