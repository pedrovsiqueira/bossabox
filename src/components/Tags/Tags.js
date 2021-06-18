export const Tags = ({ tags }) => (
  <div className="tags">
    <div className="tags__container">
      {tags.map((tag, index) => (
        <div key={index} className="tag">
          <span>#{tag}</span>
        </div>
      ))}
    </div>
  </div>
);
