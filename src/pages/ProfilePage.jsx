import {
  StProfileTitle,
  StProfileSubTitle,
  StProfileItems,
  StProfileItem,
} from '@/components/profile/Profile';
import React from 'react';

const ProfilePage = () => {
  return (
    <>
      <StProfileTitle>프로필 선택</StProfileTitle>
      <StProfileSubTitle>시청할 프로필을 선택해주세요.</StProfileSubTitle>
      <StProfileItems>
        <StProfileItem>
          <p>test</p>
        </StProfileItem>
        <StProfileItem>
          <p>test</p>
        </StProfileItem>
        <StProfileItem>
          <p>test</p>
        </StProfileItem>
        <StProfileItem>
          <p>test</p>
        </StProfileItem>
      </StProfileItems>
    </>
  );
};

export default ProfilePage;
