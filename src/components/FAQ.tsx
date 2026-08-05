import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQList = [
  {
    question: "What exactly gets collected?",
    answer:
      "Metadata about your sessions — task type, model used, prompt structure, response quality signals. Not your source code, personal identifiers, API keys, or file paths. All PII stripping happens locally.",
    value: "item-1",
  },
  {
    question: "How much can I earn?",
    answer:
      "Active developers using Claude, Cursor, or Codex daily can expect $30–$60/month — often covering the full cost of a $20/mo subscription plus extra. Payouts are monthly via Stripe.",
    value: "item-2",
  },
  {
    question: "Who's buying this data?",
    answer:
      "AI labs, model evaluation companies, and research institutions need real-world usage data to improve their models. They pay for anonymized session metadata that helps them understand how developers actually use AI coding tools.",
    value: "item-3",
  },
  {
    question: "Is the client really open-source?",
    answer:
      "Yes, 100%. MIT-licensed, available on GitHub. Read every line, build from source, or audit the PII-stripping logic yourself.",
    value: "item-4",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="px-6 py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-[28px] tracking-[-0.02em] font-500 mb-8">
          Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem key={value} value={value} className="border-border">
              <AccordionTrigger className="font-serif text-[16px] font-500 text-left hover:no-underline">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-muted-foreground leading-relaxed pt-2">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-[14px] text-muted-foreground mt-6">
          Still curious?{" "}
          <a href="#" className="text-primary font-medium hover:underline underline-offset-4">
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
};
