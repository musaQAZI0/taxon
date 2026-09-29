import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Chamber of Commerce Membership",
  description: "Business registration with local and national chambers of commerce.",
};

export default function ChamberOfCommerceMembershipPage() {
  return (
    <ServiceLandingPage
      title="Chamber of Commerce Membership"
      description="Business registration with local and national chambers of commerce."
      overview="Chamber of Commerce membership provides business credibility, networking opportunities, and access to trade facilitation services. We assist in obtaining membership from relevant chambers based on your business location and industry."
      keyFeatures={[
        "Membership application",
        "Document preparation",
        "Verification support",
        "Certificate processing",
        "Renewal services",
      ]}
      benefits={[
        "Business networking",
        "Certificate of origin facility",
        "Export documentation",
        "Government tender eligibility",
        "Business advocacy",
      ]}
      processSteps={[
        "Chamber selection based on location",
        "Application form completion",
        "Document compilation",
        "Submission and verification",
        "Membership certificate issuance",
      ]}
      requiredDocuments={[
        "Business registration documents",
        "NTN certificate",
        "Premises ownership/lease",
        "Business activity proof",
        "Recommendation letters",
      ]}
    />
  );
}

