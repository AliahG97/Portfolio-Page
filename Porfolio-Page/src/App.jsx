import React, { useState } from "react";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Aliah from "../assets/Images/Aliah.jpg"
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
      <h4>Welcome to my</h4>
    </section>
    <section>
      <h1>Portfolio Page</h1>
    </section>
    {/* <Aliah/> */}
    
   </main>
   <button type="button" class="btn btn-primary">View Portfolio</button>
   <Footer/>
    </>
  );
}

export default App;