import ContactItems from './ContactItems'

function ContactList({contacts, deleteHandler}) {
  return (
    <div>
      <div>
        {contacts.length === 0 ? <h3>No Contact Added!</h3> : <h3>Contact List :</h3>}
      </div>
        <ul>
          {contacts.map((contact)=>(
           <ContactItems data={contact} deleteHandler = {deleteHandler}/>
          ))}
        </ul>
    </div>
  )
}

export default ContactList
