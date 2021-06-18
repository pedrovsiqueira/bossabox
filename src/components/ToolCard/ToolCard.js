import { ButtonIcon, Tags } from '../index';
import { ReactComponent as EditIcon } from '../../assets/edit.svg';
import { ReactComponent as DeleteIcon } from '../../assets/delete.svg';

export const ToolCard = ({ tool, handleEdit, handleDelete, className }) => {
  const { name, description, tags, url } = tool;

  return (
    <div className={`tools__container ${className ? className : ''}`}>
      <div className="tools__header">
        <h3>
          <a target="_blank" rel="noreferrer" href={url}>
            {name}
          </a>
        </h3>
        <div className="tools__header-icons">
          <ButtonIcon onClick={handleEdit} Icon={EditIcon} className="btn--tools-icon" />
          <ButtonIcon onClick={handleDelete} Icon={DeleteIcon} className="btn--tools-icon" />
        </div>
      </div>
      <p>{description}</p>
      <Tags tags={tags} />
    </div>
  );
};
