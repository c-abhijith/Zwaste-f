import React,{useState,useEffect} from 'react'
import {Container,Row,Col,Card,Modal,Button} from 'react-bootstrap'
import './DriverUserprofile.css'
import u from './h.jpg'
import Form from "react-bootstrap-form"
import jwt_decode from "jwt-decode";
import { useForm } from 'react-hook-form';
import Axios  from '../../axios'
import {axiosInstance} from "../../AxiosInstance/AxiosSetBaseUrl"
import {useNavigate} from 'react-router-dom'

const DriverUserProfile = () => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [user, setUser] = useState(""); 
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [err,setErr]=useState()

    const token=localStorage.getItem("accessToken")
    var decode = jwt_decode(token)
    console.log(decode,"777777777777777777777777777777")
    
    const { register, handleSubmit,setError, formState: { errors } } = useForm();
    const onSubmit = async(data) => {
        const detail={
            id:decode.user_id,
            password:data.password,
            newpassword:data.newpassword,
        }
                try{
                     console.log("kkkkkkkkkkkkkkkkkkkkk")
                     const response = await Axios.patch(`driver/passwordChange`,detail)
                     console.log(response)
                     
                     navigate("/");
                } catch (error) {
                    console.log(error,"11111111111111111111111111111111");
                    if(error){
                        setErr(error.response.data.user);
                    }
                }
        
        
        
    }
    console.log(errors);
        
  
        
    const Driverprofile = async()=>{
        const token=localStorage.getItem("accessToken")
        const decode = jwt_decode(token)
        setUser(decode.user_id)
        console.log(decode.user_id,":::::::::::::::::::::::::::::::::::::;;")
        
    }
    console.log(user,"LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLl")
    useEffect(()=>{

        Driverprofile();
      
      }, [])



  return (
    <> 
        <Container  fluid>
            <Row style={{marginTop:"50px"}}  >
                <Col sm={6}  className="d-flex justify-content-center">

                {/* <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                        </Card> */}
                </Col>

                <Col sm={6}  className="d-flex justify-content-center  border-0 ">
                       <Card className="Driver_user_profile_card shadow-lg  p-3 mb-5 bg-blue rounded  ">
                            <Row className="center">
                                
                                <Col class="center   ">
                                   <div >

                                    <img src={u} style={{width:"20%",marginLeft:"39%"}} className='rounded-circle center' alt='not in image'/>
                                    <Button variant="primary" onClick={handleShow}>
                                                        Change Password
                                                      </Button>

                                     <p   className="text-center my-3"> username@123 </p>
                                   </div>
                                      

                                   
                                            <Card.Body className="text-center">
                                                <Card.Title>Name</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">phone number</Card.Subtitle>
                                                <Card.Text>
                                                       Address...
                                                </Card.Text>
                                               
                                               
                                            </Card.Body>
                                            
                                
                                
                                </Col>
                                <Modal show={show}  className="text-center" onHide={handleClose}>
                                    <Modal.Header  className="text-center" closeButton>
                                    <Modal.Title className="text-center">Change Password</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
                                            <input type="password" className="rounded my-2" placeholder="password" {...register("password", {required:"password is required",
                                                  
                                            })} />
                                            <p className="text-muted">
                                                     <span className='text-center'>{errors.password && (<small className='text-center text-danger'>{errors.password.message}</small>)}</span>
                                                </p>
                                                <p style={{color:"red"}}>{err ? "password error":""}</p>
                                            <input type="password" className="rounded my-2" placeholder="New Password" {...register("newpassword",{required:"password is required",minLength:{
                                                    value:6,
                                                    message:"Please Enter atleast 8 charecters"
                                                    },
                                                    pattern:{
                                                    
                                                    value:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                                    message:"Please Enter a strong password ,should contain letter charecter and number"
                                                    }
                                                })}
                                                    name="newpassword"
                                                    onChange={e => setPassword(e.target.value)}
                                                    />
                                                    <p className="text-muted">
                                                                    <span className='text-center'>{errors.newpassword && (<small className='text-center text-danger'>{errors.newpassword.message}</small>)}</span>
                                                    </p>
                                            <input type="password" className="rounded my-2" placeholder="confimpassword" {...register("confimpassword", {required:"password is required",pattern:{
        
          
                                                    }})}
                                                    
                                                    name="confimpassword"
                                                    onChange={e => setPassword2(e.target.value)}
                                                     />
                                                     <p className="text-muted">
                                                                    <span className='text-center'>{errors.confimpassword && (<small className='text-center text-danger'>{errors.confimpassword.message}</small>)}</span>
                                                    </p>
                                                     <p className='text-danger'>{password2 !== password ? "Passwords do not match" : ""}</p>
                                            <br/>

                                            <input className="btn btn-primary " type="submit" />
                                            </form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    {/* <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button> */}
                                    </Modal.Footer>
                                </Modal>
                            </Row>
                        </Card> 
                </Col>
            </Row>
            
        </Container>
    </>
  )
}

export default DriverUserProfile