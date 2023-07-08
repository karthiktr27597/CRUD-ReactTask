import { useNavigate } from "react-router-dom";
import Base from "../Base";
import { Button, Paper } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const Profile = ({ loginUser }) => {

    const navigate = useNavigate();

    return (
        <Base loginUser={loginUser}>
            <Paper elevation={3} variant="outlined" className="profilePage" >
                <h1>{loginUser.name}</h1>
                <h3>{loginUser.profession}</h3>
                <h4>Email:{loginUser.email}</h4>
                <h4>contact:{loginUser.contact}</h4>
                <h4>{loginUser.place}</h4>
                <Button variant="outlined" startIcon={<EditIcon />} onClick={() => navigate(`/edit-profile/${loginUser.id}`)}>Edit</Button>
            </Paper>
        </Base>
    )
}

export default Profile;
