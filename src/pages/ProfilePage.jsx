import {
  StProfileTitle,
  StProfileSubTitle,
  StProfileItems,
  StProfileItem,
  StProfileImage,
  StProfileButton,
} from '@/components/profile/Profile';
import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  return (
    <>
      <StProfileTitle>프로필 선택</StProfileTitle>
      <StProfileSubTitle>시청할 프로필을 선택해주세요.</StProfileSubTitle>
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
      <Link to="/ProfileEdit">
        <StProfileButton select>프로필 편집</StProfileButton>
      </Link>
    </>
  );
};

export default ProfilePage;
