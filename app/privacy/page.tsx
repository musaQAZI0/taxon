import type { Metadata } from "next";
import { Container } from "../components/Container";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for Taxon.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">Privacy</h1>
          <p className="mt-4 text-sm leading-6 text-muted">
            This is a starter privacy page. Replace this text with your actual
            privacy policy covering data collection, document handling, and
            communications.
          </p>
        </div>
      </Container>
    </div>
  );
}

