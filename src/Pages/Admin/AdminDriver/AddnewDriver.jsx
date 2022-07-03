import React,{useState} from 'react'
import { useNavigate,Link } from 'react-router-dom';
import {Container,Button,   Modal, Form,Col,Row,ListGroup} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { TextField, Grid } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import Axios from "../../../axios"

const AddnewDriver = () => {
  const navigate = useNavigate()

  const {register,handleSubmit,setError   ,formState:{errors}}=useForm();
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");





  const onSubmit =async(data)=>{
    const datas = {
      username:data.username,
      phone_number:data.phone,
      password:data.password,
      
    }
    
   
    try{
      console.log("poiuytrewertyui")
      const response = await Axios.post(`driver/drivers/`,datas)
      console.log(response)
      console.log("))))))))))))))))))))))))")
      navigate("/dashdrivers");
    }
    catch(error){
      console.log("@@@@@@@@@@@@@@@@@@@")
      console.log(error)
      if (error.response.data.username) {
        setError("username", { type: "server", message: error.response.data.username });
   }
  
   if (error.response.data.password) {
        setError("password", { type: "server", message: error.response.data.password[0] });
   }
   if (error.response.data.phonenumber) {
        setError("phone", { type: "server", message: error.response.data.phonenumber[0] });
   }
    }
    
  }

  return (
    <Container className="text-center">
      <Grid
        container
        style={{
          width:"700px",
          margin: "2em",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Grid item md={6} lg={6}>
        <Row className="text-center rounded"><h1>Add Drivers</h1></Row>

        <Form onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
          <Row style={{marginTop:'2rem'}}>
    <Col sm>
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
    <Col sm>
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
   
  </Row>
  <Row>
   
   

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
      
        </Grid>
      </Grid>
      
    </Container>
  )
}

export default AddnewDriver