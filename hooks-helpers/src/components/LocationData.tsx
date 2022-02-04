import useLocationData from "../hooks/useLocationData";

const LocationData: React.FC = () => {
  const {lat, lon} = useLocationData();
  return (
    <div>
      <h1>useLocationData</h1>
      <h2>Latitude: {lat}  Longtitude: {lon} </h2>
    </div>
  );
};

export default LocationData;