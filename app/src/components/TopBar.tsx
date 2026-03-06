import { Shield, Search } from 'lucide-react'

export default function TopBar() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '16px 20px', background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)', /* Glass effect */
      position: 'sticky', top: 0, zIndex: 50,
      borderBottom: '1px solid rgba(0,0,0,0.02)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 12, background: 'var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(45, 212, 191, 0.3)'
        }}>
          <Shield size={18} color="#fff" strokeWidth={2.5} />
        </div>
        <span style={{ fontWeight: 800, fontSize: 16, letterSpacing: 0.5, color: 'var(--text)' }}>O-GUARD</span>
      </div>
      <Search size={22} color="var(--text-muted)" strokeWidth={2} style={{ cursor: 'pointer' }} />
    </div>
  )
}
