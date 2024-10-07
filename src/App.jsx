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

// COMPONENTS

// ERROR HANDLING & HELPERS
import Error from "./Pages/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootNav />}>
      <Route index element={<Landing />} />
      {/* ERROR HANDLING */}
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
