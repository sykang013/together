import {
  StProfileTitle,
  StProfileSubTitle,
  StProfileItems,
  StProfileItem,
  StProfileImage,
  StProfileButton,
} from '@/components/profile/Profile';
import React from 'react';

const ProfilePage = () => {
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
      <StProfileButton select>완료</StProfileButton>
    </>
  );
};

export default ProfilePage;
