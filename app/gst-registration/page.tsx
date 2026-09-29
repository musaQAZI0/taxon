import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "GST (Sales Tax) Registration",
  description: "Complete GST and sales tax registration with FBR compliance.",
};

export default function GstRegistrationPage() {
  return (
    <ServiceLandingPage
      title="GST (Sales Tax) Registration"
      description="Complete GST and sales tax registration with FBR compliance."
      overview="General Sales Tax (GST) registration is required for businesses with annual turnover exceeding the threshold limit. We provide comprehensive GST registration, return filing, and compliance management services."
      keyFeatures={[
        "GST registration with FBR",
        "Monthly return filing",
        "Input tax credit management",
        "Audit support",
        "Compliance consultation",
      ]}
      benefits={[
        "Legal business operations",
        "Input tax credit recovery",
        "Enhanced business credibility",
        "B2B transaction facilitation",
        "Government tender eligibility",
      ]}
      processSteps={[
        "Turnover verification",
        "GST registration application",
        "FBR inspection",
        "GST number issuance",
        "Portal access activation",
      ]}
      requiredDocuments={[
        "NTN certificate",
        "Business registration documents",
        "Bank account details",
        "Turnover statements",
        "Business premises verification",
      ]}
    />
  );
}

