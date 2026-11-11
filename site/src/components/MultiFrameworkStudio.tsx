import React, { useState } from 'react';
import { Code2, Copy, Check, Sparkles, Smartphone, Layers, CheckCircle2 } from 'lucide-react';

export const MultiFrameworkStudio: React.FC = () => {
  const [selectedFramework, setSelectedFramework] = useState<
    'react' | 'vue' | 'svelte' | 'flutter' | 'compose' | 'swiftui'
  >('react');
  const [selectedArchetype, setSelectedArchetype] = useState<
    'novabank' | 'auraglow' | 'orbit' | 'pulse'
  >('novabank');
  const [copied, setCopied] = useState(false);

  const frameworks = [
    { id: 'react', name: 'React / Next.js', lang: 'TypeScript + Tailwind', badge: 'TSX' },
    { id: 'vue', name: 'Vue 3', lang: 'Composition API + Tailwind', badge: 'Vue' },
    { id: 'svelte', name: 'Svelte 5', lang: 'Runes + Tailwind', badge: 'Svelte' },
    { id: 'flutter', name: 'Flutter', lang: 'Dart Widgets & Theme', badge: 'Dart' },
    { id: 'compose', name: 'Android Compose', lang: 'Kotlin Jetpack Compose', badge: 'Kotlin' },
    { id: 'swiftui', name: 'iOS SwiftUI', lang: 'SwiftUI Modern Views', badge: 'Swift' },
  ];

  const codeSnippets: Record<string, Record<string, string>> = {
    novabank: {
      react: `// NovaBank Mobile Keypad : React (TSX) + Tailwind CSS
import React, { useState } from 'react';

export const NovaBankKeypad: React.FC = () => {
  const [amount, setAmount] = useState('250');

  const handleDigit = (digit: string) => {
    if (amount.length < 8) setAmount((prev) => prev + digit);
  };

  return (
    <div className="bg-[#050505] text-white p-6 rounded-[24px] max-w-sm mx-auto border border-white/10">
      <div className="text-center py-6">
        <span className="text-sm font-mono text-slate-400">Transfer Amount</span>
        <div className="text-5xl font-mono font-extrabold tracking-tight mt-1 text-white">
          \${amount || '0'}
        </div>
        <p className="text-xs text-slate-500 mt-1">2% commission included</p>
      </div>

      {/* 12-Key Ergonomic Keypad (Min 56px touch target) */}
      <div className="grid grid-cols-3 gap-3 my-4">
        {['1','2','3','4','5','6','7','8','9','.','0','⌫'].map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => key === '⌫' ? setAmount(prev => prev.slice(0, -1)) : handleDigit(key)}
            className="min-h-[56px] rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] active:bg-white/[0.12] text-xl font-mono font-semibold transition-all focus-visible:ring-2 focus-visible:ring-[#FF3B56]"
          >
            {key}
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label="Send Money"
        className="w-full min-h-[56px] rounded-2xl bg-[#FF3B56] hover:bg-[#FF546C] text-white font-bold text-base shadow-lg shadow-[#FF3B56]/20 transition-all focus-visible:ring-2"
      >
        Send Money →
      </button>
    </div>
  );
};`,
      vue: `<!-- NovaBank Mobile Keypad : Vue 3 (Composition API) -->
<script setup lang="ts">
import { ref } from 'vue';

const amount = ref('250');
const appendDigit = (d: string) => {
  if (amount.value.length < 8) amount.value += d;
};
const backspace = () => {
  amount.value = amount.value.slice(0, -1);
};
</script>

<template>
  <div class="bg-[#050505] text-white p-6 rounded-[24px] max-w-sm mx-auto border border-white/10">
    <div class="text-center py-6">
      <span class="text-sm font-mono text-slate-400">Transfer Amount</span>
      <div class="text-5xl font-mono font-extrabold tracking-tight mt-1 text-white">
        \${{ amount || '0' }}
      </div>
      <p class="text-xs text-slate-500 mt-1">2% commission included</p>
    </div>

    <div class="grid grid-cols-3 gap-3 my-4">
      <button
        v-for="k in ['1','2','3','4','5','6','7','8','9','.','0','⌫']"
        :key="k"
        type="button"
        @click="k === '⌫' ? backspace() : appendDigit(k)"
        class="min-h-[56px] rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-xl font-mono font-semibold focus-visible:ring-2 focus-visible:ring-[#FF3B56]"
      >
        {{ k }}
      </button>
    </div>

    <button
      type="button"
      aria-label="Send Money"
      class="w-full min-h-[56px] rounded-2xl bg-[#FF3B56] hover:bg-[#FF546C] text-white font-bold text-base shadow-lg"
    >
      Send Money →
    </button>
  </div>
</template>`,
      svelte: `<!-- NovaBank Mobile Keypad : Svelte 5 (Runes) -->
<script lang="ts">
  let amount = $state('250');

  function handleKey(k: string) {
    if (k === '⌫') {
      amount = amount.slice(0, -1);
    } else if (amount.length < 8) {
      amount += k;
    }
  }
</script>

<div class="bg-[#050505] text-white p-6 rounded-[24px] max-w-sm mx-auto border border-white/10">
  <div class="text-center py-6">
    <span class="text-sm font-mono text-slate-400">Transfer Amount</span>
    <div class="text-5xl font-mono font-extrabold tracking-tight mt-1 text-white">
      \${amount || '0'}
    </div>
  </div>

  <div class="grid grid-cols-3 gap-3 my-4">
    {#each ['1','2','3','4','5','6','7','8','9','.','0','⌫'] as k}
      <button
        type="button"
        onclick={() => handleKey(k)}
        class="min-h-[56px] rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] text-xl font-mono font-semibold focus-visible:ring-2 focus-visible:ring-[#FF3B56]"
      >
        {k}
      </button>
    {/each}
  </div>

  <button
    type="button"
    aria-label="Send Money"
    class="w-full min-h-[56px] rounded-2xl bg-[#FF3B56] hover:bg-[#FF546C] text-white font-bold text-base shadow-lg"
  >
    Send Money →
  </button>
</div>`,
      flutter: `// NovaBank Mobile Keypad : Flutter (Dart)
import 'package:flutter/material.dart';

class NovaBankKeypadScreen extends StatefulWidget {
  const NovaBankKeypadScreen({Key? key}) : super(key: key);

  @override
  State<NovaBankKeypadScreen> createState() => _NovaBankKeypadScreenState();
}

class _NovaBankKeypadScreenState extends State<NovaBankKeypadScreen> {
  String amount = "250";

  void onKeyPress(String key) {
    setState(() {
      if (key == '⌫') {
        if (amount.isNotEmpty) amount = amount.substring(0, amount.length - 1);
      } else if (amount.length < 8) {
        amount += key;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: const Color(0xFF050505),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: Colors.white10),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const Text("Transfer Amount", style: TextStyle(color: Colors.white54, fontSize: 13)),
          const SizedBox(height: 8),
          Text(
            "\\$\${amount.isEmpty ? '0' : amount}",
            style: const TextStyle(color: Colors.white, fontSize: 44, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 24),
          // 12-key Grid
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 3,
              childAspectRatio: 1.4,
              crossAxisSpacing: 12,
              mainAxisSpacing: 12,
            ),
            itemCount: 12,
            itemBuilder: (context, index) {
              const keys = ['1','2','3','4','5','6','7','8','9','.','0','⌫'];
              return InkWell(
                borderRadius: BorderRadius.circular(16),
                onTap: () => onKeyPress(keys[index]),
                child: Container(
                  decoration: BoxDecoration(
                    color: Colors.white.withOpacity(0.05),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  alignment: Alignment.center,
                  child: Text(
                    keys[index],
                    style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w600),
                  ),
                ),
              );
            },
          ),
          const SizedBox(height: 20),
          SizedBox(
            width: double.infinity,
            height: 56,
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                backgroundColor: const Color(0xFFFF3B56),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
              ),
              onPressed: () {},
              child: const Text("Send Money", style: TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.bold)),
            ),
          )
        ],
      ),
    );
  }
}`,
      compose: `// NovaBank Mobile Keypad : Android Jetpack Compose (Kotlin)
package com.orqiva.novabank

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun NovaBankKeypadScreen() {
    var amount by remember { mutableStateOf("250") }

    Column(
        modifier = Modifier
            .background(Color(0xFF050505), RoundedCornerShape(24.dp))
            .border(1.dp, Color.White.copy(alpha = 0.1f), RoundedCornerShape(24.dp))
            .padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Transfer Amount", color = Color.Gray, fontSize = 13.sp)
        Text(
            text = "\\$$amount",
            color = Color.White,
            fontSize = 44.sp,
            fontWeight = FontWeight.Bold,
            modifier = Modifier.padding(vertical = 12.dp)
        )

        // 12-key Grid with min 56dp height touch target
        val keys = listOf("1","2","3","4","5","6","7","8","9",".","0","⌫")
        for (row in 0 until 4) {
            Row(
                modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp),
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                for (col in 0 until 3) {
                    val key = keys[row * 3 + col]
                    Box(
                        modifier = Modifier
                            .weight(1f)
                            .height(56.dp)
                            .background(Color.White.copy(alpha = 0.05f), RoundedCornerShape(16.dp))
                            .clickable {
                                if (key == "⌫") amount = amount.dropLast(1)
                                else if (amount.length < 8) amount += key
                            },
                        contentAlignment = Alignment.Center
                    ) {
                        Text(key, color = Color.White, fontSize = 20.sp, fontWeight = FontWeight.SemiBold)
                    }
                }
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        Button(
            onClick = { /* Execute Transfer */ },
            modifier = Modifier.fillMaxWidth().height(56.dp),
            colors = ButtonDefaults.buttonColors(containerColor = Color(0xFFFF3B56)),
            shape = RoundedCornerShape(16.dp)
        ) {
            Text("Send Money", color = Color.White, fontWeight = FontWeight.Bold)
        }
    }
}`,
      swiftui: `// NovaBank Mobile Keypad : iOS SwiftUI (Swift)
import SwiftUI

struct NovaBankKeypadView: View {
    @State private var amount = "250"
    let keys = ["1","2","3","4","5","6","7","8","9",".","0","⌫"]

    var body: some View {
        VStack(spacing: 16) {
            Text("Transfer Amount")
                .font(.caption)
                .foregroundColor(.gray)

            Text("$\\$amount")
                .font(.system(size: 44, weight: .bold, design: .monospaced))
                .foregroundColor(.white)
                .padding(.bottom, 8)

            // 12-Key Grid
            LazyVGrid(columns: Array(repeating: GridItem(.flexible(), spacing: 12), count: 3), spacing: 12) {
                ForEach(keys, id: \\.self) { key in
                    Button(action: {
                        if key == "⌫" {
                            if !amount.isEmpty { amount.removeLast() }
                        } else if amount.count < 8 {
                            amount += key
                        }
                    }) {
                        Text(key)
                            .font(.title2.weight(.semibold))
                            .foregroundColor(.white)
                            .frame(maxWidth: .infinity, minHeight: 56)
                            .background(Color.white.opacity(0.05))
                            .cornerRadius(16)
                    }
                }
            }

            Button(action: { /* Transfer */ }) {
                Text("Send Money")
                    .font(.headline)
                    .foregroundColor(.white)
                    .frame(maxWidth: .infinity, minHeight: 56)
                    .background(Color(hex: "FF3B56"))
                    .cornerRadius(16)
                    .shadow(color: Color(hex: "FF3B56").opacity(0.3), radius: 10, y: 5)
            }
        }
        .padding(24)
        .background(Color(hex: "050505"))
        .cornerRadius(24)
        .overlay(RoundedRectangle(cornerRadius: 24).stroke(Color.white.opacity(0.1), lineWidth: 1))
    }
}`
    },
    auraglow: {
      react: `// AuraGlow Luxury E-Commerce : React (TSX) + Cormorant Garamond Serif
export const AuraGlowHero: React.FC = () => (
  <section className="bg-[#0B0B0D] text-[#FAF7F2] p-8 rounded-[16px] border border-[#D4AF37]/20">
    <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-mono">
      Crafted to Perfection
    </div>
    <h1 className="text-4xl font-serif text-[#FAF7F2] mt-2 leading-tight">
      Timeless Elegance Diamond Collection
    </h1>
    <p className="text-sm text-[#E8DECB] mt-2 max-w-md">
      Experience the brilliance that lasts forever. Handcrafted 18K white gold with natural diamonds.
    </p>
    <button className="mt-6 min-h-[48px] px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E5C358] text-[#0B0B0D] font-bold text-sm shadow-lg shadow-[#D4AF37]/20 hover:scale-102 transition-transform">
      Explore Collection →
    </button>
  </section>
);`,
      vue: `<!-- AuraGlow Luxury E-Commerce : Vue 3 -->
<template>
  <section class="bg-[#0B0B0D] text-[#FAF7F2] p-8 rounded-[16px] border border-[#D4AF37]/20">
    <div class="text-xs uppercase tracking-widest text-[#D4AF37] font-mono">Crafted to Perfection</div>
    <h1 class="text-4xl font-serif text-[#FAF7F2] mt-2">Timeless Elegance Diamond Collection</h1>
    <button class="mt-6 min-h-[48px] px-6 py-2.5 rounded-full bg-[#D4AF37] text-[#0B0B0D] font-bold text-sm">
      Explore Collection →
    </button>
  </section>
</template>`,
      svelte: `<!-- AuraGlow Luxury E-Commerce : Svelte 5 -->
<section class="bg-[#0B0B0D] text-[#FAF7F2] p-8 rounded-[16px] border border-[#D4AF37]/20">
  <div class="text-xs uppercase tracking-widest text-[#D4AF37] font-mono">Crafted to Perfection</div>
  <h1 class="text-4xl font-serif text-[#FAF7F2] mt-2">Timeless Elegance Diamond Collection</h1>
  <button class="mt-6 min-h-[48px] px-6 py-2.5 rounded-full bg-[#D4AF37] text-[#0B0B0D] font-bold text-sm">
    Explore Collection →
  </button>
</section>`,
      flutter: `// AuraGlow Luxury : Flutter Widget
Widget build(BuildContext context) {
  return Container(
    padding: const EdgeInsets.all(24),
    decoration: BoxDecoration(
      color: const Color(0xFF0B0B0D),
      borderRadius: BorderRadius.circular(16),
      border: Border.all(color: const Color(0xFFD4AF37).withOpacity(0.2)),
    ),
    child: Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Text("CRAFTED TO PERFECTION", style: TextStyle(color: Color(0xFFD4AF37), fontSize: 11, letterSpacing: 2)),
        const SizedBox(height: 8),
        const Text("Timeless Elegance Diamond Collection", style: TextStyle(color: Color(0xFFFAF7F2), fontSize: 28, fontFamily: 'Serif')),
      ],
    ),
  );
}`,
      compose: `// AuraGlow Luxury : Android Jetpack Compose
@Composable
fun AuraGlowLuxuryCard() {
    Column(
        modifier = Modifier
            .background(Color(0xFF0B0B0D), RoundedCornerShape(16.dp))
            .border(1.dp, Color(0xFFD4AF37).copy(alpha = 0.2f), RoundedCornerShape(16.dp))
            .padding(24.dp)
    ) {
        Text("CRAFTED TO PERFECTION", color = Color(0xFFD4AF37), fontSize = 11.sp)
        Text("Timeless Elegance Diamond Collection", color = Color(0xFFFAF7F2), fontSize = 28.sp)
    }
}`,
      swiftui: `// AuraGlow Luxury : iOS SwiftUI
struct AuraGlowCard: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 8) {
            Text("CRAFTED TO PERFECTION")
                .font(.caption)
                .foregroundColor(Color(hex: "D4AF37"))
            Text("Timeless Elegance Diamond Collection")
                .font(.title)
                .foregroundColor(Color(hex: "FAF7F2"))
        }
        .padding(24)
        .background(Color(hex: "0B0B0D"))
        .cornerRadius(16)
        .overlay(RoundedRectangle(cornerRadius: 16).stroke(Color(hex: "D4AF37").opacity(0.2), lineWidth: 1))
    }
}`
    }
  };

  const currentCode =
    codeSnippets[selectedArchetype]?.[selectedFramework] ||
    codeSnippets.novabank[selectedFramework];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-2">
            <Code2 className="w-3.5 h-3.5" />
            <span>CROSS-FRAMEWORK PRODUCTION CODE STUDIO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Multi-Language Programming Support
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            ORQIVA generates native code adhering to platform idioms: React, Vue, Svelte, Flutter, Jetpack Compose, and SwiftUI.
          </p>
        </div>

        {/* Archetype Quick Switcher */}
        <div className="flex items-center space-x-2 p-1 bg-slate-950 rounded-xl border border-slate-800">
          <button
            onClick={() => setSelectedArchetype('novabank')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedArchetype === 'novabank' ? 'bg-[#FF3B56] text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            NovaBank Mobile
          </button>
          <button
            onClick={() => setSelectedArchetype('auraglow')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedArchetype === 'auraglow' ? 'bg-[#D4AF37] text-slate-950' : 'text-slate-400 hover:text-white'
            }`}
          >
            AuraGlow Luxury
          </button>
        </div>
      </div>

      {/* Language / Framework Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
        {frameworks.map((f) => {
          const isActive = selectedFramework === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setSelectedFramework(f.id as any)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isActive
                  ? 'bg-sky-500/15 border-sky-500/50 text-white shadow-md'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold">{f.name}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-sky-400 font-semibold">
                  {f.badge}
                </span>
              </div>
              <div className="text-[10px] text-slate-500 truncate">{f.lang}</div>
            </button>
          );
        })}
      </div>

      {/* Code Viewer Box */}
      <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden font-mono text-xs shadow-2xl">
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="text-slate-400 text-xs ml-2">
              {selectedArchetype.toUpperCase()} : {frameworks.find((f) => f.id === selectedFramework)?.name}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg flex items-center space-x-1.5 text-xs font-semibold transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>
        </div>

        <pre className="p-5 text-slate-300 overflow-x-auto max-h-[380px] leading-relaxed">
          <code>{currentCode}</code>
        </pre>

        <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800 flex justify-between items-center text-[11px] text-slate-500">
          <span className="flex items-center space-x-1 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>WCAG 2.2 Level AA Verified Contrast</span>
          </span>
          <span>44px+ Ergonomic Touch Target Guaranteed</span>
        </div>
      </div>
    </div>
  );
};
