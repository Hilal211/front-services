import './ServiceProviderPage1.css'
import { useState, useEffect } from 'react';
import axios from "axios";
import qs from 'qs'
import API from '../../api';
import CartServiceProvider from '../../component/CartServiceProvider/CartServiceProvider';
import ReactLoading from 'react-loading';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import notfound from '../../image/notfound.gif'
export default function ServiceProviderPage() {
  const [country, setCountry] = useState([]);
  const [countryS, setCountryS] = useState("");
  const [city, setCity] = useState([]);
  const [cityS, setCityS] = useState("");
  const [sp, setSp] = useState("");
  const [categorie, setCategorie] = useState([]);
  const [region, setRegion] = useState([]);

  const selectCountry = (val)=> {
    setCountry(val);
  }

   const selectRegion =async(val)=> {
    setRegion(val)
    await API.get(`users/bycity/${val}`)
      .then(res => {
        const result = res.data;
        setSp(result);
        console.log("r",result)
      });
  }

  const getBlogByCategorie = async (categorieId) => {
    await API.get(`users/getbycategorie/${categorieId}/${region}`)
      .then(res => {
        const result = res.data;
        setSp(result);
        console.log(result)
      });
  }
  const getSpByCity = async (city) => {
    setCityS(city);
    await API.get(`users/bycity/${region}`)
      .then(res => {
        const result = res.data;
        setSp(result);
        console.log("resultbucity", result)
      });
  }

  const getSp = async () => {
    await API.get(`users`)
      .then(res => {
        const result = res.data;
        setSp(result);
      });
  }


  const getcountry = async () => {
    await axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        const result = res.data;

        setCountry(result);
      });
  }
  

  const getCategorie = async () => {

    await API.get(`categories`)
      .then(res => {
        const result = res.data;
        setCategorie(result);

      });
  }
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
    getSp();
    getCategorie();
  }, [countryS])


  return (
    <>
      {(!sp || sp == '') ? <div style={{ marginTop: "150px" }} > <center ><ReactLoading type="balls" color="blue" height={450} width={250} /></center> </div> : (sp && sp.message) ?


        <section id="team" class="team">

          <div class="container" data-aos="fade-up">

            <header class="section-header mt-5">
              <h2>Service Provider</h2>
              <p >Check amazing service provider</p>
            </header>

            <div class="row">
              <div class="col-lg-12 d-flex justify-content-center">
              <CountryDropdown
                value={country}
                onChange={(val) => selectCountry(val)} class="selectCategorie mr-3" style={{ maxWidth: "150px" }}/>
              <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => selectRegion(val)} class="selectCategorie" style={{ maxWidth: "150px" }}/>

              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li class="filter-active" onClick={() => getSp()}>All</li>
                  {categorie.map((ca =>
                    <li onClick={() => getBlogByCategorie(ca._id)}>{ca.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div class=" notFoundimgC w3-animate-opacity">
              <img src={notfound} class="notFoundimg"/>
            </div>
            <div class="row">
              <div class="notFound w3-animate-opacity">{sp.message}</div>
            </div>
          </div>
        </section>
        :
        <section id="team" class="team">

          <div class="container" data-aos="fade-up">

            <header class="section-header mt-5">
              <h2>Service Provider</h2>
              <p >Check amazing service provider</p>
            </header>

            <div class="row">
              <div class="col-lg-12 d-flex justify-content-center">
              <CountryDropdown
                value={country}
                onChange={(val) => selectCountry(val)} class="selectCategorie mr-3" style={{ maxWidth: "150px" }}/>
              <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => selectRegion(val)} class="selectCategorie" style={{ maxWidth: "150px" }}/>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li class="filter-active" onClick={() => getSp()}>All</li>
                  {categorie.map((ca =>
                    <li onClick={() => getBlogByCategorie(ca._id)}>{ca.name}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div class="row gy-4">
              {sp.map((p =>
                <CartServiceProvider
                  id={p._id}
                  userName={p.userName}
                  magor={p.magor}
                  description={p.description}
                  instagram={p.instagram}
                  facebook={p.facebook}
                  whatsapp={p.whatsapp}
                  phoneNumber={p.phoneNumber}
                />
              ))}


            </div>

          </div>

        </section>
      }
    </>)

}