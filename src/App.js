import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import './App.scss';

export default function App() {
  return (
    <div className='app'>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}