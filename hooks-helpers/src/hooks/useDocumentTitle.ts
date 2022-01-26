import { useEffect } from "react";

interface IDocumentTitle {
  (title: string): void;
}

const useDocumentTitle: IDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

}
export default useDocumentTitle;