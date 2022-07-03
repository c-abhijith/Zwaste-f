import React,{useState,useEffect} from 'react'
import Axios from "../../../axios"

import "./AdminCharts.css"

import { Marker,useJsApiLoader,GoogleMap} from '@react-google-maps/api'


const AdminCharts = () => {
  

  // const DirectionsService = new google.maps.DirectionsService();

  const [Positions, setPositions] = useState({});

  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey:"AIzaSyBXz_yGYz-jd_M3EDxnHASVKG0v8LB1EK4",
    })
     const [map, setMap] = React.useState( /** @type google.maps.Map */  (null))



    const[Driverdata, setDriverData] = useState()


     const [usersData, setuserData] = useState([]);

     const d_data=async () =>{
      try {
          const value = await Axios.get(`dash/driver`)
          setDriverData(value.data)
          console.log(data,"OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo")
      } catch (error) {
        console.log(error)
      }
     }
     const data=async()=>{
       const list = await Axios.get(`user/register/`);
       console.log(list)
       setuserData(list.data)
     }
     
       useEffect(()=>{
         data();
         d_data();
       },[]);
    

      //  console.log(Driverdata.Drivename,"PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPp")

  return (
    <div className="chart">
       
 
     
        {
           isLoaded && 
           <GoogleMap center={{ lat: 10.8505, lng: 76.2711 }} zoom={7} 
           options={{streetViewControl:false,mapTypeControl:false,fullscreenControl:false}}
            mapContainerStyle={{width:'100%', height:'500px'}} onLoad={(map) => setMap(map)} > 
            {Driverdata ? 
               Driverdata.map((value,index)=>(
                
                  
                  <Marker  
                  title={'drag to move'}
                          
                          key={Math.random()}
                          DirectionsService={{
                            origin: new window.google.maps.LatLng(41.85073, -87.65126),
                            destination: new window.google.maps.LatLng(41.85258, -87.65141),
                            travelMode: window.google.maps.TravelMode.DRIVING,
                          }}
                          icon={{
                             url:'https://www.freeiconspng.com/thumbs/car-top-view-icon/car-top-view-icon-15.png',
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(15, 15),
                            scaledSize: new window.google.maps.Size(30, 30),
                          }}
                           
                          position={{lat: Number(value.Drivename.lat), lng: Number(value.Drivename.long)}}
                            />))
            :"No data Available"}
            
           {usersData ? usersData.map((data,index)=>(
                <Marker  
                title={'drag to move'}
                        
                        key={Math.random()}
                        // icon={{
                        //   url:'https://www.freeiconspng.com/thumbs/car-top-view-icon/car-top-view-icon-15.png',
                        //   origin: new window.google.maps.Point(0, 0),
                        //   anchor: new window.google.maps.Point(15, 15),
                        //   scaledSize: new window.google.maps.Size(30, 30),
                        // }}
                         
                         
                        position={{lat: Number(data.lat), lng: Number(data.long)}}
                          />)) : "no data Available"}
                
               
                          

                          
 
           </GoogleMap>
         }



  </div>
  )
}

export default AdminCharts