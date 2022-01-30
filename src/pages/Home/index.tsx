import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import fourthContent from "../../content/4thblock.json";
import fifthContent from "../../content/5thblock.json";
import sixthContent from "../../content/6thblock.json";
import seventhContent from "../../content/7thblock.json";



const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="header"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="squishboi.gif"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={fourthContent.title}
        content={fourthContent.text}
        icon="waving.svg"
        id="product"
      />
      <ContentBlock
        type="right"
        title={fifthContent.title}
        content={fifthContent.text}
        icon="waving.svg"
        id="product"
      />
      <ContentBlock
        type="left"
        title={sixthContent.title}
        content={sixthContent.text}
        icon="waving.svg"
        id="product"
      />
      <ContentBlock
        type="right"
        title={seventhContent.title}
        content={seventhContent.text}
        icon="waving.svg"
        id="product"
      />
    </Container>
  );
};

export default Home;
