import './HomePage2.css'
import {Link} from 'react-router-dom';

const HomePage2 = () =>{
    return(
<div>
<div className='homepage2container'>
    <div>
<h1>Homepage</h1>
<label className='label1' htmlFor="inputfield">Input Field</label>
<input className="input-field" id="inputfield" name="inputfield" type="text" />

<button className='homepagebutton'>Search</button>
</div>
<Link>Advanced Filter &#11167;</Link>

<div className='imputs'>






</div>
</div>
</div>
    )
}
export default HomePage2;