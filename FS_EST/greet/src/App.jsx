import { useState } from "react";
import "./App.css";
import Welcome from "./Welcome";

function App() {
    const [name, setName] = useState("");

    return (
        <>
            <h1>React Props</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
            />

            <Welcome name={name} />
        </>
    );
}

export default App;
