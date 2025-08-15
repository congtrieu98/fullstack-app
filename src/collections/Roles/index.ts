import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const Roles: CollectionConfig = {
  slug: 'roles',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name'],
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
  ],
  timestamps: true,
}
