import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card ,Button,Modal,Table  } from "react-bootstrap";
import Axios from "../../../axios";
import {makePayment} from "../../../Utils/Payment"
import { useNavigate} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import "./UserProducts.css"
import {axiosInstance} from "../../../AxiosInstance/AxiosSetBaseUrl"



const Userproduct = () => {

  const [show, setShow] = useState();
  
  const [datas, setDatas] = useState();


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const navigate = useNavigate()
  const [person,setperson]= useState([])
  const [Basket, setBasket] = useState([])

  const Paypaldatas  = async()=>{
    
    try{
      const data = await Axios.get(`dash/products/${show}`);
      
      setDatas(data)
    }
    catch(error){
      console.log(error)
    }
  }
  


  // console.log(decode.username)
  const Baskets = async()=>{
    const token=localStorage.getItem("accessToken")
    const decode = jwt_decode(token)
    console.log(decode.user_id,"--------------------------id----------------")
    try {
          const {data} = await Axios.get(`payment/purchase/${decode.user_id}`);
          console.log(data,"::::::::::::::::::::::::::::::::::::;;")
           setBasket(data)
           setperson(decode.username)
           
    } catch (error) {
        console.log(error)
    }
}



const [userproducts, setUserProducts] = useState([]);
const data = async () => {
  const list = await Axios.get("dash/products");
  console.log(list);
  setUserProducts(list.data);
  };
  useEffect(() => {
    Baskets()
    data();
    Paypaldatas()
  }, []);


  const handleBuyProduct = (price,id) =>{
    console.log(price);
    
    
    
    
    
    makePayment(price,id, 
      () => {
        navigate("/profile")
      }
      )
      
    }




      // console.log(Basket.user_id.username,"|||||||||||||||||||||||||||||||||||||||||")
    
    return (
      <>
      <Container fluid >
        <Row className="my-3">
          {userproducts
            ? userproducts.map((data, index) => {
                return (
                  <Col sm={6} md={6} lg={4}>
                    <Card className="shadow-lg CardProducts  mx-5" >
                      <Card.Img variant="top" className="text-center" style={{width:"7rem", height:"40%",marginLeft:"30%"}} src={data.image} />
                      <Card.Body>
                        <Card.Title className="text-success">
                          {data.name}
                        </Card.Title>
                        {/* {person == Basket.user_id.usemrname ? "hello":"no"} */}
                        <Card.Text>
                          {data.description}
                          {/* {data.price} */}
                        </Card.Text>
                        <div style={{color:"red"}}>Price : {data.price}</div>
                        {/* <button className="btn btn-primary " onClick={()=>handleBuyProduct(data.price,data.id)}>BuyNow</button> */}
                        <Button variant="success" onClick={()=>{
                          setShow(data)
                          Paypaldatas()
                        } 
                            }                                 
                        >
                                Buynow2
                              </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            : "not products"}
        </Row>
      </Container>
      {show && <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover>
              <thead>
                <tr>
                  <th> Name</th>
                  <th> Image</th>
                  <th> Prie</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{show.name}</td>
                  <td><img style={{ width: "100px", height: "100px" }}src={show.image}/>  </td>
                  <td>{show.price}</td>
                  
                </tr>
              </tbody>
              
            </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={()=>handleBuyProduct(show.price,show.id)}>
            Go to pay
          </Button>
        </Modal.Footer>
      </Modal>}
    </>
  );
};

export default Userproduct;
