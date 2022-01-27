import { useEffect, useState} from "react";

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
  useEffect( () => {}, []); 

}

export default useRequest;