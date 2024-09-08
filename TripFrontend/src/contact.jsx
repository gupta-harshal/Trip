import React from 'react'

const Contact = () => {
  return (
    <div className='desktop'>
      <div className="dashboard-wrapper">
        <div className="dashboard signup-dashboard">
          <Header/>
          <div className="contact-container">
            <form action="">
              
              <Inputfield
                name="contactus"
                type="textarea"
                label="Tell Us.."
              />
              <button className='containerS' >
                Send
              </button>
              

              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;