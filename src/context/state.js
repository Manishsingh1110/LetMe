import { useState ,useEffect} from 'react'
import statecontext from './statecontext'
import hospital from '../Data/hospitals'
const State = (props)=>{
  const [zip, setzip] = useState()
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        getCity(position.coords.latitude, position.coords.longitude)
      });
    }
  },[])
   
  function getCity(lat, lng) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://us1.locationiq.com/v1/reverse.php?key=pk.4bdb36b4aedfe8c58329f9e8cba42ca1&lat=" + lat + "&lon=" + lng + "&format=json", true);
    xhr.send();
    xhr.onreadystatechange = processRequest;
    xhr.addEventListener("readystatechange", processRequest, false);
    function processRequest(e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        var postcode = response.address.postcode;
        setzip(response);
        return;
      }
    }
  } 


  const [searchedzip, setsearchedzip] = useState({ zip: "" })
    const [searchedhospital, setsearchedhospital] = useState([])
    const filteritem = (zip) => {
        try {
            const updatedhospitals = hospital.filter((ele) => {
                return ele.zipcode === zip;
            })
            console.log(zip)
            if (updatedhospitals.length === 0) {
                const error = [false]
                setsearchedhospital(error)
            }
            else {
                setsearchedhospital(updatedhospitals)
            }
        }
        catch (err) {
            setsearchedhospital(err)
        }

    }
    return (
        <statecontext.Provider value={{zip,searchedhospital,searchedzip,setsearchedzip,filteritem}}>
            {props.children}
        </statecontext.Provider>
    )
}
export default State