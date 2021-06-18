import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { ToolsContext } from '../../hooks/toolsContext';
import { Input, Button } from '../index';
import { validUrl } from './form.service';

export const Form = () => {
  const { currentTool, handleFormSubmit } = useContext(ToolsContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues: currentTool });

  return (
    <form className="App" onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        maxLength={120}
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
        maxLength={250}
        type="textarea"
        label="Tool description"
        placeholder="Please insert tool description"
        error={errors.description?.message}
        {...register('description', { required: 'Required Field' })}
      />

      <Input
        type="text"
        label="Tags"
        placeholder="Please insert tool tags separated by commas"
        error={errors.tags?.message}
        {...register('tags', { required: 'Required Field' })}
      />

      <Button type="submit" color="blue" disabled={isSubmitting}>
        Save
      </Button>
    </form>
  );
};
