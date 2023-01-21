import React,{FC} from 'react'

interface ICard {
  contactId:number
  deleteUser: (id: number) => void
  contactName: string
  contactNumber: string
  avartarName:string
}
const Card :FC <ICard> = ({contactId,contactName,deleteUser,contactNumber,avartarName}):JSX.Element => {


  
  return (
    <section className='card'>
      <div className='card-header'>
        <div className='card-header-avatar'>
         <span className='card-header-avatar-name' title='Avatar Name'>{avartarName}</span> 
        </div>
        <div>
        <div className='card-deleteBtn' title='Delete Contact' 
        onClick={()=> deleteUser(contactId)}>X</div>
        </div>
      </div>

        
        <div className='card-info'>
        <p> <span>Name: </span>  {contactName}</p>
        <p> <span>Ph No: </span>  {contactNumber}</p>
        </div>
        
    </section>
  )
}

export default Card