import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Main from "./pages/Main";
import MyHistory from "./pages/MyHistory";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import InterestSelection from "./pages/InterestSelection";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

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
      case "/myhistory":
        title = "";
        metaDescription = "";
        break;
      case "/itemdetailspage":
        title = "";
        metaDescription = "";
        break;
      case "/searchresultspage":
        title = "";
        metaDescription = "";
        break;
      case "/interestselection":
        title = "";
        metaDescription = "";
        break;
      case "/signuppage":
        title = "";
        metaDescription = "";
        break;
      case "/loginpage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/myhistory" element={<MyHistory />} />
      <Route path="/itemdetailspage" element={<ItemDetailsPage />} />
      <Route path="/searchresultspage" element={<SearchResultsPage />} />
      <Route path="/interestselection" element={<InterestSelection />} />
      <Route path="/signuppage" element={<SignUpPage />} />
      <Route path="/loginpage" element={<LoginPage />} />
    </Routes>
  );
}
export default App;
