import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Sts from './components/sts-part/sts';
import Section from './components/sections/section';
import Cards from './components/cards-part/cards';
import About from './components/about-part/about'
import Effortless from './components/effortless/effortless';
import Programs from './components/programs-part/programs';
import StudentsSay from './components/students-part/studentsSay';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Sts />
      <Section title={'best from others?'} span={'Why we are'} component={<Cards />} />
      <Section title={'Company'} span={'About'} component={<About />} />
      <Effortless />
      <Section title={'Programs'} span={'Our'} component={<Programs />} />
      <Section title={'our students Say'} span={'What'} component={<StudentsSay />} />
      <Footer />
    </div>
  )
}

export default App
