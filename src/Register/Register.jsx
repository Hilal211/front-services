import img from '../image/features.png'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useState, useEffect } from 'react';
import API from '../api';

export default function Register() {
    const [country, setCountry] = useState([]);
    const [region, setRegion] = useState([]);
    const [categorie, setCategorie] = useState([]);

    const selectCountry = (val) => {
        setCountry(val);
    }

    const selectRegion = async (val) => {
        setRegion(val)
        await API.get(`offers/city/${val}`)
            .then(res => {
                const result = res.data;
                // setOffer(result);
                console.log(result)
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

        getCategorie();
    }, [])
    return (
        <section class="signup">
            <div class="containerl">
                <div class="signup-content">
                    <div class="signup-form">
                        <h2 class="titlel" class="form-title">Sign up</h2>
                        <form method="POST" class="register-form" id="register-form">
                            <div class="form-group">
                                <label class="labell" for="name"><i class="iconl bi bi-person-fill"></i></label>
                                < input autoComplete="off" class="inputl" type="text" name="name" id="name" placeholder="UserName" />
                            </div>
                            <div class="form-group">
                                <label class="labell" for="email"><i class="iconl bi bi-envelope-fill"></i></label>
                                < input autoComplete="off" class="inputl" type="email" name="email" id="email" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <label class="labell" for="pass"><i class="iconl bi bi-shield-lock-fill"></i></label>
                                < input autoComplete="off" class="inputl" type="password" name="pass" id="pass" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <label class="labell" for="ph"><i class="iconl bi bi-phone-fill"></i></label>
                                < input autoComplete="off" class="inputl" type="text" name="ph" id="re_pass" placeholder="PhoneNumber" />
                            </div>
                            <div class="form-group">
                                <label class="labell" for="inst"><i class="iconl bi bi-instagram"></i></label>
                                < input autoComplete="off" class="inputl" type="text" name="inst" id="re_pass" placeholder="InstagramLink" />
                            </div>
                            <div class="form-group">
                                <label class="labell" for="fb"><i class="iconl bi bi-facebook"></i></label>
                                < input autoComplete="off" class="inputl" type="text" name="fb" id="re_pass" placeholder="FacebookLink" />
                            </div>
                            <div class="form-group">
                                <label class="labell" for="mg"><i class="iconl bi bi-award"></i></label>
                                < input autoComplete="off" class="inputl" type="text" name="mg" id="re_pass" placeholder="Magor" />
                            </div>
                            <div class="form-group">
                                <label class="labell" for="desc"><i class="iconl bi bi-file-person"></i></label>
                                < input autoComplete="off" class="inputl" type="text" name="desc" id="re_pass" placeholder="About yourself     " />
                            </div>
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
                            <div class="form-group">
                                <select class="selectCategorie">
                                    <option value="null">Select Categorie</option>
                                    {categorie.map((p =>
                                        <option value="p._id">{p.name}</option>
                                    ))}
                                </select>                            </div>

                            <div class="form-group form-button">
                                < input autoComplete="off" class="inputl" type="submit" name="signup" id="signup" class="loginb tn btn-primary w-50 " value="Register" />
                            </div>

                        </form>
                    </div>
                    <div class="signup-image">
                        <figure class="figurel"><img class="imgl" src={img} alt="sing up image" /></figure>
                        <a class="linkLogin" href="#" class="signup-image-link" >I am already member</a>
                    </div>
                </div>
            </div>
        </section>
    );
}