import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { faqs } from "@/lib/mockData";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* 3D Background Elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-24 h-24 bg-primary/10 rounded-lg"
        animate={{ 
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 180]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full"
        animate={{ 
          rotateX: [0, -360],
          rotateY: [0, 360]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold">
            Frequently Asked{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about ADmyBRAND AI Suite. Can't find the answer you're looking for? Contact our support team.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -5 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 2,
                  transition: { type: "spring", stiffness: 300 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-background border border-border/50 rounded-lg px-6 hover:shadow-card transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;