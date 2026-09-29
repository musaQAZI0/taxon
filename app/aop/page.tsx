import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "AOP Firm Registration",
  description:
    "Association of Persons (AOP) firm registration with complete legal documentation.",
};

export default function AopFirmRegistrationPage() {
  return (
    <ServiceLandingPage
      title="AOP Firm Registration"
      description="Association of Persons (AOP) firm registration with complete legal documentation."
      overview="Association of Persons (AOP) firm registration with complete legal documentation."
      keyFeatures={[
        "Partnership deed drafting",
        "NTN registration for firm",
        "Bank account opening support",
        "Letterhead and stamp design guidance",
        "Legal compliance guidance",
      ]}
      benefits={[
        "Shared business responsibility",
        "Flexible profit-sharing structure",
        "Lower registration costs",
        "Simple management structure",
        "Tax benefits for partners",
      ]}
      processSteps={[
        "Partners information collection",
        "Partnership deed preparation",
        "NTN application for firm",
        "Bank account opening documentation",
        "Firm registration completion",
      ]}
      requiredDocuments={[
        "Partners' CNICs",
        "Partnership agreement terms",
        "Business address proof",
        "Business nature description",
        "Partners' contact information",
      ]}
    />
  );
}

