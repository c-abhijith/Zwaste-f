import React, {useState, useEffect} from 'react'
import {Container,Row,Col,Card,Table} from 'react-bootstrap'
import "./Profile.css"
import Axios from "../../../axios"

import userlogos from "./person.png"
import {axiosInstance} from "../../../AxiosInstance/AxiosSetBaseUrl"
import jwt_decode from "jwt-decode";


const Profile = () => {
    const [profile, setProfile] = useState({})
    const [Basket, setBasket] = useState([])
    const [full, setfull] = useState()
    
    const token=localStorage.getItem("accessToken")
    const decode = jwt_decode(token)


  


    const getProfileDetails = async () =>{
        try {
            
            const {data} = await axiosInstance.get(`user/userprofile`)
            setProfile({...data})
        } catch (error) {
            console.log(error)
        }



    }


    const Baskets = async()=>{
        const token=localStorage.getItem("accessToken")
        const decode = jwt_decode(token)
        try {
              const {data} = await Axios.get(`payment/purchase/${decode.user_id}`);
              console.log(data,"::::::::::::::::::::::::::::::::::::;;")
               setBasket(data)
               
        } catch (error) {
            console.log(error)
        }
    }
     
    const confirnwaste = async()=>{
        const token=localStorage.getItem("accessToken")
        const decode = jwt_decode(token)
        try {
              const {data} = await Axios.get(`user/wastefull/${decode.user_id}`);
              setfull(data)


        } catch (error) {
              console.log(error)
        }
    }

    const wasteful = async()=>{
       
        try {
            const {data} = await Axios.patch(`user/wastefull/${decode.user_id}`);
            setfull(data)


      } catch (error) {
            console.log(error)
      }

       
      
    }

    useEffect(()=>{
        getProfileDetails()
        Baskets()
        confirnwaste()
        
        

    }, [])
    const scrollContainerStyle = { width: "100%", maxHeight: "200px" };
    console.log(profile,"?????????????????????????????????")
 


  return (
       <>
          <Container className="flex-row my-5">
              <Row>
                    <Col sm={12} md={4} lg={4}  className="d-block d-md-block d-lg-block">
                        <div>Your Baskets</div>
                        
                        {/* <ListGroup variant="flush " className="center"> 
                            <ListGroup.Item className="center">Edit</ListGroup.Item>
                            <ListGroup.Item className="center" >Delete Account</ListGroup.Item>
                        <MDBContainer> */}
                                    <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>
                        <Card style={{ width: '22rem' }}>
                                    <Table striped bordered hover>
                                        <thead>
                                            <tr>
                                            <th>No</th>
                                            <th>Basket image</th>
                                            <th>Basket name</th>
                                            <th>Status</th>
                                            
                                            </tr>
                                        </thead>
                                        <tbody>
                                       {Basket.length>0 && Basket.map((value,index)=> <tr>
                                        <td>{index+1}</td>
                                           
                                            <td>
                                                {" "}
                                                <img
                                                style={{ width: "50px", height: "50px" }}
                                                src={value.productname.image}
                                                />
                                            </td>
                                        <td>{value.productname.name}</td>
                                        <td>{value.status}</td>
                                       
                                        </tr>)}
                                            
                                            
                                        </tbody>
                                        </Table>
                                    </Card>
                                    </div>

      {/* <div className="scrollbar my-5 mx-auto" style={scrollContainerStyle}>
       
      </div> */}
    {/* </MDBContainer> */}
                            {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                        {/* </ListGroup> */}
                    </Col>

                    <Col sm={12} md={12} lg={8} >
                        <Card className="shadow-lg  p-3 mb-5  rounded mb-3">
                            <Card.Header className="bg-blue text-white bg-secondary w-3">Profile</Card.Header>
                            <Card.Body>
                            <Col class="center border-1  ">
                                  
                                    <Row>
                                        <Col >
                                             
                                        
                                        

                                             <img className="userlogos" src={userlogos} alt='no'/>
                                             <Card.Subtitle className="userlogosuser">{profile.username}</Card.Subtitle>
                                             
                                             {full ? <button >The Request is sent</button> : <button onClick={wasteful}>My Basket is full</button>}
                                        
                                        </Col>
                                    </Row>
                                  
                                     
                                   {/* <div >

                                    <img src="" style={{width:"20%",marginLeft:"39%"}} className='rounded-circle center' alt='not in image'/>
                                    <p   className="text-center my-3"> username@123 </p>
                                   </div> */}
                                      

                                   
                                                            <Card sm={12}  className="my-3 border-0  carduserdata">
                                                    <Card.Body>
                                                           
                                                            <Row>
                                                                <Col>
                                                                  Name    
                                                                </Col>
                                                                <Col>
                                                                     {profile.first_name}
                                                                </Col>
                                                            </Row>
                                                            {/* <Row>
                                                                <Col>
                                                                  Address    
                                                                </Col>
                                                                <Col>
                                                                     {profile.address ? 
                                                                     profile.address:"not added"} 
                                                                </Col>
                                                            </Row> */}
                                                            <Row >
                                                               <Col>
                                                               Phone
                                                               </Col>
                                                               <Col>
                                                                      {profile.phone_number}
                                                               </Col>
                                                            </Row>
                                                            <Row >
                                                               <Col>
                                                               District
                                                               </Col>
                                                               <Col>
                                                                      {profile.District}
                                                               </Col>
                                                            </Row>
                                                            <Row >
                                                               <Col>
                                                               State
                                                               </Col>
                                                               <Col>
                                                                      {profile.State}
                                                               </Col>
                                                            </Row>
                                                            <Row >
                                                               <Col>
                                                               Country
                                                               </Col>
                                                               <Col>
                                                                      {profile.Country}
                                                               </Col>
                                                            </Row>


                                                      
                                                    </Card.Body>
                                                    </Card>
                                                    {/* <Row className=' d-block d-lg-none d-md-block'>
                                                            <Col>
                                                            <button className="btn btn-success">Edit</button>
                                                            <button className="btn btn-danger mx=3">Delete Account</button>
                                                            </Col>
                                                            <Col>
                                                            </Col>
                                                        </Row> */}
                                            
                                
                                
                                </Col>

                            </Card.Body>
                            </Card>
                         
                    </Col>
              </Row>

             
          </Container>
       </>
  )
}

export default Profile