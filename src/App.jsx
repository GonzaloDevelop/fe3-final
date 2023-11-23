import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PageTitle from './Components/PageTitle'
import Contact from './Routes/Contact'
import Home from './Routes/Home'
import NotFoundPage from './Routes/NotFoundPage'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Header from './Components/Header'
import GlobalContextProvider from './Components/context/GlobalContextProvider'
import Footer from './Components/Footer'
function App() {
  return (
    <BrowserRouter>
     <GlobalContextProvider>
        <PageTitle />
          <div className="flex flex-col min-h-screen">
            <Header />  
                  <main className="flex-grow">
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path="/favs" element={<Favs />} />
                      <Route path="/details/:id" element={<Detail />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="*" element={<NotFoundPage />} />
                      </Routes>
                  </main>
            <Footer />
          </div>
        </GlobalContextProvider>
    </BrowserRouter>
  )
}

export default App
