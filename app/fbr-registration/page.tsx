import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "FBR Registration",
  description: "FBR registration with correct profile setup for future filings.",
};

export default function FbrRegistrationPage() {
  return (
    <ServiceLandingPage
      title="FBR Registration"
      description="FBR registration with correct profile setup for future filings."
      overview="We register you with FBR and ensure your profile details are correct for future filings and compliance."
      keyFeatures={[
        "Profile creation/registration guidance",
        "Information verification and corrections",
        "Compliance-ready profile setup",
        "Support for post-registration steps",
      ]}
      benefits={[
        "Correct profile for future filings",
        "Reduced risk of errors and mismatches",
        "Smoother submissions going forward",
        "Fast support if updates are needed",
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
      ]}
    />
  );
}

