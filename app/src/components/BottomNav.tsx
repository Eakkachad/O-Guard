import { useNavigate, useLocation } from 'react-router-dom'
import { Home, BookOpen, User, Sparkles } from 'lucide-react'

const tabs = [
  { path: '/', icon: Home, label: 'หน้าหลัก' },
  { path: '/gap', icon: Sparkles, label: 'วิเคราะห์ Gap' },
  { path: '/learning', icon: BookOpen, label: 'คอร์สเรียน' },
  { path: '/profile', icon: User, label: 'ตัวฉัน' },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: '50%', transform: 'translateX(-50%)',
      width: '100%', maxWidth: 430, height: 80, background: '#ffffff',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.04)', borderRadius: '24px 24px 0 0',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-around', zIndex: 100, paddingBottom: 10
    }}>
      {tabs.map(t => {
        const active = location.pathname === t.path
        const Icon = t.icon
        return (
          <div
            key={t.path}
            onClick={() => navigate(t.path)}
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
              padding: '10px 16px', cursor: 'pointer', transition: '.2s',
            }}
          >
            <Icon
              size={24}
              color={active ? 'var(--accent)' : 'var(--text-dim)'}
              strokeWidth={active ? 2.5 : 2}
            />
            <span style={{
              fontSize: 10, fontWeight: active ? 700 : 500,
              color: active ? 'var(--accent)' : 'var(--text-dim)',
            }}>{t.label}</span>
          </div>
        )
      })}
    </div>
  )
}
