import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, X, ChevronRight, Target, Clock, Heart, Users } from 'lucide-react'

const questions = [
  { 
    key: 'goal', 
    label: 'เป้าหมายหลักในการพัฒนาตัวเองของคุณคืออะไร?', 
    type: 'radio', 
    options: ['อยากเติบโตหรือเลื่อนขั้นในสายงานเดิม', 'อยากเปลี่ยนสายงานไปทำสิ่งที่ท้าทายขึ้น', 'เพิ่งเรียนจบ/กำลังค้นหาเส้นทางอาชีพ'],
    icon: Target 
  },
  { 
    key: 'industry', 
    label: 'กลุ่มอุตสาหกรรมเป้าหมายที่คุณสนใจ?', 
    type: 'radio', 
    options: ['เทคโนโลยีการผลิตและหุ่นยนต์', 'โลจิสติกส์การค้าและคลังสินค้า', 'ซ่อมบำรุงอัจฉริยะ'],
    icon: Heart 
  },
  { 
    key: 'skill_level', 
    label: 'คุณประเมินทักษะพื้นฐานในสายงานที่สนใจอยู่ในระดับใด?', 
    type: 'radio', 
    options: ['เพิ่งเริ่มต้น (ยังไม่มีประสบการณ์)', 'พอมีพื้นฐานบ้าง ต้องการต่อยอด', 'มีประสบการณ์แล้ว อยากอัปสกิลเฉพาะทาง'],
    icon: Users 
  },
  { 
    key: 'time', 
    label: 'คุณสามารถสละเวลาเพื่อเรียนรู้ทักษะใหม่ๆ ได้ประมาณเท่าไหร่?', 
    type: 'radio', 
    options: ['วันละ 1-2 ชั่วโมง', 'ทุ่มเทเวลาให้กับการเรียนได้เต็มที่', 'สะดวกเรียนเฉพาะช่วงวันหยุดสุดสัปดาห์'],
    icon: Clock 
  },
]

export default function Assessment() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const q = questions[step]
  const Icon = q.icon

  const handleNext = () => {
    if (step < questions.length - 1) setStep(s => s + 1)
    else navigate('/')
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '40px 20px 40px' }}>
      {/* Back */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div
          onClick={() => step > 0 ? setStep(s => s - 1) : navigate('/')}
          style={{ width: 40, height: 40, background: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}
        >
          {step > 0 ? <ArrowLeft size={20} color="var(--text)" /> : <X size={20} color="var(--text)" />}
        </div>
      </div>

      {/* Progress */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 40 }}>
        {questions.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 6, borderRadius: 3,
            background: i <= step ? 'var(--accent)' : '#e2e8f0', transition: '.3s',
          }} />
        ))}
      </div>

      {/* Icon + Question */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <div style={{
          width: 50, height: 50, borderRadius: 16, background: '#ffffff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 20px rgba(45, 212, 191, 0.15)',
        }}>
          <Icon size={24} color="var(--accent)" strokeWidth={2} />
        </div>
        <span style={{ fontSize: 14, color: 'var(--text-muted)', fontWeight: 600 }}>คำถามที่ {step + 1} จาก {questions.length}</span>
      </div>
      <h2 style={{ fontSize: 24, fontWeight: 800, marginBottom: 32, lineHeight: 1.4, color: 'var(--text)' }}>{q.label}</h2>

      {q.type === 'radio' && q.options?.map(opt => (
        <div
          key={opt}
          onClick={() => setAnswers({ ...answers, [q.key]: opt })}
          style={{
            padding: '20px', background: '#ffffff', borderRadius: 20,
            border: answers[q.key] === opt ? '2px solid var(--accent)' : '2px solid transparent',
            marginBottom: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16,
            boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
            transition: '0.2s'
          }}
        >
          <div style={{
            width: 24, height: 24, borderRadius: '50%',
            border: answers[q.key] === opt ? '7px solid var(--accent)' : '2px solid #cbd5e1',
          }} />
          <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)' }}>{opt}</span>
        </div>
      ))}

      <button
        onClick={handleNext}
        style={{
          width: '100%', padding: '18px', border: 'none', borderRadius: 20,
          background: 'var(--accent)',
          color: '#ffffff', fontSize: 16, fontWeight: 800, marginTop: 40,
          cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          boxShadow: '0 8px 24px rgba(45, 212, 191, 0.4)',
        }}
      >
        {step < questions.length - 1 ? (
          <>ดำเนินการต่อ <ChevronRight size={20} strokeWidth={3} /></>
        ) : (
          <>ประมวลผล Skill Gap <Target size={20} strokeWidth={2.5} /></>
        )}
      </button>
    </div>
  )
}
