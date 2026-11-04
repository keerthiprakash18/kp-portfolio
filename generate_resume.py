import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT

def create_resume(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=26,
        bottomMargin=24
    )

    story = []
    
    PRIMARY = colors.HexColor("#0f2444")     # Corporate Navy
    SECONDARY = colors.HexColor("#1e3a68")   # Slate Blue
    BODY_COLOR = colors.HexColor("#222222")  # Charcoal
    MUTED = colors.HexColor("#555555")       # Grey
    LINE_COLOR = colors.HexColor("#0f2444")  # Section Line

    title_style = ParagraphStyle(
        'DocTitle',
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=20,
        alignment=TA_CENTER,
        textColor=PRIMARY
    )

    tagline_style = ParagraphStyle(
        'Tagline',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        alignment=TA_CENTER,
        textColor=SECONDARY
    )

    contact_style = ParagraphStyle(
        'Contact',
        fontName='Helvetica',
        fontSize=8,
        leading=11,
        alignment=TA_CENTER,
        textColor=MUTED
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=PRIMARY,
        spaceAfter=1
    )

    body_style = ParagraphStyle(
        'Body',
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=BODY_COLOR
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        fontName='Helvetica',
        fontSize=8,
        leading=10.5,
        textColor=BODY_COLOR,
        leftIndent=10,
        firstLineIndent=-6
    )

    bold_label = ParagraphStyle(
        'BoldLabel',
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        textColor=PRIMARY
    )

    right_meta = ParagraphStyle(
        'RightMeta',
        fontName='Helvetica-Bold',
        fontSize=8,
        leading=10.5,
        alignment=TA_RIGHT,
        textColor=SECONDARY
    )

    # 1. Header
    story.append(Paragraph("KEERTHI PRAKASH T", title_style))
    story.append(Spacer(1, 2))
    story.append(Paragraph("DATA ANALYST &bull; BUSINESS ANALYTICS &bull; SOFTWARE DEVELOPER", tagline_style))
    story.append(Spacer(1, 3))
    
    contacts = "Tamil Nadu, India &nbsp;|&nbsp; +91 63819 81530 &nbsp;|&nbsp; keerthiprakash.kp33@gmail.com &nbsp;|&nbsp; linkedin.com/in/keerthiprakasht &nbsp;|&nbsp; github.com/keerthiprakash18"
    story.append(Paragraph(contacts, contact_style))
    story.append(Spacer(1, 5))

    def add_section_header(title):
        story.append(Paragraph(title.upper(), section_heading))
        story.append(HRFlowable(width="100%", thickness=1, color=LINE_COLOR, spaceBefore=1, spaceAfter=4))

    # 2. Professional Summary
    add_section_header("Professional Summary")
    summary_text = (
        "Analytical Data Analyst with a B.Tech in Artificial Intelligence & Data Science from CARE College "
        "of Engineering (CGPA: 7.29/10). Hands-on proficiency in SQL, PostgreSQL, Python (Pandas, NumPy), Advanced Excel, and Power BI "
        "for business reporting, exploratory data analysis, and dashboard design. Published author of original research in IJFMR "
        "automating analytical reporting workflows with a 70%+ turnaround reduction. Combines analytical rigor with full-stack execution, "
        "having engineered and shipped live production web applications including FC Arena and Smart Expense Tracker."
    )
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 5))

    # 3. Technical Skills
    add_section_header("Technical Skills")
    skills_data = [
        [
            Paragraph("<b>Data Analytics & BI:</b>", bold_label),
            Paragraph("SQL, PostgreSQL, Relational DB Design, Power BI, Advanced Excel (XLOOKUP, Pivot Tables, Solver), Power Query, KPI Tracking, MIS Reporting, Data Cleaning.", body_style)
        ],
        [
            Paragraph("<b>Python & Automation:</b>", bold_label),
            Paragraph("Python, Pandas, NumPy, Exploratory Data Analysis (EDA), Statistical Modeling, Automated Data Pipelines, Anomaly Detection.", body_style)
        ],
        [
            Paragraph("<b>Software Engineering:</b>", bold_label),
            Paragraph("React, Next.js, Django REST Framework, NestJS, RESTful API Architecture, Redis, Docker, Git/GitHub, Cloud Deployment (Vercel, Railway).", body_style)
        ]
    ]
    skills_table = Table(skills_data, colWidths=[115, 425])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 0),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 5))

    # 4. Professional Experience & Internships
    add_section_header("Professional Experience & Internships")
    
    # Corizo
    exp1_row = [
        Paragraph("<b>Data Science Intern</b> &nbsp;|&nbsp; Corizo EdTech Pvt Ltd", bold_label),
        Paragraph("Aug 2025 &ndash; Sep 2025", right_meta)
    ]
    t_exp1 = Table([exp1_row], colWidths=[390, 150])
    t_exp1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_exp1)
    story.append(Paragraph("&bull; Performed exploratory data analysis (EDA) on structured business datasets using Python, Pandas, and NumPy to identify behavioral trends.", bullet_style))
    story.append(Paragraph("&bull; Built analytical Excel dashboards with automated formulas and pivot tables, improving reporting efficiency for educational metrics.", bullet_style))
    story.append(Paragraph("&bull; Collaborated on analytical case studies translating complex dataset patterns into executive summaries and actionable recommendations.", bullet_style))
    story.append(Spacer(1, 4))

    # Kaashiv
    exp2_row = [
        Paragraph("<b>Networking & Systems Intern</b> &nbsp;|&nbsp; Kaashiv InfoTech", bold_label),
        Paragraph("Aug 2024 &ndash; Sep 2024", right_meta)
    ]
    t_exp2 = Table([exp2_row], colWidths=[390, 150])
    t_exp2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_exp2)
    story.append(Paragraph("&bull; Configured network topologies, IP routing, subnet masks, and packet troubleshooting protocols in simulated enterprise environments.", bullet_style))
    story.append(Paragraph("&bull; Maintained technical documentation and system log audits to support infrastructure reliability.", bullet_style))
    story.append(Spacer(1, 5))

    # 5. Key Projects
    add_section_header("Key Projects")

    # FC Arena
    proj1_row = [
        Paragraph("<b>FC Arena &ndash; Football Esports Tournament Management Platform</b> &nbsp;[<i>Live: fcarena.in</i>]", bold_label),
        Paragraph("Next.js, NestJS, PostgreSQL, Redis", right_meta)
    ]
    t_proj1 = Table([proj1_row], colWidths=[370, 170])
    t_proj1.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_proj1)
    story.append(Paragraph("&bull; Architected and shipped an end-to-end tournament platform supporting player registrations, dynamic brackets, and match records.", bullet_style))
    story.append(Paragraph("&bull; Developed automated Round-Robin and Home/Away scheduling algorithms with strict result validation and anti-duplicate count safeguards.", bullet_style))
    story.append(Paragraph("&bull; Designed SQL database schemas in PostgreSQL with Prisma ORM; deployed in production, servicing 20+ active competitive players.", bullet_style))
    story.append(Spacer(1, 4))

    # Smart Expense Tracker
    proj2_row = [
        Paragraph("<b>Smart Expense Tracker &ndash; Personal Finance Application</b> &nbsp;[<i>smart-expense-tracker-v3.vercel.app</i>]", bold_label),
        Paragraph("Django REST, React, PostgreSQL, OCR", right_meta)
    ]
    t_proj2 = Table([proj2_row], colWidths=[370, 170])
    t_proj2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_proj2)
    story.append(Paragraph("&bull; Built a full-stack financial management tool with category-level budgeting, recurring transaction rules, and cash-flow visualizations.", bullet_style))
    story.append(Paragraph("&bull; Integrated OCR document extraction pipeline to parse receipt data (merchant, amount, GSTIN, payment method) directly into structured SQL records.", bullet_style))
    story.append(Paragraph("&bull; Implemented robust JWT authentication, email 2FA verification, data backup/restore, and CSV export functionality.", bullet_style))
    story.append(Spacer(1, 5))

    # 6. Research Publication
    add_section_header("Research Publication")
    pub_title = Paragraph("<b>Smart Daily Report Automation System Using AI</b> &nbsp;|&nbsp; <i>IJFMR, Vol. 8, Issue 2, Mar-Apr 2026 (Paper ID: 72819)</i>", bold_label)
    story.append(pub_title)
    story.append(Paragraph("&bull; Conducted research demonstrating automated business report extraction and aggregation from multi-source databases using Python & Pandas.", bullet_style))
    story.append(Paragraph("&bull; Implemented automated KPI derivation, variance detection, and NLP-driven summary generation, reducing manual reporting turnaround by over 70%.", bullet_style))
    story.append(Spacer(1, 5))

    # 7. Education & Training
    add_section_header("Education & Professional Training")
    
    edu_row = [
        Paragraph("<b>B.Tech &ndash; Artificial Intelligence & Data Science</b><br/><font color='#555555'>CARE College of Engineering, Tamil Nadu</font>", body_style),
        Paragraph("<b>2022 &ndash; 2026</b><br/><font color='#1e3a68'><b>CGPA: 7.29 / 10</b></font>", right_meta)
    ]
    t_edu = Table([edu_row], colWidths=[390, 150])
    t_edu.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0)]))
    story.append(t_edu)
    story.append(Spacer(1, 2))

    prog_data = [
        [
            Paragraph("&bull; <b>Data Analytics Intensive Program:</b> AccioJob (6-Month Rigorous Industry Track &ndash; Ongoing)", bullet_style)
        ],
        [
            Paragraph("&bull; <b>PwC Business Analytics Program:</b> Industry Analytics & Corporate Governance Simulation &ndash; Ongoing", bullet_style)
        ],
        [
            Paragraph("&bull; <b>Certifications:</b> Business Analytics with Excel (Simplilearn) &bull; Data Science (Corizo) &bull; Networking (Kaashiv)", bullet_style)
        ]
    ]
    t_prog = Table(prog_data, colWidths=[540])
    t_prog.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1)]))
    story.append(t_prog)

    doc.build(story)
    print("Resume PDF successfully built at:", output_path)

if __name__ == "__main__":
    create_resume(r"C:\Users\micha\keerthi-portfolio\public\resume.pdf")
