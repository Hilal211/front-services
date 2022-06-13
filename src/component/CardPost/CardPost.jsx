import './CardPost.css'
import img from '../../image/blog-1.jpg'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function CardPost(props) {
  
  return (
    <Link to={`offerdetail/${props.id}`} class="col-lg-4 w3-animate-zoom" style={{ marginBottom: "20px" }}>
      <div >
        <div class="post-box">
          <div class="post-img"><img src={`http://localhost:3002/uploads/${props.image}`} class="img-fluid" alt="" /></div>
          <span class="post-date">{props.date.substring(0, props.date.indexOf('T'))}</span>
          <h3 class="post-title">{props.title}</h3>
          <h3 class="post-title">{props.description}</h3>
          <div class="readmore stretched-link mt-auto"><span>Read More</span><i class="bi bi-arrow-right"></i></div>
        </div>
      </div>
    </Link>
  );
}