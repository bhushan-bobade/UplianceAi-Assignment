import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    const formLocalData = localStorage.getItem("localData");
    if(formLocalData){
      setValue(formLocalData)
    }
  }, []);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: true,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const setDataHandler =(content)=>{
    setValue(content)
    localStorage.setItem('localData', value)
  }

  return (
    <div className=" w-full h-screen py-8 px-2">
      <div className=" max-w-screen-md mx-auto py-12 sm:h-[80vh]  h-full shadow-xl bg-[#f4f4f5]">
        <ReactQuill
          value={value}
          onChange={setDataHandler}
          modules={modules}
          formats={formats}
          theme="snow"
          className=" w-full h-full rounded-md text-xl "
        />
      </div>
    </div>
  );
};

export default Editor;
