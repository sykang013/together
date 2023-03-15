import { StLayoutProfile, StProfileButton } from '@/components/profile/Profile';
import React from 'react';
import styled from 'styled-components/macro';

const StUploadImageView = styled.div`
  width: 50%;
  aspect-ratio: auto 1/1;
  margin: 50px auto;
`;

const StUploadImage = styled.img`
  width: 100%;
  height: 100%;
`;

const StImageFile = styled.input`
  border: 1px solid red;
  width: 50%;
  height: 30px;
  display: block;
  margin: 50px auto 0 auto;
`;

const StNickName = styled.input`
  width: 50%;
  height: 30px;
  display: block;
  margin: 10px auto 0 auto;
`;

const ProfileCRUD = () => {
  return (
    <StLayoutProfile>
      <StUploadImageView>
        <StUploadImage />
      </StUploadImageView>
      <StImageFile type="file" />
      <StNickName type="text" />
      <StProfileButton>완료</StProfileButton>
    </StLayoutProfile>
  );
};

export default ProfileCRUD;
