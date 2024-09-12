import type { GlobalConfig } from 'payload'

export const Data: GlobalConfig = {
    slug: 'data',
    typescript: {
        interface: 'Data',
    },
    graphQL: {
        name: 'Data',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            type: 'row',
            fields: [
                {
                    name: 'dailyOrders',
                    type: 'number',
                    defaultValue: 0,
                },
            ],
        },
    ],
}
