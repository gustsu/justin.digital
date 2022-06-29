import Container from 'react-bootstrap/Container';
import Project from "../components/Project";
import Subheader from  "../components/Subheader";
import ProjectImageCheckMeowt from '../assets/project-checkmeowt.png';
import ProjectImageJNT from '../assets/project-jntcreative.png';
import ProjectImageThirtyDaysOfVue from '../assets/project-v-calculator.png';
import ProjectImageCoinprice from '../assets/project-coinprice.png';
import ProjectImageSpoonAndLeaf from '../assets/project-spoonandleaf.png';
import ProjectImageRalphTewArt from '../assets/project-ralphtewart.png';
import './ProjectSection.scss';

export default function ProjectSection() {
  return (
    <div className="project-section pos-rel" id="project-section">
        <Container>
            <Subheader text="Projects"/>
            <Project 
              name="Check Meowt"
              image={ProjectImageCheckMeowt}
              link="https://github.com/gustsu/check-meowt"
              desc="Check Meowt is a simple open source image gallery of cat photos. Users can submit pull requests to add their cats to the gallery. It was created for hacktoberfest 2019."
            />
            <Project 
              name="JNT Creative"
              image={ProjectImageJNT}
              link="https://www.jntcreative.com"
              desc="JNT Creative LLC is my personal Web Design Business. Founded in 2017, JNT Creative works with small and local businesses to create websites, mobile apps, and more."
              reverse
            />
            <Project 
              name="30 Days Of Vue"
              image={ProjectImageThirtyDaysOfVue}
              link="https://github.com/gustsu/30-days-of-vue"
              desc="In 2019 I challenged myself to learn Vue.js over the course of 30 days. I started with Vue Mastery's intro courses and followed the beginner's path until I gained enough confidence to start building my own projects. During this time I learned a ton about Vue and JavaScript frameworks. I completed a Vue cryptocurrency app, Vue weather app, and Vue calculator."
            />
            <Project 
              name="Coinprice"
              image={ProjectImageCoinprice}
              link="https://coinprice.netlify.app/"
              desc="Coinprice is a mock cryptocurrency app written in Vue.js. Users can login and view their cryptocurrency portfolio balance, current prices, price trends, and read cryptocurrency news."
              reverse
            />
            <Project
              name="Spoon &amp; Leaf"
              image={ProjectImageSpoonAndLeaf}
              link="https://www.spoonandleaf.com"
              desc="Spoon &amp; Leaf is a matcha green tea company created by myself and my wife as an exercise in working with Woocommerce, one of the biggest ecommerce Wordpress plugins in the world. This also served as a gateway into using prebuild wordpress themes to quickly produce a good looking website."
            />
            <Project 
              name="Ralph Tew Art"
              image={ProjectImageRalphTewArt}
              link="https://www.ralphtewart.com"
              desc="Ralph Tew Art is a Shopify site I created for my father. The site showcases his art and allows him to easily sell art, keep an eye on analytics, modify prices, and much more without needing any coding skills."
              reverse
            />
        </Container>
    </div>
  )
}
