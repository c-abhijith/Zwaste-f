import React from 'react'
import { Modal } from 'react-bootstrap'
import giff from "./giff.gif"

const Alert = (props) => {
  return (
    <div style={{width: "72px"}} >
       {props && <Modal show={props} style={{paddingTop:"20%",width:"100px",marginLeft:"46%"}}>
            <img src={giff} alt="sjkhj" />
           </Modal>}
    </div>
  )
}

export default Alert