//import React from 'react'
/*import { useRef } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const sectionStyle = {
        textAlign: 'left',
      };
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_y2sf8lg', 'template_iy4rrpa', form.current, 'VOhPRiAlH8OjVXYyc')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };
  return (
   <section style={sectionStyle }>
     <div className="container">
        <h2>contact us</h2>
        <form ref={form}   onSubmit={sendEmail}>
            <input type="text" 
            placeholder='full name'
            name='user_name'
            required
            style={{ width: '50%' }}
            />

          <input type="email" 
            placeholder='email'
            name='user_email'
            required
            style={{ width: '50%' }}
            />
           
           <input type="text" 
            placeholder='subject'
            name='subject'
            required
            style={{ width: '50%' }}
            />

            <textarea name="message" placeholder="message"  cols="30" rows="10"></textarea>

          <div>
          <button type="submit">send message</button>
            </div>  
            
            <img src="https://www.businessmagazine.org/wp-content/uploads/2021/12/gerenciar-emails.jpg" />
        </form>
     </div>

   </section>
  )
}

export default Contact */  

// import React from 'react'
import { useRef } from "react"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const sectionStyle = {
        textAlign: 'left',
      };
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_y2sf8lg', 'template_iy4rrpa', form.current, 'VOhPRiAlH8OjVXYyc')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

    return (
        <section style={sectionStyle}>
            <div className="container">
                <h2>contact us</h2>
                <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ width: '48%' }}>
                        <input
                            type="text"
                            placeholder='full name'
                            name='user_name'
                            required
                            style={{ width: '100%' }}
                        />

                        <input
                            type="email"
                            placeholder='email'
                            name='user_email'
                            required
                            style={{ width: '100%' }}
                        />

                        <input
                            type="text"
                            placeholder='subject'
                            name='subject'
                            required
                            style={{ width: '100%' }}
                        />

                        <textarea name="message" placeholder="message" cols="30" rows="10" style={{ width: '100%' }}></textarea>

                        <div>
                            <button type="submit">send message</button>
                        </div>
                    </div>

                    <div style={{ width: '48%' }}>
                        <img src="https://preview.colorlib.com/theme/bootstrap/contact-form-16/images/undraw-contact.svg" alt="email" style={{ width: '90%' }} />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
