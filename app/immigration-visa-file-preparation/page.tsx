import type { Metadata } from "next";
import { ServiceLandingPage } from "../components/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Immigration & Visa File Preparation",
  description:
    "Professional visa documentation and immigration file preparation services.",
};

export default function ImmigrationVisaFilePreparationPage() {
  return (
    <ServiceLandingPage
      title="Immigration & Visa File Preparation"
      description="Professional visa documentation and immigration file preparation services."
      overview="We assist individuals and businesses with comprehensive visa documentation and immigration file preparation for various countries. Our experts ensure all documents meet embassy requirements and increase approval chances."
      keyFeatures={[
        "Document checklist preparation",
        "Application form assistance",
        "Supporting document compilation",
        "File organization",
        "Interview preparation",
      ]}
      benefits={[
        "Higher approval chances",
        "Complete documentation",
        "Time-saving process",
        "Professional guidance",
        "Stress-free application",
      ]}
      processSteps={[
        "Requirement assessment",
        "Document collection and verification",
        "Application form completion",
        "File compilation and review",
        "Submission preparation",
      ]}
      requiredDocuments={[
        "Passport copies",
        "Financial documents",
        "Employment/business proof",
        "Purpose of travel documents",
        "Specific country requirements",
      ]}
    />
  );
}

