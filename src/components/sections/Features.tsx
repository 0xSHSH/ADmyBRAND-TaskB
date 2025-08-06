import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { features } from "@/lib/mockData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import * as Icons from "lucide-react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden" ref={ref}>
      {/* 3D Background Elements */}
      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          rotateX: [0, 360],
          rotateY: [0, -360],
          rotateZ: [0, 180]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-lg"
        animate={{ 
          rotateX: [0, -180],
          rotateY: [0, 360],
          rotateZ: [0, -180]
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
            Everything You Need to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Scale Your Brand
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive AI suite provides all the tools and insights you need 
            to transform your marketing and grow your business.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = Icons[feature.icon as keyof typeof Icons] as any;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="group hover:shadow-card transition-all duration-300 border-border/50 h-full">
                  <CardHeader>
                    <motion.div 
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ 
                        rotateY: 360,
                        scale: 1.1 
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="h-6 w-6 text-primary" />
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;