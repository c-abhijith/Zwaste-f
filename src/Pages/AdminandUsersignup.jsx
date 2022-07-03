import {Container,Button,   Modal, Form,Col,Row,ListGroup} from 'react-bootstrap'
import { TextField, Grid } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import { useNavigate,Link } from 'react-router-dom';
import Axios from "../axios"
import { Marker ,useJsApiLoader,GoogleMap} from '@react-google-maps/api'
import React,{useState} from 'react' 




const center = { lat: 9.9312 , lng:76.2673  }

const AdminandUsersignup = () => {

  const [show, setShow] = useState(false);
  const[lat,setLat]=useState()
  const[lon,setLon]=useState()
  const[place,setPlace]=useState()
  const[District,setDistrict]=useState()
  const[State,setStates]=useState()
  const[Country,setCountry]=useState()




  



  const {register,handleSubmit,setError   ,formState:{errors}}=useForm();
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit =async(data)=>{
    const datas = {
      username:data.username,
      first_name:data.fullname,
      phone_number:data.phone,
      password:data.password,
      lat:lat,
      long:lon,
      place:place,
      District:District,
      State:State,
      Country:Country

    }
    
   
    try{
      console.log("poiuytrewertyui")
      const response = await Axios.post(`user/register/`,datas)
      console.log(response)
      console.log("))))))))))))))))))))))))")
      navigate("/");
    }
    catch(error){
      console.log("@@@@@@@@@@@@@@@@@@@")
      console.log(error)
      if (error.response.data.username) {
        setError("username", { type: "server", message: error.response.data.username });
   }
   if (error.response.data.email) {
        setError("fullname", { type: "server", message: error.response.data.fullname });
   }
   if (error.response.data.password) {
        setError("password", { type: "server", message: error.response.data.password[0] });
   }
   if (error.response.data.phonenumber) {
        setError("phone", { type: "server", message: error.response.data.phonenumber[0] });
   }
    }
    
  }











 const handleLocation = (change,input) => {
   try {
     if(change === 3){
       const lat = input.latLng.lat()
       const lng = input.latLng.lng()
       console.log(lat,'latitude');
       console.log(lng,'longitude');
       const geocoder = new window.google.maps.Geocoder()
       geocoder.geocode({ location:{ lat:lat, lng: lng } }).then((response) => {
         
           response.results[0].address_components.map((e)=>{
             
               e.types.map((type)=>{
               
                 if(type === 'country'){
                   console.log(e.long_name,"Country")
                   setCountry(e.long_name)
                 }else if (type === 'administrative_area_level_2'){
                   console.log(e.long_name,"Distric")
                   setDistrict(e.long_name)
                 }else if (type === 'administrative_area_level_1'){
               console.log(e.long_name,"state")
               setStates(e.long_name)
                 }else if (type === 'locality'){
                   console.log(e.long_name,"place")
                   setPlace(e.long_name)
                }
                else if (type === 'postal_code'){
                 console.log(e.long_name,"pincode")
              }
            
                 return null
               })
               return null
           }
           )
         // }
       })
       setLat(lat)
       setLon(lng)
      
       setLocation({lat: lat,lng: lng})
     }
     
   } catch (error) {
     console.log(error)
     
   }

   
   }

   
   const [currentLocation,setCurLocation]=useState()
   const [locations,setLocation]=useState()
    const {isLoaded} = useJsApiLoader({
   googleMapsApiKey:"AIzaSyBlg2ZY305ZzwA6hqUmuarY5SK8FUtTPIM",
 })
 const [map, setMap] = React.useState( /** @type google.maps.Map */  (null))
 const [marker, setMarker] = React.useState(null)
 
 
 React.useEffect(() => {
      navigator.geolocation.getCurrentPosition((position)=>{
     setCurLocation({lat: position.coords.latitude,lng: position.coords.longitude})
     setLocation({lat: position.coords.latitude,lng: position.coords.longitude})
                  const geocoder = new window.google.maps.Geocoder()
                  geocoder.geocode({ location:{ lat:position.coords.latitude, lng: position.coords.longitude } }).then((response) => {
                    
                      response.results[0].address_components.map((e)=>{
                        
                          e.types.map((type)=>{
                          
                            if(type === 'country'){
                              console.log(e.long_name,"Country")
                              setCountry(e.long_name)
                            }else if (type === 'administrative_area_level_2'){
                              console.log(e.long_name,"Distric")
                               setDistrict(e.long_name)
                            }else if (type === 'administrative_area_level_1'){
                          console.log(e.long_name,"state")
                          setStates(e.long_name)
                            }else if (type === 'locality'){
                              console.log(e.long_name,"place")
                              setPlace(e.long_name)
                            }
                            else if (type === 'postal_code'){
                            console.log(e.long_name,"pincode")
                          }
                        
                            return null
                          })
                          return null
                      }
                      )
                    // }
                  })
     setLat(position.coords.latitude)
     setLon(position.coords.longitude)
    
     
     
     })}, [])
     React.useEffect(() => {
       
       console.log(locations,"===================");
    
     }, [currentLocation])
   
   console.log(lat,"'''''''''''8''''''''''")
   console.log(lon,"'''''''''''0''''''''''")
   console.log(Country,"lllllllllllllll")
   console.log(State,"sssssssssssssssssssssssssssss")
   console.log(District,"cccccccccccccccccccccccccccccccc")
   console.log(place,"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")




  return (
    <Container sm={6}>
      <Grid
        container
        style={{
          margin: "2em",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Grid  item sm={6} md={6} lg={6}>
          <item style={{ width: "100%" }}>
            <iframe
              src="https://embed.lottiefiles.com/animation/45858"
              style={{ width: "100%", height: "100%", border: "none" }}
            ></iframe>
          </item>
        </Grid>

        <Grid item md={6} sm={6} lg={6}>
        <Form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
          <Row style={{marginTop:'2rem'}}>
    <Col sm={5}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control
      {...register("username",{required:"username is required",minLength:{
        value:6,
        message:"Should contain 6 characters"
      }})}
      name="username"
      type="text" 
      placeholder="Enter username" 
        />
        <Form.Text className="text-muted">
        <span className='text-center'>{errors.username && (<small className='text-center text-danger'>{errors.username.message}</small>)}</span>
    </Form.Text>
       
  </Form.Group>
    </Col>
    <Col sm={5}>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label> Fullname</Form.Label>
    <Form.Control 
        {...register("fullname",{required:"name is required",minLength:{
          value:6,
          message:"Should contain 6 characters"
        }})}
    name="fullname"
      type="text" 
      placeholder="Enter Name" />
    <Form.Text className="text-muted">
    <span className='text-center'>{errors.fullname && (<small className='text-center text-danger'>{errors.fullname.message}</small>)}</span>
    </Form.Text>
    
  </Form.Group>


    
    </Col>
  </Row>
  <Row>
    <Col sm={5}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
              type='number'
              {...register("phone",{required:"Number is required",pattern:{
                value:"^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$",
                message:"Invalid phone id",
                
              },
              minLength:{
                value:'10',
                message:'Should contain 10 numbers'
              }, maxLength:{
                value:'10',
                message:'Should contain 10 numbers'
              }
            })}
            onKeyPress={function (evt) {
              if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
              {
                  evt.preventDefault();
              }
          }}
            onInput={function (evt) {
              if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
              {
                  evt.preventDefault();
              }
          }}
              name="phone"
              minLength={10}
            
              
              placeholder="Enter Mobile" />
              <Form.Text className="text-muted">
                <span className='text-center'>{errors.phone && (<small className='text-center text-danger'>{errors.phone.message}</small>)}</span>
            </Form.Text>
          </Form.Group>
    </Col>
    <Col sm={5}>
              <Button variant="primary" onClick={() => setShow(true)}>
                  choose_your location
                </Button>
    </Col>

  </Row>
 
 
  <Row>
  <Col sm>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Password</Form.Label>
    <Form.Control 
     {...register("password",{required:"password is required",minLength:{
      value:6,
      message:"Please Enter atleast 8 charecters"
    // },pattern:{
    //   // value:/^(?=.[A-Za-z])(?=.\d)(?=.[@$!%#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
    //   message:"Please Enter a strong password ,should contain letter charecter and number"
    }})}
      name="password"
      onChange={e => setPassword(e.target.value)}
      type="password" 
      placeholder="Enter password" />
    <Form.Text className="text-muted">
    <span className='text-center'>{errors.password && (<small className='text-center text-danger'>{errors.password.message}</small>)}</span>
    </Form.Text>
  </Form.Group>
    </Col>
     <Col sm>
     <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control 
      {...register("cpassword",{required:"confirmpassword is required",pattern:{
        
          
      }})}
      name="cpassword"
      type="password" 
      onChange={e => setPassword2(e.target.value)}
      placeholder="confirm password" />
    <Form.Text className="text-muted">
    <p className='text-danger'>{password2 !== password ? "Passwords do not match" : ""}</p>
    <span className='text-center'>{errors.cpassword && (<small className='text-center text-danger'>{errors.cpassword.message}</small>)}</span>
    {/* <p className='text-danger'>{password !== cpassword ? "Passwords do not match" : ""}</p> */}
    </Form.Text>
  </Form.Group>
    </Col>
  </Row>
  <Row>
    
    <Button as="input" type="submit" value="Resgister" />
  </Row>
  </Form>   
  <Link to="/">Login</Link>      
        </Grid>
      </Grid>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {
                  isLoaded && 
                  <GoogleMap center={locations} zoom={15} 
                  options={{streetViewControl:false,mapTypeControl:false,fullscreenControl:false}}
                   mapContainerStyle={{width:'100%', height:'400px'}} onLoad={(map) => setMap(map)} > 
                  <Marker  title={'drag to move'}
                          
                          key={Math.random()}
                        
                          draggable
                         
                          onDragEnd={(marker)=>handleLocation(3,marker)}
                        
                          position={locations}
                            />
        
                  </GoogleMap>
                }
                <Row> <Col>place : {place}    </Col>     <Col>District : {District} </Col></Row>
                <Row> <Col>State : {State}    </Col>     <Col>Country : {Country} </Col></Row>
     

        </Modal.Body>
      </Modal>
    </Container>
  );
};



export default AdminandUsersignup












