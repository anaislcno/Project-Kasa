import React from "react";
import "../Tags/Tags.scss"

function Tags ({ tags }) {
  return (
    <div className="tag-container">
      {tags.map((tag, id) => (
        <span key={id} className="tag__name">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags