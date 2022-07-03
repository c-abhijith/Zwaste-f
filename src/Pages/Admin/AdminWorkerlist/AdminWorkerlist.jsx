import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import './AdminWorkerlist.css';
import { useForm } from 'react-hook-form';
import Alert from '../../../Alert/Alert';
import Axios from '../../../axios';
import { useNavigate, Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

const AdminWorkerlist = () => {
	const navigate = useNavigate();

	const [showEdit, setShowEdit] = useState(false);

	const handleCloseEdit = () => setShowEdit(false);
	const handleShowEdit = () => setShowEdit(true);


	const [showloading, setShowLoading] = useState(false);
	const handleCloseloading = () => setShowLoading(false);
    const handleShowloading = () => setShowLoading(true);

	
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [wname, setWname] = useState();
	const [wnumber, setWnmber] = useState();
	const [workeraddress, setWorkeraddress] = useState();
	const [workermage, setWorkermage] = useState();
    
	const Datas =(event) =>{
		
		setShowEdit(event)
		console.log(event,";;;;;;;;;;;;;;;;")
		setWname(event.Name)
		setWorkeraddress(event.Address)
		setWnmber(event.phone_number)
		setWorkermage(event.worker_Image)
		
	 }
	 const onSubmit = async ()=>{
		handleShowloading()
    
		// console.log(vimage,"++++++++++++++d+++++++++")
		// console.log(vname,"++++++++g+++++++++++++++")
		// console.log(rcname,"++++++++++++w+++++++++++")
		// console.log(vnumber,"+++++++++wwwwww++++++++++++++")
		console.log("hai")
		const formData = new FormData() 
		formData.append("Name", wname);
		formData.append("Address", workeraddress);
		formData.append("phone_number", wnumber);
		formData.append("worker_Image", workermage,"image.png");
		// formData.append("vehicleBook_image",datas.choose_image[0],"image.png")
	
		const data = await Axios.put(`dash/worker/${showEdit.id}`,formData,
						{
						headers: {
							"content-type":"multipart/form-data",
						},
						});
		console.log("0000")
		navigate("/dashworkers")
		fecthworker();
		handleCloseloading()
		handleCloseEdit();
		navigate("/dashworkers")
	
	
		// formData.append("vehicle_Name", vehicle_Name);
	
	  } 




	const handledelete = async () => {
		try {
			const delete_data = await Axios.delete(`dash/worker/${show}`);
			fecthworker();
			handleClose();
			navigate('/dashworkers');
		} catch (error) {
			console.log(error);
		}
	};

	const [ usersData, setuserData ] = useState([]);
	const fecthworker = async () => {
		const { data } = await Axios.get(`dash/worker`);

		setuserData(data);
	};

	useEffect(() => {
		fecthworker();
	}, []);

	
	

	return (
		<div>
			{' '}
			<div className="chart">
				<h3 className="chartTitle">Workers Table</h3>
			</div>
			<div style={{ marginLeft: '75%' }}>
				<Link to="/dashaddworker">
					<button className="btn btn-primary">Add Workers</button>
				</Link>
			</div>
			<Table className="tablehead  adminworkertable" striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Worker name</th>
						<th>Image</th>
						<td>phone_number</td>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{usersData &&
						usersData.map((data, index) => (
							<tr key={data.id}>
								<td>{index + 1}</td>
								<td>{data.Name}</td>
								<td>
									{' '}
									<img style={{ width: '50px', height: '50px' }} src={data.worker_Image} />
								</td>
								<td>{data.phone_number}</td>

								<td style={{ color: 'green' }}>
									<button className="btn btn-success bg-success"  onClick={()=>{Datas(data)}} >
										Edit
									</button>
								</td>
								<td>
									<Button variant="danger" onClick={() => setShow(data.id)}>
										Delete
									</Button>
								</td>
							</tr>
						))}

					

					{show && (
						<Modal show={show} onHide={handleClose}>
							<Modal.Header closeButton>
								<Modal.Title>Delete</Modal.Title>
							</Modal.Header>
							<Modal.Body>Do you want delete</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={handleClose}>
									Close
								</Button>
								<Button
									variant="danger"
									onClick={() => {
										handledelete();
									}}
								>
									Delete
								</Button>
							</Modal.Footer>
						</Modal>
					)}
				</tbody>



				{ showEdit && <Modal show={showEdit} onHide={handleCloseEdit}>
                              <Modal.Header closeButton>
                                <Modal.Title>Edit</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                              <Form>
                                      <Form.Group className="mb-3" controlId="formBasicEmail">
                                           <Form.Control type="text" placeholder="vehicle_Name" 
                                           defaultValue={wname}
                                           onChange={(e) =>setWname(e.target.value)}
                                           />
                                      </Form.Group>

                                      <Form.Group className="mb-3" controlId="formBasicEmail">
                                           <Form.Control type="text" placeholder="vehicle_RCowner" 
                                           defaultValue={workeraddress}
                                           onChange={(e) =>setWorkeraddress(e.target.value)}/>
                                      </Form.Group>

                                      
                                      <Form.Group className="mb-3" controlId="formBasicEmail">
                                           <Form.Control type="text" placeholder="vehicle_number"
                                           defaultValue={wnumber}
                                           onChange={(e) =>setWnmber(e.target.value)}/>
                                      </Form.Group>
                                      
                                      <Form.Group className="mb-3" controlId="formBasicEmail">
                                           <Form.Control type="file" placeholder="vehicleBook_image" 
                                          //  defaultValue={vimage}
                                           onChange={(e) =>setWorkermage(e.target.files[0])}/>
                                      </Form.Group>
                                      
                                      


                                      <Button variant="primary"  onClick={()=>onSubmit()}>
                                        Submit
                                      </Button>
                                    </Form>
                              </Modal.Body>
                              
                            </Modal>

}
{ showloading && <Alert show={showloading} />}
			</Table>

		</div>
	);
};

export default AdminWorkerlist;








