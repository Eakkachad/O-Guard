import { useNavigate, useLocation } from 'react-router-dom'
import { Home, BookOpen, User, Trophy } from 'lucide-react'

const tabs = [
  { path: '/', icon: Home, label: 'หน้าหลัก' },
  { path: '/learning', icon: BookOpen, label: 'คอร์สเรียน' },
  { path: '/profile', icon: User, label: 'ตัวฉัน' },
  { path: '/idol', icon: Trophy, label: 'ไอดอล' },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
      width: '100%', maxWidth: 430, height: 70, background: '#111',
      borderTop: '1px solid #222', display: 'flex', alignItems: 'center',
      justifyContent: 'space-around', zIndex: 100,
    }}>
      {tabs.map(t => {
        const active = location.pathname === t.path
        const Icon = t.icon
        return (
          <div
            key={t.path}
            onClick={() => navigate(t.path)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
              padding: '8px 16px', cursor: 'pointer', transition: '.2s',
            }}
          >
            <Icon
              size={22}
              color={active ? '#e6e622' : '#666'}
              strokeWidth={active ? 2.5 : 1.5}
            />
            <span style={{
              fontSize: 10, fontWeight: active ? 600 : 500,
              color: active ? '#e6e622' : '#666',
            }}>{t.label}</span>
          </div>
        )
      })}
    </div>
  )
}
