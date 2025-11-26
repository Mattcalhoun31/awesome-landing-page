import React from 'react';
import { motion } from 'framer-motion';
import { ScanSearch, DatabaseZap, PenTool } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { HunterCore } from '../3d/HunterCore';

export const ReactorSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden py-32">

      {/* LAYER 1: Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* LAYER 2: Clean Connector Lines - Clipped to Not Bleed */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" style={{ clipPath: 'inset(0)' }}>
        <defs>
          <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E87105" stopOpacity="0" />
            <stop offset="70%" stopColor="#E87105" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E87105" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F89F05" stopOpacity="0" />
            <stop offset="70%" stopColor="#F89F05" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F89F05" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="line3" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#E87105" stopOpacity="0" />
            <stop offset="70%" stopColor="#E87105" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E87105" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Lines stop before core, don't extend through */}
        <g className="hidden lg:block">
          {/* Left card to center */}
          <line x1="25%" y1="30%" x2="45%" y2="48%" stroke="url(#line1)" strokeWidth="1.5" strokeDasharray="6 6">
            <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.5s" repeatCount="indefinite" />
          </line>

          {/* Right card to center */}
          <line x1="75%" y1="30%" x2="55%" y2="48%" stroke="url(#line2)" strokeWidth="1.5" strokeDasharray="6 6">
            <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.5s" repeatCount="indefinite" />
          </line>

          {/* Bottom card to center */}
          <line x1="50%" y1="70%" x2="50%" y2="52%" stroke="url(#line3)" strokeWidth="1.5" strokeDasharray="6 6">
            <animate attributeName="stroke-dashoffset" from="0" to="12" dur="1.5s" repeatCount="indefinite" />
          </line>
        </g>
      </svg>

      {/* LAYER 3: Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">

        {/* 3D Hunter Core - Professional Size */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] pointer-events-none z-0">
          <Canvas
            camera={{ position: [0, 0, 8], fov: 50 }}
            className="w-full h-full"
            gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
          >
            <HunterCore />
          </Canvas>
        </div>

        {/* Cards Grid - Clean, No Extra Dots */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 pointer-events-none">

          {/* Top Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pointer-events-auto lg:justify-self-end lg:mt-4"
          >
            <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-[#E87105]/30 p-6 lg:p-7 rounded-xl shadow-[0_0_30px_rgba(232,113,5,0.15)] group hover:border-[#E87105]/50 transition-all duration-300 max-w-sm">
              <div className="flex items-start gap-4 mb-3">
                <div className="p-2.5 bg-[#E87105]/10 rounded-lg border border-[#E87105]/30 group-hover:bg-[#E87105]/20 transition-colors flex-shrink-0">
                  <ScanSearch className="w-6 h-6 text-[#E87105]" />
                </div>
                <div>
                  <h3 className="text-base lg:text-lg font-bold text-white font-mono tracking-tight mb-2">THE DEEP DETECTIVE</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Real-time recon across LinkedIn, news, and funding data. Surfaces buying signals before competitors know they exist.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pointer-events-auto lg:justify-self-start lg:mt-4"
          >
            <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-[#F89F05]/30 p-6 lg:p-7 rounded-xl shadow-[0_0_30px_rgba(248,159,5,0.15)] group hover:border-[#F89F05]/50 transition-all duration-300 max-w-sm">
              <div className="flex items-start gap-4 mb-3">
                <div className="p-2.5 bg-[#F89F05]/10 rounded-lg border border-[#F89F05]/30 group-hover:bg-[#F89F05]/20 transition-colors flex-shrink-0">
                  <DatabaseZap className="w-6 h-6 text-[#F89F05]" />
                </div>
                <div>
                  <h3 className="text-base lg:text-lg font-bold text-white font-mono tracking-tight mb-2">THE VECTOR VAULT</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    Your living knowledge base. Ingests case studies and battlecards to train the Ghostwriter. Knows your value props better than you do.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Center Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
            className="pointer-events-auto lg:col-span-2 lg:justify-self-center lg:mt-16"
          >
            <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-[#E87105]/30 p-6 lg:p-7 rounded-xl shadow-[0_0_30px_rgba(232,113,5,0.15)] group hover:border-[#E87105]/50 transition-all duration-300 max-w-sm">
              <div className="flex items-start gap-4 mb-3">
                <div className="p-2.5 bg-[#E87105]/10 rounded-lg border border-[#E87105]/30 group-hover:bg-[#E87105]/20 transition-colors flex-shrink-0">
                  <PenTool className="w-6 h-6 text-[#E87105]" />
                </div>
                <div>
                  <h3 className="text-base lg:text-lg font-bold text-white font-mono tracking-tight mb-2">THE GHOSTWRITER</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    1-to-1 Orchestration. Fuses Prospect Data with Your Content to write hyper-personalized messaging. No templates. Pure context.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Protocol Badge - Clean Positioning */}
        <div className="relative z-20 mt-20 lg:mt-28 flex justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-black/85 border border-[#E87105]/40 rounded-full shadow-[0_0_25px_rgba(232,113,5,0.25)] backdrop-blur-md"
          >
            <div className="relative">
              <div className="w-2 h-2 bg-[#E87105] rounded-full" />
              <div className="absolute inset-0 w-2 h-2 bg-[#E87105] rounded-full animate-ping" />
            </div>
            <span className="text-[#E87105] text-xs font-mono tracking-wider uppercase font-semibold">
              Adaptive Execution Protocol: Active
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
