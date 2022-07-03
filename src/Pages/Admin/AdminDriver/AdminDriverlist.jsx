import React,{useState,useEffect} from 'react'
import { Table, Button, Modal ,Row,Col} from "react-bootstrap";
import "./AdminDriver.css"
import Axios from "../../../axios"
import {useNavigate,Link} from "react-router-dom"




const AdminDriverlist = () => {

  const navigate = useNavigate()

  const [UserList, setShowUserlist] = useState();
  const[users,setUsers]= useState()
  
  const [showList, setShowlist] = useState(false);
  const handleCloseList = () => {setShowlist(false)};
  const handleShowList = () => setShowlist(true);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [usersData, setuserData] = useState([]);

  const scrollContainerStyle = {   maxHeight: "200px" };

   


  const handleList = async(e) =>{
    console.log(e,"........................................")
    try {
        const {data} = await Axios.get(`dash/dutyusers/${e.id}`)
        console.log(data,":::::::::::::::::::::::::::::::::::::::::::::::::::::")
        setShowlist(data)
        setUsers(data)
        
      
    } catch (error) {
       console.log(error)
    }
  }


  const handledelete = async () => {
  
    try {
      const delete_data = await Axios.delete(`driver/drivers/${show}`);
      fecthdriver();  
      handleClose();
      navigate("/dashdrivers")
      
    
       
    } catch (error) {
      console.log(error);
    }
  };


    const fecthdriver=async()=>{
      const {data} = await Axios.get(`driver/drivers`);
      
      setuserData(data)
    }
    
      useEffect(()=>{
        fecthdriver();
       
      },[]);

      console.log(usersData,"iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")

      

  
  return (
    <div>
       <div className="chart">
        
         

          <h3 className="chartTitle">Drivers Table</h3>
          <Link to="/dashaddnewdriver" >
          <button className='btn btn-primary' style={{marginLeft:"610px",marginBottom:"10px"}}>Add Driver</button>
          </Link>
       
        </div>
        <div style={{marginLeft:"75%"}}>
       <Link to="/dashaddrivers" ><button className="btn btn-primary">Add Work</button></Link>
      </div>
            
    <Table >
        <thead>
        <tr>
            <th>#</th>
            <th> Name</th>
            
            <th> Phone number</th>
            <td>List users</td>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody className='tablehead adminworkertable  text-center shadow-lg' striped bordered hover>
        {usersData && usersData.map((data,index)=>(
            
                    <tr>
                        <td>{index+1}</td>
                        <td>{data.username}</td>
                        <td>{data.phone_number} </td>
                        
                        <td style={{color:"blue" , cursor:"pointer"}} onClick={()=>{handleList(data)}}> views</td>

                        <td><Button variant="danger" onClick={()=>setShow(data.id)}>
                                Delete  
                              </Button> 

                            
                      </td> 

                    
              

                    </tr>

            ))
            }






{ showList &&     <Modal className="text-center" show={showList} onHide={handleCloseList} animation={false}>
                      <Modal.Header closeButton>
                        <Modal.Title>List Users</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>
                      <Table striped bordered hover>
                <thead>
                       

                      <tr>
                          <th>#</th>
                          <th>Username Name</th>
                          <th>phone_number </th>
                                
                        </tr> 
                </thead>
                <tbody>
                      {users && users.map((data,index)=>(
                        <tr>
                          <td>{index+1}</td>
                          <td >{data.users.username}</td>
                          <td >{data.users.phone_number}</td>
                        </tr>)) }
                </tbody>
              </Table>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseList}>
                          Close
                        </Button>
                              </Modal.Footer>
                    </Modal>}






            {show && <Modal show={show}  onHide={handleClose}>
                                <Modal.Header closeButton>
                                  <Modal.Title>Delete</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Do you want delete</Modal.Body>
                                <Modal.Footer>
                                  <Button variant="secondary" onClick={handleClose}>
                                    Close
                                  </Button>
                                  <Button variant="danger" onClick={()=>{
                                                  handledelete()
                                                    
                                  }}>
                                    Delete
                                  </Button>
                                </Modal.Footer>
                              </Modal>}

        
        </tbody>
        </Table>
        </div>
  )
}


export default AdminDriverlist







