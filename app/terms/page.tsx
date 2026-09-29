import type { Metadata } from "next";
import { Container } from "../components/Container";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service for Taxon.",
};

export default function TermsPage() {
  return (
    <div className="bg-background">
      <Container className="py-12 sm:py-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-semibold tracking-tight">Terms</h1>
          <p className="mt-4 text-sm leading-6 text-muted">
            This is a starter terms page. Replace this text with your actual
            terms of service including scope, timelines, payments, and
            disclaimers.
          </p>
        </div>
      </Container>
    </div>
  );
}

