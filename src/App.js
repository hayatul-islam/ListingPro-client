
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ListingDetails from './Pages/ListingDetails/ListingDetails';
import AddListing from './Pages/AddListing/AddListing';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="listingDetails/:listingId" element={<ListingDetails />} />
          <Route path="addListing" element={<AddListing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
