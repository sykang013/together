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
import { useAuthState, useSignIn, useSignOut } from '@/firebase/auth';
import { useEffect, useState } from 'react';
import { dbService } from '@/firebase/app';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { user } = useAuthState();
  const [userData, setUserData] = useState(null);
  const [profiles, setProfiles] = useState([]);

  const goToProfileEdit = () => {
    navigate('/profile-edit');
  };

  const goToMainPage = () => {
    navigate('/');
  };

  useEffect(() => {
    if (user) {
      // profile 데이터 가져오기
      dbService // dbservice
        .collection('users') // users collection
        .doc(user.uid) // users collection 으로 부터 현재 로그인되어있는 user의 uid 받아오기
        .collection('profile') // 해당 uid에 해당하는 profile 컬렉션으로 이동
        .get() // profile 컬렉션의 문서들을 뽑아오기
        .then((querySnapshot) => {
          // 뽑아온 문서들을 토대로 문서의 id 값과 들어있는 data 를 배열에 push(추가)
          const profilesArray = [];
          querySnapshot.forEach((doc) => {
            profilesArray.push({ id: doc.id, ...doc.data() });
          });
          setProfiles(profilesArray); // 뽑아온 데이터들을 useState를 통해 배열에 저장
        })
        .catch((error) => {
          console.log('Error getting documents: ', error);
        });
    }
  }, [user]);

  return (
    <StLayoutProfile>
      <StProfileTitle>프로필 선택</StProfileTitle>
      <StProfileSubTitle>시청할 프로필을 선택해주세요.</StProfileSubTitle>
      <StProfileItems>
        {/* 뽑아온 데이터들을 저장한 배열을 map 돌려서 profile-page에 렌더링 */}
        {profiles.map((profile) => (
          <li key={profile.id}>
            <StProfileItem>
              <StProfileImage onClick={goToMainPage} />
            </StProfileItem>
            <p>{profile.name}</p>
          </li>
        ))}
      </StProfileItems>
      <StProfileButton select onClick={goToProfileEdit}>
        프로필 편집
      </StProfileButton>
    </StLayoutProfile>
  );
};

export default ProfilePage;
