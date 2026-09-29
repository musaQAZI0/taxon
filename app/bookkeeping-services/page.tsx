import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Bookkeeping Services",
  description: "Monthly bookkeeping, reconciliation, and reporting for clean books.",
};

export default function BookkeepingServicesPage() {
  return (
    <ServiceLandingPage
      title="Bookkeeping Services"
      description="Monthly bookkeeping, reconciliation, and reporting for clean books."
      overview="Clean books with monthly reporting — bookkeeping, categorization, and finance operations support."
      keyFeatures={[
        "Monthly bookkeeping and categorization",
        "Bank reconciliation support",
        "Monthly reports and summaries",
        "Ongoing finance operations support",
      ]}
      benefits={[
        "Clear financial visibility",
        "Better compliance readiness",
        "Reduced errors and missing entries",
        "Stronger decisions with clean reporting",
      ]}
      processSteps={[
        "Data collection",
        "Categorization & reconciliation",
        "Monthly reports",
        "Review & adjustments",
        "Ongoing support",
      ]}
      requiredDocuments={[
        "CNIC copy",
        "Contact information",
        "Proof of address",
        "Business nature details (if applicable)",
        "Bank statements",
        "Sales/purchase records",
      ]}
    />
  );
}

