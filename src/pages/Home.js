import { useEffect, useState } from 'react';
import { Button, ButtonIcon, Form, InputSearch, Modal, ToolCard } from '../components';
import closeImg from '../assets/close.svg';
import { api } from '../services/api';
import Loader from 'react-loader-spinner';

export const Home = () => {
  const [isNewTool, setIsNewTool] = useState(false);
  const [tools, setTools] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const handleNewToolModal = () => {
    setIsNewTool(prevState => !prevState);
  };

  const handleSearch = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const result = await api.get('/tools', { params: { name: search } });
        setTools(result.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [search]);

  console.log({ tools, loading });

  return (
    <div className="container">
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
        isNewTool={isNewTool}
        handleNewToolModal={handleNewToolModal}
        className="react__modal__content"
      >
        <ButtonIcon
          onClick={handleNewToolModal}
          image={closeImg}
          altText="Close modal"
          className="btn--close-modal"
        />
        <Form />
      </Modal>

      {!loading && tools.length > 0 && tools.map(tool => <ToolCard tool={tool} />)}

      <Loader type="Oval" color="#170c3a" height={100} width={100} visible={loading} />
    </div>
  );
};
