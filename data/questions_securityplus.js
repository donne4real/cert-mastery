// CompTIA Security+ (SY0-701) - 30 Practice Questions
window.QUESTIONS_DATA = window.QUESTIONS_DATA || {};

window.QUESTIONS_DATA["security-plus"] = [
  {
    id: "sp-1",
    q: "Which principle of security states that a single person should not have the ability to both initiate and approve a critical action?",
    options: ["Least privilege", "Separation of duties", "Defense in depth", "Need to know"],
    answer: 1,
    explanation: "Separation of duties (SoD) splits critical tasks between two or more people so no single individual can compromise a process alone. Least privilege limits access, defense in depth layers controls, and need-to-know is about information classification."
  },
  {
    id: "sp-2",
    q: "Which type of attack tricks a user into clicking a malicious link that appears to be legitimate by exploiting a trusted relationship?",
    options: ["Brute force", "Phishing", "Tailgating", "Smurf attack"],
    answer: 1,
    explanation: "Phishing uses fraudulent communications (usually email) that appear to come from a trusted source to trick users into revealing credentials or clicking malicious links. Spear phishing targets a specific person; whaling targets executives."
  },
  {
    id: "sp-3",
    q: "Which cryptographic algorithm is asymmetric?",
    options: ["AES", "3DES", "RSA", "ChaCha20"],
    answer: 2,
    explanation: "RSA is asymmetric (public-key) cryptography using a public/private key pair. AES, 3DES, and ChaCha20 are all symmetric algorithms where the same key encrypts and decrypts."
  },
  {
    id: "sp-4",
    q: "What is the purpose of a hash function in cryptography?",
    options: [
      "To encrypt data reversibly",
      "To produce a fixed-size, one-way fingerprint of data",
      "To generate random keys",
      "To compress data"
    ],
    answer: 1,
    explanation: "A cryptographic hash takes arbitrary input and outputs a fixed-size digest (e.g., SHA-256 → 256 bits). It's a one-way function: you can't reverse it, and small input changes produce completely different hashes. Used for integrity checks and password storage."
  },
  {
    id: "sp-5",
    q: "Which authentication factor is BEST described as something you are?",
    options: ["Password", "Smart card", "Fingerprint", "PIN"],
    answer: 2,
    explanation: "Authentication factors: Something you know (password, PIN), Something you have (smart card, token), Something you are (biometric — fingerprint, retina, face). Multi-factor auth combines two or more of these."
  },
  {
    id: "sp-6",
    q: "Which of the following BEST describes a Zero Trust architecture?",
    options: [
      "Trust all users inside the network perimeter",
      "Never trust, always verify — every request is authenticated and authorized regardless of location",
      "Trust users only after a one-time authentication",
      "Disable all access controls to simplify management"
    ],
    answer: 1,
    explanation: "Zero Trust assumes no implicit trust based on network location. Every user, device, and request is authenticated, authorized, and continuously validated. It replaces the old 'castle and moat' model."
  },
  {
    id: "sp-7",
    q: "Which type of malware encrypts user data and demands payment for the decryption key?",
    options: ["Virus", "Worm", "Ransomware", "Spyware"],
    answer: 2,
    explanation: "Ransomware encrypts files and demands a ransom (usually in crypto) for decryption. Examples: WannaCry, Ryuk, LockBit. Best defenses: offline backups, patching, and user awareness training."
  },
  {
    id: "sp-8",
    q: "A SIEM system is BEST described as:",
    options: [
      "An endpoint detection tool",
      "A solution that aggregates and correlates log data from multiple sources for real-time monitoring and alerting",
      "A vulnerability scanner",
      "A firewall"
    ],
    answer: 1,
    explanation: "SIEM (Security Information and Event Management) collects logs from across the environment, normalizes and correlates them, and generates alerts for suspicious activity. Splunk, Microsoft Sentinel, and QRadar are common SIEMs."
  },
  {
    id: "sp-9",
    q: "Which network device is designed to filter traffic based on stateful inspection of sessions?",
    options: ["Hub", "Switch", "Stateful firewall", "Repeater"],
    answer: 2,
    explanation: "A stateful firewall tracks the state of active connections and only allows return traffic that matches an established session. A stateless firewall filters based purely on rules (IPs/ports) without tracking sessions."
  },
  {
    id: "sp-10",
    q: "Which port number does HTTPS use by default?",
    options: ["80", "443", "22", "25"],
    answer: 1,
    explanation: "HTTPS uses 443, HTTP uses 80, SSH uses 22, SMTP uses 25. Memorizing common ports is essential for Security+."
  },
  {
    id: "sp-11",
    q: "Which of the following is the STRONGEST form of multi-factor authentication?",
    options: [
      "Password + security question",
      "Password + SMS code",
      "Password + hardware token + biometric",
      "Username + password"
    ],
    answer: 2,
    explanation: "Combining three factors (something you know + something you have + something you are) is stronger than combining two factors from the same category. SMS codes (something you have) plus passwords are common but vulnerable to SIM swap attacks."
  },
  {
    id: "sp-12",
    q: "Which protocol is used to securely manage network devices?",
    options: ["Telnet", "FTP", "SSH", "HTTP"],
    answer: 2,
    explanation: "SSH (port 22) provides encrypted remote shell access. Telnet and HTTP send data in plaintext. FTP is unencrypted file transfer (use SFTP/FTPS instead)."
  },
  {
    id: "sp-13",
    q: "Which type of attack overloads a service with traffic to make it unavailable?",
    options: ["SQL injection", "DoS/DDoS", "Cross-site scripting", "Man-in-the-middle"],
    answer: 1,
    explanation: "DoS (Denial of Service) uses one source; DDoS (Distributed) uses many (often a botnet). Defense: rate limiting, scrubbing services (e.g., Cloudflare, AWS Shield), and redundancy."
  },
  {
    id: "sp-14",
    q: "Which access control model uses labels like 'Confidential' and 'Top Secret' to enforce security?",
    options: ["DAC", "MAC", "RBAC", "ABAC"],
    answer: 1,
    explanation: "MAC (Mandatory Access Control) — system-enforced labels (classification + clearance). DAC lets owners decide. RBAC assigns by role. ABAC uses attributes (user/resource/environment)."
  },
  {
    id: "sp-15",
    q: "A digital signature provides which two security services?",
    options: [
      "Confidentiality and availability",
      "Integrity and authentication (non-repudiation)",
      "Compression and encryption",
      "Anonymity and authorization"
    ],
    answer: 1,
    explanation: "Digital signatures use the sender's private key to sign a hash of the message. They prove the message wasn't altered (integrity) and that only the holder of the private key could have signed it (authentication / non-repudiation)."
  },
  {
    id: "sp-16",
    q: "Which of the following BEST describes a vulnerability scan?",
    options: [
      "Exploiting weaknesses to gain access",
      "Automated, non-intrusive identification of known weaknesses",
      "Penetration testing with full exploitation",
      "Social engineering users"
    ],
    answer: 1,
    explanation: "Vulnerability scanning is automated, passive, and identifies known CVEs. Penetration testing is active and tries to exploit weaknesses. They complement each other — scan first, pen test the high-risk findings."
  },
  {
    id: "sp-17",
    q: "Which control type is a security policy?",
    options: ["Technical", "Administrative", "Physical", "Detective"],
    answer: 1,
    explanation: "Controls are categorized as Administrative (policies, procedures, training), Technical (ACLs, encryption, MFA), or Physical (locks, guards, cameras). Within those, controls are also Preventive, Detective, or Corrective."
  },
  {
    id: "sp-18",
    q: "What does the principle of least privilege require?",
    options: [
      "Users get maximum permissions to do their job",
      "Users get only the minimum permissions necessary to perform their duties",
      "Administrators have no special privileges",
      "All users have the same access"
    ],
    answer: 1,
    explanation: "Least privilege (PoLP) means granting only the access required for a task — and only for as long as it's required. It limits the blast radius of compromised accounts."
  },
  {
    id: "sp-19",
    q: "Which protocol is used to securely send email?",
    options: ["SMTP", "POP3", "TLS (with SMTP)", "FTP"],
    answer: 2,
    explanation: "SMTP, POP3, and IMAP are all unencrypted by default. TLS (often SMTPS on port 465 or STARTTLS on 587) wraps them for confidentiality. FTP is for files, not email."
  },
  {
    id: "sp-20",
    q: "Which attack inserts malicious code into a legitimate website that the victim visits?",
    options: ["Buffer overflow", "Cross-site scripting (XSS)", "SQL injection", "Brute force"],
    answer: 1,
    explanation: "XSS injects JavaScript into a webpage so it runs in victims' browsers. Variants: reflected (in a request), stored (persisted in the DB), DOM-based. Defense: sanitize input, encode output, set Content-Security-Policy headers."
  },
  {
    id: "sp-21",
    q: "What is the purpose of salting a password hash?",
    options: [
      "To make it taste better",
      "To add random data so identical passwords produce different hashes, defeating rainbow tables",
      "To encrypt the password",
      "To compress the password"
    ],
    answer: 1,
    explanation: "A salt is random data added to a password before hashing. It ensures two users with the same password get different hashes, defeating precomputed rainbow table attacks. Use a unique salt per user, store it with the hash."
  },
  {
    id: "sp-22",
    q: "Which of the following is a SYMMETRIC encryption algorithm?",
    options: ["RSA", "ECC", "AES", "Diffie-Hellman"],
    answer: 2,
    explanation: "AES (128/192/256-bit keys) is the gold standard symmetric cipher. RSA, ECC, and Diffie-Hellman are asymmetric algorithms used for key exchange or digital signatures."
  },
  {
    id: "sp-23",
    q: "Which PKI component is a trusted third party that issues digital certificates?",
    options: ["RA", "CA", "CRL", "OCSP"],
    answer: 1,
    explanation: "CA (Certificate Authority) issues and signs certificates. RA (Registration Authority) verifies identities before CA issues. CRL (Certificate Revocation List) and OCSP are used to check if certs have been revoked."
  },
  {
    id: "sp-24",
    q: "Which type of backup includes only changes since the last full backup?",
    options: ["Full", "Differential", "Incremental", "Snapshot"],
    answer: 1,
    explanation: "Differential = changes since the last full backup (grows over time). Incremental = changes since the last backup of any kind (smaller, but needs all prior increments to restore)."
  },
  {
    id: "sp-25",
    q: "Which attack replays a captured authentication token to gain unauthorized access?",
    options: ["Replay attack", "Downgrade attack", "Birthday attack", "Side-channel attack"],
    answer: 0,
    explanation: "A replay attack captures and re-sends a valid credential/token. Defenses: nonces, timestamps, and session tokens that expire. Birthday attacks target hash collisions; side-channel attacks exploit information leakage like timing or power consumption."
  },
  {
    id: "sp-26",
    q: "Which cloud deployment model is shared by multiple organizations with similar requirements (e.g., government agencies)?",
    options: ["Public", "Private", "Community", "Hybrid"],
    answer: 2,
    explanation: "Community cloud serves organizations with shared missions/policies. Public = general public. Private = single org. Hybrid = mix of two or more models with orchestration between them."
  },
  {
    id: "sp-27",
    q: "Which of the following BEST describes a DMZ?",
    options: [
      "An isolated high-security network",
      "A buffer network between an internal network and an untrusted network (e.g., the internet)",
      "A backup data center",
      "A type of encryption"
    ],
    answer: 1,
    explanation: "A DMZ (demilitarized zone) hosts public-facing servers (web, mail, DNS) isolated from the internal LAN by two firewalls. It limits exposure if a public server is compromised."
  },
  {
    id: "sp-28",
    q: "Which of the following is a detective control?",
    options: ["Firewall rule", "Security camera", "Encryption", "Fence"],
    answer: 1,
    explanation: "Detective controls identify incidents after they occur: cameras, logs, alarms, IDS/IPS (in detect mode), audit reviews. Preventive controls stop them (firewalls, fences, encryption). Corrective controls fix the aftermath (backups, IR plans)."
  },
  {
    id: "sp-29",
    q: "What is the PRIMARY purpose of a risk register?",
    options: [
      "To log employee access requests",
      "To document identified risks, their likelihood, impact, and mitigation plans",
      "To store encryption keys",
      "To track software licenses"
    ],
    answer: 1,
    explanation: "A risk register is a living document listing known risks with their analysis (likelihood × impact), owners, and treatment plans (mitigate, accept, transfer, avoid). It is a key output of the risk management process."
  },
  {
    id: "sp-30",
    q: "Which secure protocol is used to query DNS records?",
    options: ["DNS", "DoH (DNS over HTTPS)", "FTP", "TFTP"],
    answer: 1,
    explanation: "DoH encrypts DNS queries over HTTPS (port 443). Other options: DoT (DNS over TLS, port 853). Plain DNS (port 53) is unencrypted and vulnerable to eavesdropping and manipulation."
  }
];
