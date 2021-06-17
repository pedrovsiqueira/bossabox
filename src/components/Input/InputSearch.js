import searchImg from '../../assets/search.svg';

export const InputSearch = ({ type, name, placeholder, onChange }) => (
  <div className={`search-field`}>
    <img className="search-field-icon" src={searchImg} alt="Magnifying glass" />
    <input
      type={type}
      name={name}
      className={`field__input search-field__input`}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);
