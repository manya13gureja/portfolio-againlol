'use client'
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"
import { Section } from "@/components/section"
import Link from "next/link"

export default function WritingPage() {
  return (
    <PageTransition>
      <div className="min-h-screen transition-colors duration-300">
        <Navigation />
        <main className="pb-24" role="main" id="main-content">
          {/* Header */}
          <section className="pt-52 pb-32" aria-labelledby="about-heading">
            <div className="max-w-4xl mx-auto px-8">
              <div className="max-w-4xl">
                <h1
                  id="about-heading"
                  className="text-5xl lg:text-6xl font-light leading-tight mb-9 tracking-tight"
                >
                  Writing.
                </h1>
              </div>
            </div>
          </section>

          {/* Articles */}
          <Section className="py-20">
            <div className="max-w-4xl mx-auto px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Date */}
                <div className="lg:col-span-4">
                  <h2 className="text-2xl font-light tracking-tight">
                    Feb 2025
                  </h2>
                </div>

                {/* Image + Info */}
                <div className="lg:col-span-8">
                  <Link
                    href="/writing/articles"
                    className="block group"
                  >
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src="/writing-cover.png"
                        alt="Don't trust the (design) process cover"
                        className="w-52 h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          console.warn('Image failed to load:', target.src);
                        }}
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                        Don't Trust the (Design) Process
                      </h3>
                      <p className="text-base text-gray-600 dark:text-gray-400 mt-1">
                        A reflection on design workflows and why intuition sometimes matters more than the rules.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Section>
        </main>
      </div>
    </PageTransition>
  )
}