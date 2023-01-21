import React, {FC, useState } from 'react'
import DisplayUsers from './DisplayUsers'
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
      <DisplayUsers contactsInfo ={contactsInfo} setContactsInfo={setContactsInfo} />
    </section>
  )
}

export default Content