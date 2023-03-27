import { StLayoutProfile, StProfileButton } from '@/components/profile/Profile';
import { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { storageService } from '@/firebase/app';
import { useAuthState } from '@/firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useCreateData } from '@/firebase/firestore/useCreateData';

const StUploadImageView = styled.div`
  width: 50%;
  aspect-ratio: auto 1/1;
  margin: 50px auto;
  border: 1px solid var(--gray600);
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

const ProfileCRUD = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [fileImage, setFileImage] = useState('');
  const { user } = useAuthState();
  const fileRef = useRef();

  const goToProfilePage = () => {
    navigate('/profile-page');
  };

  const { createData, error, isLoading } = useCreateData(
    user && `users/${user.uid}/profile`
  );

  const saveFileImage = () => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setFileImage(result);
    };
    reader.readAsDataURL(theFile);
  };

  const onChangeName = (e) => {
    setText(e.target.value);
  };

  const onClick = async () => {
    if (!fileImage || !text) {
      alert('프로필 이미지와 이름을 입력해주세요.');
      return;
    }
    let uuid = self.crypto.randomUUID();
    const mobileRef = storageService
      .ref()
      .child(`profile/${user.uid}/${uuid}/mobile`);
    const response1 = await mobileRef.putString(fileImage, 'data_url');
    const mobileUrl = await response1.ref.getDownloadURL();
    await createData({
      name: text,
      mobileUrl,
    });
    goToProfilePage();
  };

  return (
    <StLayoutProfile>
      <StUploadImageView>
        <StUploadImage
          src={fileImage}
          alt="변경할 프로필 사진입니다."
          ImageURL
        />
      </StUploadImageView>
      <StImageFile type="file" onChange={saveFileImage} ref={fileRef} />
      <StName type="text" onChange={onChangeName} value={text} />
      <StProfileButton
        type="submit"
        onClick={() => {
          onClick();
          goToProfilePage();
        }}
        isLoading={isLoading}
        error={error}
      >
        저장
      </StProfileButton>
    </StLayoutProfile>
  );
};

export default ProfileCRUD;
