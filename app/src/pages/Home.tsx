import { useNavigate } from 'react-router-dom'
import {
  Compass, Briefcase, Sparkles, ExternalLink,
  BookOpen, Building2, GraduationCap
} from 'lucide-react'

// O-guard is a CONNECTOR — these are external resources we link users to
const tracking = [
  { id: 4, title: 'ช่างเชื่อมไฟฟ้า งานเชื่อมเดินแนวท่าระดับ', provider: 'DSD Online Training', progress: 70, matchJobs: 2 },
]

const careerGoals = [
  { 
    id: 1, 
    role: 'Warehouse Admin', 
    company: 'บ.ดิจิตอล คอมเมิร์ซ', 
    salary: '15,000-20,000',
    verifiedSkills: 3, 
    totalSkills: 5,
    match: 60,
    missingSkill: 'ระบบจัดการคลังสต็อกดิจิทัล',
    recommendedCoursePath: '/course/2',
    loc: 'พระราม 3'
  },
  { 
    id: 2, 
    role: 'ช่างเชื่อมไฟฟ้า (MIG/TIG)', 
    company: 'โอ.อี.เอ็นจิเนียริ่ง', 
    salary: '450-690/วัน',
    verifiedSkills: 1, 
    totalSkills: 4,
    match: 25,
    missingSkill: 'เทคนิคเชื่อมไฟฟ้า',
    recommendedCoursePath: '/course/1',
    loc: 'เอกชัย 34'
  },
  { 
    id: 3, 
    role: 'บาริสต้าประจำสาขา', 
    company: 'คาเฟ่ อเมซอน', 
    salary: '13,000-15,000',
    verifiedSkills: 2, 
    totalSkills: 5,
    match: 40,
    missingSkill: 'เทคนิคการสกัดกาแฟ (Espresso)',
    recommendedCoursePath: '/course/7',
    loc: 'สยามสแควร์'
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Quick Actions — connector focus */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, padding: '16px 16px 0' }}>
        {[
          { icon: Compass, label: 'ตั้งเป้าหมาย\nอาชีพ', action: () => navigate('/assessment') },
          { icon: Sparkles, label: 'วิเคราะห์\nSkill Gap', action: () => navigate('/assessment') },
          { icon: BookOpen, label: 'แผนการ\nเรียนรู้', action: () => navigate('/profile') },
          { icon: Briefcase, label: 'งานที่\nปลดล็อก', action: () => {} },
        ].map((btn, i) => (
          <div key={i} onClick={btn.action} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            padding: '14px 4px', background: '#1a1a1a', borderRadius: 14,
            cursor: 'pointer', border: '1px solid #2a2a2a',
          }}>
            <btn.icon size={22} color="#e6e622" strokeWidth={1.5} />
            <span style={{ fontSize: 10, fontWeight: 500, color: '#aaa', textAlign: 'center', lineHeight: 1.3, whiteSpace: 'pre-line' }}>{btn.label}</span>
          </div>
        ))}
      </div>

      {/* Tracking — courses user is following on external platforms */}
      <div style={{ padding: '20px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ fontSize: 15, fontWeight: 700 }}>ติดตามความก้าวหน้า</h3>
        <span style={{ fontSize: 11, color: '#555' }}>จากแหล่งเรียนภายนอก</span>
      </div>
      {tracking.map(c => (
        <div
          key={c.id}
          onClick={() => navigate(`/course/${c.id}`)}
          style={{
            margin: '0 16px 10px', background: '#1a1a1a', borderRadius: 14,
            padding: '14px', border: '1px solid #2a2a2a', cursor: 'pointer',
          }}
        >
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{
              width: 48, height: 48, borderRadius: 10,
              background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <BookOpen size={20} color="#e6e622" strokeWidth={1.5} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h4 style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{c.title}</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 6 }}>
                <ExternalLink size={10} color="#888" />
                <span style={{ fontSize: 11, color: '#888' }}>{c.provider}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, height: 6, background: '#333', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{
                    width: `${c.progress}%`, height: '100%', borderRadius: 3,
                    background: c.progress === 100
                      ? 'linear-gradient(90deg, #4ade80, #22c55e)'
                      : 'linear-gradient(90deg, #c8e622, #e6e622)',
                  }} />
                </div>
                <span style={{ fontSize: 11, color: '#e6e622', fontWeight: 600, whiteSpace: 'nowrap' }}>{c.progress}%</span>
              </div>
            </div>
            {c.matchJobs > 0 && (
              <div style={{
                padding: '4px 8px', borderRadius: 8, background: '#1a2a1a',
                fontSize: 10, color: '#4ade80', fontWeight: 600, whiteSpace: 'nowrap',
              }}>
                <Briefcase size={10} style={{ verticalAlign: -1, marginRight: 3 }} />
                {c.matchJobs} งาน
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Career Goals & Skill Gaps */}
      <div style={{ padding: '16px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ fontSize: 15, fontWeight: 700 }}>เป้าหมายอาชีพของคุณ</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Sparkles size={12} color="#e6e622" />
          <span style={{ fontSize: 11, fontWeight: 600, color: '#e6e622', letterSpacing: 1 }}>Skill Gap</span>
        </div>
      </div>
      {careerGoals.map((goal, i) => (
        <div key={i} style={{
          margin: '0 16px 12px', background: '#1a1a1a', borderRadius: 14,
          padding: '16px', border: '1px solid #2a2a2a',
        }}>
          {/* Header: Job Info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10, background: '#222',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Building2 size={20} color="#888" strokeWidth={1.5} />
              </div>
              <div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{goal.role}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                  <span style={{ fontSize: 12, color: '#aaa' }}>{goal.company}</span>
                  <span style={{ fontSize: 10, color: '#555' }}>·</span>
                  <span style={{ fontSize: 12, color: '#aaa' }}>{goal.salary}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skill Gap Analysis Box */}
          <div style={{ 
            background: '#111', borderRadius: 10, padding: '12px', 
            border: '1px solid #222', marginBottom: 12 
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: 12, color: '#ccc' }}>ทักษะที่คุณมี (Verified Skills)</span>
              <span style={{ fontSize: 12, color: '#e6e622', fontWeight: 600 }}>{goal.verifiedSkills}/{goal.totalSkills}</span>
            </div>
            {/* Progress Bar */}
            <div style={{ height: 6, background: '#333', borderRadius: 3, overflow: 'hidden', marginBottom: 10 }}>
              <div style={{
                width: `${(goal.verifiedSkills / goal.totalSkills) * 100}%`, height: '100%', borderRadius: 3,
                background: 'linear-gradient(90deg, #c8e622, #e6e622)',
              }} />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#222', padding: '8px 10px', borderRadius: 6 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff4444' }} />
              <span style={{ fontSize: 11, color: '#aaa' }}>ขาดทักษะ: <span style={{ color: '#fff', fontWeight: 500 }}>{goal.missingSkill}</span></span>
            </div>
          </div>

          {/* Call to action (Course Recommendation) */}
          <button 
            onClick={() => navigate(goal.recommendedCoursePath)}
            style={{
              width: '100%', padding: '12px', border: 'none', borderRadius: 8,
              background: '#2a2a2a', color: '#e6e622', fontWeight: 600, fontSize: 13,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer'
            }}
          >
            <GraduationCap size={16} />
            เรียนเพิ่มเพื่อปลดล็อกงานนี้
          </button>
        </div>
      ))}

      <div style={{ height: 20 }} />
    </div>
  )
}
