import { Trophy, User, Medal } from 'lucide-react'

const leaderboard = [
  { rank: 1, name: 'สมชาย รักเรียน', score: 2450 },
  { rank: 2, name: 'สุดา เรียนดี', score: 2100 },
  { rank: 3, name: 'มานะ พยายาม', score: 1890 },
  { rank: 4, name: 'วิภา ใฝ่รู้', score: 1650 },
  { rank: 5, name: 'ชาติ ก้าวหน้า', score: 1520 },
  { rank: 6, name: 'บัว สู้ชีวิต', score: 1400 },
  { rank: 7, name: 'คำ อดทน', score: 1280 },
  { rank: 8, name: 'แก้ว มุ่งมั่น', score: 1150 },
  { rank: 9, name: 'ทอง ขยัน', score: 1020 },
  { rank: 10, name: 'เพชร หมั่นเรียน', score: 960 },
]

export default function Idol() {
  return (
    <div>
      <div style={{ padding: '20px 16px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Trophy size={20} color="#e6e622" />
          <h3 style={{ fontSize: 18, fontWeight: 700 }}>ไอดอล – ผู้เรียนดีเด่น</h3>
        </div>
        <p style={{ fontSize: 12, color: '#888', marginTop: 4 }}>อันดับผู้ที่มีแต้มสะสมสูงสุด</p>
      </div>

      {leaderboard.map((user) => (
        <div
          key={user.rank}
          style={{
            display: 'flex', alignItems: 'center', gap: 12,
            padding: '12px 16px', borderBottom: '1px solid #1a1a1a',
            background: user.rank === 1 ? 'rgba(230,230,34,.05)' : 'transparent',
          }}
        >
          <div style={{
            width: 28, textAlign: 'center', fontSize: 14, fontWeight: 700,
            color: user.rank <= 3 ? '#e6e622' : '#555',
          }}>
            {user.rank <= 3 ? <Medal size={18} color="#e6e622" strokeWidth={2} /> : user.rank}
          </div>

          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: user.rank === 1 ? '#e6e622' : '#1a1a1a',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, border: user.rank <= 3 ? '2px solid #e6e622' : '1px solid #333',
          }}>
            <User size={16} color={user.rank === 1 ? '#000' : '#888'} strokeWidth={1.5} />
          </div>

          <div style={{ flex: 1 }}>
            <h4 style={{
              fontSize: 13, fontWeight: user.rank <= 3 ? 700 : 500,
              color: user.rank <= 3 ? '#e6e622' : '#fff',
            }}>{user.name}</h4>
          </div>

          <div style={{
            fontSize: 12, fontWeight: 600,
            color: user.rank <= 3 ? '#e6e622' : '#555',
          }}>{user.score.toLocaleString()} pts</div>
        </div>
      ))}

      <div style={{ padding: 20, textAlign: 'center' }}>
        <p style={{ fontSize: 11, color: '#555' }}>แต้มสะสมจากการเรียนจบหลักสูตร สอบผ่าน และช่วยเหลือ Community</p>
      </div>
    </div>
  )
}
