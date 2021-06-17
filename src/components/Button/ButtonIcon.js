export const ButtonIcon = ({ image, altText, onClick, className }) => (
  <button type="button" onClick={onClick} className={className}>
    <img src={image} alt={altText} />
  </button>
);
