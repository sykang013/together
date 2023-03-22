import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import LogoutModal from '@/components/logout/LogoutModal';
import Popup from '@/components/popup/Popup';
import React, { useState, useEffect } from 'react';
const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [hideModal, setHideModal] = useState(true);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const logoutCloseModal = () => {
    setHideModal(false);
  };

  useEffect(() => {
    const expiryDate = JSON.parse(localStorage.getItem('visitCookieExpiry'));
    if (expiryDate) {
      const currentDate = new Date().getTime();

      if (currentDate > expiryDate) {
        localStorage.removeItem('visitCookieExpiry');
        openModal();
      }
    } else {
      openModal();
    }
  }, []);

  return (
    <>
      <Header />
      <Footer />
      {showModal && <Popup closeModal={closeModal} />}
      {hideModal && <LogoutModal hideModal={logoutCloseModal} />}
    </>
  );
};
export default MainPage;
