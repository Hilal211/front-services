import './OfferPage.css';
import { Link } from 'react-router-dom';
import API from '../../api';
import { useState, useEffect } from 'react';
import CardPostSp from '../../component/CardPostSp/CardPostSp';
import swal from 'sweetalert'
import ReactLoading from 'react-loading';
import notfound from '../../image/notfound.gif'
import LoginStatus from '../../LoginStatus';
import { getCookie } from '../../cookies';
export default function OfferPage() {
    const id=getCookie('id')
    const [offer, setOffer] = useState([]);

    const getOffer = async (id) => {

        await API.get(`offers/getbysp/${id}`)
            .then(res => {
                const result = res.data;
                setOffer(result);
            });
    }

    const deleteOffer = async (id) => {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete this file?",
            icon: "warning",
            dangerMode: true,
        });

        if (willDelete) {
            try {
                let res = await API.delete(`offers/${id}`);
                const result = res.data.message;
                if (res.data.success) {
                    await swal("Deleted", result, "success");

                } else {
                    await swal("", result, "error");
                }

                let filter = [...offer].filter((offer) => offer._id !== id);
                setOffer(filter);

            } catch (e) {
                console.log(e);
            }
        }
    };


    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
          });
        getOffer(id);

    }, [])

    return (
        <>
        <LoginStatus/>
            {(!offer || offer == '') ? <div style={{ marginTop: "150px" }} > <center ><ReactLoading type="balls" color="blue" height={450} width={250} /></center> </div> : (offer && offer.message) ?

                <section id="services" class="services">

                    <div class="container" data-aos="fade-up">

                        <header class="section-header">
                            <h2>Offers</h2>
                            <p>Check Your Offers</p>
                        </header>

                        <div class="row">
                            <div class="col-lg-12 d-flex justify-content-center">
                                <Link to="addoffer"><button class="btnCreate"><i class="bi bi-plus-circle-fill"></i>Create</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class=" notFoundimgC w3-animate-opacity">
                        <img src={notfound} class="notFoundimg" />
                    </div>
                    <div class="row">

                        <div class="notFound w3-animate-opacity">{offer.message}</div>
                    </div>
                </section>
                :
                <section id="services" class="services">

                    <div class="container" data-aos="fade-up">

                        <header class="section-header">
                            <h2>Offers</h2>
                            <p>Check Your Offers</p>
                        </header>

                        <div class="row">
                            <div class="col-lg-12 d-flex justify-content-center">
                                <Link to="addoffer"><button class="btnCreate"><i class="bi bi-plus-circle-fill"></i>Create</button></Link>
                            </div>
                        </div>

                        <div class="row gy-4">
                            {offer.map((p) => (
                                <CardPostSp
                                    id={p._id}
                                    title={p.title}
                                    description={p.description}
                                    delete={deleteOffer}
                                    image={p.image}
                                />
                            ))}

                        </div>
                    </div>
                </section>
            }
        </>
    );
}