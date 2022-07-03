import React,{useState,useEffect} from 'react'
import { Table } from "react-bootstrap";
// import "../AdminWorkerlist.css"
import Axios from "../../../axios"


const Oderslist = () => {
    const [listData,setlistData] = useState([])

    const fecthOders = async ()=>{
        const {data} = await Axios.get(`payment/listoders`)
        setlistData(data)
        console.log(data)
        console.log("----------------")
    }
    useEffect(()=>{
        fecthOders();
    }, [])
  return (
    <div> <div className="chart">
        <h3 className="chartTitle">Order list</h3>
        
      </div>
          <div style={{marginLeft:"75%"}}>
           
          </div>
        <Table className='tablehead  adminworkertable  text-center' striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>product image</th>
                <th>product name</th>
                <td>price </td>
                <td>username </td>
                <td>Status </td>
                
            </tr>
            </thead>
            <tbody>
                
            {listData 
                && listData.map((data,index)=>(
                
                        <tr key={data.id}>
                            <td>{index+1}</td>
                            <td> <img
                                style={{ width: "50px", height: "50px" }}
                                src={data.productname.image }
                                /></td>
                                <td>{data.productname.name}</td>
                                <td>{data.productname.price}</td>
                            <td>
                                {data.user_id.username}
                            </td>
                            <td>{data.status}</td>
                           
                          

                    </tr>
                       

              
                ))
                }

                         

            
            </tbody>
            </Table>
            </div>
  )
}

export default Oderslist