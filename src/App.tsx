import './App.css';
import AboutUs from './components/organisms/aboutUs/aboutUs';
import DesignExperiences from './components/organisms/designExperiences/designExperiences';
import Footer from './components/organisms/footer/footer';
import Introduction from './components/organisms/introduction/introduction';
import OurPasion from './components/organisms/ourPasion/ourPasion';
import OurServices from './components/organisms/ourServices/ourServices';
import OurWay from './components/organisms/ourWay/ourWay';
import RecentProjects from './components/organisms/recentProjects/recentProjects';
import WhyChooseUs from './components/organisms/whyChooseUs/whyChooseUs';
import FormSection from './components/organisms/Forms/formSection';
import Navigator from './layout/navigator';

function App() {
  return (
    <main className='h-screen w-screen text-black relative'>
      <Navigator>
        <>
          <Introduction />
          <AboutUs />
          <OurWay />
          <OurPasion />
          <WhyChooseUs />
          <OurServices />
          <RecentProjects />
          <DesignExperiences />
          <FormSection />
          <Footer />
        </>
      </Navigator>
    </main>
  );
}

export default App;