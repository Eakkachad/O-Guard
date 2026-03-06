import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  ArrowLeft, ExternalLink, Briefcase, MapPin,
  CheckCircle2, Lock, Building2, ChevronRight
} from 'lucide-react'

const careerPaths: Record<string, {
  role: string; company: string; salary: string; loc: string; desc: string;
  skills: { name: string; verified: boolean; courseUrl?: string; courseProvider?: string; courseName?: string }[];
}> = {
  '1': {
    role: 'Automation & Robotics Technician', company: 'SCG Mechatronics', salary: '20,000-30,000', loc: 'EEC (ระยอง)',
    desc: 'ควบคุมและดูแลหุ่นยนต์แขนกลอุตสาหกรรม (Industrial Robot) โอกาสเข้าทำงานทันทีเมื่อมีทักษะครบตามมาตรฐาน มรร.',
    skills: [
      { name: 'ความปลอดภัยในโรงงาน (Safety)', verified: true },
      { name: 'ทฤษฎีกลไกและช่างกล (Mechanics)', verified: false, courseName: 'พื้นฐานกลไกหุ่นยนต์', courseProvider: 'Thai MOOC', courseUrl: 'https://learn.thaimooc.ac.th' },
      { name: 'Programming PLC & Robot', verified: false, courseName: 'การพัฒนาและสั่งงานระบบ PLC', courseProvider: 'DSD Online', courseUrl: 'https://smart.dsd.go.th' }
    ]
  },
  '2': {
    role: 'Digital Warehouse Supervisor', company: 'WHA Logistics Hub', salary: '25,000-35,000', loc: 'EEC (ชลบุรี)',
    desc: 'ดูแลระบบสต็อกสินค้า ประสานงานขนส่ง และจัดการ Data ในคลังสินค้าด้วยระบบ ERP และ WMS สมัยใหม่',
    skills: [
      { name: 'การบริหารจัดการข้อมูลเบื้องต้น', verified: true },
      { name: 'ความเข้าใจภาพรวม Supply Chain', verified: true },
      { name: 'ระบบจัดการคลังสต็อกดิจิทัล (WMS)', verified: false, courseName: 'การบริหารคลังสินค้าดิจิทัล', courseProvider: 'TPQI e-Training', courseUrl: 'https://e-training.tpqi.go.th' }
    ]
  },
  '7': {
    role: 'Logistics Data Analyst', company: 'Flash Express', salary: '30,000-45,000', loc: 'EEC (ฉะเชิงเทรา)',
    desc: 'วิเคราะห์เส้นทางขนส่ง ทำ Data Visualization นำเสนอข้อมูลเพื่อเพิ่มประสิทธิภาพ (Route Optimization)',
    skills: [
      { name: 'Python for Data Automation', verified: true },
      { name: 'ระบบฐานข้อมูล SQL', verified: false, courseName: 'หลักสูตรนักวิเคราะห์ข้อมูล', courseProvider: 'Thai MOOC', courseUrl: 'https://learn.thaimooc.ac.th' },
      { name: 'Supply Chain Data Analytics', verified: false, courseName: 'Logistics Analytics Advanced', courseProvider: 'TPQI e-Training', courseUrl: 'https://e-training.tpqi.go.th' }
    ]
  }
}

