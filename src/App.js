import axios from 'axios';
import './App.css';
import Base from './Components/Base';
import Create from './Components/Create';
import NoPage from './Components/Nopage';
import Profile from './Components/Profile';
import ProfileEdit from './Components/Profile/ProfileEdit';
import Update from './Components/Update';
import Users from './Components/Users';
// import { data } from './db.js';
// import { loginData } from './db.js';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';


function App() {

  const [artist, setArtist] = useState([]);

  const [loginUser, setLoginUser] = useState({});


  useEffect(() => {

    axios.get("https://crudoperation-backend.onrender.com/all")
      .then((response) => {
        setArtist(response.data.artistData)
        setLoginUser(response.data.loginData)
        console.log("working good")
      })
      .catch((err) => console.log(err))
  }, [])

  console.log(artist, loginUser);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Base artist={artist}
          setArtist={setArtist} title={"Welcome to Artist-App"} discription={"All artist details can get here"} body={"Please Navigate"} loginUser={loginUser} />} />
        <Route path="/users" element={<Users artist={artist}
          setArtist={setArtist} loginUser={loginUser} />} />
        <Route path="/create-user" element={<Create artist={artist} setArtist={setArtist} loginUser={loginUser} />} />
        <Route path="/edit-user/:artistId" element={<Update artist={artist} setArtist={setArtist} loginUser={loginUser} />} />
        <Route path={"/profile/:loginUserId"} element={<Profile loginUser={loginUser} setLoginUser={setLoginUser} />} />
        <Route path={"/edit-profile/:editProfileId"} element={<ProfileEdit loginUser={loginUser} setLoginUser={setLoginUser} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
