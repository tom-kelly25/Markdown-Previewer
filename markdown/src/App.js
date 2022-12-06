import "./App.css";
import React from "react";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

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
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <h3 className="mt-3">Output</h3>
      <Preview markdown={text} />
    </div>
  );
}

function Preview({ markdown }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: renderer }),
      }}
      id="preview"
    />
  );
}

export default App;
