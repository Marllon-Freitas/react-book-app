import React, { useEffect, useState } from "react";

import { getVolumes } from "../services";
import { booksCategories } from "../utils/booksCategories";

function Home() {
  const [volumes, setVolumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(booksCategories);
  const [currentCategory, setCurrentCategory] = useState("");
  useEffect(() => {
    getVolumes(`subject:${currentCategory}`).then((response) => {
      console.log(response.data);
      setVolumes(response.data.items);
    });
  }, [currentCategory]);
  return (
    <div>
      <h1>Home</h1>
      <div className="categories">
        <h2>Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <h2>{volume.volumeInfo.title}</h2>
            <p>{volume.volumeInfo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
