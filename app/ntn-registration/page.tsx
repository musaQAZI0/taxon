import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "NTN Registration",
  description: "Quick and hassle-free NTN registration for individuals and businesses.",
};

export default function NtnRegistrationPage() {
  return (
    <ServiceLandingPage
      title="NTN Registration"
      description="Quick and hassle-free NTN registration for individuals and businesses."
      overview="Quick and hassle-free NTN registration for individuals and businesses, with complete guidance and follow-up."
      keyFeatures={[
        "Fast processing within 24–48 hours (subject to verification)",
        "Complete documentation assistance",
        "FBR-compliant registration",
        "Digital certificate delivery",
        "Post-registration support",
      ]}
      benefits={[
        "Required for business operations",
        "Helps open bank accounts and trade licenses",
        "Improves professional credibility",
        "Avoid penalties and legal issues",
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
        "Business registration documents (if business)",
      ]}
    />
  );
}

