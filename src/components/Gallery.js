import React, { useState, useEffect } from "react";
import GalleryCard from "./GalleryCard";
import stays from "../stays.json";

const Gallery = () => {
  const sixStays = stays.slice(0, 6);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(stays);
  }, []);

  return (
    <div className="gallery-container">
      <div className="text-field">
        <h3>Stays in Findland</h3>
        <p id="">12+ stays</p>
      </div>

      <div className="gallery-box">
        {sixStays.map((stay) => (
          <GalleryCard
            key={stay.title}
            photo={stay.photo}
            type={stay.type}
            title={stay.title}
            rating={stay.rating}
            superHost={stay.superHost}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
