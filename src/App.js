import { useEffect, useState } from "react";

function App() {

  const [user, setUser] = useState("");

  const getData = ()=>{
    fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => console.log(data));
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className="App">
      <h1>Name</h1>
      <img src="" alt="" />
      <p>Mail</p>
      <button onClick={getData}>Click here</button>
    </div>
  );
}

export default App;