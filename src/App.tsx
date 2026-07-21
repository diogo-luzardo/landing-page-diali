/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Procedures from './components/Procedures';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingContacts from './components/FloatingContacts';

export default function App() {
  return (
    <div className="min-h-screen bg-diali-cream selection:bg-diali-gold selection:text-white">
      <Navbar />
      <Hero />
      <Concept />
      <Procedures />
      <Results />
      <Testimonials />
      <Footer />
      <FloatingContacts />
    </div>
  );
}
