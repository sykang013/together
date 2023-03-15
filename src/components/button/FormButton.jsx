import { getColor, getFontStyle, rem } from '@/theme/utils';
import { string } from 'prop-types';
import styled, { css } from 'styled-components/macro';

const StButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rem(42)};
  padding: ${rem(16)};
  background-color: ${getColor('--gray700')};
  color: ${getColor('--gray400')};
  ${(props) =>
    props.isActive
      ? css`
          background-color: ${getColor('--primary')};
          color: ${getColor('--white')};
        `
      : css`
          background-color: ${getColor('--gray700')};
          color: ${getColor('--gray400')};
        `};
  border: none;
  border-radius: 4px;
  font-size: ${rem(16)};
  ${getFontStyle('LabelS')};
  &:hover {
    background-color: ${getColor('--gray600')};
  }
  @media (min-width: ${rem(768)}) {
    height: ${rem(50)};
    ${getFontStyle('LabelM')};
  }
  @media (min-width: ${rem(1920)}) {
    height: ${rem(86)};
    ${getFontStyle('LabelXL')};
  }
`;
const FormButton = ({ type, children, ...restProps }) => {
  return (
    <StButton type={type} {...restProps}>
      {children}
    </StButton>
  );
};

FormButton.defaultProps = {
  type: 'submit',
  children: '버튼',
};

FormButton.propTypes = {
  type: string,
  children: string.isRequired,
};

export default FormButton;
