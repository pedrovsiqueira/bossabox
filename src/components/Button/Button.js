export const Button = ({ children, submit, onClick, color, icon }) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`btn btn--${color}`}
      onClick={onClick || null}
    >
      {children}
    </button>
  );
};
