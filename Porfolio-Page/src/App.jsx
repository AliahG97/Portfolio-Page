import React, { useState } from "react";
import Header from "./components/Header";
// import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import Welcome from './components/Welcome'

function App() {
  // const [pages] = useState([
  //   {
  //     name: "About"
  //   },
  //   { name: "Portfolio" },
  //   { name: "Contact" },
  //   {
  //     name: "Resume"
  //   }
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0]);
  // {/* <Header>
  //       <Nav
  //         pages={pages}
  //         setCurrentPage={setCurrentPage}
  //         currentPage={currentPage}
  //       ></Nav>
  //     </Header>
  //     <main>
  //       <Page currentPage={currentPage}></Page>
  //     </main>
  //     <Footer /> */}
  return (
 
    
    <>
  <Header />

   <main>
    <section>
      <h1>About</h1>
    </section>
    <section>
      <h1>Portfoliio</h1>
    </section>
   </main>
   <button type="button" class="btn btn-primary">Primary</button>
    </>
  );
}

export default App;