// REACT ROUTER DOM
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// LAYOUT
import RootNav from "./Layouts/RootNav";

// PAGES
import Landing from "./Pages/Landing";
import Services from "./Pages/Services";

// COMPONENTS

// ERROR HANDLING & HELPERS
import Error from "./Pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      <Route index element={<Landing />} />
      <Route path="services" element={<Services />} />
      {/* ERROR HANDLING */}
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
