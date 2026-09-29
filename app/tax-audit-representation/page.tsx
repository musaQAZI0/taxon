import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Tax Audit Representation",
  description: "Professional representation in audits with documentation and response support.",
};

export default function TaxAuditRepresentationPage() {
  return (
    <ServiceLandingPage
      title="Tax Audit Representation"
      description="Professional representation in audits with documentation and response support."
      overview="Professional representation in audits: document preparation, responses, and communication support."
      keyFeatures={[
        "Audit notice review and requirement checklist",
        "Evidence compilation and documentation support",
        "Response drafting and submission guidance",
        "Follow-ups and communication support",
      ]}
      benefits={[
        "Reduced audit stress and clear steps",
        "Stronger documentation and responses",
        "Better coordination and timely submissions",
        "Professional handling of communications",
      ]}
      processSteps={[
        "Audit notice review",
        "Document preparation",
        "Response drafting",
        "Submission & follow-ups",
        "Resolution support",
      ]}
      requiredDocuments={[
        "CNIC copy",
        "Contact information",
        "Proof of address",
        "Business nature details (if applicable)",
        "Audit notice copy",
        "Supporting invoices/records",
      ]}
    />
  );
}

