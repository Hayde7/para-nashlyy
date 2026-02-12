import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Image as ImageIcon, ArrowRight, Mail, Star, Sparkles } from 'lucide-react';

// Assets
const ASSETS = {
  catLove: "https://public.youware.com/users-website-assets/prod/dc0b63c4-fad2-4b40-a3f7-ccccc84fa74d/44f8e4f08a2342bea993471a3209bf2b.gif",
  envelope: "https://public.youware.com/users-website-assets/prod/dc0b63c4-fad2-4b40-a3f7-ccccc84fa74d/407167ae33bc48c38cfa54a5833a8fa7.gif",
  catCurious: "https://public.youware.com/users-website-assets/prod/dc0b63c4-fad2-4b40-a3f7-ccccc84fa74d/282a71b095b04d2188dfe8c664a1ae44.gif",
  nightSky: "https://public.youware.com/users-website-assets/prod/dc0b63c4-fad2-4b40-a3f7-ccccc84fa74d/623ab067c8c54362a401499521d7e511.jpg",
};

// Floating Hearts Background Component
const FloatingHearts = () => {
  const [hearts, setHearts] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => [...prev, Date.now()].slice(-20)); // Keep max 20 hearts
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {hearts.map((id) => (
        <motion.div
          key={id}
          initial={{ 
            y: '110vh', 
            x: Math.random() * 100 + 'vw', 
            opacity: 0, 
            scale: 0.5 
          }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.8]
          }}
          transition={{ 
            duration: Math.random() * 5 + 5, 
            ease: "linear" 
          }}
          className="absolute text-pink-400/30"
        >
          <Heart fill="currentColor" size={Math.random() * 30 + 20} />
        </motion.div>
      ))}
    </div>
  );
};

// Flying Butterflies Component
const FlyingButterflies = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + 'vw', 
            y: Math.random() * 100 + 'vh',
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            x: [null, Math.random() * 100 + 'vw'],
            y: [null, Math.random() * 100 + 'vh'],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, Math.random() * 360]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }}
          className="absolute text-pink-400"
        >
          {/* Simple Butterfly SVG */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C12 12 14 8 18 8C22 8 22 14 18 16C14 18 12 12 12 12Z" opacity="0.8"/>
            <path d="M12 12C12 12 10 8 6 8C2 8 2 14 6 16C10 18 12 12 12 12Z" opacity="0.8"/>
            <path d="M12 12C12 12 13 16 16 18C19 20 20 16 18 14C16 12 12 12 12 12Z" opacity="0.6"/>
            <path d="M12 12C12 12 11 16 8 18C5 20 4 16 6 14C8 12 12 12 12 12Z" opacity="0.6"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

// Giant Animated Flower Component
const GiantFlower = () => {
  return (
    <div className="relative w-48 h-48 md:w-80 md:h-80 flex items-center justify-center">
      {/* Stem */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: '50%' }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 w-2 md:w-4 bg-green-600 rounded-full origin-bottom"
        style={{ bottom: '-20%' }}
      />

      {/* Leaves */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: -45 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-0 left-1/2 w-12 h-6 md:w-24 md:h-12 bg-green-500 rounded-full origin-right -translate-x-full"
        style={{ marginBottom: '-10%' }}
      />
      <motion.div
        initial={{ scale: 0, rotate: 45 }}
        animate={{ scale: 1, rotate: 45 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-0 right-1/2 w-12 h-6 md:w-24 md:h-12 bg-green-500 rounded-full origin-left translate-x-full"
        style={{ marginBottom: '-5%' }}
      />

      {/* Petals Container */}
      <motion.div 
        className="relative z-10 w-full h-full flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.5 + i * 0.1 }}
            className="absolute w-12 h-24 md:w-20 md:h-40 bg-gradient-to-t from-pink-600 to-pink-300 rounded-[100%] origin-bottom shadow-lg border border-pink-200/30"
            style={{ 
              rotate: `${i * 45}deg`, 
              bottom: '50%',
              transformOrigin: 'bottom center'
            }}
          />
        ))}
        
        {/* Inner Center */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="absolute w-10 h-10 md:w-16 md:h-16 bg-yellow-400 rounded-full shadow-inner z-20 flex items-center justify-center"
        >
          <div className="w-full h-full rounded-full bg-yellow-300 animate-pulse" />
        </motion.div>
      </motion.div>

      {/* Sparkles around flower */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute z-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1, 0],
            x: Math.cos(i * 30 * (Math.PI / 180)) * 120,
            y: Math.sin(i * 30 * (Math.PI / 180)) * 120,
          }}
          transition={{ 
            duration: 2, 
            delay: 4 + Math.random(), 
            repeat: Infinity,
            repeatDelay: Math.random() * 2
          }}
        >
          {i % 2 === 0 ? (
            <Star className="text-yellow-200 w-4 h-4 fill-yellow-200" />
          ) : (
            <Heart className="text-pink-300 w-4 h-4 fill-pink-300" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

const Valentine = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(prev => prev + 1);

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center overflow-hidden font-sans text-gray-800 relative">
      {/* Global Background Hearts for early steps */}
      {step < 6 && <FloatingHearts />}

      <AnimatePresence mode="wait">
        {step === 0 && <Step1 key="step1" onNext={nextStep} />}
        {step === 1 && <Step2 key="step2" onNext={nextStep} />}
        {step === 2 && <Step3 key="step3" onNext={nextStep} />}
        {step === 3 && <Step4 key="step4" onNext={nextStep} />}
        {step === 4 && <Step5 key="step5" onNext={nextStep} />}
        {step === 5 && <Step6 key="step6" onNext={nextStep} />}
        {step === 6 && <Step7 key="step7" />}
      </AnimatePresence>
    </div>
  );
};

// Step 1: Intro
const Step1 = ({ onNext }: { onNext: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="text-center p-8 max-w-md w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-100 relative z-10"
  >
    <h1 className="text-4xl font-bold text-pink-600 mb-6 font-serif">¡Feliz San Valentín Nash! ❤️</h1>
    <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border-4 border-pink-200">
      <img src={ASSETS.catLove} alt="Gato enamorado" className="w-full h-64 object-cover" />
    </div>
    <button
      onClick={onNext}
      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center mx-auto gap-2"
    >
      Siguiente <ArrowRight size={20} />
    </button>
  </motion.div>
);

// Step 2: Memories
const Step2 = ({ onNext }: { onNext: () => void }) => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    className="text-center p-6 max-w-lg w-full relative z-10"
  >
    <h2 className="text-3xl font-bold text-pink-600 mb-8 font-serif">Nuestros Recuerditos 📸</h2>
    <div className="grid grid-cols-2 gap-4 mb-8">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="aspect-square bg-pink-100 rounded-xl flex items-center justify-center border-2 border-dashed border-pink-300 relative overflow-hidden group bg-white/50 backdrop-blur-sm">
          <ImageIcon className="text-pink-300 w-12 h-12" />
          <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-xs font-medium text-gray-600 bg-white/80 px-2 py-1 rounded">Foto {i}</span>
          </div>
        </div>
      ))}
    </div>
    <p className="text-gray-500 text-sm mb-8 italic">(Aquí pondré nuestras fotos favoritas)</p>
    <button
      onClick={onNext}
      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center mx-auto gap-2"
    >
      Siguiente <ArrowRight size={20} />
    </button>
  </motion.div>
);

