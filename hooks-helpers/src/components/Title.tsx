import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

const Title = () => {
  const PAGE_NAME_DEFAULT: string = "Landing PAGE";
  const [title, setTitle] = useState<string>(PAGE_NAME_DEFAULT);

  useDocumentTitle(title);

  return (
    <div>
      <h2>useDocumentTitle</h2>
      <label>Type a new title: </label> 
      <input className="title-input"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
    </div>
  )
};

export default Title;