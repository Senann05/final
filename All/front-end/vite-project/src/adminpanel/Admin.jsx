import './Admin.css';

const Admin = () => {
  return (
    <div className="AdminContainer">
      <h1 className="AdminTitle">Admin Panel</h1>
      <div className="FormContainer">

        <div className="LeftColumn">
          <label className="InputLabel">Coin name</label>
          <input className="TextInput" type="text" />
          <label className="InputLabel">Face value</label>
          <input className="TextInput" type="text" />
          <label className="InputLabel">Year of issue</label>
          <input className="TextInput" type="text" />
          <label className="InputLabel">Price</label>
          <input className="TextInput" type="text" />
          <label className="InputLabel">Country</label>
          <input className="TextInput" type="text" />
          <label className="InputLabel">Metal</label>
          <input className="TextInput" type="text" />
        </div>

        <div className="MiddleColumn">
          <label className="InputLabel">Short description</label>
          <textarea className="TextAreaInput" rows="3"></textarea>
          <label className="InputLabel">Long description</label>
          <textarea className="TextAreaInput" rows="5"></textarea>
        </div>

        <div className="RightColumn">
          <label className="InputLabel">Link to obverse image</label>
          <input className="TextInput" type="text" />
          <label className="InputLabel">Link to reverse image</label>
          <input className="TextInput" type="text" />
        </div>
      </div>

      <div className="ButtonContainer">
      <button className="CancelButton">Cancel</button>
      <button className="SaveButton">Save</button>
      </div>
    </div>
  );
};

export default Admin;