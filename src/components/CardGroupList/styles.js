import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Container = styled(Carousel)`
  margin-top: 3vh;
  height: 80vh;
  .carousel {
    height: 80vh;
  }
`;