import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import { useSignOut } from '@/firebase/auth';
import Modal from '@/components/modal/Modal';
import useModal from '@/hooks/useModal';

const LogoutModal = () => {
  const navigate = useNavigate();
  const { signOut } = useSignOut();
  const { closeModal } = useModal('logout');

  const handleSignOut = () => {
    signOut();
    closeModal();
    navigate('/');
  };

  return (
    <Modal
      message="로그아웃 하시겠습니까?"
      onClickHandler={handleSignOut}
      cancelHandler={closeModal}
    />
  );
};

export default LogoutModal;
