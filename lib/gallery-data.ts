export type GalleryCategory = 'vitrines' | 'oeuvres' | 'animale' | 'autres'

export interface GalleryItem {
  id: string
  category: GalleryCategory
  src: string
  alt: string
  title?: string
  description?: string
}

// TODO: Remplacer tous les items par vos vraies images
// Structure des fichiers à créer dans /public/images/gallery/
//   vitrines/  → photos de vos vitrines réalisées
//   oeuvres/   → vos créations personnelles
//   animale/   → visuels liés à la communication animale
//   autres/    → toutes autres créations

export const galleryItems: GalleryItem[] = [
  // --- Vitrines ---
  {
    id: 'v1',
    category: 'vitrines',
    src: '/images/gallery/vitrines/v1.jpg',
    alt: 'Vitrine commerciale',
    title: 'Vitrine 1',
  },
  {
    id: 'v2',
    category: 'vitrines',
    src: '/images/gallery/vitrines/v2.jpg',
    alt: 'Vitrine commerciale 2',
    title: 'Vitrine 2',
  },
  {
    id: 'v3',
    category: 'vitrines',
    src: '/images/gallery/vitrines/v3.jpg',
    alt: 'Vitrine commerciale 3',
    title: 'Vitrine 3',
  },

  {
    id: 'v4',
    category: 'vitrines',
    src: '/images/gallery/vitrines/v4.png',
    alt: 'Vitrine commerciale 4',
    title: 'Vitrine 4',
    description: 'Création vitrine',
  },
  {
    id: 'v5',
    category: 'vitrines',
    src: '/images/gallery/vitrines/v5.png',
    alt: 'Vitrine commerciale 5',
    title: 'Vitrine 5',
    description: 'Création vitrine',
  },
  {
    id: 'v6',
    category: 'vitrines',
    src: '/images/gallery/vitrines/v6.png',
    alt: 'Vitrine commerciale 6',
    title: 'Vitrine 6',
    description: 'Création vitrine',
  },

  {
    id: 'v7',
    category: 'vitrines',
    src: '/images/gallery/vitrines/v7.png',
    alt: 'Vitrine commerciale 7',
    title: 'Vitrine 7',
  },
  {
    id: 'v8',
    category: 'vitrines',
    src: '/images/gallery/vitrines/v8.png',
    alt: 'Vitrine commerciale 8',
    title: 'Vitrine 8',
  },
  {
    id: 'v9',
    category: 'vitrines',
    src: '/images/gallery/vitrines/v9.png',
    alt: 'Vitrine commerciale 9',
    title: 'Vitrine 9',
  },

  // --- Œuvres personnelles ---
  {
    id: 'o1',
    category: 'oeuvres',
    src: '/images/gallery/oeuvres/o1.jpg',
    alt: 'TODO: Description œuvre personnelle 1',
    title: 'Œuvre 1',
  },
  {
    id: 'o2',
    category: 'oeuvres',
    src: '/images/gallery/oeuvres/o2.jpg',
    alt: 'TODO: Description œuvre personnelle 2',
    title: 'Œuvre 2',
  },
  {
    id: 'o3',
    category: 'oeuvres',
    src: '/images/gallery/oeuvres/o3.jpg',
    alt: 'TODO: Description œuvre personnelle 3',
    title: 'Œuvre 3',
  },

  // --- Communication animale ---
  {
    id: 'a1',
    category: 'animale',
    src: '/images/gallery/animale/a1.jpg',
    alt: 'TODO: Description visuel communication animale 1',
    title: 'Communication 1',
  },
  {
    id: 'a2',
    category: 'animale',
    src: '/images/gallery/animale/a2.jpg',
    alt: 'TODO: Description visuel communication animale 2',
    title: 'Communication 2',
  },

  // --- Autres créations ---
  {
    id: 'au1',
    category: 'autres',
    src: '/images/gallery/autres/au1.jpg',
    alt: 'TODO: Description autre création 1',
    title: 'Création 1',
  },
  {
    id: 'au2',
    category: 'autres',
    src: '/images/gallery/autres/au2.jpg',
    alt: 'TODO: Description autre création 2',
    title: 'Création 2',
  },
]

export const galleryCategories = [
  { key: 'all' as const, label: 'Tout' },
  { key: 'vitrines' as GalleryCategory, label: 'Vitrines' },
  { key: 'oeuvres' as GalleryCategory, label: 'Œuvres personnelles' },
  { key: 'animale' as GalleryCategory, label: 'Communication animale' },
  { key: 'autres' as GalleryCategory, label: 'Autres créations' },
]
