import React from 'react';
import Project from '../components/projects/project'
import { Fullpage, Slide, HorizontalSlider } from 'fullpage-react';
import SEO from "../components/fragments/seo"
import Layout from '../components/layouts/app';

const fullPageOptions = {
    // for mouse/wheel events
    // represents the level of force required to generate a slide change on non-mobile, 10 is default
    scrollSensitivity: 7,
  
    // for touchStart/touchEnd/mobile scrolling
    // represents the level of force required to generate a slide change on mobile, 10 is default
    touchSensitivity: 7,
    scrollSpeed: 500,
    hideScrollBars: true,
    enableArrowKeys: true
  };
  
  const slides = [
    <Slide> <h1 className="bebas">Slide 1</h1> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa mollitia repellendus rerum voluptas quasi laboriosam similique, quidem maxime esse nesciunt soluta, cum cumque eos itaque. Distinctio tempora ullam dignissimos maiores.</p></Slide>,
    <Slide> Slide 2 </Slide>,
    <Slide> Slide 3 </Slide>
  ];
  fullPageOptions.slides = slides;

const Projects = () => {
    return (
        <Layout sticky={true}>
            <SEO title="Projcts"/>
            <Fullpage {...fullPageOptions} />
        </Layout>
    );
}

export default Projects;
