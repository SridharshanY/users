import { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState("");

  const getData = ()=>{
    fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => setUser(data.results[0]));
  }

  useEffect(() => {
    getData()
  }, [])
  
  const {name, email, picture} = user

  return (
    <div className="App">
      <h1>{name?.first} {name?.last}</h1>
      <img src={picture?.large} alt="img" />
      <p>{email}</p>
      <button onClick={getData}>Click here</button>
    </div>
  );
}

export default App;