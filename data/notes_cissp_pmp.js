// Comprehensive study notes for CISSP and PMP
window.NOTES_DATA = window.NOTES_DATA || {};

window.NOTES_DATA["cissp"] = {
  title: "CISSP (Certified Information Systems Security Professional)",
  description: "Advanced cybersecurity management — 8 domains of the (ISC)² CBK",
  sections: [
    {
      title: "1. Security and Risk Management",
      content: `
**CIA Triad — The Foundation**
- **Confidentiality** — only authorized disclosure
- **Integrity** — data not altered
- **Availability** — access when needed

**Risk Management Process**
1. **Identify** assets, threats, vulnerabilities
2. **Assess** likelihood × impact
3. **Treat** — Mitigate, Transfer, Accept, Avoid
4. **Monitor & review**

**Risk Treatment Options**
- **Mitigate** — implement controls to reduce
- **Transfer** — insurance, outsourcing, contractual
- **Accept** — explicitly accept the risk
- **Avoid** — eliminate by discontinuing activity

**Quantitative vs Qualitative Risk**
- **Quantitative** — assigns dollar values (AV, EF, SLE, ALE)
  - **SLE** = Asset Value × Exposure Factor
  - **ARO** = Annualized Rate of Occurrence
  - **ALE** = SLE × ARO
  - **Cost-Benefit**: Control cost vs ALE reduction
- **Qualitative** — High/Medium/Low; faster, less data

**Laws, Regulations, Compliance**
- **HIPAA** — US healthcare privacy
- **GLBA** — US financial privacy
- **SOX** — financial reporting integrity
- **FISMA** — federal information security
- **PCI DSS** — payment card industry
- **GDPR** — EU data protection (extraterritorial)
- **CCPA** — California Consumer Privacy Act
- **ITAR** — defense articles export
- **DMCA** — copyright

**Frameworks & Standards**
- **ISO 27001/27002** — ISMS
- **NIST CSF** — Identify, Protect, Detect, Respond, Recover
- **NIST 800-53** — federal security controls catalog
- **COBIT** — IT governance
- **COSO** — internal control framework
- **ITIL** — IT service management

**Ethics (ISC² Code)**
- Protect society, common good
- Act honorably, honestly, justly
- Provide diligent and competent service
- Advance and protect the profession
`
    },
    {
      title: "2. Asset Security",
      content: `
**Information Classification**
- **Government/Military**: Top Secret → Secret → Confidential → Unclassified
- **Commercial**: Confidential → Private → Sensitive → Public

**Data Lifecycle**
1. Create/Receive
2. Distribute
3. Use
4. Store
5. Archive
6. Destroy

**Data States**
- **At rest** — stored (DB, disk, backup) — encrypt
- **In motion** — transit (network) — TLS, IPsec
- **In use** — being processed (memory) — harder to protect

**Data Roles**
- **Data Owner** — accountable for the data (senior mgmt)
- **Data Steward** — implements policies
- **Data Custodian** — handles day-to-day (IT/ops)
- **Data User** — anyone accessing data
- **Data Processor** — processes on behalf of controller (GDPR)

**Data Handling Requirements**
- Labeling
- Storage
- Transmission
- Disposal
- Retention

**Secure Disposal Methods**
- **Clear** — overwrite (not for SSD!)
- **Purge** — degauss, cryptographic erase
- **Destroy** — shred, incinerate, pulverize

**Memory Types (SDLC/DRM)**
- **ROM** — read-only
- **RAM** — volatile
- **DRAM** — must be refreshed
- **SRAM** — faster, used for cache
- **Flash** — SSD, USB drives
`
    },
    {
      title: "3. Security Architecture & Engineering",
      content: `
**Design Principles (Saltzer & Schroeder)**
- **Economy of mechanism** — simple is secure
- **Fail-safe defaults** — deny by default
- **Complete mediation** — every access checked
- **Open design** — security shouldn't depend on secrecy
- **Separation of privilege** — multi-factor
- **Least privilege** — minimum access
- **Least common mechanism** — shared only when necessary
- **Psychological acceptability** — user-friendly

**Security Models**
- **Bell-LaPadula (BLP)** — CONFIDENTIALITY
  - No Read Up (Simple Security)
  - No Write Down (Star Property)
- **Biba** — INTEGRITY
  - No Read Down
  - No Write Up
- **Clark-Wilson** — INTEGRITY, well-formed transactions
- **Brewer-Nash (Chinese Wall)** — conflict of interest
- **Non-Interference** — actions of high-level users don't affect low-level

**Evaluation Criteria**
- **TCSEC (Orange Book)** — A1 (verified design) down to D
- **ITSEC** — European, F-B1-B3, E0-E6
- **Common Criteria (CC)** — international, EAL1-7
  - TOE (Target of Evaluation)
  - Protection Profile (PP)
  - Security Target (ST)

**Cryptography Concepts**
- **Symmetric** — one shared key (AES, 3DES, ChaCha20)
- **Asymmetric** — key pair (RSA, ECC, DSA)
- **Hashing** — SHA-256, HMAC
- **Modes** — ECB (weak), CBC, GCM (auth + confidentiality)
- **Padding** — PKCS#7, OAEP

**Physical Security**
- **Crime Prevention Through Environmental Design (CPTED)**
  - Natural access control
  - Natural surveillance
  - Territorial reinforcement
- **Defense in depth** — multiple physical layers
- **Bollards, fences, gates, guards, locks, mantraps, CCTV**
- **Lighting, alarms, fire detection/suppression**
`
    },
    {
      title: "4. Communication & Network Security",
      content: `
**OSI 7 Layers (Bottom → Top)**
1. **Physical** — cables, hubs
2. **Data Link** — switches, MAC
3. **Network** — routers, IP
4. **Transport** — TCP/UDP
5. **Session** — sockets
6. **Presentation** — encryption, formats
7. **Application** — HTTP, DNS, SMTP

**TCP/IP 4 Layers**
- Link, Internet, Transport, Application

**Protocols**
- **TCP** — connection-oriented, reliable (3-way handshake: SYN, SYN-ACK, ACK)
- **UDP** — connectionless, fast
- **ICMP** — ping, error messages
- **ARP** — IP to MAC
- **DHCP** — auto-assign IPs
- **DNS** — name resolution
- **HTTP/HTTPS** — web
- **SMTP/POP3/IMAP** — email
- **SNMP** — network management
- **LDAP** — directory

**Network Devices**
- **Hub** — Layer 1, broadcasts everything
- **Bridge** — Layer 2, filters by MAC
- **Switch** — Layer 2, multi-port bridge
- **Router** — Layer 3, forwards packets between networks
- **Gateway** — converts between protocols
- **Firewall** — filters traffic (stateful, NGFW)
- **IDS/IPS** — detect/prevent intrusions
- **WAF** — web app firewall
- **Proxy** — mediates client requests

**Network Types**
- **LAN, WLAN, MAN, WAN, PAN, CAN, SAN**
- **Intranet, Extranet, Internet, DMZ**
- **SD-WAN** — software-defined WAN
- **SDN** — software-defined networking

**Wireless**
- **802.11** family
- **WPA3** — current best (SAE)
- **WPA2** — still common
- **WEP** — broken
- **EAP variants** — EAP-TLS, EAP-TTLS, PEAP, LEAP

**Network Attacks**
- **DoS/DDoS** — flood
- **MITM** — intercept
- **Replay** — resend
- **ARP poisoning** — L2 spoof
- **DNS poisoning/spoofing** — corrupt DNS
- **VLAN hopping** — escape VLAN
- **MAC flooding** — overflow CAM table
- **Bluejacking/Bluesnarfing** — Bluetooth
- **War driving** — finding APs
- **Evil twin** — fake AP
`
    },
    {
      title: "5. Identity & Access Management (IAM)",
      content: `
**Authentication Factors**
- **Type 1 — Something you know** (password, PIN)
- **Type 2 — Something you have** (smart card, token)
- **Type 3 — Something you are** (biometric)
- **Somewhere you are** (geolocation)
- **Something you do** (behavioral biometrics)

**MFA** combines 2+ factors from different types

**Access Control Models**
- **DAC** — Discretionary (owner decides, NTFS permissions)
- **MAC** — Mandatory (system-enforced labels)
- **RBAC** — Role-Based
- **ABAC** — Attribute-Based (XACML)
- **Rule-Based** — rules (firewall, time-of-day)

**Authentication Protocols**
- **PAP** — plaintext, weak
- **CHAP** — challenge-response
- **EAP** — extensible framework
- **RADIUS** — UDP, AAA
- **TACACS+** — TCP, AAA, used for network devices
- **Kerberos** — ticket-based, default in AD
  - KDC, TGT, service tickets
- **SAML** — XML, web SSO
- **OAuth 2.0** — authorization
- **OpenID Connect** — identity on top of OAuth
- **OATH** — open authentication

**Federation & SSO**
- **SSO** — one credential, many systems
- **Federation** — trust between orgs
- **SAML** is the standard for browser-based federation
- **IdP** issues, **SP** consumes

**Accountability**
- Audit logs
- Session recording
- Keystroke monitoring
- Video surveillance
- Review of access rights

**Identity Lifecycle**
- Provisioning → Authentication → Authorization → Accounting → De-provisioning
`
    },
    {
      title: "6. Security Assessment & Testing",
      content: `
**Assessment Strategies**
- **Vulnerability Scan** — automated, passive, finds known issues
- **Penetration Test** — active, exploits to prove impact
- **Red Team** — full-scope, multi-vector adversary simulation
- **Blue Team** — defenders
- **Purple Team** — collaboration between red and blue
- **Bug Bounty** — external researchers

**Penetration Testing Phases**
1. Planning & reconnaissance
2. Scanning (port, vuln)
3. Gaining access
4. Maintaining access
5. Covering tracks (in controlled tests, often skipped)
6. Reporting

**Types of Tests**
- **Black box** — no prior knowledge
- **White box** — full knowledge (source code, configs)
- **Gray box** — partial knowledge

**Audit Standards**
- **SAS 70** (legacy) → **SSAE 18** → **SOC 1, 2, 3**
- **SOC 2** — security, availability, processing integrity, confidentiality, privacy
- **Type I** — point in time
- **Type II** — over a period

**Test Outputs**
- Vulnerability reports
- Pen test report with findings & remediation
- Risk register updates
- Executive summary
- Remediation plans
`
    },
    {
      title: "7. Security Operations",
      content: `
**BCP/DRP (Business Continuity & Disaster Recovery)**
- **BIA** (Business Impact Analysis) — identify critical functions, RTO, RPO
- **RTO** — Recovery Time Objective (max downtime)
- **RPO** — Recovery Point Objective (max data loss)
- **MTTR** — Mean Time To Repair
- **MTBF** — Mean Time Between Failures
- **MTTF** — Mean Time To Failure (non-repairable)

**Disaster Recovery Sites**
- **Hot** — running, immediate (expensive)
- **Warm** — partially ready, hours
- **Cold** — empty space, days to set up
- **Cloud** — flexible, on-demand

**Backup Strategies**
- **Full, incremental, differential, snapshot**
- **3-2-1 rule** (3 copies, 2 media, 1 offsite)
- **Offsite rotation** — offsite, but tracked

**Incident Response (NIST)**
1. **Preparation**
2. **Detection & Analysis**
3. **Containment, Eradication & Recovery**
4. **Post-Incident Activity**

**SOC Operations**
- **Tier 1** — alert triage, escalation
- **Tier 2** — deeper analysis
- **Tier 3** — threat hunting, advanced
- **SIEM** — correlation
- **SOAR** — automation
- **Threat intel** — feeds, IOCs, TTPs

**Logging & SIEM**
- Aggregate, normalize, correlate
- Real-time alerting
- Long-term retention
- Compliance evidence

**Other Operations Topics**
- **Change management** — controlled, reviewed
- **Patch management** — regular, prioritized
- **Vulnerability management** — continuous
- **Media sanitization** — clear, purge, destroy
- **RAID** — Redundant Array of Independent Disks (0, 1, 5, 6, 10)
`
    },
    {
      title: "8. Software Development Security",
      content: `
**SDLC (Systems Development Life Cycle)**
- **Phases**: Plan → Analyze → Design → Implement → Test → Deploy → Maintain
- **Security should be in every phase** ("shift left")

**Methodologies**
- **Waterfall** — sequential, rigid
- **Agile** — iterative (Scrum, XP, Kanban)
- **DevOps** — culture + automation
- **DevSecOps** — adds security throughout
- **SAFe** — scaled agile

**Secure Coding Practices**
- Input validation
- Output encoding
- Parameterized queries
- Error handling
- Secure defaults
- Least privilege in code
- Code signing

**OWASP Top 10 (Web)**
1. **Broken Access Control**
2. **Cryptographic Failures**
3. **Injection** (SQLi, command, LDAP)
4. **Insecure Design**
5. **Security Misconfiguration**
6. **Vulnerable & Outdated Components**
7. **Identification & Authentication Failures**
8. **Software & Data Integrity Failures**
9. **Security Logging & Monitoring Failures**
10. **SSRF (Server-Side Request Forgery)**

**Common Vulnerabilities**
- **Buffer overflow** — write past bounds
- **Race conditions** — TOCTOU
- **Integer overflow** — arithmetic wrap
- **XSS** — reflected, stored, DOM
- **SQL injection** — tautologies, UNION, blind
- **CSRF** — cross-site request forgery
- **XXE** — XML external entity
- **Deserialization attacks**
- **Insecure direct object references (IDOR)**

**Code Reviews & Testing**
- **SAST** — static (white box, source code)
- **DAST** — dynamic (running app, black box)
- **IAST** — interactive (inside app)
- **SCA** — software composition analysis (open source)
- **Fuzzing** — random input testing
- **Penetration testing**

**Database Security**
- Parameterized queries
- Stored procedures
- Encryption at rest and in transit
- Tokenization
- Masking
- Access controls
`
    },
    {
      title: "9. CISSP Exam Tips",
      content: `
**Exam Format**
- CAT (Computerized Adaptive Testing)
- 100-150 questions
- 4 hours
- 700/1000 to pass (out of 1000)
- Domains weighted differently — focus on top 3: Security & Risk Mgmt, Asset Security, Security Architecture

**Mindset**
- **Think like a manager** — risk-based, business-aligned, not just technical
- **CISSP answers are sometimes counterintuitive** — choose the BEST/MANAGERIAL answer
- **Process over tech** — pick the documented process
- **Risk-based** — if the risk is low, the control may not be needed
- **No single right answer** — pick the MOST complete/aligned with policies

**Memorize**
- 8 domains and their weight
- CIA, AAA
- BLP, Biba, Clark-Wilson
- Common ports, protocols
- Cryptography (symmetric/asymmetric/hash, key sizes, uses)
- All frameworks (NIST, ISO, COBIT, ITIL)
- Risk formulas (SLE, ARO, ALE)
- SDLC phases
- Backup types
- 3-2-1 rule
- OWASP Top 10
- RTO/RPO/MTTR/MTBF
`
    }
  ]
};

