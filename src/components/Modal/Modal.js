import ReactModal from 'react-modal';

export const Modal = ({ isNewTool, handleNewToolModal, children, className }) => (
  <ReactModal
    isOpen={isNewTool}
    onRequestClose={handleNewToolModal}
    overlayClassName="react__modal__overlay"
    className={className}
    ariaHideApp={false}
  >
    {children}
  </ReactModal>
);
