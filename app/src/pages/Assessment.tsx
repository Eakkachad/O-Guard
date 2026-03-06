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
    label: 'กลุ่มอุตสาหกรรมหรือสายงานที่คุณสนใจที่สุดในตอนนี้?', 
    type: 'radio', 
    options: ['งานคลังสินค้าและโลจิสติกส์ (Logistics)', 'งานช่างฝีมือและงานบริการ (Craft & Service)', 'งานด้านดิจิทัลและการจัดการ (Digital)'],
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
    <div style={{ minHeight: '100vh', background: '#0a0a0a', padding: '60px 20px 40px' }}>
      {/* Progress */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 32 }}>
        {questions.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 4, borderRadius: 2,
            background: i <= step ? '#e6e622' : '#333', transition: '.3s',
          }} />
        ))}
      </div>

      {/* Back */}
      <div
        onClick={() => step > 0 ? setStep(s => s - 1) : navigate('/')}
        style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#888', cursor: 'pointer', marginBottom: 24 }}
      >
        {step > 0 ? <><ArrowLeft size={14} /> กลับ</> : <><X size={14} /> ยกเลิก</>}
      </div>

      {/* Icon + Question */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10, background: '#1a1a1a',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid #2a2a2a',
        }}>
          <Icon size={20} color="#e6e622" strokeWidth={1.5} />
        </div>
        <span style={{ fontSize: 12, color: '#555' }}>คำถาม {step + 1}/{questions.length}</span>
      </div>
      <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, lineHeight: 1.5 }}>{q.label}</h2>

      {q.type === 'radio' && q.options?.map(opt => (
        <div
          key={opt}
          onClick={() => setAnswers({ ...answers, [q.key]: opt })}
          style={{
            padding: '14px 16px', background: '#1a1a1a', borderRadius: 10,
            border: answers[q.key] === opt ? '2px solid #e6e622' : '1px solid #333',
            marginBottom: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
          }}
        >
          <div style={{
            width: 18, height: 18, borderRadius: '50%',
            border: answers[q.key] === opt ? '5px solid #e6e622' : '2px solid #555',
          }} />
          <span style={{ fontSize: 14 }}>{opt}</span>
        </div>
      ))}

      <button
        onClick={handleNext}
        style={{
          width: '100%', padding: '16px', border: 'none', borderRadius: 12,
          background: 'linear-gradient(135deg, #c8e622, #e6e622)',
          color: '#000', fontSize: 15, fontWeight: 700, marginTop: 32,
          cursor: 'pointer', fontFamily: 'inherit',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}
      >
        {step < questions.length - 1 ? (
          <>ถัดไป <ChevronRight size={18} /></>
        ) : (
          <>ค้นหาสิ่งที่เหมาะกับคุณ <Target size={18} /></>
        )}
      </button>
    </div>
  )
}
