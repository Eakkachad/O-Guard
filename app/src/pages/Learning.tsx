import { useNavigate } from 'react-router-dom'
import {
  BookOpen, Sparkles, MonitorPlay, Compass,
  Award, TrendingUp, Building2, ExternalLink
} from 'lucide-react'

const providers = [
  { name: 'Thai MOOC', desc: 'เรียนรู้ตลอดชีวิต', color: '#0369a1', bg: '#e0f2fe' },
  { name: 'DSD Online', desc: 'พัฒนาฝีมือแรงงาน', color: '#047857', bg: '#d1fae5' },
  { name: 'กทม. ฝึกอาชีพ', desc: 'อาชีพเสริมสร้างรายได้', color: '#b45309', bg: '#fef3c7' },
  { name: 'TPQI', desc: 'คุณวุฒิวิชาชีพ', color: '#6d28d9', bg: '#ede9fe' }
]

const categories = [
  {
    title: 'ทักษะแห่งอนาคต',
    icon: MonitorPlay,
    courses: [
      { id: '6', title: 'การพัฒนาสื่อมัลติมีเดียด้วย Gen AI', provider: 'DiSDA' },
      { id: '3', title: 'Facebook Marketing Success', provider: 'STARTUP NOW' },
    ]
  },
  {
    title: 'สายงานโลจิสติกส์',
    icon: TrendingUp,
    courses: [
      { id: '2', title: 'การจัดการคลังสินค้า', provider: 'Thai MOOC' },
      { id: '9', title: 'ผู้ขับรถฟอร์คลิฟต์อย่างปลอดภัย', provider: 'สถาบันความปลอดภัยฯ' },
    ]
  },
  {
    title: 'สายงานช่างและบริการ',
    icon: Compass,
    courses: [
      { id: '1', title: 'ช่างเชื่อมไฟฟ้า (MIG/TIG)', provider: 'ร.ร.ฝึกอาชีพ กทม.' },
      { id: '7', title: 'หลักสูตรบาริสต้ามืออาชีพ', provider: 'ร.ร.ฝึกอาชีพ กทม.' },
      { id: '8', title: 'การดูแลผู้สูงอายุ (120 ชม.)', provider: 'กรมอนามัย' },
    ]
  }
]

export default function Learning() {
  const navigate = useNavigate()

  return (
    <div style={{ paddingBottom: 20 }}>
      {/* Header Banner */}
      <div style={{ padding: '24px 20px 20px', background: '#ffffff', borderBottom: '1px solid #f1f5f9', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ padding: 12, background: '#f0fdfa', borderRadius: 16, boxShadow: '0 4px 12px rgba(45, 212, 191, 0.2)' }}>
            <BookOpen size={24} color="var(--accent)" strokeWidth={2.5} />
          </div>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)' }}>แหล่งการเรียนรู้</h2>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2, fontWeight: 500 }}>Upskill เพื่อปลดล็อกอนาคต</p>
          </div>
        </div>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 12 }}>
          O-guard รวบรวมหลักสูตรจากหน่วยงานพันธมิตร เพื่อเติมเต็มทักษะที่ขาดและเชื่อมโยงสู่โอกาสในการทำงานจริง
        </p>
      </div>

      {/* Value Proposition */}
      <div style={{ padding: '24px 20px 16px' }}>
        <div style={{
          background: 'var(--accent-gradient)',
          borderRadius: 20, padding: '20px', 
          display: 'flex', alignItems: 'center', gap: 16,
          boxShadow: '0 8px 24px rgba(45, 212, 191, 0.3)'
        }}>
          <div style={{ background: '#ffffff', borderRadius: '50%', padding: 12, flexShrink: 0 }}>
            <Award size={24} color="var(--accent)" strokeWidth={2.5} />
          </div>
          <div>
            <h3 style={{ fontSize: 15, fontWeight: 800, color: '#ffffff', marginBottom: 4 }}>
              เรียนจบ ยืนยันได้ มีงานรองรับ
            </h3>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
              ทุกคอร์สผ่านการรับรอง นำมายืนยันในโปรไฟล์เพื่อปลดล็อกตำแหน่งงานที่ตรงสายได้ทันที
            </p>
          </div>
        </div>
      </div>

      {/* Featured Providers */}
      <div style={{ padding: '12px 20px 24px' }}>
        <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text)' }}>
          <Building2 size={18} color="var(--accent)" /> สถาบันพันธมิตร
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {providers.map((p, i) => (
            <div key={i} style={{
              background: '#ffffff', padding: '16px', borderRadius: 16,
              display: 'flex', flexDirection: 'column', gap: 8, boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}>
              <div style={{ display: 'inline-block', background: p.bg, padding: '6px 10px', borderRadius: 8, width: 'fit-content' }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: p.color }}>{p.name}</span>
              </div>
              <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>{p.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: '8px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>หลักสูตรแนะนำ</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#f0fdfa', padding: '6px 12px', borderRadius: 20 }}>
            <Sparkles size={14} color="var(--accent)" />
            <span style={{ fontSize: 12, color: 'var(--accent)', fontWeight: 700 }}>AI คัดสรร</span>
          </div>
        </div>

        {categories.map((cat, i) => (
          <div key={i} style={{ marginBottom: 32 }}>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
              <cat.icon size={18} color="var(--text-muted)" />
              {cat.title}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {cat.courses.map((course, j) => (
                <div key={j}
                  onClick={() => navigate(`/course/${course.id}`)}
                  style={{
                    background: '#ffffff', padding: '16px', borderRadius: 20,
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ flex: 1, paddingRight: 12 }}>
                    <h5 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, color: 'var(--text)' }}>{course.title}</h5>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <ExternalLink size={12} color="var(--text-muted)" />
                      <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500 }}>{course.provider}</span>
                    </div>
                  </div>
                  <div style={{
                    padding: '8px 14px', background: '#f1f5f9', borderRadius: 12,
                    fontSize: 12, fontWeight: 700, color: 'var(--text-muted)', whiteSpace: 'nowrap'
                  }}>
                    ดูเส้นทาง
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
