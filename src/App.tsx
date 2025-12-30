import { BrowserRouter, Routes, Route } from "react-router-dom"
import FindJobs from "./pages/FindJobs"
import MainLayout from "./components/layout/MainLayout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<FindJobs />} />
          <Route
            path="/companies"
            element={<div>Top Companies Page</div>}
          />

          <Route
            path="/tracker"
            element={<div>Job Tracker Page</div>}
          />

          <Route
            path="/calendar"
            element={<div>My Calendar Page</div>}
          />

          <Route
            path="/documents"
            element={<div>Documents Page</div>}
          />

          <Route
            path="/messages"
            element={<div>Messages Page</div>}
          />

          <Route
            path="/notifications"
            element={<div>Notifications Page</div>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
