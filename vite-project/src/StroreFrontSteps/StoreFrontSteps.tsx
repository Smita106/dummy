import styles from './StoreFrontSteps.module.css';
import ProgressSteps from './ProgressStep/ProgressSteps';
import { CheckIcon } from './icons/icons';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect, useState } from 'react';
const StoreFrontSteps = () => {

   const desc =[
      {
         "heading":"Select A Layout",
         "description":"Customizing your store's layout is a snap, with a wide range of color schemes and designs at your fingertips. All layouts are meticulously crafted to provide a visually stunning experience, keeping your customers engaged and encouraging repeat buying.",
         "pointone":"Customizable scene templates",
         "pointtwo":"Multiple variations",
      },
      {
         "heading":" Brand Element",
         "description":"Own your virtual store with a powerful brand presence. Customize your products with your brand logo. Effortlessly incorporate your brand logo, color, and fonts wherever you desire. Leave a memorable impression of your brand on your customers and enhance overall brand visibility.",
         "pointone":"Increase Brand visibility",
         "pointtwo":"Customise product cards",
      },
      {
         "heading":"Upload your catalogue",
         "description":"Upload your product catalog in 3D effortlessly using a simple Excel sheet. You have the flexibility to select the product you want to highlight more. Add offers to any product you want, and communicate with your audience with promotional content within the metaverse.",
         "pointone":"Highlight your hero products",
         "pointtwo":"Showcase promotional content",
      },
      {
         "heading":"Place your products",
         "description":"Effortlessly optimize your product placements for maximum visibility with our Auto Placement feature, equipped with an algorithm that provides optimal display suggestions. If you're still not satisfied, easily arrange your products manually with just a few clicks.",
         "pointone":"A simple click to place",
         "pointtwo":"Manual and Auto placements",
      },
      {
         "heading":"Place your contents",
         "description":"Tailor your product content to your target audience, enhancing customer engagement and boosting sales. Highlighting the right information in your metaverse store ensures that customers are well-informed and more likely to make a purchase.",
         "pointone":"Showcase promotional videos",
         "pointtwo":"Increase your brand visibility",
      },
      {
         "heading":"Setup Visitor Experience",
         "description":"Easily launch your Metaverse store with just one click. Create a shareable link to provide your cherished customers with an exceptional shopping journey. Effortlessly share this link, allowing them to dive into your virtual realm and explore their favorite products. Tailor your customers' entry point for a personalized touch.",
         "pointone":"Customise customer entry point",
         "pointtwo":"One-click Publish & Share",
      }
   ]
  

   gsap.registerPlugin(ScrollTrigger);
   useEffect(() => {
  const cards = document.querySelectorAll(`.${styles.stepDesc}`);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: `.${styles.heroImage}`,
      start: "top center",
      end: "bottom center",
      scrub: true,
      markers:true,
    },
  });

  cards.forEach((card) => {
    tl.to(card, {
      y: "-100%",
      opacity: 0,
      duration: 0.5,
    });
  });

}, []);
  
   
  
    return <div>
        <div className={styles.heroImage} >
           <div className={styles.steps}>
              <ProgressSteps />
           </div>
           <div className={styles.cardContainer}>
            {desc.map((item,index) => {
               return <div key={index} className={styles.stepDesc}>
                  <h3>{item.heading}</h3>
                  <p>{item.description}</p>
                  <div className={styles.Points}>
                <CheckIcon />
                <p>{item.pointone}</p>
                </div>
               <div className={styles.Points}>
                <CheckIcon />
                <p>{item.pointtwo}</p>
                </div>
               </div>
            }
            )}
           </div>
         </div>
        
        </div>
}

export default StoreFrontSteps;