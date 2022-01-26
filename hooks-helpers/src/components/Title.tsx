import { useEffect } from "react";

const Title = () => {

  useEffect(() => {
    document.title = "Hello Nick"
  });

  return (
    <div>
      <h2>useDocumentTitle</h2>
    </div>
  )
};

export default Title;