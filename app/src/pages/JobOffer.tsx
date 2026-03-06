import { useParams, useNavigate } from 'react-router-dom'
import {
  CheckCircle, Building2, MapPin, Briefcase, ChevronRight, Sparkles
} from 'lucide-react'

// Mock data referencing the same jobs
const careerPaths: Record<string, any> = {
  '1': { role: 'Automation & Robotics Technician', company: 'SCG Mechatronics', salary: '20,000-30,000', loc: 'EEC (ระยอง)' },
  '2': { role: 'Digital Warehouse Supervisor', company: 'WHA Logistics Hub', salary: '25,000-35,000', loc: 'EEC (ชลบุรี)' },
}

export default function JobOffer() {
  const { id } = useParams()
  const navigate = useNavigate()
  const job = careerPaths[id || '2'] || careerPaths['2']

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--bg)', padding: '40px 20px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    }}>
      {/* Celebration Icon */}
      <div style={{ position: 'relative', marginBottom: 32 }}>
        <div style={{
          width: 100, height: 100, borderRadius: '50%', background: 'var(--success)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 12px 32px rgba(16, 185, 129, 0.3)', zIndex: 2, position: 'relative'
        }}>
          <CheckCircle size={48} color="#ffffff" strokeWidth={2.5} />
        </div>
        {/* Decorative sparkles */}
        <Sparkles size={24} color="#f59e0b" style={{ position: 'absolute', top: -10, right: -20 }} />
        <Sparkles size={20} color="#38bdf8" style={{ position: 'absolute', bottom: -10, left: -20 }} />
      </div>

      <h1 style={{ fontSize: 28, fontWeight: 800, color: 'var(--text)', textAlign: 'center', marginBottom: 8 }}>ยินดีด้วย! ทักษะคุณครบ 100%</h1>
      <p style={{ fontSize: 15, color: 'var(--text-muted)', textAlign: 'center', marginBottom: 40, lineHeight: 1.6 }}>
        ระบบ O-Guard ส่งโปรไฟล์ที่ได้รับการ Verify ของคุณไปยังบริษัทพันธมิตรเรียบร้อยแล้ว และได้รับการตอบรับ!
      </p>

      {/* Offer Card */}
      <div style={{
        width: '100%', background: '#ffffff', borderRadius: 24, padding: '24px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.06)', marginBottom: 40
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 16, background: '#f0fdfa',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Building2 size={28} color="var(--accent)" strokeWidth={2} />
          </div>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>{job.role}</h3>
            <span style={{ fontSize: 14, color: 'var(--text-muted)', fontWeight: 600 }}>{job.company}</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
          <div style={{ background: '#f8fafc', padding: '12px', borderRadius: 12 }}>
            <span style={{ fontSize: 11, color: 'var(--text-dim)', display: 'block', marginBottom: 4 }}>ฐานเงินเดือน</span>
            <span style={{ fontSize: 14, fontWeight: 800, color: 'var(--success)' }}>฿ {job.salary}</span>
          </div>
          <div style={{ background: '#f8fafc', padding: '12px', borderRadius: 12 }}>
            <span style={{ fontSize: 11, color: 'var(--text-dim)', display: 'block', marginBottom: 4 }}>สถานที่ทำงาน</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <MapPin size={14} color="var(--text-muted)" />
              <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{job.loc}</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#ecfdf5', padding: '12px', borderRadius: 12, border: '1px solid #d1fae5' }}>
          <Briefcase size={16} color="var(--success)" />
          <span style={{ fontSize: 13, color: 'var(--success)', fontWeight: 700 }}>พร้อมนัดสัมภาษณ์ทันที!</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <button
          onClick={() => navigate('/')}
          style={{
            width: '100%', padding: '18px', border: 'none', borderRadius: 20,
            background: 'var(--accent-gradient)',
            color: '#ffffff', fontSize: 16, fontWeight: 800,
            boxShadow: '0 8px 24px rgba(45, 212, 191, 0.4)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
          }}
        >
          รับข้อเสนอ
        </button>
        
        <button
          onClick={() => navigate('/learning')}
          style={{
            width: '100%', padding: '18px', border: '2px solid #e2e8f0', borderRadius: 20,
            background: '#ffffff',
            color: 'var(--text-muted)', fontSize: 16, fontWeight: 700,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8
          }}
        >
          หาคอร์สอัปเปอร์เลเวลต่อ <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
