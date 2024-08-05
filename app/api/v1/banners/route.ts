import { banners } from '@/public/constants/mock'

export async function GET() {
  return Response.json({ banners: banners })
}
