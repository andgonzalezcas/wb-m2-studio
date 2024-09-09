import './App.css';
import m2Icon from "./assets/m2studio/icon.svg";
import SocialList from './components/socialList';
import ContentWrapper from './layout/contentWrapper';
import picture from './assets/pictures/background.png';
import lightLogo from './assets/m2studio/light_logo.svg'
function App() {
  return (
    <main className='h-screen w-screen flex justify-center text-black relative'>
      <div className='w-full flex'>
        <div className='h-screen w-full xl:w-5/12'>
          <ContentWrapper>
            {/* main */}
            <section className='w-full h-full flex flex-col justify-center items-center gap-8 px-10'>
              <img src={m2Icon} alt='m2 studio icon' />
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-medium'>UNDER CONSTRUCTION</h1>
                <p className='max-w-[480px] text-lg font-light'>We are currently working for this site to be availavailable In the meantime, let's keep in touch:</p>
              </div>
              <SocialList />
              <p className='text-lg font-light'>info@m2studio.es</p>
            </section>
          </ContentWrapper>
        </div>

        <div className='h-screen hidden xl:block xl:w-7/12 relative'>
          <img
            src={picture}
            alt="m2 studio background"
            className='h-full object-cover'
          />
          <img
            src={lightLogo}
            alt='m2 studio light logo'
            className='absolute top-10 right-10'
          />
        </div>
      </div>
    </main>
  )
}

export default App
