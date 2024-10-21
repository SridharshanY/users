import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import axios from "axios";

function App() {
  const [user, setUser] = useState("");

  const getData = async () => {
    try {
      const {data} = await axios("https://randomuser.me/api/");
      setUser(data.results[0])
      // const data = await res.json();
      // setUser(data.results[0])
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Header user={user} />
      <Main {...user} getData={getData} />
    </div>
  );
}

export default App;
