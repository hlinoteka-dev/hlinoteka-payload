import type { CollectionConfig } from 'payload'

const hourOptions = () => {
  const hours = []
  for (let i = 0; i < 24; i++) {
    hours.push({
      label: i.toString().padStart(2, '0'),
      value: i.toString().padStart(2, '0'),
    })
  }
  return hours
}

const minuteOptions = () => {
  const minutes = []
  for (let i = 0; i < 60; i++) {
    minutes.push({
      label: i.toString().padStart(2, '0'),
      value: i.toString().padStart(2, '0'),
    })
  }
  return minutes
}

export const Events: CollectionConfig = {
  slug: 'events',
  labels: {
    singular: {
      cs: 'Událost',
      en: 'Event',
    },
    plural: {
      cs: 'Události',
      en: 'Events',
    },
  },
  admin: {
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
      unique: true,
    },
    {
      type: 'row',
      fields: [
        {
          name: 'startingDate',
          label: {
            cs: 'Začátek',
            en: 'Starting date',
          },
          type: 'date',
          admin: {
            width: '50%',
          },
          required: true,
        },
        {
          name: 'endingDate',
          label: {
            cs: 'Konec',
            en: 'Ending date',
          },
          type: 'date',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'startingTimeH',
          label: {
            cs: 'Začátek (hodina)',
            en: 'Start (hour)',
          },
          type: 'select',
          options: hourOptions(),
          admin: {
            width: '25%',
          },
        },
        {
          name: 'startingTimeM',
          label: {
            cs: 'Začátek (minuta)',
            en: 'Start (minute)',
          },
          type: 'select',
          options: minuteOptions(),
          admin: {
            width: '25%',
          },
        },
        {
          name: 'endingTimeH',
          label: {
            cs: 'Konec (hodina)',
            en: 'End (hour)',
          },
          type: 'select',
          options: hourOptions(),
          admin: {
            width: '25%',
          },
        },
        {
          name: 'endingTimeM',
          label: {
            cs: 'Konec (minuta)',
            en: 'End (minute)',
          },
          type: 'select',
          options: minuteOptions(),
          admin: {
            width: '25%',
          },
        },
      ],
    },

    {
      name: 'description',
      label: {
        cs: 'Popis',
        en: 'Description',
      },
      type: 'textarea',
    },
    {
      name: 'url',
      label: {
        cs: 'URL',
        en: 'URL',
      },
      type: 'text',
    },
    {
      name: 'image',
      label: {
        cs: 'Obrázek',
        en: 'Image(s)',
      },
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: 'enabled',
      label: {
        cs: 'Aktivní',
        en: 'Enabled',
      },
      type: 'checkbox',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'author',
      label: {
        cs: 'Autor',
        en: 'Author',
      },
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
