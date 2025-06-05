"use client"

import logo from "../assets/imgs/logo.png";
import Image from "next/image";
import Link from "next/link";
// useWindowDimension.js
import { useState, useEffect } from "react";

export function Navbar() {
  const { width } = useWindowDimensions();
  const [imgWidth, setImgWidth] = useState(219.5);

  useEffect(() => {
    if (width < 580) {
      setImgWidth(150);
    } else {
      setImgWidth(219.5);
    }
  }, []);

  return (
    <header
      className="navbar navbar-expand-lg bg-white position-fixed top-0 start-0 end-0"
      style={{ zIndex: 100 }}
    >
      <div className="container">
        <Link href="#home" className="navbar-brand">
          <Image
            src={logo.src}
            height={63}
            width={imgWidth}
            alt={"second hand ac logo"}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                href="/"
                className="nav-link text-center text-lg-start"
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link
                href="/product"
                className="nav-link text-center text-lg-start"
              >
                SERVICES
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link
                className="nav-link text-center text-lg-start"
                href="/about"
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link
                className="nav-link text-center text-lg-start text-uppercase"
                href="/testimonial"
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item ms-lg-3">
              <Link
                className="nav-link text-center text-lg-start"
                href="/contact"
              >
                CONTACT US
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-center">
            <Link href={"tel:+919810319795"}>
              <button className="btn btn-theme rounded-pill px-3">
                <i className="fa-solid fa-phone me-2 fa-sm"></i> Call
              </button>
            </Link>
            <Link href={"https://wa.me/+919810319795"}>
              <button className="btn btn-theme rounded-pill px-3 ms-2">
                <i className="fa-brands fa-whatsapp me-2 fa-sm"></i> Whatsapp
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";
  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
