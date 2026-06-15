// CISSP (Certified Information Systems Security Professional) - 30 Practice Questions
window.QUESTIONS_DATA = window.QUESTIONS_DATA || {};

window.QUESTIONS_DATA["cissp"] = [
  {
    id: "cis-1",
    q: "Which domain of the CISSP Common Body of Knowledge (CBK) covers Identity and Access Management?",
    options: ["Asset Security", "Communication and Network Security", "Identity and Access Management (IAM)", "Security Operations"],
    answer: 2,
    explanation: "IAM is its own domain in the (ISC)² CISSP CBK. It covers physical and logical access control, identity management, authentication, authorization, and accounting. The 8 domains: Security and Risk Management, Asset Security, Security Architecture and Engineering, Communication and Network Security, IAM, Security Assessment and Testing, Security Operations, Software Development Security."
  },
  {
    id: "cis-2",
    q: "Which of the following BEST describes the CIA triad?",
    options: [
      "Confidentiality, Integrity, Authentication",
      "Confidentiality, Integrity, Availability",
      "Control, Integrity, Access",
      "Cryptography, Identification, Authorization"
    ],
    answer: 1,
    explanation: "The CIA triad is the foundation of information security: Confidentiality (only authorized access), Integrity (data is not altered), Availability (systems are accessible when needed). Sometimes extended with Authenticity, Non-repudiation, Accountability (Parkerian Hexet)."
  },
  {
    id: "cis-3",
    q: "Which risk treatment option involves accepting the risk and continuing operations?",
    options: ["Mitigate", "Transfer", "Avoid", "Accept"],
    answer: 3,
    explanation: "Accept (retain) — accept the risk and its potential impact, usually because the cost of treatment exceeds the loss. Mitigate = implement controls. Transfer = insurance, outsourcing. Avoid = remove the risk source (e.g., discontinue the activity)."
  },
  {
    id: "cis-4",
    q: "Which of the following is a detective control?",
    options: ["Firewall", "Encryption", "Security camera", "Fence"],
    answer: 2,
    explanation: "Detective controls identify incidents that have occurred. Cameras, audit logs, IDS, motion sensors. Firewalls and fences are preventive. Encryption is preventive (against unauthorized disclosure). Corrective controls fix the aftermath (backups, IR plans)."
  },
  {
    id: "cis-5",
    q: "What is the primary purpose of the Bell-LaPadula model?",
    options: [
      "Ensure data integrity",
      "Enforce confidentiality using 'no read up, no write down'",
      "Enforce availability",
      "Enforce role-based access"
    ],
    answer: 1,
    explanation: "Bell-LaPadula is a confidentiality model used in government/military. Rules: No Read Up (subject can't read at higher classification) and No Write Down (subject can't write to lower classification). The opposite integrity model is Biba: No Read Down, No Write Up."
  },
  {
    id: "cis-6",
    q: "Which of the following BEST describes defense in depth?",
    options: [
      "Using a single strong control",
      "Layering multiple controls of different types so a single failure doesn't compromise security",
      "Encrypting all data",
      "Hiring more security staff"
    ],
    answer: 1,
    explanation: "Defense in depth layers administrative, technical, and physical controls. If one fails, others provide backup. Examples: firewalls + IDS + encryption + training + cameras."
  },
  {
    id: "cis-7",
    q: "Which type of cipher substitutes one character for another?",
    options: ["Transposition", "Substitution", "Stream", "Block"],
    answer: 1,
    explanation: "Substitution ciphers (e.g., Caesar) replace characters. Transposition ciphers rearrange the order (e.g., rail fence). Stream ciphers encrypt bit by bit; block ciphers encrypt fixed-size blocks. AES is a block cipher, RC4 is a (now-broken) stream cipher."
  },
  {
    id: "cis-8",
    q: "Which access control model assigns permissions based on organizational roles?",
    options: ["DAC", "MAC", "RBAC", "ABAC"],
    answer: 2,
    explanation: "RBAC (Role-Based Access Control) — permissions are tied to roles (e.g., 'doctor', 'cashier'), and users are assigned roles. ABAC uses attributes (user, resource, environment, action). DAC = owner decides. MAC = system-enforced labels."
  },
  {
    id: "cis-9",
    q: "Which of the following BEST describes a Business Impact Analysis (BIA)?",
    options: [
      "Identifies threats",
      "Determines the impact of disruptions on critical business functions and the resources needed for recovery",
      "Lists all assets",
      "Implements disaster recovery"
    ],
    answer: 1,
    explanation: "The BIA identifies critical processes, RTOs (Recovery Time Objectives), RPOs (Recovery Point Objectives), and the impact of outages. It feeds into the Business Continuity Plan (BCP) and Disaster Recovery Plan (DRP)."
  },
  {
    id: "cis-10",
    q: "Which cryptographic concept ensures that a sender cannot deny having sent a message?",
    options: ["Confidentiality", "Integrity", "Non-repudiation", "Authentication"],
    answer: 2,
    explanation: "Non-repudiation prevents the sender (or receiver) from denying they sent/received a message. Digital signatures provide non-repudiation because only the sender has the private key. Authentication alone doesn't prevent later denial."
  },
  {
    id: "cis-11",
    q: "Which network device operates primarily at Layer 2 and forwards frames based on MAC addresses?",
    options: ["Router", "Switch", "Hub", "Firewall"],
    answer: 1,
    explanation: "Switches operate at Layer 2 (Data Link) and forward frames using MAC tables. Routers operate at Layer 3 (IP). Hubs are Layer 1 repeaters. Firewalls can be stateful Layer 3/4/7 devices."
  },
  {
    id: "cis-12",
    q: "Which type of attack involves an attacker sitting between two communicating parties to intercept or alter traffic?",
    options: ["DoS", "Phishing", "Man-in-the-Middle (MITM)", "SQL Injection"],
    answer: 2,
    explanation: "MITM attackers intercept and possibly alter communications between two parties who believe they're talking directly. Defense: TLS/HTTPS, certificate pinning, mutual authentication. DoS denies service, phishing tricks users, SQLi targets databases."
  },
  {
    id: "cis-13",
    q: "Which of the following is NOT a property of a strong cryptographic hash function?",
    options: ["Pre-image resistance", "Collision resistance", "Reversibility", "Avalanche effect"],
    answer: 2,
    explanation: "Cryptographic hashes must be ONE-WAY (irreversible), with strong pre-image and collision resistance, and small input changes producing very different outputs (avalanche). SHA-256 meets these. MD5 and SHA-1 are broken for collision resistance."
  },
  {
    id: "cis-14",
    q: "Which of the following BEST describes a SOC (Security Operations Center)?",
    options: [
      "A service organization that defines controls",
      "A centralized team that monitors and responds to security incidents 24/7",
      "A type of firewall",
      "A backup data center"
    ],
    answer: 1,
    explanation: "A SOC is a centralized function (team, processes, tech) that continuously monitors, detects, analyzes, and responds to cybersecurity incidents. Often tied to SIEM/SOAR platforms and follows ITIL/NIST processes."
  },
  {
    id: "cis-15",
    q: "Which of the following is an example of a preventive physical control?",
    options: ["CCTV", "Guard", "Fence", "Motion sensor"],
    answer: 2,
    explanation: "Preventive controls stop incidents before they happen: fences, locks, guards, badges, firewalls. Detective controls identify them: CCTV, motion sensors, IDS, logs. Note: a guard is both preventive and detective."
  },
  {
    id: "cis-16",
    q: "Which authentication factor type is considered 'something you have'?",
    options: ["Password", "Retina scan", "Smart card", "PIN"],
    answer: 2,
    explanation: "Factors: Something you know (password/PIN), Something you have (smart card, hardware token, phone), Something you are (biometric), Somewhere you are (location), Something you do (behavioral). Multi-factor auth combines two or more."
  },
  {
    id: "cis-17",
    q: "Which type of malware is designed to spread from system to system without user action?",
    options: ["Virus", "Worm", "Trojan", "Logic bomb"],
    answer: 1,
    explanation: "Worms self-replicate and spread automatically (e.g., across networks). Viruses need a host file and user action to spread. Trojans disguise themselves as legitimate software. Logic bombs trigger on a condition. Ransomware is a payload type."
  },
  {
    id: "cis-18",
    q: "Which framework is widely used for IT governance and risk management?",
    options: ["COBIT", "PCI DSS", "HIPAA", "SOC 2"],
    answer: 0,
    explanation: "COBIT (Control Objectives for Information and Related Technologies) is an IT governance framework from ISACA. PCI DSS is a payment-card standard, HIPAA is healthcare privacy, SOC 2 is an audit standard. NIST CSF and ISO 27001 are also common."
  },
  {
    id: "cis-19",
    q: "Which of the following BEST describes separation of duties?",
    options: [
      "Keeping duties secret",
      "Splitting critical tasks so no single person can complete a sensitive process alone",
      "Separating networks with VLANs",
      "Separating backups from production"
    ],
    answer: 1,
    explanation: "SoD prevents fraud and error by dividing critical functions (e.g., the person who requests a payment isn't the one who approves it). Combined with least privilege and mandatory vacations, it's a foundational internal control."
  },
  {
    id: "cis-20",
    q: "Which of the following provides the STRONGEST assurance of identity?",
    options: ["Password", "Password + SMS", "Password + hardware token + biometric", "Security question"],
    answer: 2,
    explanation: "MFA combining 3 different factor types is strongest. Single factor (password) is weakest. SMS-based 2FA is better than nothing but vulnerable to SIM swap attacks."
  },
  {
    id: "cis-21",
    q: "Which concept in security ensures that data is not altered in transit or at rest?",
    options: ["Confidentiality", "Integrity", "Availability", "Non-repudiation"],
    answer: 1,
    explanation: "Integrity = data is accurate and unaltered. Enforced by hashes, MACs, digital signatures, write-once storage. Confidentiality = no unauthorized disclosure. Availability = access when needed. Non-repudiation = sender can't deny."
  },
  {
    id: "cis-22",
    q: "Which type of encryption uses the SAME key for encryption and decryption?",
    options: ["Asymmetric", "Symmetric", "Public-key", "Hybrid"],
    answer: 1,
    explanation: "Symmetric encryption (AES, 3DES, ChaCha20) uses one shared key. Asymmetric (RSA, ECC) uses a key pair. Hybrid (TLS) uses asymmetric to safely exchange a symmetric session key."
  },
  {
    id: "cis-23",
    q: "Which of the following is the BEST example of a detective logical access control?",
    options: ["Password policy", "Security guard", "Audit log review", "Firewall rule"],
    answer: 2,
    explanation: "Logical = technical/digital. Detective = identifies events. Audit log review is detective + logical. Password policy is preventive + administrative. Security guard is physical. Firewall rule is preventive + technical."
  },
  {
    id: "cis-24",
    q: "Which law in the United States governs the privacy of health information?",
    options: ["GLBA", "HIPAA", "SOX", "FISMA"],
    answer: 1,
    explanation: "HIPAA (Health Insurance Portability and Accountability Act) — protects PHI (Protected Health Information). GLBA is financial privacy. SOX is financial reporting/auditing for public companies. FISMA is federal information security."
  },
  {
    id: "cis-25",
    q: "Which of the following is the PRIMARY purpose of change management?",
    options: [
      "To prevent any changes to systems",
      "To ensure changes are evaluated, approved, documented, and reviewed to minimize risk",
      "To speed up deployments",
      "To assign blame when things break"
    ],
    answer: 1,
    explanation: "Change management ensures changes are reviewed, approved, tested, and documented before implementation. It reduces unplanned outages and supports audit trails. It doesn't mean no changes — it means controlled changes."
  },
  {
    id: "cis-26",
    q: "Which type of cryptographic attack tests every possible key until the correct one is found?",
    options: ["Differential cryptanalysis", "Brute force", "Known plaintext", "Side channel"],
    answer: 1,
    explanation: "Brute force tries all possible keys — its feasibility depends on key length. AES-256 is computationally infeasible to brute force. Differential cryptanalysis analyzes how changes in input affect output. Side-channel attacks exploit timing, power, EM emissions."
  },
  {
    id: "cis-27",
    q: "Which of the following BEST describes a RTO?",
    options: [
      "How much data loss is acceptable",
      "How quickly a system must be restored after an outage",
      "The cost of recovery",
      "The age of the oldest backup"
    ],
    answer: 1,
    explanation: "RTO (Recovery Time Objective) = max acceptable downtime. RPO (Recovery Point Objective) = max acceptable data loss (e.g., 1 hour of data). MTBF = mean time between failures. MTTR = mean time to repair."
  },
  {
    id: "cis-28",
    q: "Which of the following is a benefit of a formal risk assessment?",
    options: [
      "It eliminates all risk",
      "It identifies, prioritizes, and informs treatment of risks to support decision making",
      "It transfers all risk to insurers",
      "It guarantees regulatory compliance"
    ],
    answer: 1,
    explanation: "Risk assessment identifies and prioritizes risks so leadership can make informed decisions about treatment (mitigate, transfer, accept, avoid). It does not eliminate risk or guarantee compliance — it provides a structured basis for decisions."
  },
  {
    id: "cis-29",
    q: "Which cloud deployment model offers the MOST control to the customer?",
    options: ["Public", "Private", "Hybrid", "Community"],
    answer: 1,
    explanation: "Private cloud is dedicated to a single organization — most control, more cost. Public (AWS, Azure, GCP) is shared, less control, lower cost. Hybrid mixes both. Community serves orgs with shared missions."
  },
  {
    id: "cis-30",
    q: "Which of the following BEST describes the purpose of a digital certificate?",
    options: [
      "To compress data",
      "To bind a public key to an identity (person, server, organization) and is signed by a trusted CA",
      "To encrypt hard drives",
      "To hide network traffic"
    ],
    answer: 1,
    explanation: "A digital certificate (X.509) binds a public key to an identity and is signed by a CA (Certificate Authority), establishing trust. Used in TLS, S/MIME, code signing, smart cards. Revocation is checked via CRL or OCSP."
  }
];
