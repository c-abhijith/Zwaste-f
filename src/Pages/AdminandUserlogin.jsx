import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { TextField, Grid, Button, Container } from "@mui/material";
import { useNavigate,Link } from "react-router-dom";
import Axios from "../axios"
import jwt_decode from 'jwt-decode';



const AdminandUserlogin = () => {
    

    
   

    const [err, setErr] = useState();
  
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    
    const onSubmit = async(data) => {
      try {
        const datas = {
          username:data.username,
          password:data.password
        }
        const response = await Axios.post(`user/token/` ,datas)
        console.log(response.data.access,"888888888888888888888888888")
        const access_token = localStorage.setItem('accessToken',response.data.access)
        const refresh_token = localStorage.setItem('refreshToken',response.data.refresh)
        const token =localStorage.getItem("accessToken")

        if(token){
          const decode = jwt_decode(token)
        console.log(decode)
        if(decode.is_superuser){
          navigate("/dash");
        }
        else if(decode.is_staff){
          navigate("/driverhome");
        }
        else{
          navigate("/home")
        }

        }
        
        
  
        // if(decode.is_superuser)
        // {
        //   navigate("/dash");
        // }
        // else if(decode.is_staff){
        //     navigate("/driverhome");
        // }
        // else{
        //   navigate("/home")
        // }
  
      } catch (error) {
        console.log(error.response.data.detail)
        setErr(error.response.data.detail)
      }
    }
    
  
    //   const [err, setErr] = useState("");
    return (
      <Container>
        <Grid
          container
          style={{
            margin: "2em",
            backgroundColor: "",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
         
          <Grid item md={3} lg={3}>
            <item>
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: "flex", flexDirection: "column", gap: "1em" }}
              >
                <h3>Login</h3>
                <p style={{color:"red",fontSize:"10px"}}>{err}</p>
                <TextField
                  id="outlined-basic"
                  label="User name"
                  required
                  variant="outlined"
                  type="text"
                  placeholder="user name"
                  {...register("username", { required: "username is required" })}
                />
                {errors.username?.type === "required" &&
                  "First name is required"}
  
                <TextField
                  id="outlined-basic"
                  label="password"
                  required
                  // variant="outlined"
                  type="password"
                  placeholder="password"
                  {...register("password", {
                      required: "username is required"
                  })}
                />
  
                <Button variant="contained" color="success" type="submit">
                  submit
                </Button>
                <p onClick={() => navigate("/signup")}>
                  {/* New Registration <a href="">Sign Up</a> */}
                </p>
              </form>
              <Link to="/signup">signup</Link>
            </item>
          </Grid>
          <Grid item md={9} lg={9}>
            <item style={{ width: "100%", justifyContent: "Center" }}>
              <iframe
                src="https://embed.lottiefiles.com/animation/61882"
                style={{ width: "100%", height: "100%", border: "none" }}
              ></iframe>
            </item>
          </Grid>
        </Grid>
      </Container>
    );
  };
  

export default AdminandUserlogin








