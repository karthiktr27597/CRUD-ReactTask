import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Base = ({ title, discription, body, loginUser, children }) => {
    const navigate = useNavigate();

    return (
        <div className="main-container">
            <header >
                <Box sx={{ flexGrow: 2 }}>
                    <AppBar position="flex"  id="navbar">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                Artist-App
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

                            </Typography>
                            <Button color="inherit" variant="outlined" onClick={() => navigate("/")}>Dasboard</Button>
                            <Button color="inherit" variant="outlined" onClick={() => navigate("/users")}>Artist List</Button>
                            <Button color="inherit" variant="outlined" onClick={() => navigate("/create-user")}>Add Artist</Button>
                            <Button color="inherit" variant="outlined" onClick={() => navigate(`/profile/${loginUser.id}`)}>Profile</Button>

                        </Toolbar>
                    </AppBar>
                </Box>

            </header>
            <main>
                <h1>{title}</h1>
                <h2>{discription}</h2>
                <h3>{body}</h3>
                <div className="content">
                    {children}
                </div>

            </main>
        </div>
    )

}

export default Base;



