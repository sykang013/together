import { tokens } from './tokens';

/**
 * Color 변환 유틸 함수
 * put string in parameters
 * @param {string} color (ex: 'gray-100')
 * @returns {string} color (ex: #e1e1e1)
 */
export const getColor = (colorNameAndVariant) => {
  if (colorNameAndVariant.includes('-')) {
    let colorName = colorNameAndVariant;
    return tokens[colorName];
  }
};

/**
 * rem 단위 변환 유틸 함수
 * @param {string} value (ex: rem(16))
 * @param {string} baseValue
 * @returns {{value / baseValue}} (ex: 1rem)
 */
export const rem = (value, baseValue = 16) => {
  return `${Number(value / baseValue)}rem`;
};
