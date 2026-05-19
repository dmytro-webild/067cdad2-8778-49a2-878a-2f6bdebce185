"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Rocket, ShieldCheck, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="aurora"
        cardStyle="gradient-mesh"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Fresh Digital"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "plain",
      }}
      title="Digital Excellence, Delivered."
      description="Fresh Digital is a premium web development agency building future-proof experiences. We turn bold ideas into high-performance digital products."
      buttons={[
        {
          text: "Get Started",
          href: "#contact",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=5j8v00"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "asset://hero-avatar-1",
          alt: "Team member one",
        },
        {
          src: "asset://hero-avatar-2",
          alt: "Team member two",
        },
        {
          src: "asset://hero-avatar-3",
          alt: "Team member three",
        },
        {
          src: "asset://hero-avatar-4",
          alt: "Team member four",
        },
        {
          src: "asset://hero-avatar-5",
          alt: "Team member five",
        },
      ]}
      avatarText="Trusted by 500+ professionals worldwide"
      marqueeItems={[
        {
          type: "text",
          text: "Next.js Development",
        },
        {
          type: "text",
          text: "Cloud Architecture",
        },
        {
          type: "text",
          text: "UI/UX Design",
        },
        {
          type: "text",
          text: "Strategy Consulting",
        },
        {
          type: "text",
          text: "Scalable SaaS",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Why Choose Us?"
      description={[
        "At Fresh Digital, we don't just build sites; we craft digital ecosystems.",
        "Our expertise spans across modern stacks, bespoke UI/UX, and robust scaling solutions.",
        "Your vision is the backbone of our creative process.",
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNineteen
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          tag: "Development",
          title: "Web Application",
          subtitle: "SaaS & Platforms",
          description: "High-performance applications built on modern frameworks.",
          imageSrc: "asset://svc-dev",
        },
        {
          tag: "Design",
          title: "UI/UX Design",
          subtitle: "Human-Centric",
          description: "Award-winning interfaces that captivate users and convert.",
          imageSrc: "asset://svc-design",
        },
        {
          tag: "Strategy",
          title: "Digital Transformation",
          subtitle: "Business Scale",
          description: "Consulting and technical roadmap development for modern growth.",
          imageSrc: "asset://svc-strategy",
        },
      ]}
      title="Premium Services"
      description="End-to-end development services to scale your business."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Rocket,
          title: "Projects Delivered",
          value: "150+",
        },
        {
          id: "m2",
          icon: ShieldCheck,
          title: "Success Rate",
          value: "99%",
        },
        {
          id: "m3",
          icon: Users,
          title: "Happy Clients",
          value: "100+",
        },
      ]}
      title="Proven Results"
      description="Our numbers speak for the impact we create."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah Jenkins",
          date: "Jan 2024",
          title: "CEO, TechFlow",
          quote: "Fresh Digital transformed our product architecture. Absolutely professional.",
          tag: "Development",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h7nqak",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=5j8v00",
          imageAlt: "professional headshot executive",
        },
        {
          id: "2",
          name: "Michael Chen",
          date: "Feb 2024",
          title: "Founder, LabZ",
          quote: "Exceptional UI design. Our conversion increased by 40% immediately.",
          tag: "Design",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=fknq2n",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=642yu5",
          imageAlt: "professional headshot executive",
        },
        {
          id: "3",
          name: "Elena Rodriguez",
          date: "Mar 2024",
          title: "Head of Product",
          quote: "The team's technical depth is truly impressive. They hit every deadline.",
          tag: "Strategy",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=oslagi",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=souf7u",
          imageAlt: "professional headshot executive",
        },
        {
          id: "4",
          name: "David Kim",
          date: "Apr 2024",
          title: "Product Owner",
          quote: "Incredible communication and execution throughout the entire development cycle.",
          tag: "Development",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zhgoyc",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h7nqak",
          imageAlt: "professional headshot executive",
        },
        {
          id: "5",
          name: "Maya Varma",
          date: "May 2024",
          title: "Marketing Director",
          quote: "They understand business goals, not just code. Fantastic partner.",
          tag: "Design",
          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=zhgoyc",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=h7nqak",
          imageAlt: "professional headshot executive",
        },
      ]}
      title="Client Success"
      description="We are proud to be the trusted partner for brands across the globe."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Microsoft",
        "Google",
        "Amazon",
        "Tesla",
        "NVIDIA",
        "Salesforce",
        "Atlassian",
      ]}
      title="Trusted Partners"
      description="Working with industry leaders."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "What is your typical project timeline?",
          content: "Depending on scope, small projects take 4-6 weeks, larger enterprise products 3+ months.",
        },
        {
          id: "f2",
          title: "Do you offer maintenance?",
          content: "Yes, we provide ongoing support and maintenance packages tailored to your needs.",
        },
        {
          id: "f3",
          title: "What technologies do you use?",
          content: "We primarily work with Next.js, React, Node.js, and modern cloud infrastructures like AWS.",
        },
      ]}
      title="Frequently Asked"
      description="Common questions regarding our process."
      faqsAnimation="blur-reveal"
      imageSrc="asset://faq-img"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Start Your Project"
      description="Let's build something extraordinary together. Fill out the form to get a custom proposal."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help you?",
        rows: 4,
      }}
      imageSrc="asset://contact-img"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Fresh Digital"
      copyrightText="© 2025 Fresh Digital Agency. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
