import { Button } from "@mui/material";
import Base from "../Base";
import { useNavigate } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';




const Users = ({ artist, setArtist, loginUser }) => {

    const navigate = useNavigate();

    const handleDelete = (id) => {
        const afterDeleted = artist.filter((val) => val.id !== id)
        // console.log(afterDeleted);
        setArtist([...afterDeleted]);
    }


    return (
        <Base title={"Below is the artist list"} loginUser={loginUser}
        >
            <div className="dashboard">

                <div className="artist-collection">
                    {
                        artist.map((val, i) => (

                            <div className="artist-card" key={i}>
                                <h2>{val.name}</h2>
                                <p>Age:{val.age}</p>
                                <p>Profession:{val.profession}</p>
                                <p>LatestMovie:{val.latestMovie}</p>
                                <div className="card-btn">
                                    <Button variant="outlined" startIcon={<EditIcon />} onClick={() => navigate(`/edit-user/${val.id}`)}>Edit</Button>
                                    <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(val.id)}>
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </Base>

    )

}
export default Users;