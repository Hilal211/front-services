import { FaStar } from "react-icons/fa";
import { useHistory } from 'react-router';

import { useState ,useEffect} from "react";
import axios from "axios";
const colors = {
    orange: "#FBC014",
    grey: "#a9a9a9"

};
export default function Rating(props) {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        window.scroll({
          top: 0,
          left: 0,
        });
      }, [])
    let history = useHistory();
    const stars = Array(5).fill(0)
    let id = props.match.params.id;
    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let reqBody = {
            'name':name,
            'email': email,
            'description': description,
            'rate': currentValue,
            'serviceProvider': id
        };
        await axios.post('http://localhost:3002/rating', reqBody);
        history.push(`/serviceproviderdetails/${id}`);
    };


    return (
        <section class="section sectionAdd">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        <div class="bg-white rounded text-center p-5 shadow-down">
                            <h4 class="mb-4">Add your rating</h4>
                            <form class="row" class="container" onSubmit={handleSubmit}>
                                <div class="row">
                                    <div class="col-md-6 container">
                                        < input autoComplete="off" type="text" name="Your name" placeholder="Your name" class="form-control px-0 mb-4"
                                            onChange={(e) => setName(e.target.value)}
                                            required />
                                    </div>
                                    <div class="col-md-6 container">
                                        < input autoComplete="off" type="text" name="Your email" placeholder="Your email" class="form-control px-0 mb-4"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />
                                    </div>
                                </div>
                                <div class="container mb-5">
                                    {stars.map((_, index) => {
                                        return (
                                            <FaStar
                                                key={index}
                                                size={24}
                                                onClick={() => handleClick(index + 1)}
                                                onMouseOver={() => handleMouseOver(index + 1)}
                                                onMouseLeave={handleMouseLeave}
                                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                                style={{
                                                    marginRight: 10,
                                                    cursor: "pointer"
                                                }}
                                            />
                                        )
                                    })}
                                </div>

                                <div class="col-12">
                                    <textarea class="form-control px-0 mb-4"
                                        placeholder="What's your experience?"
                                        onChange={(e) => setDescription(e.target.value)}

                                        required></textarea>
                                </div>

                                <div class="col-lg-6 col-10 mx-auto">
                                    < input autoComplete="off" class="btn btn-primary w-50" type="submit" value="Save"  style={{background:"#5B6EF3"}}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

