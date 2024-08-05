import { banners } from '@/public/constants/mock'

export async function GET() {
  console.log(
    '%c 🤩🤩🤩 영우의 로그 API 요청: >>>',
    'font-size: x-large; color: #bada55;',
    '',
    process.env.API_URL || process.env.NEXT_PUBLIC_API_URL,
  )
  return Response.json({ banners: banners })
}
