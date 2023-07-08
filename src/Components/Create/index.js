import { useState } from "react";
import Base from "../Base";
import { useNavigate } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import { Button, Paper, TextField } from "@mui/material";

const Create = ({ artist, setArtist, loginUser }) => {

    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [profession, setProfession] = useState("");
    const [latestMovie, setLatestMovie] = useState("");

    function handleSubmit() {

        const newArtist = {
            id,
            name,
            age,
            profession,
            latestMovie
        }
        setArtist([...artist, newArtist]);
        navigate("/users");

    }

    return (
        <Base loginUser={loginUser}>
            <div className="update-create">
            <Paper elevation={0} variant="outlined">
                <h2>Add Artist details and update here</h2>
                <div className="artist-form">
                    <TextField id="outlined-basic" label="id" variant="outlined" type="number" value={id} onChange={(e) => setId(e.target.value)} />
                    <TextField id="outlined-basic" label="name" variant="outlined" type="aname" value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField id="outlined-basic" label="age" variant="outlined" type="age" value={age} onChange={(e) => setAge(e.target.value)} />
                    <TextField id="outlined-basic" label="profession" variant="outlined" type="profession" value={profession} onChange={(e) => setProfession(e.target.value)} />
                    <TextField id="outlined-basic" label="latestmovie" variant="outlined" type="latestMovie" value={latestMovie} onChange={(e) => setLatestMovie(e.target.value)} />
                    <Button type="submit" variant="contained" onClick={handleSubmit} startIcon={<AddIcon />} >Add Artist</Button>
                </div>
                </Paper>
            </div>
        </Base>

    )

}

export default Create;