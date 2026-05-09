'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactContent() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    /*
      TODO: Brancher votre solution d'envoi.
      Option recommandée — Formspree (gratuit, sans backend) :

      1. Créer un compte sur formspree.io
      2. Créer un nouveau formulaire → copier l'ID
      3. Remplacer VOTRE_FORMSPREE_ID ci-dessous

      const res = await fetch('https://formspree.io/f/VOTRE_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    */

    // Simulation temporaire — supprimer quand Formspree est branché
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-40 pb-32 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 md:gap-32 items-start">
          {/* Colonne gauche — intro + coordonnées */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs tracking-[0.28em] uppercase text-stone-400 mb-6">
              Contact
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-charcoal leading-[1.1] mb-12">
              Parlons de
              <br />
              votre projet
            </h1>

            <div className="space-y-8 text-sm font-light">
              {/* Email */}
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-1.5">
                  Email
                </p>
                {/* TODO: Remplacer par votre adresse email */}
                <a
                  href="mailto:votre@email.com"
                  className="text-stone-600 hover:text-charcoal transition-colors duration-300"
                >
                  votre@email.com
                </a>
              </div>

              {/* Téléphone */}
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-1.5">
                  Téléphone
                </p>
                {/* TODO: Remplacer par votre numéro de téléphone */}
                <a
                  href="tel:+33XXXXXXXXX"
                  className="text-stone-600 hover:text-charcoal transition-colors duration-300"
                >
                  +33 X XX XX XX XX
                </a>
              </div>

              {/* Instagram */}
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-1.5">
                  Instagram
                </p>
                {/* TODO: Remplacer par votre compte Instagram */}
                <a
                  href="https://instagram.com/VOTRE_COMPTE_INSTAGRAM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-600 hover:text-charcoal transition-colors duration-300"
                >
                  @votre_compte
                </a>
              </div>
            </div>

            {/* Note de délai de réponse */}
            <p className="mt-12 text-stone-400 text-xs font-light leading-relaxed max-w-xs">
              Je réponds généralement sous 24 à 48h. N&apos;hésitez pas à me
              décrire votre projet en détail.
            </p>
          </motion.div>

          {/* Colonne droite — formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {status === 'sent' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="pt-8"
              >
                <p className="font-serif text-3xl text-charcoal mb-4">
                  Message envoyé.
                </p>
                <p className="text-stone-500 font-light">
                  Merci pour votre message. Je vous répondrai très prochainement.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-xs tracking-[0.2em] uppercase text-stone-400 border-b border-stone-300 pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors duration-300"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-10"
                noValidate
              >
                {/* Nom */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-[0.2em] uppercase text-stone-400 mb-2.5"
                  >
                    Nom <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full border-b border-stone-200 py-3 text-sm text-charcoal placeholder:text-stone-300 focus:outline-none focus:border-charcoal transition-colors duration-300 bg-transparent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-[0.2em] uppercase text-stone-400 mb-2.5"
                  >
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="votre@email.com"
                    className="w-full border-b border-stone-200 py-3 text-sm text-charcoal placeholder:text-stone-300 focus:outline-none focus:border-charcoal transition-colors duration-300 bg-transparent"
                  />
                </div>

                {/* Sujet */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs tracking-[0.2em] uppercase text-stone-400 mb-2.5"
                  >
                    Sujet
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Objet de votre demande"
                    className="w-full border-b border-stone-200 py-3 text-sm text-charcoal placeholder:text-stone-300 focus:outline-none focus:border-charcoal transition-colors duration-300 bg-transparent"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-[0.2em] uppercase text-stone-400 mb-2.5"
                  >
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, votre espace, vos envies..."
                    className="w-full border-b border-stone-200 py-3 text-sm text-charcoal placeholder:text-stone-300 focus:outline-none focus:border-charcoal transition-colors duration-300 bg-transparent resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-4 bg-charcoal text-white text-xs tracking-[0.2em] uppercase hover:bg-stone-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-wait"
                >
                  {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>

                {status === 'error' && (
                  <p className="text-center text-red-400 text-xs tracking-wide" role="alert">
                    Une erreur s&apos;est produite. Veuillez réessayer ou me
                    contacter directement par email.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
