
import React, { useState } from 'react';
import {
  ServerIcon,
  MonitorIcon,
  ShoppingBagIcon,
  CodeIcon,
  SparklesIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  ZapIcon,
  ShieldIcon,
  HeadphonesIcon
} from './components/Icons';

// --- TYPES ---
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'managed-hosting',
    title: 'Managed Hosting',
    description: 'Από Shared μέχρι Dedicated & VPS. Δεν σας δίνουμε απλά χώρο· αναλαμβάνουμε το monitoring, τα updates, την ασφάλεια και τα καθημερινά backups, ώστε να κοιμάστε ήσυχοι.',
    icon: <ServerIcon />,
  },
  {
    id: 'eshops-b2b',
    title: 'E-shops & B2B',
    description: 'Δημιουργούμε ηλεκτρονικά καταστήματα που πουλάνε. Από retail (B2C) e-shops μέχρι σύνθετες πλατφόρμες χονδρικής (B2B) με custom τιμοκαταλόγους και πλήρη αυτοματοποίηση.',
    icon: <ShoppingBagIcon />,
  },
  {
    id: 'web-development',
    title: 'Custom Web Design',
    description: 'Κατασκευή ιστοσελίδων από το μηδέν. Είτε πρόκειται για WordPress είτε για custom λύσεις, εστιάζουμε στην ταχύτητα, το SEO και την εμπειρία του χρήστη.',
    icon: <MonitorIcon />,
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Chatbots',
    description: 'Ενσωμάτωση AI εργαλείων και έξυπνων Chatbots που μαθαίνουν την επιχείρησή σας, αυτοματοποιούν την εξυπηρέτηση πελατών και προσφέρουν προηγμένη ανάλυση.',
    icon: <SparklesIcon />,
  },
  {
    id: 'apps-automation',
    title: 'Custom Apps & ERP',
    description: 'Αυτοματοποιήστε τις manual διαδικασίες σας. Αναπτύσσουμε εφαρμογές που συνδέουν το e-shop σας με το ERP ή την αποθήκη σας σε πραγματικό χρόνο.',
    icon: <CodeIcon />,
  },
];

const PROJECTS = [
  {
    title: 'TolidisParts.gr',
    category: 'B2B E-commerce',
    image: 'https://raw.githubusercontent.com/dimitrisnimas/DimitrisNimas.gr/refs/heads/main/public/assets/images/projects/tolidisparts.png',
    description: 'B2B eshop με πλήρη διασύνδεση WooCommerce με ERP για αυτόματο συγχρονισμό αποθεμάτων και εξατομικευμένους τιμοκαταλόγους.',
    tags: ['Hosting', 'B2B', 'ERP', 'WooCommerce']
  },
  {
    title: 'Resenco.eu',
    category: 'Website',
    image: 'https://raw.githubusercontent.com/dimitrisnimas/DimitrisNimas.gr/refs/heads/main/public/assets/images/projects/resenco.png',
    description: 'Ιστοσελίδα για παροχή συμβουλετικών υπηρεσιών στις ανανεώσιμες πηγές ενέργειας.',
    tags: ['Hosting', 'WordPress']
  },
  {
    title: 'KUBIK Portal',
    category: 'Custom Software',
    image: 'https://raw.githubusercontent.com/dimitrisnimas/DimitrisNimas.gr/refs/heads/main/public/assets/images/projects/kubikportal.png',
    description: 'Ανάπτυξη custom dashboard για τη διαχείριση πελατών και υπηρεσιών.',
    tags: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    title: 'SEPAM.gr',
    category: 'NPO',
    image: 'https://raw.githubusercontent.com/dimitrisnimas/DimitrisNimas.gr/refs/heads/main/public/assets/images/projects/sepam.png',
    description: 'Ιστοσελίδα για ΜΚΟ για την προστασία του περιβάλλοντος στα Αντιχάσια.',
    tags: ['Hosting', 'WordPress']
  }
];

const SOCIALS: SocialLink[] = [
  { name: 'Instagram', href: 'https://instagram.com/kubik.digital', icon: <InstagramIcon /> },
  { name: 'Facebook', href: 'https://facebook.com/kubik.gr', icon: <FacebookIcon /> },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/kubik-digital/', icon: <LinkedinIcon /> },
];

const LOGO_URL = 'https://kubik.gr/public-images/Kubik-Black.png';

const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-zinc-100">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center">
        <a href="/" aria-label="KUBIK Home">
          <img src={LOGO_URL} alt="KUBIK Logo" className="h-10 w-auto object-contain grayscale brightness-0" />
        </a>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#services" className="text-sm font-medium hover:text-zinc-500 transition-colors">Υπηρεσίες</a>
        <a href="#works" className="text-sm font-medium hover:text-zinc-500 transition-colors">Έργα</a>
        <a href="#why-kubik" className="text-sm font-medium hover:text-zinc-500 transition-colors">Γιατί εμάς</a>
        <a href="#faq" className="text-sm font-medium hover:text-zinc-500 transition-colors">FAQ</a>
        <a href="#contact" className="text-sm font-medium hover:text-zinc-500 transition-colors">Επικοινωνία</a>
      </div>
    </div>
  </nav>
);

