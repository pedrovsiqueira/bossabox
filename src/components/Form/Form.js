import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { Input, Button } from '../index';

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const validUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;

  const handleFormSubmit = async values => {
    const { name, description, url, tags } = values;

    const payload = {
      name,
      description,
      url,
      tags: [tags]
    };

    await api.post('/tools', payload);
  };

  return (
    <form className="App" onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        maxLength={30}
        type="text"
        label="Tool name"
        placeholder="Please insert tool name"
        error={errors.name?.message}
        {...register('name', {
          required: 'Required Field'
        })}
      />

      <Input
        type="text"
        label="Tool link"
        placeholder="Please insert tool link"
        error={errors.url?.message}
        {...register('url', {
          required: 'Required Field',
          pattern: {
            value: validUrl,
            message: 'Please insert a valid link'
          }
        })}
      />

      <Input
        maxLength={120}
        type="textarea"
        label="Tool description"
        placeholder="Please insert tool description"
        error={errors.description?.message}
        {...register('description', { required: 'Required Field' })}
      />

      <Input
        type="text"
        label="Tags"
        placeholder="Please insert tool tags"
        error={errors.tags?.message}
        {...register('tags', { required: 'Required Field' })}
      />

      <Button type="submit" color="blue" disabled={isSubmitting}>
        Save
      </Button>
    </form>
  );
};
