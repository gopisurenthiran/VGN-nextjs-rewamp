import React from "react";

export default function ExtraInfo() {
  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        About Vgn Grandeur
      </div>
      <div className="content">
        <p className="description text-1">
        Who wouldn't want their home to epitomize luxury? VGN Grandeur offers just that. Situated in a prime location, it ensures seamless connectivity. More than just essentials, your new home integrates functional and eco-friendly features, reimagined for your lifestyle. Enjoy the freedom to design your dream home within a gated community that promises comfort, security, and unparalleled grandeur.
        </p>
        <a href="#" className="tf-btn-link style-hover-rotate">
          <span>Read More </span>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2348_5612)">
              <path
                d="M1.66732 9.99999C1.66732 14.6024 5.39828 18.3333 10.0007 18.3333C14.603 18.3333 18.334 14.6024 18.334 9.99999C18.334 5.39762 14.603 1.66666 10.0007 1.66666C5.39828 1.66666 1.66732 5.39762 1.66732 9.99999Z"
                stroke="#F1913D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 6.66666L10 13.3333"
                stroke="#F1913D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.66732 10L10.0007 13.3333L13.334 10"
                stroke="#F1913D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_2348_5612">
                <rect
                  width={20}
                  height={20}
                  fill="white"
                  transform="translate(20) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
      <div className="box">
        <ul>
          <li className="flex">
            <p className="fw-6">ID</p>
            <p>#1234</p>
          </li>
          <li className="flex">
            <p className="fw-6">Price</p>
            <p>$7,500</p>
          </li>
          <li className="flex">
            <p className="fw-6">Size</p>
            <p>150 sqft</p>
          </li>
          <li className="flex">
            <p className="fw-6">Rooms</p>
            <p>9</p>
          </li>
          <li className="flex">
            <p className="fw-6">Baths</p>
            <p>3</p>
          </li>
        </ul>
        <ul>
          <li className="flex">
            <p className="fw-6">Beds</p>
            <p>7.328</p>
          </li>
          <li className="flex">
            <p className="fw-6">Year buit</p>
            <p>2022</p>
          </li>
          <li className="flex">
            <p className="fw-6">Type</p>
            <p>Villa</p>
          </li>
          <li className="flex">
            <p className="fw-6">Status</p>
            <p>For sale</p>
          </li>
          <li className="flex">
            <p className="fw-6">Garage</p>
            <p>1</p>
          </li>
        </ul>
      </div>
    </>
  );
}
