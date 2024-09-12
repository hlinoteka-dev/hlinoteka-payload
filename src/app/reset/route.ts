import configPromise from '@payload-config'
import { getPayload } from 'payload'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const GET = async (request: NextRequest): Promise<Response> => {
  const secret = request.nextUrl.searchParams.get('secret')
  if (!secret || secret !== process.env.NEXT_PRIVATE_REVALIDATION_KEY) {
    // Do not indicate that the revalidation key is incorrect in the response
    // This will protect this API route from being exploited
    return new Response('Invalid request', { status: 400 })
  }

  const payload = await getPayload({
    config: configPromise,
  })

  await payload.updateGlobal({
    slug: 'data',
    data: {
      dailyOrders: 0,
    }
  })

  return NextResponse.json({ now: Date.now(), message: 'Data reset to 0' })
}
