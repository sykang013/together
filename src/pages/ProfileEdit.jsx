import {
  StProfileTitle,
  StProfileSubTitle,
  StProfileItems,
  StProfileItem,
  StProfileImage,
  StLayoutProfile,
  StProfileEditImage,
  StProfileInput,
  StProfileEditButton,
} from '@/components/profile/Profile';
import { useLocation, useNavigate } from 'react-router-dom';
import ImageTest from '@/assets/profile_1.png';
import { useState } from 'react';
import { dbService } from '@/firebase/app';
import { useAuthState } from '@/firebase/auth';
import { string } from 'prop-types';
import StA11yHidden from '@/components/a11yhidden/A11yHidden';

const ProfileNameForm = ({ profileId, defaultName }) => {
  const [name, setName] = useState(defaultName);
  const { user } = useAuthState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dbService
        .collection('users')
        .doc(user.uid)
        .collection('profile')
        .doc(profileId)
        .update({ name });
      alert('프로필 편집 완료!');
      navigate('/profile-page');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <StA11yHidden as="label" htmlFor={name}>
        프로필 이름
      </StA11yHidden>
      <StProfileInput
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <StProfileEditButton type="submit">편집 완료</StProfileEditButton>
    </form>
  );
};

ProfileNameForm.propTypes = {
  profileId: string,
  defaultName: string,
};

const ProfileEdit = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const id = params.get('id');
  const name = params.get('name');
  const [profileName, setProfileName] = useState(name);

  return (
    <StLayoutProfile>
      <StProfileTitle>프로필 편집</StProfileTitle>
      <StProfileSubTitle>편집할 프로필을 선택해주세요.</StProfileSubTitle>
      <StProfileItems>
        <li>
          <StProfileItem>
            <StProfileImage src={ImageTest} />
            <StProfileEditImage />
          </StProfileItem>
          <ProfileNameForm
            profileId={id}
            defaultName={profileName}
            onClose={() => setProfileName(name)}
          />
        </li>
      </StProfileItems>
    </StLayoutProfile>
  );
};

export default ProfileEdit;
