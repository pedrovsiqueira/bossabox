import { ReactComponent as SearchIcon } from '../../assets/search.svg';

export const InputSearch = ({ type, name, placeholder, onChange }) => (
  <div className={`search-field`}>
    <SearchIcon className="search-field-icon" />
    <input
      type={type}
      name={name}
      className={`field__input search-field__input`}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);
