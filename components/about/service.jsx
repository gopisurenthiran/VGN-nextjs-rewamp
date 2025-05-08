"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const features = [
  { icon: "icon-swimming-pool", title: "Customer Satisfication", paragraph: "Delighting customers by offering them a great buying experience and a quality product." },
  { icon: "icon-sky-garden", title: "Ethical Business Practices", paragraph: "Maintaining fair standards that help us earn goodwill from employees, stakeholders and customers." },
  { icon: "icon-children-play", title: "Excellence & Prefection", paragraph: "Achieving our milestones through effective processes that leave no room for error." },
  { icon: "icon-spa", title: "Transparency", paragraph: "Encouraging open conversations and fostering a strong company culture." },
  { icon: "icon-swimming-pool", title: "Commitment", paragraph: "Our word is our bond and we ensure we execute the needs of our customers in a timely manner." },
  { icon: "icon-sky-garden", title: "Respect for Individuals & relations", paragraph: "Cultivating mutual respect and treating all employees equally." },
  { icon: "icon-children-play", title: "Social responsibility", paragraph: "Creating projects that have the wellness of the environment at its core." },

];

export default function Features() {
  return (
    <div className="tf-spacing-7">
      <div className="tf-container">
        <div className="row">
          <div className="col-12">
            <div className="heading-section mb-46 text-center gap-30 mb-55">
              <h2 className="title split-text effect-right">Value that shape us</h2>
              <p className="text-1 split-text split-lines-transform">
              Our company runs on the undying passion our people have for delivering happiness and satisfaction to our customers. It’s the energy and spirit of the team that has brought the brand this far. We grow together and make each other a better professional. Each department and function work with professional expertise and creative passion, culminating to create the VGN Homes renowned ‘Quality’ that is so much more than just a sum of the parts.
              </p>
              <p className="text-1 split-text split-lines-transform">
              Our team of reputed architects, civil contractors, legal advisors, financial planners, expert marketing, CRM and sales teams, HR professionals and administrators, skillfully guided by our top management leave no stone unturned in order to ensure collective growth and success. It’s this team that helped us build ‘Trust’ in our customers.
              </p>
            </div>
            <Swiper
              className="swiper sw-layout style-pagination"
              spaceBetween={12}
              breakpoints={{
                0: { slidesPerView: 1 },
                575: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
              modules={[Navigation, Pagination]}
              pagination={{
                clickable: true,
                el: ".spd444",
              }}
              navigation={{
                prevEl: ".snbp444",
                nextEl: ".snbn444",
              }}
            >
              {features.map((feature, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <div style={{ height: "420px" }}
                    className="icons-box style-8 effec-icon wow animate__zoomIn animate__animated"
                    data-wow-duration="1s"
                    data-wow-delay="0s"
                  >
                    <div className="tf-icon">
                      <i className={feature.icon} />
                    </div>
                    <h5 className="title text-center">
                      <a href="#">{feature.title}</a>
                    </h5>
                    <span className="line" />
                    <p className="text-1 text-center">
                    {feature.paragraph} 
                    </p>
                  </div>
                </SwiperSlide>
              ))}
              <div className="mb-56"></div>
              <div className="sw-wrap-btn">
                <div className="swiper-button-prev sw-button nav-prev-layout snbp444">
                  <i className="icon-arrow-left-3" />
                </div>
                <div className="sw-pagination sw-pagination-layout text-center spd444" />
                <div className="swiper-button-next sw-button nav-next-layout snbn444">
                  <i className="icon-arrow-right-3" />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
