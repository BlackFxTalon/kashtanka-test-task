import DescriptionBlock from "./DescriptionBlock";
import { TARIFF_DESCRIPTION } from "./tariffData";

interface TariffDescriptionProps {
  variant?: "default" | "tariffs";
}

export default function TariffDescription({ variant = "default" }: TariffDescriptionProps) {
  return (
    <DescriptionBlock
      badge={variant === "tariffs" ? "О тарифах" : TARIFF_DESCRIPTION.badge}
      title={TARIFF_DESCRIPTION.title}
      cta={variant === "default" ? "Купить подписку" : undefined}
      variant={variant}
    >
      {TARIFF_DESCRIPTION.paragraphs.map((paragraph, index) => (
        <p key={index}>
          {paragraph.before}
          {paragraph.bold && <strong>{paragraph.bold}</strong>}
          {paragraph.after}
        </p>
      ))}
    </DescriptionBlock>
  );
}
