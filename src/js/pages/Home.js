import React, { useState, useEffect } from "react";
import "../../css/Home.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3001/books");
      const json = await result.json();

      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex flex-wrap py-2">
          {data.map((item) => {
            return (
              <div key={item.id} className="card olib__book flex-row">
                <div className="card-header card-header-left border-0">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="card-img"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-subtitle">{item.author}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
