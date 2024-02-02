import { Suspense, useState } from "react";
import Website from "./pages/Website";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Properties from "./pages/Properties";

import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import UserDetailContext from "./context/UserDetailContext";
import Bookings from "./pages/Bookings";
import Favorites from "./pages/Favorites";

export default function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favorites: [],
    bookings: [],
    token: null,
  });

  return (
    <div className="relative md:mb-0 mb-10">
      <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider>
            <ToastContainer style={{ fontWeight: "600" }} />
            <BrowserRouter>
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route element={<Layout />}>
                    <Route path="/" element={<Website />} />
                    <Route path="/properties">
                      <Route index element={<Properties />} />
                      <Route path=":propertyId" element={<Property />} />
                    </Route>
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/favorites" element={<Favorites />} />
                  </Route>
                </Routes>
              </Suspense>
            </BrowserRouter>
          </MantineProvider>
        </QueryClientProvider>
      </UserDetailContext.Provider>
    </div>
  );
}
