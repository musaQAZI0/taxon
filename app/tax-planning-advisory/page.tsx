import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Tax Planning & Advisory",
  description: "Consultation-based advisory to reduce risk and plan taxes clearly.",
};

export default function TaxPlanningAdvisoryPage() {
  return (
    <ServiceLandingPage
      title="Tax Planning & Advisory"
      description="Consultation-based advisory to reduce risk and plan taxes clearly."
      overview="Consultation-based advisory to reduce risk, optimize compliance, and plan your taxes with documentation clarity."
      keyFeatures={[
        "Discovery call and current status review",
        "Planning recommendations and action items",
        "Documentation checklist and follow-up support",
        "Guidance for filings/changes when required",
      ]}
      benefits={[
        "Clear next steps with reduced risk",
        "Better compliance planning with documentation",
        "Practical advice tailored to your situation",
        "Support for implementation and follow-ups",
      ]}
      processSteps={[
        "Discovery call and goals",
        "Current status review",
        "Planning recommendations",
        "Documentation checklist",
        "Follow-up support",
      ]}
      requiredDocuments={[
        "CNIC copy",
        "Contact information",
        "Proof of address",
        "Business nature details (if applicable)",
        "Previous returns (if any)",
        "Relevant contracts/invoices (if any)",
      ]}
    />
  );
}

