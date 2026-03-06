import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft, ExternalLink, Briefcase, MapPin,
  CheckCircle2, Lock, Building2, ChevronRight
} from 'lucide-react'

const careerPaths: Record<string, {
  role: string; company: string; salary: string; loc: string; desc: string;
  match: number;
  skills: { name: string; verified: boolean; courseUrl?: string; courseProvider?: string; courseName?: string }[];
}> = {
  '1': {
    role: 'ช่างเชื่อมไฟฟ้า (MIG/TIG)', company: 'โอ.อี.เอ็นจิเนียริ่ง', salary: '450-690/วัน', loc: 'เอกชัย 34', match: 25,
    desc: 'ช่างเชื่อมอาร์กอน/CO2 สำหรับงานโครงสร้างเหล็ก โอกาสเข้าทำงานทันทีเมื่อมีทักษะครบ',
    skills: [
      { name: 'ความปลอดภัยในโรงงาน', verified: true },
      { name: 'ทฤษฎีงานเชื่อมพื้นฐาน', verified: false, courseName: 'หลักสูตรช่างเชื่อม 30 ชั่วโมง', courseProvider: 'ร.ร.ฝึกอาชีพ กทม.', courseUrl: 'https://vtdc.bma.go.th' },
      { name: 'ปฏิบัติเชื่อมไฟฟ้า (MIG/TIG)', verified: false, courseName: 'ช่างเชื่อมไฟฟ้าเดินแนว', courseProvider: 'DSD Online', courseUrl: 'https://smart.dsd.go.th' }
    ]
  },
  '2': {
    role: 'Warehouse Admin', company: 'บ.ดิจิตอล คอมเมิร์ซ', salary: '15,000-20,000', loc: 'พระราม 3', match: 60,
    desc: 'ดูแลระบบสต็อกสินค้า ประสานงานขนส่ง และจัดการ Data ในคลังสินค้า',
    skills: [
      { name: 'การใช้คอมพิวเตอร์พื้นฐาน', verified: true },
      { name: 'ความเข้าใจ Supply Chain', verified: true },
      { name: 'ระบบจัดการคลังสต็อกดิจิทัล', verified: false, courseName: 'การจัดการคลังสินค้า', courseProvider: 'Thai MOOC', courseUrl: 'https://learn.thaimooc.ac.th' }
    ]
  },
  '7': {
    role: 'บาริสต้าประจำสาขา', company: 'คาเฟ่ อเมซอน', salary: '13,000-15,000', loc: 'สยามสแควร์', match: 40,
    desc: 'ชงเครื่องดื่ม บริการลูกค้า และดูแลความเรียบร้อยภายในร้าน',
    skills: [
      { name: 'Service Mind', verified: true },
      { name: 'ความรู้เรื่องเมล็ดกาแฟ', verified: false, courseName: 'หลักสูตรบาริสต้ามืออาชีพ', courseProvider: 'ร.ร.ฝึกอาชีพ กทม.', courseUrl: 'https://vtdc.bma.go.th' },
      { name: 'เทคนิคการสกัดกาแฟ (Espresso)', verified: false, courseName: 'หลักสูตรบาริสต้ามืออาชีพ', courseProvider: 'ร.ร.ฝึกอาชีพ กทม.', courseUrl: 'https://vtdc.bma.go.th' }
    ]
  }
}

