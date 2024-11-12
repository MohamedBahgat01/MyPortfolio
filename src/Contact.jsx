import React from 'react'

const Contact = () => {
  return (
    <>
    <section class="contact" id="contact">

        <h2 class="heading">Contact <span>Me</span></h2>

        <form action="#">

            <div class="input-box">
                <input type="text" placeholder="Full Name"/>
                <input type="Email" placeholder="Email"/>
            </div>

            <div class="input-box">
                <input type="number" placeholder="Phone Number"/>
                <input type="text" placeholder="subject"/>
            </div>

        
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <input type="submit" value="Send Message" class="btn"/>
        </form>
    </section>
    </>
  )
}

export default Contact