import HeroBackground from './components/HeroBackground';

const Hero: React.FC = () => (
  <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
    <HeroBackground />
    <div className="relative z-10 max-w-5xl mx-auto text-center">
      <div className="inline-block px-4 py-1 border border-zinc-200 rounded-full text-xs font-medium mb-6 animate-pulse bg-white/50 backdrop-blur-sm">
        Direct. Technical. Personal.
      </div>
      <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1] text-balance">
        Ψηφιακή υποδομή <br />
        <span className="text-zinc-400">με προσωπική φροντίδα.</span>
      </h1>
      <p className="text-lg md:text-2xl text-zinc-600 max-w-3xl mx-auto mb-10 leading-relaxed text-balance font-light">
        Στην KUBIK δεν είστε άλλος ένας αριθμός σε ένα ticket system. Είμαστε ο τεχνικός σας συνεργάτης που εξασφαλίζει ότι το site, το hosting και το e-shop σας λειτουργούν αδιάλειπτα.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="mailto:info@kubik.gr" target="_blank" className="w-full sm:w-auto px-10 py-5 bg-black text-white rounded-full font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-2xl shadow-black/10">
          Ξεκινήστε τη συνεργασία
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
        </a>
      </div>
    </div>
  </section>
);



const ServiceSection: React.FC = () => (
  <section id="services" className="relative py-24 bg-white overflow-hidden">
    {/* Ambient Glows */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="mb-20 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Εξειδικευμένες Λύσεις</h2>
        <p className="text-zinc-500 max-w-2xl text-lg">Καλύπτουμε όλο το φάσμα της ψηφιακής σας παρουσίας, με έμφαση στις νέες τεχνολογίες.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {SERVICES.map((service, idx) => (
          <div key={service.id} className="flex flex-col gap-6 group p-6 rounded-3xl bg-white/60 backdrop-blur-sm border border-white/20 hover:bg-white/80 transition-all duration-500 hover:shadow-xl hover:shadow-zinc-200/40">
            <div className="w-fit">
              <div className="p-4 rounded-2xl bg-zinc-50 text-zinc-900 group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-sm border border-zinc-100">
                {service.icon}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
              <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WorksSection: React.FC = () => (
  <section id="works" className="relative py-24 bg-zinc-50 border-y border-zinc-100 overflow-hidden">
    {/* Ambient Glows for Works */}
    <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-zinc-200/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-multiply" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Επιλεγμένα Έργα</h2>
        <p className="text-zinc-500 max-w-xl">Πραγματικές λύσεις σε σύνθετα προβλήματα.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-white/50 shadow-xl shadow-zinc-200/60 hover:shadow-2xl hover:shadow-zinc-200/80 transition-all duration-700 group overflow-hidden flex flex-col h-full">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-6 left-6">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-black bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">{project.category}</span>
              </div>
            </div>
            <div className="p-8 md:p-10 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-zinc-600 transition-colors">{project.title}</h3>
                <div className="text-zinc-300 group-hover:text-black transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                </div>
              </div>
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 border border-zinc-100 px-3 py-1.5 rounded-lg bg-white/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyKubik: React.FC = () => (
  <section id="why-kubik" className="py-24 bg-zinc-900 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">Γιατί KUBIK;</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400">
                <ZapIcon />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Άμεση Επικοινωνία</h4>
                <p className="text-zinc-400 text-sm">Ξεχάστε τις απρόσωπες φόρμες. Μιλάτε απευθείας με τον developer που γνωρίζει το project σας.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400">
                <ShieldIcon />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Τεχνική Υπεροχή</h4>
                <p className="text-zinc-400 text-sm">Εξειδίκευση σε σύνθετα προβλήματα: ERP sync, B2B ροές, AI tools και speed optimization.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400">
                <HeadphonesIcon />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Προληπτική Υποστήριξη</h4>
                <p className="text-zinc-400 text-sm">Δεν περιμένουμε να χαλάσει κάτι για να το φτιάξουμε. Παρακολουθούμε τα συστήματά σας 24/7.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center">
          <div className="absolute w-40 h-40 border border-white/10 rounded-full animate-pulse-ring"></div>
          <div className="absolute w-64 h-64 border border-white/5 rounded-full animate-pulse-ring [animation-delay:1s]"></div>

          <div className="absolute animate-orbit">
            <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
          </div>

          {/* 3D Cube Animation Container */}
          <div className="cube-container relative z-10">
            <div className="cube">
              <div className="cube-face front"></div>
              <div className="cube-face back"></div>
              <div className="cube-face right"></div>
              <div className="cube-face left"></div>
              <div className="cube-face top"></div>
              <div className="cube-face bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    {
      q: "Τι είναι το hosting και γιατί το χρειάζομαι;",
      a: "Το hosting είναι ο χώρος σε έναν server όπου φιλοξενούνται τα αρχεία του site σας. Στην KUBIK προσφέρουμε πλήρως Managed Hosting: φροντίζουμε για ταχύτητα, ασφάλεια, ενημερώσεις και backups, ώστε εσείς να ασχολείστε μόνο με την επιχείρησή σας."
    },
    {
      q: "Τι πλεονεκτήματα έχει ένα B2B e-shop για τη χονδρική μου;",
      a: "Αυτοματοποιεί όλη τη διαδικασία της χονδρικής. Οι πελάτες σας βλέπουν τις δικές τους τιμές, κάνουν παραγγελίες online χωρίς τηλεφωνήματα και εσείς διαχειρίζεστε τιμοκαταλόγους, πιστωτικά όρια και ροές παραγγελιών πιο εύκολα και γρήγορα."
    },
    {
      q: "Μπορεί το e-shop μου να συνδεθεί με το ERP ή την αποθήκη μου;",
      a: "Ναι, και είναι ένα από τα δυνατά μας σημεία. Δημιουργούμε αξιόπιστες συνδέσεις ώστε αποθέματα, τιμές και παραγγελίες να συγχρονίζονται αυτόματα, εξοικονομώντας χρόνο και αποφεύγοντας λάθη."
    },
    {
      q: "Μπορείτε να αναλάβετε ένα site ή e-shop που ήδη έχω;",
      a: "Φυσικά. Αναλαμβάνουμε βελτιστοποίηση ταχύτητας, διόρθωση προβλημάτων, αναβάθμιση υποδομής ή μεταφορά σε πιο αξιόπιστο hosting — ακόμη κι αν το site δεν έχει κατασκευαστεί από εμάς."
    },
    {
      q: "Αναλαμβάνετε και τη συνεχή υποστήριξη μετά την παράδοση;",
      a: "Ναι. Μπορούμε να συνεχίσουμε τη συνεργασία με υποστήριξη και συντήρηση, προσαρμοσμένη στις πραγματικές ανάγκες σας — από απλές ενημερώσεις μέχρι ενεργή παρακολούθηση."
    },
    {
      q: "Μπορώ να ξεκινήσω μικρά και να μεγαλώσω αργότερα;",
      a: "Φυσικά. Οι λύσεις μας είναι σχεδιασμένες ώστε να κλιμακώνονται εύκολα. Ξεκινάτε με ό,τι χρειάζεστε σήμερα και επεκτείνεστε χωρίς να ξαναχτίζετε τα πάντα από την αρχή."
    },
    {
      q: "Τι γίνεται αν κάτι σταματήσει να λειτουργεί;",
      a: "Σε περίπτωση προβλήματος, γνωρίζετε ακριβώς ποιος το διαχειρίζεται. Δεν μιλάτε με call centers — μιλάτε απευθείας με τον άνθρωπο που έχει αναλάβει την υποδομή σας."
    },
    {
      q: "Πόσο γρήγορα μπορεί να υλοποιηθεί ένα project;",
      a: "Ο χρόνος υλοποίησης εξαρτάται από τις απαιτήσεις του project. Πριν ξεκινήσουμε, ορίζουμε ξεκάθαρα το πλάνο και τα στάδια, ώστε να γνωρίζετε από την αρχή τι να περιμένετε."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">Συχνές Ερωτήσεις</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-zinc-100 rounded-xl overflow-hidden self-start">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors ${openIdx === idx ? 'bg-zinc-50' : 'hover:bg-zinc-50/50'}`}
              >
                <span className="font-semibold text-zinc-900">{faq.q}</span>
                <span className={`transform transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
                </span>
              </button>
              {openIdx === idx && (
                <div className="px-6 py-5 bg-zinc-50/50 text-zinc-600 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA: React.FC = () => (
  <section id="contact" className="py-24 bg-zinc-50 border-t border-zinc-100">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Είμαστε έτοιμοι για το επόμενο βήμα σας</h2>
      <div className="flex flex-col items-center gap-8">
        <a href="mailto:info@kubik.gr" target="_blank" className="text-2xl md:text-4xl font-bold hover:text-zinc-400 transition-colors tracking-tight underline underline-offset-8">
          info@kubik.gr
        </a>
        <div className="flex justify-center space-x-12">
          {SOCIALS.map((social) => (
            <a key={social.name} href={social.href} target="_blank" className="flex flex-col items-center gap-3 group" aria-label={social.name}>
              <div className="p-4 bg-white rounded-full shadow-sm text-zinc-400 group-hover:text-black transition-all duration-300">
                {social.icon}
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 group-hover:text-black">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="py-12 bg-white border-t border-zinc-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <img src={LOGO_URL} alt="KUBIK Logo" className="h-6 w-auto grayscale brightness-0" />
      <p className="text-zinc-400 text-xs uppercase tracking-widest">© {new Date().getFullYear()} KUBIK.</p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-zinc-200">
      <Navbar />
      <main>
        <Hero />
        <ServiceSection />
        <WorksSection />
        <WhyKubik />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
