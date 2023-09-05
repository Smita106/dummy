import styles from './StoreFrontSteps.module.css';
import ProgressSteps from './ProgressStep/ProgressSteps';
import { CheckIcon } from './icons/icons';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from 'react';
const StoreFrontSteps = () => {
   const desc =[
      {
         "heading":"Select A Layout",
         "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
         "heading":"Select A Layout",
         "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
         "heading":"Select A Layout",
         "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
         "heading":"Select A Layout",
         "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
         "heading":"Select A Layout",
         "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
         "heading":"Select A Layout",
         "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
   ]
  

   gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
  const cards = document.querySelectorAll(`.${styles.stepDesc}`);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: `.${styles.cardContainer}`,
      start: "top center",
      end: "bottom center",
      scrub: true,
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
                <p>Important Point</p>
                </div>
               <div className={styles.Points}>
                <CheckIcon />
                <p>Important Point</p>
                </div>
               </div>
            }
            )}
           </div>
         </div>
       
        </div>
}

export default StoreFrontSteps;