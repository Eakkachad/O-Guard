import { Shield, Search } from 'lucide-react'

export default function TopBar() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '14px 16px', background: '#0a0a0a',
      borderBottom: '1px solid #1a1a1a', position: 'sticky', top: 0, zIndex: 50,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%', background: '#e6e622',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Shield size={16} color="#000" strokeWidth={2.5} />
        </div>
        <span style={{ fontWeight: 700, fontSize: 14, letterSpacing: 1 }}>O-GUARD</span>
      </div>
      <Search size={20} color="#666" strokeWidth={1.5} style={{ cursor: 'pointer' }} />
    </div>
  )
}
