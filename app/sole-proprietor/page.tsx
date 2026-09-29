import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Sole Proprietor Company Registration",
  description:
    "Individual business registration with complete setup and documentation support.",
};

export default function SoleProprietorPage() {
  return (
    <ServiceLandingPage
      title="Sole Proprietor Company Registration"
      description="Individual business registration with complete setup and documentation support."
      overview="Individual business registration with complete setup and documentation support."
      keyFeatures={[
        "NTN registration",
        "Business name registration",
        "Trade license application",
        "Bank account opening support",
        "Professional documentation",
      ]}
      benefits={[
        "Complete business control",
        "Simple setup process",
        "Lower compliance requirements",
        "Direct profit retention",
        "Easy business decisions",
      ]}
      processSteps={[
        "Business name verification",
        "NTN registration",
        "Trade license application",
        "Bank account setup",
        "Business documentation delivery",
      ]}
      requiredDocuments={[
        "Owner's CNIC",
        "Business address proof",
        "Business activity description",
        "Contact information",
        "Bank account details",
      ]}
    />
  );
}

