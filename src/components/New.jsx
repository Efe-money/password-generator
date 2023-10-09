
import React, { useState } from 'react';

const New = () => {
   const [email, setemail] = useState('');
   const [password, setpassword] = useState('');

  async function submitMe(e){
    e.preventDefault()
    const userinfo ={email, password}
    console.log(userinfo);

    try {
        const res = await fetch('http://localhost:5000/adduser', {
          method:'POST',
          headers:{"Content-Type":"Application/json"},
          body: JSON.stringify(userinfo)}
        )
        const response = await res.json()
        console.log(response);
      } catch (error) {
        console.log(error);
      }    
      

    
   }
  return (
    <div>
      <form>
  <div className="mb-3">
    
    <input onChange={(e)=> setemail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <input onChange={(e)=> setpassword(e.target.value)}type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button onClick={submitMe}type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default New;
