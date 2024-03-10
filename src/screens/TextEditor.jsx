import { useState } from "react";
import JoditEditor from "jodit-react";
import { Typography } from "antd";

function TextEditor() {
  const [content, setContent] = useState("");

  return (
    <div className="container mx-auto ml-4  lg:h-[70vh] h-screen mb-[2vw] mt-[8vw] lg:ml-4 lg:w-[70vw] w-[100vw]">
      <div className="lg:flex lg:flex-col  mt-[8vw]    items-center justify-center">
        <Typography style={{ color: "white", fontSize: "3vw" }}>
          Text Editor
        </Typography>
        <div className="w-[70vw] lg:w-[50vw]">
          <JoditEditor
            onChange={(newContent) => setContent(newContent)}
            height="70vh" // Set the height directly
            style={{ fontSize: "1.5vw" }} // You can also adjust the font size if needed
          />
        </div>
      </div>
    </div>
  );
}

export default TextEditor;
