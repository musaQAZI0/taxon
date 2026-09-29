import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Income Tax Returns",
  description: "End-to-end income tax return filing with review and support.",
};

export default function IncomeTaxReturnsPage() {
  return (
    <ServiceLandingPage
      title="Income Tax Returns"
      description="End-to-end income tax return filing with review and support."
      overview="End-to-end income tax return filing with review, submission, and after-filing support."
      keyFeatures={[
        "Return preparation and review call",
        "Proper documentation checklist",
        "Timely submission and confirmation",
        "After-filing support (queries/notices)",
      ]}
      benefits={[
        "Stay compliant with FBR requirements",
        "Better record-keeping and documentation",
        "Reduce risk of errors and penalties",
        "Support for follow-ups when needed",
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
        "Income details",
        "Bank statement (if available)",
      ]}
    />
  );
}

