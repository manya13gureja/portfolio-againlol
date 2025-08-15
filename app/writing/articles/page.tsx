'use client'
import React, { useState, useEffect } from 'react';
import ArticleNav from '@/components/WritingSectionNav';
import Link from 'next/link';
import ProgressBar from '@/components/ScrollProgressBar';

// Main Article Page Component
const ArticlePage: React.FC = () => {
  const handleClose = () => {
    window.history.back();
  };
  
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <ArticleNav onClose={handleClose} />
      <ProgressBar />
      {/* Hero Section - Full viewport height with cover image */}
      <section 
        className="h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('/writing-cover.png')`,
        }}
      >
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Hero content - you can add any content here if needed */}
        <div className="relative z-10 h-full flex items-center justify-center">
          {/* This space is intentionally minimal as per your design */}
        </div>
      </section>

      {/* Article Content Section */}
     
      <section className="bg-gray-50 min-h-screen grid grid-cols-12">
        <div className="col-start-4 col-end-10 flex flex-col justify-center py-16">
          
          <h1 className="text-center text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-12">
            Don't trust the <span className="text-gray-600">(design)</span> process
          </h1>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              There's a strange trend in design lately, we've stopped designing
              things and started designing the process of designing them.
            </p>
            <p>
              Scroll through LinkedIn or a portfolio, and you'll find diagram
              after diagram worshipping some linear, sacred framework, all while
              the actual product gets flatter, safer, and more lifeless.
            </p>
            <p>
              Let's be real in 2025, we've got to stop romanticising "process"
              like it's the product and know that what users care about isn't
              whether you went through six rounds of HMWs or filled a Notion doc
              with empathy maps,{" "}
              <span className="text-rose-500 font-medium">
                it's whether the thing works, feels right, and actually solves
                their problem. Somewhere along the line, "design thinking"
                started replacing actual thinking.
              </span>
            </p>
            <p>
              This isn't to say process is useless. Having a structured approach
              can be helpful, especially when you are in a rut, or lost in the
              chaos. But it's ONLY that, a safety net. Not a map. Not a religion.{" "}
              <span className="text-rose-500 font-medium">
                A good process should feel more like a gut check,
              </span>{" "}
              not a gated tunnel you have to crawl through every time.
            </p>
            <p>
              What I've built for myself isn't a universal blueprint. It's not
              "best practice", it's just what works for me. My process shifts
              with the project, the people, the pace. Sometimes it's loopy.
              Sometimes it's fast. Sometimes it's just vibes and one strong
              hunch.
            </p>
          </div>
        </div>
      </section>
       
      {/* Container for all sections with sticky image */}
      <div className="bg-gray-50 relative">
       
           {/* RIGHT COLUMN: Sticky Image */}
   
         

        {/* All text sections */}
        <section className="py-16">
         
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Text Column */}
            <div className="lg:col-start-3 lg:col-span-6 text-gray-800 leading-relaxed space-y-6">
              <p>
                We, designers, hear it all the time: know the <span className="font-semibold">what</span>, 
                <span className="font-semibold"> why</span> and <span className="font-semibold">how</span> of the problem before designing,
                and while I completely agree for doing this, I am also a big procrastinator and
                have questioned multiple times that 
                <span className="text-rose-500"> why are we even solving this problem right now?</span> 
                can't we solve it tomorrow or could have yesterday? why is it a priority today and not last month? 
                <span className="text-rose-500"> what shifted?</span>
              </p>

              <p>
                At first, these questions used to sound like stalling, but honestly, approaching things this way led me to 
                answers of questions I didn't even know I had:
              </p>

              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  What changed in the product, team, or market that makes this worth building now? <br/>
                  <span className="text-rose-500 text-sm">
                    (helps define new constraints, business priorities, or technical unlocks that weren't true before.)
                  </span>
                </li>
                <li>
                  What are users doing today that this feature is supposed to fix, replace, or accelerate? <br/>
                  <span className="text-rose-500 text-sm">
                    (ties directly to the user behaviours and user pain points)
                  </span>
                </li>
                <li>
                  What outcome are we expecting to shift right now? <br/>
                  <span className="text-rose-500 text-sm">
                    (Forces clarity on scope, goal and MVP.)
                  </span>
                </li>
              </ol>
            </div>
          </div>
          
        </section>

        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Text Column */}
            <div className="lg:col-start-3 lg:col-span-6 text-gray-800 leading-relaxed space-y-6">
              <p>
                Honestly this is all the breakthrough I need to have. Understanding why are we 
                building right now, gets me started on working on what results we actually want, i.e.,  
                <span className="text-rose-400 font-medium"> metrics of our product.</span>
              </p>
              <p className="text-rose-400 font-medium">
                If we can't point to a needle we expect to move, we're flying blind.
              </p>
              <p>
                The metrics we define in this stage should be measurable, visible early and realistic.  
                Something that lets me/my team know that we are headed in the right direction without 
                having to wait until post-launch analytic kicks in.
              </p>

              <p>
                This is where both the worlds, design and engineering, pays off. Taking a Designing 
                first and Engineering second, for me, has saved quite a lot of time and helped me 
                uncover surface gaps in flow logic, before developing time is wasted (guess I am a 
                designer by heart).
              </p>

              <p>
                In the real and practical world though, even with a solid north star, our well defined 
                metric, something can go misaligned/misinterpreted/or missed completely, and that's 
                the nature of building (that's when these design processes come in handy). Hence, 
                asking yourself and trying to 
                <span className="text-rose-400 font-medium">
                  {" "}estimate the cost of being wrong here, what's the blast radius? How fast can we 
                  course-correct?
                </span>{" "} 
                helps decide how rigorously to measure and how lean the first iteration should be.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Text Column */}
            <div className="lg:col-start-3 lg:col-span-6 text-gray-800 leading-relaxed space-y-6">
              <p>
                Once you have questioned yourself enough and defined everything you could think of, 
                there's a rush you'd feel towards building a picture perfect solution. That rush is 
                good, but for 
                <span className="text-rose-400 font-medium"> finding the smallest version of the solution.</span>
              </p>

              <p>
                Can't even recall how many times I have jumped straight into building and had to scrap 
                the whole thing down. Try playing around product we building a bit more and 
                <span className="text-rose-400 font-medium"> finding the shippable version of the solution</span>, 
                that prove or disprove our metrics.
              </p>

              <p className="text-rose-400 font-medium">
                I have named this Ruthless scoping, aka not falling into the trap of building the 
                "perfect thing" too early.
              </p>

              <p>
                I actively look for the <span className="font-bold">fastest path to learning</span>, even if that 
                means shipping something barebones or ugly. What can I ship that feels embarrassingly 
                small but directionally correct?
              </p>

              <p>
                I scope around what lets us <span className="font-bold">validate the core assumption</span>:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>If we're testing a new layout, does it actually reduce drop-offs?</li>
                <li>If we're proposing a new flow, can users get through it without guidance? etc etc</li>
              </ul>

              <p className="text-rose-400 italic">
                It's critical to pinpoint what must exist versus what's nice to have, early on, and then 
                building the musts'.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Text Column */}
            <div className="lg:col-start-3 lg:col-span-6 text-gray-800 leading-relaxed space-y-6">
              <p>
                When I am finding the first small thing, I automatically dive in flows, state machines and experience maps that helps in understanding:
              </p>

              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <span className="text-rose-400 font-medium">The friction</span> – Friction in our case is the inertia users are facing when using our product. It shows up in understanding workflows clearly.
                </li>
                <li>
                  <span className="text-rose-400 font-medium">The dependencies</span> – Designs don't live in isolation. They rely on APIs, constraints, third-party tools. If a feature hinges on a brittle integration or manual ops work, I flag it. Dependencies shape what's possible and what's fragile.
                </li>
                <li>
                  <span className="text-rose-400 font-medium">Who touches this system</span> – Understanding the people present in loop is the most crucial thing as the product you are building is not just for your users. Ops? Support? Sales? Devs? If they interact with the system, their workflows must be respected in the solution. If this is ignored, your system breaks down the moment it leaves the prototype bubble.
                </li>
                <li>
                  <span className="text-rose-400 font-medium">Where can things go wrong</span> – This is about edge cases, failure states, and entropy. Designing for constraints as well — e.g., What happens if something loads slowly? If a flow is interrupted mid-way?
                </li>
              </ol>

              <p>
                Doing this has saved lives, and all these answers can be obtained by 
                <span className="text-rose-400"> understanding the product, and understanding the users like they are your roommates</span>.  
                Talk to the users, act like them, think and behave like them. Be them.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Text Column */}
            <div className="lg:col-start-3 lg:col-span-6 text-gray-800 leading-relaxed space-y-6">
              <p>Now, get your hands dirty. Without getting lost in polish or process.
              I treat ideas like hypotheses, something to <em>disprove quickly</em> rather than nurture blindly.</p>

              <span className="text-rose-400">The goal is simple to <strong>get it out, see how people respond.</strong></span>

              <p>Whether that means a janky HTML prototype, a fake no-code flow, or even a clickable button.
              Engineering first approach works best for the couple of stages here. Each small experiment is a micro-feedback loop, 
              <span className="text-rose-400">it teaches me what to double down on, what to drop, and what to refine.</span></p>

              <p>I don't just aim to ship here, I aim to grow on that idea.
              Momentum is built.</p>

              <p>From here on, I keep growing and working on the ideas, jumping back and forth in between what I described, 
              building and breaking, <span className="text-rose-400">till it feels inevitable.</span></p>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Text Column */}
          <div className="lg:col-start-2 lg:col-span-7 text-gray-800 leading-relaxed space-y-6">
            <p>As you see, I clearly don't just stick to one lane. I try to constantly move my thinking from engineering, to designing, to acting like a sales person selling my one idea to my another idea.
            <span className="text-rose-400">Translating between what's technically possible, what users actually need, what can be sold, and what breaks when it hits the real world.</span></p>

            <p>Whether it's checking with support to validate pain points, or pressure-testing an idea like a marketer, I make sure the product isn't built in a vacuum.
            But that's only one half of the muscle.</p>

            <p>Even in a corporate space, crystal-clear problems rarely get handed off. Instead, it's usually vague: "users are confused here," or "something feels off." 
            That's where <span className="text-rose-400">I comb through logs, dive into metrics and ideation over and over again, questioning my multiple thoughts, and obsessively testing and breaking the product myself.</span></p>

            <p>What I believe, The way good solutions/products come out of is to shape the problems as much as you solve them. It's skipping steps, it's knowing how to bend the process in your favour.</p>

            <p className="text-rose-400 italic">The product is yours to build, so should be the process to build it.</p>
          </div>
        </div>
      </section>

      {/* Profile & Upcoming Section */}
      <section className="bg-gray-100 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-52">
            
            {/* Profile Section */}
            <div>
              <h2 className="text-2xl lg:text-2xl font-semibold text-gray-700 mb-6 border-b-2 border-gray-900 pb-2">
                Profile
              </h2>
              
              <div className="space-y-4">
                <h3 className="text-xl lg:text-md font-medium text-gray-900 mb-8">
                  Manya Gureja
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5  rounded-sm flex items-center justify-center">
                      <span className="text-black text-lg">𝕏</span>
                     </div>
                      <a 
                      href="https://x.com/milkfuggler" 
                      className="text-gray-600 text-lg hover:text-rose-400 transition-colors underline"
                      target='_blank'
                    >
                      milkfuggler
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-sm flex items-center justify-center">
                      <span className="text-gray-600 text-lg">@</span>
                    </div>
                    <a 
                      href="mailto:manyaagureja13@gmail.com" 
                      className="text-gray-600 text-lg hover:text-rose-400 transition-colors underline"
                    >
                      manyaagureja13@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Section */}
            <div>
              <h2 className="text-2xl lg:text-2xl font-semibold text-gray-700 mb-6 border-b-2 border-gray-900 pb-2">
                Upcoming
              </h2>
              
              <div className="space-y-6">
                <h3 className="text-lg lg:text-md font-medium text-gray-900 leading-tight">
                  The Invisible Details of Interaction Design
                </h3>
                
                {/* Preview Image */}
                <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center relative">
                  <Link href="/writing/articles/the-invisible-details-of-interaction-design">
                  <img 
                    src="/upcoming-section.gif" 
                    alt="Design Thinking 101" 
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </Link>
                    <div className="text-rose-500/80 text-xs font-mono absolute bottom-4 left-4">
                      Typography and Objects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;