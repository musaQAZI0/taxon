import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Private Limited Company Registration (SECP)",
  description: "Complete SECP registration for private limited companies.",
};

export default function PrivateLimitedSecpPage() {
  return (
    <ServiceLandingPage
      title="Private Limited Company Registration (SECP)"
      description="Complete SECP registration for private limited companies."
      overview="Complete SECP registration for private limited companies with legal compliance."
      keyFeatures={[
        "Name availability search",
        "MOA & AOA drafting",
        "SECP online filing",
        "Incorporation certificate support",
        "Post-incorporation support",
      ]}
      benefits={[
        "Limited liability protection",
        "Separate legal entity",
        "Enhanced business credibility",
        "Easy capital raising",
        "Perpetual succession",
      ]}
      processSteps={[
        "Name reservation with SECP",
        "MOA & AOA preparation",
        "Online incorporation filing",
        "Certificate of incorporation",
        "NTN and PSID registration",
      ]}
      requiredDocuments={[
        "Directors' CNICs (minimum 2)",
        "Shareholders' details",
        "Company name options",
        "Registered office address",
        "Share capital details",
      ]}
    />
  );
}

