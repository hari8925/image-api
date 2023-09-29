import React from "react";
import { useState, useEffect } from "react";

const Image = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => document.write("loding..." + error));
  }, []);

  return (
    <div className="container mt-5 ">
      <div className="row mt-5">
        {data.map((image) => (
          <div key={image.id} className="col-lg-3 col-md-4 col-sm-1  mb-4">
            <div className="card h-100">
              <img
                src={image.url}
                className="card-img-top"
                alt={image.description}
              />
              <div className="card-body">
                <h5 className="card-title">{image.title}</h5>
                {/* <p className="card-text">{image.description}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
