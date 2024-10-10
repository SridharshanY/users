import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

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
  
  return (
    <div className="App">
      <Header user={user}/>
      <Main {...user}/>
    </div>
  );
}

export default App;