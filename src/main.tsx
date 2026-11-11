import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./pages/RootLayout.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";


createRoot(document.getElementById("root")!).render(
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    enableSystem={false}
    disableTransitionOnChange
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<App />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
);