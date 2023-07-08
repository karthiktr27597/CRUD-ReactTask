import { Button, Paper, TextField } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = ({ artist, setArtist }) => {

    const { artistId } = useParams();
    const navigate = useNavigate();
    console.log(artistId);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [profession, setProfession] = useState("");
    const [latestMovie, setLatestMovie] = useState("");


    useEffect(() => {
        const artistData = artist.find((art) => art.id === artistId);
        // console.log("id", artistData);

        if (artistData) {
            setId(artistData.id);
            setName(artistData.name);
            setAge(artistData.age);
            setProfession(artistData.profession);
            setLatestMovie(artistData.latestMovie);
        }

    }, [artistId, artist]);


    // console.log(editId);

    function handleUpdate() {

        const findIndex = artist.findIndex((val) => val.id === artistId)
        console.log('Index', findIndex);

        const updatedArtist = {
            id,
            name,
            age,
            profession,
            latestMovie
        }

        artist[findIndex] = updatedArtist;

        setArtist([...artist]);
        navigate("/users");


    }

    return (

        <div className="update-create">
             <Paper elevation={0} variant="outlined">
            <h2>Edit and update the details</h2>
            <div className="artist-form">
                <TextField id="filled-basic" label="id" variant="outlined" type="number" placeholder="id" value={id} onChange={(e) => setId(e.target.value)} />
                <TextField id="filled-basic" label="name" variant="outlined" type="aname" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField id="filled-basic" label="age" variant="outlined" type="age" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} />
                <TextField id="filled-basic" label="profession" variant="outlined" type="profession" placeholder="profession" value={profession} onChange={(e) => setProfession(e.target.value)} />
                <TextField id="filled-basic" label="latestmovie" variant="outlined" type="latestMovie" placeholder="latestmovie" value={latestMovie} onChange={(e) => setLatestMovie(e.target.value)} />
                <Button type="submit" color="success" variant="contained" onClick={handleUpdate} >Upadate Artist</Button>
            </div>
            </Paper>
        </div>
    )

}

export default Update;