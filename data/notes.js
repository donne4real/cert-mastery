// Comprehensive study notes for all certifications
window.NOTES_DATA = window.NOTES_DATA || {};

window.NOTES_DATA["aws-ccp"] = {
  title: "AWS Certified Cloud Practitioner (CLF-C02)",
  description: "Foundational AWS knowledge — services, billing, security, architecture",
  sections: [
    {
      title: "1. Cloud Concepts & AWS Value Proposition",
      content: `
**What is Cloud Computing?**
Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing. AWS defines 5 characteristics:
- **On-demand self-service** — provision resources without human interaction
- **Broad network access** — available over the network from many devices
- **Resource pooling** — multi-tenant model, resources dynamically assigned
- **Rapid elasticity** — scale up/down automatically with demand
- **Measured service** — usage is metered, transparent to both provider and consumer

**Three Deployment Models**
- **Public** — owned by cloud provider, open to public (e.g., AWS, Azure, GCP)
- **Private** — operated solely for one organization
- **Hybrid** — mix of public + private with orchestration between them

**Four Deployment Models of Cloud Computing (NIST)**
- **IaaS** (Infrastructure as a Service) — you manage OS, runtime, apps, data; AWS manages hardware, networking, storage, virtualization. Example: EC2.
- **PaaS** (Platform as a Service) — provider manages everything except your app and data. Example: Elastic Beanstalk, RDS (kind of).
- **SaaS** (Software as a Service) — you just use the finished product. Example: Gmail, Office 365.
- **Serverless** — you write code; provider runs and scales it. Example: Lambda.

**Six Advantages of Cloud**
1. Trade capital expense (CapEx) for variable expense (OpEx)
2. Benefit from massive economies of scale
3. Stop guessing capacity
4. Increase speed and agility
5. Stop spending money running data centers
6. Go global in minutes

**AWS Well-Architected Framework — 6 Pillars**
1. **Operational Excellence** — run and monitor systems to deliver business value
2. **Security** — protect information, systems, and assets
3. **Reliability** — recover from failure and meet demand
4. **Performance Efficiency** — use IT resources efficiently
5. **Cost Optimization** — deliver value at the lowest price point
6. **Sustainability** — minimize environmental impact
`
    },
    {
      title: "2. AWS Global Infrastructure",
      content: `
**Hierarchy: Region → Availability Zone → Data Center**
- **Region** — a physical geographic location (e.g., us-east-1 = N. Virginia). Currently 30+ regions worldwide.
- **Availability Zone (AZ)** — one or more discrete data centers with redundant power/networking/connectivity. A region has ≥ 2 AZs (usually 3+).
- **Edge Location** — a site that CloudFront and Route 53 use to cache content close to users. 400+ edge locations globally.
- **Local Zone** — places AWS compute, storage, database closer to large population centers for low-latency needs.
- **Wavelength** — embeds AWS at 5G network edge for ultra-low-latency mobile apps.
- **Outposts** — fully managed AWS hardware installed on-premises for hybrid scenarios.

**Choosing a Region — Key Factors**
1. **Latency** — pick close to users
2. **Cost** — pricing varies by region
3. **Compliance** — data residency requirements
4. **Service availability** — newer services launch in us-east-1 first
5. **Disaster recovery** — multi-region strategy

**High Availability = Multi-AZ**
Run your app in 2+ AZs in the same region. If one AZ fails, the others keep serving.

**Disaster Recovery = Multi-Region**
For full DR, replicate to a different geographic region.
`
    },
    {
      title: "3. Core AWS Services",
      content: `
**Compute**
- **Amazon EC2** — virtual machines in the cloud. Resizable. Multiple instance types optimized for compute, memory, storage, GPU.
- **AWS Lambda** — serverless functions. Run code in response to events. Pay per ms of compute time.
- **Amazon ECS** — managed container orchestration (Docker)
- **Amazon EKS** — managed Kubernetes
- **AWS Fargate** — serverless compute engine for containers (with ECS or EKS)
- **Elastic Beanstalk** — PaaS for deploying web apps

**Storage**
- **Amazon S3** — object storage, 11 9s of durability. Used for backup, static websites, big data, ML datasets.
- **Amazon EBS** — block storage for EC2 (like a hard drive)
- **Amazon EFS** — shared file storage for Linux, NFS-based
- **Amazon FSx** — managed Windows file system or Lustre (HPC)
- **AWS Storage Gateway** — hybrid storage bridge to on-prem
- **AWS Snow Family** — physical devices for offline data transfer (Snowball, Snowmobile)
- **S3 Glacier** — low-cost archival storage with retrieval times of minutes to hours

**Database**
- **Amazon RDS** — managed relational DB (Aurora, MySQL, PostgreSQL, MariaDB, Oracle, SQL Server)
- **Amazon Aurora** — cloud-native MySQL/PostgreSQL-compatible, 5x faster
- **Amazon DynamoDB** — managed NoSQL key-value/document, single-digit ms latency
- **Amazon Redshift** — data warehouse for analytics
- **Amazon Neptune** — managed graph database
- **Amazon DocumentDB** — MongoDB-compatible
- **Amazon ElastiCache** — in-memory cache (Redis/Memcached)
- **Amazon Timestream** — time-series database

**Networking**
- **Amazon VPC** — your private network in AWS
- **Amazon Route 53** — DNS + domain registration
- **Amazon CloudFront** — CDN at edge locations
- **AWS Direct Connect** — dedicated fiber line from on-prem to AWS
- **Site-to-Site VPN** — encrypted tunnel over internet
- **Elastic Load Balancer (ELB)** — ALB (Layer 7), NLB (Layer 4), GWLB
- **AWS Global Accelerator** — uses AWS backbone, not DNS, for global failover
- **AWS Transit Gateway** — hub-and-spoke for many VPCs
`
    },
    {
      title: "4. AWS Security & Identity",
      content: `
**Shared Responsibility Model**
- **AWS responsibility (Security OF the cloud)** — physical data centers, hardware, network, managed services internals
- **Customer responsibility (Security IN the cloud)** — your data, IAM, OS patching (for EC2), network config, encryption, firewall rules

**AWS IAM (Identity and Access Management)** — Free, global service
- **Users** — end users or service identities
- **Groups** — collections of users
- **Roles** — identities assumed temporarily (by users or services)
- **Policies** — JSON documents defining permissions, attached to users/groups/roles
- **MFA** — multi-factor authentication for extra security

**Policy Evaluation Logic**
1. By default, all requests are **denied**
2. An explicit **Allow** overrides the default
3. An explicit **Deny** overrides any Allow
4. If multiple policies apply, they are unioned (additive)

**IAM Best Practices**
- Root account: lock away, never use for daily work, enable MFA, delete keys
- Use IAM users/roles, not root
- Principle of least privilege — grant only what's needed
- Use roles for applications on EC2, not access keys
- Rotate credentials regularly
- Use IAM Access Analyzer to find unused access

**Other Security Services**
- **AWS WAF** — Web Application Firewall (protects against OWASP Top 10)
- **AWS Shield** — DDoS protection (Standard is free, Advanced is paid)
- **AWS GuardDuty** — threat detection (uses ML to find anomalies)
- **AWS Inspector** — vulnerability scanning for EC2 and container images
- **AWS Macie** — discover and protect sensitive data in S3
- **AWS Security Hub** — central security & compliance dashboard
- **AWS KMS** — managed encryption keys
- **AWS CloudHSM** — dedicated hardware security modules
- **AWS Secrets Manager** — rotate and manage secrets (DB passwords, API keys)
- **AWS Certificate Manager (ACM)** — free SSL/TLS certificates
`
    },
    {
      title: "5. AWS Billing, Pricing & Support",
      content: `
**Pricing Principles**
- Pay only for what you use
- Pay less when you reserve
- Pay less with volume-based discounts
- Pay even less as AWS grows

**EC2 Pricing Models**
- **On-Demand** — pay by the second/minute, no commitment. Most expensive.
- **Reserved Instances** — 1- or 3-year commitment, up to ~72% discount
- **Savings Plans** — 1- or 3-year commitment to a compute spend amount
- **Spot Instances** — up to 90% discount, but can be reclaimed with 2-min notice
- **Dedicated Hosts** — physical server dedicated to you (for compliance/licensing)
- **Dedicated Instances** — VMs on hardware dedicated to you, but may share with other instances of yours

**S3 Storage Classes**
- **S3 Standard** — frequently accessed data, 11 9s durability, multi-AZ
- **S3 Intelligent-Tiering** — auto-moves between tiers based on access
- **S3 Standard-IA** — infrequent access, lower storage cost but retrieval fees
- **S3 One Zone-IA** — like IA but single AZ (cheaper, less durable)
- **S3 Glacier Instant Retrieval** — archive with ms retrieval
- **S3 Glacier Flexible Retrieval** — minutes to hours retrieval
- **S3 Glacier Deep Archive** — 7-12 hour retrieval, cheapest

**AWS Support Plans**
- **Basic** — free, account/billing questions only
- **Developer** — business hours, general guidance, 12-hr response
- **Business** — 24/7 phone/email/chat, 1-hr response for production-impaired
- **Enterprise** — 15-min response for business-critical, dedicated TAM, IEM

**AWS Marketplace** — third-party software, data, services you can buy through AWS

**Billing & Cost Management Tools**
- **AWS Cost Explorer** — visualize/analyze past & current spend
- **AWS Budgets** — set custom budgets, get alerts at thresholds
- **AWS Cost and Usage Report (CUR)** — most granular billing data
- **Pricing Calculator** — estimate cost before deploying
- **Trusted Advisor** — cost optimization recommendations
`
    },
    {
      title: "6. AWS Cloud Architecture Principles",
      content: `
**Design Principles**
- **Scalability** — handle increased load by scaling horizontally (more instances) or vertically (bigger instances)
- **Elasticity** — automatically scale up/down to match demand (Auto Scaling)
- **Loose coupling** — components depend on each other minimally (use queues/topics so failure in one doesn't cascade)
- **Automation** — use scripts and infrastructure as code
- **High availability** — run in multiple AZs
- **Fault tolerance** — design so a component failure doesn't take down the system
- **Disposable resources** — treat servers as cattle, not pets; rebuild, don't fix
- **Serverless** — let AWS manage the infrastructure

**Key Services for Resilient Architecture**
- **ELB** — distributes traffic across healthy instances
- **Auto Scaling Group (ASG)** — adds/removes EC2 based on demand
- **Route 53** — DNS failover between regions
- **SQS** — message queue to decouple services
- **SNS** — pub/sub for broadcasting events
- **Multi-AZ RDS** — automated failover
- **CloudWatch + Alarms** — monitor and react to issues

**Loose Coupling Pattern**
Producer → SQS Queue → Consumer
If consumer dies, messages wait in queue. Add more consumers to scale.

**Automation Tools**
- **AWS CloudFormation** — declarative IaC using JSON/YAML templates
- **AWS CDK** — IaC using familiar languages (TypeScript, Python, etc.)
- **AWS OpsWorks** — managed Chef/Puppet
- **AWS Systems Manager** — runbooks, session manager, parameter store
`
    },
    {
      title: "7. Key Exam Tips",
      content: `
**Free Tier Components**
- 12 months free (e.g., 750 hours/month of t2.micro EC2, 5 GB S3)
- Always free (e.g., 1M Lambda invocations/month)
- Short-term trials (e.g., 30-day Lightsail)

**Common Exam Traps**
- S3 is **object** storage, not a file system (no block-level access)
- EBS is for EC2; EFS is shared Linux file system
- RDS supports Multi-AZ; DynamoDB is global by default
- CloudWatch is monitoring; CloudTrail is auditing
- IAM is **global** (not regional)
- S3 buckets are **globally unique** names
- EC2 instance store = ephemeral (lost on stop)
- Stop vs Terminate: Stop keeps EBS, Terminate deletes everything by default

**Things to Memorize**
- Common ports: SSH=22, HTTP=80, HTTPS=443, DNS=53, RDP=3389, MySQL=3306, PostgreSQL=5432
- 11 9s of durability for S3
- 3 AZs in a region (usually)
- 6 Well-Architected pillars
- 4 support plans
- Shared responsibility: AWS = security OF, You = security IN
`
    }
  ]
};

