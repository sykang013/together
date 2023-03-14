import {
  StProfileTitle,
  StProfileSubTitle,
  StProfileItems,
  StProfileItem,
  StProfileImage,
  StProfileButton,
} from '@/components/profile/Profile';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const GoToMainPage = () => {
    navigate('/');
  };

  return (
    <>
      <StProfileTitle>프로필 편집</StProfileTitle>
      <StProfileSubTitle>편집할 프로필을 선택해주세요.</StProfileSubTitle>
      <StProfileItems>
        <StProfileItem>
          <StProfileImage />
          <p>test</p>
        </StProfileItem>
        <StProfileItem>
          <StProfileImage />
          <p>test</p>
        </StProfileItem>
        <StProfileItem>
          <StProfileImage />
          <p>test</p>
        </StProfileItem>
        <StProfileItem>
          <StProfileImage />
          <p>test</p>
        </StProfileItem>
      </StProfileItems>
      <StProfileButton onClick={GoToMainPage}>완료</StProfileButton>
    </>
  );
};

export default ProfilePage;
