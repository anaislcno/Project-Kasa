import React from "react";
import "../Tags/Tags.scss"
import { housingList } from "../../datas/logements";

function Tags() {
  return (
    <ul className="tags">
      {housingList.map(({ id, tags }) =>
      <div key={id} className="">
        <p className="tags__names">{tags}</p>
      </div>
      )}
    </ul>
  );
}

export default Tags