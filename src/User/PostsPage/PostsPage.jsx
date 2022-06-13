import './PostsPage.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import CardPost from '../../component/CardPost/CardPost';
import qs from 'qs'
import API from '../../api';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import ReactLoading from 'react-loading';
import notfound from '../../image/notfound.gif'

export default function PostsPage() {
  const [country, setCountry] = useState([]);
  const [region, setRegion] = useState([]);
  const [categorie, setCategorie] = useState([]);
  const [offer, setOffer] = useState([]);

  const selectCountry = (val) => {
    setCountry(val);
  }

  const selectRegion = async (val) => {
    setRegion(val)
    await API.get(`offers/city/${val}`)
      .then(res => {
        const result = res.data;
        setOffer(result);
        console.log(result)
      });
  }
  const getOffer = async () => {
    await API.get(`offers`)
      .then(res => {
        const result = res.data;
        setOffer(result);
      });
  }
  const getCategorie = async () => {

    await API.get(`categories`)
      .then(res => {
        const result = res.data;
        setCategorie(result);

      });
  }
  const getBlogByCategorie = async (categorieId) => {
    await API.get(`offers/Categorie/${categorieId}/${region}`)
      .then(res => {
        const result = res.data;
        setOffer(result);
      });
  }
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
    getCategorie();
    getOffer();
  }, [])
  return (
    <>

      {(!offer || offer == '') ? <div style={{ marginTop: "150px" }} > <center ><ReactLoading type="balls" color="blue" height={450} width={250} /></center> </div> : (offer && offer.message) ?


        <section id="team" class="team">

          <div class="container" data-aos="fade-up">

            <header class="section-header mt-5">
              <h2>Service Provider</h2>
              <p > Check these special offers</p>
            </header>

            <div class="row">
              <div class="col-lg-12 d-flex justify-content-center">
                <CountryDropdown
                  value={country}
                  onChange={(val) => selectCountry(val)} class="selectCategorie mr-3" style={{ maxWidth: "150px" }} />
                <RegionDropdown
                  country={country}
                  value={region}
                  onChange={(val) => selectRegion(val)} class="selectCategorie" style={{ maxWidth: "150px" }} />

              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li class="filter-active" onClick={() => getOffer()}>All</li>
                  {categorie.map((ca =>
                    <li onClick={() => getBlogByCategorie(ca._id)}>{ca.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div class=" notFoundimgC w3-animate-opacity">
              <img src={notfound} class="notFoundimg" />
            </div>
            <div class="row">
              <div class="notFound w3-animate-opacity">{offer.message}</div>
            </div>
          </div>
        </section>
        :

        <section id="portfolio" class="portfolio">
          <div class="container" data-aos="fade-up">

            <header class="section-header" style={{ marginTop: '40px' }}>
              <h2>Offers</h2>
              <p>Check these special offers</p>
            </header>
            <div class="row">
              <div class="col-lg-12 d-flex justify-content-center">

                <CountryDropdown
                  value={country}
                  onChange={(val) => selectCountry(val)} class="selectCategorie mr-3" style={{ maxWidth: "150px" }} />
                <RegionDropdown
                  country={country}
                  value={region}
                  onChange={(val) => selectRegion(val)} class="selectCategorie" style={{ maxWidth: "150px" }} />

              </div>
            </div>
            <div class="row">
              <div class="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li class="filter-active" onClick={() => getOffer()}>All</li>
                  
                  {categorie.map((ca =>
                    <li onClick={() => getBlogByCategorie(ca._id)}>{ca.name}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div class="row">
              {offer.map((offer =>
                <CardPost
                  id={offer._id}
                  title={offer.title}
                  description={offer.description}
                  date={offer.date}
                  image={offer.image}

                />
              ))}





            </div>
          </div>

        </section>
      }</>
  );
}