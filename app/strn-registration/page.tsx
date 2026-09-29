import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "STRN Registration",
  description: "STRN registration for sales tax with compliance guidance.",
};

export default function StrnRegistrationPage() {
  return (
    <ServiceLandingPage
      title="STRN Registration"
      description="STRN registration for sales tax with compliance guidance."
      overview="STRN registration for sales tax — eligibility review, documentation, and submission with compliance guidance."
      keyFeatures={[
        "Eligibility review and checklist",
        "Documentation preparation assistance",
        "Submission and follow-up guidance",
        "Compliance guidance for ongoing filings",
      ]}
      benefits={[
        "Sales tax compliance readiness",
        "Reduced registration delays with correct docs",
        "Clear process with follow-up support",
        "Better preparation for ongoing GST filings",
      ]}
      processSteps={[
        "Document collection and verification",
        "Online application / submission",
        "Processing and review",
        "Submission / filing confirmation",
        "Digital delivery & support",
      ]}
      requiredDocuments={[
        "CNIC copy",
        "Contact information",
        "Proof of address",
        "Business nature details (if applicable)",
        "Business registration documents",
        "Business premises details (if applicable)",
      ]}
    />
  );
}

