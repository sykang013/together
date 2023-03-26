import ReactDOM from 'react-dom';

const ModalMiddlePortal = ({ children }) => {
  const modalRoot = document.getElementById('modal-root-middle');
  return ReactDOM.createPortal(children, modalRoot);
};

export default ModalMiddlePortal;
