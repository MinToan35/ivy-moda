import { useState } from "react";
import { Link } from "react-router-dom";
const ReadMore = ({ name, data }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <div className="title-footer">
        <p>{name}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? (
            <i className="fa-solid fa-angle-down"></i>
          ) : (
            <i className="fa-solid fa-angle-right"></i>
          )}
        </button>
      </div>
      {readMore && (
        <ul>
          {data.map((item) => {
            return (
              <li key={item.id}>
                <Link to="/">{item.title}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default ReadMore;
