import React,{useEffect,useState,useContext} from 'react'
import {Container, Row, Col} from "react-bootstrap";
import jwt_decode from "jwt-decode";
import { GoogleMap,withGoogleMap,useJsApiLoader,DirectionsRenderer,DirectionsRendere, LoadScript,Marker } from '@react-google-maps/api';
import Axios from "../../../axios"
import {axiosInstance} from "../../../AxiosInstance/AxiosSetBaseUrl"
import {Button,Modal} from "react-bootstrap"
import Draggable, {DraggableCore} from 'react-draggable';
import {Card,NavDropdown} from "react-bootstrap"




import Alert from '../../../Alert/Alert';
import { UserContext } from '../../../App';
import "./DriverHome.css"




const containerStyle = {
    width: '100%',
    height: '450px'
  };
  
  const center = {
    lat: 9.745,
    lng: 76.523
  };

const DriverHomes = () => {


  const [notification, setNotification] = useState(false);
  const [notificationclose, setNotificationclose] = useState(true);


  const NotificationhandleClose = () => {
    setNotification(true)
    setNotificationclose(false)
  };

  const NotificationhandleShow = () => {
    setNotification(false)
    setNotificationclose(true)
  };

const {user}  =useContext(UserContext)

console.log(user,"|||||||||||||||||||||||||||||||")

  // console.log(directionsService,"123456789")
  
 
  const [topRightModal, setTopRightModal] = useState(false);
  const [username, setUsername] = useState();


  const [not,setNot]= useState();
  const toggleShow = () => setTopRightModal(!topRightModal)
  const [map, setMap] = useState (null)
  const [directionsResponse, setDirectionsResponse] = useState(null)
    const[driverData,setDriverData]= useState()
    const [locations,setLocation]=useState()
    const [currentLocation,setCurLocation]=useState() 
    const[lat,setLat]=useState()
    const[lon,setLon]=useState()
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const scrollContainerStyle = { width: "100%", maxHeight: "200px" };
    const[userLocations,setUserlocations]= useState()
   

    const [showloading, setShowLoading] = useState(false);

    const handleClose = () => setShowLoading(false);
    const handleShow = () => setShowLoading(true);

     
  const deletedata = async(event)=>{
   
    console.log(event.userid,"----------55555555555555555-------------------------")
    try {
       Axios.delete(`user/wastefull/${event.userid.id}`)  
      calculateRoute(event.userid)

      
    } catch (error) {
      console.log(error);
    }
  }
  
    
    
    const getDriver = async () =>{
      
      try {
           handleShow();
          const {data} = await axiosInstance.get(`driver/driverprofile`)
          setDriverData({...data})
          handleClose();
      } 
      catch (error) {
        console.log(error)
      }
      
      
      
    }
    const eventHandler = (e, data) => {
      console.log('Event Type', e.type);
      console.log({e, data});
    }

    const Notification = async()=>{
      try {
        const {data} = await Axios.get(`user/wastefull`)
        setNot(data)
        console.log(data,"0000000000000000000000000000000000")
      } catch (error) {
        console.log(error);
      }
    }


    
    const Userdetails = async()=>{
      const token=localStorage.getItem("accessToken")
      const decode = jwt_decode(token)
      console.log(decode.user_id)
      try {
            const {data} = await Axios.get(`dash/dutyusers/${decode.user_id}`);
            console.log(data,"::::::::::::::::::::::::::::::::::::;;")
             setUserlocations(data)
             
      } catch (error) {
          console.log(error)
      }
  }


  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey:"AIzaSyBXz_yGYz-jd_M3EDxnHASVKG0v8LB1EK4",
    })
    useEffect(()=>{


  
      

      navigator.geolocation.getCurrentPosition((position)=>{
            setCurLocation({lat: position.coords.latitude,lng: position.coords.longitude})
            setLocation({lat: position.coords.latitude,lng: position.coords.longitude})
            setLat(position.coords.latitude)
            setLon(position.coords.longitude)
          })

      getDriver();
      Userdetails();
      Notification();
        
    }, [])
    const nnn=11.8505
    const ppp= 76.2711

    function clear(data) {
      setDirectionsResponse(null)
      setDistance('')
      setDuration('')
      calculateRoute(null)
      
      console.log(directionsResponse,"lllllllllllllllllllllllllllll")



    }
    //   setDirectionsResponse(null)
    //   setDistance('')
    //   setDuration('')
    //   originRef.current.value = ''
    //   destiantionRef.current.value = ''
    // }

    async function calculateRoute(data) {
      console.log(data,"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
      setDirectionsResponse(null)
      const directionsService = new window.google.maps.DirectionsService()
      toggleShow()
      setUsername(data)
      // eslint-disable-next-line no-undef
      setDirectionsResponse("")
      console.log(data,"-----------------------d-------------------")


         let results =null
         results = await directionsService.route({
        
        origin: { lat: Number(data.lat), lng: Number(data.long) },
        destination: { lat: 10.8505, lng: 76.2711 },
        // eslint-disable-next-line no-undef
        travelMode: window.google.maps.TravelMode.DRIVING,
      })
      
       setDirectionsResponse(results)
       setDistance(results.routes[0].legs[0].distance.text)
       setDuration(results.routes[0].legs[0].duration.text)
    }

    console.log(username,"-----------------------f---------------")
 


  return (
    
        <Container 
        position='relative'
        flexDirection='column'
        alignItems='center'
        // h='100vh'
        w='100vw'>
            <Row>




            <div
     
      w='100vw'
    >
      
      <Card position='absolute' left={0} top={0}  w='100%' my="5%">
        {/* Google Map Box */}
        {   isLoaded ?  <GoogleMap
                  center={center}
                  zoom={7}
                  mapContainerStyle={containerStyle}
                
                  options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false, 
                  }}
                  onLoad={map => setMap(map)}

                >
                   <Marker  
               key={Math.random()}
               title={'drag to move'}
               

               
                
                position={{ lat: 10.8505, lng: 76.2711 }}
                icon={{
                  url:'https://www.freeiconspng.com/thumbs/car-top-view-icon/car-top-view-icon-15.png',
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
                />
                 {directionsResponse && (
                  <DirectionsRenderer directions={directionsResponse} />
                )}
                
                
               { userLocations && userLocations.map((data,index)=>(
              <div>
                Refresh zwaste
                <Marker  key={Math.random()} title={'drag to move'}
                
                onClick={()=>{
                  calculateRoute(data.users)
                 
                                                                               
                }} position={{lat: Number(data.users.lat), lng: Number(data.users.long)}} />
                </div>
               ))} 
        </GoogleMap> : <div>Map not found</div>}
      </Card>
      <Draggable
        defaultPosition={{x: 0, y: 0}}
        onMouseDown={eventHandler}
        onStart={eventHandler}
        onDrag={eventHandler}
        onStop={eventHandler}>
      <Card
        p={4}
        position="absolute"
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='1'
        cursor="move"
        Size="20px"
        backgroundColor="#901ba6"
      >
        <div spacing={2} style={{backgroundColor:"#901ba6",borderColor:"pink"}} justifyContent='space-between'>

        {notificationclose ? 
        <div>
          
          {not && <i onClick={NotificationhandleClose} class="fas fa-bell text-white"></i>}
          </div>
           : " "
        
        }
          
         
        </div>
        {notification ?
        <div className="scrollbar scrollbar-primary" style={scrollContainerStyle}>
         <i class="fa fa-window-close" onClick={NotificationhandleShow} aria-hidden="true"></i>
        {not && not.map((data,index)=>(
          
          <Card style={{backgroundColor:"#064841 " , height:"80px"}} ><Card>
                                                    <Card.Body> <img style={{width:"40px",height:"40px"}} src="https://cdn-icons-png.flaticon.com/512/272/272820.png" alt="no" />  {data.userid.username} <button className="btn btn-success mx-4" onClick={()=>{deletedata(data)}}>Go</button></Card.Body>
                                                  </Card></Card>
                 )) }  
                 
      
        </div>
        : " "}
      {/* <div onClick={clear}>clear</div> */}
      </Card>
      </Draggable>
    </div>
                {/* <Col className="m-2">
                {user && <div>ss</div>}
                  
      
        {   isLoaded ?  <GoogleMap className="Gmap"
          mapContainerStyle={containerStyle}
          center={{ lat: 10.8505, lng: 76.2711 }}
          zoom={8}
          onLoad={map => setMap(map)}
          >
            <div className="text-success"> shskjdhjdshkjjk</div>
          
          <Marker  
               key={Math.random()}
               title={'drag to move'}
               

               
                
                position={{ lat: 10.8505, lng: 76.2711 }}
                icon={{
                  url:'https://www.freeiconspng.com/thumbs/car-top-view-icon/car-top-view-icon-15.png',
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(30, 30),
                }}
                />
                 {directionsResponse && (
                  <DirectionsRenderer directions={directionsResponse} />
                )}
                
                
               { userLocations && userLocations.map((data,index)=>(
              <div>
                sample
                <Marker  key={Math.random()} title={'drag to move'}
                
                onClick={()=>{
                  calculateRoute(data)
                 
                                                                               
                }} position={{lat: Number(data.users.lat), lng: Number(data.users.long)}} />
                </div>
               ))} 
        </GoogleMap> :"jhkjhhjgjh"}
     
    
            </Col> */}
          


       
{ showloading && <Alert show={showloading} />}




        </Row>

    
    </Container>
    
    
  )
}

export default DriverHomes