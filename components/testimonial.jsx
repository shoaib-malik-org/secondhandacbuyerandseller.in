import style from "@/styles/Home.module.css";

export function Carousel() {
  return (
    <section
      className={`${style.bgTestimonial} py-5 mt-lg position-relative ${style.overlay}`}
      id="testimonial"
    >
      <div className="container position-relative z-10">
        <h2 className="text-uppercase text-serif heading text-center fw-bold mb-1 text-light">
          what people say
        </h2>
        <p className="text-lgrey text-center mb-5">
          How people said about our air conditioners and service
        </p>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators top-100 py-1">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner text-center h-smpx text-light">
            <div className="carousel-item active">
              <p className="w-lg-50 center">
                I experienced the best ever service from Second Hand Acs Sale &
                Purchase. The promptness in service is unmatched. Experienced
                and customer friendly staff made things easier. And the prices
                and economical and work done by them is worth every penny spent.
                They are the best.
              </p>
              <h5 className="text-serif mt-5">Ravi Chauhan</h5>
            </div>
            <div className="carousel-item">
              <p className="w-lg-50 center">
                I was suffering from bad quality of air conditioners and bad
                service but these guys are really good they took air conditioner
                direct from home and it was easy
              </p>
              <h5 className="text-serif mt-5">Shoaib malik</h5>
            </div>
            <div className="carousel-item">
              <p className="w-lg-50 center">
                These guys provide great service and great product
              </p>
              <h5 className="text-serif mt-5">Peter Packer</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
