import HeadingTitle from '../components/Heading-title/HeadingTitle';
import Slider from '../components/slider/slider';
import Services from '../components/services/Services'
import BookSlider from '../components/book-slider/bookSlider';
import { books } from '../data/books';
const Home = () => {
    return ( <div className="home">
      <Slider />
      <Services />
      <HeadingTitle title="Most gifted" />
      <BookSlider  data={books} />
      <HeadingTitle title="Best seller" />
      <BookSlider  data={books} />
      <HeadingTitle title="Most wished for " />
      <BookSlider  data={books} />
   
        
    </div> );
}
 
export default Home;