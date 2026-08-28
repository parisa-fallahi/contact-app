import styles from './ContactItem.module.css'

function ContactItems({data, deleteHandler}) {
  return (
         <li key={data.id} className={styles.item}>
              <p>{data.firstName} {data.lastName}</p>
              <p><span>📧</span> {data.email}</p>
              <p><span>📞</span> {data.phoneNumber}</p>
              <button onClick={()=>deleteHandler(data.id)}>🗑️</button>
         </li>
  )
}

export default ContactItems
