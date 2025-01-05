import './App.css';
import AboutUs from './components/organisms/aboutUs/aboutUs';
import Introduction from './components/organisms/introduction/introduction';
import OurServices from './components/organisms/ourServices/ourServices';
import OurWay from './components/organisms/ourWay/ourWay';
import RecentProjects from './components/organisms/recentProjects/recentProjects';
import WhyChooseUs from './components/organisms/whyChooseUs/whyChooseUs';
import Navigator from './layout/navigator';

function App() {
  return (
    <main className='h-screen w-screen text-black relative'>
      <Navigator>
        <>
          <Introduction />
          <AboutUs />
          <OurWay />
          <WhyChooseUs />
          <OurServices />
          <RecentProjects />
        </>
      </Navigator>
    </main>
  )
}

export default App
