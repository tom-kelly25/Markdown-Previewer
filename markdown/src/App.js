import "./App.css";
import React from "react";

function App() {
  const [text, setText] = React.useState("");

  return (
    <div className="text-center px-4">
      <h1 className="p-4">Markdown Previewer</h1>
      <textarea
        value={text}
        name="text"
        id="text"
        rows="10"
        className="textarea"
      ></textarea>
    </div>
  );
}

export default App;
