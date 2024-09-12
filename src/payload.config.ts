// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Events } from './collections/Events'
import { Products } from './collections/Products'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Data } from './globals/Data'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      afterNavLinks: ['./payload/views/AccessView/NavLink'],
      views: {
        AccessView: {
          Component: './payload/views/AccessView/index',
          path: '/access',
          exact: true,
        }
      }
    }
  },
  collections: [Events, Products, Users, Media],
  globals: [Data],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
