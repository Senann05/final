import './List.css'
import {Link} from 'react-router-dom';
import one from '../assets/21.svg'
import two from '../assets/22.svg'
import three from '../assets/23.svg'
import four from '../assets/24.svg'
import five from '../assets/25.svg'
import six from '../assets/26.svg'

const List = ()=>{
return(
    <div>
    <div className='listcontainer'>
        <div>
<h1>List of the coins<p className='headerp'>Homepage — List of the coins</p></h1>

<label className='label1' htmlFor="inputfield">Input Field</label>
<input className="input-field" id="inputfield" name="inputfield" type="text" />

<button className='homepagebutton'>Search</button>
</div>
<Link>Advanced Filter &#11167;</Link>

<div className='coins'>
<div className='coin-left'>

    <div className='coinleft'>
        <img src={one} className='img1'></img>
        <span><h2 className='firsth2'>Canadian Beaver</h2>
        <p>"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</p></span>
</div>

<div className='coinleft'>
        <img src={two} className='img2'></img>
        <span><h2 className='firsth2'>Looney</h2>
        <p>"Looney". Unique coin with the image of a goat. Canadian dollar symbol.</p></span>
</div>

<div className='coinleft'>
        <img src={three} className='img3'></img>
        <span><h2 className='firsth2'>Jefferson</h2>
        <p>Unique coin featuring Thomas Jefferson,the 3rd American president. Face value - 5 cents.
</p></span>
</div>

</div>
<div className='coin-right'>
<div className='coinleft'>
        <img src={four} className='img4'></img>
        <span><h2 className='firsth2'>Kennedy</h2>
        <p>The unique coin is made in honor of the assassination of the 35th president of Texas.</p></span>
</div>

<div className='coinleft'>
        <img src={five} className='img5'></img>
        <span><h2 className='firsth2'>Canadian Cent</h2>
        <p>"Canadian cent." A unique coin with the image of maple leaves - symbols of Canada. Face value - 1 cent.</p></span>
</div>

<div className='coinleft'>
        <img src={six} className='img6'></img>
        <span><h2 className='firsth2'>A penny </h2>
        <p>"A penny". A unique coin with a shield image with 13 vertical stripes.</p></span>
</div>

</div>
</div>
</div>
</div>
);
};
export default List;