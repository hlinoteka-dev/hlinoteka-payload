import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: {
      cs: 'Produkt',
      en: 'Product',
    },
    plural: {
      cs: 'Produkty',
      en: 'Products',
    },
  },
  admin: {
    useAsTitle: 'title',
    group: 'Hlinoteka',
  },
  fields: [
    {
      name: 'title',
      label: {
        cs: 'Název',
        en: 'Title',
      },
      type: 'text',
      required: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'price',
          label: {
            cs: 'Cena',
            en: 'Price',
          },
          type: 'number',
          admin: {
            width: '33%',
          },
          required: true,
        },
        {
          name: 'width',
          label: {
            cs: 'Šířka',
            en: 'Width',
          },
          type: 'number',
          admin: {
            width: '33%',
          },
          required: true,
        },
        {
          name: 'height',
          label: {
            cs: 'Výška',
            en: 'Height',
          },
          type: 'number',
          admin: {
            width: '33%',
          },
          required: true,
        },
      ],
    },
    {
      name: 'category',
      label: {
        cs: 'Kategorie',
        en: 'Category',
      },
      type: 'select',
      options: [
        {
          label: {
            cs: 'Šálky',
            en: 'Cups',
          },
          value: 'cups',
        },
        {
          label: {
            cs: 'Miska',
            en: 'Plates',
          },
          value: 'plates',
        },
        {
          label: {
            cs: 'Ostatní',
            en: 'Other',
          },
          value: 'other',
        },
        {
          label: {
            cs: 'Skulptury',
            en: 'Sculptures',
          },
          value: 'sculptures',
        },
        {
          label: {
            cs: 'Misky',
            en: 'Bowls',
          },
          value: 'bowls',
        },
        {
          label: {
            cs: 'Vázy',
            en: 'Vases',
          },
          value: 'vases',
        },
        {
          label: {
            cs: 'Popelníčky',
            en: 'Ashtrays',
          },
          value: 'ashtrays',
        },
      ],
      hasMany: true,
      required: true,
    },
    {
      name: 'image',
      label: {
        cs: 'Obrázek',
        en: 'Image',
      },
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
      required: true,
    },
    {
      name: 'author',
      label: {
        cs: 'Autor',
        en: 'Author',
      },
      type: 'select',
      options: [
        {
          label: 'Borek Smažinka',
          value: 'borek-smazinka',
        },
        {
          label: 'Johana Hnízdilová',
          value: 'johana-hnizdilova',
        },
        {
          label: 'Karolína Kučerová',
          value: 'karolina-kucerova',
        },
        {
          label: 'Markéta Špundová',
          value: 'marketa-spundova',
        },
      ],
      admin: {
        position: 'sidebar',
      },
      required: true,
    },
    {
      type: 'row',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'top',
          label: {
            cs: 'Top produkt',
            en: 'Top Product',
          },
          type: 'checkbox',
        },
        {
          name: 'new',
          label: {
            cs: 'Novinka',
            en: 'New',
          },
          type: 'checkbox',
        },
      ],
    },
  ],
}
