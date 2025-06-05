import about from "@/assets/imgs/about-pic.jpg";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="mt-5">
      <div className="container my-5">
        <h4 className="text-center">Call to know the price for your AC</h4>
      </div>
      <article className="container">
        <h2
          className="heading heading-color text-center display-3"
          id="heading"
        >
          ABOUT US
        </h2>
        <p
          className="text-center paragraph text-muted h5 mt-4 fw-normal"
          id="heading description"
        >
          Our vision is to provide great price and services to our customers
        </p>
        <div className="row mt-5 row-cols-lg-2 row-cols-1">
          <div className="col pe-5">
            <Image
              src={about.src}
              className="h-100 w-100 rounded"
              height={200}
              width={400}
              alt="..."
            />
          </div>
          <div className="col p-5">
            <h3 className="h5 heading heading-color">
              WHEN YOU SHOP YOU CAN ASSURED ABOUT THE QUALITY OF THE AC
              YOU'RE BUYING.
            </h3>
            <p className="paragraph mt-4 text-muted">
              You wanna be where you can see our troubles are all the same. You
              wanna be where everybody knows Your name. So lets make the most of
              this beautiful day. Since we're together. , We're gonna do it. On
              your mark get set and go now.
            </p>
            <ul className="text-muted fw-bold mt-5">
                <li>We provide only good conditoin acs</li>
                <li className="mt-2">We provide best offers</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
