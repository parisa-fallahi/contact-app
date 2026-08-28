import { useState } from 'react'
import ContactList from './ContactList'
import styles from "./Contacts.module.css"

function Contacts() {
    const [contacts,setContacts] = useState([]);
    const [contact,setContact] = useState({
        id:'',
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:''
    })
    const [alert,setAlert] = useState("")
   const inputChangeHandler = (event) =>{
    const _name = event.target.name;
    const _value = event.target.value
    setContact((contact)=>({...contact,[_name]:_value}))
   }


   const addHandler = () => {
    if(!contact.firstName || !contact.lastName || !contact.email || !contact.phoneNumber){
      setAlert("Please fill the form");
      return
    }
    setAlert("");
    
    const newContact = {...contact, id:Math.floor(Math.random()*100)}
    setContacts((item)=> [...item,newContact]);
    setContact({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:''
    })
        
   }

  const deleteHandler = id =>{
    const newList = contacts.filter((contact)=> contact.id !== id);
    setContacts(newList)
   }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>

        <input type='text' placeholder='First Name' name='firstName' value={contact.firstName}  onChange={inputChangeHandler} />
        <input type='text' placeholder='Last Name' name='lastName' value={contact.lastName} onChange={inputChangeHandler}/>
        <input type='email' placeholder='Email' name='email' value={contact.email} onChange={inputChangeHandler} />
        <input type='number' placeholder='Phone Number' name='phoneNumber' value={contact.phoneNumber} onChange={inputChangeHandler}/>
        <button onClick={addHandler}>Add Contact</button>
        </div>
       
       {
        alert && (
           <div className={styles.alert}>
          <p >{alert}</p>
        </div>
        )
       }
       

        
        <ContactList contacts = {contacts} deleteHandler = {deleteHandler}/>
      </div>
    </>
  )
}

export default Contacts
