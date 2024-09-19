"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function AboutPage() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ullam
        quis corrupti cumque consectetur voluptatum quod obcaecati suscipit.
        Delectus, est non fugit fugiat quibusdam error soluta sed eveniet velit
        unde.
      </p>
    </div>
  );
}
