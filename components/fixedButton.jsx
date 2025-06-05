import { useEffect, useState } from "react";
import shakeAnim from "../styles/shake.module.css";

export function FixedButton({ number = "+919810319795", showWhatsapp = true }) {
  const [anim, setAnim] = useState("");
  let [scrollTimer] = useState(-1);
  function animationOnScroll() {
    setAnim(shakeAnim.shake);
    if (scrollTimer != -1) {
      clearTimeout(scrollTimer);
    }
    scrollTimer = setTimeout(() => {
      setAnim("");
    }, 300);
  }
  useEffect(() => {
    document.addEventListener("scroll", animationOnScroll);
    return () => {
      document.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <>
      <div
        className={`position-fixed bottom-0 end-0 mb-4 me-4 ${anim}`}
        style={{ zIndex: 1000 }}
      >
        <a
          href={`tel:${number}`}
          className={`btn ${shakeAnim["shake-button"]} `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            height={25}
            color="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
        </a>
      </div>
      {showWhatsapp && (
        <>
          <div
            className={`position-fixed bottom-0 start-0 mb-4 ms-4 ${anim}`}
            style={{ zIndex: 1000 }}
          >
            <a
              href={`https://wa.me/${number}`}
              className={`btn ${shakeAnim["shake-button-green"]} `}
            >
              <i className="fa-brands fa-whatsapp text-light fa-xl"></i>
            </a>
          </div>
        </>
      )}
    </>
  );
}
