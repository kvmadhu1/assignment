import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
  console.log(props);
  const rendercontactList = props.contacts.map((contact) => {
    return (
     <div>
       <ContactCard contact={contact} />
     </div>
    );
  });

  return <div>{rendercontactList}</div>;
};
export default ContactList;