// Step 3: Music
const Step3 = ({ onNext }: { onNext: () => void }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.1 }}
    className="text-center p-8 max-w-md w-full bg-white/90 rounded-3xl shadow-2xl border border-purple-100 relative z-10"
  >
    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
      <Music className="text-purple-500 w-10 h-10" />
    </div>
    <h2 className="text-2xl font-bold text-purple-700 mb-4">Nuestra Canción 🎵</h2>
    
    <div className="bg-gray-100 p-4 rounded-xl mb-6 flex items-center gap-4">
      <div className="w-12 h-12 bg-gray-300 rounded-lg flex-shrink-0"></div>
      <div className="flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
        <div className="w-1/3 h-full bg-purple-500"></div>
      </div>
    </div>

    <p className="text-gray-600 mb-8 leading-relaxed">
      "Esta canción significa mucho para mí porque me recuerda a cada momento lindo que hemos pasado juntos..."
    </p>
    
    <button
      onClick={onNext}
      className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center mx-auto gap-2"
    >
      Siguiente <ArrowRight size={20} />
    </button>
  </motion.div>
);

// Step 4: Letter Intro
const Step4 = ({ onNext }: { onNext: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="text-center p-8 max-w-md w-full relative z-10"
  >
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Te escribí una carta... 💌</h2>
    <div className="mb-8 flex justify-center">
      <img src={ASSETS.envelope} alt="Sobre carta" className="w-64 h-64 object-contain drop-shadow-xl" />
    </div>
    <button
      onClick={onNext}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center mx-auto gap-2"
    >
      Siguiente <ArrowRight size={20} />
    </button>
  </motion.div>
);

// Step 5: Open Letter? (Runaway Button)
const Step5 = ({ onNext }: { onNext: () => void }) => {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const x = Math.random() * 200 - 100; // Random x between -100 and 100
    const y = Math.random() * 200 - 100; // Random y between -100 and 100
    setNoBtnPosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center p-8 max-w-md w-full relative z-10"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Quieres abrirla? 👀</h2>
      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-200 mx-auto w-64 h-64">
        <img src={ASSETS.catCurious} alt="Gato curioso" className="w-full h-full object-cover" />
      </div>
      
      <div className="flex justify-center gap-8 items-center h-20">
        <button
          onClick={onNext}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-10 rounded-full shadow-lg transform transition hover:scale-110 z-10"
        >
          SÍ
        </button>
        
        <motion.button
          animate={noBtnPosition}
          onHoverStart={moveButton}
          onClick={moveButton}
          className="bg-gray-400 text-white font-bold py-3 px-10 rounded-full shadow-lg cursor-not-allowed absolute"
          style={{ position: 'relative' }} 
        >
          NO
        </motion.button>
      </div>
    </motion.div>
  );
};

