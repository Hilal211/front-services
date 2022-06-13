import profile from '../../image/unnamed.png'
import API from '../../api';
import wp from '../../image/whatsapp.png'
import { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import LoginStatus from '../../LoginStatus';
import { getCookie } from '../../cookies';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

export default function ProfileSp(props) {
    const id = getCookie('id')
    // let id = "6147714abc2ab51ca300a441";
    const [detail, setDetail] = useState([]);
    const [rate, setRate] = useState([]);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [instagram, setInstagram] = useState("");
    const [facebook, setFacebook] = useState("");
    const [description, setDescription] = useState("");
    const [magor, setMagor] = useState("");
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [categorie, setCategorie] = useState([]);
    const [categorieS, setCategorieS] = useState("");

    const [countryS, setCountryS] = useState("");
    const [regionS, setRegionS] = useState("");

    const colors = {
        orange: "#FBC014",
        grey: "#a9a9a9"

    };

    const stars = Array(5).fill(0)
    const getCategorie = async () => {

        await API.get(`categories`)
            .then(res => {
                const result = res.data;
                setCategorie(result);

            });
    }
    const getRate = async (id) => {
        await API.get(`/rating/getbysp/${id}`)
            .then(res => {
                const result = res.data;
                setRate(result);
            });
    }
    const getDetails = async (id) => {
        await API.get(`users/${id}`)
            .then(res => {
                const result = res.data;
                setDetail(result);
                setCountry(result.country)
                setRegion(result.city)
                setCategorieS(result.categorie)
            });
    }

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
        });
        getDetails(id)
        getRate(id)
        getCategorie();
    }, [])
    return (
        <>
            <LoginStatus />
            {(!detail || detail == '') ? <div style={{ marginTop: "150px" }} > <center ><ReactLoading type="balls" color="blue" height={450} width={250} /></center> </div> :

                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="main-body">
                        {/* Breadcrumb */}

                        {/* /Breadcrumb */}
                        <div className="row gutters-sm ">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src={profile} alt="Admin" className="rounded-circle" width={150} />
                                            <div className="mt-3">
                                                <h4>{detail.userName}</h4>
                                                <p className="text-secondary mb-1">{detail.magor}</p>
                                                <Link to={`/rating/${id}`} className="btn btn-outline-primary">Save</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-3">
                                    <ul className="list-group list-group-flush">

                                        <li className="list-group-item d-flex  align-items-center flex-wrap">
                                            <h6 className="mb-0"><img src={wp} width="25px" height="25px" style={{ marginRight: "7px" }} />Whatsapp</h6>
                                            < input autoComplete="off" type="text" name="title" placeholder="Title" class="ml-4 form-control px-0 "
                                                value={detail.phoneNumber}
                                                style={{ maxWidth: "180px" }}
                                            // onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>Instagram</h6>
                                            {/* <a href={detail.instagram} target="_blank">Link</a> */}
                                            < input autoComplete="off" type="text" name="title" placeholder="Title" class="ml-4 form-control px-0 "
                                                value={detail.instagram}
                                                style={{ maxWidth: "180px" }}
                                            // onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>Facebook</h6>
                                            {/* <a href={detail.facebook} target="_blank">Link</a> */}
                                            < input autoComplete="off" type="text" name="title" placeholder="Title" class="ml-4 form-control px-0 "
                                                value={detail.facebook}
                                                style={{ maxWidth: "180px" }}
                                            // onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">User Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {/* {detail.userName} */}
                                                < input autoComplete="off" type="text" name="title" placeholder="Title" class="ml-4 form-control px-0"
                                                    value={detail.userName}
                                                    style={{ maxWidth: "180px" }}
                                                // onChange={(e) => setTitle(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                < input autoComplete="off" type="text" name="title" placeholder="Title" class="ml-4 form-control px-0"
                                                    value={detail.email}
                                                    style={{ maxWidth: "180px" }}
                                                // onChange={(e) => setTitle(e.target.value)}
                                                />                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Categorie</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <select
                                                    className="selectCategorie"
                                                    onChange={e => setCategorieS(e.target.value)}
                                                >
                                                    <option value="">Categorie</option>

                                                    {categorie.map((lb) => {
                                                        return (
                                                            <option
                                                                selected={categorie}
                                                                value={lb.isoCode}
                                                                key={lb.name}
                                                            >{lb.name}
                                                            </option>
                                                        )
                                                    })}
                                                </select>                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Mobile</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {detail.phoneNumber}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Address</h6>
                                            </div>
                                            <div >
                                                <div class="col-lg-12 col-md-12 d-flex justify-content-center">
                                                    <CountryDropdown
                                                        value={country}
                                                        onChange={(val) => setCountry(val)} class="selectCategorie mr-3" style={{ maxWidth: "150px" }} />
                                                    <RegionDropdown
                                                        country={country}
                                                        value={region}
                                                        onChange={(val) => setRegion(val)} class="selectCategorie" style={{ maxWidth: "150px" }} />

                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        {/* <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                    </div>
                  </div> */}
                                    </div>
                                </div>
                                <div className="row gutters-sm">
                                    <div className="col-sm-6 mb-3">
                                        <div className="card h-100">
                                            <div className="card-body">
                                                <h6 className="d-flex align-items-center mb-3">Rating</h6>
                                                <small><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></small>
                                                <div className="progress mb-3" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '10%' }} />
                                                </div>
                                                <small><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></small>
                                                <div className="progress mb-3" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '72%' }} />
                                                </div>
                                                <small><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></small>
                                                <div className="progress mb-3" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }} />
                                                </div>
                                                <small><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></small>
                                                <div className="progress mb-3" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '55%' }} />
                                                </div>
                                                <small><i class="bi bi-star-fill"></i></small>
                                                <div className="progress mb-3" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '66%' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <div className="card h-100 container">
                                            <h1>description</h1>
                                            <textarea class="form-control px-0 mb-4"
                                                placeholder="Content" value={detail.description}
                                                // onChange={(e) => setContent(e.target.value)}
                                                required></textarea>                                        </div>
                                    </div>
                                </div>






                            </div>
                            <div class="container" data-aos="fade-up">
                                <header class="section-header">
                                    <h2>Testimonials</h2>
                                    <p>What they are saying about thier</p>
                                </header>

                                <div class="row" data-aos="fade-up" >

                                    {rate.map((p =>
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
                            </div>


                        </div>
                    </div>
                </div>

            }
        </>
    );
}