import './AddOffer.css';
import { useState, useEffect } from 'react';
import API from '../../api'
import { indexOf } from 'lodash';
import { useHistory } from 'react-router';
import LoginStatus from '../../LoginStatus';
import {getCookie} from '../../cookies'

export default function AddOffer(props) {
  const [user, setUser] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [fileName, setFileName] = useState("");
  let history = useHistory();
  const id=getCookie('id')

  // let id = `61477112bc2ab51ca300a43f`;
  const getUser = async (id) => {

    await API.get(`users/${id}`)
      .then(res => {
        const result = res.data;
        setUser(result);
        console.log("rr", result)
      });
  }
  var file;
  
  const onChangeFile = (e) => {
    file = e.target.files[0]
    setFileName(file)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    var date = new Date();
    
    const body = new FormData();
    body.append('title', title);
    body.append('description', description);
    body.append('content', content);
    body.append('date', date);
    body.append('serviceProvider', id);
    body.append('image', fileName);
    await fetch('http://localhost:3002/offers', {
      method: "post",
      body,
      headers: {
        'Accept': 'multipart/form-data',
      },
    });
    history.push('/myoffer');
  };


  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
    console.log(id);
    getUser(id);
  }, [])
  return (
    <section class="section sectionAdd">
      <LoginStatus/>
      <div class="container">
        <div class="row">
          {/* <div class="col-12 text-center">
        <h2 class="section-title">Contact Info</h2>
      </div> */}
          <div class="col-lg-8 mx-auto">
            <div class="bg-white rounded text-center p-5 shadow-down">
              <h4 class="mb-80 ">Add Offer</h4>
              <form class="row" onSubmit={handleSubmit} encType="multipart/form-data">
                <div class="col-md-6">
                  < input autoComplete="off" type="text" name="title" placeholder="Title" class="form-control px-0 mb-4"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />
                </div>
                <div class="col-md-6">
                  < input autoComplete="off" type="text" placeholder="Description" class="form-control px-0 mb-4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required />
                </div>
                <div class="col-12">
                  <textarea class="form-control px-0 mb-4"
                    placeholder="Content" value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required></textarea>
                </div>
                {/* <div class="col-12">
              <select name="message" class="selectCategorie">
                    <option>Categorie</option>
                </select>
            </div> */}

                <div class="col-12">

                  {/* <ImageUpload
                    onUpload={(image) => {
                      setImage(image)
                    }}
                  /> */}
                  <label for="file-upload" class="custom-file-upload">
                  <i class="bi bi-card-image"></i> Image
                  </label>
                  < input autoComplete="off" id="file-upload" type="file" name="fileImage" accept="image/*" multiple={false} onChange={onChangeFile} />

                </div>
                <div class="col-lg-6 col-10 mx-auto">
                  < input autoComplete="off" class="btn btn-primary w-50" type="submit" value="Add" style={{background:"#5B6EF3"}}/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}