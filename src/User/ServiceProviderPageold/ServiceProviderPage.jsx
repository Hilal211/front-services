import './ServiceProviderPage.css'
import { useState, useEffect } from 'react';
import axios from "axios";
import API from '../../api';

export default function ServiceProviderPage(){
    const [country, setCountry] = useState([]);
    const [countryS, setCountryS] = useState("");
    const [city, setCity] = useState([]);
    const [cityS, setCityS] = useState("");
    const [categorie, setCategorie] = useState([]);
    const [sp, setSp] = useState([]);
  
    const getSp = async () => {
        await API.get(`offers`)
          .then(res => {
            const result = res.data;
            setSp(result);
          });
      }

      useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
          });
        getSp();
      }, [])
    return(
<div class="content">
    <div class="container">
        
        <div class="row" style={{marginTop:"70px"}}>
            {sp.map((p=>
            <div class="col-lg-4">
                <div class="text-center card-box">
                    <div class="member-card pt-2 pb-2">
                        <div class="thumb-lg member-thumb mx-auto"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle img-thumbnail" alt="profile-image"/></div>
                        <div class="">
                            <h4>Freddie J. Plourde</h4>
                            <p class="text-muted">@Founder <span>| </span><span><a href="#" class="text-pink">websitename.com</a></span></p>
                        </div>
                        <ul class="social-links list-inline">
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a></li>
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a></li>
                            <li class="list-inline-item"><a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Skype"><i class="fa fa-skype"></i></a></li>
                        </ul>
                        <button type="button" class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Message Now</button>
                        <div class="mt-4">
                            <div class="row">
                                <div class="col-4">
                                    <div class="mt-3">
                                        <h4>2563</h4>
                                        <p class="mb-0 text-muted">Wallets Balance</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="mt-3">
                                        <h4>6952</h4>
                                        <p class="mb-0 text-muted">Income amounts</p>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="mt-3">
                                        <h4>1125</h4>
                                        <p class="mb-0 text-muted">Total Transactions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
</div>
    );
}