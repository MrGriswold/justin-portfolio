"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  Mail,
  Mountain,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PortfolioSite() {
  const [active, setActive] = useState<string>("home");

  const nav = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "work", label: "Case Studies" },
      { id: "framework", label: "Do It Afraid" },
      { id: "safety", label: "Safety" },
      { id: "services", label: "Services" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-2 rounded-xl px-2 py-1 text-left"
            aria-label="Go to top"
            type="button"
          >
            <div className="grid h-9 w-9 place-items-center rounded-2xl bg-foreground/10">
              <Mountain className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">Justin Griswold</div>
              <div className="text-xs text-muted-foreground">
                Experience Designer • Facilitator • Safety Instructor
              </div>
            </div>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`rounded-xl px-3 py-2 text-sm transition ${
                  active === n.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                }`}
                type="button"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              className="hidden rounded-2xl sm:inline-flex"
              onClick={() => scrollTo("contact")}
              type="button"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
            <Button
              className="rounded-2xl"
              onClick={() => {
                alert("Tip: Add a link to your PDF portfolio here.");
              }}
              type="button"
            >
              Download PDF <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="border-t md:hidden">
          <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`whitespace-nowrap rounded-xl px-3 py-2 text-sm transition ${
                  active === n.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                }`}
                type="button"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-foreground/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-10 lg:grid-cols-12"
          >
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground">
                <BadgeCheck className="h-4 w-4" />
                CPR / First Aid Instructor • Experiential Learning
              </div>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                I design experiences that build{" "}
                <span className="underline decoration-foreground/30">
                  confidence
                </span>
                , resilience, and leadership.
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                I facilitate team-building and outdoor programs that turn
                challenge into growth. My approach blends adventure-based
                learning, psychological safety, and structured reflection—so
                participants walk away with real skills and a stronger sense of
                identity.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  className="rounded-2xl"
                  onClick={() => scrollTo("work")}
                  type="button"
                >
                  View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  className="rounded-2xl"
                  onClick={() => scrollTo("framework")}
                  type="button"
                >
                  Explore “Do It Afraid” <Zap className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <Stat
                  label="Programs Facilitated"
                  value="High-impact"
                  note="Experiential, outdoors, and group-based"
                />
                <Stat
                  label="Approach"
                  value="Evidence-aligned"
                  note="Challenge + reflection + integration"
                />
                <Stat
                  label="Safety"
                  value="High standard"
                  note="CPR/First Aid instruction & risk planning"
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="rounded-3xl border-foreground/10">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <h3 className="text-lg font-semibold">At a glance</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Outdoor & youth development facilitation with a
                        practical, systems-aware lens.
                      </p>
                    </div>
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-foreground/10">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm">
                    <Bullet icon={<ClipboardList className="h-4 w-4" />}>
                      High ropes team-building facilitation (trust, communication,
                      leadership).
                    </Bullet>
                    <Bullet icon={<Mountain className="h-4 w-4" />}>
                      Snowboard program design & delivery (mastery, resilience,
                      responsibility).
                    </Bullet>
                    <Bullet icon={<Shield className="h-4 w-4" />}>
                      Safety-forward programming with clear expectations and
                      risk awareness.
                    </Bullet>
                  </ul>

                  <div className="mt-7 rounded-2xl border bg-foreground/5 p-4">
                    <p className="text-sm">
                      <span className="font-semibold">Do It Afraid</span> is the
                      guiding methodology:
                      <span className="text-muted-foreground">
                        {" "}
                        progress doesn’t require the absence of fear—only the
                        willingness to move through it.
                      </span>
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                    <Button
                      className="rounded-2xl"
                      onClick={() => scrollTo("contact")}
                      type="button"
                    >
                      Work with me <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-2xl"
                      onClick={() => {
                        alert("Tip: Add your LinkedIn or a booking link here.");
                      }}
                      type="button"
                    >
                      Connect
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight">About</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                I build growth-focused programs where challenge becomes a
                structured teacher. I’m especially interested in how
                environment, expectations, and facilitation create the
                conditions for confidence—without relying on hype, pressure, or
                forced motivation.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                My work is practical and people-centered: I plan, facilitate,
                debrief, and adjust in real time so teams and youth can learn
                through experience, not lectures.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard
                  title="What I’m great at"
                  icon={<Users className="h-5 w-5" />}
                  items={[
                    "Creating psychological safety while keeping challenge real",
                    "Reading group dynamics and adjusting facilitation",
                    "Building confidence through progressive mastery",
                    "Turning experiences into lasting takeaways",
                  ]}
                />
                <InfoCard
                  title="How I work"
                  icon={<ClipboardList className="h-5 w-5" />}
                  items={[
                    "Clear expectations and roles",
                    "Challenge calibrated to the group",
                    "Debrief after every key moment",
                    "Repeatable frameworks that scale",
                  ]}
                />
              </div>

              <Card className="mt-4 rounded-3xl">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg font-semibold">Core competencies</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Experiential Learning Design",
                      "Team-Building Facilitation",
                      "Outdoor & Adventure Programming",
                      "Risk Management & Safety Planning",
                      "Youth Development",
                      "Program Logistics & Operations",
                      "Leadership Development",
                      "Conflict-aware communication",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Case Studies
              </h2>
              <p className="mt-2 text-muted-foreground">
                Two programs that show my facilitation style and design
                approach.
              </p>
            </div>
            <Button
              variant="outline"
              className="rounded-2xl"
              onClick={() => scrollTo("services")}
              type="button"
            >
              See services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <CaseStudy
              icon={<Users className="h-5 w-5" />}
              title="High Ropes Team-Building Facilitation"
              subtitle="Trust • Communication • Leadership under pressure"
              problem={[
                "Fear of failure and embarrassment blocks participation",
                "Group communication breaks down under stress",
                "Low self-efficacy leads to avoidance",
              ]}
              design={[
                "Preparation: psychological safety + norms",
                "Challenge: controlled stress + teamwork",
                "Reflection: debriefs that integrate learning",
              ]}
              outcomes={[
                "Stronger group cohesion and accountability",
                "Improved communication in high-pressure moments",
                "Increased confidence through supported risk",
              ]}
            />

            <CaseStudy
              icon={<Mountain className="h-5 w-5" />}
              title="Snowboard Program"
              subtitle="Mastery • Resilience • Responsibility"
              problem={[
                "Avoidance of challenge due to fear or frustration",
                "Difficulty regulating emotions after setbacks",
                "Limited opportunities to experience competence",
              ]}
              design={[
                "Orientation: environment + equipment + safety",
                "Exposure: progressive skill practice",
                "Integration: reflection that reinforces identity",
              ]}
              outcomes={[
                "Greater frustration tolerance and persistence",
                "Increased willingness to try difficult tasks",
                "Peer support and accountability improved",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Framework */}
      <section id="framework" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight">
                Do It Afraid
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                “Do It Afraid” is a simple methodology for growth: fear isn’t a
                stop sign—it’s information. The goal isn’t to eliminate fear,
                but to move forward with support, structure, and reflection.
              </p>
              <div className="mt-6 rounded-3xl border bg-foreground/5 p-5">
                <div className="text-sm font-semibold">Core idea</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Progress doesn’t require the absence of fear—only the
                  willingness to act through it.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="rounded-3xl">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg font-semibold">
                    Experience → Reflection → Identity
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A repeatable loop I use to turn activities into lasting
                    change.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <Step
                      title="Experience"
                      icon={<Mountain className="h-5 w-5" />}
                      text="A challenge that introduces uncertainty or discomfort."
                    />
                    <Step
                      title="Reflection"
                      icon={<ClipboardList className="h-5 w-5" />}
                      text="Guided debrief: emotion, decisions, effort, and outcomes."
                    />
                    <Step
                      title="Identity"
                      icon={<Zap className="h-5 w-5" />}
                      text="A new narrative forms: “I can handle hard things.”"
                    />
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <Mini
                      title="What participants gain"
                      items={[
                        "Self-trust",
                        "Frustration tolerance",
                        "Communication",
                        "Leadership",
                      ]}
                    />
                    <Mini
                      title="How I measure success"
                      items={[
                        "Engagement",
                        "Peer support",
                        "Behavior under stress",
                        "Carryover to daily life",
                      ]}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section id="safety" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="text-2xl font-semibold tracking-tight">
                Safety & Risk Management
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Safety isn’t a checkbox—it's part of the design. I build clear
                expectations, plan for contingencies, and maintain a calm,
                structured environment so participants can take meaningful risks
                without reckless ones.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <SafetyCard
                  title="CPR / First Aid Instructor"
                  icon={<BadgeCheck className="h-5 w-5" />}
                  body="Certified to teach life-saving skills and emergency response procedures for groups and staff teams."
                />
                <SafetyCard
                  title="Program Standards"
                  icon={<Shield className="h-5 w-5" />}
                  body="Clear expectations, gear checks, environmental awareness, and behavior-ready participation requirements."
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <Card className="rounded-3xl">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg font-semibold">
                    How I keep programs safe
                  </h3>
                  <div className="mt-5 space-y-3 text-sm">
                    <Bullet icon={<Shield className="h-4 w-4" />}>
                      Clear participation criteria (fit-to-participate
                      expectations).
                    </Bullet>
                    <Bullet icon={<ClipboardList className="h-4 w-4" />}>
                      Pre-briefs: roles, boundaries, and behavioral
                      expectations.
                    </Bullet>
                    <Bullet icon={<Users className="h-4 w-4" />}>
                      Ongoing assessment: group energy, stress signs, and
                      readiness.
                    </Bullet>
                    <Bullet icon={<BadgeCheck className="h-4 w-4" />}>
                      Emergency readiness and staff/youth training via CPR/First
                      Aid instruction.
                    </Bullet>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight">Services</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Built for “all of the above”: career advancement, consulting,
                and long-term independence. I can support organizations with
                facilitation, program design, and training.
              </p>
              <div className="mt-6 rounded-3xl border bg-foreground/5 p-5">
                <div className="text-sm font-semibold">Best fit for</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  Schools, youth programs, nonprofits, camps, and teams looking
                  to build trust, leadership, and resilience through structured
                  challenge.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <Service
                  title="Team-Building Facilitation"
                  icon={<Users className="h-5 w-5" />}
                  bullets={[
                    "High ropes facilitation",
                    "Communication & trust",
                    "Debrief + integration",
                  ]}
                />
                <Service
                  title="Program Design"
                  icon={<ClipboardList className="h-5 w-5" />}
                  bullets={[
                    "Curriculum & progression",
                    "Risk planning",
                    "Outcomes & evaluation",
                  ]}
                />
                <Service
                  title="Safety Training"
                  icon={<Shield className="h-5 w-5" />}
                  bullets={[
                    "CPR / First Aid instruction",
                    "Emergency readiness",
                    "Group safety expectations",
                  ]}
                />
                <Service
                  title="Do It Afraid Workshops"
                  icon={<Zap className="h-5 w-5" />}
                  bullets={[
                    "Resilience under stress",
                    "Fear-to-action tools",
                    "Identity-building practices",
                  ]}
                />
              </div>

              <Card className="mt-4 rounded-3xl">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg font-semibold">
                    Want a simple package?
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    I can build a half-day or full-day experience that includes
                    a pre-brief, facilitated challenge blocks, and a structured
                    debrief that creates carryover to daily life.
                  </p>
                  <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                    <Button
                      className="rounded-2xl"
                      onClick={() => scrollTo("contact")}
                      type="button"
                    >
                      Request availability <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-2xl"
                      onClick={() => {
                        alert(
                          "Tip: Add your rate sheet or package list as a PDF link here."
                        );
                      }}
                      type="button"
                    >
                      View packages
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Want to collaborate, hire me for facilitation, or talk program
                design? Send a message and I’ll follow up.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-3xl border p-5">
                  <div className="text-sm font-semibold">Email</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Replace this with your email address
                  </div>
                  <Button
                    className="mt-4 rounded-2xl"
                    onClick={() => {
                      window.location.href =
                        "mailto:youremail@example.com?subject=Collaboration%20Request%20-%20Justin%20Griswold";
                    }}
                    type="button"
                  >
                    Email me <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="rounded-3xl border bg-foreground/5 p-5">
                  <div className="text-sm font-semibold">Quick note</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    If you tell me your goals, group size, location, and
                    timeline, I can recommend a program structure.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="rounded-3xl">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-lg font-semibold">Send a message</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    This form is a template. When you publish your site, you
                    can connect it to an email service or keep it as a mailto
                    link.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Name</label>
                      <Input
                        placeholder="Your name"
                        className="rounded-2xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        placeholder="you@email.com"
                        className="rounded-2xl"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea
                        placeholder="Tell me what you’re building…"
                        className="min-h-[120px] rounded-2xl"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                    <Button
                      className="rounded-2xl"
                      onClick={() => {
                        alert(
                          "Tip: Connect this form to your email provider when you deploy."
                        );
                      }}
                      type="button"
                    >
                      Send <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button
                      variant="secondary"
                      className="rounded-2xl"
                      onClick={() => {
                        window.location.href =
                          "mailto:youremail@example.com?subject=Website%20Inquiry%20-%20Justin%20Griswold";
                      }}
                      type="button"
                    >
                      Use email instead <Mail className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <footer className="mt-12 border-t pt-8 text-sm text-muted-foreground">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                © {new Date().getFullYear()} Justin Griswold • Do It Afraid
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="hover:text-foreground"
                  onClick={() => scrollTo("home")}
                  type="button"
                >
                  Back to top
                </button>
                <span className="opacity-40">•</span>
                <button
                  className="hover:text-foreground"
                  onClick={() => {
                    alert(
                      "Tip: Add a privacy policy link if you collect form submissions."
                    );
                  }}
                  type="button"
                >
                  Privacy
                </button>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}

