import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Shield, Eye, EyeOff } from 'lucide-react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--bg)', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '40px 32px',
    }}>
      <div style={{
        width: 100, height: 100, borderRadius: '50%', background: '#ffffff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 48, boxShadow: '0 12px 32px rgba(45, 212, 191, 0.2)'
      }}>
        <Shield size={44} color="var(--accent)" strokeWidth={2.5} />
      </div>

      <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8, color: 'var(--text)' }}>เข้าสู่ระบบ O-GUARD</h1>
      <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 40 }}>Upskill to your dream jobs</p>

      <div style={{ width: '100%', marginBottom: 24 }}>
        <label style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 8, display: 'block' }}>USER ID</label>
        <input
          type="text" value={username} onChange={e => setUsername(e.target.value)}
          placeholder="ใส่เลขบัตรประชาชน / เบอร์โทร"
          style={{
            width: '100%', padding: '16px 20px', background: '#ffffff',
            border: '2px solid transparent', borderRadius: 16, color: 'var(--text)',
            fontSize: 16, outline: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
          }}
        />
      </div>

      <div style={{ width: '100%', marginBottom: 40 }}>
        <label style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 8, display: 'block' }}>PASSWORD</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{
              width: '100%', padding: '16px 20px', background: '#ffffff',
              border: '2px solid transparent', borderRadius: 16, color: 'var(--text)',
              fontSize: 16, outline: 'none', boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
            }}
          />
          <div onClick={() => setShowPw(!showPw)} style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
            {showPw ? <EyeOff size={20} color="var(--text-muted)" /> : <Eye size={20} color="var(--text-muted)" />}
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate('/')}
        style={{
          width: '100%', padding: '18px', border: 'none', borderRadius: 20,
          background: 'var(--accent-gradient)',
          color: '#ffffff', fontSize: 16, fontWeight: 800, letterSpacing: 0.5,
          boxShadow: '0 8px 24px rgba(45, 212, 191, 0.4)', cursor: 'pointer'
        }}
      >
        เข้าสู่ระบบ
      </button>

      <p style={{ marginTop: 24, fontSize: 14, color: 'var(--text-muted)' }}>
        ผู้ใช้ใหม่? <span style={{ color: 'var(--accent)', fontWeight: 700, cursor: 'pointer' }}>ลงทะเบียนด่วน</span>
      </p>
    </div>
  )
}
