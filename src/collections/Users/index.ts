import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email'],
    useAsTitle: 'name',
  },
  // auth: true,
  auth: {
    disableLocalStrategy: true,
    strategies: [
      {
        name: 'custom-strategy',
        // Sử dụng custom strategy thay vì default,
        authenticate: async ({ payload, headers }) => {
          const usersQuery = await payload.find({
            collection: 'users',
            where: {
              code: {
                equals: headers.get('code'),
              },
              secret: {
                equals: headers.get('secret'),
              },
            },
          })
          console.log('usersQuery:', usersQuery)
          return {
            user: null,
            responseHeaders: new Headers({
              'some-header': 'my header value',
            }),
          }
        },
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: true,
}
