import React, { useState, useEffect } from 'react';

interface Place {
  name: string;
  address: string;
  rating: number;
}


export const Test= () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [newPlace, setNewPlace] = useState<Place>({
    name: '',
    address: '',
    rating: 0,
  });

  useEffect(() => {
    const savedPlaces = localStorage.getItem('places');
    if (savedPlaces) {
      setPlaces(JSON.parse(savedPlaces));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('places', JSON.stringify(places));
  }, [places]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewPlace({ ...newPlace, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPlaces([...places, newPlace]);
    setNewPlace({ name: '', address: '', rating: 0 });
  };

  return (
    <div>
      <h1>My Favorite Places</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newPlace.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={newPlace.address}
            onChange={handleChange}
          />
        </label>
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={newPlace.rating}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Place</button>
      </form>
      <ul>
        {places.map((place) => (
          <li key={place.name}>
            {place.name}, {place.address} - {place.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};


