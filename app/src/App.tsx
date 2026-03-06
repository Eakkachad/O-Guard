import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SkillGap from './pages/SkillGap'
import Learning from './pages/Learning'
import Assessment from './pages/Assessment'
import CoursePage from './pages/CoursePage'
import JobOffer from './pages/JobOffer'
import BottomNav from './components/BottomNav'
import TopBar from './components/TopBar'

function AppLayout() {
  const location = useLocation()
  const hideNav = ['/login', '/assessment', '/job-offer'].some(p => location.pathname.startsWith(p))
  const hideTop = ['/login', '/assessment', '/job-offer'].some(p => location.pathname.startsWith(p))

  return (
    <>
      {!hideTop && <TopBar />}
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: hideNav ? 0 : 70 }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/gap" element={<SkillGap />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/job-offer/:id" element={<JobOffer />} />
        </Routes>
      </div>
      {!hideNav && <BottomNav />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
