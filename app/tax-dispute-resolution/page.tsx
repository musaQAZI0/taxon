import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Tax Dispute Resolution",
  description: "Dispute review and resolution support with clear steps and documentation.",
};

export default function TaxDisputeResolutionPage() {
  return (
    <ServiceLandingPage
      title="Tax Dispute Resolution"
      description="Dispute review and resolution support with clear steps and documentation."
      overview="Dispute review and resolution support with clear steps, documentation, and professional follow-ups."
      keyFeatures={[
        "Case review and evidence checklist",
        "Strategy, drafting, and submission support",
        "Professional follow-ups and coordination",
        "Documentation organization for the case",
      ]}
      benefits={[
        "Clear plan for dispute handling",
        "Improved documentation and evidence readiness",
        "Better follow-up discipline and timelines",
        "Reduced risk of missing critical steps",
      ]}
      processSteps={[
        "Case review",
        "Evidence checklist",
        "Strategy & drafting",
        "Submission",
        "Follow-up and closure",
      ]}
      requiredDocuments={[
        "CNIC copy",
        "Contact information",
        "Proof of address",
        "Business nature details (if applicable)",
        "Relevant notices/orders",
        "Supporting evidence/documents",
      ]}
    />
  );
}