/* Components */

function Stat({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-3xl border p-5">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-xl font-semibold">{value}</div>
      <div className="mt-2 text-xs text-muted-foreground">{note}</div>
    </div>
  );
}

function Bullet({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-2xl bg-foreground/10">
        {icon}
      </div>
      <div className="text-muted-foreground">{children}</div>
    </li>
  );
}

function InfoCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  return (
    <Card className="rounded-3xl">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold">{title}</div>
            <div className="mt-1 text-xs text-muted-foreground">
              A quick snapshot.
            </div>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-foreground/10">
            {icon}
          </div>
        </div>
        <ul className="mt-4 space-y-2 text-sm">
          {items.map((t) => (
            <li key={t} className="flex gap-2 text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function CaseStudy({
  icon,
  title,
  subtitle,
  problem,
  design,
  outcomes,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  problem: string[];
  design: string[];
  outcomes: string[];
}) {
  return (
    <Card className="rounded-3xl">
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-foreground/10">
            {icon}
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          <SectionBlock title="The problem" items={problem} />
          <SectionBlock title="Design" items={design} />
          <SectionBlock title="Outcomes" items={outcomes} />
        </div>
      </CardContent>
    </Card>
  );
}

function SectionBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border bg-background p-4">
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-2 space-y-2 text-sm">
        {items.map((t) => (
          <li key={t} className="flex gap-2 text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step({
  title,
  icon,
  text,
}: {
  title: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="rounded-3xl border p-5">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-foreground/10">
          {icon}
        </div>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{text}</div>
    </div>
  );
}

function Mini({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border p-5">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((t) => (
          <span
            key={t}
            className="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SafetyCard({
  title,
  icon,
  body,
}: {
  title: string;
  icon: React.ReactNode;
  body: string;
}) {
  return (
    <div className="rounded-3xl border p-6">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-foreground/10">
          {icon}
        </div>
        <div className="text-sm font-semibold">{title}</div>
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{body}</div>
    </div>
  );
}

function Service({
  title,
  icon,
  bullets,
}: {
  title: string;
  icon: React.ReactNode;
  bullets: string[];
}) {
  return (
    <Card className="rounded-3xl">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-semibold">{title}</div>
            <div className="mt-1 text-xs text-muted-foreground">
              Practical, flexible, and scalable.
            </div>
          </div>
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-foreground/10">
            {icon}
          </div>
        </div>
        <ul className="mt-4 space-y-2 text-sm">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2 text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/40" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

