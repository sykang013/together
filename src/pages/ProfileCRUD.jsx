import { StLayoutProfile, StProfileButton } from '@/components/profile/Profile';
import { useState } from 'react';
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
  width: 50%;
  height: 30px;
  display: block;
  margin: 50px auto 0 auto;
`;

const StName = styled.input`
  width: 50%;
  height: 30px;
  display: block;
  margin: 10px auto 0 auto;
`;

const StCRUD = () => {
  const [text, setText] = useState('');
  const [fileImage, setFileImage] = useState('');

  const saveFileImage = (e) => {
    const ImageURL = URL.createObjectURL(e.target.files[0]);
    setFileImage(ImageURL);
  };

  const onChangeName = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <StUploadImageView>
        <StUploadImage src={fileImage} alt="" ImageURL />
      </StUploadImageView>
      <StImageFile type="file" onChange={saveFileImage} />
      <StName onChange={onChangeName} value={text} />
      <StProfileButton>저장</StProfileButton>
    </>
  );
};

const ProfileCRUD = () => {
  return (
    <StLayoutProfile>
      <StCRUD />
    </StLayoutProfile>
  );
};

export default ProfileCRUD;
