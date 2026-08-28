import ContactItems from './ContactItems'
import styles from './ContactsList.module.css'

function ContactList({contacts, deleteHandler}) {
  return (
    <div className={styles.container}>
      <div >
        {contacts.length === 0 ? <p className={styles.message}>No Contact Added!</p> : <h3>Contact List :</h3>}
      </div>
        <ul className={styles.contacts}>
          {contacts.map((contact)=>(
           <ContactItems data={contact} deleteHandler = {deleteHandler}/>
          ))}
        </ul>
    </div>
  )
}

export default ContactList
