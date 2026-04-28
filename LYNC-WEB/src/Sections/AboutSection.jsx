import React from 'react';
import image from '../assets/images/onlyImage.png';

export default function AboutSection() {
  return (
    <section className="w-full py-2">
      <div className="max-w-[1180px] mx-auto px-10">
        <h1 className="text-4xl font-bold text-center mb-5">
          <span className="text-accent">About</span> Us
        </h1>

        {/*
          ── GRID STRUCTURE ───────────────────────────────────────────────────

          3 rows × 2 columns. Each row is 400px tall.

          Columns:  [  2fr  ] [  1fr  ]
                    left       right

          Row 1  ┌──────────┬──────────┐
                 │          │  Cell 2  │  ← Image       (row 1 only  = 400px)
          Row 2  │  Cell 1  ├──────────┤
                 │          │          │
                 │(rows 1-2)│  Cell 4  │  ← Our Vision  (rows 2-3   = 800px+gap)
          Row 3  ├──────────┤          │
                 │  Cell 3  │          │  ← Our Mission (row 3 only  = 400px)
                 └──────────┴──────────┘

          HOW THE DOUBLING WORKS:
          • Cell 1 "Who We Are"  → gridRow: '1 / 3'  spans rows 1 AND 2  = 2 × Cell 2
          • Cell 4 "Our Vision"  → gridRow: '2 / 4'  spans rows 2 AND 3  = 2 × Cell 3

          The value '1 / 3' means: start at grid LINE 1, end at grid LINE 3.
          Grid lines are the dividers between rows (line 1 is the top edge,
          line 2 is after row 1, line 3 is after row 2, line 4 is the bottom).

          On mobile: grid-cols-1 collapses everything to a single stacked column
          and the explicit row/column placements are ignored.
          ─────────────────────────────────────────────────────────────────── */}
        <div
          className="grid gap-4 grid-cols-1 lg:grid-cols-[2fr_1fr]"
          style={{
            gridTemplateRows:
              'minmax(10rem, auto) minmax(10rem, auto) minmax(10rem, auto)',
          }}
        >
          {/* CELL 1 – Who We Are | spans rows 1–2 → double height of Cell 2 */}
          <div className="bg-[#221e57]/14 rounded-2xl p-9 flex flex-col justify-start shadow-sm lg:[grid:column:1] lg:[grid-row:1/3]">
            <h2 className="text-2xl font-bold text-accent mb-5">Who We Are</h2>
            <p className="text-base leading-relaxed mb-5">
              LYNC is a legal access platform built to simplify how individuals
              and businesses connect with lawyers.
            </p>
            <p className="text-base leading-relaxed mb-5">
              We exist to remove the uncertainty, complexity, and friction that
              often comes with seeking legal support. By structuring how people
              find and engage with legal professionals, LYNC makes legal access
              more direct, transparent, and easier to navigate.
            </p>
            <p className="text-base leading-relaxed">
              At its core, LYNC is{' '}
              <span className="text-accent">
                Lawyer–You Network Connection;{' '}
              </span>
              a system designed to connect you to the right legal help, when you
              need it.
            </p>
          </div>

          {/* CELL 2 – Image | row 1 only → single height */}
          <div className="rounded-2xl overflow-hidden shadow-sm lg:[grid:column:2] lg:[grid-row:1/2]">
            <img
              src={image}
              alt="LYNC legal team collaborating"
              className="w-full h-full object-cover"
            />
          </div>

          {/* CELL 3 – Our Mission | row 3 only → single height */}
          <div className="bg-[#f5a210]/14 rounded-2xl p-9 flex flex-col justify-start shadow-sm lg:[grid:column:1] lg:[grid-row:3/4] ">
            <h2 className="text-2xl font-bold mb-5">Our Mission</h2>
            <p
              className="text-base leading-relaxed mb-5>
              To make legal access simple, structured, and universally
              accessible.
            </p>
            <p className="
              text-base
              leading-relaxed
            >
              We envision a system where legal support is no longer intimidating
              or out of reach, but something individuals and businesses can
              access with clarity and confidence — every single time they need
              it.
            </p>
          </div>

          {/* CELL 4 – Our Vision | spans rows 2–3 → double height of Cell 3 */}
          <div className="bg-[#f5a210]/14 rounded-2xl p-9 flex flex-col justify-start shadow-sm lg:[grid:column:2] lg:[grid-row:2/4]">
            <h2 className="text-2xl font-bold mb-5">Our Vision</h2>
            <p className="text-base leading-relaxed mb-5">
              To connect individuals and businesses to the right legal support
              through a structured and reliable network of lawyers.
            </p>
            <p className="text-base leading-relaxed">
              We are building a platform that removes guesswork, improves
              transparency, and creates a more efficient way to navigate legal
              needs; from everyday issues to ongoing business compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