export default function CoursePage() {
  const { id } = useParams()
  const navigate = useNavigate()
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

  return (
    <div style={{ padding: '20px', background: 'var(--bg)', minHeight: '100vh' }}>
      <div onClick={() => navigate(-1)} style={{ 
        display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, 
        color: 'var(--text-muted)', cursor: 'pointer', marginBottom: 20,
        fontWeight: 600, padding: '8px 12px', background: '#ffffff', borderRadius: 20,
        boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
      }}>
        <ArrowLeft size={16} /> กลับ
      </div>

      {/* Job Banner */}
      <div style={{
        width: '100%', height: 160, borderRadius: 24,
        background: 'linear-gradient(135deg, #f0fdfa, #ccfbf1)',
        marginBottom: 24, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden'
      }}>
        {/* Decorative circle */}
        <div style={{ position: 'absolute', top: -30, right: -30, width: 100, height: 100, borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
        <div style={{
          width: 64, height: 64, borderRadius: 20, background: '#ffffff',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12,
          boxShadow: '0 8px 16px rgba(45, 212, 191, 0.2)'
        }}>
          <Briefcase size={32} color="var(--accent)" strokeWidth={2} />
        </div>
        <span style={{ fontSize: 14, color: '#0d9488', fontWeight: 800, letterSpacing: 0.5 }}>เป้าหมายอาชีพ</span>
      </div>

      <div style={{ padding: '0 8px' }}>
        <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8, color: 'var(--text)', lineHeight: 1.3 }}>{path.role}</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
          <Building2 size={16} color="var(--text-muted)" />
          <span style={{ fontSize: 14, color: 'var(--text-muted)', fontWeight: 600 }}>{path.company}</span>
          <span style={{ fontSize: 14, color: 'var(--text-dim)' }}>•</span>
          <MapPin size={14} color="var(--text-muted)" />
          <span style={{ fontSize: 14, color: 'var(--text-muted)' }}>{path.loc}</span>
        </div>
        
        <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 24, lineHeight: 1.6 }}>{path.desc}</p>

        {/* Salary */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '16px 20px',
          background: '#ecfdf5', borderRadius: 16, marginBottom: 32,
        }}>
          <span style={{ fontSize: 14, color: 'var(--success)', fontWeight: 600 }}>ค่าตอบแทน:</span>
          <span style={{ fontSize: 18, fontWeight: 800, color: 'var(--success)' }}>฿ {path.salary}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--text)' }}>เส้นทางสู่เป้าหมาย</h3>
          <span style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 800, background: '#f0fdfa', padding: '4px 12px', borderRadius: 20 }}>
            {verifiedCount}/{path.skills.length} ทักษะ
          </span>
        </div>

        {/* Roadmap Display */}
        <div style={{ padding: '0 0 20px', position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 23, top: 24, bottom: 24, width: 2,
            background: 'linear-gradient(to bottom, var(--success), #e2e8f0)',
          }} />
          {skillsState.map((skill, i) => (
            <div key={i} style={{
              display: 'flex', gap: 16, marginBottom: 20,
              padding: skill.verified ? '12px 0' : '16px',
              background: skill.verified ? 'transparent' : '#ffffff',
              borderRadius: 20, boxShadow: skill.verified ? 'none' : '0 8px 24px rgba(0,0,0,0.04)',
              position: 'relative', alignItems: 'flex-start'
            }}>
              <div style={{ 
                flexShrink: 0, zIndex: 1, marginTop: skill.verified ? 0 : 2,
                width: 32, height: 32, borderRadius: '50%',
                background: skill.verified ? 'var(--success)' : '#f1f5f9',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: skill.verified ? '0 4px 12px rgba(16, 185, 129, 0.3)' : 'none'
              }}>
                {skill.verified ? (
                  <CheckCircle2 size={18} color="#fff" strokeWidth={3} />
                ) : (
                  <Lock size={14} color="var(--text-dim)" />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <span style={{
                  display: 'block', fontSize: 15, marginBottom: skill.verified ? 0 : 6,
                  color: skill.verified ? 'var(--text)' : 'var(--text)',
                  fontWeight: skill.verified ? 600 : 800,
                }}>{skill.name}</span>
                
                {!skill.verified && (
                  <div style={{ marginTop: 12 }}>
                    <span style={{ fontSize: 12, color: 'var(--danger)', fontWeight: 600, display: 'block', marginBottom: 12 }}>
                      *คุณยังขาดทักษะนี้
                    </span>
                    <div style={{ display: 'flex', gap: 10 }}>
                      <button 
                        onClick={() => window.open(skill.courseUrl, '_blank')}
                        style={{
                          flex: 1, padding: '12px', background: '#f8fafc', border: 'none', 
                          borderRadius: 12, textAlign: 'left', cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <span style={{ display: 'block', fontSize: 13, color: 'var(--text)', fontWeight: 700, marginBottom: 4 }}>{skill.courseName}</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <ExternalLink size={12} color="var(--text-muted)" />
                            <span style={{ fontSize: 11, color: 'var(--text-muted)', fontWeight: 500 }}>{skill.courseProvider}</span>
                          </div>
                        </div>
                        <ChevronRight size={16} color="var(--text-dim)" />
                      </button>
                      <button 
                        onClick={() => handleVerifyMatch(skill.name)}
                        style={{
                          padding: '0 16px', background: 'var(--success)', border: 'none', 
                          borderRadius: 12, cursor: 'pointer', color: '#fff', fontSize: 12, fontWeight: 700,
                          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4,
                          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
                        }}
                      >
                        <CheckCircle2 size={18} strokeWidth={2.5} />
                        Verify
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            if (isReady) navigate(`/job-offer/${id || '2'}`)
          }}
          disabled={!isReady}
          style={{
            width: '100%', padding: '18px', border: 'none', borderRadius: 20,
            background: isReady ? 'var(--accent-gradient)' : '#f1f5f9',
            color: isReady ? '#ffffff' : 'var(--text-dim)', fontSize: 16, fontWeight: 800,
            marginBottom: 20, cursor: isReady ? 'pointer' : 'not-allowed', fontFamily: 'inherit',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            boxShadow: isReady ? '0 8px 20px rgba(45, 212, 191, 0.4)' : 'none',
            transition: '0.3s'
          }}
        >
          {isReady ? 'สมัครงานด่วน' : 'เรียนเพื่อปลดล็อก'}
        </button>
        <div style={{ height: 40 }} />
      </div>
    </div>
  )
}
