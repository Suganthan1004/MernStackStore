import { Box,useColorModeValue } from "@chakra-ui/react";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.200", "blackAlpha.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
