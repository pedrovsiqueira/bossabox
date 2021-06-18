export const Button = ({ children, type, onClick, color, disabled }) => (
  <button
    disabled={disabled}
    type={type || 'button'}
    className={`btn btn--${color}`}
    onClick={onClick || null}
  >
    {children}
  </button>
);
