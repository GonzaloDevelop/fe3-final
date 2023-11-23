import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageTitle from './Components/PageTitle'
import Contact from './Routes/Contact'
import Home from './Routes/Home'
import NotFoundPage from './Routes/NotFoundPage'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Header from './Components/Header'
import FavsLogicContextProvider from './Components/context/FavsLogicContextProvider'
import APIContextProvider from './Components/context/APIContextProvider'
import ThemeContextProvider from './Components/context/ThemeContextProvider'
import Footer from './Components/Footer'
function App() {
  return (
    <BrowserRouter>
    <PageTitle />
      <ThemeContextProvider>
        <div className="flex flex-col min-h-screen">
          <Header />  
            <APIContextProvider>
              <FavsLogicContextProvider>
                <main className="flex-grow">
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/favs" element={<Favs />} />
                    <Route path="/details/:id" element={<Detail />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
              </FavsLogicContextProvider>
            </APIContextProvider>
          <Footer />
        </div>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
