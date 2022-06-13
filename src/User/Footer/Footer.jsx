import './Footer.css'
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom';
export default function Footer(){
    return(
        <footer id="footer" class="footer">

 

    <div class="footer-top">
      <div class="container">
        <div class="row gy-4">
          <div class="col-lg-5 col-md-12 footer-info">
            <Link href="index.html" class="logo d-flex align-items-center">
              <img src={logo} alt=""/>
              <span>Services</span>
            </Link>
            <p>The best website for the best services worldwide. We hope that we can help you and solve your problems. We are thankful for your honset feedback</p>
            <div class="social-links mt-3">
              <Link href="#" class="twitter"><i class="bi bi-twitter"></i></Link>
              <Link href="#" class="facebook"><i class="bi bi-facebook"></i></Link>
              <Link href="#" class="instagram"><i class="bi bi-instagram bx bxl-instagram"></i></Link>
              <Link href="#" class="linkedin"><i class="bi bi-linkedin bx bxl-linkedin"></i></Link>
            </div>
          </div>

          <div class="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bi bi-chevron-right"></i> <Link to="/home">Home</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to="/about">About us</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to="/offers">Offers</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to="/serviceprovider">Service Provider</Link></li>
              <li><i class="bi bi-chevron-right"></i> <Link to="/contact">Contact</Link></li>
            </ul>
          </div>

        

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>2021</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by Hilal Masri
      </div>
    </div>
  </footer>
    );
}