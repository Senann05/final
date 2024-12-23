import './HomePage1.css'
import {Link} from 'react-router-dom';
import Bullion from '../assets/1.svg'
import Exclusive from '../assets/2.svg'
import Commemorative from '../assets/3.svg'

const HomePage1 = ()=>{
return(
<div>
<div className='homepagecontainer'>
<h1>Homepage</h1>
<label className='label1' htmlFor="inputfield">Input Field</label>
<input className="input-field" id="inputfield" name="inputfield" type="text" />

<button className='homepagebutton'>Search</button>
</div>
<Link>Advanced Filter &#11165;</Link>

<div className='coincontainer'>
    <div>
        <h1>Bullion coins</h1>
        <Link>Show All</Link>
        <br></br>
        <img src={Bullion} className='imghome1'></img>
    </div>
<div>
    <h1>Exclusive coins</h1>
    <Link>Show All</Link>
    <br></br>
    <img src={Exclusive} className='imghome1'></img>
    
</div>
<div>
    <h1>Commemorative coins</h1>
    <Link>Show All</Link>
    <br></br>
    <img src={Commemorative} className='imghome1'></img>
</div>

</div>

</div>
);
};
export default HomePage1;