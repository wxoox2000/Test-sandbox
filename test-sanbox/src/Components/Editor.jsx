import Editor from "@monaco-editor/react";
import { useRef, useState } from "react";

const defValue = `public Map<String,String> getContextUserInformation(){
    //code here
}`;
const CodeEditor = () => {
  const [open, setOpen] = useState(false);
  const editorRef = useRef(null);
  //   const handleEditorChange = (value, event) => {
  //     if (timerRef.current) {
  //       clearTimeout(timerRef.current);
  //     }
  //     timerRef.current = setTimeout(() => {
  //       setValue(value);
  //       console.log("here is the current model value:", value);
  //     }, 500);
  //   };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const showValue = () => {
    alert(editorRef.current.getValue());
    setOpen(true);
  };

  //   const closeModal = (e) => {
  //     if(e.target.id === e.currentTarget.id) {
  //         setOpen(false);
  //     }
  //   }

  return (
    <div style={{ display: "flex", alignItems: "start", gap: 40 }}>
      <div style={{borderRadius: "10px", overflow: "hidden"}}>
        <Editor
          height="500px"
          width="700px"
          defaultLanguage="apex"
          defaultValue={defValue}
          theme="vs-dark"
          onMount={handleEditorDidMount}
        />{" "}
      </div>
      <div>
        <h1>Task</h1>
        <p>Some task description...</p>
        <button onClick={showValue}>Show editor's value</button>
      </div>
      {/* {open && (
        <div
          id="backdrop"
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={closeModal}
        >
          <div
            id="modal"
            style={{ width: "35%", height: "50%", backgroundColor: "white" }}
          >
            <p>{editorRef.current.getValue()}</p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default CodeEditor;
