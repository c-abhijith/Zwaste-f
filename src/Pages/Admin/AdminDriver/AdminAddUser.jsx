import React,{useState,useEffect} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {useNavigate,Link} from "react-router-dom"
import { useForm } from "react-hook-form";
import Axios from "../../../axios"
import Alert from '../../../Alert/Alert';


const AdminAddUser = () => {
    const navigate = useNavigate()

    const [showloading, setShowLoading] = useState(false);
    const handleCloseloading = () => setShowLoading(false);
    const handleShowloading = () => setShowLoading(true);


    const [Driver,setDriver]= useState()

    const [user,setUser]= useState()
    const [Districts,setDistricts]= useState()

    const listuser=(data)=>{
        console.log(data.target.value,"rrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
        setDistricts(data.target.value)

    }

    const fecthdriver = async(e) =>{
        try {
            const {data} = await Axios.get(`driver/drivers`)
            setDriver(data)
        } catch (error) {
           console.log(error)
        }
      }
      const fecthuser = async(e) =>{
        try {
            const {data} = await Axios.get(`dash/adddriver`)
            setUser(data)
        } catch (error) {
           console.log(error)
        }
      }


      const { register, handleSubmit, watch, formState: { errors } } = useForm();

      const onSubmit = async (datas) => {
          try {
                console.log(datas.users,"pppppppppppppppp")
                handleShowloading();
                const formData = new FormData()  
                formData.append("users", datas.users);
                formData.append("Driver",datas.Driver);
                const {data} = await Axios.post(`dash/todayduty`,formData)
                handleCloseloading();
                navigate('/dashdrivers')
                
          } catch (error) {
              console.log(error)
          }
      }



      useEffect(()=>{
          fecthdriver();
          fecthuser();
        },[]);
    
   console.log(user,";;;;;;;;;;;;;;;;;;;;;;;;;;;")

  return (
    <div>
        <Container>
                <div style={{marginLeft:"75%"}}>
                     <Link to="/dashdrivers" ><button className="btn btn-success mt-3"><i class="fa-solid fa-square-arrow-left"></i>Back</button></Link>
                </div>

                <Row className="    text-center rounded">
                    <h1>Add Work</h1>
                    <Col lg={5} md={5} sm={12} className="p-4  m-auto shadow-lg boxShadow  rounded-"
 >
                    <div className="mt-4 mb-3 ">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <select  {...register("Driver", { required: 'Driver is required' })}>
                                <option value="">Select the Driver </option>
                                 {Driver && Driver.map((data,index)=>(

                                      <option value={data.id}>{data.username }</option>
                            
                                ))}
                            </select>
                           <br/><div>
                               {errors.Driver && <span className='text-sm text-red-500'>{errors.Driver.message}</span>}
                               </div><br />

                            <select onChange={(e)=>{console.log("///////////");listuser(e)}}  >
                                <option value="">Select the district</option>
                                 {user && user.map((data,index)=>(
                                      
                                      <option value={data.District}>{data.District}</option>
                                ))}
                            </select>
                            
                            <br/><div>
                               {errors.users && <span className='text-sm text-red-500'>{errors.users.message}</span>}
                               </div>
                               <br />
                               <select  {...register("users", { required: 'users is  required' })}>
                                <option value="">Select the Driver </option>
                                 {user && user.filter(user => user.District == Districts).map((data,index)=>(

                                      <option value={data.id}>{data.username }</option>
                            
                                ))}
                            </select>
                           <br/><div>
                               {errors.users && <span className='text-sm text-red-500'>{errors.users.message}</span>}
                               </div><br />


                            
                       

                        <input style={{ backgroundColor: "green" }} type="submit" />
                        </form>
                    </div>
                    </Col>
                    { showloading && <Alert show={showloading} />}
                </Row>
        </Container>
    </div>
  )
}

export default AdminAddUser