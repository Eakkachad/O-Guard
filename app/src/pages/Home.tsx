import { useNavigate } from 'react-router-dom'
import {
  Compass, BellRing, Flame,
  BookOpen, Building2, ChevronRight, Zap
} from 'lucide-react'

const updateFeed = [
  {
    type: 'job',
    tag: 'NEW 🔥',
    title: 'รับสมัคร: Automation Engineer',
    company: 'SCG Mechatronics (ระยอง)',
    salary: '25,000 - 35,000 THB',
    desc: 'เปิดรับด่วนประจำศูนย์ EEC มีระบบ Fast-track สำหรับผู้ที่ผ่านการ Verify จาก O-Guard',
    route: '/course/1',
    color: 'var(--accent)',
    bg: '#f0fdfa'
  },
  {
    type: 'course',
    tag: 'HOT UPDATE ⚡',
    title: 'คอร์สใหม่: WMS Data Analytics',
    provider: 'TPQI e-Training',
    desc: 'ทักษะที่กำลังเป็นที่ต้องการสูงสุดในระเบียงเศรษฐกิจพิเศษภาคตะวันออก',
    route: '/course/2',
    color: '#f59e0b',
    bg: '#fffbeb'
  },
  {
    type: 'news',
    tag: 'ANNOUNCEMENT 📢',
    title: 'O-Guard จับมือ 5 บริษัทโลจิสติกส์',
    desc: 'ขยายโควต้าการรับเข้าทำงานตรงสำหรับสมาชิกที่มีคะแนน Verified Skills เกิน 80%',
    route: '#',
    color: '#3b82f6',
    bg: '#eff6ff'
  }
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Header Profile / Welcome */}
      <div style={{ padding: '24px 20px 20px', background: '#ffffff', borderBottom: '1px solid #f1f5f9', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)' }}>สวัสดี, สมชาย 👋</h2>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', marginTop: 4, fontWeight: 500 }}>วันนี้มีอัปเดตใหม่ที่อาจเปลี่ยนชีวิตคุณ</p>
      </div>

      {/* Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, padding: '20px 20px 0' }}>
        {[
          { icon: Compass, label: 'ตั้งเป้าหมาย', action: () => navigate('/assessment') },
          { icon: Zap, label: 'ทดสอบทักษะ', action: () => navigate('/learning') },
        ].map((btn, i) => (
          <div key={i} onClick={btn.action} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
            padding: '20px 12px', background: '#ffffff', borderRadius: 24,
            cursor: 'pointer', boxShadow: '0 8px 24px rgba(45, 212, 191, 0.06)',
            border: '1px solid #f1f5f9'
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: 16, background: '#f0fdfa',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <btn.icon size={24} color="var(--accent)" strokeWidth={2} />
            </div>
            <span style={{ fontSize: 12, fontWeight: 800, color: 'var(--text)', textAlign: 'center', lineHeight: 1.4, whiteSpace: 'pre-line' }}>{btn.label}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: '32px 20px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <BellRing size={20} color="var(--accent)" /> อัปเดตล่าสุด
        </h3>
      </div>

      {/* News / Update Feed */}
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {updateFeed.map((item, i) => (
          <div key={i} onClick={() => item.route !== '#' && navigate(item.route)} style={{
            background: '#ffffff', borderRadius: 24, padding: '20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.04)', cursor: item.route !== '#' ? 'pointer' : 'default',
            border: '1px solid #f8fafc', position: 'relative', overflow: 'hidden'
          }}>
            {/* Top Tag */}
            <div style={{ display: 'inline-block', background: item.bg, padding: '4px 10px', borderRadius: 12, marginBottom: 16 }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: item.color }}>{item.tag}</span>
            </div>

            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14, background: item.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
              }}>
                {item.type === 'job' && <Building2 size={24} color={item.color} />}
                {item.type === 'course' && <BookOpen size={24} color={item.color} />}
                {item.type === 'news' && <Flame size={24} color={item.color} />}
              </div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)', marginBottom: 6 }}>{item.title}</h4>
                
                {item.company && (
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 4 }}>{item.company}</div>
                )}
                {item.provider && (
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 4 }}>{item.provider}</div>
                )}
                {item.salary && (
                  <div style={{ fontSize: 13, color: 'var(--success)', fontWeight: 800, marginBottom: 8 }}>{item.salary}</div>
                )}
                
                <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            </div>

            {item.route !== '#' && (
              <div style={{ 
                marginTop: 16, paddingTop: 16, borderTop: '1px solid #f1f5f9', 
                display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4,
                color: 'var(--accent)', fontWeight: 700, fontSize: 13 
              }}>
                รายละเอียด <ChevronRight size={16} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ height: 40 }} />
    </div>
  )
}
