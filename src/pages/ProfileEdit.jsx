import {
  StProfileTitle,
  StProfileSubTitle,
  StProfileItems,
  StProfileItem,
  StProfileImage,
  StProfileButton,
  StLayoutProfile,
  StProfileEditImage,
} from '@/components/profile/Profile';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageTest from '@/assets/profile_1.png';

const ProfilePage = () => {
  const navigate = useNavigate();

  const GoToMainPage = () => {
    navigate('/');
  };
  const GoToProfileCRUD = () => {
    navigate('/ProfileCRUD');
  };

  return (
    <>
      <StLayoutProfile>
        <StProfileTitle>프로필 편집</StProfileTitle>
        <StProfileSubTitle>편집할 프로필을 선택해주세요.</StProfileSubTitle>
        <StProfileItems>
          <li>
            <StProfileItem onClick={GoToProfileCRUD}>
              <StProfileImage src={ImageTest} />
              <StProfileEditImage />
            </StProfileItem>
            <p>test</p>
          </li>
        </StProfileItems>

        <StProfileButton onClick={GoToMainPage}>완료</StProfileButton>
      </StLayoutProfile>
    </>
  );
};

export default ProfilePage;
