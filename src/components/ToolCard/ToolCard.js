import { ButtonIcon } from '../index';
import editImg from '../../assets/edit.svg';
import deleteImg from '../../assets/delete.svg';

export const ToolCard = ({ tool }) => {
  const { name, description, tags, url, _id: id } = tool;

  const handleEdit = () => {
    console.log(`edit ${(name, tags)}`);
  };

  const handleDelete = () => {
    console.log(`delete ${id}`);
  };

  return (
    <div className="tools__container">
      <div className="tools__header">
        <h3>
          <a target="_blank" rel="noreferrer" href={url}>
            {name}
          </a>
        </h3>
        <div className="tools__header-icons">
          <ButtonIcon
            onClick={handleEdit}
            image={editImg}
            altText="Edit Tool"
            className="btn--tools-icon"
          />
          <ButtonIcon
            onClick={handleDelete}
            image={deleteImg}
            altText="Delete Tool"
            className="btn--tools-icon"
          />
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
};
