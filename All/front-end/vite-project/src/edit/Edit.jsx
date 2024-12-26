import './Edit.css'
import one from '../assets/21.svg'
import two from '../assets/22.svg'
import edit from '../assets/edit.svg'
import {Link} from 'react-router-dom';


const Edit = ()=>{
return(
<div className='editcont'>
<p className='H1'>Admin panel</p>
<label className='label1' htmlFor="inputfield">Input Field</label>
<input className="input-field" id="inputfield" name="inputfield" type="text" />
<button className='homepagebutton'>Search</button>
<div className='editpart'>

<div className='dif'>
<img src={one}/>
<div className='imgone'>
<h3>Canadian Beaver</h3>
<p className='pedit'>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
<div className='buts'>
<button className='edbut'><Link to="/admin" className="gfvdsjhjd">edit</Link></button>
<button className='edbut'>delete</button></div>
</div>
</div>

<div className='difforsec'>
<img src={two}/>
<div className='imgsec'>
<h3>Canadian Beaver</h3>
<p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
<div className='buts'>
<button className='edbut'><Link to="/admin" className="gfvdsjhjd">edit</Link></button>
<button className='edbut'>delete</button></div>
</div>
</div>

<div className='addpics'>
<Link to="/admin2"><img src={edit}/></Link>
<p className='addnewcoin'><Link to="/admin2">Add a new coin</Link></p>
</div>

</div>.
</div>
);
};
export default Edit;