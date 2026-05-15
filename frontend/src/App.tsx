import { useState } from "react";
import UploadForm from "./components/UploadForm";
import ResultCard from "./components/ResultCard";
import "./styles.css";

function App() {
  const [result, setResult] = useState<any>(null);

  return (
    <div className="app">
      <h1>AI Detection System</h1>

      <p className="subtitle">
        Upload images or videos for AI-powered detection
      </p>

      <UploadForm onResult={setResult} />

      {result && <ResultCard data={result} />}
    </div>
  );
}

export default App;