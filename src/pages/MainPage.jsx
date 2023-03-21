import Header from '@/components/header/Header';
import Popup from '@/components/popup/Popup';
import React, { useState } from 'react';
const MainPage = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Header />
      {showModal && (
        <Popup
          OnClose={() => {
            handleCloseModal();
          }}
        />
      )}
    </>
  );
};
export default MainPage;
