import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Sales Tax Returns",
  description: "Monthly/periodic sales tax return filing with reconciliation support.",
};

export default function SalesTaxReturnsPage() {
  return (
    <ServiceLandingPage
      title="Sales Tax Returns"
      description="Monthly/periodic sales tax return filing with reconciliation support."
      overview="Monthly/periodic sales tax return filing with reconciliation and a clear compliance workflow."
      keyFeatures={[
        "Monthly/periodic filing support",
        "Sales/purchase reconciliation checklist",
        "Record organization and reporting",
        "On-time submission reminders",
      ]}
      benefits={[
        "Avoid compliance gaps and penalties",
        "Improved tax record accuracy",
        "Clear workflow for ongoing filings",
        "Better visibility of sales/purchase data",
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
        "Sales invoices/summary",
        "Purchase invoices/summary",
      ]}
    />
  );
}

