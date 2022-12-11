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
import Lofo from '../../assets/recentprojects/lofo.png';
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
      page. And users can delete any product from there.`,
      alter: 'Clear-Pixel',
      image: `${clearPixel}`,
    },
    { 
      id: 2,
      title: 'Crumb-Cooking Project', 
      description: `It is a niche website, a chef can serve different food items.
      •The owner can add his/her service. And he can see the comments on his service
      •Users can comment and feed. also, delete comments. And user can see other comments.
      `,
      alter: 'crumbCooking Project',
      image: `${crumbCooking}`,
    },
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
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