window.NOTES_DATA["pmp"] = {
  title: "PMP (Project Management Professional)",
  description: "PMI's project management framework — people, process, business environment",
  sections: [
    {
      title: "1. Foundations & Project Management Overview",
      content: `
**Project vs Operations**
- **Project** — temporary, unique, creates product/service/result. Has definite start/end.
- **Operations** — ongoing, repetitive, sustains the business.
- **Program** — related projects managed together for benefits not available from managing them individually.
- **Portfolio** — projects, programs, operations aligned to strategic objectives.

**Project Manager Role**
- Applies knowledge, skills, tools, techniques to project activities to meet requirements
- Performs the 5 process groups
- Works with stakeholders
- Balances competing constraints (scope, time, cost, quality, resources, risk)

**Triple Constraint (Iron Triangle)**
- **Scope, Schedule, Cost** — change one, the others shift
- Quality is the central theme
- Add Risk + Resources for modern view (6 constraints)

**PMBOK Guide — 5 Process Groups**
1. **Initiating** — authorize project
2. **Planning** — define total scope, objectives, course of action
3. **Executing** — complete work
4. **Monitoring & Controlling** — track, review, regulate
5. **Closing** — formally close project/phase

**PMBOK — 10 Knowledge Areas**
1. **Integration** — the only one in all 5 process groups
2. **Scope**
3. **Schedule**
4. **Cost**
5. **Quality**
6. **Resource**
7. **Communications**
8. **Risk**
9. **Procurement**
10. **Stakeholder**

**Project Life Cycle vs Product Life Cycle**
- Project life cycle: Start → Organize → Execute → Close
- Product life cycle: Concept → Develop → Launch → Growth → Maturity → Decline → Retire

**Predictive vs Adaptive (Agile)**
- **Predictive (Waterfall)** — requirements set early, plan-driven
- **Adaptive (Agile)** — requirements evolve, change-driven
- **Hybrid** — blend of both
`
    },
    {
      title: "2. Integration Management",
      content: `
**Key Processes (Project Integration Management)**
1. **Develop Project Charter** — authorize (Initiating)
2. **Develop Project Management Plan** — define execution/monitoring/closing (Planning)
3. **Direct and Manage Project Work** — lead the work (Executing)
4. **Manage Project Knowledge** — use and share knowledge (Executing)
5. **Monitor and Control Project Work** — track progress (M&C)
6. **Perform Integrated Change Control** — review/approve changes (M&C)
7. **Close Project or Phase** — formally end (Closing)

**Project Charter** — issued by sponsor, authorizes PM, high-level requirements, risks, milestones, budget summary

**Project Management Plan** — living document that defines how project is executed, monitored, controlled, closed
- Includes 10 subsidiary plans (scope, schedule, cost, etc.) + baselines
- **Scope baseline** = scope statement + WBS + WBS dictionary
- **Schedule baseline** = approved schedule
- **Cost baseline** = approved budget over time

**Change Control**
- All changes go through Perform Integrated Change Control
- CCB (Change Control Board) reviews and approves/rejects
- **Change log** — record of changes
- Approved changes update baselines
- PM CANNOT approve changes that affect the baseline without CCB

**Lessons Learned** — captured continuously, finalized at close, become Organizational Process Assets (OPA)

**Trends in PM**
- **Adaptive/Agile approaches**
- **PMI-ACP** certification
- **Lean, Kanban, Scrum**
- **SAFe** for large-scale
- **Hybrid is most common in practice**
`
    },
    {
      title: "3. Scope, Schedule, Cost",
      content: `
**Scope Management**
- **Plan Scope Management** — how scope will be defined/validated/controlled
- **Collect Requirements** — detailed stakeholder needs
- **Define Scope** — detailed project/product description
- **Create WBS** — deliverable-oriented decomposition
- **Validate Scope** — formal acceptance of deliverables
- **Control Scope** — monitor scope, manage changes

**WBS (Work Breakdown Structure)**
- Decomposes total work into smaller, manageable packages
- 100% Rule — captures all work (no more, no less)
- Work packages — lowest level, can be estimated
- WBS Dictionary — detailed info for each WBS element
- WBS is foundation for schedule, cost, resource planning

**Schedule Management**
- **Plan Schedule Management**
- **Define Activities** — from WBS work packages
- **Sequence Activities** — dependencies (FS, FF, SS, SF)
- **Estimate Activity Durations** — how long
- **Develop Schedule** — model
- **Control Schedule**

**Estimation Techniques**
- **Analogous (Top-Down)** — uses historical data from similar projects, fast but less accurate
- **Parametric** — units × rate (e.g., $150/hour × 800 hours)
- **Three-Point / PERT** — (O + 4M + P) / 6
- **Three-Point / Triangular** — (O + M + P) / 3
- **Bottom-Up** — estimate each WBS, roll up, most accurate, time-consuming
- **Reserve Analysis** — adds time/cost reserves

**Critical Path Method (CPM)**
- Longest path = minimum project duration
- Activities on critical path have **zero float**
- Any delay on critical path delays project
- **Float** = LS - ES = LF - EF
- **Fast-tracking** — do in parallel (more risk)
- **Crashing** — add resources (more cost)

**Cost Management**
- **Plan Cost Management**
- **Estimate Costs**
- **Determine Budget** — sum of activities by time period (cost baseline = S-curve)
- **Control Costs**

**Earned Value Management (EVM)**
- **PV** (Planned Value) — budgeted cost of work scheduled
- **EV** (Earned Value) — budgeted cost of work performed
- **AC** (Actual Cost) — actual cost of work performed
- **BAC** (Budget at Completion) — total project budget
- **EAC** (Estimate at Completion) — projected total
  - EAC = BAC / CPI (if future work at planned rate)
  - EAC = AC + (BAC - EV) (if future at original budget)
- **ETC** (Estimate to Complete) = EAC - AC
- **VAC** (Variance at Completion) = BAC - EAC
- **CPI** = EV / AC (>1 under, <1 over)
- **SPI** = EV / PV (>1 ahead, <1 behind)
- **SV** = EV - PV
- **CV** = EV - AC
`
    },
    {
      title: "4. Quality, Resource, Communications",
      content: `
**Quality Management**
- **Plan Quality Management** — standards, metrics
- **Manage Quality** — QA — process adherence (translates plan into executable quality activities)
- **Control Quality** — QC — monitor and record (identifies causes of poor quality)
- Quality = meeting requirements, fitness for use

**Quality Theorists & Tools**
- **Deming** (PDSA: Plan-Do-Study-Act) — system thinking
- **Juran** (Quality Trilogy: Plan, Control, Improve)
- **Crosby** (Zero Defects, cost of quality)
- **Ishikawa** (Fishbone diagram) — root cause
- **Pareto** (80/20 rule)
- **Shewhart** (control charts)

**Seven Basic Quality Tools**
1. Cause-and-effect diagram (fishbone)
2. Flowchart
3. Check sheet
4. Pareto chart
5. Histogram
6. Control chart
7. Scatter diagram

**Resource Management**
- **Plan Resource Management**
- **Estimate Activity Resources**
- **Acquire Resources** — physical and team
- **Develop Team** — improve competencies, motivation
- **Manage Team** — track performance, feedback
- **Control Resources**

**Team Development (Tuckman)**
1. **Forming** — meet, polite
2. **Storming** — conflict
3. **Norming** — establish norms
4. **Performing** — productive
5. **Adjourning** — close (sometimes)

**Motivational Theories**
- **Maslow** — hierarchy of needs
- **Herzberg** — hygiene vs motivators
- **McClelland** — acquired needs
- **McGregor** — Theory X (lazy) vs Theory Y (self-motivated)
- **Vroom** — Expectancy Theory

**Communications Management**
- **Plan Communications** — who, what, when, where, why, how
- **Manage Communications** — ensure collected, distributed
- **Monitor Communications** — ensure stakeholder needs met

**Communication Models**
- **Basic** — Sender → Encode → Message → Decode → Receiver
- **Channels** = n(n-1)/2 (5 people = 20 channels)
- **Communication methods**:
  - **Push** — email, letters (one-way to receiver)
  - **Pull** — intranet, knowledge base (receiver pulls)
  - **Interactive** — meetings, calls, video (multi-way)
- **Communication blockers** — noise, distance, jargon, culture

**RACI Matrix**
- **Responsible** — does the work
- **Accountable** — owns the work (only ONE)
- **Consulted** — provides input (2-way)
- **Informed** — kept updated (1-way)
`
    },
    {
      title: "5. Risk, Procurement, Stakeholder",
      content: `
**Risk Management**
- **Plan Risk Management** — define how to conduct risk activities
- **Identify Risks** — what could go wrong AND what could go right
- **Perform Qualitative Risk Analysis** — prioritize by P × I
- **Perform Quantitative Risk Analysis** — numerical (EMV, Monte Carlo)
- **Plan Risk Responses** — how to handle
- **Implement Risk Responses** — execute
- **Monitor Risks** — track

**Risk Responses**
| Negative (Threat) | Positive (Opportunity) |
|---|---|
| Avoid | Exploit |
| Mitigate | Enhance |
| Transfer | Share |
| Accept | Accept |

**EMV (Expected Monetary Value)**
- EMV = Probability × Impact
- Sum EMV of all branches in a decision tree

**Procurement Management**
- **Plan Procurement Management**
- **Conduct Procurements** — get responses, select vendor
- **Control Procurements**
- **Close Procurements**

**Contract Types**
- **Fixed-Price (FP)**
  - **FFP** (Firm) — most seller risk
  - **FP-EPA** (Economic Price Adjustment) — for long-term
  - **FPPI** (with Price Incentive) — target cost + sharing
- **Cost-Reimbursable (CR)** — buyer pays actual cost + fee
  - **CPFF** (Cost Plus Fixed Fee)
  - **CPIF** (Cost Plus Incentive Fee)
  - **CPAF** (Cost Plus Award Fee)
- **T&M (Time & Materials)** — hybrid, common in consulting

**Stakeholder Management**
- **Identify Stakeholders** — who/what
- **Plan Stakeholder Engagement** — strategy
- **Manage Stakeholder Engagement** — communicate
- **Monitor Stakeholder Engagement** — adapt

**Power/Interest Grid**
- High Power + High Interest → **Manage Closely**
- High Power + Low Interest → **Keep Satisfied**
- Low Power + High Interest → **Keep Informed**
- Low Power + Low Interest → **Monitor**

**Engagement Levels**
- Unaware → Resistant → Neutral → Supportive → Leading
`
    },
    {
      title: "6. Agile & Hybrid Approaches",
      content: `
**Agile Manifesto (4 values)**
1. Individuals and interactions **over** processes and tools
2. Working software **over** comprehensive documentation
3. Customer collaboration **over** contract negotiation
4. Responding to change **over** following a plan

**Scrum**
- **Roles** — Product Owner, Scrum Master, Dev Team
- **Events** — Sprint Planning, Daily Standup, Sprint Review, Retrospective, Backlog Refinement
- **Artifacts** — Product Backlog, Sprint Backlog, Increment (Definition of Done)

**Sprint** — fixed timebox (usually 2-4 weeks)
**Velocity** — work done per sprint (story points)
**Burndown** — remaining work over time
**Burnup** — work completed + total scope over time

**Kanban**
- Visualize workflow (Kanban board with To Do, Doing, Done)
- Limit WIP (Work in Progress)
- Continuous flow (no timeboxes)
- Pull system

**XP (Extreme Programming)**
- Pair programming
- TDD
- Continuous integration
- Refactoring
- YAGNI, KISS

**User Stories**
- **As a** [user] **I want** [feature] **so that** [benefit]
- **INVEST** — Independent, Negotiable, Valuable, Estimable, Small, Testable
- Story points for estimation (Fibonacci: 1, 2, 3, 5, 8, 13)

**Estimation**
- **Planning Poker** — team estimates with cards
- **T-shirt sizes** — S, M, L, XL
- **Bucket system**

**Servant Leadership**
- Empowers team
- Removes impediments
- Doesn't assign tasks (team self-organizes)
- Coaches, doesn't command

**Hybrid Approaches**
- Many projects use a mix (e.g., agile for development, waterfall for hardware)
- Tailoring is normal
- PM still owns the plan, scope, stakeholder management
`
    },
    {
      title: "7. Business Environment & Value Delivery",
      content: `
**Benefits Realization**
- Project should deliver business value, not just deliverables
- **Benefits Management Plan** — defines how benefits are delivered and measured
- **Benefits** may be realized after project close
- The PM helps track benefits, but the sponsor/owner is accountable

**Organizational Influences on PM**
- **Strategy** — projects support strategy
- **Portfolio management** — selects right projects
- **Structure** — functional, matrix, projectized affects PM authority
- **PMO** — Project Management Office
  - **Supportive** — templates, best practices
  - **Controlling** — compliance
  - **Directive** — PMs report to PMO
- **Governance** — decision rights, escalation paths

**Compliance & Sustainability**
- **Regulatory** — must follow laws (GDPR, OSHA)
- **Environmental** — minimize impact
- **Sustainability** — long-term thinking
- **Ethics** — PMI Code of Ethics

**Organizational Change Management (OCM)**
- Plan for change impact
- **Kotter's 8 Steps**:
  1. Create urgency
  2. Form coalition
  3. Create vision
  4. Communicate vision
  5. Empower action
  6. Generate wins
  7. Consolidate gains
  8. Anchor change
- **ADKAR** — Awareness, Desire, Knowledge, Ability, Reinforcement
`
    },
    {
      title: "8. PMP Exam Tips",
      content: `
**Exam Format**
- 180 questions (175 scored, 5 pretest)
- 230 minutes
- Mix of predictive, agile, hybrid
- Three domains: People (42%), Process (50%), Business Environment (8%)

**Mindset — Think Like a PM**
- The PM is **proactive**, not reactive
- **Serve the team**, don't command
- **Plan first**, then execute
- **Engage stakeholders** early and often
- **Risk management** is continuous
- **Lessons learned** are an asset

**Common Traps**
- "The PM should ignore the sponsor" — WRONG, engage sponsor
- "Avoid all conflict" — WRONG, collaborate
- "Tell the team exactly what to do" — WRONG, empower
- "Delay issues until later" — WRONG, escalate early
- "Accept all scope changes" — WRONG, use change control
- "Don't update the plan" — WRONG, living document

**Memorize**
- 5 process groups (Initiating, Planning, Executing, M&C, Closing)
- 10 knowledge areas
- ITTOs for major processes
- EVM formulas
- Conflict resolution ranking
- Risk response strategies (negative vs positive)
- Engagement levels and strategies
- Tuckman stages
- Agile events and artifacts
- Communication formula n(n-1)/2
- Servant leadership traits
- Tuckman, Maslow, Herzberg

**Calculation Practice**
- EVM (CPI, SPI, EAC, ETC, VAC)
- PERT (O + 4M + P) / 6
- Standard deviation = (P - O) / 6
- Communication channels
- EMV in decision trees
- Critical path & float
`
    }
  ]
};
