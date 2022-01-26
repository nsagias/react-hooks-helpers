import { useEffect, useState } from "react";

const Title = () => {
  const PAGE_NAME_DEFAULT = "Landing PAGE";
  const [title, setTitle] = useState(PAGE_NAME_DEFAULT);

  useEffect(() => {
    document.title = title;
  });

  return (
    <div>
      <h2>useDocumentTitle</h2>
    </div>
  )
};

export default Title;