import React from 'react'
import Content from './Components/Contents/Content'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

const App = () => {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Content/>
        <Footer />
      </div>
      
    </React.Fragment>
  )
}

export default App