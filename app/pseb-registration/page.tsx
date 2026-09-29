import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "PSEB Registration (Call Center & Software House)",
  description:
    "Pakistan Software Export Board registration for IT companies and call centers.",
};

export default function PsebRegistrationPage() {
  return (
    <ServiceLandingPage
      title="PSEB Registration (Call Center & Software House)"
      description="Pakistan Software Export Board registration for IT companies and call centers."
      overview="PSEB registration is mandatory for IT companies, software houses, and call centers in Pakistan. Registration provides tax benefits, export facilitation, and government support for technology businesses."
      keyFeatures={[
        "PSEB membership application",
        "Tax exemption certificate",
        "Export facilitation",
        "PSEB certification",
        "Ongoing compliance support",
      ]}
      benefits={[
        "Income tax exemptions",
        "Export incentives",
        "Government support programs",
        "International credibility",
        "Networking opportunities",
      ]}
      processSteps={[
        "Eligibility verification",
        "Online application submission",
        "Physical inspection by PSEB",
        "Document verification",
        "Registration certificate issuance",
      ]}
      requiredDocuments={[
        "Company registration certificate",
        "NTN and PSID",
        "Office premises proof",
        "IT equipment list",
        "Staff details and qualifications",
      ]}
    />
  );
}

