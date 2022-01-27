import useRequest from "../hooks/useRequest";

const AxiosRequest = () => {
  const url = "http://www.g";
  const {data, loading, errorMsg } = useRequest(url);

  return (
    <div>
      <h2>Making a request</h2>
      { data && <p>Data: {data.length}</p> }
      { loading && <p>Loading...</p> }
      { errorMsg && <p>Error message </p>}
    </div>
  );

};

export default AxiosRequest;