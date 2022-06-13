import blog from '../../image/blog-1.jpg';
import { Link } from 'react-router-dom';
import API from '../../api';
import './BlogDetails.css'
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

export default function BlogDetails(props) {
  const [detail, setDetail] = useState([]);
  const date = (detail.date) ? detail.date.substring(0, detail.date.indexOf('T')) : null
  const userName = (detail.serviceProvider) ? detail.serviceProvider.userName : null;
  const facebook = (detail.serviceProvider) ? detail.serviceProvider.facebook : null;
  const instagram = (detail.serviceProvider) ? detail.serviceProvider.instagram : null;
  const phoneNumber = (detail.serviceProvider) ? detail.serviceProvider.phoneNumber : null;
  const description = (detail.serviceProvider) ? detail.serviceProvider.description : null;
  const [categorie, setCategorie] = useState([]);
  const [offer, setOffer] = useState([]);
let id=props.match.params.id
  const getDetails = async (id) => {
    await API.get(`offers/details/${id}`)
      .then(res => {
        const result = res.data;
        setDetail(result);
        API.get(`offers/Categorie/${result.serviceProvider.categorie}/${result.serviceProvider.city}`)
      .then(res => {
        const result = res.data;
        setOffer(result);
      });
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
    getDetails(props.match.params.id)
    getCategorie();

  }, [id])

  return (
    <>
      {(!detail || detail == '') ? <div style={{ marginTop: "150px" }} > <center ><ReactLoading type="balls" color="blue" height={450} width={250} /></center> </div> :

        <section id="blog" class="blog" style={{ marginTop: "50px" }}>
          <div class="container" data-aos="fade-up">

            <div class="row">

              <div class="col-lg-8 entries">

                <article class="entry entry-single">

                  <div class="entry-img">
                    <img src={`http://localhost:3002/uploads/${detail.image}`} alt="" class="img-fluid" />
                  </div>

                  <h2 class="entry-title">
                    <a href="blog-single.html">{detail.title}</a>
                  </h2>

                  <div class="entry-meta">
                    <ul>
                      <li class="d-flex align-items-center"style={{textTransform:"capitalize"}}><i class="bi bi-person"></i> <Link to={`/serviceproviderdetails/${detail.serviceProvider._id}`}>{userName}</Link></li>
                      <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <a href=""><time>{date}</time></a></li>
                    </ul>
                  </div>

                  <div class="entry-content">
                 


                    <blockquote>
                      <p>
                      {detail.description}
                      </p>
                    </blockquote>

                    <p  style={{fontSize:"17px",lineHeight:"1.8"}}>
                      {detail.content}
                    </p>
                  </div>
                  <div>
                    <button class="btnwp"><a href={`https://api.whatsapp.com/send/?phone=${phoneNumber}`} target="_blank" class="link"><i class="bi bi-whatsapp"></i> Contact</a>
                    </button>
                  </div>
                </article>
                <div class="blog-author d-flex align-items-center">
                  <div>
                    <h4 style={{textTransform:"capitalize"}}>{userName}</h4>
                    <div class="social-links">
                      <a href={`https://api.whatsapp.com/send/?phone=${phoneNumber}`}><i class="bi bi-whatsapp"></i></a>
                      <a href={facebook} target="_blank"><i class="bi bi-facebook"></i></a>
                      <a href={instagram} target="_blank"><i class="biu bi-instagram"></i></a>
                    </div>
                    <p>
                      {description}
                    </p>
                  </div>
                </div>



              </div>

              <div class="col-lg-4">

                <div class="sidebar">



                  <h3 class="sidebar-title">Categories</h3>
                  <div class="sidebar-item categories">
                    <ul>
                      {categorie.map((p =>
                        <li><a href="#">{p.name} <span>></span></a></li>

                      ))}
                    </ul>
                  </div>

                  <h3 class="sidebar-title">Recent Offers</h3>
                  <div class="sidebar-item recent-posts">
                    {offer.slice(0, 5).filter((offer) => offer._id !== detail._id).map((p=>
                       <div class="post-item clearfix mb-4 w3-animate-bottom">
                       <img src={`http://localhost:3002/uploads/${p.image}`} alt="" />
                       <h4><Link to={`/offerdetail/${p._id}`}>{p.title}</Link></h4>
                       <time datetime="2020-01-01">{p.date.substring(0, p.date.indexOf('T'))}</time>
                     </div>
                      ))}
                   

                   

                  </div>



                </div>

              </div>

            </div>

          </div>
        </section>
      }
    </>
  );
}