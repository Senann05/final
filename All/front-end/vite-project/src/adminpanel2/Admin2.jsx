// import './Admin2.css'
// import img from '../assets/edit.svg'

// const Admin2 =()=>{
//     return (
//         <div className="AdminContainer">
//           <h1 className="AdminTitle">Admin Panel</h1>
//           <div className="FormContainer">
    
//             <div className="LeftColumn">
//               <label className="InputLabel">Coin name</label>
//               <input className="TextInput" type="text" />
//               <label className="InputLabel">Face value</label>
//               <input className="TextInput" type="text" />
//               <label className="InputLabel">Year of issue</label>
//               <input className="TextInput" type="text" />
//               <label className="InputLabel">Price</label>
//               <input className="TextInput" type="text" />
//               <label className="InputLabel">Country</label>
//               <input className="TextInput" type="text" />
//               <label className="InputLabel">Metal</label>
//               <input className="TextInput" type="text" />
//             </div>
    
//             <div className="MiddleColumn">
//               <label className="InputLabel">Short description</label>
//               <textarea className="TextAreaInput" rows="3"></textarea>
//               <label className="InputLabel">Long description</label>
//               <textarea className="TextAreaInput" rows="5"></textarea>
//             </div>
    
//             <div className="RightColumn">
// <img className='admin2img' src={img}/>
// <img className='admin2img' src={img}/>
//             </div>


//           </div>
//           <div className="ButtonContainer">
//           <button className="CancelButton">Cancel</button>
//           <button className="SaveButton">Save</button>
//           </div>
//         </div>
//       );
// };
// export default Admin2;




import './Admin2.css';
import img from '../assets/edit.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin2 = () => {
  const navigate = useNavigate();
  const [newCoin, setNewCoin] = useState({
    id: Math.random(), // Unikal ID yaradılır
    img: img,
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCoin((prevCoin) => ({
      ...prevCoin,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // "Edit" səhifəsinə məlumat ötürülür
    navigate('/edit', { state: { newCoin } });
  };

  return (
    <div className="AdminContainer">
      <h1 className="AdminTitle">Admin Panel</h1>
      <div className="FormContainer">
        <div className="LeftColumn">
          <label className="InputLabel">Coin name</label>
          <input
            className="TextInput"
            type="text"
            name="title"
            value={newCoin.title}
            onChange={handleChange}
          />
          <label className="InputLabel">Description</label>
          <textarea
            className="TextAreaInput"
            rows="3"
            name="description"
            value={newCoin.description}
            onChange={handleChange}
          />
        </div>
        <div className="RightColumn">
          <img className="admin2img" src={img} alt="Coin" />
        </div>
      </div>
      <div className="ButtonContainer">
        <button className="CancelButton" onClick={() => navigate('/edit')}>
          Cancel
        </button>
        <button className="SaveButton" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Admin2;
