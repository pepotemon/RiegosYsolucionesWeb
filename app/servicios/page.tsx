import { createMetadata } from "@/lib/seo";
import { ServicesPageContent } from "@/components/servicios/ServicesPageContent";

export const metadata = createMetadata({
  title: "Servicios",
  description:
    "Sistemas de riego, recursos hídricos, pozos profundos, bombeo, automatización, energía solar y mantenimiento para el campo colombiano.",
  path: "/servicios",
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}
