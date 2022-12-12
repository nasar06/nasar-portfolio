/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import clearPixel from '../../assets/recentprojects/clear-pixel.png';
import crumbCooking from '../../assets/recentprojects/crumb-cooking.png';
import QuizMockup from '../../assets/recentprojects/Quiz mockup.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'Clear-Pixel', 
      description: `used camera resale application
      •Users can view a list of used cameras and order items immediately. Users will see all added products on the "My Orders"
      page. And users can delete any product from there.
      •Sellers can add used cameras for sale, and also view my products, which can be deleted. And the seller can Advertise his
      added product.
      •Admin will see all sellers and all buyers, he can delete any buyer and seller. admin also verified the seller.`,
      alter: 'Clear-Pixel',
      image: `${clearPixel}`,
      technologies : "React js, Tailwind CSS, Firebase, MongoDB, Express, Rest API's",
      projectLink : "https://clear-pixel-56970.web.app/",
      clientCode : "https://github.com/nasar06/clear-pixel-client",
      serverCode : "https://github.com/nasar06/clear-pixel-server",
      imageThree : "",
      imageFour : "",
    },
    { 
      id: 2,
      title: 'Crumb-Cooking Project', 
      description: `It is a niche website, a chef can serve different food items.
      •The owner can add his/her service. And he can see the comments on his service
      •Users can comment and feed. also, delete comments. And user can see other comments.
      •users can see all comments on the page "my review"
      `,
      alter: 'crumbCooking Project',
      image: `${crumbCooking}`,
      technologies : "React js, Tailwind CSS, Firebase, MongoDB, Express, Rest API's",
      projectLink : "https://crumb-cooking.web.app/",
      clientCode : "https://github.com/nasar06/crumb-cooking-client",
      serverCode : "https://github.com/nasar06/crumb-cooking-server",
      imageThree : "",
      imageFour : "",
    },
    { 
      id: 3,
      title: 'QUIZ HERO', 
      description: `This website is programming related Quiz. 
      `,
      alter: 'QUIZ HERO Project',
      image: `${QuizMockup}`,
      technologies : "React js, Tailwind CSS, react-router",
      projectLink : "https://jovial-rugelach-ac3f0b.netlify.app/",
      clientCode : "https://github.com/programming-hero-web-course2/b6-quiz-crackerz-nasar06",
      serverCode : "",
      imageThree : "",
      imageFour : "",
    },
  //   {
  //     id : 4,
  //     "projectName" : "Autolines",
  //     "imageOne" : "https://i.ibb.co/DgpBzTx/Screenshot-1.png",
  //     "imageTwo" : "https://i.ibb.co/QmqRWQt/Screenshot-2.png",
  //     "imageThree" : "https://i.ibb.co/jV6cwTk/Screenshot-3.png",
  //     "imageFour" : "https://i.ibb.co/jV6cwTk/Screenshot-3.png",
  //     "details" : "This is used car selling and buying website. people can sell and buy their cars easily. Also they can make payment via stripe. Admin will manage everything link payment etc.",
  //     "technologies" : "React js, Tailwind CSS, Firebase, MongoDB, Express, Rest API's",
  //     "projectLink" : "https://autolines-fcc93.web.app/"
  // },
    // { 
    //   id: 3,
    //   title: 'LoFo Project', 
    //   description: `Logistics and Forwarding website built using
    //   ReactJS to design and develop its front-end.`,
    //   alter: 'LoFo Project',
    //   image: `${Lofo}`,
    // },
    // { 
    //   id: 4,
    //   title: 'Startup Project', 
    //   description: `A website portfolio project for the Startup Dev Team
    //   built using MEVN stack to demonstrate the CRUD capabilities of the tech stack.`,
    //   alter: 'Startup Project',
    //   image: `${Startup}`,
    // },
    // { 
    //   id: 5,
    //   title: 'LaCalle Cafe', 
    //   description: `A website project for the La Calle Cafe business
    //   built using Wordpress and PHP with integrated SEO tools to help
    //   the business ramp up its prospects and lead generation.`,
    //   alter: 'Startup Project',
    //   image: `${Lacalle}`,
    // },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
              {project.description?.length > 100 ? project.description.slice(0, 200) + "..." : project.description}
                
              </p>
              {/* <span style={{color: 'blue', fontWeight: '700'}}>Details</span> */}
              <div style={{display:'flex', marginBottom: '5px'}}>
              <a href={project.projectLink} target="_blank" style={{textDecoration: 'none',marginRight: '5px', border: '1px solid white',padding: '2px 5px',borderRadius: '5px', color: 'black', fontWeight: '700'}}>Live Project</a>
              <a href={project.clientCode} target="_blank" style={{textDecoration: 'none',marginRight: '5px',border: '1px solid white',padding: '2px 5px',borderRadius: '5px', color: 'black', fontWeight: '700'}}>Client Code</a>
              {project.serverCode && 
              <a href={project.serverCode} target="_blank" style={{textDecoration: 'none',border: '1px solid white',padding: '2px 5px',borderRadius: '5px', color: 'black', fontWeight: '700'}}>Server Code</a>
              }
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
