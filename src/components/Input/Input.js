import { forwardRef } from 'react';
import ReactTooltip from 'react-tooltip';

import warningImg from '../../assets/warning.svg';

export const Input = forwardRef(
  ({ label, type, name, placeholder, value, onChange, onBlur, error, maxLength }, ref) => (
    <div className={`field ${error ? 'field__input-container--error' : ''}`}>
      <label className="field__label">{label}</label>
      {type === 'text' && (
        <>
          <input
            maxLength={maxLength}
            type={type}
            name={name}
            id={name}
            className={`field__input ${error ? 'field__input--error' : ''}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        </>
      )}
      {type === 'textarea' && (
        <textarea
          maxLength={maxLength}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          ref={ref}
          className={`field__textarea ${error ? 'field__textarea--error' : ''}`}
        />
      )}

      {error && (
        <>
          <img className="field__error-icon" data-tip={error} src={warningImg} alt="Warning" />
          <ReactTooltip
            textColor="#fff"
            backgroundColor="#f95e5a"
            type="error"
            effect="solid"
            place="top"
          />
        </>
      )}
    </div>
  )
);
