import { useState } from "react";

function App() {
  const [system, setSystem] = useState("");
  const [result, setResult] = useState("");

  const generateDesign = async () => {
    const response = await fetch("http://localhost:5000/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ system }),
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>AI System Design Generator</h1>

      <input
        type="text"
        placeholder="Design YouTube"
        value={system}
        onChange={(e) => setSystem(e.target.value)}
      />

      <button onClick={generateDesign}>
        Generate
      </button>

      <h2>Output</h2>
      <p>{result}</p>
    </div>
  );
}

export default App;