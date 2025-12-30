import { BrowserRouter, Routes, Route } from "react-router-dom"
import FindJobs from "./pages/FindJobs"
import MainLayout from "./components/layout/MainLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<FindJobs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
