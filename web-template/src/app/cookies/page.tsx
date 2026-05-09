import CookiesPolicyContent from "@/components/legal/CookiesPolicyContent";
import LegalShell from "@/components/legal/LegalShell";
import { legalConfig } from "@/config/legal.config";

export default function CookiesPage() {
  return (
    <LegalShell
      eyebrow="Cookies"
      title="Política de cookies"
      description="Información sobre el uso actual de cookies y la arquitectura prevista para futuros servicios que requieran consentimiento."
    >
      <CookiesPolicyContent config={legalConfig} />
    </LegalShell>
  );
}
