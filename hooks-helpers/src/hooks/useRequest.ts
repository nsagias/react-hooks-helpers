import { useEffect, useState} from "react";
import axios from "axios";

interface IUseRequestState {
  data: null;
  loading: boolean;
  errorMsg: string;
}

const useRequest = (url: string) => {
  const STATE_DEFAULT: IUseRequestState = {
    data: null,
    loading: true,
    errorMsg: ""
  }; 
  const [state, setState] = useState(STATE_DEFAULT);
  useEffect( () => {
    axios.get(url)
      .then(result => {
        setState({
          data: result.data,
          loading: false,
          errorMsg: ""
        });
      })
      .catch(err => {
        console.log(err);

        setState((prev) => ({
          ...prev,
          loading: false,
          errorMsg: "Error Loading data"
        }));
      });
  }, [url]); 
  
  // state is already and object
  return state;

}

export default useRequest;