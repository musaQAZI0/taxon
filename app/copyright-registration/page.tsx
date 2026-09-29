import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Copyright Registration",
  description: "Protect your creative works with official copyright registration.",
};

export default function CopyrightRegistrationPage() {
  return (
    <ServiceLandingPage
      title="Copyright Registration"
      description="Protect your creative works with official copyright registration."
      overview="Copyright provides legal protection for original creative works including literary, artistic, musical, and software creations. We handle copyright registration with IPO Pakistan ensuring your intellectual property rights are protected."
      keyFeatures={[
        "Copyright application filing",
        "Work documentation",
        "IPO registration",
        "Certificate issuance",
        "Infringement consultation",
      ]}
      benefits={[
        "Legal ownership proof",
        "Exclusive reproduction rights",
        "Monetary compensation rights",
        "International protection",
        "Legal enforcement capability",
      ]}
      processSteps={[
        "Work evaluation and documentation",
        "Application preparation",
        "Filing with IPO Pakistan",
        "Examination process",
        "Copyright certificate issuance",
      ]}
      requiredDocuments={[
        "Original work samples",
        "Author/creator details",
        "Publication details (if published)",
        "Ownership documents",
        "Application forms",
      ]}
    />
  );
}

