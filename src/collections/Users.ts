import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: {
      cs: 'Uživatel',
      en: 'User',
    },
    plural: {
      cs: 'Uživatelé',
      en: 'Users',
    },
  },
  admin: {
    useAsTitle: 'email',
    group: 'Admin'
  },
  auth: true,
  fields: [],
}
