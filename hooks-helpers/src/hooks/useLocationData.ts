import { useEffect, useState } from "react";

interface ICoordinates {
  lat: number;
  lon: number;
}


const useLocationData = () => {
  const COODINATES: ICoordinates = { lat: 0, lon: 0};
  const [coordinates, setCoordinates] = useState(COODINATES);
  useEffect(() => {});

}
export default useLocationData;