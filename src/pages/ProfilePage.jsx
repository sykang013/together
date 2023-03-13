import {
  StProfileTitle,
  StProfileSubTitle,
  StProfileItems,
} from '@/components/profile/Profile';
import React from 'react';

const ProfilePage = () => {
  return (
    <>
      <StProfileTitle>프로필 선택</StProfileTitle>
      <StProfileSubTitle>시청할 프로필을 선택해주세요.</StProfileSubTitle>
      <StProfileItems>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </StProfileItems>
    </>
  );
};

export default ProfilePage;
