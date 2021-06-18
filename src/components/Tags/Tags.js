import { ButtonIcon } from '../';
import closeImg from '../../assets/close.svg';

export const Tags = () => {
  const tags = ['pedro', 'joão', 'maria'];

  const handleCloseTag = tag => {
    console.log(tag);
  };

  return (
    <div className="tags">
      <div className="tags__container">
        {tags.map(tag => (
          <div key={tag} className="tag">
            <span>#{tag}</span>
            <ButtonIcon
              onClick={() => handleCloseTag(tag)}
              image={closeImg}
              altText="Close Tag"
              className="btn--close-tag"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
