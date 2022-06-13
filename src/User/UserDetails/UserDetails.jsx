import './UserDetails.css'
import profile from '../../image/unnamed.png'
import API from '../../api';
import wp from '../../image/whatsapp.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import ReactLoading from 'react-loading';

export default function UserDetails(props) {
    const [detail, setDetail] = useState([]);
    const [rate, setRate] = useState([]);
    // const [total, setTotal] = useState(0);
    const [stat, setStat] = useState([])



    // const getNumber = () => {

    // }
    const colors = {
        orange: "#FBC014",
        grey: "#a9a9a9"

    };

    const stars = Array(5).fill(0)


    const getDetails = async (id) => {
        await API.get(`users/${id}`)
            .then(res => {
                const result = res.data;
                setDetail(result);
            });
    }

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
        });

        getDetails(props.match.params.id)
        async function fetchData() {
            var s5 = 0, s4 = 0, s3 = 0, s2 = 0, s1 = 0, st5 = 0, st4 = 0, st3 = 0, st2 = 0, st1 = 0;
            try {
                await API.get(`/rating/getbysp/${props.match.params.id}`)
                    .then(res => {
                        const result = res.data;
                        setRate(result);
                        // setTotal(result.length);
                        const total = result.length;
                        for (let i = 0; i < result.length; i++) {
                            if (result[i].rate == 5) {
                                s5++;
                            } else if (result[i].rate == 4) {
                                s4++;
                            } else if (result[i].rate == 3) {
                                s3++;
                            } else if (result[i].rate == 2) {
                                s2++;
                            } else if (result[i].rate == 1) {
                                s1++;
                            }
                        }
                        st5 = Math.ceil((s5 * 100) / total)
                        st4 = Math.ceil((s4 * 100) / total)
                        st3 = Math.ceil((s3 * 100) / total)
                        st2 = Math.ceil((s2 * 100) / total)
                        st1 = Math.ceil((s1 * 100) / total)
                        let st = [st5, st4, st3, st2, st1];
                        console.log(st)
                        setStat(st);

                    })

            } catch (error) {
                console.log("BIG Error : ", error);
            }
        }
        fetchData()
    }, [])
    return (
        <>
            {(!detail || detail == '') ? <div style={{ marginTop: "150px" }} > <center ><ReactLoading type="balls" color="blue" height={450} width={250} /></center> </div> :

                <div className="container" style={{ marginTop: '130px' }}>
                    <div className="main-body">
                        <div className="row gutters-sm ">
                            <div className="col-md-4 mb-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src={profile} alt="Admin" className="rounded-circle" width={150} />
                                            <div className="mt-3">
                                                <h4>{detail.userName}</h4>
                                                <p className="text-secondary mb-1">{detail.magor}</p>
                                                <Link to={`/rating/${props.match.params.id}`} className="btn btn-outline-primary">Add rate</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-3">
                                    <ul className="list-group list-group-flush">

                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><img src={wp} width="25px" height="25px" style={{ marginRight: "7px" }} />Whatsapp</h6>
                                            <a href={`https://api.whatsapp.com/send/?phone=${detail.phoneNumber}`} target="_blank">{detail.phoneNumber}</a>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>Instagram</h6>
                                            <a href={detail.instagram} target="_blank">Link</a>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                            <h6 className="mb-0"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>Facebook</h6>
                                            <a href={detail.facebook} target="_blank">Link</a>
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
                                                {detail.userName}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Email</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {detail.email}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Categorie</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                {detail.categorie}
                                            </div>
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
                                            <div className="col-sm-9 text-secondary">
                                                {detail.country}, {detail.city}
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
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: stat[0] + '%' }} />
                                                </div>
                                                <small><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></small>
                                                <div className="progress mb-3" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: stat[1] + '%' }} />
                                                </div>
                                                <small><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></small>
                                                <div className="progress mb-3" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: stat[2] + '%' }} />
                                                </div>
                                                <small><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></small>
                                                <div className="progress mb-3" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: stat[3] + '%' }} />
                                                </div>
                                                <small><i class="bi bi-star-fill"></i></small>
                                                <div className="progress mb-3" style={{ height: '5px' }}>
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: stat[4] + '%' }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <div className="card h-100 container">
                                            <h1>description</h1>
                                            <p>{detail.description}</p>
                                        </div>
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
            }</>

    );
}