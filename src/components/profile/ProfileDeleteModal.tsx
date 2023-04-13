import Modal from '@/components/modal/Modal';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from '@/firebase/auth';
import { useDeleteData } from '@/firebase/firestore/useDeleteData';
import { useDeleteFile } from '@/firebase/storage/useDeleteFile';
import useModal from '@/hooks/useModal';

interface IProfileDeleteModalProps {
  profileId: string;
  storageID: string;
}
const ProfileDeleteModal = ({
  profileId,
  storageID,
}: IProfileDeleteModalProps) => {
  const navigate = useNavigate();
  const { user } = useAuthState();
  const { deleteData } = useDeleteData('users');
  const { deleteFile } = useDeleteFile();

  const { closeModal } = useModal('profile-delete');

  const handleProfileDelete = async () => {
    try {
      if (user) {
        await deleteData(`${user.uid}/profile/${profileId}`);
        await deleteFile(`profile/${user.uid}/${storageID}/mobile`);

        await closeModal();
        navigate('/profile-page');
      }
    } catch (error) {
      navigate('/*');
    }
  };

  return (
    <Modal
      message="정말 프로필을 삭제하시겠습니까?"
      onClickHandler={handleProfileDelete}
      cancelHandler={closeModal}
    />
  );
};

export default ProfileDeleteModal;
