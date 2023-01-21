import React, { FC, ChangeEvent, FormEvent, useState, useEffect } from "react"
import { IValues } from "./Content"


interface IFormProps {
  values: IValues,
  setValues: React.Dispatch<React.SetStateAction<IValues>>,
  contactsInfo: IValues[],
  setContactsInfo: React.Dispatch<React.SetStateAction<IValues[]>>,
}
interface IMessage {
  successMsg?: string
  errorMsg?: string
}
const InputForm: FC<IFormProps> = (props) => {

  const { values, setValues, contactsInfo, setContactsInfo } = props

  const [message, setMessage] = useState<IMessage>({ successMsg: "", errorMsg: "" })


  //Check if Contact Name contains number 
  function containsNumbers(str: string): boolean {
    return /\d/.test(str);
  }


  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    setMessage({ successMsg: "", errorMsg: "" })
  }


  //Clear the Success message
  useEffect(()=>{
    if(message.successMsg){
      const timeout = setTimeout(() => setMessage({errorMsg:"",successMsg:""}), 4000);

      return () => {
        clearTimeout(timeout);
      };
    }
  },[message.successMsg])


  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (values.contactName === "" || values.contactNumber === "") {
      setMessage({ errorMsg: "All Inputs are required" })
      return
    }
    if (containsNumbers(values.contactName)) {
      setMessage({ errorMsg: "Contact Name Cannot Have Numbers" })
      return
    }

    setMessage({...message,successMsg:"Contact Added Successfully"})

    //Adding into array of objects
    setContactsInfo([
      ...contactsInfo,
      {
        id: Date.now(),
        contactName: values.contactName,
        contactNumber: values.contactNumber
      }
    ])
    //Reset values
    setValues({ id: 0, contactName: "", contactNumber: "" })
  }



  return (
    <div>
      <p className="errorMsg">
        {message.errorMsg}
      </p>
      {message.successMsg && <p className="successMsg">{message.successMsg}</p>}

      <section className="input-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Contact Name</label><br />
          <input type="text" name="contactName" id="contact-name" value={values.contactName} onChange={handleChange} /> <br />

          <label htmlFor="contact-number">Contact Number</label><br />
          <input type="number" name="contactNumber" id="contact-number" value={values.contactNumber} onChange={handleChange} /> <br />
          <div className="center-btn">
            <button type="submit" className="submit-btn">Add Contact</button>
          </div>
        </form>

      </section>
    </div>
  )
}

export default InputForm