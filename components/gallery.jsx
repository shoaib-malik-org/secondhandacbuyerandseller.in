import Image from "next/image";

const imgArr = [
  { src: `window-and-split-ac.png`, alt: "window and split ac" },
  { src: `split-ac-outdoor.jpg`, alt: "split ac outdoors" },
  { src: `window-ac.webp`, alt: "ogeneral window ac" },
  { src: `split-ac.jpg`, alt: "split ac with full accessories" },
  { src: `split-ac.png`, alt: "ogeneral split ac" },
  { src: `outdoor-of-split-acs.jpg`, alt: "outdoor of split acs" },
];

export function Gallery() {
  return (
    <>
      <div className="container">
        <h2
          className="heading heading-color text-center display-3"
          id="heading"
        >
          GALLERY
        </h2>
        <div className="row row-cols-md-3 row-cols-2">{imgArr.map(Cols)}</div>
      </div>
    </>
  );
}

function Cols(obj) {
  return (
    <figure className="col" key={obj.alt}>
      <Image
        src={"/image/" + obj.src}
        height={400}
        width={400}
        alt={obj.alt}
        className={"img-fluid rounded-3 border"}
      />
    </figure>
  );
}
