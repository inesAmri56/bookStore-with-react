import "./contact.css"
const Contact = () => {
    return ( <section className="contact">
    <div className="contact-wrapper">
<div className="contact-item">
    <div className="contact-item-icon">
        <i className="bi bi-house-fill"></i>
            Address
        
    </div>
    <p className="contact-item-text"> Sfax,tunisia</p>
</div>
<div className="contact-item">
    <div className="contact-item-icon">
        <i className="bi bi-telephone-fill"></i>
        Phone
        
    </div>
    <p className="contact-item-text"> +216 55 *** ***</p>
</div>
<div className="contact-item">
    <div className="contact-item-icon">
        <i className="bi envelope-fill"></i>
            Address
        
    </div>
    <p className="contact-item-text"> inesamri56@gmail.com</p>
</div>
    </div>
    {/* mnhbch ysir reload ll page wa9t naaml send */}
    <form onSubmit={e=>e.preventDefault} action="" className="contact-form">
        <h2 className="contact-form-title">
            Contact Us Form
        </h2>
        <div className="contact-input-wrapper">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder=" Subject" />
            <input type="text" placeholder=" Email" />
        </div>
        <textarea  className="contact-textarea" rows="5" placeholder="  your message"></textarea>
        <button className="contact-btn">
            Send
        </button>
    </form>
    </section>
     );
}
 
export default Contact;