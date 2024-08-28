import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'title',
        group: 'Hlinoteka'
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'price',
                    type: 'number',
                    required: true,
                },
                {
                    name: 'width',
                    type: 'number',
                    required: true,
                },
                {
                    name: 'height',
                    type: 'number',
                    required: true,
                },
            ]
        },
        {
            name: 'category',
            type: 'select',
            options: [
                {
                    label: 'Cups',
                    value: 'cups',
                },
                {
                    label: 'Plates',
                    value: 'plates',
                },
                {
                    label: 'Other',
                    value: 'other',
                },
                {
                    label: 'Sculptures',
                    value: 'sculptures',
                },
                {
                    label: 'Bows',
                    value: 'bowls',
                },
                {
                    label: 'Vases',
                    value: 'vases',
                },
                {
                    label: 'Ashtrays',
                    value: 'ashtrays',
                }
            ],
            hasMany: true,
            required: true,
        },
        {
            name: 'image',
            label: 'Image(s)',
            type: 'upload',
            relationTo: 'media',
            hasMany: true,
            required: true,
        },
        {
            name: 'author',
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
                }
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
                    type: 'checkbox',
                    label: 'Top Product',
                },
                {
                    name: 'new',
                    type: 'checkbox',
                    label: 'New Product',
                },
            ]
        },
    ],
}
