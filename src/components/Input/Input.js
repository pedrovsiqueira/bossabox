export const Input = ({ label, type, name, placeholder, state, setState }) => {
  return (
    <div className="input__container">
      <label className="input__container__label">{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className={`input__container__input`}
        placeholder={placeholder || ''}
        value={state || ''}
        onChange={event => setState(event.target.value)}
        style={state === '' ? { border: '1px solid red' } : null}
        required
      />
    </div>
  );
};
