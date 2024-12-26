import React, { useState } from 'react';
import './Edit.css';
import one from '../assets/21.svg';
import two from '../assets/22.svg';
import edit from '../assets/edit.svg';
import { Link } from 'react-router-dom';

const Edit = () => {
  const [coins, setCoins] = useState([
    {
      id: 1,
      img: one,
      title: 'Canadian Beaver',
      description: '"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.',
    },
    {
      id: 2,
      img: two,
      title: 'Canadian Beaver',
      description: '"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.',
    },
  ]);

  const handleDelete = (id) => {
    const updatedCoins = coins.filter((coin) => coin.id !== id);
    setCoins(updatedCoins);
  };

  return (
    <div className="editcont">
      <p className="H1">Admin panel</p>
      <label className="label1" htmlFor="inputfield">Input Field</label>
      <input className="input-field" id="inputfield" name="inputfield" type="text" />
      <button className="homepagebutton">Search</button>
      <div className="editpart">
        {coins.map((coin) => (
          <div className="dif" key={coin.id}>
            <img src={coin.img} alt={coin.title} />
            <div className="imgone">
              <h3>{coin.title}</h3>
              <p className="pedit">{coin.description}</p>
              <div className="buts">
                <button className="edbut">
                  <Link to="/admin" className="gfvdsjhjd">edit</Link>
                </button>
                <button className="edbut" onClick={() => handleDelete(coin.id)}>delete</button>
              </div>
            </div>
          </div>
        ))}
        <div className="addpics">
          <Link to="/admin2"><img src={edit} alt="Add new" /></Link>
          <p className="addnewcoin"><Link to="/admin2">Add a new coin</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Edit;
