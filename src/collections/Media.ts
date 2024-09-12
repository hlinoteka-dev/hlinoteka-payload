import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: {
      cs: 'Média',
      en: 'Media',
    },
    plural: {
      cs: 'Média',
      en: 'Media',
    },
  },
  access: {
    read: () => true,
  },
  admin: {
    group: 'Hlinoteka'
  },
  fields: [
    {
      name: 'alt',
      label: {
        cs: 'Alternativní text',
        en: 'Alternative text',
      },
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
