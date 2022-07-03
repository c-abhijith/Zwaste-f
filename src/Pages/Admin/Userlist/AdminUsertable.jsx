import React,{useState,useEffect} from 'react'
import {Table,Button, Modal} from 'react-bootstrap';
import "./AdminUserpages.css"
import Axios from "../../../axios"
// import Users from './UsersTabels'


const AdminUser = () => {
      
  const scrollContainerStyle = { width: "200px", maxHeight: "200px" };
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleDriver  = async ()=>{
    try {
          const datas= await Axios.patch(`user/registeradddriver/${show1.id}`)
          handleClose1()
          data()

    }
     catch (error) {
      
    }
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




        const [usersData, setuserData] = useState([]);
      const data=async()=>{
        const list = await Axios.get(`user/register/`);
        console.log(list)
        setuserData(list.data)
      }
      
        useEffect(()=>{
          data();
        },[]);



    const blockUser=async()=>{
      try {
           await Axios.patch(`user/register/${show.id}`)
           data()
           handleClose()
           console.log("dskjahs")
      } catch (error) {
        console.log(error)
      }
    }



  return (
    <div>
       <div className="chart">
    <h3 className="chartTitle">User Table</h3>
    
  </div>
        <Table className="tablehead adminusertable scrollbar scrollbar-primary  auto" style={{scrollContainerStyle}} striped bordered hover>
    <thead>
       <tr>
        <th>#</th>
        <th>Name</th>
        <td>Phone number</td>
        <td>Block/UnBlock</td>
      
      
      </tr>
     </thead>
     <tbody >
      {usersData 
         ? usersData.map((data,index)=>{
           return(
                <tr key={data.id}>
                    <td>{index+1}</td>
                    <td>{data.username}</td>
    
                    <td>{data.phone_number}</td>
                    <td>
                          {data.is_active ? (
                                    <Button variant="success" onClick={()=>setShow(data)} >
                                      Block
                                    </Button>) : (<Button variant="danger" onClick={()=>setShow(data)}>unblock</Button>)}
                    </td>
                    {/* <td>
                        <Button variant="primary" onClick={handleShow}>
                          Launch static backdrop modal
                        </Button>

                        
                      </td> */}

                    {/* <td>
                         <Button variant="primary"  onClick={()=>setShow1(data)}>
                               Add Driver
                          </Button>
                    </td> */}



                   
                  </tr>
                  
    
           );
         })
           :"user not available"}

                      {show1 && <Modal show={show1} onHide={handleClose1}>
                                <Modal.Header closeButton>
                                  <Modal.Title>Add Driver</Modal.Title>
                                </Modal.Header>
                                
                                <Modal.Footer>
                                  <Button variant="danger" onClick={handleClose1}>
                                    Not now
                                  </Button>
                                  <Button variant="success" onClick={()=>{
                                                  handleDriver()}}>
                                    Add Driver
                                  </Button>
                                </Modal.Footer>
                              </Modal>} 


              {show && <Modal
                          show={show}
                          onHide={handleClose}
                          backdrop="static"
                          keyboard={false}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>{show.is_active ? "block" : "unblock"}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                             Do you want change status in user
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant="white" onClick={()=>{ blockUser()}}>{show.is_active ? (<Button className='btn btn-success'>block</Button>) : (<Button className='btn btn-danger'>unblock</Button>)}</Button>
                          </Modal.Footer>
                        </Modal>}
    
      
    </tbody>
    </Table>
      </div>
  )
}

export default AdminUser




