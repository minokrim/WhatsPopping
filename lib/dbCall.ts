import { NextRequest } from 'next/server'
import { createClient } from './dbConfig'

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  return Response.json({ user })
}
