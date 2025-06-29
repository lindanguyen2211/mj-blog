import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
      <Header />
      <Navbar />
      <main id="main-section">
        <Sidebar/>
      </main>
    </>
  )
}

export default App
