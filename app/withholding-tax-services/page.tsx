import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Withholding Tax Services",
  description: "Withholding tax calculations, deposits, statements, and compliance support.",
};

export default function WithholdingTaxServicesPage() {
  return (
    <ServiceLandingPage
      title="Withholding Tax Services"
      description="Withholding tax calculations, deposits, statements, and compliance support."
      overview="Withholding tax calculations, deposits, statements, and compliance support — done on time."
      keyFeatures={[
        "Withholding calculations and category review",
        "Deposits and statement preparation support",
        "Compliance checklist for each cycle",
        "Record support for audits/queries",
      ]}
      benefits={[
        "On-time compliance and fewer penalties",
        "Clear tracking of withholding obligations",
        "Better record-keeping for notices/audits",
        "Reduced risk of under/over withholding",
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
        "Payment records",
        "Withholding categories details",
      ]}
    />
  );
}

