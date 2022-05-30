import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/bootstrap-5.1.3-dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";

import "./App.css";
import DashBoard from "./components/DashBoard";
import Header from "./components/contactManager/Header";
import Login from "./components/Login";
import AddContact from "./components/contactManager/AddContact";
import ContactList from "./components/contactManager/ContactList";

// const routes= (
//   <Router>
//     <Routes>
//       <Route path='/' component={Login} >
//       <Route path='/welcome' element={<Home/>} />
//       </Route>
//     </Routes>
//   </Router>
// )
function App1() {
  const LOCAL_STORAGE_KEY = "contacts";
  
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    console.log('usewffect 2')
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
 if(retriveContacts) setContacts(retriveContacts)

  }, []);

  useEffect(() => {
    console.log('usewffect 1')
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  // const contact = [{
  //   id:"1",
  //   name: "madhu",
  //   email:"kvmadhu1112@gmail.com"
  // },
  // {
  //   id:"2",
  //   name: "manu",
  //   email:"kvmadhu1112@gmail.com"
  // },{
  //   id:"3",
  //   name: "kcv",
  //   email:"kvmadhu1112@gmail.com"
  // }]

  return (
    <div className="ui container">
      <Header />

      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />

      {/* <Routes>
      
      <Route path='/' element={<Login />} />
      
    </Routes> */}
    </div>
  );
}

export default App1;
