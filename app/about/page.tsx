import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  const stats = [
    { number: "15K", label: "Happy Customers" },
    { number: "150K", label: "Monthly Visitors" },
    { number: "15", label: "Countries Worldwide" },
    { number: "100+", label: "Top Partners" },
  ];

  const teamMembers = [
    {
      image: "/images/team-member-1.jpg",
      username: "Username",
      profession: "Profession",
    },
    {
      image: "/images/team-member-2.jpg",
      username: "Username",
      profession: "Profession",
    },
    {
      image: "/images/team-member-3.jpg",
      username: "Username",
      profession: "Profession",
    },
  ];

  const companies = [
    { name: "Hooli", logo: "/images/hooli.png" },
    { name: "Lyft", logo: "/images/lyft.png" },
    { name: "Company", logo: "/images/pied-piper.png" },
    { name: "Stripe", logo: "/images/stripe.png" },
    { name: "AWS", logo: "/images/aws.png" },
    { name: "Reddit", logo: "/images/reddit.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      {/* Hero Section */}
      <div className="relative md:h-[648px] py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="mb-4 font-bold text-gray-600 md:mt-24">
              ABOUT COMPANY
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">ABOUT US</h1>
            <p className="text-xl font-medium text-gray-600 mb-6">
              We know how large objects will act, <br />
              but things on a small scale
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 text-sm font-bold rounded-md hover:bg-blue-600">
              Get Quote Now
            </button>
          </div>
          <div className="absolute right-0 top-0 m-0 p-0">
            <Image
              src="/images/shopping-girl.png"
              alt="Shopping Girl"
              width={1280}
              height={648}
            />
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-12 px-4">
        <div className="text-red-500 mb-6">Problems trying</div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="w-96 text-2xl font-bold text-gray-600">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </div>
          <div className="font-medium text-gray-600">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h2 className="text-4xl font-bold mb-2">{stat.number}</h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="py-12 px-8">
        <div className="relative w-full h-[540px] rounded-lg overflow-hidden">
          <Image
            src="/images/mountain-lake.png"
            alt="Mountain Lake"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.image}
                alt={member.username}
                width={300}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="font-medium mb-2">{member.username}</h3>
              <p className="text-gray-600 mb-4">{member.profession}</p>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-[#23A6F0] hover:text-blue-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link href="#" className="text-[#23A6F0] hover:text-blue-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
                <Link href="#" className="text-[#23A6F0] hover:text-blue-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Companies Section */}
      <div className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Big Companies Are Here</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={50}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12">
        <div className="flex flex-col md:flex-row bg-[#2A7CC7] rounded-lg overflow-hidden">
          <div className="md:w-1/2 p-12 text-white">
            <h3 className="text-base font-bold mb-4">WORK WITH US</h3>
            <h2 className="text-4xl font-bold mb-6">Now Let's grow Yours</h2>
            <p className="mb-8">
              The gradual accumulation of information about atomic and <br />
              small-scale behavior during the first quarter of the 20th
            </p>
            <button className="bg-white text-[#2A7CC7] px-10 py-3 rounded-md hover:bg-gray-100 font-bold">
              Button
            </button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/woman-pink.png"
              alt="Woman in Pink"
              width={600}
              height={600}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
