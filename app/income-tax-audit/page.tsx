import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Income Tax Audit",
  description:
    "Professional tax audit services ensuring FBR compliance and accurate reporting.",
};

export default function IncomeTaxAuditPage() {
  return (
    <ServiceLandingPage
      title="Income Tax Audit"
      description="Professional tax audit services ensuring FBR compliance and accurate reporting."
      overview="Income tax audit is mandatory for certain categories of taxpayers and can be selected randomly by FBR. Our experienced auditors conduct comprehensive tax audits, identify compliance issues, and prepare audit reports in accordance with FBR requirements."
      keyFeatures={[
        "Pre-audit assessment",
        "Document review",
        "Compliance verification",
        "Audit report preparation",
        "FBR representation",
      ]}
      benefits={[
        "FBR compliance assurance",
        "Risk identification",
        "Tax optimization opportunities",
        "Professional audit reports",
        "Penalty avoidance",
      ]}
      processSteps={[
        "Initial documentation review",
        "Detailed audit examination",
        "Discrepancy identification",
        "Audit report finalization",
        "FBR submission and follow-up",
      ]}
      requiredDocuments={[
        "Previous year tax returns",
        "Financial statements",
        "Bank statements",
        "Supporting documents",
        "Business records",
      ]}
    />
  );
}