export default function CoursePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [view] = useState<'detail'>('detail')

  const path = careerPaths[id || '2'] || careerPaths['2']
  const [skillsState, setSkillsState] = useState(path.skills)

  useEffect(() => {
    setSkillsState(careerPaths[id || '2']?.skills || careerPaths['2'].skills)
  }, [id])

  const verifiedCount = skillsState.filter(s => s.verified).length
  const isReady = verifiedCount === skillsState.length

  const handleVerifyMatch = (skillName: string) => {
    setSkillsState(prev => prev.map(s => s.name === skillName ? { ...s, verified: true } : s))
  }

  // ===== DETAIL VIEW =====
  if (view === 'detail') {
    return (
      <div style={{ padding: '16px' }}>
        <div onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#888', cursor: 'pointer', marginBottom: 16 }}>
          <ArrowLeft size={14} /> กลับ
        </div>

        {/* Job Banner */}
        <div style={{
          width: '100%', height: 140, borderRadius: 16,
          background: 'linear-gradient(135deg, #111, #1a1a1a)',
          marginBottom: 16, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', border: '1px solid #333'
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: 14, background: '#e6e622',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10
          }}>
            <Briefcase size={28} color="#000" strokeWidth={1.5} />
          </div>
          <span style={{ fontSize: 13, color: '#e6e622', fontWeight: 600 }}>เป้าหมายอาชีพ</span>
        </div>

        <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 4 }}>{path.role}</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
          <Building2 size={14} color="#888" />
          <span style={{ fontSize: 13, color: '#aaa' }}>{path.company}</span>
          <span style={{ fontSize: 10, color: '#555' }}>·</span>
          <MapPin size={12} color="#888" />
          <span style={{ fontSize: 12, color: '#aaa' }}>{path.loc}</span>
        </div>
        
        <p style={{ fontSize: 13, color: '#888', marginBottom: 20, lineHeight: 1.6 }}>{path.desc}</p>

        {/* Salary */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '12px 14px',
          background: '#1a2a1a', borderRadius: 10, border: '1px solid #1e3a1e', marginBottom: 24,
        }}>
          <span style={{ fontSize: 13, color: '#4ade80' }}>ค่าตอบแทน:</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: '#4ade80' }}>฿ {path.salary}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700 }}>เส้นทางสู่เป้าหมาย (Roadmap)</h3>
          <span style={{ fontSize: 12, color: '#e6e622', fontWeight: 600 }}>
            {verifiedCount}/{path.skills.length} ทักษะ
          </span>
        </div>

        {/* Roadmap Display */}
        <div style={{ padding: '0 0 20px', position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 19, top: 20, bottom: 20, width: 2,
            background: 'linear-gradient(to bottom, #e6e622, #333)',
          }} />
          {skillsState.map((skill, i) => (
            <div key={i} style={{
              display: 'flex', gap: 14, marginBottom: 16,
              padding: skill.verified ? '10px 0' : '14px',
              background: skill.verified ? 'transparent' : '#1a1a1a',
              borderRadius: 12, border: skill.verified ? 'none' : '1px solid #333',
              position: 'relative', alignItems: 'flex-start'
            }}>
              <div style={{ 
                flexShrink: 0, zIndex: 1, marginTop: skill.verified ? 0 : 2,
                width: 24, height: 24, borderRadius: '50%',
                background: skill.verified ? '#e6e622' : '#222',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {skill.verified ? (
                  <CheckCircle2 size={16} color="#000" strokeWidth={2.5} />
                ) : (
                  <Lock size={12} color="#888" />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <span style={{
                  display: 'block', fontSize: 14, marginBottom: skill.verified ? 0 : 6,
                  color: skill.verified ? '#e6e622' : '#fff',
                  fontWeight: skill.verified ? 500 : 600,
                }}>{skill.name}</span>
                
                {!skill.verified && (
                  <div>
                    <span style={{ fontSize: 11, color: '#ff4444', display: 'block', marginBottom: 8 }}>
                      *คุณยังขาดทักษะนี้
                    </span>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button 
                        onClick={() => window.open(skill.courseUrl, '_blank')}
                        style={{
                          flex: 1, padding: '10px', background: '#222', border: '1px solid #444', 
                          borderRadius: 8, textAlign: 'left', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <span style={{ display: 'block', fontSize: 12, color: '#ddd', fontWeight: 500, marginBottom: 2 }}>{skill.courseName}</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <ExternalLink size={10} color="#888" />
                            <span style={{ fontSize: 10, color: '#888' }}>{skill.courseProvider}</span>
                          </div>
                        </div>
                        <ChevronRight size={14} color="#888" />
                      </button>
                      <button 
                        onClick={() => handleVerifyMatch(skill.name)}
                        style={{
                          padding: '0 12px', background: '#1e3a1e', border: '1px solid #2d5a2d', 
                          borderRadius: 8, cursor: 'pointer', color: '#4ade80', fontSize: 11, fontWeight: 600,
                          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4
                        }}
                      >
                        <CheckCircle2 size={16} />
                        Verify
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Final Apply Button */}
        <button
          disabled={!isReady}
          style={{
            width: '100%', padding: '16px', border: 'none', borderRadius: 12,
            background: isReady ? 'linear-gradient(135deg, #4ade80, #22c55e)' : '#222',
            color: isReady ? '#000' : '#555', fontSize: 15, fontWeight: 700,
            marginBottom: 20, cursor: isReady ? 'pointer' : 'not-allowed', fontFamily: 'inherit',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            opacity: isReady ? 1 : 0.7
          }}
        >
          {isReady ? 'สมัครงานนี้ทันที' : 'เรียนเพิ่มเพื่อปลดล็อกปุ่มสมัคร'}
        </button>

        <div onClick={() => navigate(-1)} style={{ textAlign: 'center', fontSize: 13, color: '#555', cursor: 'pointer', padding: 10 }}>ปิด</div>
      </div>
    )
  }



  return null
}
