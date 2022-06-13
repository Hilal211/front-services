import './HomePage.css'
import hero from '../../image/hero-img.png'
import about from '../../image/about.png'
import i1 from '../../image/Picture1.jpg'
import i2 from '../../image/Picture2.jpg'
import i3 from '../../image/Picture3.jpg'
import i4 from '../../image/Picture4.jpg'
import i5 from '../../image/Picture5.jpg'
import i6 from '../../image/Picture6.jpg'
import { Link } from 'react-router-dom'
import API from '../../api'
import { FaStar } from "react-icons/fa";

import { useEffect, useState } from 'react'
export default function HomePage() {

  const [rate, setRAte] = useState([]);
  const colors = {
    orange: "#FBC014",
    grey: "#a9a9a9"

  };

  const stars = Array(5).fill(0)

  const getRate = async () => {

    await API.get(`rating/getfiverate`)
      .then(res => {
        const result = res.data;
        setRAte(result);
      });
  }


  useEffect(() => {

    window.scroll({
      top: 0,
      left: 0,
    });
    getRate();
  }, [])
  const post = [
    {
      id: 1,
      image: i1,
      title: "Mobile Mechanisms",
      desc: "service for your car"
    },
    {
      id: 2,
      image: i2,
      title: "Cleaners",
      desc: "We clean, you rest"
    },
    {
      id: 3,
      image: i3,
      title: "Home Maintance",
      desc: "We fixe your ideas"
    },
    {
      id: 4,
      image: i4,
      title: "Barber",
      desc: "We take care of your hair"
    },
    {
      id: 5,
      image: i5,
      title: "Pets Care",
      desc: "We give your pets love"
    },
    {
      id: 6,
      image: i6,
      title: "Electronics",
      desc: "We fix your electronics"
    }
  ]
  return (
    <>
      <section id="hero" class="hero d-flex align-items-center">

        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">We offer modern solutions to solve your problems</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">We are the connecter between you and the best service provider</h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div class="text-center text-lg-start">
                  <a href="#about" class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span><Link class="link" to="/offers">Get Started</Link></span>
                    <i class="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={hero} class="img-fluid" alt="" />
            </div>
          </div>
        </div>

      </section>


      <section id="about" class="about">

        <div class="container" data-aos="fade-up">
          <div class="row gx-0">

            <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <div class="content">
                <h3>Who We Are</h3>
                <h2>Our aim is to deliver the best services for the best price.</h2>
                <p>
                  The service provider can add a post describing their sitution and needs. In the addition the vistor can check the review of any service provider.
                </p>
                <div class="text-center text-lg-start">
                  <Link to="/about" class="link btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>Read More</span>
                    <i class="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
              <img src={about} class="img-fluid" alt="" />
            </div>

          </div>
        </div>

      </section>


      <section id="portfolio" class="portfolio">

        <div class="container" data-aos="fade-up">

          <header class="section-header">
            <h2>categories</h2>
            <p>Check our categories</p>
          </header>




          <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

            {post.map((p) => (

              <div class="col-lg-4 col-md-6 portfolio-item filter-app mb-3">
                <div class="portfolio-wrap">
                  <img src={p.image} class="img-fluid" alt="" />
                  <div class="portfolio-info">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                    {/* <div class="portfolio-links">
                      <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="Read more"><i class="bi bi-eye"></i></a>
                      <a href="portfolio-details.html" title="contact"><i class="bi bi-whatsapp" ></i></a>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>



      <section id="testimonials" class="testimonials">

        <div class="container" data-aos="fade-up">

          <header class="section-header">
            <h2>Testimonials</h2>
            <p>What our vistors say</p>
          </header>

          <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">

            {rate.slice(0, 3).map((p =>
              <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 portfolio-item filter-app box" >

                <div class="testimonial-item" >
                  <div class="stars">

                    {stars.map((_, index) => {
                      return (
                        <FaStar
                          key={index}
                          size={24}
                          color={(p.rate) > index ? colors.orange : colors.grey}
                          style={{
                            marginRight: 10,
                          }}
                        />
                      )
                    })}

                  </div>
                  <p>
                    {p.description}
                  </p>
                  <div class="profile mt-auto">
                    <h3>{p.name}</h3>
                    <h4>{p.email}</h4>
                  </div>
                </div>
              </div>
            ))}


          </div>
          <div class="swiper-pagination"></div>
        </div>


      </section>






    </>
  );
}