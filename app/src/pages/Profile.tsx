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
      <div style={{ padding: '20px 16px', textAlign: 'center' }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%', background: '#e6e622',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 10px',
        }}>
          <User size={28} color="#000" strokeWidth={2} />
        </div>
        <h2 style={{ fontSize: 18, fontWeight: 700 }}>สมชาย รักเรียน</h2>
        <p style={{ fontSize: 12, color: '#888', marginTop: 4 }}>อันดับ #1 บน O-guard</p>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 10, padding: '0 16px', marginBottom: 20 }}>
        {[
          { icon: BookOpen, num: '4', label: 'เรียนจบ', color: '#e6e622' },
          { icon: Award, num: '1', label: 'ใบรับรอง', color: '#4ade80' },
          { icon: Briefcase, num: '3', label: 'งานรอ Match', color: '#60a5fa' },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1, background: '#1a1a1a', borderRadius: 12, padding: '14px',
            textAlign: 'center', border: '1px solid #2a2a2a',
          }}>
            <s.icon size={16} color="#555" style={{ marginBottom: 6 }} />
            <div style={{ fontSize: 20, fontWeight: 700, color: s.color }}>{s.num}</div>
            <div style={{ fontSize: 10, color: '#555' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Skill Portfolio — what O-guard verified */}
      <div style={{ padding: '0 16px 8px' }}>
        <h3 style={{ fontSize: 15, fontWeight: 700 }}>Skill Portfolio</h3>
        <p style={{ fontSize: 11, color: '#555', marginTop: 2 }}>O-guard ติดตามและยืนยันทักษะของคุณ</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '0 16px', marginBottom: 16 }}>
        {[
          { name: 'จัดการคลังสินค้า', verified: true },
          { name: 'การบริหารสต็อก (GRN/CN)', verified: true },
          { name: 'เชื่อมไฟฟ้า MIG/TIG', verified: true },
          { name: 'โซเชียลมีเดียแอดมิน', verified: false },
          { name: 'เครื่องมือขนถ่ายโลจิสติกส์', verified: false },
        ].map((skill, i) => (
          <span key={i} style={{
            padding: '6px 12px', borderRadius: 20, fontSize: 11, fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: 4,
            background: skill.verified ? '#1e3a1e' : '#1a1a1a',
            color: skill.verified ? '#4ade80' : '#555',
            border: `1px solid ${skill.verified ? '#2d5a2d' : '#2a2a2a'}`,
          }}>
            {skill.verified && <CheckCircle2 size={12} />}
            {!skill.verified && <Clock size={12} />}
            {skill.name}
          </span>
        ))}
      </div>

      {/* Currently tracking — external resources */}
      <div style={{ padding: '16px 16px 8px' }}>
        <h3 style={{ fontSize: 15, fontWeight: 700 }}>กำลังติดตาม</h3>
      </div>
      <div
        onClick={() => navigate('/course/4')}
        style={{
          margin: '0 16px 10px', background: '#1a1a1a', borderRadius: 14,
          padding: '14px', border: '1px solid #2a2a2a', cursor: 'pointer',
          display: 'flex', gap: 12, alignItems: 'center',
        }}
      >
        <div style={{
          width: 48, height: 48, borderRadius: 10, background: '#222',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <BookOpen size={20} color="#e6e622" strokeWidth={1.5} />
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>ช่างเชื่อมไฟฟ้า งานเชื่อม...</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <ExternalLink size={10} color="#888" />
            <span style={{ fontSize: 11, color: '#888' }}>DSD Online Training</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
            <div style={{ flex: 1, height: 6, background: '#333', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ width: '70%', height: '100%', borderRadius: 3, background: 'linear-gradient(90deg, #c8e622, #e6e622)' }} />
            </div>
            <span style={{ fontSize: 11, color: '#e6e622', fontWeight: 600 }}>70%</span>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div style={{ padding: '16px 16px 8px' }}>
        <h3 style={{ fontSize: 15, fontWeight: 700 }}>ใบรับรอง</h3>
      </div>
      <div style={{
        margin: '0 16px 10px', background: '#1a1a1a', borderRadius: 14,
        padding: '14px', border: '1px solid #2a2a2a',
        display: 'flex', gap: 12, alignItems: 'center',
      }}>
        <div style={{
          width: 48, height: 48, borderRadius: 10, background: '#1e3a1e',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <Award size={20} color="#4ade80" strokeWidth={1.5} />
        </div>
        <div>
          <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>สาขาวิชาชีพโลจิสติกส์</h4>
          <p style={{ fontSize: 11, color: '#4ade80', fontWeight: 600 }}>ได้รับการยืนยัน</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}>
            <ExternalLink size={10} color="#555" />
            <span style={{ fontSize: 10, color: '#555' }}>TPQI e-Training · 15 มี.ค. 2026</span>
          </div>
        </div>
      </div>

      {/* Learning Activity Chart */}
      <div style={{ padding: '16px 16px 8px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <BarChart3 size={16} color="#888" />
        <h3 style={{ fontSize: 15, fontWeight: 700 }}>เวลาที่ใช้เรียน</h3>
      </div>
      <div style={{
        margin: '0 16px 20px', background: '#1a1a1a', borderRadius: 14,
        padding: '16px', border: '1px solid #2a2a2a',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 80, marginBottom: 8 }}>
          {[30, 45, 20, 60, 40, 55, 35, 50, 25, 65, 40, 30].map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`, borderRadius: '3px 3px 0 0',
              background: i === 9 ? '#e6e622' : '#333',
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: '#555' }}>
          {['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'].map(m => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
