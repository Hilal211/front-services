import './About.css'
import img1 from '../../image/values-1.png';
import img2 from '../../image/values-2.png'
import img3 from '../../image/values-3.png'
import { useEffect, useState } from 'react'

export default function About() {
    useEffect(() => {

        window.scroll({
          top: 0,
          left: 0,
        });
      }, [])
    return(
        <section id="values" class="values mt-5">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>About us</h2>
          <p>Who we are</p>
        </header>

        <div class="row">

          <div class="col-lg-4">
            <div class="box" data-aos="fade-up" data-aos-delay="200">
              <img src={img1} class="img-fluid" alt=""/>
              <h3>Ad cupiditate sed est odio</h3>
              <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box" data-aos="fade-up" data-aos-delay="400">
              <img src={img2} class="img-fluid" alt=""/>
              <h3>Voluptatem voluptatum alias</h3>
              <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <div class="box" data-aos="fade-up" data-aos-delay="600">
              <img src={img3} class="img-fluid" alt=""/>
              <h3>Fugit cupiditate alias nobis.</h3>
              <p>Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
    );
}