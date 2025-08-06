import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { pricingPlans } from "@/lib/mockData";

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 bg-secondary/30 relative overflow-hidden" ref={ref}>
      {/* Parallax Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{ y: "-20%" }}
      >
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold">
            Simple,{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business. Start free, upgrade when you need more.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: plan.highlighted ? -5 : -15,
                rotateX: 3,
                rotateY: 3,
                scale: plan.highlighted ? 1.02 : 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card 
                className={`relative h-full ${plan.highlighted ? 'border-primary shadow-elegant scale-105' : 'border-border/50'} transition-all duration-300 hover:shadow-card`}
              >
                {plan.highlighted && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                  >
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <motion.div 
                      className="text-4xl font-bold"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {plan.price}
                      {plan.price !== "Custom" && <span className="text-lg text-muted-foreground font-normal">/{plan.period.split(' ')[1]}</span>}
                    </motion.div>
                    <CardDescription>{plan.description}</CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      className={`w-full ${plan.highlighted ? 'bg-gradient-primary shadow-elegant' : ''}`}
                      variant={plan.highlighted ? 'default' : 'outline'}
                    >
                      {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </motion.div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                      >
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;