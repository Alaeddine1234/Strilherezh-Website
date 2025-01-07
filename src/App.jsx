import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Your main content goes here */}
      </main>
      <Footer />
    </div>
  )
}

export default App