import { Banner } from '@/types/banner'
import { getData } from '.'

interface BannerResponse {
  banners: Banner[]
}

export const getBanners = () => {
  return getData<BannerResponse>('/api/v1/banners')
}
