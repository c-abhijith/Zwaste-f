import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import Axios from "../../../axios";
import {useNavigate,Link} from "react-router-dom"
import Alert from '../../../Alert/Alert';

const AdminAddProducts = () => {
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
           handleShowloading()
           const formData = new FormData()  
           formData.append("worker_Image",datas.choose_image[0],"image.png")
           formData.append("Address", datas.Address);
           formData.append("Name", datas.Name);
           formData.append("phone_number", String(datas.phone_number));
           console.log(":::::::::::::::;;;;;;")
           const {data} = await Axios.post(`dash/worker`,
           formData,{
             headers: {
               "content-type":"multipart/form-data",
             },
           });

           console.log(data)
           handleCloseloading()
           navigate("/dashworkers")
    } catch (error) {
         console.log(error,"oooooooooo")
    }
  };


  return (
    <>
    <Container>
                <div style={{marginLeft:"75%"}}>
                <Link to="/dashworkers" ><button className="btn btn-success mt-3"><i class="fa-solid fa-square-arrow-left"></i>Back</button></Link>
                </div>
      <Row className="    text-center rounded">
        <h1>Add Worker</h1>
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
                placeholder="Name"
                {...register("Name", {
                  required: "Please enter the worker name",
                  max: 29,
                  minLength: {
                    value: 4,
                    message: "Should contain 4 elements",
                  },
                })}
              />

              <br />
              <span className="text-center">
                {errors.Name && (
                  <small className="text-center text-danger">
                    {errors.Name.message}
                  </small>
                )}
              </span><br/>
              <textarea
                className="mb-2 shadow-lg border-3"
                placeholder="Address"
                {...register("Address", {
                  required:
                    "Please enter proper Address in the Worker ",

                  minLength: {
                    value: 10,
                    message: "minium 10 words is required",
                  },
                })}
              />
              <br />
              <span style={{ fontSize: "" }}>
                {errors.Address && (
                  <small className="text-center text-danger">
                    {errors.Address.message}
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
                placeholder="phone_number"
                {...register("phone_number", {
                  required:
                    "Please enter the user phone_number ",
                    minLength: {
                      value: 10,
                      message: "minium 10 words is required",
                    },
                    maxLength: {
                      value: 10,
                      message: "minium 10  is required",
                    },
                })}
              />

              <br />
              <span style={{ fontSize: "" }}>
                {errors.phone_number && (
                  <small className="text-center text-danger">
                    {errors.phone_number.message}
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
        </Col>
        { showloading && <Alert show={showloading} />}
      </Row>
    </Container>
  </>
  )
}

export default AdminAddProducts