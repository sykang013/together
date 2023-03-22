import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import LogoutModal from '@/components/logout/LogoutModal';
import Popup from '@/components/popup/Popup';
import React, { useState, useEffect } from 'react';
const MainPage = () => {
  const [isPopupModal, setIsPopupModal] = useState(false);
  const [isLogoutModal, setIsLogoutModal] = useState(true);

  const openModal = () => {
    setIsPopupModal(true);
  };

  const closeModal = () => {
    setIsPopupModal(false);
  };

  const logoutCloseModal = () => {
    setIsLogoutModal(false);
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
      {isPopupModal && <Popup closeModal={closeModal} />}
      {isLogoutModal && <LogoutModal isLogoutModal={logoutCloseModal} />}
    </>
  );
};
export default MainPage;
