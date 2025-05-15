import React from "react";
import Image from "next/image";
export default function FloorPlan() {
  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        Location Advantages
      </div>
      <ul className="box-floor" id="parent-floor">
        <li className="floor-item">
          <div
            role="button"
            className="floor-header"
            data-bs-target="#floor-one"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="floor-one"
          >
            <div className="inner-left">
              <i className="icon icon-CaretDown" />
              <span className="text-btn">Schools</span>
            </div>

            {/* <ul className="inner-right">
              <li className="flex items-center gap-8">
                <i className="icon icon-beds-3" />2 Bedroom
              </li>
              <li className="flex items-center gap-8">
                <i className="icon icon-baths" />2 Bathroom
              </li>
            </ul> */}
          </div>
          <div
            id="floor-one"
            className="collapse show"
            data-bs-parent="#parent-floor"
          >
            <div className="faq-body">
              <div className="wg-title box-amenities">
                <div className="wrap-feature">
                  <div className="box-feature">
                    <ul>
                      <li className="feature-item">
                        Maharishi Vidyamandir - 1.9 Km
                      </li>
                      <li className="feature-item">
                       
                        Amrita Vidyalaya - 2.1 Km
                      </li>
                      <li className="feature-item">
                       
                        PSBB Millennium School - 2.9 Km
                      </li>
                      <li className="feature-item">
                        Narayana E Techno - 2.9 Km
                      </li>
                      <li className="feature-item">Velammal School - 3.1 Km</li>
                      <li className="feature-item">
                        Sri Krish International School - 4.2 Km
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="floor-item">
          <div
            className="floor-header collapsed"
            role="button"
            data-bs-target="#floor-two"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="floor-two"
          >
            <div className="inner-left">
              <i className="icon icon-CaretDown" />
              <span className="text-btn">Colleges</span>
            </div>
            {/* <ul className="inner-right">
              <li className="flex items-center gap-8">
                <i className="icon icon-beds-3" />2 Bedroom
              </li>
              <li className="flex items-center gap-8">
                <i className="icon icon-baths" />2 Bathroom
              </li>
            </ul> */}
          </div>
          <div
            id="floor-two"
            className="collapse"
            data-bs-parent="#parent-floor"
          >
           <div className="faq-body">
              <div className="wg-title box-amenities">
                <div className="wrap-feature">
                  <div className="box-feature">
                    <ul>
                      <li className="feature-item">
                      Iyyappanthangal Bus Depot/ Metro - 1.3 Km
                      </li>
                      <li className="feature-item">
                       
                      Porur Toll Gate - 	3.6 Km
                      </li>
                      <li className="feature-item">
                       
                      Porur Junction - 	4.6 Km
                      </li>
                      <li className="feature-item">
                      Poonamallee - 	6.3 Km
                      </li>
                      <li className="feature-item">Kundrathur Bus Stop - 	6.6 Km</li>
                      
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="floor-item">
          <div
            className="floor-header collapsed"
            role="button"
            data-bs-target="#floor-three"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="floor-three"
          >
            <div className="inner-left">
              <i className="icon icon-CaretDown" />
              <span className="text-btn">IT Parks</span>
            </div>
            {/* <ul className="inner-right">
              <li className="flex items-center gap-8">
                <i className="icon icon-beds-3" />2 Bedroom
              </li>
              <li className="flex items-center gap-8">
                <i className="icon icon-baths" />2 Bathroom
              </li>
            </ul> */}
          </div>
          <div
            id="floor-three"
            className="collapse"
            data-bs-parent="#parent-floor"
          >
           <div className="faq-body">
              <div className="wg-title box-amenities">
                <div className="wrap-feature">
                  <div className="box-feature">
                    <ul>
                      <li className="feature-item">
                      L&T - 	4.9 Km
                      </li>
                      <li className="feature-item">
                       
                      DLF -	6 Km
                      </li>
                      <li className="feature-item">
                       
                      RMZ - 	6 Km
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="floor-item">
          <div
            className="floor-header collapsed"
            role="button"
            data-bs-target="#floor-four"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="floor-four"
          >
            <div className="inner-left">
              <i className="icon icon-CaretDown" />
              <span className="text-btn">Hospitals</span>
            </div>
            {/* <ul className="inner-right">
              <li className="flex items-center gap-8">
                <i className="icon icon-beds-3" />2 Bedroom
              </li>
              <li className="flex items-center gap-8">
                <i className="icon icon-baths" />2 Bathroom
              </li>
            </ul> */}
          </div>
          <div
            id="floor-four"
            className="collapse"
            data-bs-parent="#parent-floor"
          >
           <div className="faq-body">
              <div className="wg-title box-amenities">
                <div className="wrap-feature">
                  <div className="box-feature">
                    <ul>
                      <li className="feature-item">
                      Ramachandra Hospital - 	2 Km
                      </li>
                      <li className="feature-item">
                       
                      Aravind Eye Hospital - 5.1 Km
                      </li>
                      <li className="feature-item">
                       
                      Dr.Mehta's Hospital - 	5.7 Km
                      </li>
                      <li className="feature-item">
                      ACS Medical College - 	6.3 Km
                      </li>
                      <li className="feature-item">Saveetha Dental College - 	6.8 Km</li>
                      <li className="feature-item">
                      MIOT Hospital - 8.1 Km
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="floor-item">
          <div
            className="floor-header collapsed"
            role="button"
            data-bs-target="#floor-five"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="floor-five"
          >
            <div className="inner-left">
              <i className="icon icon-CaretDown" />
              <span className="text-btn">Religious</span>
            </div>
            {/* <ul className="inner-right">
              <li className="flex items-center gap-8">
                <i className="icon icon-beds-3" />2 Bedroom
              </li>
              <li className="flex items-center gap-8">
                <i className="icon icon-baths" />2 Bathroom
              </li>
            </ul> */}
          </div>
          <div
            id="floor-five"
            className="collapse"
            data-bs-parent="#parent-floor"
          >
           <div className="faq-body">
              <div className="wg-title box-amenities">
                <div className="wrap-feature">
                  <div className="box-feature">
                    <ul>
                      <li className="feature-item">
                      Jumma Masjid Mosque - 	1.4 Km
                      </li>
                      <li className="feature-item">
                       
                      Christ Miracle Church - 3.4 Km
                      </li>
                      <li className="feature-item">
                       
                      Kundrathur Murugan Temple - 8.2 Km
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="floor-item">
          <div
            className="floor-header collapsed"
            role="button"
            data-bs-target="#floor-six"
            data-bs-toggle="collapse"
            aria-expanded="false"
            aria-controls="floor-six"
          >
            <div className="inner-left">
              <i className="icon icon-CaretDown" />
              <span className="text-btn">Connectivity</span>
            </div>
            {/* <ul className="inner-right">
              <li className="flex items-center gap-8">
                <i className="icon icon-beds-3" />2 Bedroom
              </li>
              <li className="flex items-center gap-8">
                <i className="icon icon-baths" />2 Bathroom
              </li>
            </ul> */}
          </div>
          <div
            id="floor-six"
            className="collapse"
            data-bs-parent="#parent-floor"
          >
           <div className="faq-body">
              <div className="wg-title box-amenities">
                <div className="wrap-feature">
                  <div className="box-feature">
                    <ul>
                      <li className="feature-item">
                      Iyyappanthangal Bus Depot/ Metro - 1.3 Km
                      </li>
                      <li className="feature-item">
                       
                      Porur Toll Gate - 	3.6 Km
                      </li>
                      <li className="feature-item">
                       
                      Porur Junction - 	4.6 Km
                      </li>
                      <li className="feature-item">
                      Poonamallee - 6.3 Km
                      </li>
                      <li className="feature-item">Kundrathur Bus Stop - 	6.6 Km</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
