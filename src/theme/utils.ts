import { IFontTokens, tokens } from './tokens';

export const rem = (value: number | string, baseValue = 16): string => {
  return `${Number(value) / baseValue}rem`;
};

export const getFontStyle = (fontStyleAndVariant: string): IFontTokens => {
  const fontStyles = fontStyleAndVariant;
  return tokens.fonts[fontStyles];
};
