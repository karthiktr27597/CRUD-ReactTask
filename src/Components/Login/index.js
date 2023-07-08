import { useState } from "react";

const Login = ({ profile, setProfile }) => {

    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");

    let userName = "karthik";
    let password = "login";

    function handleLogin() {

        if (userName === name && password === pwd) {
            setProfile(1);
        } else {
            alert("Incorrect username or password")
        }
    }

    return (
        <div>
            <label>User Name</label>
            <input placeholder="enter user name" onChange={(e) => setName(e.target.value)} />
            <label>User password</label>
            <input placeholder="enter password" onChange={(e) => setPwd(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;

