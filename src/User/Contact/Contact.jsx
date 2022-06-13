import './Contact.css'
import { useEffect } from 'react';
export default function Contact(){
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [])
    return(
        <section id="contact" class="contact mt-5">

        <div class="container" data-aos="fade-up">
  
          <header class="section-header">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </header>
  
          <div class="row gy-4">
  
            <div class="col-lg-6">
  
              <div class="row gy-4">
                    {/* <div class="col-md-6">
                    <div class="info-box">
                        <i class="bi bi-geo-alt"></i>
                        <h3>Address</h3>
                        <p>A108 Adam Street,<br/>New York, NY 535022</p>
                    </div>
                    </div> */}
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>+961 71321 789<br/>+961 81789 321</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>weservice@gmail.com<br/>contact@gmail.com</p>
                  </div>
                </div>
                {/* <div class="col-md-6">
                  <div class="info-box">
                    <i class="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>Monday - Friday<br/>9:00AM - 05:00PM</p>
                  </div>
                </div> */}
              </div>
  
            </div>
  
            <div class="col-lg-6">
              <form action="forms/contact.php" method="post" class="php-email-form">
                <div class="row gy-4">
  
                  <div class="col-md-6">
                    < input autoComplete="off" type="text" name="name" class="form-control" placeholder="Your Name" required/>
                  </div>
  
                  <div class="col-md-6 ">
                    < input autoComplete="off" type="email" class="form-control" name="email" placeholder="Your Email" required/>
                  </div>
  
                  <div class="col-md-12">
                    < input autoComplete="off" type="text" class="form-control" name="subject" placeholder="Subject" required/>
                  </div>
  
                  <div class="col-md-12">
                    <textarea class="form-control" name="message" rows="6" placeholder="Message" style={{marginBottom:"15px"}} required></textarea>
                  </div>
  
                  <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
  
                    <button type="submit">Send Message</button>
                  </div>
  
                </div>
              </form>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
}