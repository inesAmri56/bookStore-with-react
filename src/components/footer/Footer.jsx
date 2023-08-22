import './footer.css';
const Footer = () => {
    return ( <footer className="footer">
        <div className="footer-social-media">
            <div className="footer-social-media-text"> Follow us on social media</div>
        <div className="footer-social-media-icons">
            <div className="footer-social-media-icon">
                <i style={{color:'#2980b9'}} className=" bi bi-facebook"></i>
            </div>
            <div className="footer-social-media-icon">
                <i style={{color:'red'}} className=" bi bi-instagram"></i>
            </div>
            <div className="footer-social-media-icon">
                <i style={{color:'red'}} className=" bi bi-youtube"></i>
            </div>
            <div className="footer-social-media-icon">
                <i style={{color:'skyblue'}} className=" bi bi-twitter"></i>
            </div>
        </div>
        </div>
    <div className="footer-links-wrapper">
        <div className="footer-links-item">
            <h3 className="footer-links-item-title"> useful Links</h3>
        <ul className="footer-links">
            <li className="footer-links"> Home</li>
            <li className="footer-links">Authors</li>
            <li className="footer-links">About Us</li>
            <li className="footer-links"> Contact Us</li>
            <li className="footer-links"> Register</li>
        </ul>
        </div>

       
        <div className="footer-links-item">
            <h3 className="footer-links-item-title"> Contact Information</h3>
       <div className="footer-address-wrapper">
        <div className="footer-address-item">
            <i className="bi bi-geo-alt-fill"></i>
            Sfax ,Tunis
        </div>
        <div className="footer-address-item">
            <i className="bi bi-telephone-fill"></i>
          +216 *********
        </div>
        <div className="footer-address-item">
            <i className="bi bi-envelope-fill"></i>
           inesamri56@gmail.com
        </div>
       </div>
        </div>
        <div className="footer-links-item">
            <h3 className="footer-links-item-title"> About Us</h3>
            <p className="footer-description">
                Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Et quis quos deleniti eos vo
                luptates sit optio suscipit illum iusto! Ipsa 
                necessitatibus possimus explicabo iusto 
                quis temporibus 
                minus similique officiis saepe?
                Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Animi, eveniet suscipit 
                 corrupti obcaecati delectus ea neque debitis, 
                 at id distinctio, deleniti soluta consequatur eligendi repellendus aliquam temporibus 
                nobis quasi explicabo.
            </p>
        
        </div>
    </div>
    </footer> );
}
 
export default Footer;