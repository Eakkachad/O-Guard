import { useNavigate } from 'react-router-dom'
import {
  BookOpen, Sparkles, MonitorPlay, Compass,
  Award, TrendingUp, Building2, ExternalLink
} from 'lucide-react'

const providers = [
  { name: 'Thai MOOC', desc: 'เรียนรู้ตลอดชีวิต', color: '#60a5fa', bg: '#172554' },
  { name: 'DSD Online', desc: 'พัฒนาฝีมือแรงงาน', color: '#34d399', bg: '#064e3b' },
  { name: 'กทม. ฝึกอาชีพ', desc: 'อาชีพเสริมสร้างรายได้', color: '#fbbf24', bg: '#451a03' },
  { name: 'TPQI', desc: 'คุณวุฒิวิชาชีพ', color: '#a78bfa', bg: '#2e1065' }
]

const categories = [
  {
    title: 'ทักษะแห่งอนาคต (Digital Skills)',
    icon: MonitorPlay,
    courses: [
      { id: '6', title: 'การพัฒนาสื่อมัลติมีเดียด้วย Gen AI', provider: 'DiSDA' },
      { id: '3', title: 'Facebook Marketing Success', provider: 'STARTUP NOW' },
    ]
  },
  {
    title: 'สายงานโลจิสติกส์ (Logistics)',
    icon: TrendingUp,
    courses: [
      { id: '2', title: 'การจัดการคลังสินค้า', provider: 'Thai MOOC' },
      { id: '9', title: 'ผู้ขับรถฟอร์คลิฟต์อย่างปลอดภัย', provider: 'สถาบันความปลอดภัยฯ' },
    ]
  },
  {
    title: 'สายงานช่างและบริการ (Craft & Service)',
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
      <div style={{ padding: '24px 16px 16px', background: 'linear-gradient(135deg, #111, #0a0a0a)', borderBottom: '1px solid #222' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <div style={{ padding: 10, background: '#1a1a1a', borderRadius: 12, border: '1px solid #333' }}>
            <BookOpen size={24} color="#e6e622" />
          </div>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff' }}>แหล่งการเรียนรู้</h2>
            <p style={{ fontSize: 13, color: '#888', marginTop: 2 }}>Upskill เพื่อปลดล็อกอนาคต</p>
          </div>
        </div>
        <p style={{ fontSize: 13, color: '#aaa', lineHeight: 1.6, marginTop: 12 }}>
          O-guard รวบรวมหลักสูตรคุณภาพจากหน่วยงานพันธมิตร เพื่อเติมเต็มทักษะที่ขาดและเชื่อมโยงสู่โอกาสในการทำงานจริง
        </p>
      </div>

      {/* Value Proposition */}
      <div style={{ padding: '20px 16px 16px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #1a2a1a, #0a150a)',
          borderRadius: 16, padding: '16px', border: '1px solid #1e3a1e',
          display: 'flex', alignItems: 'center', gap: 14
        }}>
          <div style={{ background: '#22c55e', borderRadius: '50%', padding: 10, flexShrink: 0, boxShadow: '0 0 15px rgba(34, 197, 94, 0.2)' }}>
            <Award size={20} color="#000" />
          </div>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: '#4ade80', marginBottom: 4 }}>
              เรียนจบ ยืนยันได้ มีงานรองรับ
            </h3>
            <p style={{ fontSize: 11, color: '#aaa', lineHeight: 1.5 }}>
              ทุกคอร์สผ่านการรับรอง นำมายืนยัน (Verify) ในโปรไฟล์เพื่อปลดล็อกตำแหน่งงานที่ตรงสายได้ทันที
            </p>
          </div>
        </div>
      </div>

      {/* Featured Providers */}
      <div style={{ padding: '8px 16px 20px' }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Building2 size={16} color="#e6e622" /> สถาบันพันธมิตร
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {providers.map((p, i) => (
            <div key={i} style={{
              background: '#151515', padding: '14px', borderRadius: 14, border: '1px solid #2a2a2a',
              display: 'flex', flexDirection: 'column', gap: 6, transition: 'all 0.2s', cursor: 'default'
            }}>
              <div style={{ display: 'inline-block', background: p.bg, padding: '4px 8px', borderRadius: 6, width: 'fit-content' }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: p.color }}>{p.name}</span>
              </div>
              <span style={{ fontSize: 11, color: '#888' }}>{p.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: '8px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700 }}>หลักสูตรแนะนำตามสายงาน</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: '#1a1a1a', padding: '4px 8px', borderRadius: 20, border: '1px solid #333' }}>
            <Sparkles size={12} color="#e6e622" />
            <span style={{ fontSize: 11, color: '#e6e622', fontWeight: 600 }}>AI คัดสรร</span>
          </div>
        </div>

        {categories.map((cat, i) => (
          <div key={i} style={{ marginBottom: 24 }}>
            <h4 style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
              <cat.icon size={16} color="#aaa" />
              {cat.title}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {cat.courses.map((course, j) => (
                <div key={j}
                  onClick={() => navigate(`/course/${course.id}`)}
                  style={{
                    background: '#151515', padding: '16px', borderRadius: 14, border: '1px solid #2a2a2a',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                  }}
                >
                  <div style={{ flex: 1, paddingRight: 12 }}>
                    <h5 style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, color: '#eee' }}>{course.title}</h5>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <ExternalLink size={12} color="#666" />
                      <span style={{ fontSize: 11, color: '#888' }}>{course.provider}</span>
                    </div>
                  </div>
                  <div style={{
                    padding: '8px 14px', background: '#222', borderRadius: 10, border: '1px solid #333',
                    fontSize: 12, fontWeight: 600, color: '#e6e622', whiteSpace: 'nowrap'
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
