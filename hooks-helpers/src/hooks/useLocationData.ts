import { useEffect, useState } from "react";

interface ICoordinates {
  lat: number;
  lon: number;
}


const useLocationData = () => {
  const COODINATES: ICoordinates = { lat: 0, lon: 0 };
  const [coordinates, setCoordinates] = useState(<ICoordinates>COODINATES);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((data) => {
      setCoordinates({
        lat: data.coords.latitude,
        lon: data.coords.longitude
      });
    });
  }, []);
   
  // already and object
  return coordinates;

}
export default useLocationData;