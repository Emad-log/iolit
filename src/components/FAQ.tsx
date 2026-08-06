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
      "Session metadata only — task type, model used, prompt structure, response quality signals. Never your code, identifiers, API keys, or file paths. PII stripping happens locally, before anything leaves your machine.",
    value: "item-1",
  },
  {
    question: "How much can I earn?",
    answer:
      "Active daily users of Claude, Cursor, or Codex can expect $30–$60/month — enough to cover a $20 subscription, then some. Payouts are monthly, via Stripe.",
    value: "item-2",
  },
  {
    question: "Who's buying this data?",
    answer:
      "AI labs and model-evaluation companies. They pay for anonymized session metadata that shows how developers actually use AI coding tools — what works, what fails, what patterns emerge.",
    value: "item-3",
  },
  {
    question: "Is the client really open-source?",
    answer:
      "Fully. MIT-licensed, on GitHub. Read every line, build from source, audit the PII-stripping logic yourself.",
    value: "item-4",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="px-6 py-24">
      <div className="max-w-xl mx-auto">
        <h2 className="font-serif text-[30px] md:text-[32px] tracking-[-0.02em] font-500 mb-10 text-center">
          Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {FAQList.map(({ question, answer, value }) => (
            <AccordionItem key={value} value={value} className="border-border">
              <AccordionTrigger className="font-serif text-[17px] font-500 text-left hover:no-underline">
                {question}
              </AccordionTrigger>
              <AccordionContent className="text-[14px] text-muted-foreground leading-relaxed pt-2">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-[14px] text-muted-foreground mt-8 text-center">
          Still curious?{" "}
          <a href="#" className="text-primary font-medium hover:underline underline-offset-4">
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
};
