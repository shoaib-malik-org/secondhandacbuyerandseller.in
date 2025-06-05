"use client"


import splitWindowAc from "@/assets/services/windowAndSplitAc.png";
import Image from "next/image";
import vrfvrf from "@/assets/services/vrvVrf.jpg";
import furniture from "@/assets/services/furnitureOld.png";
import acPlant from "@/assets/services/ac-plant.webp";
import laptop from "@/assets/services/laptops.jpg";
import battery from "@/assets/services/battery.webp";
import trans from "@/assets/services/transformer.webp";

const services = [
  {
    title: "Old ac sell",
    desc: "We sell 1ton 1.5ton 2ton air conditioner in best price",
    src: splitWindowAc.src,
  },
  {
    title: "Old ac purchase",
    desc: "We buy every type of ac casset, chiller plant, window ac, split ac",
    src: splitWindowAc.src,
  },
  {
    title: "VRF and VRV acs",
    desc: "We also buy VRF and VRV acs",
    src: vrfvrf.src,
  },
  {
    title: "AC plants and chiller plants",
    desc: "",
    src: acPlant.src,
  },
  {
    title: "Old office furniture",
    desc: "We also old office furniture of any type",
    src: furniture.src,
  },
  {
    title: "Laptop and Computers",
    desc: "We also old Laptops and Computers",
    src: laptop.src,
  },
  {
    title: "Batteries",
    src: battery.src,
  },
  {
    title: "Transformer",
    src: trans.src,
  },
];

export function Services({no="+919810319795"}) {
  return (
    <section id="services" className="mt-5">
      <article className="container">
        <h2
          className="heading heading-color text-center display-3"
          id="heading"
        >
          SERVICES
        </h2>
        <p
          className="text-center paragraph text-muted h5 mt-4 fw-normal"
          id="heading description"
        >
          The following services we can provide our best
        </p>
        <div className="row  row-cols-2 row-cols-lg-3 mt-5 py-4">
          {services.map((data)=>Cols(data,no))}
        </div>
      </article>
    </section>
  );
}

function Cols(data,no="") {
  function call() {
    window.location.replace(`tel:${no}`);
  }
  return (
    <div className="col mb-5" key={data.title}>
      <div className="card h-100" style={{ maxWidth: "540px" }} onClick={call}>
        <div className="row g-0 h-100">
          <div className="col-md-4">
            <Image
              src={data.src}
              className="img-fluid rounded-start h-100"
              style={{ objectFit: "cover" }}
              height={200}
              width={200}
              alt={data.title}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title heading heading-color fw-bold">
                {data.title}
              </h4>
              <p className="card-text paragraph">{data.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
