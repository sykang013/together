import propTypes from 'prop-types';
import Modal from '@/components/modal/Modal';
import { useNavigate } from 'react-router-dom';
import { dbService } from '@/firebase/app';
import { useAuthState } from '@/firebase/auth';

const ProfileDeleteModal = ({ closeProfileDeleteModal, profile }) => {
  const navigate = useNavigate();
  const { user } = useAuthState();
  const handleProfileDelet = async () => {
    try {
      await dbService
        .collection('users')
        .doc(user.uid)
        .collection('profile')
        .doc(profile)
        .delete();

      closeProfileDeleteModal();
      console.log('Data successfully deleted');
    } catch (error) {
      console.error('Error deleting profile: ', error);
    }
    closeProfileDeleteModal();
    navigate('/profile-page');
  };

  return (
    <Modal
      message="정말 프로필을 삭제하시겠습니까?"
      onClickHandler={handleProfileDelet}
      cancelHandler={closeProfileDeleteModal}
    />
  );
};

export default ProfileDeleteModal;

ProfileDeleteModal.propTypes = {
  closeProfileDeleteModal: propTypes.func,
  profile: propTypes.func,
};
