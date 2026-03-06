import { useNavigate } from 'react-router-dom'
import {
  Sparkles, Building2, GraduationCap, Target
} from 'lucide-react'

const careerGoals = [
  { 
    id: 1, 
    role: 'Digital Warehouse Supervisor', 
    company: 'WHA Logistics Hub', 
    salary: '25,000-35,000',
    verifiedSkills: 3, 
    totalSkills: 5,
    match: 60,
    missingSkill: 'ระบบจัดการคลังสต็อกดิจิทัล (WMS)',
    recommendedCoursePath: '/course/2',
    loc: 'EEC (ชลบุรี)'
  },
  { 
    id: 2, 
    role: 'Automation & Robotics Technician', 
    company: 'SCG Mechatronics', 
    salary: '20,000-30,000',
    verifiedSkills: 1, 
    totalSkills: 4,
    match: 25,
    missingSkill: 'Programming PLC & Robot',
    recommendedCoursePath: '/course/1',
    loc: 'EEC (ระยอง)'
  },
]

export default function SkillGap() {
  const navigate = useNavigate()

  return (
    <div style={{ paddingBottom: 20 }}>
      {/* Header Banner */}
      <div style={{ padding: '32px 20px 24px', background: '#ffffff', borderBottom: '1px solid #f1f5f9', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ padding: 12, background: '#f0fdfa', borderRadius: 16, boxShadow: '0 4px 12px rgba(45, 212, 191, 0.2)' }}>
            <Sparkles size={24} color="var(--accent)" strokeWidth={2.5} />
          </div>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: 'var(--text)' }}>วิเคราะห์ Skill Gap</h2>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2, fontWeight: 500 }}>เส้นทางสู่เป้าหมายอาชีพ</p>
          </div>
        </div>
      </div>

      <div style={{ padding: '24px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Target size={18} color="var(--accent)" /> เป้าหมายที่บันทึกไว้
        </h3>
      </div>

      {careerGoals.map((goal, i) => (
        <div key={i} style={{
          margin: '0 20px 20px', background: '#ffffff', borderRadius: 24,
          padding: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
        }}>
          {/* Header: Job Info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
            <div style={{ display: 'flex', gap: 16 }}>
              <div style={{
                width: 52, height: 52, borderRadius: 16, background: '#f8fafc',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Building2 size={26} color="var(--text-dim)" strokeWidth={1.5} />
              </div>
              <div>
                <h4 style={{ fontSize: 16, fontWeight: 800, color: 'var(--text)' }}>{goal.role}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                  <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 600 }}>{goal.company}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-dim)' }}>•</span>
                  <span style={{ fontSize: 13, color: 'var(--success)', fontWeight: 800 }}>{goal.salary}</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ 
            background: '#f8fafc', borderRadius: 16, padding: '20px', 
            marginBottom: 20, border: '1px solid #f1f5f9'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 700 }}>ทักษะที่มี</span>
              <span style={{ fontSize: 14, color: 'var(--accent)', fontWeight: 800 }}>{goal.verifiedSkills}/{goal.totalSkills}</span>
            </div>
            {/* Progress Bar */}
            <div style={{ height: 10, background: '#e2e8f0', borderRadius: 5, overflow: 'hidden', marginBottom: 16 }}>
              <div style={{
                width: `${(goal.verifiedSkills / goal.totalSkills) * 100}%`, height: '100%', borderRadius: 5,
                background: 'var(--accent-gradient)',
              }} />
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: '#fff1f2', padding: '14px', borderRadius: 12 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--danger)', marginTop: 6, flexShrink: 0 }} />
              <div>
                <span style={{ fontSize: 12, color: 'var(--danger)', fontWeight: 700, display: 'block', marginBottom: 4 }}>ทักษะที่ขาด:</span>
                <span style={{ fontSize: 14, color: 'var(--text)', fontWeight: 800 }}>{goal.missingSkill}</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => navigate(goal.recommendedCoursePath)}
            style={{
              width: '100%', padding: '16px', border: 'none', borderRadius: 16,
              background: '#f0fdfa', color: 'var(--accent)', fontWeight: 800, fontSize: 15,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer',
              transition: '0.2s'
            }}
          >
            <GraduationCap size={20} strokeWidth={2.5} />
            เรียนหลักสูตรแนะนำ
          </button>
        </div>
      ))}

      <div style={{ height: 40 }} />
    </div>
  )
}
