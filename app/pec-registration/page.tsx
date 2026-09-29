import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "PEC Registration",
  description:
    "Pakistan Engineering Council registration for engineering firms and professionals.",
};

export default function PecRegistrationPage() {
  return (
    <ServiceLandingPage
      title="PEC Registration"
      description="Pakistan Engineering Council registration for engineering firms and professionals."
      overview="PEC registration is mandatory for engineering consultants, contractors, and construction firms in Pakistan. We provide complete PEC registration services including category determination, document preparation, and application processing."
      keyFeatures={[
        "Category assessment",
        "Document compilation",
        "Application processing",
        "Registration certificate",
        "Renewal support",
      ]}
      benefits={[
        "Legal engineering practice",
        "Government project eligibility",
        "Professional recognition",
        "Business credibility",
        "Access to PEC tenders",
      ]}
      processSteps={[
        "Category determination",
        "Document preparation",
        "Online application submission",
        "PEC verification and inspection",
        "Registration certificate issuance",
      ]}
      requiredDocuments={[
        "Engineering qualifications",
        "Professional experience",
        "Company registration (for firms)",
        "Financial capacity proof",
        "Project portfolio",
      ]}
    />
  );
}

