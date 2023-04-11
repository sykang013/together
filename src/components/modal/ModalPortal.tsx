import ReactDOM from 'react-dom';

interface IModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: IModalPortalProps) => {
  const modalRoot = document.getElementById('modal-root');
  return ReactDOM.createPortal(children, modalRoot as HTMLElement);
};

export default ModalPortal;
