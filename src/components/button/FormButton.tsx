import { getFontStyle, rem } from '@/theme/utils';
import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components/macro';

interface IStButton {
  isActive: boolean;
}

interface IFormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const StButton = styled.button<IStButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${rem(42)};
  padding: ${rem(16)};
  background-color: ${(props) =>
    props.isActive ? `var(--primary)` : `var(--gray700)`};

  color: ${(props) => (props.isActive ? `var(--white)` : `var(--gray200)`)};
  border: none;
  border-radius: 4px;
  width: ${rem(288)};
  ${getFontStyle('LabelS')};
  &:hover {
    background-color: var(--gray600);
  }
  @media (min-width: 768px) {
    width: ${rem(416)};
    height: ${rem(50)};
    ${getFontStyle('LabelM')};
  }
  @media (min-width: 1920px) {
    width: ${rem(732)};
    height: ${rem(86)};
    ${getFontStyle('LabelXL')};
  }
`;

const FormButton = ({
  type = 'submit',
  children = '버튼',
  ...restProps
}: IFormButtonProps) => {
  return (
    <StButton type={type} {...restProps}>
      {children}
    </StButton>
  );
};

export default FormButton;
