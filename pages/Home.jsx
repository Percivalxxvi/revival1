import React from "react";
import Navbar from "../components/Navbar";
import { Globe, Video, Radio, Phone, HeartHandshake } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar page="home" />
      <div className="lg:hidden flex h-20"></div>
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-linear-to-b from-[#150f33] to-[#221a50] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Restoring the biblical <br />
              <span className="text-[#553fc4]">ancient landmarks</span>
            </h1>
            <p className="mt-6 text-green-100 max-w-lg">
              Revival network Commission is a privately owned Christian ministry
              dedicated to raising disciples, transforming lives, and
              broadcasting God’s Word to the world.
            </p>

            <div className="mt-8 flex flex-wrap gap-5">
              <button className="bg-white text-[#150f33] px-6 py-3 rounded-full font-medium hover:bg-[#150f33] hover:text-white transition cursor-pointer border-0 hover:border">
                Watch Recorded Sermons
              </button>
              <button className="border border-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition cursor-pointer">
                About the Ministry
              </button>
            </div>
          </div>

          {/* Hero Image / Placeholder */}
          <div className="relative">
            <div className="w-full h-80 rounded-2xl bg-[#150f33] backdrop-blur-md flex items-center justify-center">
              {/* <Video size={80} className="text-white" /> */}
              <img
                className="lg:h-4/5"
                src="https://ik.imagekit.io/percival26/ChatGPT%20Image%20Dec%2017,%202025,%2012_45_59%20PM.png?updatedAt=1765971997238"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="mb-5"> • To bring about a Revival in the world</p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            • To proclaim the Gospel of Jesus Christ with power, raise kingdom
            ambassadors, and use modern media to reach souls globally.
          </p>

          <div className="lg:flex lg:items-center lg:justify-center grid sm:grid-cols-2 lg:flex-wrap gap-8">
            {/* <Feature
              icon={<Radio />}
              title="Live Broadcasts"
              text="Weekly services streamed globally."
            /> */}
            <Feature
              icon={<Video />}
              title="Video Sermons"
              text="Watch life-transforming messages anytime."
            />
            <Feature
              icon={<Globe />}
              title="Global Outreach"
              text="Reaching nations beyond borders."
            />
            <Feature
              icon={<HeartHandshake />}
              title="Prayer & Support"
              text="Standing with believers in faith."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Connect with us for prayers, counseling, or partnership.
          </p>

          <button className="inline-flex items-center gap-2 bg-[#150f33] text-white px-6 py-3 rounded-full hover:bg-[#2d2365] cursor-pointer transition">
            <Phone size={18} />
            Contact the Ministry
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#150f33] text-white py-6 text-center text-sm">
        © {new Date().getFullYear()} Revival Network Commission · Nigeria · All
        Rights Reserved
      </footer>
    </div>
  );
};

const Feature = ({ icon, title, text }) => (
  <div className="bg-gray-50 p-6 lg:w-80 rounded-xl shadow-sm hover:shadow-md transition">
    <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[#150f33] text-white mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
);

export default Home;
