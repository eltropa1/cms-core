import { legalConfig } from "@/config/legal.config";
import LegalNoticeContent from "@/components/legal/LegalNoticeContent";
import LegalShell from "@/components/legal/LegalShell";

export default function LegalNoticePage() {
  return (
    <LegalShell
      eyebrow="Información legal"
      title="Aviso legal"
      description="Información sobre el titular del sitio, condiciones de uso y marco jurídico aplicable."
    >
      <LegalNoticeContent config={legalConfig} />
    </LegalShell>
  );
}
