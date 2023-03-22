import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import { useSignOut } from '@/firebase/auth';
import Modal from '@/components/modal/Modal';

const LogoutModal = ({ isLogoutModal }) => {
  const navigate = useNavigate();
  const { signOut } = useSignOut();

  const handleSignOut = () => {
    signOut();
    navigate('/Landing');
  };

  return (
    <Modal
      message="로그아웃 하시겠습니까?"
      onClickHandler={handleSignOut}
      cancelHandler={isLogoutModal}
    />
  );
};

export default LogoutModal;

LogoutModal.propTypes = {
  isLogoutModal: propTypes.func,
};
