import './App.css'

function App() {
  return (
    <main className='h-screen w-screen bg-[#FFD4BA] text-black relative'>
      {/* header */}
      <section className='fixed top-5 flex w-full justify-between px-5'>
        <p>2024 BRANDBOOK</p>
        <p>www.m2studio.es</p>
        <p>DESIGN - BONNIE B.</p>
      </section>

      {/* main */}
      <section className='w-full h-full flex flex-col justify-center items-center gap-5'>
        <p>Icon</p>
        <h1>UNDER CONSTRUCTION</h1>
        <p className='max-w-[480px]'>We are currently working for this site to be availavailableIn the meantime, let's keep in touch:</p>
        <div className='flex gap-4'>
          <p>fb</p>
          <p>ig</p>
          <p>yt</p>
          <p>tw</p>
        </div>
        <p>info@m2studio.es</p>
      </section>

      {/* floating x */}
      <strong className='fixed top-1/2 left-5'>+</strong>
      <strong className='fixed top-1/2 right-5'>+</strong>

      {/* Footer */}
      <section className='fixed bottom-5 flex w-full justify-between px-5'>
        <p>m2 studio</p>
        <p>www.m2studio.es</p>
      </section>
      <p></p>
    </main>
  )
}

export default App
