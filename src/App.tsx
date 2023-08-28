import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingCardHolder from "./pages/LandingCardHolder";
import LandingCardHolder1 from "./pages/LandingCardHolder1";
import LandingCardHolder2 from "./pages/LandingCardHolder2";
import LandingCardHolder3 from "./pages/LandingCardHolder3";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/landing-card-holder":
        title = "";
        metaDescription = "";
        break;
      case "/landing-card-holder1":
        title = "";
        metaDescription = "";
        break;
      case "/landing-card-holder2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingCardHolder />} />
      <Route path="/landing-card-holder" element={<LandingCardHolder1 />} />
      <Route path="/landing-card-holder1" element={<LandingCardHolder2 />} />
      <Route path="/landing-card-holder2" element={<LandingCardHolder3 />} />
    </Routes>
  );
}
export default App;
