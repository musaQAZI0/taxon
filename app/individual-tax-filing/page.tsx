import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Individual Tax Filing",
  description: "Personal tax return filing with a clear checklist and support.",
};

export default function IndividualTaxFilingPage() {
  return (
    <ServiceLandingPage
      title="Individual Tax Filing"
      description="Personal tax return filing with a clear checklist and support."
      overview="We help individuals file accurate returns with a clear checklist, review call, and timely submission."
      keyFeatures={[
        "Checklist + document verification",
        "Return preparation with review call",
        "Submission confirmation and guidance",
        "Post-filing support (queries/notices)",
      ]}
      benefits={[
        "Stay compliant with FBR requirements",
        "Reduce errors and avoid penalties",
        "Save time with a clear, guided process",
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
        "Income / salary details",
        "Bank statement (if available)",
      ]}
    />
  );
}

