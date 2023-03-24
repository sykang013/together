import MainBanner from '@/components/carousel/MainBanner';
import Popup from '@/components/popup/Popup';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
const MainPage = () => {
  const [isPopupModal, setIsPopupModal] = useState(false);

  const openModal = () => {
    setIsPopupModal(true);
  };

  const closeModal = () => {
    setIsPopupModal(false);
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
      <Helmet>
        <title>타잉 메인</title>
        <meta
          name="description"
          content="타잉의 컨텐츠들을 즐길 수 있는 메인 페이지 입니다."
        />
      </Helmet>
      <MainBanner />
      {isPopupModal && <Popup closeModal={closeModal} />}
    </>
  );
};
export default MainPage;
