import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { TransitionGroup, CSSTransition } from "react-transition-group";
// import Loading from "./components/Loading";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

// const About = React.lazy(() =>
//   Promise.all([
//     import(/* webpackPrefetch: true */ "./pages/About"),
//     new Promise((resolve) => setTimeout(resolve, 100)), // ensures minimal delay
//   ]).then(([module]) => module)
// );

// const About = React.lazy(() =>
//   import(
//     /* webpackPrefetch: true */
//     /* webpackChunkName : "Prefetch" */ "./pages/About"
//   )
// );

// const Services = React.lazy(() =>
//   Promise.all([
//     import(/* webpackPrefetch: true */ "./pages/Services"),
//     new Promise((res) => setTimeout(res, 50)),
//   ]).then(([module]) => module)
// );

// const Contact = React.lazy(() =>
//   Promise.all([
//     import(/* webpackPrefetch: true */ "./pages/Contact"),
//     new Promise((res) => setTimeout(res, 100)),
//   ]).then(([module]) => module)
// );

function App() {
  let location = useLocation();

  return (
    <>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}

export default App;
