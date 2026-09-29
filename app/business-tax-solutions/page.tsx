import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Business Tax Solutions",
  description: "Compliance, reporting, and practical tax planning for businesses.",
};

export default function BusinessTaxSolutionsPage() {
  return (
    <ServiceLandingPage
      title="Business Tax Solutions"
      description="Compliance, reporting, and practical tax planning for businesses."
      overview="A structured approach for SMEs and growing businesses — compliance, reporting, and practical tax planning."
      keyFeatures={[
        "Compliance review and planning guidance",
        "Documentation checklist and record structuring",
        "Reporting support (as needed)",
        "Notices/queries handling support",
      ]}
      benefits={[
        "Reduced compliance risk",
        "Better documentation and reporting discipline",
        "Practical planning to avoid surprises",
        "A clear system for ongoing support",
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
        "Business registration details",
        "Sales / expense summary",
      ]}
    />
  );
}

