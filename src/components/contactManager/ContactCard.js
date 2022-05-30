import { faRoad } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";

import ContactList from "./ContactList";
import contact from "../images/contact.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="row p-1">
        <div className="card card-text font-weight-normal col-md-6 d-flex flex-row align-items-center justify-content-between">
            <div>
            <img style={{width:"30%"}} src={contact} alt="user" className="img-thumbnail"></img>
            </div>
            
            
            <div>
                <div>
                    <strong>Name: {name}</strong>
                </div>          
                <div>
                    Email: {email}
                </div>
            </div>

            <div>
                <FaTrashAlt style={{ color: "red", marginTop: "10px" }} />
            </div>     
      

      </div>
    </div>
  );
};
export default ContactCard;
