import React, {useEffect,useState}from 'react'
 import Axios from "../../../axios" 
 import { useForm } from "react-hook-form";
 import { Form } from "react-bootstrap";
 import { Table, Button, Modal } from "react-bootstrap";
 import "../AdminCharts/AdminCharts.css"
import {useNavigate,Link} from "react-router-dom"
import Alert from '../../../Alert/Alert';


const AdminProductsTable = () => {
  const navigate = useNavigate()

     const [showloading, setShowLoading] = useState(false);
    	const handleCloseloading = () => setShowLoading(false);
      const handleShowloading = () => setShowLoading(true);
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


  const [showEdit, setShowEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [pname, setvname] = useState();
  const [pdes, setPdes] = useState();
  const [price, setprice] = useState();
  const [pimage, setPimage] = useState();


  const Datas =(event) =>{
    setShowEdit(event)
    console.log(event,";;;;;;;;;;;;;;;;")
    setvname(event.name)
    setPdes(event.description)
    setprice(event.price)
    setPimage(event.image)
    
  }
  
  const onSubmit = async ()=>{
    
    handleShowloading();
    console.log("hai")
    const formData = new FormData() 
    formData.append("name", pname);
    formData.append("description", pdes);
    formData.append("price", price);
    formData.append("image", pimage,"image.png");
    // formData.append("vehicleBook_image",datas.choose_image[0],"image.png")

    const data = await Axios.put(`dash/products/${showEdit.id}`,formData,
    {
      headers: {
        "content-type":"multipart/form-data",
      },
    });
    console.log("0000")
    navigate("/dashproducts")
    fecthProduct();
    handleCloseEdit();
    handleCloseloading();
    navigate("/dashproducts")


    // formData.append("vehicle_Name", vehicle_Name);

  }

  


  
     
  
  
  
  
  
  
  
  
  


 
  const [user,setUser]=useState([])

  const handledelete = async () => {
  
    try {
          const delete_data = await Axios.delete(`dash/products/${show}`)
          
          
          fecthProduct();
          handleClose();
          navigate("/dashproducts")
          

    }
    catch (error){
      console.log(error,"kjhdashkjshjh")
    }
  }
  

  const fecthProduct = async ()=>{
        const {data} = await Axios.get(`dash/products`)
        // console.log(data)
        // console.log("brforre");
        setUser(data)
        // console.log("after");
      }
    
  useEffect(()=>{
    
    fecthProduct();
    
  }, [])




  return (
    
    <div>
      <div className="chart">
    <h3 className="chartTitle">Products Table</h3>
    
  </div>
      <div style={{marginLeft:"75%"}}>
       <Link to="/dashaddproducts" ><button className="btn btn-primary">Add Products</button></Link>
      </div>
           <Table className="tablehead adminproducttable text-center" striped bordered hover>
              <thead>
                <tr>
                    <th>#</th>
                    <th>product name</th>
                    <td>Image</td>
                    <td>price</td>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
             <tbody>
             
                 {user && user.map((value,index)=>(
                  <tr>
                    <td>{index + 1}</td>
                    <td>{value.name}</td>
                    <td><img
                            style={{ width: "50px", height: "50px" }}
                              src={value.image}/></td>

                    <td>{value.price}</td>


                    <td >
                    <Button variant="success" onClick={()=>{Datas(value)}} > Edit </Button>
                                          
                      </td>
                    
                    <td><Button variant="danger" onClick={()=>{
                      setShow(value.id)}}>
                                Delete
                              </Button>

                            
                      </td>

                 
                  </tr>



            


             
                ))}
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
                                           defaultValue={pname}
                                           onChange={(e) =>setvname(e.target.value)}
                                           />
                                      </Form.Group>

                                      <Form.Group className="mb-3" controlId="formBasicEmail">
                                           <Form.Control type="text" placeholder="vehicle_RCowner" 
                                           defaultValue={pdes}
                                           onChange={(e) =>setPdes(e.target.value)}/>
                                      </Form.Group>

                                      
                                      <Form.Group className="mb-3" controlId="formBasicEmail">
                                           <Form.Control type="text" placeholder="vehicle_number"
                                           defaultValue={price}
                                           onChange={(e) =>setprice(e.target.value)}/>
                                      </Form.Group>
                                      
                                      <Form.Group className="mb-3" controlId="formBasicEmail">
                                           <Form.Control type="file" placeholder="vehicleBook_image" 
                                          //  defaultValue={vimage}
                                           onChange={(e) =>setPimage(e.target.files[0])}/>
                                      </Form.Group>
                                      
                                      


                                      <Button variant="primary"  onClick={()=>onSubmit()}>
                                        Submit
                                      </Button>
                                    </Form>
                              </Modal.Body>
                              
                            </Modal>
}

          </div>
  )
}

export default AdminProductsTable


