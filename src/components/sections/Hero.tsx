import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen bg-gradient-hero pt-20 pb-16 overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full"
        style={{ y, opacity }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <motion.div 
          className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-primary rounded-lg"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ 
            transformStyle: "preserve-3d",
            opacity: 0.1 
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform Your Brand with{" "}
                <motion.span 
                  className="bg-gradient-primary bg-clip-text text-transparent inline-block"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  AI-Powered
                </motion.span>{" "}
                Marketing
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Unlock the full potential of your brand with our comprehensive AI suite. 
                Drive engagement, optimize campaigns, and scale your business intelligently.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button size="lg" className="shadow-elegant group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotateX: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button variant="outline" size="lg" className="group">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Social Proof */}
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <p className="text-sm text-muted-foreground mb-4">Trusted by 10,000+ brands worldwide</p>
              <div className="flex items-center space-x-8 opacity-60">
                <motion.div 
                  className="text-lg font-semibold"
                  whileHover={{ scale: 1.1, opacity: 1 }}
                >
                  TechFlow
                </motion.div>
                <motion.div 
                  className="text-lg font-semibold"
                  whileHover={{ scale: 1.1, opacity: 1 }}
                >
                  StartupX
                </motion.div>
                <motion.div 
                  className="text-lg font-semibold"
                  whileHover={{ scale: 1.1, opacity: 1 }}
                >
                  Global Brands
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative z-10"
              whileHover={{ 
                rotateY: 5, 
                rotateX: 5,
                scale: 1.02
              }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img 
                src={heroImage} 
                alt="ADmyBRAND AI Dashboard" 
                className="w-full rounded-2xl shadow-elegant"
              />
            </motion.div>
            {/* 3D Background Decorations */}
            <motion.div 
              className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
              animate={{
                rotateX: [0, 360],
                rotateY: [0, -360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ transformStyle: "preserve-3d" }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl"
              animate={{
                rotateX: [0, -360],
                rotateZ: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ transformStyle: "preserve-3d" }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;