// Step 6: The Letter
const Step6 = ({ onNext }: { onNext: () => void }) => (
  <motion.div
    initial={{ opacity: 0, rotateX: 90 }}
    animate={{ opacity: 1, rotateX: 0 }}
    exit={{ opacity: 0, rotateX: -90 }}
    className="text-center p-8 max-w-2xl w-full bg-[#fffdf0] shadow-2xl rounded-sm border border-gray-200 relative z-10"
    style={{ minHeight: '60vh' }}
  >
    <div className="absolute top-0 left-0 w-full h-2 bg-red-500/20"></div>
    <div className="absolute bottom-0 left-0 w-full h-2 bg-red-500/20"></div>
    
    <h2 className="text-2xl font-serif text-gray-800 mb-6 border-b-2 border-gray-100 pb-4">Para Nash ❤️</h2>
    
    <div className="text-left font-serif text-gray-700 leading-loose space-y-4 mb-8 overflow-y-auto max-h-[40vh] px-4">
      <p>Mi querida Nash,</p>
      <p>
        En este día tan especial, quería recordarte lo increíblemente importante que eres para mí. 
        Cada momento a tu lado es un regalo que atesoro en mi corazón.
      </p>
      <p>
        (Aquí escribiré todo lo que siento por ti, mis promesas y mis sueños contigo...)
      </p>
      <p>Con todo mi amor,</p>
      <p className="font-bold">Tu novio</p>
    </div>

    <button
      onClick={onNext}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 flex items-center justify-center mx-auto gap-2 mt-auto"
    >
      Siguiente <ArrowRight size={20} />
    </button>
  </motion.div>
);

// Step 7: Finale
const Step7 = () => {
  const [text, setText] = useState("");
  const fullText = `Y si tuviera la posibilidad de volver a enamorarme de ti como aquella primera vez lo haría sin pensarlo dos veces lo haría con la misma certeza de que tú eras mi destino porque hay cosas en la vida que no se explican solo se sienten

y lo nuestro fue eso

un impulso del alma

una casualidad vestida de eternidad

que me recuerda quién era antes de perderme`;
  
  useEffect(() => {
    let i = 0;
    // Delay text start to match flower bloom
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setText(fullText.slice(0, i + 1));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 50); // Faster typing for longer text
      return () => clearInterval(interval);
    }, 4000);
    
    return () => clearTimeout(startDelay);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 w-full h-full overflow-hidden flex items-center justify-center text-white bg-black"
    >
      {/* Background Elements */}
      <FlyingButterflies />
      
      {/* Stars Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random()
            }}
            animate={{ 
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ width: Math.random() * 3 + 1, height: Math.random() * 3 + 1 }}
          />
        ))}
      </div>

      {/* Comets */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`comet-${i}`}
          className="absolute w-1 h-1 bg-white shadow-[0_0_20px_2px_rgba(255,255,255,0.8)] rounded-full z-0"
          initial={{ top: Math.random() * 50 + '%', left: '-10%', opacity: 0 }}
          animate={{ 
            top: Math.random() * 50 + 20 + '%', 
            left: '120%', 
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: Math.random() * 5 + 3, 
            delay: i * 2,
            ease: "linear" 
          }}
        />
      ))}
      
      {/* Giant Moon (CSS) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-8 right-8 w-32 h-32 md:w-48 md:h-48 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.6)] z-0"
      />

      {/* Content Container */}
      <div className="z-10 w-full max-w-5xl p-4 md:p-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        
        {/* Left: Flower */}
        <div className="flex-shrink-0">
          <GiantFlower />
        </div>

        {/* Right: Text */}
        <div className="flex-1 max-w-lg">
          <p className="text-sm md:text-base font-serif leading-relaxed whitespace-pre-wrap drop-shadow-md text-pink-100">
            {text}
            <span className="animate-pulse ml-1">|</span>
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default Valentine;
