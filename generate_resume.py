import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_executive_resume(output_path):
    # Generous margins for a clean, open executive layout
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=44,
        leftMargin=44,
        topMargin=40,
        bottomMargin=40
    )

    story = []
    
    # Modern Executive Palette (Deep Slate Navy, Graphite, Cool Accent)
    PRIMARY = colors.HexColor("#0B1B3D")       # Authority Navy
    ACCENT = colors.HexColor("#1A56DB")        # Professional Blue
    DARK_TEXT = colors.HexColor("#111827")     # Charcoal Black (High contrast, easy on eyes)
    SUB_TEXT = colors.HexColor("#374151")      # Slate Dark
    MUTED = colors.HexColor("#4B5563")         # Neutral Grey
    BORDER = colors.HexColor("#D1D5DB")        # Subtle Divider

    # Large, Highly Readable Typography (10pt - 10.5pt body for effortless reading)
    title_style = ParagraphStyle(
        'DocTitle',
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        alignment=TA_CENTER,
        textColor=PRIMARY
    )

    tagline_style = ParagraphStyle(
        'Tagline',
        fontName='Helvetica-Bold',
        fontSize=11.5,
        leading=16,
        alignment=TA_CENTER,
        textColor=ACCENT
    )

    contact_style = ParagraphStyle(
        'Contact',
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        alignment=TA_CENTER,
        textColor=MUTED
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=PRIMARY,
        spaceAfter=3
    )

    item_title = ParagraphStyle(
        'ItemTitle',
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=DARK_TEXT
    )

    item_sub = ParagraphStyle(
        'ItemSub',
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13.5,
        textColor=ACCENT
    )

    right_meta = ParagraphStyle(
        'RightMeta',
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        alignment=TA_RIGHT,
        textColor=MUTED
    )

    body_style = ParagraphStyle(
        'Body',
        fontName='Helvetica',
        fontSize=10,
        leading=14.5,
        textColor=DARK_TEXT
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        fontName='Helvetica',
        fontSize=10,
        leading=14.5,
        textColor=DARK_TEXT,
        leftIndent=14,
        firstLineIndent=-9,
        spaceAfter=3
    )

    # 1. HEADER
    story.append(Paragraph("KEERTHI PRAKASH T", title_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("Data Analyst &nbsp;|&nbsp; Business Intelligence &nbsp;|&nbsp; Software Developer", tagline_style))
    story.append(Spacer(1, 6))
    
    contacts = "Tamil Nadu, India &nbsp;&bull;&nbsp; +91 63819 81530 &nbsp;&bull;&nbsp; keerthiprakash.kp33@gmail.com<br/><b>LinkedIn:</b> linkedin.com/in/keerthiprakasht &nbsp;&bull;&nbsp; <b>GitHub:</b> github.com/keerthiprakash18"
    story.append(Paragraph(contacts, contact_style))
    story.append(Spacer(1, 14))

    def add_section_header(title):
        story.append(Paragraph(title.upper(), section_heading))
        story.append(HRFlowable(width="100%", thickness=1.5, color=PRIMARY, spaceBefore=3, spaceAfter=8))

    # 2. PROFESSIONAL SUMMARY
    add_section_header("Professional Summary")
    summary_text = (
        "Analytical and product-driven Data Analyst graduating with a <b>B.Tech in Artificial Intelligence & Data Science</b> "
        "from CARE College of Engineering (CGPA: 7.29/10). Strong hands-on competence in <b>SQL, PostgreSQL, Python (Pandas, NumPy), "
        "Advanced Excel, and Power BI</b> for data modeling, exploratory data analysis, and decision-support dashboards. "
        "Published author in <i>IJFMR</i> for developing an automated analytical reporting pipeline that cut reporting turnaround by <b>70%+</b>. "
        "Proven ability to translate business requirements into working software, having engineered and launched production products including "
        "<b>FC Arena</b> and <b>Smart Expense Tracker</b>."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 14))

    # 3. CORE TECHNICAL SKILLS
    add_section_header("Core Technical Skills")
    skills_data = [
        [
            Paragraph("<b>Data & BI Analytics:</b>", item_title),
            Paragraph("SQL, PostgreSQL, Power BI, Advanced Excel (XLOOKUP, Pivot Tables, What-If Analysis), Power Query, Relational Database Modeling, KPI Tracking, Data Cleansing, MIS Reporting.", body_style)
        ],
        [
            Paragraph("<b>Python & Data Science:</b>", item_title),
            Paragraph("Python, Pandas, NumPy, Exploratory Data Analysis (EDA), Statistical Aggregations, Automated Reporting Pipelines, Anomaly Detection.", body_style)
        ],
        [
            Paragraph("<b>Software Engineering:</b>", item_title),
            Paragraph("React, Next.js, Django REST Framework, NestJS, RESTful APIs, Redis, Docker, Git / GitHub, Vercel & Railway Deployment.", body_style)
        ]
    ]
    skills_table = Table(skills_data, colWidths=[150, 374])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 5),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 14))

    # 4. PROFESSIONAL EXPERIENCE
    add_section_header("Professional Experience & Internships")
    
    # Corizo
    exp1_header = [
        Paragraph("<b>Data Science Intern</b> &nbsp;|&nbsp; <font color='#1A56DB'>Corizo EdTech Pvt Ltd</font>", item_title),
        Paragraph("Aug 2025 &ndash; Sep 2025", right_meta)
    ]
    t_exp1 = Table([exp1_header], colWidths=[384, 140])
    t_exp1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_exp1)
    story.append(Spacer(1, 3))
    story.append(Paragraph("&bull; Conducted exploratory data analysis (EDA) across structured academic and business datasets using Python (Pandas, NumPy) to evaluate student engagement patterns.", bullet_style))
    story.append(Paragraph("&bull; Built multi-dimensional Excel reporting templates utilizing dynamic formulas, pivot tables, and conditional logic to support operational decision-making.", bullet_style))
    story.append(Paragraph("&bull; Synthesized analytical findings into structured summary reports, communicating insights and data trends clearly to mentors and stakeholders.", bullet_style))
    story.append(Spacer(1, 9))

    # Kaashiv
    exp2_header = [
        Paragraph("<b>Networking & Systems Intern</b> &nbsp;|&nbsp; <font color='#1A56DB'>Kaashiv InfoTech</font>", item_title),
        Paragraph("Aug 2024 &ndash; Sep 2024", right_meta)
    ]
    t_exp2 = Table([exp2_header], colWidths=[384, 140])
    t_exp2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_exp2)
    story.append(Spacer(1, 3))
    story.append(Paragraph("&bull; Configured network topologies, IP addressing schemes, subnet masks, and packet routing protocols in simulated enterprise networking labs.", bullet_style))
    story.append(Paragraph("&bull; Performed connectivity troubleshooting, traffic diagnostics, and technical system documentation to maintain operational continuity.", bullet_style))
    story.append(Spacer(1, 14))

    # 5. KEY PROJECTS
    add_section_header("Key Projects")

    # FC Arena
    proj1_header = [
        Paragraph("<b>FC Arena &ndash; Football Esports Tournament Platform</b> &nbsp;[<i>fcarena.in</i>]", item_title),
        Paragraph("Next.js &bull; NestJS &bull; PostgreSQL &bull; Redis", right_meta)
    ]
    t_proj1 = Table([proj1_header], colWidths=[354, 170])
    t_proj1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_proj1)
    story.append(Spacer(1, 3))
    story.append(Paragraph("&bull; Engineered and deployed a comprehensive full-stack tournament platform handling team registrations, live fixtures, and tournament brackets.", bullet_style))
    story.append(Paragraph("&bull; Designed automated Round-Robin and Home/Away match scheduling algorithms with strict result validation and anti-duplicate count logic.", bullet_style))
    story.append(Paragraph("&bull; Structured relational database schemas in PostgreSQL using Prisma ORM; actively deployed with 20+ competitive esports players.", bullet_style))
    story.append(Spacer(1, 9))

    # Smart Expense Tracker
    proj2_header = [
        Paragraph("<b>Smart Expense Tracker &ndash; Personal Finance Application</b> &nbsp;[<i>Live on Vercel</i>]", item_title),
        Paragraph("Django REST &bull; React &bull; PostgreSQL &bull; OCR", right_meta)
    ]
    t_proj2 = Table([proj2_header], colWidths=[354, 170])
    t_proj2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_proj2)
    story.append(Spacer(1, 3))
    story.append(Paragraph("&bull; Developed a responsive financial management application with category budgeting, recurring expense rules, and cash-flow analytics.", bullet_style))
    story.append(Paragraph("&bull; Integrated an OCR receipt ingestion pipeline that automatically extracts merchant, date, amount, and GSTIN into verified database records.", bullet_style))
    story.append(Paragraph("&bull; Implemented JWT authentication, email 2FA verification, data backup/restore utilities, and custom CSV financial reporting.", bullet_style))
    story.append(Spacer(1, 14))

    # 6. RESEARCH PUBLICATION
    add_section_header("Research Publication")
    pub_title = Paragraph("<b>Smart Daily Report Automation System Using AI</b> &nbsp;|&nbsp; <i>IJFMR, Vol. 8, Issue 2, Mar-Apr 2026 (Paper ID: 72819)</i>", item_title)
    story.append(pub_title)
    story.append(Spacer(1, 3))
    story.append(Paragraph("&bull; Authored research demonstrating automated data extraction, cleaning, and aggregation from multi-source databases using Python and Pandas.", bullet_style))
    story.append(Paragraph("&bull; Integrated automated KPI computation, variance tracking, and NLP-driven narrative summaries, reducing manual daily report turnaround by <b>70%+</b>.", bullet_style))
    story.append(Spacer(1, 14))

    # 7. EDUCATION & PROFESSIONAL TRAINING
    add_section_header("Education & Professional Training")
    
    edu_header = [
        Paragraph("<b>B.Tech &ndash; Artificial Intelligence & Data Science</b><br/><font color='#4B5563'>CARE College of Engineering, Tamil Nadu</font>", item_title),
        Paragraph("<b>2022 &ndash; 2026</b><br/><font color='#1A56DB'><b>CGPA: 7.29 / 10</b></font>", right_meta)
    ]
    t_edu = Table([edu_header], colWidths=[384, 140])
    t_edu.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_edu)
    story.append(Spacer(1, 5))

    programs_data = [
        [
            Paragraph("&bull; <b>Data Analytics Intensive Program:</b> AccioJob &ndash; 6-Month Hands-on Program covering SQL, Python & Power BI (Ongoing)", bullet_style)
        ],
        [
            Paragraph("&bull; <b>PwC Business Analytics Program:</b> Industry Simulation, Financial KPIs & Corporate Case Studies (Ongoing)", bullet_style)
        ],
        [
            Paragraph("&bull; <b>Certifications:</b> Business Analytics with Excel (Simplilearn) &bull; Data Science Training (Corizo) &bull; Networking (Kaashiv InfoTech)", bullet_style)
        ]
    ]
    t_prog = Table(programs_data, colWidths=[524])
    t_prog.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2)
    ]))
    story.append(t_prog)

    doc.build(story)
    print("Executive Large-Font Resume successfully generated at:", output_path)

if __name__ == "__main__":
    create_executive_resume(r"C:\Users\micha\keerthi-portfolio\public\resume.pdf")
