import React from 'react';

export default function Location() {
  return (
    <div className="location">
  <div className="container-fluid">
    <div className="row g-0">
      <div className="col-lg-6 col-12">
        <div className="location__left">
          <div className="location__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.4355669374!2d-118.69192993092697!3d34.02073049448939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1633958856057!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-12">
        <div className="location__right padding--top padding--bottom">
          <div className="location__info">
            <div className="location__info-top">
              <div className="section__header">
                <h2>Contact Person</h2>
              </div>
              <div className="section__wrapper">
                <div className="location__info-thumb">
                  <img
                    src="assets/images/location/01.jpg"
                    alt="location thumb"
                  />
                </div>
                <div className="location__info-content">
                  <h6>Deniyel Murchi</h6>
                  <span>Church Pastor</span>
                  <ul>
                    <li>
                      <b>Tel:</b>+002145698
                    </li>
                    <li>
                      <b>Email:</b>info@yourmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="location__info-bottom">
              <div className="section__header">
                <h2>Contact Info</h2>
              </div>
              <div className="section__wrapper">
                <div className="location__info-list">
                  <ul>
                    <li>
                      <div className="location__info-left">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="location__info-right">
                        <p>
                          Inner Circular Road, New Fabada Streed Barmuda, USA.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="location__info-left">
                        <i className="far fa-clock" />
                      </div>
                      <div className="location__info-right">
                        <ul>
                          <li>
                            <b>Monday-Thursday :</b> 06:00 am - 09:00 pm
                          </li>
                          <li>
                            <b>Friday :</b> 10:30 am - 05:30 pm
                          </li>
                          <li>
                            <b>Saturday :</b> 10:30 am - 05:30 pm
                          </li>
                          <li>
                            <b>Sunday :</b> Closed
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
