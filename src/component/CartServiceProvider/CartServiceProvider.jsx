import { Link } from 'react-router-dom';
import img from "../../image/unnamed.png"

export default function CartServiceProvider(props){
    return(
        <div class="col-lg-3 col-md-6 d-flex align-items-stretch mb-4 w3-animate-zoom">
              <div class="member">
                <div class="member-img">
                  <img src={img} class="img-fluid" alt="" />
                  <div class="social">
                    <a href={`https://api.whatsapp.com/send/?phone=${props.phoneNumber}`}><i class="bi bi-whatsapp"></i></a>
                    <a href={props.facebook} target="_blank"><i class="bi bi-facebook"></i></a>
                    <a href={props.instagram} target="_blank"><i class="bi bi-instagram"></i></a>
                  </div>
                </div>
                <Link to={`/serviceproviderdetails/${props.id}`} class="member-info">
                  <h4 class="nameSp">{props.userName}</h4>
                  <span>{props.magor}</span>
                  <p>{props.description}</p>
                </Link>
              </div>
            </div>
    );
}