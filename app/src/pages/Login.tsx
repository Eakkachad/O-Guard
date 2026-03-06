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
      minHeight: '100vh', background: '#0a0a0a', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '40px 32px',
    }}>
      <div style={{
        width: 80, height: 80, borderRadius: '50%', background: '#e6e622',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 40,
      }}>
        <Shield size={36} color="#000" strokeWidth={2} />
      </div>

      <div style={{ width: '100%', marginBottom: 20 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: '#888', letterSpacing: 1, marginBottom: 6, display: 'block' }}>USERNAME</label>
        <input
          type="text" value={username} onChange={e => setUsername(e.target.value)}
          placeholder="ใส่ชื่อผู้ใช้"
          style={{
            width: '100%', padding: '14px 16px', background: '#1a1a1a',
            border: '1px solid #333', borderRadius: 8, color: '#fff',
            fontSize: 15, outline: 'none',
          }}
        />
      </div>

      <div style={{ width: '100%', marginBottom: 32 }}>
        <label style={{ fontSize: 12, fontWeight: 600, color: '#888', letterSpacing: 1, marginBottom: 6, display: 'block' }}>PASSWORD</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}
            placeholder="••••••"
            style={{
              width: '100%', padding: '14px 16px', background: '#1a1a1a',
              border: '1px solid #333', borderRadius: 8, color: '#fff',
              fontSize: 15, outline: 'none',
            }}
          />
          <div onClick={() => setShowPw(!showPw)} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
            {showPw ? <EyeOff size={18} color="#555" /> : <Eye size={18} color="#555" />}
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate('/')}
        style={{
          width: '100%', padding: '16px', border: 'none', borderRadius: 12,
          background: 'linear-gradient(135deg, #c8e622, #e6e622)',
          color: '#000', fontSize: 16, fontWeight: 700, letterSpacing: 1,
        }}
      >
        เข้าสู่ระบบ
      </button>

      <p style={{ marginTop: 20, fontSize: 13, color: '#555' }}>
        ยังไม่มีบัญชี? <span style={{ color: '#e6e622', cursor: 'pointer' }}>สมัครสมาชิก</span>
      </p>
    </div>
  )
}
