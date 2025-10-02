import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const RawQuillEditor = forwardRef(({ value, onChange }, ref) => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "bullet" }],
            ["clean"],
          ],
        },
        placeholder: "Add, edit, and write here.",
      });

      // Sync changes upward
      quillRef.current.on("text-change", () => {
        onChange?.(quillRef.current.root.innerHTML);
      });

      quillRef.current.root.innerHTML = value || "";
    }
  }, []);

  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      quillRef.current.root.innerHTML = value || "";
    }
  }, [value]);

  useImperativeHandle(ref, () => ({
    addToEditor: (text) => {
      if (quillRef.current) {
        const editor = quillRef.current;
        const range = editor.getSelection(true) || {
          index: editor.getLength(),
        };
        editor.insertText(range.index, text, "user");
        editor.formatLine(range.index, 1, { list: "bullet" }); // make it a bullet point
        editor.setSelection(range.index + text.length + 1, 0);
      }
    },
  }));

  return <div ref={editorRef} />;
});

export default RawQuillEditor;
