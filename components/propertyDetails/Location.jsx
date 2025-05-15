import React from "react";

export default function Location() {
  return (
    <>
      <div className="wg-title text-11 fw-6 text-color-heading">
        Get Direction
      </div>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d242.9460571026861!2d80.135795!3d13.026952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261000d74cce7%3A0x8955959beb90498d!2sVGN%20Grandeur!5e0!3m2!1sen!2sin!4v1747289895523!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="info-map">
        <ul className="box-left">
          <li>
            <span className="label fw-6">Address</span>
            <div className="text text-variant-1">150 sqft</div>
          </li>
          <li>
            <span className="label fw-6">City</span>
            <div className="text text-variant-1">#1234</div>
          </li>
          <li>
            <span className="label fw-6">State/county</span>
            <div className="text text-variant-1">$7,500</div>
          </li>
        </ul>
        <ul className="box-right">
          <li>
            <span className="label fw-6">Postal code</span>
            <div className="text text-variant-1">7.328</div>
          </li>
          <li>
            <span className="label fw-6">Area</span>
            <div className="text text-variant-1">7.328</div>
          </li>
          <li>
            <span className="label fw-6">Country</span>
            <div className="text text-variant-1">2024</div>
          </li>
        </ul>
      </div>
    </>
  );
}
