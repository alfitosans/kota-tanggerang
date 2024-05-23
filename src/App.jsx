import { Button, Card } from "flowbite-react";
import "./App.css";
import Logo from "./assets/logo.png";
import BackgroundImage from "./assets/bg-image.png";

function App() {
  return (
    <>
      <div className="background-container"></div>
      <div className="overlay"></div>
      <div className="h-screen flex items-center justify-center roboto-medium content mx-5 my-5">
        <div className="grid items-center gap-2">
          <div className="flex items-center justify-center">
            <img
              className="rounded items-center shadow-lg mt-5 pt-5"
              src={Logo}
              width={200}
              alt="Bila"
            />
          </div>
          <div className="flex items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-center my-3">
              Sistem Informasi Kelurahan Sudimara Barat
            </h1>
          </div>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://www.tangerangkota.go.id/"
            target="_blank"
          >
            Website Kota Tangerang
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://kec-tangerang.tangerangkota.go.id/layanan"
            target="_blank"
          >
            Website Kecamatan Ciledug
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://sites.google.com/view/kelurahansudimarabarat/profil/tugas-dan-fungsi"
            target="_blank"
          >
            Kelurahan Sudimara Barat
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://sobatdukcapil.tangerangkota.go.id/home/informasi/persyaratan"
            target="_blank"
          >
            SobatDukcapil
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://play.google.com/store/apps/details?id=id.go.tangerangkota.tangeranglive&pcampaignid=web_share"
          >
            Aplikasi Tanggarang live
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://play.google.com/store/apps/details?id=go.id.tangerangkota.tangerangayo&pcampaignid=web_share"
          >
            Aplikasi Tanggerang Ayo
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl"
            href="https://play.google.com/store/apps/details?id=gov.dukcapil.mobile_id&pcampaignid=web_share"
          >
            Aplikasi Identitas Kependudukan Digital
          </Button>
          <Button
            className="bg-slate-100  hover:bg-orange-950 hover:text-white hover:border-white  text-amber-950 font-bold py-2 px-4 rounded-2xl shadow-2xl mb-4"
            href="https://docs.google.com/forms/d/1k-zbF4wtr3LYFzwEm3rmAeFJZdon7irkR3eRCzX1pcY/viewform?edit_requested=true"
            target="_blank"
          >
            Survey Kepuasan Masyarakat
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
