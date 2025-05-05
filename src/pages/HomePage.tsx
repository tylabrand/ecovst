import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ValueProposition } from '../components/sections/ValueProposition';
import { ServicesOverview } from '../components/sections/ServicesOverview';
import { AboutUs } from '../components/sections/AboutUs';
import { FeaturedProducts } from '../components/sections/FeaturedProducts';
import { Testimonials } from '../components/sections/Testimonials';
import { LatestBlogPosts } from '../components/sections/LatestBlogPosts';
import { ClientLogos } from '../components/sections/ClientLogos';
import { ContactSection } from '../components/sections/ContactSection';
import { CTABanner } from '../components/sections/CTABanner';

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ValueProposition />
      <ServicesOverview />
      <AboutUs />
      <FeaturedProducts />
      <Testimonials />
      <LatestBlogPosts />
      <ClientLogos />
      <CTABanner />
      <ContactSection />
    </main>
  );
};