import "./Footer.css"
import React,{FC} from 'react';

type TFooter = () => JSX.Element

const Footer:TFooter = () => {
  return (
    <footer>
      An Amazing<span className="highlight"> React Typescript Application</span>  &copy; Shakthi NR
    </footer>
  )
}

export default Footer