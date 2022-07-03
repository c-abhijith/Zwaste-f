import React,{useState,useEffect} from 'react';
import { useForm } from 'react-hook-form';
import Axios from "../../../axios"
import {Container,Row,Col,Table,Button,Modal} from "react-bootstrap"
import './DriverUserlogin.css'
import { useNavigate } from 'react-router-dom';

export const DriverUserlogin = () => {
     
    const navigate=useNavigate()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [listOrder,setlistOrder] =  useState([])

    const handleEdit = async () => {
        
      try {
        console.log("++++++++++++++++++++++++++++++");
        const delete_data = await Axios.patch(`payment/listodersdriver/${show.id}`);
        console.log("((((((((((((((((((((((((((((((((")
        fecthOders()  
        handleClose();  
        navigate("/driveruser")
      
        
      } catch (error) {
        console.log(error);
      }
    };

    const fecthOders = async ()=>{
      const {data} = await Axios.get(`payment/listodersdriver`)
      console.log(data)
      setlistOrder(data)
    }
    useEffect(()=>{ 
      fecthOders()
    },[])

  
  return (
    <>
    <Container>
             <Row>
               <Col>
          
                  <Table striped bordered hover variant="grey" className="my-5 shadow-lg text-center">
                <thead>
                  <tr>
                    <th>#</th>
                    <td>Product Image</td>
                    <th>Product Name</th>
                    <th>Username Name</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody>
               
                {listOrder && listOrder.map((data,index)=>(

                  <tr>
                    <td>{index+1}</td>
                    <td> <img
                                style={{ width: "50px", height: "50px" }}
                                src={data.productname.image  }
                              /></td>
                    <td>{data.productname.name}</td>
                    <td>{data.user_id.username}</td>
                    <td>
                    <Button variant="secondary" onClick={()=>setShow(data)}>
                          Pending
                    </Button>
                    </td>
                  </tr>
                    ))} 
                         {show && <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                  <Modal.Title>Delivery</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Are you deliver</Modal.Body>
                                <Modal.Footer>
                                  <Button variant="secondary" onClick={handleClose}>
                                    no
                                  </Button>
                                  <Button variant="danger" onClick={()=>{
                                                  handleEdit()
                                                    
                                  }}>
                                    yes
                                  </Button>
                                </Modal.Footer>
                              </Modal>  }
                </tbody>
              </Table>

               
               </Col>
             </Row>
    </Container>

    </>
  )
}
