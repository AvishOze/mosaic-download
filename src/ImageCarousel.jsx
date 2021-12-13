import { makeStyles } from '@mui/styles';

import Carousel from 'react-material-ui-carousel';

import img1 from './images/1.jpeg';
import img2 from './images/2.jpg';
import img3 from './images/3.png';
import img4 from './images/4.jpg';
import img5 from './images/5.png';
import img6 from './images/6.png';
import img7 from './images/7.png';
import img8 from './images/8.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const useStyles = makeStyles({
  carousel: {
    width: 1000,
    height: 400,
    textAlign: 'center'
  },
  carouselItem: {
    height: 400,
  },
});

export default function ImageCarousel() {
  const classes = useStyles();

  return (
    <Carousel
      autoPlay={true}
      interval={4000}
      animation="fade"
      indicators={false}
      NavButton={() => ''}
      stopAutoPlayOnHover={false}
      className={classes.carousel}
    >
      {images.map((v, i) => <img key={i} src={v} alt={`Screenshot ${i}`} className={classes.carouselItem} />)}
    </Carousel>
  );
}
