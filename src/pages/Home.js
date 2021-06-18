import { useContext, useEffect } from 'react';
import { Button, ButtonIcon, Form, InputSearch, Modal, RemoveModal, ToolCard } from '../components';
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import Loader from 'react-loader-spinner';
import { ToolsContext } from '../hooks/toolsContext';

export const Home = () => {
  const {
    loading,
    tools,
    setSearch,
    setCurrentTool,
    triggerFormModal,
    setTriggerFormModal,
    fetchData,
    setIsRemoving
  } = useContext(ToolsContext);

  const handleNewToolModal = toolId => {
    typeof toolId !== 'string' && setCurrentTool([]);
    setTriggerFormModal(prevState => !prevState);
  };

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleEdit = ({ tags, ...tool }) => {
    setCurrentTool({ ...tool, tags: tags.join(', ') });
    handleNewToolModal(tool._id);
  };

  const handleDelete = tool => {
    setCurrentTool(tool);
    setIsRemoving(true);
  };

  return (
    <div className="container">
      <div className="content">
        <div>
          <h1>VUTTR</h1>
          <h1>Very Useful Tools To Remember</h1>
        </div>
        <div className="container__search">
          <InputSearch placeholder="Type what you're looking for" onChange={handleSearch} />
          <Button onClick={handleNewToolModal} color="blue" className="react-modal-close">
            Add tool
          </Button>
        </div>
        <Modal
          isOpen={triggerFormModal}
          onRequestClose={handleNewToolModal}
          className="react__modal__content"
        >
          <ButtonIcon onClick={handleNewToolModal} Icon={CloseIcon} className="btn--close-modal" />
          <Form />
        </Modal>

        <RemoveModal />

        {!loading &&
          tools.length > 0 &&
          tools.map(tool => (
            <ToolCard
              handleEdit={() => handleEdit(tool)}
              handleDelete={() => handleDelete(tool)}
              tool={tool}
              key={tool._id}
              className="list__tool-card"
            />
          ))}

        {tools.length === 0 && !loading && <p>No tools found, please add a new tool.</p>}

        <Loader type="Oval" color="#170c3a" height={100} width={100} visible={loading} />
      </div>
    </div>
  );
};
