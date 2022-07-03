import React, { useState, useEffect } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import "./AdminVehicleslist.css";
import { Form } from "react-bootstrap";
import Axios from "../../../axios";
import {useNavigate,Link} from "react-router-dom"
import Alert from '../../../Alert/Alert';

const AdminVehicleslist = () => {
  
  const navigate = useNavigate()
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [showloading, setShowLoading] = useState(false);
  const handleCloseloading = () => setShowLoading(false);
  const handleShowloading = () => setShowLoading(true);


  const [vname, setvname] = useState();
  const [rcname, setrcname] = useState();
  const [vnumber, setvnumber] = useState();
  const [vimage, setvimage] = useState();

  
  const Datas =(event) =>{
    setShowEdit(event)
    console.log(event,";;;;;;;;;;;;;;;;")
    setvname(event.vehicle_Name)
    setrcname(event.vehicle_RCowner)
    setvnumber(event.vehicle_number)
    setvimage(event.vehicleBook_image)
    
  }
  const onSubmit = async ()=>{
    handleShowloading()
    console.log(vimage,"++++++++++++++d+++++++++")
    console.log(vname,"++++++++g+++++++++++++++")
    console.log(rcname,"++++++++++++w+++++++++++")
    console.log(vnumber,"+++++++++wwwwww++++++++++++++")
    console.log("hai")
    const formData = new FormData() 
    formData.append("vehicle_Name", vname);
    formData.append("vehicle_RCowner", rcname);
    formData.append("vehicle_number", vnumber);
    formData.append("vehicleBook_image", vimage,"image.png");
    // formData.append("vehicleBook_image",datas.choose_image[0],"image.png")

    const data = await Axios.put(`dash/vehicle/${showEdit.id}`,formData,
    {
      headers: {
        "content-type":"multipart/form-data",
      },
    });
    handleCloseloading()
    console.log("0000")
    navigate("/dashvehicles")
    fecthVehicles();
    handleCloseEdit();
    
    navigate("/dashvehicles")


    // formData.append("vehicle_Name", vehicle_Name);

  }
  
  
  
  const [usersData, setuserData] = useState([]);
  
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    
  
    const fecthVehicles = async () => {
      const list = await Axios.get(`dash/vehicle`);
      setuserData(list.data);
    };
  
    const handledelete = async () => {
    
      try {
        const dat = await Axios.delete(`dash/vehicle/${show}`);
         fecthVehicles()
         handleClose()
         fecthVehicles()
         navigate("/dashvehicles")
  
        // setuserData(
        //   usersData.filter(data => data.id == event)
        // )
  
      
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fecthVehicles();
      
      
    }, [])
    console.log(usersData,"<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
  
    return (
      <div>
         <div className="chart">
    <h3 className="chartTitle">Vehicles Table</h3>
    
  </div>
      <div style={{marginLeft:"75%"}}>
       <Link to="/dashaddvehicles" ><button className="btn btn-primary">Add Vehicles</button></Link>
      </div>
        <Table className="tablehead adminvehiclestable shadow-lg text-center" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              {/* <td>vehicle_image</td> */}
              <td>vehicle_proof</td>
              <td>vehicle_Name</td>
              <td>Rc_owner</td>
              <td>vehicle_no</td>
  
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody >
            {usersData
              && usersData.map((data, index) =>(
                    <tr key={data.id}>
                      <td>{index + 1}</td>
                      {/* <td>
                        {" "}
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={data.vehicle_Image}
                        />
                      </td> */}
                      <td>
                        {" "}
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={data.vehicleBook_image}
                        />
                      </td>
                      <td>{data.vehicle_Name}</td>
                      <td>{data.vehicle_RCowner}</td>
                      <td>{data.vehicle_number}</td>
                      
                      <td style={{ color: "green" }}>
                           <button className="btn btn-success bg-success" onClick={()=>{Datas(data)}}>Edit</button>
                      </td>
                      <td><Button variant="danger" onClick={()=>setShow(data.id)}>
                                Delete
                              </Button>

                            
                      </td>
  
                    </tr>
                  )
                )}

                          {show && <Modal show={show} onHide={handleClose}>
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
          { showloading && <Alert show={showloading} />}
        </Table>



        { showEdit && <Modal show={showEdit} onHide={handleCloseEdit}>
                              <Modal.Header closeButton>
                                <Modal.Title>Edit</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                              <Form>
                                      <Form.Group className="mb-3" controlId="formBasicEmail">
                                           <Form.Control type="text" placeholder="vehicle_Name" 
                                           defaultValue={vname}
                                           onChange={(e) =>setvname(e.target.value)}
                                           />
                                      </Form.Group>

                                      <Form.Group className="mb-3" controlId="formBasicEmail">
                                           <Form.Control type="text" placeholder="vehicle_RCowner" 
                                           defaultValue={rcname}
                                           onChange={(e) =>setrcname(e.target.value)}/>
                                      </Form.Group>

                                      
                                      <Form.Group className="mb-3" controlId="formBasicEmail">
                                           <Form.Control type="text" placeholder="vehicle_number"
                                           defaultValue={vnumber}
                                           onChange={(e) =>setvnumber(e.target.value)}/>
                                      </Form.Group>
                                      
                                      <Form.Group className="mb-3" controlId="formBasicEmail">
                                           <Form.Control type="file" placeholder="vehicleBook_image" 
                                          //  defaultValue={vimage}
                                           onChange={(e) =>setvimage(e.target.files[0])}/>
                                      </Form.Group>
                                      
                                      


                                      <Button variant="primary"  onClick={()=>onSubmit()}>
                                        Submit
                                      </Button>
                                    </Form>
                              </Modal.Body>
                              
                            </Modal>
}
      </div>
    );
  };
  
export default AdminVehicleslist









