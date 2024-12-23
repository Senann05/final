import './Edit.css'
import one from '../assets/21.svg'
import two from '../assets/22.svg'

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
<p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
<div className='buts'>
<button>edit</button>
<button>delete</button></div>
</div>
</div>


<div className='difforsec'>
<img src={two}/>
<div className='imgsec'>
<h3>Canadian Beaver</h3>
<p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p>
<div className='buts'>
<button>edit</button>
<button>delete</button></div>
</div>
</div>



</div>.
</div>
);
};
export default Edit;