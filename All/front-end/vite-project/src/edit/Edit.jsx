// import './Edit.css'
// import one from '../assets/21.svg'
// import two from '../assets/22.svg'
// import edit from '../assets/edit.svg'
// import {Link} from 'react-router-dom';


// const Edit = ()=>{
// return(
// <div className='editcont'>
// <p className='H1'>Admin panel</p>
// <label className='label1' htmlFor="inputfield">Input Field</label>
// <input className="input-field" id="inputfield" name="inputfield" type="text" />
// <button className='homepagebutton'>Search</button>
// <div className='editpart'>

// <div className='dif'>
// <img src={one}/>
// <div className='imgone'>
// <h3>Canadian Beaver</h3>
// <p className='pedit'>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
// <div className='buts'>
// <button className='edbut'><Link to="/admin" className="gfvdsjhjd">edit</Link></button>
// <button className='edbut'>delete</button></div>
// </div>
// </div>

// <div className='difforsec'>
// <img src={two}/>
// <div className='imgsec'>
// <h3>Canadian Beaver</h3>
// <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
// <div className='buts'>
// <button className='edbut'><Link to="/admin" className="gfvdsjhjd">edit</Link></button>
// <button className='edbut'>delete</button></div>
// </div>
// </div>

// <div className='addpics'>
// <Link to="/admin2"><img src={edit}/></Link>
// <p className='addnewcoin'><Link to="/admin2">Add a new coin</Link></p>
// </div>

// </div>.
// </div>
// );
// };
// export default Edit;



import './Edit.css';
import one from '../assets/21.svg';
import two from '../assets/22.svg';
import edit from '../assets/edit.svg';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Edit = () => {
  const location = useLocation();

  // Get updated coin data from location.state (which can contain a new coin or updated coin)
  const updatedCoin = location.state?.updatedCoin;
  const newCoin = location.state?.newCoin;

  const [coins, setCoins] = useState([
    {
      id: 1,
      img: one,
      title: 'Canadian Beaver',
      description:
        '"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.',
    },
    {
      id: 2,
      img: two,
      title: 'Canadian Beaver',
      description:
        '"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.',
    },
  ]);

  useEffect(() => {
    if (updatedCoin) {
      setCoins((prevCoins) =>
        prevCoins.map((coin) =>
          coin.id === updatedCoin.id
            ? { ...coin, title: updatedCoin.title, description: updatedCoin.description }
            : coin
        )
      );
    }

    if (newCoin) {
      // Adding the new coin to the list
      setCoins((prevCoins) => [...prevCoins, newCoin]);
    }
  }, [updatedCoin, newCoin]);

  const handleDelete = (id) => {
    setCoins((prevCoins) => prevCoins.filter((coin) => coin.id !== id));
  };

  return (
    <div className="editcont">
      <p className="H1">Admin panel</p>
      <label className="label1" htmlFor="inputfield">
        Input Field
      </label>
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
                  <Link to="/admin" state={{ coinId: coin.id, title: coin.title, description: coin.description }}>
                    Edit
                  </Link>
                </button>
                <button className="edbut" onClick={() => handleDelete(coin.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="addpics">
          <Link to="/admin2">
            <img src={edit} alt="Add new" />
          </Link>
          <p className="addnewcoin">
            <Link to="/admin2">Add a new coin</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Edit;

