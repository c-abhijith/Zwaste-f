import React,{useState,useEffect} from 'react'
import jwt_decode from "jwt-decode";
import {axiosInstance} from "../../../AxiosInstance/AxiosSetBaseUrl"
import Axios from "../../../axios"
import {Container, Row, Col,Card,Button,Modal} from "react-bootstrap";
import image from './Driver.jpg'
import './UserHome.css'


const UserHomes = () => {

  const [profile, setProfile] = useState({})
  const [driver, setDriver] = useState()
  const [qr, setQr] = useState();


  const handleChange = () => {
    const token=localStorage.getItem("accessToken")
      const decode = jwt_decode(token)
      console.log(decode.username,"000000000000000000000000ooo00")
    
    setQr(decode.username);
   };


  const getProfileDetails = async () =>{
    try {
        
        const {data} = await axiosInstance.get(`user/userprofile`)
        setProfile({...data})
    } catch (error) {
        console.log(error)
    }
}


     const drivers =async()=>{
      // window.location.reload();
      const token=localStorage.getItem("accessToken")
      const decode = jwt_decode(token)
      console.log(decode.username,"000000000000000000000000ooo00")


      try {
            const {data} = await Axios.get(`user/usersdriver/${decode.user_id}`);
            
            setDriver(data)
      }
       catch (error) {
        console.log(error)
      }
     }



      useEffect(()=>{
        
        getProfileDetails();
        drivers();
        handleChange();
      }, [])

      console.log(profile,"ppppppppppppppppppp")
      console.log(driver,"VVVVVVVVVVVVVVVVVVVVVVVVvvv")


  return (
    <div style={{ background: "-moz-linear-gradient(rgba(42, 27, 161, 0.7),rgba(29, 210, 177, 0.7) 100%) "}}>
    
          
            
        
           

             
             <Container fluid>
              <Row>
                <Col className="center cardname">

                      
                <Card className="rounded-3 cardfirst" >
                <Card style={{background : "linear-gradient(to right, blue , blue) "}}>
                        <Card.Body className="fw-bold fs-6 text-center text-white "> Your Driver </Card.Body>
                      </Card>
                <Row>
                 
                    <Col style={{marginLeft:"35%"}}>
                     <img src={image} alt="image" className="my-2" style={{width:"30%",height:"70px"}}  />
                    </Col>
                  </Row>
                   <Card.Body>

                   {driver  &&
                        driver.map((data,index)=>(
                          <div>

                          <Card.Title > DriverName : {data.Driver.username} </Card.Title>
                           <br/>
                          <Card.Subtitle className="mb-2 ">Contactnumber :{data.Driver.phone_number}  </Card.Subtitle>
                          </div>
                    ))
                   
                        }
                <Card.Title></Card.Title>
               
                  </Card.Body>
                 
            </Card>
                           
                            </Col>
                    
              </Row>
             </Container> 
    </div>
  )
}

export default UserHomes