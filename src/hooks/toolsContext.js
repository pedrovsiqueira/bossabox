import React, { createContext, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { useDebounce } from 'use-debounce';

const ToolsContext = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [tools, setTools] = useState([]);
  const [currentTool, setCurrentTool] = useState([]);
  const [triggerFormModal, setTriggerFormModal] = useState(false);
  const [search, setSearch] = useState('');
  const [isRemoving, setIsRemoving] = useState(false);
  const [debouncedSearch] = useDebounce(search, 500);

  const toastMessageDefaults = {
    position: 'bottom-left',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  };

  const notifySuccess = message => {
    toast.success(message, { ...toastMessageDefaults });
  };

  const notifyError = message => {
    toast.error(message, { ...toastMessageDefaults });
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await api.get('/tools', { params: { name: debouncedSearch } });
      setTools(result.data);
    } catch (error) {
      notifyError('Error while loading the data');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch]); //eslint-disable-line

  const handleFormSubmit = async values => {
    const { name, description, url, tags, _id: id } = values;

    const formattedTags = tags
      .split(',')
      .map(tag => tag.trim())
      .filter(Boolean);

    const payload = {
      name,
      description,
      url,
      tags: formattedTags
    };

    const callBack = id ? api.put(`/tools/${id}`, payload) : api.post('/tools', payload);

    try {
      const toolResult = await callBack;
      notifySuccess(id ? 'Tool updated successfully' : 'Tool saved successfully');
      setTriggerFormModal(false);

      if (id) {
        return setTools(prevTools =>
          prevTools.map(tool => (tool._id === id ? toolResult.data : tool))
        );
      }

      setTools(prevTools => [...prevTools, toolResult.data]);
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
      setTools(prevTools => prevTools.filter(tool => tool._id !== id));
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
