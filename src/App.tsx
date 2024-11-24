import './App.css';
import Navigator from './layout/navigator';
function App() {
  return (
    <main className='h-screen w-screen text-black relative'>
      <Navigator>
        <>
          <div className='w-full h-screen bg-white' />
          <div className='w-full h-screen bg-[#232C33]' />
          <div className='w-full h-screen bg-black' />
        </>
      </Navigator>
    </main>
  )
}

export default App
