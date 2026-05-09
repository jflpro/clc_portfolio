import Link from 'next/link'

const footerLinks = [
  { href: '/home', label: 'Accueil' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/animale', label: 'Communication animale' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-stone-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div>
            {/* TODO: Remplacer par votre nom de marque complet si différent */}
            <p className="font-serif text-xl tracking-[0.2em] text-charcoal mb-1">CLC</p>
            <p className="text-stone-400 text-xs font-light tracking-wide">
              Peinture sur vitrines · Créations artistiques
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation pied de page">
            <ul className="flex flex-wrap gap-8" role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs tracking-wider uppercase text-stone-400 hover:text-charcoal transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            {/* TODO: Remplacer par votre URL Instagram */}
            <a
              href="https://instagram.com/VOTRE_COMPTE_INSTAGRAM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-wider uppercase text-stone-400 hover:text-charcoal transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-50 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-stone-300 text-xs">
            {/* TODO: Remplacer par votre nom complet si souhaité */}
            &copy; {new Date().getFullYear()} CLC — Tous droits réservés
          </p>
          <p className="text-stone-200 text-xs">
            Peinture · Art · Sensibilité
          </p>
        </div>
      </div>
    </footer>
  )
}
