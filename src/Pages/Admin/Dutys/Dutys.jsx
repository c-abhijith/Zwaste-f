import React,{useState,useEffect} from 'react'
import Axios from "../../../axios"
import {Container, Row, Col,Button,Card} from "react-bootstrap";
import { toHaveValue } from '@testing-library/jest-dom/dist/matchers';



const Dutys = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


   const [driver,setDriver] = useState();
   const [dutydriver,setdutyDriver] = useState();
   const [users,setUsers]= useState();
   

  //  const fecthuser=async()=>{
  //   const {data} = await Axios.get(`dash/duty`);
    
  //   setUsers(data)
  // }
  useEffect(()=>{
    fecthdutydriver();
  
    
    
  },[]);


  
  const fecthdutydriver=async()=>{
    console.log("///////////");
    const {data} = await Axios.get(`dash/duty`);
    console.log(data);
    setdutyDriver(data)
  }
  
  // const fecthdriver=async()=>{
  //   console.log("???????????");
  //     const {data} = await Axios.get(`dash/driver`);
  //     console.log(data);
  //     setDriver(data)
  //   }
        
        
    
  return (
    <div>
        <div className="chart button-left">
            <h3 className="chartTitle">Duty</h3>
            
        </div>
            <Button variant="primary" style={{marginLeft:"900px"}}  onClick={handleShow}>
        Add work
      </Button>
        <>
        <Container>
            <Row>
                    {dutydriver && dutydriver.map((data,index)=>( 
                    <Col sm={12} md={6} lg={6} className="my-3 shadow-lg">
                                          <Card key={index}>
                          <Card.Header className="text-center">{data.driver}</Card.Header>
                          <Card.Body>
                              <blockquote className="blockquote mb-0">
                              
                                  {  data.pass.map((value,index)=>{
                                     return <p>{value}</p> 
                                  }) }
                              

                              
                              
                              </blockquote>
                          </Card.Body>
                          </Card>
                      </Col>))}
               
            </Row>
        </Container>
            </>


    </div>
  )
}

export default Dutys