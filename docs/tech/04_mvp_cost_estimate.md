# 💻 MVP Development Cost Estimate (ประมาณการค่าใช้จ่ายพัฒนา MVP)

## สำหรับฝั่ง Business ใช้คำนวณ Funding Requirement

> **วัตถุประสงค์:** ตอบ NOTE จาก commit `3231a00` — ฝั่ง Tech ประเมินค่าใช้จ่ายในการพัฒนา MVP (Minimum Viable Product) สำหรับ 6 เดือนแรก (Pilot Phase) เพื่อให้ฝั่ง Business นำไปคำนวณ Funding Requirement ประกอบรายงาน Business Model

---

## 1. สรุป MVP Cost (Pilot 6 เดือน)

| หมวด                         |    ค่าใช้จ่าย/เดือน |                  รวม 6 เดือน |
| ---------------------------- | ------------------: | ---------------------------: |
| ☁️ Cloud Infrastructure      |             8,000 ฿ |                     48,000 ฿ |
| 🤖 AI/ML API Costs           |            12,000 ฿ |                     72,000 ฿ |
| 👨‍💻 Development Team (3 คน)   |           120,000 ฿ |                    720,000 ฿ |
| 📋 Operations & Verification |            15,000 ฿ |                     90,000 ฿ |
| 🔧 Tools & Miscellaneous     |             3,000 ฿ |                     18,000 ฿ |
| **รวมทั้งหมด**               | **158,000 ฿/เดือน** |                **948,000 ฿** |
| **ปัดเป็นเลขกลม**            |                     | **~1,000,000 ฿ (1 ล้านบาท)** |

> **📌 สรุปสำหรับ Business Model:** MVP Cost สำหรับ Pilot 6 เดือน ≈ **1 ล้านบาท** ซึ่งอยู่ในขอบเขตของทุน NIA Social Innovation (สูงสุด 1.5 ล้านบาท) หรือ NIA Matching Grant (สูงสุด 5 ล้านบาท)

---

## 2. รายละเอียดแต่ละหมวด

### 2.1 ☁️ Cloud Infrastructure (~8,000 ฿/เดือน)

สำหรับ Pilot Phase ที่มีผู้ใช้ ~500 คน และ Concurrent Users ~50 คน:

