import './Regist.css'

const Regist = ()=>{
return(
    <div className="admin-container">
  <h2>Regist</h2>
  <div className="cnt2">
    <label htmlFor="login">Mail</label>
    <input className="input-login" id="login" name="login" type="text" />
  </div>
  <div>
    <label htmlFor="password">Password</label>
    <input className="input-password" id="password" name="password" type="password" />
  </div>
  <div>
    <label htmlFor="password">Confirm Password</label>
    <input className="input-password" id="password" name="password" type="password" />
  </div>
  <button className="loginbutton">Regist</button>
</div>
);
}
export default Regist;