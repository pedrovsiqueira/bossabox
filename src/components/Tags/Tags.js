export const Tags = ({ tags, onClick }) => (
  <div className="tags">
    {tags.map((tag, index) => (
      <button key={index} className="tag" onClick={() => onClick(tag)}>
        #{tag}
      </button>
    ))}
  </div>
);
