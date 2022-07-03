import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Axios from "../../../axios";
import {useNavigate,Link} from "react-router-dom"
import Alert from '../../../Alert/Alert';
// import '../AdminCharts/AdminCharts.css'
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
          console.log(datas.price);
          handleShowloading();
          const formData = new FormData();
          formData.append("image", datas.choose_image[0], "image.png");
          formData.append("description", datas.description);
          formData.append("name", datas.name);
          formData.append("price", String(datas.price));
    
          const { data } = await Axios.post(
            `dash/products`,
            formData,
            {
                headers: {
                    "content-type": "multipart/form-data",
                },
            }
            );
            
            console.log(data);
            handleCloseloading();
            navigate("/dashproducts")
        } catch (eerr) {
            console.log(eerr, "====================");
        }
      };
  return (
    <>
    <Container>
                <div style={{marginLeft:"75%"}}>
                <Link to="/dashproducts" ><button className="btn btn-success mt-3"><i class="fa-solid fa-square-arrow-left"></i>Back</button></Link>
                </div>
      <Row className="    text-center rounded">
        <h1>Add product</h1>
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
                placeholder="name"
                {...register("name", {
                  required: "Please enter the product name",
                  max: 29,
                  minLength: {
                    value: 5,
                    message: "Should contain 5 elements",
                  },
                })}
              />

              <br />
              <span className="text-center">
                {errors.name && (
                  <small className="text-center text-danger">
                    {errors.name.message}
                  </small>
                )}
              </span>
              <textarea
                className="mb-2 shadow-lg border-3"
                placeholder="description"
                {...register("description", {
                  required:
                    "Please enter proper discription in the products ",

                  minLength: {
                    value: 20,
                    message: "minium 20 words is required",
                  },
                })}
              />
              <br />
              <span style={{ fontSize: "" }}>
                {errors.description && (
                  <small className="text-center text-danger">
                    {errors.description.message}
                  </small>
                )}
              </span>

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
                placeholder="price"
                {...register("price", {
                  required:
                    "Please enter proper discription in the products ",
                })}
              />

              <br />
              <span style={{ fontSize: "" }}>
                {errors.price && (
                  <small className="text-center text-danger">
                    {errors.price.message}
                  </small>
                )}
              </span>

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






// const AddProducts = () => {
 
//   return (
   
//   )
// }

// export default AddProducts