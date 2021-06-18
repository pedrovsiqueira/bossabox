import React, { createContext, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

const ToolsContext = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [tools, setTools] = useState([]);
  const [currentTool, setCurrentTool] = useState([]);
  const [triggerFormModal, setTriggerFormModal] = useState(false);
  const [search, setSearch] = useState('');
  const [isRemoving, setIsRemoving] = useState(false);

  const toastMessageDefaults = {
    position: 'bottom-left',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  };

  const notifySuccess = message => {
    toast.info(message, { ...toastMessageDefaults });
  };

  const notifyError = message => {
    toast.error(message, { ...toastMessageDefaults });
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await api.get('/tools', { params: { name: search } });
      setTools(result.data);
    } catch (error) {
      notifyError('Error while loading the data');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [search]); //eslint-disable-line

  const handleFormSubmit = async values => {
    const { name, description, url, tags, _id: id } = values;

    const payload = {
      name,
      description,
      url,
      tags: [tags]
    };

    const callBack = id ? api.put(`/tools/${id}`, payload) : api.post('/tools', payload);

    try {
      await callBack;
      notifySuccess(id ? 'Tool updated successfully' : 'Tool saved successfully');
      setTriggerFormModal(false);
      fetchData();
    } catch (error) {
      notifyError('Error while saving the data');
      console.log(error);
    }
  };

  const handleToolRemoval = async () => {
    const { _id: id } = currentTool;

    try {
      await api.delete(`/tools/${id}`, { params: { name: search } });
      notifySuccess('Tool removed successfully');
      setIsRemoving(false);
      fetchData();
    } catch (error) {
      notifyError('Error while saving the data');
      console.log(error);
    }
  };

  return (
    <ToolsContext.Provider
      value={{
        loading,
        tools,
        currentTool,
        setCurrentTool,
        triggerFormModal,
        setTriggerFormModal,
        setSearch,
        fetchData,
        handleFormSubmit,
        setIsRemoving,
        isRemoving,
        handleToolRemoval
      }}
    >
      {children}
    </ToolsContext.Provider>
  );
};

export { ContextProvider, ToolsContext };
