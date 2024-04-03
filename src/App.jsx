import { useState } from "react";
import axios from 'axios';
function App(){
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const[users,setUsers] = useState([]);

  async function getUsers(){
   const url =  import.meta.env.VITE_API_URL + "/users";
   const response = await axios.get(url);
   setUsers(response.data);
  }

  async function createUsers(){
    const url =  import.meta.env.VITE_API_URL + "/users";
    const newUser = {email , name};
    await axios.post(url,newUser)
    alert("User created");
   }

  return (
    <>
    {name} {email}
    <ul>
      {users.map(u => <li key={u.email}>{u.name}   {u.email}</li>)}
    </ul>

    <button onClick={getUsers}>Get users</button>
    <input placeholder="email" onChange={(e)=>{
      setEmail(e.target.value)
    }}/>
    <input placeholder="name" onChange={(e => setName(e.target.value))}/>
    <button onClick={createUsers}>Create user</button>
    </>
  )
}

export default App;