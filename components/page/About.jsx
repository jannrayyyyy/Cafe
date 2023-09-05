import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Image from "next/image";

function About() {
  const team = [
    {
      name: "John Loyd Belen",
      facebook: "https://www.facebook.com/jol0oo",
      ig: "https://www.instagram.com/j0lo_o/?hl=en",
      description:
        "A Web Developer studying at Cavite State University - Trece Martires Campus.",
      role: "Web Developer",
      img: "https://res.cloudinary.com/dkibnftac/image/upload/v1693201614/370571736_706771471284286_6881997833031964565_n_xkrmgf.jpg",
    },
    {
      name: " Jannray Mostajo",
      facebook: "https://www.facebook.com/jannray.mostajo",
      ig: "https://www.instagram.com/_jannrayyy/",
      description:
        " A Software dev studying at Cavite State University - Trece Martires Campus.",
      role: "Project Manager",
      img: "https://res.cloudinary.com/dkibnftac/image/upload/v1693201614/jannray_wnrjqk.png ",
    },

    {
      name: "Marianne S. Sabado",
      facebook:
        "https://www.facebook.com/mariannesabillo.sabado?mibextid=ZbWKwL",
      ig: "https://instagram.com/_yaniiverse?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D",
      description:
        "A 19-year-old student at Cavite State University - Trece Martires Campus taking a Bachelor Science in Information Technology (BSIT) Course.",
      role: "UI/UX designer",
      img: "https://res.cloudinary.com/dkibnftac/image/upload/v1693201616/marianne_zkbwe6.jpg",
    },
    {
      name: "Rjay C. Espineli",
      facebook: "https://www.facebook.com/rjayespineli",
      ig: "https://www.instagram.com/r.jaye_/",
      description:
        "A 2nd year student pursuing Bachelor of Science in Information Technology.",
      role: "QA Tester",
      img: "https://res.cloudinary.com/dkibnftac/image/upload/v1693201614/372293428_1424281405018183_9167317782362451280_n_zhzlvc.jpg",
    },
    {
      name: "Ma. Kristina M. Basas",
      facebook: "https://www.facebook.com/kristinavxv",
      ig: "https://www.instagram.com/_tinaatangi/",
      description:
        "A 2nd-year college student who’s taking a Bachelor's degree in Information Technology at CVSU Trece Campus.",
      role: "Data Analyst",
      img: "https://res.cloudinary.com/dkibnftac/image/upload/v1693201614/361613951_2001210540231511_90130525065791279_n_zkbcla.jpg",
    },
    {
      name: "Raiza Mae A. Mendoza",
      facebook: "https://www.facebook.com/raizamae.mendoza.9?mibextid=b06tZ0",
      ig: "https://instagram.com/raiiii_raiiii?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
      description:
        "A 2nd year student pursuing Bachelor Science in Information Technology",
      role: "Researcher",
      img: "https://res.cloudinary.com/dkibnftac/image/upload/v1693203637/333675185_161138636734072_5476152285124345646_n_dqfl3g.jpg",
    },
  ];
  return (
    <div className="about-container">
      <div className="about-page-content">
        <div className="about-header">
          <h6 style={{ paddingTop: "110px" }}>Our Team</h6>
          <h1>Meet the Cafe Urban Team</h1>
        </div>
        <div className="about-team">
          {team.map((item) => (
            <div data-aos="zoom-in" className="team-card">
              <Image src={item.img} alt="img" width={300} height={300} />
              <div className="card-body">
                <h4>{item.name}</h4>
                <h6>{item.role}</h6>
                <p>{item.description.slice(0, 60)}</p>
                <div className="about-socials">
                  <a href={item.facebook} target="_blank">
                    <FaFacebook />
                  </a>
                  <a href={item.ig} target="_blank">
                    <GrInstagram />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default About;
