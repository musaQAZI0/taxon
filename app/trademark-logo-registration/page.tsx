import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Trademark & Logo Registration",
  description:
    "Intellectual property protection through trademark and logo registration.",
};

export default function TrademarkLogoRegistrationPage() {
  return (
    <ServiceLandingPage
      title="Trademark & Logo Registration"
      description="Intellectual property protection through trademark and logo registration."
      overview="Trademark registration protects your brand name, logo, and business identity. Our experts handle trademark search, application filing with IPO Pakistan, and complete prosecution until registration."
      keyFeatures={[
        "Trademark availability search",
        "Logo design protection",
        "IPO application filing",
        "Opposition handling",
        "Registration certificate",
      ]}
      benefits={[
        "Exclusive brand rights",
        "Legal protection nationwide",
        "Brand value enhancement",
        "Prevent unauthorized use",
        "Business asset creation",
      ]}
      processSteps={[
        "Trademark search and clearance",
        "Application drafting and filing",
        "Examination and publication",
        "Opposition period handling",
        "Registration certificate issuance",
      ]}
      requiredDocuments={[
        "Company/applicant details",
        "Logo design (if applicable)",
        "Class of goods/services",
        "Priority documents (if any)",
        "Power of attorney",
      ]}
    />
  );
}