window.NOTES_DATA["security-plus"] = {
  title: "CompTIA Security+ (SY0-701)",
  description: "Core security concepts, threats, architecture, operations, governance",
  sections: [
    {
      title: "1. General Security Concepts",
      content: `
**CIA Triad**
- **Confidentiality** — only authorized access (encryption, ACLs)
- **Integrity** — data is not altered (hashing, digital signatures)
- **Availability** — systems accessible when needed (redundancy, backups)

**Extended Models**
- **Parkerian Hexad** adds: Possession, Authenticity, Utility
- **AAA** = Authentication, Authorization, Accounting

**Security Controls — Categories**
- **Technical** (logical) — firewalls, ACLs, encryption
- **Managerial/Administrative** — policies, procedures, training
- **Physical** — locks, fences, guards, cameras

**Security Controls — Functions**
- **Preventive** — stop before (firewall, encryption, training)
- **Detective** — identify after (IDS, logs, cameras)
- **Corrective** — fix after (backups, patch, IR plan)
- **Deterrent** — discourage (warning signs, visible cameras)
- **Compensating** — alternate control when primary isn't feasible

**Key Security Principles**
- **Least Privilege** — minimum access needed
- **Defense in Depth** — layered controls
- **Separation of Duties (SoD)** — split critical tasks
- **Need to Know** — restrict info access
- **Zero Trust** — never trust, always verify
- **Privacy** — minimum necessary data collection
`
    },
    {
      title: "2. Threats, Vulnerabilities & Mitigations",
      content: `
**Threat Actor Types**
- **Nation-state** — sophisticated, APTs
- **Unskilled attacker** — uses existing tools
- **Hacktivist** — motivated by ideology
- **Insider** — current/former employee
- **Organized crime** — financial motive
- **Shadow IT** — unauthorized systems

**Attack Vectors**
- Email, web, removable media, cloud, supply chain, wireless, social engineering

**Social Engineering**
- **Phishing** — broad email attack
- **Spear phishing** — targeted
- **Whaling** — targets executives
- **Vishing** — phone-based
- **Smishing** — SMS
- **Pretexting** — fabricated scenario
- **Tailgating/piggybacking** — physical follow-through
- **Dumpster diving** — searching trash
- **Shoulder surfing** — watching over shoulder
- **Evil twin** — fake Wi-Fi AP
- **Baiting** — infected USB/media left out

**Malware Types**
- **Virus** — needs host + user action
- **Worm** — self-replicating across network
- **Trojan** — disguised as legitimate
- **Ransomware** — encrypts files, demands payment
- **Spyware** — collects data
- **Keylogger** — records keystrokes
- **Rootkit** — hides deep in OS
- **Logic bomb** — triggers on condition
- **Fileless malware** — lives in memory
- **Botnet** — many infected hosts
`
    },
    {
      title: "3. Cryptography & PKI",
      content: `
**Symmetric Encryption** (same key)
- **AES** (128/192/256) — gold standard
- **3DES** — legacy, deprecated
- **ChaCha20** — modern stream cipher
- **Blowfish, Twofish** — alternatives

**Asymmetric Encryption** (key pair)
- **RSA** — most common, factoring-based
- **ECC** — smaller keys, mobile/IoT
- **DH (Diffie-Hellman)** — key exchange
- **PGP/GPG** — email encryption

**Hashing** (one-way, fixed size)
- **MD5** — broken
- **SHA-1** — broken
- **SHA-2 family** (SHA-256, SHA-384, SHA-512) — secure
- **SHA-3** — latest
- **HMAC** — hash with key, for integrity + auth

**PKI (Public Key Infrastructure)**
- **CA** — Certificate Authority, issues certs
- **RA** — Registration Authority, verifies identity
- **CRL** — Certificate Revocation List
- **OCSP** — Online Certificate Status Protocol
- **CSR** — Certificate Signing Request
- **X.509** — standard cert format

**Digital Certificates** bind public key to identity
- **Domain Validation (DV)** — basic, just proves control of domain
- **Organization Validation (OV)** — verifies organization
- **Extended Validation (EV)** — strictest, shows green bar

**Other Concepts**
- **Non-repudiation** — proof of origin (digital signatures)
- **Key stretching** — bcrypt, PBKDF2 (slow down brute force)
- **Salting** — random data per password, defeats rainbow tables
- **Steganography** — hiding data within other data
- **Quantum cryptography** — uses photons, theoretically unbreakable
- **Blockchain** — distributed immutable ledger
`
    },
    {
      title: "4. Identity & Access Management",
      content: `
**Authentication Factors**
- **Something you know** — password, PIN
- **Something you have** — smart card, token
- **Something you are** — biometric
- **Somewhere you are** — location
- **Something you do** — behavioral

**MFA** = 2+ factors from different categories

**Authentication Protocols**
- **RADIUS** — UDP, central auth, often for network access
- **TACACS+** — TCP, used for network device admin (Cisco)
- **LDAP** — directory access protocol
- **Kerberos** — ticket-based, default in Windows AD
- **SAML** — XML, web SSO
- **OAuth 2.0** — authorization delegation
- **OpenID Connect** — identity layer on top of OAuth
- **SSO** — Single Sign-On, one credential for many systems
- **Federation** — trust between different orgs/IDPs

**Access Control Models**
- **MAC (Mandatory)** — system-enforced labels (Top Secret, Secret)
- **DAC (Discretionary)** — owner decides
- **RBAC (Role-Based)** — by role
- **ABAC (Attribute-Based)** — by user/resource/environment attributes
- **Rule-Based** — by rules (firewall rules)
- **Time-of-Day** — restricts by time

**Account Management Best Practices**
- Onboarding/offboarding procedures
- Disable unused accounts promptly
- Periodic access reviews
- Privileged Access Management (PAM)
- Just-In-Time access
- Privileged accounts logged & monitored
`
    },
    {
      title: "5. Network Security & Architecture",
      content: `
**OSI & TCP/IP**
- Memorize layers for troubleshooting
- Layer 3 = IP, Layer 4 = TCP/UDP, Layer 7 = application

**Network Attacks**
- **DoS/DDoS** — overload service
- **MITM** — intercept between parties
- **Replay** — resend captured traffic
- **ARP poisoning** — redirect local traffic
- **DNS poisoning** — corrupt DNS cache
- **VLAN hopping** — escape VLAN
- **MAC flooding** — overwhelm switch
- **Evil twin** — fake AP
- **Rogue DHCP** — assign bad IPs

**Defense**
- **Firewall** — stateless, stateful, NGFW
- **IDS/IPS** — detect/prevent intrusions
- **NAC** — Network Access Control, check device health
- **Honeypot** — decoy to study attackers
- **DMZ** — buffer zone for public servers
- **Segmentation** — break into smaller zones
- **Jump server** — single hardened entry to internal

**VPN Types**
- **Site-to-Site** — network to network
- **Client-to-Site (Remote Access)** — individual user
- **IPsec** — encryption/auth at network layer
- **SSL/TLS VPN** — uses HTTPS, easier through firewalls
- **Split tunnel** — only org traffic via VPN
- **Full tunnel** — all traffic via VPN
- **Always-On VPN** — always connected

**Wireless Security**
- **WPA3** — current best (uses SAE)
- **WPA2** — still common (uses PSK or Enterprise + 802.1X)
- **WEP** — broken
- **Personal vs Enterprise** — Personal = shared password, Enterprise = 802.1X + RADIUS
`
    },
    {
      title: "6. Security Operations",
      content: `
**Monitoring & Detection**
- **SIEM** — aggregates logs, correlates, alerts
- **SOAR** — automates response playbooks
- **IDS (signature-based)** — known patterns
- **IPS** — actively blocks
- **UEBA** — User & Entity Behavior Analytics
- **DLP** — Data Loss Prevention
- **EDR/XDR** — endpoint/extended detection & response
- **NDR** — network detection & response

**Incident Response Phases (NIST)**
1. **Preparation** — plan, train, tools
2. **Detection & Analysis** — identify & scope
3. **Containment, Eradication & Recovery** — stop, remove, restore
4. **Post-Incident Activity** — lessons learned

**Vulnerability Management**
1. **Scan** — find vulns
2. **Analyze** — prioritize by risk
3. **Remediate** — patch/fix
4. **Verify** — rescan
5. **Report** — to leadership

**Backup Strategies**
- **Full** — everything
- **Incremental** — since last backup (smallest, slowest restore)
- **Differential** — since last full (grows, faster restore)
- **Snapshot** — point-in-time copy

**3-2-1 Rule**
- 3 copies of data
- 2 different media types
- 1 offsite

**Logging & Monitoring**
- Audit logs (who did what)
- Syslog
- Journaling
- SIEM dashboards
- Alert tuning to reduce false positives
`
    },
    {
      title: "7. Governance, Risk & Compliance",
      content: `
**Risk Management Process**
1. Identify
2. Assess (likelihood × impact)
3. Treat — Mitigate, Transfer, Accept, Avoid
4. Monitor & Review

**Risk Calculations**
- **ALE = SLE × ARO** (Annual Loss Expectancy)
- **SLE = AV × EF** (Single Loss Expectancy)
- **ARO** = Annualized Rate of Occurrence

**Compliance Frameworks**
- **PCI DSS** — credit card data
- **HIPAA** — health info
- **GDPR** — EU data privacy
- **SOX** — financial reporting
- **GLBA** — financial privacy
- **FISMA** — federal info security
- **NIST CSF** — Identify, Protect, Detect, Respond, Recover
- **ISO 27001** — international security mgmt
- **CIS Controls** — prioritized security actions
- **COBIT** — IT governance

**Vendor Risk Management**
- **SLA** — Service Level Agreement
- **MOU** — Memorandum of Understanding
- **OLA** — Operating Level Agreement
- **NDA** — Non-Disclosure Agreement
- **Right to audit** clause
- **Data processing agreement (DPA)** for GDPR
- **Vendor questionnaires** & continuous monitoring

**Security Awareness Training**
- Phishing simulations
- Role-based training
- Onboarding for new hires
- Annual refreshers
- Measure effectiveness
`
    },
    {
      title: "8. Key Exam Tips",
      content: `
**Acronyms to Know Cold**
- CIA, AAA, SIEM, SOAR, EDR, XDR, NAC, DLP
- PKI, CA, RA, CRL, OCSP, CSR
- IDS, IPS, HIDS, NIDS
- MAC, DAC, RBAC, ABAC
- RTO, RPO, MTTR, MTBF
- BIA, BCP, DRP
- SSL, TLS, IPsec, SSH
- DNS, DHCP, HTTP/S, FTP/S, SFTP, SNMP, ICMP
- PCI DSS, HIPAA, GDPR, SOX, GLBA, FISMA, NIST, ISO, COBIT

**Common Ports**
- 20/21 — FTP, 22 — SSH, 23 — Telnet, 25 — SMTP
- 53 — DNS, 67/68 — DHCP, 69 — TFTP
- 80 — HTTP, 110 — POP3, 143 — IMAP
- 161/162 — SNMP, 389 — LDAP, 443 — HTTPS
- 445 — SMB, 3389 — RDP

**Memorize**
- IR phases (NIST)
- Backup types (full, incremental, differential)
- Symmetric vs asymmetric
- Hash properties
- TLS handshake (simplified)
- 3-2-1 backup rule
- Risk formulas
`
    }
  ]
};
