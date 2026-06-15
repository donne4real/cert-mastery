// PMP (Project Management Professional) - 30 Practice Questions
window.QUESTIONS_DATA = window.QUESTIONS_DATA || {};

window.QUESTIONS_DATA["pmp"] = [
  {
    id: "pmp-1",
    q: "Which of the following BEST describes a project?",
    options: [
      "Ongoing operational work",
      "A temporary endeavor undertaken to create a unique product, service, or result",
      "A department's daily tasks",
      "An indefinite initiative"
    ],
    answer: 1,
    explanation: "PMI defines a project as temporary (definite start and end) and unique (different from routine operations). Operations are ongoing and repetitive. Programs are related projects managed together; portfolios are collections aligned to strategic goals."
  },
  {
    id: "pmp-2",
    q: "Which process group includes 'Develop Project Charter'?",
    options: ["Planning", "Initiating", "Executing", "Monitoring and Controlling"],
    answer: 1,
    explanation: "Develop Project Charter is the first process in the Initiating Process Group. It formally authorizes the project and gives the PM authority to apply resources. The 5 process groups: Initiating, Planning, Executing, Monitoring & Controlling, Closing."
  },
  {
    id: "pmp-3",
    q: "Which knowledge area covers creating the WBS?",
    options: [
      "Project Scope Management",
      "Project Schedule Management",
      "Project Cost Management",
      "Project Integration Management"
    ],
    answer: 0,
    explanation: "Create WBS is a Scope Management process. The WBS decomposes deliverables into smaller, manageable work packages — the foundation for schedule, cost, and resource planning."
  },
  {
    id: "pmp-4",
    q: "A project has an EV of $50,000, PV of $60,000, and AC of $55,000. What is the Cost Performance Index (CPI)?",
    options: ["0.91", "1.10", "0.83", "1.20"],
    answer: 0,
    explanation: "CPI = EV / AC = 50,000 / 55,000 = 0.91. CPI < 1 means over budget. SPI = EV / PV = 50,000 / 60,000 = 0.83 (behind schedule). Always show the formulas and interpretation for EVM questions."
  },
  {
    id: "pmp-5",
    q: "Which conflict resolution technique is considered BEST by PMs in most situations?",
    options: [
      "Forcing",
      "Smoothing",
      "Collaborating/Problem Solving",
      "Avoiding"
    ],
    answer: 2,
    explanation: "PMI's Conflict Resolution techniques ranked: Collaborate/Problem Solve (best, win-win), Compromise/Reconcile, Smooth/Accommodate, Force/Direct, Avoid/Wither (worst). Use Collaborate for true win-win; Avoid only for trivial issues."
  },
  {
    id: "pmp-6",
    q: "What is the critical path?",
    options: [
      "The shortest path through the network",
      "The longest path of activities; it determines the minimum project duration",
      "The path with the most resources",
      "The most expensive path"
    ],
    answer: 1,
    explanation: "The critical path is the longest sequence of dependent activities — it determines the minimum project duration. Activities on it have zero float/slack. Any delay delays the project. Near-critical paths (close float) also need attention."
  },
  {
    id: "pmp-7",
    q: "Which document formally authorizes a project's existence and gives the PM authority?",
    options: ["Project Management Plan", "Project Charter", "Statement of Work", "Business Case"],
    answer: 1,
    explanation: "The Project Charter is the document that formally authorizes the project. It's created in Develop Project Charter (Initiating) and signed by the sponsor. The SOW describes the product scope; the Business Case justifies the investment."
  },
  {
    id: "pmp-8",
    q: "Which risk response is appropriate for a NEGATIVE risk (threat)?",
    options: [
      "Exploit",
      "Share",
      "Mitigate",
      "Enhance"
    ],
    answer: 2,
    explanation: "Negative risks (threats): Avoid, Mitigate, Transfer, Accept. Positive risks (opportunities): Exploit, Share, Enhance, Accept. Don't mix them up — common exam trap."
  },
  {
    id: "pmp-9",
    q: "Which estimating technique uses three-point estimates (O, M, P) with a beta distribution?",
    options: ["Analogous", "Parametric", "PERT (Beta Distribution)", "Bottom-Up"],
    answer: 2,
    explanation: "PERT uses (Optimistic + 4*Most Likely + Pessimistic) / 6 — the beta distribution formula. Triangular uses (O + M + P) / 3. Analogous uses historical data from similar projects. Parametric uses statistical relationships (units × rate)."
  },
  {
    id: "pmp-10",
    q: "Which of the following BEST describes stakeholder engagement?",
    options: [
      "Telling stakeholders only at the end",
      "Actively managing relationships and communications to meet stakeholder needs and expectations",
      "Avoiding difficult stakeholders",
      "Sending the same message to all stakeholders"
    ],
    answer: 1,
    explanation: "Engagement is two-way: identify, analyze, plan, and manage relationships. Use the Stakeholder Engagement Assessment Matrix to track Current vs Desired engagement (Unaware, Resistant, Neutral, Supportive, Leading)."
  },
  {
    id: "pmp-11",
    q: "An issue is logged during a project. It is NOT a risk because:",
    options: [
      "It is uncertain",
      "It has already occurred and needs to be resolved, not just managed",
      "It is too small to track",
      "It cannot be mitigated"
    ],
    answer: 1,
    explanation: "Risks are uncertain future events; issues have already happened. Both are tracked (in Risk Register and Issue Log) but require different actions — risk response plans vs. issue resolution."
  },
  {
    id: "pmp-12",
    q: "Which earned value formula represents the BUDGETED cost of work actually performed?",
    options: ["PV", "EV", "AC", "BAC"],
    answer: 1,
    explanation: "EV (Earned Value) = budgeted cost of work performed. PV (Planned Value) = budgeted cost of work scheduled. AC (Actual Cost) = actual cost of work performed. BAC (Budget at Completion) = total project budget. EAC = Estimate at Completion."
  },
  {
    id: "pmp-13",
    q: "Which organizational structure has the LEAST PM authority?",
    options: ["Projectized", "Matrix – Strong", "Matrix – Weak", "Functional"],
    answer: 3,
    explanation: "Functional: PM has little/no authority; resources come from the functional manager. Weak Matrix: PM is a coordinator/co-assistant (still a role, not job). Balanced Matrix: PM shares authority. Strong Matrix: PM has significant authority. Projectized: PM has full authority."
  },
  {
    id: "pmp-14",
    q: "Which of the following is a NEGOTIATION tool used to expand options?",
    options: [
      "Position-based bargaining",
      "Principled negotiation (interest-based)",
      "Hard bargaining",
      "Walk-away threat"
    ],
    answer: 1,
    explanation: "Principled Negotiation (Fisher & Ury): separate people from problem, focus on interests not positions, invent options for mutual gain, insist on objective criteria. Soft/hard bargaining and walk-away threats are positional, not collaborative."
  },
  {
    id: "pmp-15",
    q: "Which of the following is the PRIMARY purpose of a Kickoff meeting?",
    options: [
      "To develop the schedule",
      "To formally start the project and align stakeholders on objectives, roles, and plan",
      "To close the project",
      "To assign the budget"
    ],
    answer: 1,
    explanation: "A kickoff meeting formally launches the project, communicates the charter and high-level plan, aligns stakeholders, and clarifies roles. It usually happens after planning is well underway but before executing."
  },
  {
    id: "pmp-16",
    q: "Which knowledge area is the ONLY one that runs through ALL process groups?",
    options: [
      "Scope Management",
      "Schedule Management",
      "Project Integration Management",
      "Stakeholder Management"
    ],
    answer: 2,
    explanation: "Integration Management is the only knowledge area that has processes in all 5 process groups (Develop Charter, Develop Project Plan, Direct and Manage Project Work, Manage Project Knowledge, Monitor and Control Project Work, Perform Integrated Change Control, Close Project/Phase). It's where everything is tied together."
  },
  {
    id: "pmp-17",
    q: "Which document specifies how risks will be identified, analyzed, responded to, and monitored?",
    options: ["Risk Register", "Risk Management Plan", "Issue Log", "Risk Breakdown Structure"],
    answer: 1,
    explanation: "The Risk Management Plan is part of the Project Management Plan. The Risk Register logs individual risks. The RBS categorizes risk types. The Issue Log tracks realized risks (issues)."
  },
  {
    id: "pmp-18",
    q: "What is the purpose of a burndown chart?",
    options: [
      "Show budget consumption",
      "Show remaining work over time on a sprint/release",
      "Show resource allocation",
      "Show risk severity"
    ],
    answer: 1,
    explanation: "A burndown chart plots remaining work (Y-axis) vs. time (X-axis), commonly in Agile sprints. A burnup chart shows work completed vs. scope. Both are visual progress tools."
  },
  {
    id: "pmp-19",
    q: "Which of the following is a TOOL and TECHNIQUE of the 'Manage Stakeholder Engagement' process?",
    options: ["Stakeholder register", "Communications management plan", "Interpersonal and team skills (e.g., conflict resolution)", "Power/interest grid"],
    answer: 2,
    explanation: "Manage Stakeholder Engagement T&T: Communication methods, Interpersonal and team skills, Ground rules. Stakeholder register is an INPUT. Power/interest grid is an INPUT/analytical technique. Know the difference for the exam."
  },
  {
    id: "pmp-20",
    q: "Which type of contract places the MOST cost risk on the SELLER?",
    options: ["Cost Plus Fixed Fee (CPFF)", "Time and Materials (T&M)", "Firm Fixed Price (FFP)", "Cost Plus Incentive Fee (CPIF)"],
    answer: 2,
    explanation: "FFP: seller bears most risk (price is fixed regardless of cost overruns). T&M: hybrid with less seller risk. CPFF/CPIF: buyer bears cost risk. FFP is best when scope is well-defined; T&M for ambiguous work."
  },
  {
    id: "pmp-21",
    q: "Which process group has the MOST processes in the PMBOK Guide?",
    options: ["Initiating", "Planning", "Executing", "Monitoring and Controlling"],
    answer: 1,
    explanation: "Planning has the most processes (around 24+ depending on version), including Scope, Schedule, Cost, Quality, Resource, Communications, Risk, Procurement, Stakeholder planning. Executing and M&C also have many, but Planning dominates."
  },
  {
    id: "pmp-22",
    q: "What is a 'Gold Plating' risk in project management?",
    options: [
      "Adding extra features not requested, often inflating scope and cost",
      "Skipping quality control",
      "Using premium materials",
      "Underbidding the project"
    ],
    answer: 0,
    explanation: "Gold plating = delivering MORE than what was asked. It's a scope creep risk because the customer didn't ask for it, and you may have spent time/budget that wasn't approved. It also creates change orders when discovered."
  },
  {
    id: "pmp-23",
    q: "Which document identifies the PERSON, ROLE, and timing for each activity?",
    options: [
      "RACI matrix",
      "WBS",
      "Project schedule (Gantt chart or milestone list)",
      "Resource calendar"
    ],
    answer: 2,
    explanation: "The project schedule ties activities to dates, durations, and resources. The WBS is a deliverable breakdown (not timeline). RACI shows roles/responsibilities for activities. The resource calendar shows availability."
  },
  {
    id: "pmp-24",
    q: "Which change control process is used when a change affects the project BASELINE?",
    options: [
      "Verbal approval by the PM",
      "Integrated Change Control (formal CCB review)",
      "Acceptance of the change by the team",
      "Wait until the next status meeting"
    ],
    answer: 1,
    explanation: "Integrated Change Control reviews all change requests — those affecting baselines go through the Change Control Board (CCB) for impact assessment and approval/rejection. Even the PM cannot approve changes affecting the baseline unilaterally."
  },
  {
    id: "pmp-25",
    q: "Which of the following is a benefit of using a Hybrid (Agile-Predictive) approach?",
    options: [
      "It's always faster",
      "It combines flexibility of Agile with predictability of waterfall for parts that need it",
      "It eliminates the need for documentation",
      "It removes the need for a sponsor"
    ],
    answer: 1,
    explanation: "Hybrid blends predictive (waterfall) and adaptive (Agile) elements — useful when some parts of the project are well-known and stable, while others need iteration. The PM must tailor the approach to the project's nature."
  },
  {
    id: "pmp-26",
    q: "Which stakeholder engagement strategy is BEST for stakeholders who are RESISTANT?",
    options: ["Monitor", "Keep satisfied", "Keep informed", "Manage closely"],
    answer: 1,
    explanation: "Stakeholder Engagement strategies: Unaware → Monitor. Resistant → Keep Satisfied. Neutral → Keep Informed. Supportive → Ensure. Leading → Engage/Manage Closely. Always C/D: Manage Closely, Keep Satisfied."
  },
  {
    id: "pmp-27",
    q: "Which document captures the LESSONS LEARNED during the project?",
    options: ["Project closure report", "Project management plan", "Risk register", "Issue log"],
    answer: 0,
    explanation: "Lessons Learned are documented throughout the project (not just at the end) and finalized during Close Project/Phase. They become organizational process assets (OPA) for future projects. The Project Closure Report summarizes final performance."
  },
  {
    id: "pmp-28",
    q: "Which of the following is a feature of effective communication?",
    options: [
      "Push-based only",
      "Pull-based only",
      "Multi-modal: push, pull, and interactive, tailored to stakeholder needs",
      "Avoid written communication"
    ],
    answer: 2,
    explanation: "Effective communication considers: who, what, when, where, why, how. Channels include push (email, reports), pull (intranet, knowledge base), and interactive (meetings, calls, video). The Communication Management Plan defines all this."
  },
  {
    id: "pmp-29",
    q: "Which knowledge area includes the 'Perform Qualitative Risk Analysis' process?",
    options: ["Cost Management", "Schedule Management", "Risk Management", "Quality Management"],
    answer: 2,
    explanation: "Risk Management includes: Plan Risk Management, Identify Risks, Perform Qualitative Risk Analysis, Perform Quantitative Risk Analysis, Plan Risk Responses, Implement Risk Responses, Monitor Risks. Qualitative = prioritize by probability × impact. Quantitative = numerical analysis (EMV, Monte Carlo)."
  },
  {
    id: "pmp-30",
    q: "Which Servant Leadership behavior BEST supports team self-organization?",
    options: [
      "Micromanaging the team",
      "Removing impediments and empowering the team to decide HOW to do the work",
      "Assigning all tasks personally",
      "Avoiding feedback"
    ],
    answer: 1,
    explanation: "Servant leadership in Agile removes blockers, fosters psychological safety, and lets the team decide HOW (not WHAT — that's still the PM/sponsor's job). Common behaviors: coaching, listening, supporting growth, encouraging decision-making."
  }
];
