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
import { useAuthState } from '@/firebase/auth';
import { useEffect, useState } from 'react';
import { dbService } from '@/firebase/app';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user } = useAuthState();
  const [profiles, setProfiles] = useState([]);
  const goToProfileEdit = (profile) => {
    navigate(`/profile-edit?id=${profile.id}&name=${profile.name}`);
  };

  useEffect(() => {
    if (user) {
      dbService
        .collection('users')
        .doc(user.uid)
        .collection('profile')
        .onSnapshot(
          (querySnapshot) => {
            const profilesArray = [];
            querySnapshot.forEach((doc) => {
              profilesArray.push({ id: doc.id, name: doc.data().name });
            });
            setProfiles(profilesArray);
          },
          (error) => {
            console.log('Error getting documents: ', error);
          }
        );
    }
  }, [user]);

  return (
    <StLayoutProfile>
      <StProfileTitle>프로필 선택</StProfileTitle>
      <StProfileSubTitle>시청할 프로필을 선택해주세요.</StProfileSubTitle>
      <StProfileItems>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <StProfileItem>
              <StProfileImage />
            </StProfileItem>
            <p>{profile.name}</p>
            <StProfileButton select onClick={() => goToProfileEdit(profile)}>
              프로필 편집
            </StProfileButton>
          </li>
        ))}
      </StProfileItems>
    </StLayoutProfile>
  );
};

export default ProfilePage;
