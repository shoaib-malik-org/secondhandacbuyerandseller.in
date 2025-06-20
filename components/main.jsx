import style from "@/styles/Home.module.css";
import Link from "next/link";
import dealInList from '@/data/homeThingsBuy.json'

export function Main({phoneNumber = "919810319795"}) {
  return (
    <section id="home">
      <article>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div
            className="carousel-inner overlay position-relative"
            style={{ height: "600px" }}
          >
            <div
              className={`carousel-item active ${style["crousel-img1"]} h-100 w-100 px-4`}
            >
              <div className="position-relative z-10 ms-lg mt-lg col-md-6">
                <h1 className="text-white display-3 fw-bold heading text-center text-md-start">
                  Second hand ac Buyer and Seller
                </h1>
                <p className="h4 text-light fw-normal paragraph mt-4 text-center text-md-start">
                  We buy every type of air conditioner in working condition or
                  not. We also buy chiller plants, Centralize, big ductable, and
                  cassete air conditioners
                </p>
                <Link href={`tel:+${phoneNumber}`}>
                  <button className="btn btn-primary rounded-pill p-2 px-4 mt-4 text-large ms-md-0 ms-auto me-auto d-block">
                    <i className="fa-solid fa-phone me-2 fa-sm"></i> Contact
                  </button>
                </Link>
              </div>
            </div>
            <div
              className={`carousel-item ${style["crousel-img2"]} h-100 w-100 px-4`}
            >
              <div className="position-relative z-10 ms-lg mt-lg col-md-6">
                <h2 className="text-white h1 display-3 fw-bold heading text-center text-md-start">
                  Great price for window and split ac
                </h2>
                <p className="h4 text-light fw-normal paragraph mt-4 text-center text-md-start">
                  We buy acs in great price whether it is working or not
                </p>
                <Link href={`tel:+${phoneNumber}`}>
                  <button className="btn btn-primary rounded-pill p-2 px-4 mt-4 text-large ms-md-0 ms-auto me-auto d-block">
                    <i className="fa-solid fa-phone me-2 fa-sm"></i> Contact
                  </button>
                </Link>
              </div>
            </div>
            <div
              className={`carousel-item ${style["crousel-img3"]} h-100 w-100 px-4`}
            >
              <div className="position-relative z-10 ms-lg mt-lg col-md-6">
                <h2 className="text-white h1 display-3 fw-bold heading text-center text-md-start">
                  Great service
                </h2>
                <p className="h4 text-light fw-normal paragraph mt-4 text-center text-md-start">
                  Our worker will come to you to take your air conditioner or
                  repair it as fast as he can. We offer a 100% Satisfaction
                  Guarantee on Second Hand AC Purchase
                </p>
                <Link href={`tel:+${phoneNumber}`}>
                  <button className="btn btn-primary rounded-pill p-2 px-4 mt-4 text-large ms-md-0 ms-auto me-auto d-block">
                    <i className="fa-solid fa-phone me-2 fa-sm"></i> Contact
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev z-10"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next z-10"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="w-100 mt-5">
          <ul>
            <h2 className="mb-4 col-lg-8 offset-md-2 text-serifn text-blue">
              We buy every type of air conditioner and also deals in.
            </h2>
            <div className="container-fluid">
              <div className="row offset-md-3">
                {dealInList.map((data) => (
                  <li key={data} className="col-md-6 text-p ms-small">
                    <p className="h5 fw-normal">{data}</p>
                  </li>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </article>
    </section>
  );
}
