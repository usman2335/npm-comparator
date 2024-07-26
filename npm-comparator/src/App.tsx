import Header from "./components/header";
import SearchBar from "./components/search";
import Comparison from "./components/comparison";
import Graph from "./components/graph";
import Result from "./components/result";
import { useState } from "react";


function App() {
  const [loading, setLoading] = useState(true);
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleCompare = (option1: string, option2: string) => {
    setLoading(false);
    setSelectedOption1(option1);
    setSelectedOption2(option2);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <SearchBar onCompare={handleCompare}></SearchBar>
      {loading ? (
        <></>
      ) : (
        <>
          <Comparison selectedOption1={selectedOption1} selectedOption2={selectedOption2}></Comparison>
          <Graph selectedOption1={selectedOption1} selectedOption2={selectedOption2}></Graph>
          <Result selectedOption1={selectedOption1} selectedOption2={selectedOption2}></Result>
        </>
      )}

      <div className="footer">Copyright ©2023 Emumba Inc.</div>
    </div>
  );
}

export default App;
