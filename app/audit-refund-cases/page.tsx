import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Audit/Refund Cases (FBR)",
  description:
    "Expert handling of FBR audit and tax refund cases with professional representation.",
};

export default function AuditRefundCasesPage() {
  return (
    <ServiceLandingPage
      title="Audit/Refund Cases (FBR)"
      description="Expert handling of FBR audit and tax refund cases with professional representation."
      overview="We represent taxpayers in FBR audit proceedings and manage tax refund claims professionally. Our team has extensive experience in dealing with FBR authorities, ensuring favorable outcomes and maximum refund recovery."
      keyFeatures={[
        "FBR audit representation",
        "Refund claim processing",
        "Legal documentation",
        "Authority liaison",
        "Appeal filing if needed",
      ]}
      benefits={[
        "Professional representation",
        "Maximum refund recovery",
        "Penalty minimization",
        "Expert negotiation",
        "Time and stress saving",
      ]}
      processSteps={[
        "Case evaluation and strategy",
        "Document preparation",
        "FBR representation and negotiation",
        "Response submission",
        "Case resolution and follow-up",
      ]}
      requiredDocuments={[
        "Tax returns and receipts",
        "Audit notices/refund documents",
        "Financial records",
        "Supporting evidence",
        "Previous correspondence with FBR",
      ]}
    />
  );
}