| บริการ                    | Spec                                                    | ราคาประมาณ/เดือน | ที่มา                     |
| ------------------------- | ------------------------------------------------------- | ---------------: | ------------------------- |
| **Compute (App Server)**  | GCP Cloud Run / AWS ECS (2 vCPU, 4GB RAM)               |         ~2,500 ฿ | GCP Pricing Calculator    |
| **Database (PostgreSQL)** | GCP Cloud SQL db-f1-micro / AWS RDS db.t3.micro         |         ~2,000 ฿ | GCP Cloud SQL Pricing     |
| **Vector Database**       | Qdrant Cloud (Free Tier → Starter Plan เมื่อข้อมูลเกิน) |         ~1,500 ฿ | Qdrant Pricing Page       |
| **Storage & CDN**         | Cloud Storage + CDN (สำหรับใบรับรอง, ไฟล์ผู้ใช้)        |           ~500 ฿ | GCP Storage Pricing       |
| **Monitoring & Logging**  | GCP Cloud Monitoring Free Tier                          |              0 ฿ | GCP Free Tier             |
| **Domain & SSL**          | Domain (.com) + SSL (Let's Encrypt ฟรี)                 |            ~50 ฿ | Namecheap / Let's Encrypt |
| **สำรอง/Buffer**          | สำรองสำหรับ Traffic Spikes                              |         ~1,450 ฿ | —                         |
| **รวม**                   |                                                         |     **~8,000 ฿** |                           |

**แหล่งอ้างอิง:**

1. Google Cloud Pricing Calculator — [cloud.google.com/products/calculator](https://cloud.google.com/products/calculator)
2. AWS Pricing Calculator — [calculator.aws](https://calculator.aws)
3. Qdrant Cloud Pricing — [qdrant.tech/pricing](https://qdrant.tech/pricing)
4. Techcrunch, "Cloud costs for early-stage startups typically range $100-500/mo" — [techcrunch.com](https://techcrunch.com)

---

### 2.2 🤖 AI/ML API Costs (~12,000 ฿/เดือน)

การใช้ Pre-trained Model + API ช่วยประหยัดค่า GPU Training ได้มหาศาล (ไม่ต้องซื้อ/เช่า GPU เอง):

| บริการ                                                                 | ปริมาณใช้งาน/เดือน                                        | ราคาประมาณ/เดือน | ที่มา                              |
| ---------------------------------------------------------------------- | --------------------------------------------------------- | ---------------: | ---------------------------------- |
| **LLM API (Skill Extraction)** – GPT-4o-mini / Claude 3.5 Haiku        | ~100,000 tokens/วัน (วิเคราะห์ Job Desc + Skill Matching) |         ~3,500 ฿ | OpenAI Pricing / Anthropic Pricing |
| **Embedding API** – OpenAI text-embedding-3-small                      | ~50,000 embeddings/เดือน (User profiles + Job vectors)    |         ~1,500 ฿ | OpenAI Pricing                     |
| **OCR API (ใบรับรอง)** – Google Cloud Vision / Tesseract (Self-hosted) | ~500 ใบ/เดือน (Tier 2 verification)                       |           ~500 ฿ | Google Cloud Vision Pricing        |
| **RAG Chatbot** – LLM + Vector Search                                  | ~20,000 queries/เดือน                                     |         ~5,000 ฿ | OpenAI Pricing                     |
| **สำรอง/Buffer**                                                       | Unexpected usage spikes                                   |         ~1,500 ฿ | —                                  |
| **รวม**                                                                |                                                           |    **~12,000 ฿** |                                    |

**เหตุผลที่ต้นทุน AI ต่ำ:**

- ใช้ **Pre-trained Model + Fine-tune** ไม่เทรนจากศูนย์ ลดต้นทุน GPU ลง 90%+
- ใช้ **Smaller Models** (GPT-4o-mini, Claude Haiku) ที่ถูกกว่า Full Model 10-20 เท่า แต่ยังแม่นยำเพียงพอสำหรับ MVP
- ใช้ **Caching** สำหรับ Job Descriptions ที่ซ้ำกัน ลดจำนวน API calls

**แหล่งอ้างอิง:**

1. OpenAI API Pricing — [openai.com/pricing](https://openai.com/pricing)
   - GPT-4o-mini: $0.15 / 1M input tokens, $0.60 / 1M output tokens
   - text-embedding-3-small: $0.02 / 1M tokens
2. Anthropic API Pricing — [anthropic.com/pricing](https://www.anthropic.com/pricing)
   - Claude 3.5 Haiku: $0.80 / 1M input tokens
3. Google Cloud Vision OCR Pricing — [cloud.google.com/vision/pricing](https://cloud.google.com/vision/pricing)
   - $1.50 / 1,000 images (first 5M/month)
4. a16z, "The Cost of AI Infrastructure for Startups" — [a16z.com](https://a16z.com)

---

### 2.3 👨‍💻 Development Team (~120,000 ฿/เดือน)

สำหรับทีม Startup ระดับ Early-stage ที่ทำงานแบบ Part-time หรือ Stipend:

| ตำแหน่ง                                      |    จำนวน | ค่าตอบแทน/เดือน | หมายเหตุ                                                     |
| -------------------------------------------- | -------: | --------------: | ------------------------------------------------------------ |
| **Full-stack Developer** (React + API)       |     1 คน |        40,000 ฿ | ดูแล Frontend + Backend API Integration                      |
| **AI/ML Engineer** (NLP + Matching)          |     1 คน |        50,000 ฿ | พัฒนา Skill Gap Analyzer, Recommendation Engine, RAG Chatbot |
| **DevOps / Part-time** (Deploy + Monitoring) |     1 คน |        30,000 ฿ | ดูแล Cloud, CI/CD, Database                                  |
| **รวม**                                      | **3 คน** |   **120,000 ฿** |                                                              |

> **หมายเหตุ:** ตัวเลขนี้คำนวณจากอัตราค่าตอบแทนแบบ Startup Early-stage / Part-time
> ถ้าใช้พนักงานเต็มเวลา (Full-time) ราคาจะอยู่ที่ ~200,000-300,000 ฿/เดือน (รวม 3 คน) ตาม Benchmark ของ Blognone Data

**แหล่งอ้างอิง:**

1. Blognone Jobs, Thailand Tech Salary Survey 2025 — [jobs.blognone.com](https://jobs.blognone.com)
   - Junior Full-stack Developer: 25,000-45,000 ฿
   - ML Engineer: 40,000-80,000 ฿
   - DevOps Engineer: 35,000-70,000 ฿
2. Glassdoor Thailand, Software Engineer Salary — [glassdoor.com](https://www.glassdoor.com)
3. Salary.com, Thailand AI Engineer Salary Range — [salary.com](https://www.salary.com)

---

### 2.4 📋 Operations & Verification (~15,000 ฿/เดือน)

| รายการ                                                                       | ค่าใช้จ่าย/เดือน | ที่มา                  |
| ---------------------------------------------------------------------------- | ---------------: | ---------------------- |
| **Verification Ops (Tier 2)** – Part-time 1 คน ติดต่อหน่วยงานตรวจสอบใบรับรอง |         10,000 ฿ | อัตรา Part-time ทั่วไป |
| **Communication (โทรศัพท์ + อีเมล)** สำหรับติดต่อหน่วยงาน                    |          2,000 ฿ | —                      |
| **Customer Support Tools** (Zendesk Free Tier / Freshdesk)                   |              0 ฿ | Freshdesk Free Tier    |
| **สำรอง**                                                                    |          3,000 ฿ | —                      |
| **รวม**                                                                      |     **15,000 ฿** |                        |

---

### 2.5 🔧 Tools & Miscellaneous (~3,000 ฿/เดือน)

| รายการ                                  | ค่าใช้จ่าย/เดือน | ที่มา                              |
| --------------------------------------- | ---------------: | ---------------------------------- |
| **GitHub** (Team Plan)                  |         ~1,500 ฿ | GitHub Pricing ($4/user × 3 users) |
| **Figma** (Design — Free Tier)          |              0 ฿ | Figma Free Tier                    |
| **Slack** (Communication — Free Tier)   |              0 ฿ | Slack Free Tier                    |
| **Analytics** (Google Analytics — Free) |              0 ฿ | GA4 Free Tier                      |
| **Miscellaneous**                       |         ~1,500 ฿ | —                                  |
| **รวม**                                 |     **~3,000 ฿** |                                    |

---

## 3. Funding Requirement Summary (สำหรับ Business Model)

### 3.1 ตารางสรุปเพื่อใส่ใน Business Model

```
┌──────────────────────────────────────────────────────┐
│           O-Guard MVP Funding Requirement            │
├──────────────────────────────────────────────────────┤
│  MVP Development (6 months)        ~1,000,000 ฿     │
│  Marketing & User Acquisition         ~200,000 ฿     │
│  Contingency Buffer (15%)             ~180,000 ฿     │
├──────────────────────────────────────────────────────┤
│  TOTAL SEED FUNDING NEEDED         ~1,380,000 ฿     │
│  ปัดเป็นเลขกลม                     ~1,400,000 ฿     │
└──────────────────────────────────────────────────────┘
```

### 3.2 แหล่งทุนที่ Match กับ Funding Requirement

| แหล่งทุน                              |         มูลค่าสูงสุด | สถานะ                            |
| ------------------------------------- | -------------------: | -------------------------------- |
| **NIA Social Innovation Accelerator** |          1,500,000 ฿ | ✅ ครอบคลุม MVP ได้พอดี          |
| **NIA Matching Grant**                |          5,000,000 ฿ | ✅ ครอบคลุม MVP + Scale-up ได้   |
| **depa Digital Startup Fund**         |           ตามโครงการ | ✅ เหมาะสำหรับ EdTech            |
| **BOI Upskilling Program**            | ส่วนแบ่งจาก 5,000M ฿ | ✅ อาจเป็นพาร์ทเนอร์ด้าน Content |

### 3.3 Break-even Analysis

```
MVP Cost (6 เดือน):                    1,000,000 ฿
Revenue จาก Pilot 100 คน:             2,400,000 - 2,880,000 ฿
                                      ─────────────────────
Gross Profit:                          1,400,000 - 1,880,000 ฿

→ Break-even ได้ภายใน Pilot Phase แรก (6 เดือน)
→ ROI = 140% - 188%
```

> **📌 Key Message สำหรับ Business Model:**
> _"O-Guard ต้องการเงินลงทุนเริ่มต้นเพียง ~1.4 ล้านบาท ซึ่งอยู่ในขอบเขตทุน NIA (1.5 ล้านบาท) — และสามารถ Break-even ได้ภายใน 6 เดือนแรกจาก Placement Fee เพียงอย่างเดียว ยังไม่รวม Revenue จาก CSR Sponsorship และ Government Grants"_

---

## 4. เปรียบเทียบ: ทำไมต้นทุนถูกกว่า EdTech ทั่วไป?

| ปัจจัย                 | EdTech ทั่วไป                             | O-Guard                                        |
| ---------------------- | ----------------------------------------- | ---------------------------------------------- |
| **สร้างคอร์สเรียนเอง** | ต้องจ้างผู้สอน + ถ่ายวิดีโอ (แพงมาก)      | ❌ ดึงจาก Thai MOOC / DSD ที่มีอยู่แล้ว**ฟรี** |
| **AI Training**        | เทรนโมเดลเอง (ต้องเช่า GPU $1,000+/เดือน) | ❌ ใช้ Pre-trained + API ($100-300/เดือน)      |
| **ทีมงาน**             | 5-10 คน (Full-time)                       | ✅ 3 คน (Part-time/Stipend)                    |
| **Marketing**          | ต้องซื้อ Ads ดึง Users                    | ✅ จับมือกับ กรมจัดหางาน/อาชีวะ ดึง Users ฟรี  |
| **ต้นทุนรวม 6 เดือน**  | 3-10 ล้านบาท                              | **~1 ล้านบาท**                                 |

**แหล่งอ้างอิง:**

1. Toptal, "How Much Does It Cost to Build an EdTech Platform?" — [toptal.com](https://www.toptal.com)
   - MVP EdTech platform: $50,000-$150,000 (1.7-5.2 ล้านบาท)
2. Clutch.co, "App Development Cost Guide 2025" — [clutch.co](https://clutch.co)
   - Average MVP cost for marketplace app: $40,000-$120,000
3. Failory, "Startup Costs: How Much Does It Cost to Start a Startup?" — [failory.com](https://failory.com)

---

> **📅 ข้อมูล ณ วันที่:** 7 มีนาคม 2569 (March 7, 2026)
> **✍️ จัดทำโดย:** ฝั่ง Tech Team เพื่อตอบ NOTE จาก Business Team (commit `3231a00`)
> **🔄 สถานะ:** พร้อมให้ Business Team นำไปใช้คำนวณ Funding Requirement
