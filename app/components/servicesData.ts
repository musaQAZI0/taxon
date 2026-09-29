export type Service = {
  slug: string;
  href?: string;
  title: string;
  description: string;
  overview?: string;
  keyFeatures?: string[];
  benefits?: string[];
  processSteps?: string[];
  requiredDocuments?: string[];
};

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const DEFAULT_PROCESS = [
  "Document collection and verification",
  "Online application / submission",
  "Processing and review",
  "Submission / filing confirmation",
  "Digital delivery & support",
];

const DEFAULT_DOCS = [
  "CNIC copy",
  "Contact information",
  "Proof of address",
  "Business nature details (if applicable)",
];

export const SERVICES: Service[] = [
  {
    slug: slugify("Sole Proprietor Company Registration"),
    href: "/sole-proprietor",
    title: "Sole Proprietor Company Registration",
    description:
      "Individual business registration with complete setup and documentation support.",
    overview:
      "We help you register your sole proprietorship with the right documentation, NTN setup, and guidance for smooth compliance.",
    keyFeatures: [
      "NTN registration",
      "Business name registration",
      "Trade license application",
      "Bank account opening support",
      "Professional documentation",
    ],
    benefits: [
      "Complete business control",
      "Simple setup process",
      "Lower compliance requirements",
      "Direct profit retention",
      "Easy business decisions",
    ],
    processSteps: [
      "Business name verification",
      "NTN registration",
      "Trade license application",
      "Bank account setup",
      "Business documentation delivery",
    ],
    requiredDocuments: [
      "Owner's CNIC",
      "Business address proof",
      "Business activity description",
      "Contact information",
      "Bank account details",
    ],
  },
  {
    slug: slugify("Audit/Refund Cases (FBR)"),
    href: "/audit-refund-cases",
    title: "Audit/Refund Cases (FBR)",
    description:
      "Expert handling of FBR audit and tax refund cases with professional representation.",
    overview:
      "We represent taxpayers in FBR audit proceedings and manage tax refund claims professionally. Our team has extensive experience in dealing with FBR authorities, ensuring favorable outcomes and maximum refund recovery.",
    keyFeatures: [
      "FBR audit representation",
      "Refund claim processing",
      "Legal documentation",
      "Authority liaison",
      "Appeal filing if needed",
    ],
    benefits: [
      "Professional representation",
      "Maximum refund recovery",
      "Penalty minimization",
      "Expert negotiation",
      "Time and stress saving",
    ],
    processSteps: [
      "Case evaluation and strategy",
      "Document preparation",
      "FBR representation and negotiation",
      "Response submission",
      "Case resolution and follow-up",
    ],
    requiredDocuments: [
      "Tax returns and receipts",
      "Audit notices/refund documents",
      "Financial records",
      "Supporting evidence",
      "Previous correspondence with FBR",
    ],
  },
  {
    slug: slugify("PEC Registration"),
    href: "/pec-registration",
    title: "PEC Registration",
    description:
      "Pakistan Engineering Council registration for engineering firms and professionals.",
    overview:
      "PEC registration is mandatory for engineering consultants, contractors, and construction firms in Pakistan. We provide complete PEC registration services including category determination, document preparation, and application processing.",
    keyFeatures: [
      "Category assessment",
      "Document compilation",
      "Application processing",
      "Registration certificate",
      "Renewal support",
    ],
    benefits: [
      "Legal engineering practice",
      "Government project eligibility",
      "Professional recognition",
      "Business credibility",
      "Access to PEC tenders",
    ],
    processSteps: [
      "Category determination",
      "Document preparation",
      "Online application submission",
      "PEC verification and inspection",
      "Registration certificate issuance",
    ],
    requiredDocuments: [
      "Engineering qualifications",
      "Professional experience",
      "Company registration (for firms)",
      "Financial capacity proof",
      "Project portfolio",
    ],
  },
  {
    slug: slugify("Immigration & Visa File Preparation"),
    href: "/immigration-visa-file-preparation",
    title: "Immigration & Visa File Preparation",
    description:
      "Professional visa documentation and immigration file preparation services.",
    overview:
      "We assist individuals and businesses with comprehensive visa documentation and immigration file preparation for various countries. Our experts ensure all documents meet embassy requirements and increase approval chances.",
    keyFeatures: [
      "Document checklist preparation",
      "Application form assistance",
      "Supporting document compilation",
      "File organization",
      "Interview preparation",
    ],
    benefits: [
      "Higher approval chances",
      "Complete documentation",
      "Time-saving process",
      "Professional guidance",
      "Stress-free application",
    ],
    processSteps: [
      "Requirement assessment",
      "Document collection and verification",
      "Application form completion",
      "File compilation and review",
      "Submission preparation",
    ],
    requiredDocuments: [
      "Passport copies",
      "Financial documents",
      "Employment/business proof",
      "Purpose of travel documents",
      "Specific country requirements",
    ],
  },
  {
    slug: slugify("PSEB Registration (Call Center & Software House)"),
    href: "/pseb-registration",
    title: "PSEB Registration (Call Center & Software House)",
    description:
      "Pakistan Software Export Board registration for IT companies and call centers.",
    overview:
      "PSEB registration is mandatory for IT companies, software houses, and call centers in Pakistan. Registration provides tax benefits, export facilitation, and government support for technology businesses.",
    keyFeatures: [
      "PSEB membership application",
      "Tax exemption certificate",
      "Export facilitation",
      "PSEB certification",
      "Ongoing compliance support",
    ],
    benefits: [
      "Income tax exemptions",
      "Export incentives",
      "Government support programs",
      "International credibility",
      "Networking opportunities",
    ],
    processSteps: [
      "Eligibility verification",
      "Online application submission",
      "Physical inspection by PSEB",
      "Document verification",
      "Registration certificate issuance",
    ],
    requiredDocuments: [
      "Company registration certificate",
      "NTN and PSID",
      "Office premises proof",
      "IT equipment list",
      "Staff details and qualifications",
    ],
  },
  {
    slug: slugify("GST (Sales Tax) Registration"),
    href: "/gst-registration",
    title: "GST (Sales Tax) Registration",
    description: "Complete GST and sales tax registration with FBR compliance.",
    overview:
      "General Sales Tax (GST) registration is required for businesses with annual turnover exceeding the threshold limit. We provide comprehensive GST registration, return filing, and compliance management services.",
    keyFeatures: [
      "GST registration with FBR",
      "Monthly return filing",
      "Input tax credit management",
      "Audit support",
      "Compliance consultation",
    ],
    benefits: [
      "Legal business operations",
      "Input tax credit recovery",
      "Enhanced business credibility",
      "B2B transaction facilitation",
      "Government tender eligibility",
    ],
    processSteps: [
      "Turnover verification",
      "GST registration application",
      "FBR inspection",
      "GST number issuance",
      "Portal access activation",
    ],
    requiredDocuments: [
      "NTN certificate",
      "Business registration documents",
      "Bank account details",
      "Turnover statements",
      "Business premises verification",
    ],
  },
  {
    slug: slugify("Trademark & Logo Registration"),
    href: "/trademark-logo-registration",
    title: "Trademark & Logo Registration",
    description:
      "Intellectual property protection through trademark and logo registration.",
    overview:
      "Trademark registration protects your brand name, logo, and business identity. Our experts handle trademark search, application filing with IPO Pakistan, and complete prosecution until registration.",
    keyFeatures: [
      "Trademark availability search",
      "Logo design protection",
      "IPO application filing",
      "Opposition handling",
      "Registration certificate",
    ],
    benefits: [
      "Exclusive brand rights",
      "Legal protection nationwide",
      "Brand value enhancement",
      "Prevent unauthorized use",
      "Business asset creation",
    ],
    processSteps: [
      "Trademark search and clearance",
      "Application drafting and filing",
      "Examination and publication",
      "Opposition period handling",
      "Registration certificate issuance",
    ],
    requiredDocuments: [
      "Company/applicant details",
      "Logo design (if applicable)",
      "Class of goods/services",
      "Priority documents (if any)",
      "Power of attorney",
    ],
  },
  {
    slug: slugify("Copyright Registration"),
    href: "/copyright-registration",
    title: "Copyright Registration",
    description: "Protect your creative works with official copyright registration.",
    overview:
      "Copyright provides legal protection for original creative works including literary, artistic, musical, and software creations. We handle copyright registration with IPO Pakistan ensuring your intellectual property rights are protected.",
    keyFeatures: [
      "Copyright application filing",
      "Work documentation",
      "IPO registration",
      "Certificate issuance",
      "Infringement consultation",
    ],
    benefits: [
      "Legal ownership proof",
      "Exclusive reproduction rights",
      "Monetary compensation rights",
      "International protection",
      "Legal enforcement capability",
    ],
    processSteps: [
      "Work evaluation and documentation",
      "Application preparation",
      "Filing with IPO Pakistan",
      "Examination process",
      "Copyright certificate issuance",
    ],
    requiredDocuments: [
      "Original work samples",
      "Author/creator details",
      "Publication details (if published)",
      "Ownership documents",
      "Application forms",
    ],
  },
  {
    slug: slugify("Chamber of Commerce Membership"),
    href: "/chamber-of-commerce-membership",
    title: "Chamber of Commerce Membership",
    description: "Business registration with local and national chambers of commerce.",
    overview:
      "Chamber of Commerce membership provides business credibility, networking opportunities, and access to trade facilitation services. We assist in obtaining membership from relevant chambers based on your business location and industry.",
    keyFeatures: [
      "Membership application",
      "Document preparation",
      "Verification support",
      "Certificate processing",
      "Renewal services",
    ],
    benefits: [
      "Business networking",
      "Certificate of origin facility",
      "Export documentation",
      "Government tender eligibility",
      "Business advocacy",
    ],
    processSteps: [
      "Chamber selection based on location",
      "Application form completion",
      "Document compilation",
      "Submission and verification",
      "Membership certificate issuance",
    ],
    requiredDocuments: [
      "Business registration documents",
      "NTN certificate",
      "Premises ownership/lease",
      "Business activity proof",
      "Recommendation letters",
    ],
  },
  {
    slug: slugify("Income Tax Audit"),
    href: "/income-tax-audit",
    title: "Income Tax Audit",
    description:
      "Professional tax audit services ensuring FBR compliance and accurate reporting.",
    overview:
      "Income tax audit is mandatory for certain categories of taxpayers and can be selected randomly by FBR. Our experienced auditors conduct comprehensive tax audits, identify compliance issues, and prepare audit reports in accordance with FBR requirements.",
    keyFeatures: [
      "Pre-audit assessment",
      "Document review",
      "Compliance verification",
      "Audit report preparation",
      "FBR representation",
    ],
    benefits: [
      "FBR compliance assurance",
      "Risk identification",
      "Tax optimization opportunities",
      "Professional audit reports",
      "Penalty avoidance",
    ],
    processSteps: [
      "Initial documentation review",
      "Detailed audit examination",
      "Discrepancy identification",
      "Audit report finalization",
      "FBR submission and follow-up",
    ],
    requiredDocuments: [
      "Previous year tax returns",
      "Financial statements",
      "Bank statements",
      "Supporting documents",
      "Business records",
    ],
  },
  {
    slug: slugify("AOP Firm Registration"),
    href: "/aop",
    title: "AOP Firm Registration",
    description:
      "Association of Persons (AOP) firm registration with complete legal documentation.",
    overview:
      "We provide complete AOP registration services including partnership deed preparation, NTN registration, and bank account opening assistance.",
    keyFeatures: [
      "Partnership deed drafting",
      "NTN registration for firm",
      "Bank account opening support",
      "Letterhead and stamp design guidance",
      "Legal compliance guidance",
    ],
    benefits: [
      "Shared business responsibility",
      "Flexible profit-sharing structure",
      "Lower registration costs",
      "Simple management structure",
      "Tax benefits for partners",
    ],
    processSteps: [
      "Partners information collection",
      "Partnership deed preparation",
      "NTN application for firm",
      "Bank account opening documentation",
      "Firm registration completion",
    ],
    requiredDocuments: [
      "Partners' CNICs",
      "Partnership agreement terms",
      "Business address proof",
      "Business nature description",
      "Partners' contact information",
    ],
  },
  {
    slug: slugify("Private Limited Company Registration (SECP)"),
    href: "/private-limited-secp",
    title: "Private Limited Company Registration (SECP)",
    description: "Complete SECP registration for private limited companies.",
    overview:
      "We handle the entire incorporation process including name reservation, MOA/AOA preparation, and SECP online filing with compliance guidance.",
    keyFeatures: [
      "Name availability search",
      "MOA & AOA drafting",
      "SECP online filing",
      "Incorporation certificate support",
      "Post-incorporation support",
    ],
    benefits: [
      "Limited liability protection",
      "Separate legal entity",
      "Enhanced business credibility",
      "Easy capital raising",
      "Perpetual succession",
    ],
    processSteps: [
      "Name reservation with SECP",
      "MOA & AOA preparation",
      "Online incorporation filing",
      "Certificate of incorporation",
      "NTN and PSID registration",
    ],
    requiredDocuments: [
      "Directors' CNICs (minimum 2)",
      "Shareholders' details",
      "Company name options",
      "Registered office address",
      "Share capital details",
    ],
  },
  {
    slug: slugify("Individual Tax Filing"),
    href: "/individual-tax-filing",
    title: "Individual Tax Filing",
    description: "Personal tax returns ki filing.",
    overview:
      "We help individuals file accurate returns with a clear checklist, review call, and timely submission.",
    keyFeatures: [
      "Checklist + document verification",
      "Return preparation with review call",
      "Submission confirmation and guidance",
      "Post-filing support (queries/notices)",
    ],
    benefits: [
      "Stay compliant with FBR requirements",
      "Reduce errors and avoid penalties",
      "Save time with a clear, guided process",
      "Support for follow-ups when needed",
    ],
    processSteps: DEFAULT_PROCESS,
    requiredDocuments: [...DEFAULT_DOCS, "Income / salary details", "Bank statement (if available)"],
  },
  {
    slug: slugify("Business Tax Solutions"),
    href: "/business-tax-solutions",
    title: "Business Tax Solutions",
    description: "Business ke liye tax solutions.",
    overview:
      "A structured approach for SMEs and growing businesses — compliance, reporting, and practical tax planning.",
    keyFeatures: [
      "Compliance review and planning guidance",
      "Documentation checklist and record structuring",
      "Reporting support (as needed)",
      "Notices/queries handling support",
    ],
    benefits: [
      "Reduced compliance risk",
      "Better documentation and reporting discipline",
      "Practical planning to avoid surprises",
      "A clear system for ongoing support",
    ],
    processSteps: DEFAULT_PROCESS,
    requiredDocuments: [...DEFAULT_DOCS, "Business registration details", "Sales / expense summary"],
  },
  {
    slug: slugify("Tax Planning & Advisory"),
    href: "/tax-planning-advisory",
    title: "Tax Planning & Advisory",
    description: "Tax planning aur consultation services.",
    overview:
      "Consultation-based advisory to reduce risk, optimize compliance, and plan your taxes with documentation clarity.",
    keyFeatures: [
      "Discovery call and current status review",
      "Planning recommendations and action items",
      "Documentation checklist and follow-up support",
      "Guidance for filings/changes when required",
    ],
    benefits: [
      "Clear next steps with reduced risk",
      "Better compliance planning with documentation",
      "Practical advice tailored to your situation",
      "Support for implementation and follow-ups",
    ],
    processSteps: [
      "Discovery call and goals",
      "Current status review",
      "Planning recommendations",
      "Documentation checklist",
      "Follow‑up support",
    ],
    requiredDocuments: [...DEFAULT_DOCS, "Previous returns (if any)", "Relevant contracts/invoices (if any)"],
  },
  {
    slug: slugify("FBR Registration"),
    href: "/fbr-registration",
    title: "FBR Registration",
    description: "Federal Board of Revenue ke saath registration.",
    overview:
      "We register you with FBR and ensure your profile details are correct for future filings and compliance.",
    keyFeatures: [
      "Profile creation/registration guidance",
      "Information verification and corrections",
      "Compliance-ready profile setup",
      "Support for post-registration steps",
    ],
    benefits: [
      "Correct profile for future filings",
      "Reduced risk of errors and mismatches",
      "Smoother submissions going forward",
      "Fast support if updates are needed",
    ],
    processSteps: DEFAULT_PROCESS,
    requiredDocuments: [...DEFAULT_DOCS],
  },
  {
    slug: slugify("NTN Registration"),
    href: "/ntn-registration",
    title: "NTN Registration",
    description: "National Tax Number ka registration.",
    overview:
      "Quick and hassle‑free NTN registration for individuals and businesses, with complete guidance and follow‑up.",
    keyFeatures: [
      "Fast processing within 24–48 hours (subject to verification)",
      "Complete documentation assistance",
      "FBR-compliant registration",
      "Digital certificate delivery",
      "Post-registration support",
    ],
    benefits: [
      "Required for business operations",
      "Helps open bank accounts and trade licenses",
      "Improves professional credibility",
      "Avoid penalties and legal issues",
    ],
    processSteps: DEFAULT_PROCESS,
    requiredDocuments: [...DEFAULT_DOCS, "Business registration documents (if business)"],
  },
  {
    slug: slugify("STRN Registration"),
    href: "/strn-registration",
    title: "STRN Registration",
    description: "Sales Tax Registration Number.",
    overview:
      "STRN registration for sales tax — eligibility review, documentation, and submission with compliance guidance.",
    keyFeatures: [
      "Eligibility review and checklist",
      "Documentation preparation assistance",
      "Submission and follow-up guidance",
      "Compliance guidance for ongoing filings",
    ],
    benefits: [
      "Sales tax compliance readiness",
      "Reduced registration delays with correct docs",
      "Clear process with follow-up support",
      "Better preparation for ongoing GST filings",
    ],
    processSteps: DEFAULT_PROCESS,
    requiredDocuments: [...DEFAULT_DOCS, "Business registration documents", "Business premises details (if applicable)"],
  },
  {
    slug: slugify("Income Tax Returns"),
    href: "/income-tax-returns",
    title: "Income Tax Returns",
    description: "Income tax returns ki filing.",
    overview:
      "End‑to‑end income tax return filing with review, submission, and after‑filing support.",
    keyFeatures: [
      "Return preparation and review call",
      "Proper documentation checklist",
      "Timely submission and confirmation",
      "After-filing support (queries/notices)",
    ],
    benefits: [
      "Stay compliant with FBR requirements",
      "Better record-keeping and documentation",
      "Reduce risk of errors and penalties",
      "Support for follow-ups when needed",
    ],
    processSteps: DEFAULT_PROCESS,
    requiredDocuments: [...DEFAULT_DOCS, "Income details", "Bank statement (if available)"],
  },
  {
    slug: slugify("Sales Tax Returns"),
    href: "/sales-tax-returns",
    title: "Sales Tax Returns",
    description: "Sales tax returns ki filing.",
    overview:
      "Monthly/periodic sales tax return filing with reconciliation and a clear compliance workflow.",
    keyFeatures: [
      "Monthly/periodic filing support",
      "Sales/purchase reconciliation checklist",
      "Record organization and reporting",
      "On-time submission reminders",
    ],
    benefits: [
      "Avoid compliance gaps and penalties",
      "Improved tax record accuracy",
      "Clear workflow for ongoing filings",
      "Better visibility of sales/purchase data",
    ],
    processSteps: DEFAULT_PROCESS,
    requiredDocuments: [...DEFAULT_DOCS, "Sales invoices/summary", "Purchase invoices/summary"],
  },
  {
    slug: slugify("Withholding Tax Services"),
    href: "/withholding-tax-services",
    title: "Withholding Tax Services",
    description: "Withholding tax se related services.",
    overview:
      "Withholding tax calculations, deposits, statements, and compliance support — done on time.",
    keyFeatures: [
      "Withholding calculations and category review",
      "Deposits and statement preparation support",
      "Compliance checklist for each cycle",
      "Record support for audits/queries",
    ],
    benefits: [
      "On-time compliance and fewer penalties",
      "Clear tracking of withholding obligations",
      "Better record-keeping for notices/audits",
      "Reduced risk of under/over withholding",
    ],
    processSteps: DEFAULT_PROCESS,
    requiredDocuments: [...DEFAULT_DOCS, "Payment records", "Withholding categories details"],
  },
  {
    slug: slugify("Tax Audit Representation"),
    href: "/tax-audit-representation",
    title: "Tax Audit Representation",
    description: "Tax audit mein representation.",
    overview:
      "Professional representation in audits: document preparation, responses, and communication support.",
    keyFeatures: [
      "Audit notice review and requirement checklist",
      "Evidence compilation and documentation support",
      "Response drafting and submission guidance",
      "Follow-ups and communication support",
    ],
    benefits: [
      "Reduced audit stress and clear steps",
      "Stronger documentation and responses",
      "Better coordination and timely submissions",
      "Professional handling of communications",
    ],
    processSteps: [
      "Audit notice review",
      "Document preparation",
      "Response drafting",
      "Submission & follow‑ups",
      "Resolution support",
    ],
    requiredDocuments: [...DEFAULT_DOCS, "Audit notice copy", "Supporting invoices/records"],
  },
  {
    slug: slugify("Tax Dispute Resolution"),
    href: "/tax-dispute-resolution",
    title: "Tax Dispute Resolution",
    description: "Tax disputes ko resolve karna.",
    overview:
      "Dispute review and resolution support with clear steps, documentation, and professional follow‑ups.",
    keyFeatures: [
      "Case review and evidence checklist",
      "Strategy, drafting, and submission support",
      "Professional follow-ups and coordination",
      "Documentation organization for the case",
    ],
    benefits: [
      "Clear plan for dispute handling",
      "Improved documentation and evidence readiness",
      "Better follow-up discipline and timelines",
      "Reduced risk of missing critical steps",
    ],
    processSteps: [
      "Case review",
      "Evidence checklist",
      "Strategy & drafting",
      "Submission",
      "Follow‑up and closure",
    ],
    requiredDocuments: [...DEFAULT_DOCS, "Relevant notices/orders", "Supporting evidence/documents"],
  },
  {
    slug: slugify("Bookkeeping Services"),
    href: "/bookkeeping-services",
    title: "Bookkeeping Services",
    description: "Accounting aur bookkeeping.",
    overview:
      "Clean books with monthly reporting — bookkeeping, categorization, and finance operations support.",
    keyFeatures: [
      "Monthly bookkeeping and categorization",
      "Bank reconciliation support",
      "Monthly reports and summaries",
      "Ongoing finance operations support",
    ],
    benefits: [
      "Clear financial visibility",
      "Better compliance readiness",
      "Reduced errors and missing entries",
      "Stronger decisions with clean reporting",
    ],
    processSteps: [
      "Data collection",
      "Categorization & reconciliation",
      "Monthly reports",
      "Review & adjustments",
      "Ongoing support",
    ],
    requiredDocuments: [...DEFAULT_DOCS, "Bank statements", "Sales/purchase records"],
  },
];

export const SERVICES_BY_SLUG = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s] as const),
);
