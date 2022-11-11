import React from "react";

function List({ data, url_error }) {
  return (
    <div>
      Danh sách thành viên là:
      {data.map((item) => (
        <li className="item" key={item.id}>
          Name: {item.name} - Age: {item.age}
          <img
            className="img"
            src={item.url}
            onError={({ currentTarget }) => {
              if (currentTarget && currentTarget.src) {
                currentTarget.src = url_error;
              }
            }}
          />
        </li>
      ))}
    </div>
  );
}

export default List;
