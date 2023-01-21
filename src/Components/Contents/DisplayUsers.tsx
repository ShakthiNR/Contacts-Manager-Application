
import React,{FC} from 'react'
import Card from './Card'
import { IValues } from './Content'


interface IDisplayUsersProps {
  contactsInfo : IValues[]
  setContactsInfo:React.Dispatch<React.SetStateAction<IValues[]>>
}


const DisplayUsers:FC <IDisplayUsersProps> = ({contactsInfo,setContactsInfo}) => {


  const deleteUser = (id:number):void => {
     if( window.confirm('Are you sure you want to delete this contact?'))
     {
       const filteredContacts: IValues[] = contactsInfo.filter((e:IValues) => e.id !== id)
       setContactsInfo(filteredContacts)
     }
     return
    }
  
  return (<div className='contacts'>

    <h3 style={{textAlign:"center"}}>List Of Contacts</h3>


    <article className='contacts-center'>

      {contactsInfo.length === 0 && <h4 className='contacts-msg'>Contact List is Empty</h4>}

      {
        contactsInfo.length > 0 && contactsInfo.map((e:IValues,i:number):JSX.Element=> {
          const {contactName,contactNumber,id} = e;
          const avartarName:string = contactName[0].toUpperCase()
          return(
            <Card contactId={id} 
            key={i}
            deleteUser={deleteUser}
            contactName={contactName} 
            contactNumber={contactNumber} 
            avartarName={avartarName}
            />
          )
        })
      }
      
         

     
     
    </article>


</div>
  )
}

export default DisplayUsers