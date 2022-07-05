import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Axios from "../../../axios";
import {useNavigate,Link} from "react-router-dom"
import Alert from '../../../Alert/Alert';

const AdminAddVehicle = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const [showloading, setShowLoading] = useState(false);
    	const handleCloseloading = () => setShowLoading(false);
      const handleShowloading = () => setShowLoading(true);
    

      const onSubmit = async (datas) => {
        try {
               console.log(datas);
               handleShowloading();
               const formData = new FormData()  
               formData.append("vehicleBook_image",datas.choose_image[0],"image.png")
               formData.append("vehicle_RCowner", datas.vehicle_RCowner);
               formData.append("vehicle_Name", datas.vehicle_Name);
               formData.append("vehicle_number",datas.vehicle_number);
               console.log(":::::::::::::::;;;;;;")
               const {data} = await Axios.post(`dash/vehicle`,
               formData,{
                 headers: {
                   "content-type":"multipart/form-data",
                 },
               });
    
               console.log(data)
               handleCloseloading();
               navigate("/dashvehicles")
        } catch (error) {
             console.log(error,"oooooooooo")
        }
      };

  return (
    <>
    <Container>
                <div style={{marginLeft:"75%"}}>
                <Link to="/dashvehicles" ><button className="btn btn-success mt-3"><i class="fa-solid fa-square-arrow-left"></i>Back</button></Link>
                </div>
      <Row className="    text-center rounded">
        <h1>Add Vehicles</h1>
        <Col
          lg={5}
          md={5}
          sm={12}
          className="p-4  m-auto shadow-lg boxShadow  rounded-"
        >
          <div className="mt-4 mb-3 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="mb-2 shadow-lg border-4"
                type="text"
                placeholder="vehicle_Name"
                {...register("vehicle_Name", {
                  required: "Please enter the vehicle name",
                  max: 29,
                  minLength: {
                    value: 4,
                    message: "Should contain 4 elements",
                  },
                })}
              />

              <br />
              <span className="text-center">
                {errors.vehicle_Name && (
                  <small className="text-center text-danger">
                    {errors.vehicle_Name.message}
                  </small>
                )}
              </span><br/>
              <textarea
                className="mb-2 shadow-lg border-3"
                placeholder="vehicle_RCowner"
                {...register("vehicle_RCowner", {
                  required:
                    "Please enter vehicle_RCowner naem ",

                  minLength: {
                    value: 5,
                    message: "minium 5 words is required",
                  },
                })}
              />
              <br />
              <span style={{ fontSize: "" }}>
                {errors.vehicle_RCowner && (
                  <small className="text-center text-danger">
                    {errors.vehicle_RCowner.message}
                  </small>
                )}
              </span><br/>

              {/* <input
                className="mb-2 shadow-lg border-4"
                type="number"
                placeholder="price "
                {...register("price ", {
                  required: "Please enter the product name",
                  // max: 29,
                
                })}
              /> */}

              <textarea
                className="mb-2 shadow-lg border-3"
                placeholder="vehicle_number"
                {...register("vehicle_number", {
                  required:
                    "Please enter the user phone_number ",
                    minLength: {
                      value:5,
                      message: "minium 6 words is required",
                    },
                    maxLength: {
                      value: 14,
                      message: "minium 14  is required",
                    },
                })}
              />

              <br />
              <span style={{ fontSize: "" }}>
                {errors.vehicle_number && (
                  <small className="text-center text-danger">
                    {errors.vehicle_number.message}
                  </small>
                )}
              </span>
              <br/>

              <input
                className="mb-2 border-4 "
                type="file"
                accept="image/*"
                placeholder="choose_image"
                {...register("choose_image", {
                  required: "select the image",
                })}
              />
              <br />
              <span>
                {errors.choose_image && (
                  <small className="text-center text-danger">
                    {errors.choose_image.message}
                  </small>
                )}
              </span>
              <br />

              <input style={{ backgroundColor: "green" }} type="submit" />
            </form>
          </div>
          { showloading && <Alert show={showloading} />}
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default AdminAddVehicle