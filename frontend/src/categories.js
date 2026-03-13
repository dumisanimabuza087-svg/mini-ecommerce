import {useEffect,useState} from "react";
import axios from "axios";

function Categories(){

 const [cats,setCats] = useState([]);

 useEffect(()=>{

  axios.get("http://localhost:5000/api/categories")
  .then(res=>setCats(res.data));

 },[]);

 return(

  <div>

   <h2>Categories</h2>

   {cats.map(c=>(
    <p key={c.id}>{c.name}</p>
   ))}

  </div>

 );

}

export default Categories;