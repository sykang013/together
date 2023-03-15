import { useRef, useState } from 'react';
import { getColor, getFontStyle, rem } from '@/theme/utils';
import styled from 'styled-components/macro';
import FormButton from '../button/FormButton';
import { FormInput } from '../formInput/FormInput';
import { useAuthState, useSignUp } from '@/firebase/auth';
import { useCreateAuthUser } from '@/firebase/firestore';
import { Navigate } from 'react-router';

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;
const StInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${rem(60)};
  width: ${rem(319)};
  text-align: center;

  @media (min-width: 768px) {
    width: ${rem(416)};
  }
  @media (min-width: 1920px) {
    width: ${rem(732)};
  }
  div {
    display: flex;
    flex-direction: column;
    gap: ${rem(20)};
  }
`;

const StTitle = styled.h1`
  ${getFontStyle('headingMedium')};
  @media (min-width: 768px) {
    ${getFontStyle('headingXL')};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('headingXXL')};
  }
`;

const StHeaderDescription = styled.p`
  color: ${getColor('--gray400')};
  ${getFontStyle('LabelSmall')};
  @media (min-width: 768px) {
    ${getFontStyle('LabelMedium')};
  }
  @media (min-width: 1920px) {
    ${getFontStyle('LabelXL')};
  }
`;
const StForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
  @media (min-width: 768px) {
    gap: ${rem(18)};
  }
  @media (min-width: 1920px) {
    gap: ${rem(34)};
  }
  div {
    display: flex;
    text-align: left;
    gap: 0;
  }
`;

const StEmailDescription = styled.p`
  color: ${(props) => (props.isEmail ? getColor('--gray500') : 'red')};
  ${getFontStyle('ParagraphS')};
  @media (min-width: ${rem(768)}) {
    ${getFontStyle('ParagraphM')};
  }
  @media (min-width: ${rem(1920)}) {
    ${getFontStyle('ParagraphL')};
  }
`;

const StPwDescription = styled.p`
  color: ${(props) => (props.isPassword ? getColor('--gray500') : 'red')};
  ${getFontStyle('ParagraphS')};
  @media (min-width: ${rem(768)}) {
    ${getFontStyle('ParagraphM')};
  }
  @media (min-width: ${rem(1920)}) {
    ${getFontStyle('ParagraphL')};
  }
`;

const StPwConfirmDescription = styled.p`
  color: ${(props) =>
    props.isPasswordConfirm ? getColor('--gray500') : 'red'};
  ${getFontStyle('ParagraphS')};
  @media (min-width: ${rem(768)}) {
    ${getFontStyle('ParagraphM')};
  }
  @media (min-width: ${rem(1920)}) {
    ${getFontStyle('ParagraphL')};
  }
`;

const RegisterForm = () => {
  const initialFormState = {
    email: '',
    password: '',
    passwordConfirm: '',
  };

  const REGEXP_PW =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d@$!%*#?&]{8,15}$/;
  const REGEXP_EMAIL = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const { signUp } = useSignUp();
  const { createAuthUser } = useCreateAuthUser();
  const { isLoading, error } = useAuthState();

  const formStateRef = useRef(initialFormState);
  const { email, password, passwordConfirm } = formStateRef.current;

  const handleChangeEmail = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;

    if (!REGEXP_EMAIL.test(formStateRef.current[name])) {
      setIsEmail(false);
      setIsActive(false);
      return;
    } else {
      setIsEmail(true);
      if (password && passwordConfirm && isPassword && isPasswordConfirm) {
        setIsActive(true);
      }
    }
  };

  const handleChangePw = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;

    if (!REGEXP_PW.test(formStateRef.current[name])) {
      setIsPassword(false);
      setIsActive(false);
      return;
    } else {
      setIsPassword(true);
      if (passwordConfirm && email && isEmail && isPasswordConfirm) {
        setIsActive(true);
      }
    }
  };

  const handleChangePwConfirm = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;

    if (!Object.is(password, formStateRef.current[name])) {
      setIsPasswordConfirm(false);
      setIsActive(false);
      return;
    } else {
      setIsPasswordConfirm(true);
      if (isEmail && isPassword) {
        setIsActive(true);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!REGEXP_EMAIL.test(email)) {
      setIsEmail(false);
      alert('올바른 이메일을 입력해주세요.');
      return;
    }
    if (!REGEXP_PW.test(password)) {
      setIsPassword(false);
      alert('비밀번호를 맞게 입력해주세요.');
      return;
    }
    if (!Object.is(password, passwordConfirm)) {
      setIsPasswordConfirm(false);
      alert('위와 같은 비밀번호를 입력해주세요.');
      return;
    }

    const user = await signUp(email, password);
    await createAuthUser(user);

    alert('회원가입 및 유저 생성');
    // const navigate = Navigate();
    // navigate('/login');
  };

  if (isLoading) {
    return <div role="alert">페이지를 준비 중입니다.</div>;
  }

  if (error) {
    return <div role="alert">오류! {error.message}</div>;
  }

  return (
    <StContainer>
      <StInner>
        <div>
          <StTitle>티빙 회원가입</StTitle>
          <StHeaderDescription>
            이메일과 비밀번호로 간편하게 티빙을 시작하세요!
          </StHeaderDescription>
        </div>
        <StForm onSubmit={handleSubmit}>
          <div>
            <FormInput
              name="email"
              type="email"
              placeholder="이메일"
              onChange={handleChangeEmail}
              autoComplete="email"
              required
            />
            <StEmailDescription isEmail={isEmail}>
              {isEmail
                ? '올바른 이메일 형식을 작성해주세요(예: euid@euid.dev)'
                : '올바르지 않은 이메일입니다.'}
            </StEmailDescription>
          </div>
          <div>
            <FormInput
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={handleChangePw}
              required
            />
            <StPwDescription isPassword={isPassword}>
              {isPassword
                ? '영문, 숫자, 특수문자(~!@#$&^&*) 조합 8~15자리'
                : '올바르지 않은 비밀번호입니다.'}
            </StPwDescription>
          </div>
          <div>
            <FormInput
              name="passwordConfirm"
              type="password"
              placeholder="비밀번호 확인"
              onChange={handleChangePwConfirm}
              required
            />
            <StPwConfirmDescription isPasswordConfirm={isPasswordConfirm}>
              {isPasswordConfirm
                ? '위와 같은 비밀번호를 입력해주세요.'
                : '비밀번호가 일치하지 않습니다.'}
            </StPwConfirmDescription>
          </div>
          <FormButton type="submit" isActive={isActive}>
            가입하기
          </FormButton>
        </StForm>
      </StInner>
    </StContainer>
  );
};

export default RegisterForm;
