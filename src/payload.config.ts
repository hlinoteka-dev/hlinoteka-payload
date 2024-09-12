// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { cs } from 'payload/i18n/cs'
import { en } from 'payload/i18n/en'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Events } from './collections/Events'
import { Products } from './collections/Products'
import { Users } from './collections/Users'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Events, Products, Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  i18n: {
    supportedLanguages: { en, cs },
    fallbackLanguage: 'cs',
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
    connectOptions: {
      dbName: process.env.MONGODB_NAME || '',
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})
