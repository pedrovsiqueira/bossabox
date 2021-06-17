export const Button = ({ children, type, onClick, color, icon, disabled }) => (
  <button
    disabled={disabled}
    type={type || 'button'}
    className={`btn btn--${color}`}
    onClick={onClick || null}
  >
    {children}
  </button>
);
