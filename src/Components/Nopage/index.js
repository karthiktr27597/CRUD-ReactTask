import { useNavigate } from "react-router-dom";



const NoPage = () => {

    let navigate = useNavigate();
    return (
        <div>
            <p> 404 Error Incorrect path</p>
            <button onClick={() => navigate("/")}>Home</button>
        </div>
    )
}

export default NoPage;