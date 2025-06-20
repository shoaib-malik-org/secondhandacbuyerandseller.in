import "./globals.css";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Second hand AC Buyer and Seller",
  description:
    "Looking to buy or sell a second hand AC in Faridabad or nearby NCR cities? Visit our store at Shop No. 07, New Industrial Twp 5, Faridabad, Haryana-121001. We are trusted second hand AC buyers and sellers dealing in all major brands like LG, Voltas, Daikin, Hitachi, and more. Get the best prices for used window and split ACs with quick and reliable service. We serve customers across Delhi, Gurgaon, Noida, Ghaziabad, Palwal, Ballabhgarh, and other parts of Haryana and NCR. Whether you're upgrading or need an affordable cooling solution, we ensure quality-tested units and hassle-free transactions. Your one-stop shop for second hand ACs in NCR.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ndDqU0Gzau9qJ1lfW4pNLlhNTkCfHzAVBReH9diLvGRem5+R9g2FzA8ZGN954O5Q"
        crossorigin="anonymous"
      />
    </html>
  );
}
