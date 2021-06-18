import { useContext } from 'react';
import { ButtonIcon, Modal, Button } from '../';
import { ReactComponent as CloseIcon } from '../../assets/close.svg';
import { ReactComponent as RemoveIcon } from '../../assets/remove.svg';
import { ToolsContext } from '../../hooks/toolsContext';

export const RemoveModal = () => {
  const { isRemoving, setIsRemoving, currentTool, handleToolRemoval } = useContext(ToolsContext);
  const { name } = currentTool;

  return (
    <Modal
      isOpen={isRemoving}
      onRequestClose={() => setIsRemoving(prevState => !prevState)}
      className="react__modal__content"
    >
      <ButtonIcon
        onClick={() => setIsRemoving(prevState => !prevState)}
        Icon={CloseIcon}
        className="btn--close-modal"
      />
      <div className="modal__remove">
        <div className="modal__remove__header">
          <RemoveIcon />
          <h1>Remove Tool</h1>
        </div>

        <p>Are you sure you want to remove {name}?</p>

        <Button onClick={handleToolRemoval} color="red">
          Remove Tool
        </Button>
      </div>
    </Modal>
  );
};
