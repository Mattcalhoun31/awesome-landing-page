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

      {/* LAYER 2: Connector Lines - Animated with Brand Colors */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
        <defs>
          {/* Brand Orange Gradients */}
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E87105" stopOpacity="0" />
            <stop offset="50%" stopColor="#E87105" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F89F05" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F89F05" stopOpacity="0" />
            <stop offset="50%" stopColor="#F89F05" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E87105" />
          </linearGradient>
          <linearGradient id="lineGradient3" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#E87105" stopOpacity="0" />
            <stop offset="50%" stopColor="#F89F05" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#E87105" />
          </linearGradient>
        </defs>

        {/* Animated Lines - Flow into center */}
        <g className="hidden lg:block">
          <line x1="20%" y1="30%" x2="50%" y2="50%" stroke="url(#lineGradient1)" strokeWidth="2" strokeDasharray="8 8">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="80%" y1="30%" x2="50%" y2="50%" stroke="url(#lineGradient2)" strokeWidth="2" strokeDasharray="8 8">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite" />
          </line>
          <line x1="50%" y1="75%" x2="50%" y2="50%" stroke="url(#lineGradient3)" strokeWidth="2" strokeDasharray="8 8">
            <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite" />
          </line>
        </g>
      </svg>

      {/* LAYER 3: Container for Cards and 3D Core */}
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">

        {/* 3D Hunter Core - Centered, Perfect Size */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] lg:max-w-[700px] lg:h-[700px] pointer-events-none">
          <Canvas
            camera={{ position: [0, 0, 10], fov: 45 }}
            className="w-full h-full"
            gl={{ alpha: true, antialias: true }}
          >
            <HunterCore />
          </Canvas>
        </div>

        {/* Cards Grid - No Overlap, Clean Spacing */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pointer-events-none">

          {/* Top Left Card - THE DEEP DETECTIVE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pointer-events-auto lg:justify-self-end lg:mt-8"
          >
            <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#E87105]/40 p-6 lg:p-8 rounded-2xl shadow-[0_0_40px_rgba(232,113,5,0.2)] relative group hover:scale-[1.03] hover:border-[#E87105]/60 transition-all duration-300 max-w-md">
              {/* Connection Dot */}
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#E87105] rounded-full shadow-[0_0_10px_rgba(232,113,5,0.8)] hidden lg:block" />

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#E87105]/15 rounded-xl border border-[#E87105]/40 group-hover:bg-[#E87105]/25 transition-colors">
                  <ScanSearch className="w-7 h-7 text-[#E87105]" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white font-mono tracking-tight">THE DEEP DETECTIVE</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Real-time recon across LinkedIn, news, and funding data. It surfaces buying signals before competitors know they exist.
              </p>
            </div>
          </motion.div>

          {/* Top Right Card - THE VECTOR VAULT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pointer-events-auto lg:justify-self-start lg:mt-8"
          >
            <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#F89F05]/40 p-6 lg:p-8 rounded-2xl shadow-[0_0_40px_rgba(248,159,5,0.2)] relative group hover:scale-[1.03] hover:border-[#F89F05]/60 transition-all duration-300 max-w-md">
              {/* Connection Dot */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#F89F05] rounded-full shadow-[0_0_10px_rgba(248,159,5,0.8)] hidden lg:block" />

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#F89F05]/15 rounded-xl border border-[#F89F05]/40 group-hover:bg-[#F89F05]/25 transition-colors">
                  <DatabaseZap className="w-7 h-7 text-[#F89F05]" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white font-mono tracking-tight">THE VECTOR VAULT</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                Your living knowledge base. Ingests case studies and battlecards to train the Ghostwriter. It knows your value props better than you do.
              </p>
            </div>
          </motion.div>

          {/* Bottom Center Card - THE GHOSTWRITER */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="pointer-events-auto lg:col-span-2 lg:justify-self-center lg:mt-24"
          >
            <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#E87105]/40 p-6 lg:p-8 rounded-2xl shadow-[0_0_40px_rgba(232,113,5,0.2)] relative group hover:scale-[1.03] hover:border-[#E87105]/60 transition-all duration-300 max-w-md">
              {/* Connection Dot */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#E87105] rounded-full shadow-[0_0_10px_rgba(232,113,5,0.8)] hidden lg:block" />

              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#E87105]/15 rounded-xl border border-[#E87105]/40 group-hover:bg-[#E87105]/25 transition-colors">
                  <PenTool className="w-7 h-7 text-[#E87105]" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-white font-mono tracking-tight">THE GHOSTWRITER</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                1-to-1 Orchestration. It fuses Prospect Data with Your Content to write hyper-personalized messaging. No templates. Pure context.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Protocol Badge - Below Everything, No Overlap */}
        <div className="relative z-20 mt-16 lg:mt-24 flex justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-black/90 border border-[#E87105]/50 rounded-full shadow-[0_0_30px_rgba(232,113,5,0.3)] backdrop-blur-md"
          >
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-[#E87105] rounded-full" />
              <div className="absolute inset-0 w-2.5 h-2.5 bg-[#E87105] rounded-full animate-ping" />
            </div>
            <span className="text-[#E87105] text-xs lg:text-sm font-mono tracking-widest uppercase font-semibold">
              Adaptive Execution Protocol: Active
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
