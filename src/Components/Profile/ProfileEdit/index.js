import { Button, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const ProfileEdit = ({ loginUser, setLoginUser }) => {

    // console.log('c', loginUser);

    // const { editProfileId } = useParams();
    const navigate = useNavigate();
    // console.log(editProfileId);

    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [place, setPlace] = useState("");


    useEffect(() => {
        // const loginUserFind = loginUser.find((user) => user.id === editProfileId);
        // console.log("id", artistData);

        if (loginUser) {
            setName(loginUser.name);
            setProfession(loginUser.profession);
            setEmail(loginUser.email);
            setContact(loginUser.contact);
            setPlace(loginUser.place);
        }

    }, [loginUser.id, loginUser]);


    function handleUpdate() {

        // const findIndex = loginUser.findIndex((val) => val.id === editProfileId)
        // console.log('Index', findIndex);

        const updatedUser = {
            name,
            profession,
            email,
            contact,
            place
        }

        // loginUser[findIndex] = updatedUser;

        setLoginUser({ id: loginUser.id, ...updatedUser });
        // console.log(loginUser);
        // console.log("check", loginUser.id);
        navigate(`/profile/${loginUser.id}`);


    }

    return (

        <div className="update-create">
            <Paper elevation={0} variant="outlined">
                <h2>Edit and update your Profile </h2>
                <div className="artist-form">
                    <TextField id="filled-basic" label="id" variant="outlined" defaultValue="Normal" type="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField id="filled-basic" label="profession" variant="outlined" type="profession" value={profession} onChange={(e) => setProfession(e.target.value)} />
                    <TextField id="filled-basic" label="email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField id="filled-basic" label="contact" variant="outlined" type="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
                    <TextField id="filled-basic" label="place" variant="outlined" type="place" value={place} onChange={(e) => setPlace(e.target.value)} />
                    <Button type="submit" color="success" variant="contained" onClick={handleUpdate} >Upadate Profile</Button>
                </div>
            </Paper>
        </div>
    )

}

export default ProfileEdit;