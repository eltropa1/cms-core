import { legalConfig } from "@/config/legal.config";
import LegalShell from "@/components/legal/LegalShell";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Protección de datos"
      title="Política de privacidad"
      description="Información sobre cómo se tratan los datos personales y cómo pueden ejercerse los derechos reconocidos por la normativa."
    >
      <PrivacyPolicyContent config={legalConfig} />
    </LegalShell>
  );
}
