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
import { useDownloadURL } from '@/firebase/storage';

const ProfilePage = () => {
  const navigate = useNavigate();

  const GoToProfileEdit = () => {
    navigate('/ProfileEdit');
  };

  const GoToMainPage = () => {
    navigate('/');
  };

  const { downloadURL } = useDownloadURL(
    'profiles/defaults/profile1/desktop/profile_1.png'
  );

  return (
    <>
      <StLayoutProfile>
        <StProfileTitle>프로필 선택</StProfileTitle>
        <StProfileSubTitle>시청할 프로필을 선택해주세요.</StProfileSubTitle>
        <StProfileItems>
          <li>
            <StProfileItem>
              <StProfileImage
                onClick={GoToMainPage}
                src={`https://firebasestorage.googleapis.com/v0/b/together-de6e5.appspot.com/o/profiles%2Fdefaults%2Fprofile1%2Fdesktop%2Fprofile_1.png?alt=media&token=131dd17f-a849-40b6-bb9d-6fd953b97d81`}
              />
            </StProfileItem>
            <p>test</p>
          </li>
        </StProfileItems>

        <StProfileButton select onClick={GoToProfileEdit}>
          프로필 편집
        </StProfileButton>
      </StLayoutProfile>
    </>
  );
};

export default ProfilePage;
