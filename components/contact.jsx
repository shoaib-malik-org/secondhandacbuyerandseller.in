import Link from "next/link";

export function Contact({
  phoneNumber = "919810319795",
  facebook = "",
  instagram = "",
}) {
  return (
    <section id="contact" className="mt-5">
      <article className="container">
        <h2
          className="heading heading-color text-center display-3"
          id="heading"
        >
          GET IN TOUCH
        </h2>
        <p
          className="text-center paragraph text-muted h5 mt-4 fw-normal"
          id="heading description"
        >
          Also Connect With Social Media To Anytime
        </p>
        <div className="row mt-5">
          <div className="col-md-5">
            <Link href={`tel:+${phoneNumber}`}>
              <div className="row on-mouse-over mb-3">
                <div className="col-2 text-center">
                  <i className="fa-solid fa-mobile-screen-button icon fa-lg"></i>
                </div>
                <div className="col">
                  <h5 className="text-dgrey mb-0">Phone</h5>
                  <p className="text-secondary text-sans mt-1">
                    +{phoneNumber}
                  </p>
                </div>
              </div>
            </Link>
            <Link href={`https://wa.me/+${phoneNumber}`}>
              <div className="row on-mouse-over mb-3">
                <div className="col-2 text-center">
                  <i className="fa-brands fa-whatsapp icon fa-lg"></i>
                </div>
              </div>
            </Link>
            {facebook && (
              <Link href={facebook} target="__blank">
                <div className="row on-mouse-over mb-3 align-items-center">
                  <div className="col-2 text-center">
                    <i class="bi bi-facebook me-2 icon fa-lg"></i>
                  </div>
                  <div className="col">
                    <h5 className="text-dgrey">Facebook</h5>
                  </div>
                </div>
              </Link>
            )}

            {instagram && (
              <Link href={instagram} target="__blank">
                <div className="row on-mouse-over mb-3 align-items-center">
                  <div className="col-2 text-center">
                    <i class="bi bi-instagram icon fa-lg"></i>
                  </div>
                  <div className="col">
                    <h5 className="text-dgrey">Instagram</h5>
                  </div>
                </div>
              </Link>
            )}
          </div>
          <div className="col">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control rounded-1 text-sans"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control rounded-1 text-sans"
                />
              </div>
            </div>
            <input
              type="email"
              placeholder="Subject"
              className="form-control mt-4 rounded-1 text-sans"
            />
            <textarea
              name="message"
              placeholder="Message"
              id="textarea"
              rows="5"
              className="mt-4 form-control text-sans"
              style={{ resize: "none" }}
            ></textarea>
            <button className="btn btn-theme mx-auto d-block mt-3 px-4 rounded-pill">
              Send Message
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}
