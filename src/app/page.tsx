import Image from "next/image";
import "./globals.css";
import qr from './qr.png'

export default function Home() {
  return (
   <div>
    
    <div className="QRbox rounded-2xl	bg-white	justify-center block p-5 mt-10 space-y-8 shadow-2xl">
        <Image src={qr} alt="image" className="rounded-2xl"/>

      <h2 className="font-extrabold	text-center	text-2xl	p-2">Improve your front-end skills by building projects</h2>
      <h2 className="text-center p-2">Scan the QR code to visit Frontend mentor and take your coding skills to the next level</h2>
    </div>
    
    </div>
  );
}
