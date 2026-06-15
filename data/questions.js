// AWS Certified Cloud Practitioner (CLF-C02) - 30 Practice Questions
window.QUESTIONS_DATA = window.QUESTIONS_DATA || {};

window.QUESTIONS_DATA["aws-ccp"] = [
  {
    id: "aws-1",
    q: "Which AWS service provides a managed NoSQL database with single-digit millisecond latency at any scale?",
    options: ["Amazon RDS", "Amazon DynamoDB", "Amazon Redshift", "Amazon Aurora"],
    answer: 1,
    explanation: "Amazon DynamoDB is a fully managed NoSQL key-value and document database that delivers single-digit millisecond performance at any scale. RDS is relational, Redshift is a data warehouse, and Aurora is a relational (MySQL/PostgreSQL-compatible) database."
  },
  {
    id: "aws-2",
    q: "What is the AWS shared responsibility model?",
    options: [
      "AWS is responsible for everything in the cloud",
      "The customer is responsible for everything in the cloud",
      "AWS is responsible for security OF the cloud; the customer is responsible for security IN the cloud",
      "Both share equal responsibility for all layers"
    ],
    answer: 2,
    explanation: "AWS handles security OF the cloud (physical infrastructure, hardware, managed services like compute and storage). The customer is responsible for security IN the cloud (data, identity & access management, OS patching for EC2, network config, encryption of their data)."
  },
  {
    id: "aws-3",
    q: "Which pricing model allows you to significantly reduce EC2 costs when you commit to a 1- or 3-year term?",
    options: ["On-Demand", "Spot Instances", "Reserved Instances", "Dedicated Hosts"],
    answer: 2,
    explanation: "Reserved Instances provide up to ~72% discount vs On-Demand in exchange for a 1- or 3-year commitment. Spot can be cheaper but is interruptible. On-Demand has no commitment. Dedicated Hosts are a tenancy model, not primarily a discount tool."
  },
  {
    id: "aws-4",
    q: "Which service is used to distribute content globally with low latency using edge locations?",
    options: ["Amazon Route 53", "Amazon CloudFront", "AWS Global Accelerator", "Amazon API Gateway"],
    answer: 1,
    explanation: "Amazon CloudFront is AWS's CDN that caches content at edge locations worldwide. Route 53 is DNS, Global Accelerator optimizes network paths, and API Gateway is for creating/maintaining APIs."
  },
  {
    id: "aws-5",
    q: "Which AWS service provides object storage with 11 9s of durability?",
    options: ["Amazon EBS", "Amazon S3", "Amazon EFS", "AWS Storage Gateway"],
    answer: 1,
    explanation: "Amazon S3 is designed for 99.999999999% (11 nines) durability by automatically replicating data across multiple Availability Zones. EBS is block storage for EC2, EFS is shared file storage, and Storage Gateway bridges on-prem to AWS storage."
  },
  {
    id: "aws-6",
    q: "What does AWS Identity and Access Management (IAM) provide?",
    options: [
      "A managed NoSQL database",
      "DNS resolution",
      "Securely control access to AWS services and resources",
      "Object storage"
    ],
    answer: 2,
    explanation: "IAM lets you manage users, groups, roles, and policies to securely control who can do what in your AWS account. It is the foundation of AWS access control and is offered at no additional charge."
  },
  {
    id: "aws-7",
    q: "Which AWS service helps you estimate the cost of running workloads on AWS before you deploy them?",
    options: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Cost and Usage Report"],
    answer: 2,
    explanation: "AWS Pricing Calculator lets you estimate costs for planned AWS services before deploying. Cost Explorer analyzes past/current spend, Budgets sets spend alerts, and Cost and Usage Report provides detailed billing data."
  },
  {
    id: "aws-8",
    q: "Which of the following is a benefit of using AWS CloudFormation?",
    options: [
      "It automatically patches your EC2 instances",
      "It models and provisions AWS resources using code (Infrastructure as Code)",
      "It provides DDoS protection",
      "It monitors application logs"
    ],
    answer: 1,
    explanation: "CloudFormation lets you define infrastructure in JSON/YAML templates and provision it consistently. This is Infrastructure as Code (IaC), enabling repeatable, version-controlled deployments. The other options are not its purpose."
  },
  {
    id: "aws-9",
    q: "An Availability Zone (AZ) is best described as:",
    options: [
      "A single physical data center in a region",
      "One or more discrete data centers with redundant power, networking, and connectivity in an AWS Region",
      "A geographic location containing multiple regions",
      "An edge location for CloudFront"
    ],
    answer: 1,
    explanation: "An AZ is one or more physical data centers within a Region, each with independent power/network. A Region contains multiple AZs. Multi-AZ deployments provide high availability by spreading resources across AZs."
  },
  {
    id: "aws-10",
    q: "Which storage class is MOST cost-effective for data accessed once a year or less?",
    options: ["S3 Standard", "S3 Standard-IA", "S3 Glacier Deep Archive", "S3 One Zone-IA"],
    answer: 2,
    explanation: "S3 Glacier Deep Archive is the cheapest storage class, designed for long-term archives accessed rarely (7-12 hour retrieval). Standard-IA is for infrequent access, One Zone-IA is cheaper but stored in a single AZ, and Standard is for hot data."
  },
  {
    id: "aws-11",
    q: "Which AWS service provides serverless functions that run in response to events?",
    options: ["Amazon EC2", "AWS Lambda", "Amazon ECS", "Amazon Fargate"],
    answer: 1,
    explanation: "AWS Lambda runs your code in response to triggers (HTTP requests via API Gateway, S3 events, schedules, etc.) without provisioning or managing servers. You pay only for compute time consumed."
  },
  {
    id: "aws-12",
    q: "Which service is used to monitor AWS resources and applications in real time?",
    options: ["AWS CloudTrail", "Amazon CloudWatch", "AWS Config", "AWS Trusted Advisor"],
    answer: 1,
    explanation: "CloudWatch monitors metrics, logs, and alarms for AWS resources and applications. CloudTrail records API calls (audit). Config tracks resource configuration. Trusted Advisor provides best-practice recommendations."
  },
  {
    id: "aws-13",
    q: "Which AWS service provides a virtual private network (VPN) connection between your on-premises network and AWS?",
    options: [
      "AWS Direct Connect",
      "AWS Site-to-Site VPN",
      "Amazon Route 53",
      "Amazon API Gateway"
    ],
    answer: 1,
    explanation: "Site-to-Site VPN creates an encrypted IPsec tunnel over the public internet. Direct Connect is a dedicated private fiber line (not a VPN). Route 53 is DNS, and API Gateway is for APIs."
  },
  {
    id: "aws-14",
    q: "Which of the following is an AWS Well-Architected Framework pillar?",
    options: ["Scalability", "Cost Optimization", "Elasticity", "Automation"],
    answer: 1,
    explanation: "The 6 pillars are: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability. Scalability, Elasticity, and Automation are architectural concepts but not pillars."
  },
  {
    id: "aws-15",
    q: "What is the purpose of AWS Organizations?",
    options: [
      "To deploy applications globally",
      "To centrally manage and govern multiple AWS accounts",
      "To monitor application performance",
      "To encrypt data at rest"
    ],
    answer: 1,
    explanation: "AWS Organizations lets you group accounts into Organizational Units (OUs) and apply Service Control Policies (SCPs) for centralized governance. It is the foundation of multi-account AWS environments."
  },
  {
    id: "aws-16",
    q: "Which database service is purpose-built for running OLAP (analytical) workloads on petabyte-scale data?",
    options: ["Amazon RDS", "Amazon DynamoDB", "Amazon Redshift", "Amazon Neptune"],
    answer: 2,
    explanation: "Amazon Redshift is a managed data warehouse optimized for OLAP/analytics on large datasets. RDS is OLTP relational, DynamoDB is NoSQL key-value, and Neptune is a graph database."
  },
  {
    id: "aws-17",
    q: "Which support plan includes 24/7 phone, email, and chat access to AWS engineers, with a 1-hour response time for production-impaired systems?",
    options: ["Basic", "Developer", "Business", "Enterprise"],
    answer: 2,
    explanation: "Business support provides 24/7 phone/email/chat and a 1-hour response for production-impaired workloads. Enterprise adds a 15-minute response and an IEM (Infrastructure Event Management). Developer only gives business-hours access for general guidance."
  },
  {
    id: "aws-18",
    q: "Which AWS service helps you route users to the healthiest endpoint across multiple regions?",
    options: ["Amazon CloudFront", "Amazon Route 53", "Elastic Load Balancer", "AWS Global Accelerator"],
    answer: 1,
    explanation: "Route 53's DNS routing policies (failover, weighted, latency, geolocation) direct users to the best endpoint. ELB balances within a region, CloudFront is CDN, and Global Accelerator uses AWS's private backbone (not DNS) to route traffic."
  },
  {
    id: "aws-19",
    q: "What does the AWS Free Tier include for new accounts?",
    options: [
      "Unlimited free usage of all services for 12 months",
      "12 months of select services + always-free offers + short-term trials",
      "A one-time $300 credit",
      "Free usage of EC2 only"
    ],
    answer: 1,
    explanation: "The Free Tier has 3 components: 12-month free offers (e.g., 750 hrs/month t2.micro EC2), Always Free offers (e.g., Lambda invocations), and Short-term trials. It's not unlimited, not a credit, and not EC2-only."
  },
  {
    id: "aws-20",
    q: "Which service is used to send transactional email at scale?",
    options: ["Amazon SNS", "Amazon SQS", "Amazon SES", "Amazon MQ"],
    answer: 2,
    explanation: "Amazon Simple Email Service (SES) is for sending/receiving bulk and transactional email. SNS is pub/sub notifications, SQS is message queuing, MQ is managed ActiveMQ/RabbitMQ."
  },
  {
    id: "aws-21",
    q: "Which EC2 pricing option is ideal for short-lived, fault-tolerant workloads that can tolerate interruption?",
    options: ["On-Demand", "Reserved Instances", "Spot Instances", "Savings Plans"],
    answer: 2,
    explanation: "Spot Instances let you bid on spare EC2 capacity at up to 90% discount, but AWS can reclaim them with 2 minutes' notice — perfect for fault-tolerant, interruptible jobs like batch processing or rendering."
  },
  {
    id: "aws-22",
    q: "What is the primary purpose of Amazon VPC?",
    options: [
      "Object storage",
      "A logically isolated virtual network in the AWS cloud",
      "Serverless compute",
      "DNS resolution"
    ],
    answer: 1,
    explanation: "Amazon Virtual Private Cloud (VPC) lets you provision an isolated section of the AWS cloud where you launch resources in a virtual network you define — subnets, route tables, gateways, NACLs, security groups."
  },
  {
    id: "aws-23",
    q: "Which service records AWS API calls for auditing and compliance?",
    options: ["Amazon CloudWatch", "AWS CloudTrail", "AWS Config", "AWS Trusted Advisor"],
    answer: 1,
    explanation: "CloudTrail logs every API call (who, what, when, from where) and is the source of truth for AWS account activity. CloudWatch is metrics/logs, Config is resource config history, Trusted Advisor is recommendations."
  },
  {
    id: "aws-24",
    q: "Which of the following is a managed Kubernetes service?",
    options: ["Amazon ECS", "Amazon EKS", "AWS Fargate", "Amazon EC2"],
    answer: 1,
    explanation: "Amazon Elastic Kubernetes Service (EKS) runs managed Kubernetes. ECS is AWS's own container orchestrator. Fargate is serverless compute engine for containers (works with both ECS and EKS). EC2 is virtual machines, not containers."
  },
  {
    id: "aws-25",
    q: "Which AWS tool provides personalized recommendations for cost optimization, security, and performance?",
    options: ["AWS Cost Explorer", "AWS Trusted Advisor", "Amazon Inspector", "AWS Systems Manager"],
    answer: 1,
    explanation: "Trusted Advisor inspects your environment and gives recommendations across cost, security, fault tolerance, performance, and service limits. Cost Explorer is for spend analysis. Inspector scans for vulnerabilities. Systems Manager manages fleets."
  },
  {
    id: "aws-26",
    q: "Which messaging service uses a publish/subscribe (pub/sub) model?",
    options: ["Amazon SQS", "Amazon SNS", "Amazon MQ", "Amazon SES"],
    answer: 1,
    explanation: "Amazon Simple Notification Service (SNS) is pub/sub — publishers send to a topic and many subscribers receive. SQS is point-to-point queueing (one consumer per message). MQ is for traditional message brokers."
  },
  {
    id: "aws-27",
    q: "Which load balancer operates at Layer 7 (application) and supports content-based routing?",
    options: [
      "Network Load Balancer (NLB)",
      "Application Load Balancer (ALB)",
      "Classic Load Balancer (CLB)",
      "Gateway Load Balancer (GWLB)"
    ],
    answer: 1,
    explanation: "ALB operates at Layer 7 and routes based on URL path, host, headers, or query string. NLB is Layer 4 (TCP/UDP), GWLB is for third-party virtual appliances, and CLB is the legacy option."
  },
  {
    id: "aws-28",
    q: "Which AWS architectural principle emphasizes failing fast and recovering?",
    options: [
      "Tight coupling",
      "Loose coupling",
      "Monolithic design",
      "Vertical scaling only"
    ],
    answer: 1,
    explanation: "Loose coupling means components depend on each other as little as possible — usually via queues, topics, or events — so that if one component fails the others aren't affected. This is fundamental to resilient design on AWS."
  },
  {
    id: "aws-29",
    q: "What is the AWS billing alarm feature commonly used to do?",
    options: [
      "Charge customers for your SaaS app",
      "Send a notification when estimated charges exceed a threshold",
      "Pause running EC2 instances automatically",
      "Lock the root account"
    ],
    answer: 1,
    explanation: "Billing alarms are CloudWatch alarms on the EstimatedCharges metric that notify you (via SNS) when your projected bill crosses a threshold. They help prevent surprise bills."
  },
  {
    id: "aws-30",
    q: "Which of the following describes AWS Lambda's pricing model?",
    options: [
      "Pay per reserved instance hour",
      "Pay per GB-month of storage",
      "Pay per request and compute time (GB-seconds)",
      "Pay a flat monthly fee"
    ],
    answer: 2,
    explanation: "Lambda charges for the number of requests and the duration (rounded to the nearest ms) times memory allocated (GB-seconds). There is no charge when your code is not running. The free tier includes 1M requests and 400,000 GB-seconds per month."
  }
];
