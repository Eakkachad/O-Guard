import { useNavigate } from 'react-router-dom'
import {
  User, BookOpen, Award, Briefcase,
  ExternalLink, CheckCircle2, Clock, BarChart3
} from 'lucide-react'

export default function Profile() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Profile Header */}
      <div style={{ padding: '32px 20px 20px', textAlign: 'center', background: '#ffffff', borderRadius: '0 0 32px 32px', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', marginBottom: 24 }}>
        <div style={{
          width: 80, height: 80, borderRadius: '50%', background: '#f0fdfa',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 16px', boxShadow: '0 8px 24px rgba(45, 212, 191, 0.2)'
        }}>
          <User size={36} color="var(--accent)" strokeWidth={2.5} />
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)' }}>สมชาย รักเรียน</h2>
        <div style={{ display: 'inline-block', background: '#ecfdf5', padding: '4px 12px', borderRadius: 20, marginTop: 8 }}>
          <p style={{ fontSize: 12, color: 'var(--success)', fontWeight: 700 }}>🏆 อันดับ #1 บน O-guard</p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 12, padding: '0 20px', marginBottom: 32 }}>
        {[
          { icon: BookOpen, num: '4', label: 'เรียนจบ', color: '#38bdf8', bg: '#e0f2fe' },
          { icon: Award, num: '1', label: 'ใบรับรอง', color: '#10b981', bg: '#d1fae5' },
          { icon: Briefcase, num: '3', label: 'งานรอ Match', color: '#8b5cf6', bg: '#ede9fe' },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1, background: '#ffffff', borderRadius: 20, padding: '16px 10px',
            textAlign: 'center', boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
            display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
              <s.icon size={16} color={s.color} strokeWidth={2.5} />
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)' }}>{s.num}</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 600 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Skill Portfolio */}
      <div style={{ padding: '0 20px 12px' }}>
        <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>Skill Portfolio</h3>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4, fontWeight: 500 }}>O-guard ติดตามและยืนยันทักษะของคุณ</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '0 20px', marginBottom: 32 }}>
        {[
          { name: 'จัดการคลังสินค้าดิจิทัล (WMS)', verified: true },
          { name: 'ความปลอดภัยในโรงงาน (Safety)', verified: true },
          { name: 'Python for Data Automation', verified: true },
          { name: 'Programming PLC & Robot', verified: false },
          { name: 'Supply Chain Data Analytics', verified: false },
        ].map((skill, i) => (
          <span key={i} style={{
            padding: '8px 14px', borderRadius: 20, fontSize: 12, fontWeight: 700,
            display: 'flex', alignItems: 'center', gap: 6,
            background: skill.verified ? '#ecfdf5' : '#ffffff',
            color: skill.verified ? 'var(--success)' : 'var(--text-muted)',
            border: skill.verified ? '1px solid #d1fae5' : '1px solid #e2e8f0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
          }}>
            {skill.verified ? <CheckCircle2 size={14} strokeWidth={2.5} /> : <Clock size={14} />}
            {skill.name}
          </span>
        ))}
      </div>

      {/* Currently tracking */}
      <div style={{ padding: '0 20px 12px' }}>
        <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>กำลังติดตาม</h3>
      </div>
      <div
        onClick={() => navigate('/course/4')}
        style={{
          margin: '0 20px 24px', background: '#ffffff', borderRadius: 24,
          padding: '16px', cursor: 'pointer', display: 'flex', gap: 14, alignItems: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
        }}
      >
        <div style={{
          width: 52, height: 52, borderRadius: 16, background: '#f0fdfa',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <BookOpen size={24} color="var(--accent)" strokeWidth={2} />
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: 15, fontWeight: 800, marginBottom: 4, color: 'var(--text)' }}>Programming PLC & Robot</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <ExternalLink size={12} color="var(--text-muted)" />
            <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>DSD Online Training</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 10 }}>
            <div style={{ flex: 1, height: 8, background: '#f1f5f9', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ width: '70%', height: '100%', borderRadius: 4, background: 'var(--accent-gradient)' }} />
            </div>
            <span style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 800 }}>70%</span>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div style={{ padding: '0 20px 12px' }}>
        <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>ใบรับรอง</h3>
      </div>
      <div style={{
        margin: '0 20px 32px', background: '#ffffff', borderRadius: 24,
        padding: '16px', display: 'flex', gap: 14, alignItems: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
      }}>
        <div style={{
          width: 52, height: 52, borderRadius: 16, background: '#ecfdf5',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <Award size={24} color="var(--success)" strokeWidth={2} />
        </div>
        <div>
          <h4 style={{ fontSize: 15, fontWeight: 800, marginBottom: 4, color: 'var(--text)' }}>สาขาวิชาชีพโลจิสติกส์การค้า</h4>
          <p style={{ fontSize: 12, color: 'var(--success)', fontWeight: 700 }}>ได้รับการยืนยันการรับรอง</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
            <ExternalLink size={12} color="var(--text-dim)" />
            <span style={{ fontSize: 11, color: 'var(--text-dim)', fontWeight: 500 }}>TPQI e-Training • 15 มี.ค. 2026</span>
          </div>
        </div>
      </div>

      {/* Learning Activity Chart */}
      <div style={{ padding: '0 20px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <BarChart3 size={20} color="var(--text-muted)" />
        <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>เวลาที่ใช้เรียน</h3>
      </div>
      <div style={{
        margin: '0 20px 40px', background: '#ffffff', borderRadius: 24,
        padding: '24px', boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 100, marginBottom: 12 }}>
          {[30, 45, 20, 60, 40, 55, 35, 50, 25, 85, 40, 30].map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`, borderRadius: '4px 4px 0 0',
              background: i === 9 ? 'var(--accent)' : '#f1f5f9',
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-dim)', fontWeight: 600 }}>
          {['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'].map(m => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
      
      <div style={{ height: 40 }} />
    </div>
  )
}
