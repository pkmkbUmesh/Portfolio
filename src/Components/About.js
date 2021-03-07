import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import BlockContent from "@sanity/block-content-to-react";
import dineshYadav from "../Assets/dineshYadav.jpg";
import { Fade } from "react-reveal";
import { contactInfo } from "../skillsSection";
import { SocialIcon } from "react-social-icons";

function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
      name,
      bio,
      image,
    }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author)
    return (
      <div className="font-bold cursive leading-none lg:leading-snug home-load">
        Loading...
      </div>
    );

  return (
    <main className="relative">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRSsAAN_P9NyVeZx9rwniAC9HC1c_od3IX-Q&usqp=CAU"
        alt="bg-for-about-page"
        className="absolute w-full h-full"
      />
      <div className="p-10 lg:pt-48 container mx-auto relative md:max-w-2x1">
        <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20 md:flex">
          <div className=" md:flex-shrink-0">
            <img
              src={dineshYadav}
              alt={author.name}
              className="rounded md:w-32 h-32 lg:w-64 lg:h-64 mr-8"
            />
          </div>
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-green-300 mb-4">
              Hey there, I'm{" "}
              <span className="text-green-100">{author.name}</span>
              🖐️
            </h1>
            <div className="prose lg:prose-xl text-white">
              <BlockContent
                blocks={author.bio}
                projectId="f8sxiaud"
                dataset="production"
              />
            </div>
          </div>
        </section>
        <Fade bottom duration={2000}>
          <section className="contact-section">
            <div className="porse lg:prose-xl text-white text-3xl">
              {contactInfo.title}
            </div>
            <div className="inline-flex py-3 px-3 contact">
              <SocialIcon
                url="https://twitter.com/DineshY84547011?s=01"
                className="mr-4"
                target="_blank"
                fgColor="#fff"
                style={{ height: 35, width: 35 }}
              />
              <SocialIcon
                url="https://github.com/dinesh0191"
                className="mr-4"
                target="_blank"
                fgColor="#fff"
                style={{ height: 35, width: 35 }}
              />
              <SocialIcon
                url="https://linkedin.com/in/dinesh-yadav-057055189"
                className="mr-4"
                target="_blank"
                fgColor="#fff"
                style={{ height: 35, width: 35 }}
              />
            </div>
            <a
              className="porse lg:prose-xl text-white number"
              href={"tel:" + contactInfo.number}
            >
              {contactInfo.number}
            </a>{" "}
            <a
              className="porse lg:prose-xl text-white"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
          </section>
        </Fade>
      </div>
    </main>
  );
}

export default About;
