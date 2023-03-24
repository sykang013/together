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
import { useNavigate } from 'react-router-dom';
import ImageTest from '@/assets/profile_1.png';
import { useState } from 'react';
import ProfileDeleteModal from '@/components/profile/ProfileDeleteModal';

const ProfileEdit = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate('/');
  };
  const goToProfileCRUD = () => {
    navigate('/profile-crud');
  };

  const [isProfileDeleteModal, setIsProfileDeleteModal] = useState(false);

  const openProfileDeleteModal = () => {
    setIsProfileDeleteModal(true);
  };

  const closeProfileDeleteModal = () => {
    setIsProfileDeleteModal(false);
  };

  return (
    <>
      {isProfileDeleteModal && (
        <ProfileDeleteModal closeProfileDeleteModal={closeProfileDeleteModal} />
      )}

      <StLayoutProfile>
        <StProfileTitle>프로필 편집</StProfileTitle>
        <StProfileSubTitle>편집할 프로필을 선택해주세요.</StProfileSubTitle>
        <StProfileItems>
          <li>
            <StProfileItem onClick={goToProfileCRUD}>
              <StProfileImage src={ImageTest} />
              <StProfileEditImage />
            </StProfileItem>
            <p>test</p>
          </li>
        </StProfileItems>

        <StProfileButton onClick={goToMainPage}>완료</StProfileButton>
        <StProfileButton onClick={openProfileDeleteModal}>
          프로필 삭제
        </StProfileButton>
      </StLayoutProfile>
    </>
  );
};

export default ProfileEdit;
