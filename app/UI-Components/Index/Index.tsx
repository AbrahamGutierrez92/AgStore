import Banner from './Banner/page';
import Category from './Category/page';
import Hero from './Hero/page';
import Trending from './Trending/page';
import PopularProducts from './PopularProducts/page';
import Companies from './Companies/page';
import Blog from './Blogs/page';
import Fallow from './Follow/page';


const Index = () => {
  return (
    <div>
      <Hero />
      <Category/>
      <Trending/>
      <Banner/>
      <PopularProducts/>
      <Companies/>
      <Blog/>
      <Fallow/>
    </div>
  )
}

export default Index;