
// app/page.js
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import WelcomeCard from "@/components/home/WelcomeCard";
import EventsNewsSection from "@/components/home/EventsNewsSection";
import VirtualTour from "@/components/home/VirtualTour";
import Gallery from "@/components/home/Gallery";
import Souvenirs from "@/components/home/Souvenirs";
import PlanVisit from "@/components/home/PlanVisit";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import Section from "@/components/home/Section";

export default function Home() {
  return (
    <div className=" max-w-[1900px] mx-auto bg-[#f8fbf1]">
      <Navbar/>
              <Hero />

      <div className=" w-full h-full  bg-white px-4 md:px-[40px] xl:px-[72px]  ">

        {/* <Header /> */}



     <Section/>

        <Gallery />

        <Souvenirs />

        <PlanVisit />


      </div>
        <Footer />

    </div>
  );
}
