"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX, Sparkles, Quote } from "lucide-react";

export default function Speak() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    setHasWindow(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  const text = "I don't just build infrastructure; I create resilient digital ecosystems. To me, security is not a checkbox—it's the foundation of every line of code. I bridge the gap between complex operations and seamless user experiences.";

  const handleSpeak = () => {
    if (!hasWindow) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1;
    
    // Try to find a nice English voice
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes('en-US') && v.name.includes('Google')) || voices[0];
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Clean up speech when component unmounts
  useEffect(() => {
    return () => {
      if (hasWindow) window.speechSynthesis.cancel();
    };
  }, [hasWindow]);

  const words = text.split(" ");

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[80vh] flex items-center justify-center py-24 overflow-hidden bg-white dark:bg-[#050505]"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-600/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 text-blue-600 dark:text-blue-400 mb-8 font-medium text-sm"
        >
          <Sparkles size={16} />
          <span>Core Philosophy</span>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <Quote className="absolute -top-12 -left-4 md:-left-12 text-gray-200 dark:text-white/5 w-24 h-24 -z-10" />
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight tracking-tight text-foreground">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.05,
                  ease: "easeOut"
                }}
                className="inline-block mr-[0.25em] transition-all hover:text-blue-500 hover:scale-110 cursor-default"
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <motion.button
            onClick={handleSpeak}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`group relative flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-500 ${
              isSpeaking 
              ? 'bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]' 
              : 'bg-foreground text-background shadow-xl hover:shadow-blue-500/20'
            }`}
          >
            {isSpeaking ? <VolumeX size={20} /> : <Volume2 size={20} />}
            <span>{isSpeaking ? "Stop Speaking" : "Listen to My Mission"}</span>
            
            {/* Pulsing ring when speaking */}
            {isSpeaking && (
              <span className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping opacity-75" />
            )}
          </motion.button>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {isSpeaking ? "Currently speaking..." : "Click to hear the vision"}
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative side lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent to-gray-200 dark:to-white/10 hidden xl:block" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-l from-transparent to-gray-200 dark:to-white/10 hidden xl:block" />
    </section>
  );
}
