import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[formData,setFormData] = useState({username:'',password:''});
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData({
      ...formData,[name]:value
    })
  }
  const handleSubmit =(e) =>{
    e.preventDefault();
    alert(`Username:${formData.username},Password:${formData.password}`)
  }
  return (
    <form onSubmit={handleSubmit} >
      <label> Username:
      <input type='text' name='username' value={formData.username} onChange={handleChange}/></label>
      <label >Password:
      <input name='password' value={formData.password}onChange={handleChange}type='password'/></label>
      <button type='submit'>submit</button>
    </form>
  );
}

export default App;
