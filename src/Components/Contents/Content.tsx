import React, {FC, useState } from 'react'
import DisplayContacts from './DisplayContacts'
import InputForm from './InputForm'
import "./Content.css"

export interface IValues {
   id: number
  contactName: string
  contactNumber: string
}


const Content:FC = () => {
  const [values, setValues] = useState<IValues>({ id: 0, contactName: "", contactNumber: "" })
  const [contactsInfo, setContactsInfo] = useState<IValues[]>([])

  const inputFormProps = {
    values,
    setValues,
    contactsInfo, setContactsInfo
  }
 
  return (
    <section>
      <InputForm {...inputFormProps} />
      <DisplayContacts contactsInfo ={contactsInfo} setContactsInfo={setContactsInfo} />
    </section>
  )
}

export default Content