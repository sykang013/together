import { tokens } from './tokens';

/**
 * Color 변환 유틸 함수
 * put string in parameters
 * @param {string} (ex: 'gray-100')
 * @returns {{tokens[colorName]}} (ex: #e1e1e1)
 */
export const getColor = (colorNameAndVariant) => {
  if (colorNameAndVariant.includes('-')) {
    let colorName = colorNameAndVariant;
    return tokens[colorName];
  }
};
