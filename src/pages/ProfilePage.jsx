import {
  StProfileTitle,
  StProfileSubTitle,
  StProfileItems,
  StProfileItem,
  StProfileImage,
  StProfileButton,
  StLayoutProfile,
} from '@/components/profile/Profile';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();

  const GoToProfileEdit = () => {
    navigate('/ProfileEdit');
  };

  const GoToMainPage = () => {
    navigate('/');
  };

  return (
    <StLayoutProfile>
      <StProfileTitle>프로필 선택</StProfileTitle>
      <StProfileSubTitle>시청할 프로필을 선택해주세요.</StProfileSubTitle>
      <StProfileItems>
        <li>
          <StProfileItem>
            <StProfileImage onClick={GoToMainPage} />
          </StProfileItem>
          <p>test</p>
        </li>
      </StProfileItems>
      <StProfileButton select onClick={GoToProfileEdit}>
        프로필 편집
      </StProfileButton>
    </StLayoutProfile>
  );

};

export default ProfilePage;
