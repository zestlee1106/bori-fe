import RightArrow from '@/public/icon/right-arrow.svg'
import Image from 'next/image'
import Banner from './components/basic/Banner'
import { getBanners } from '@/app/api/modules/banner'

const fetchData = async () => {
  try {
    const { banners } = await getBanners()
    console.log('🧡💛💙 영우의 로그 => banners', banners)
    return banners
  } catch (e) {
    return []
  }
}

const Home = async () => {
  const banners = await fetchData()

  return (
    <div>
      <Banner banners={banners} />

      {/* 중간 텍스트 영역 */}
      <div className="h-[53px] mt-[25px] flex items-center">
        <Image src="/icon/home-marker.png" alt="home" width="53" height="53" />
        <div className="font-extrabold text-[22px] tracking-[-0.55px] leading-[34px]">
          우리 동네 <span className="text-GREEN_800">보청기 판매점</span> 찾기
        </div>
      </div>

      {/* 하단 영역 */}
      <div className="flex pt-[20px] gap-[20px] flex-col">
        {/* 위 영역 */}
        <div className="rounded-[20px] relative drop-shadow-lg bg-GREEN_400 w-full h-[124px]">
          <div className="flex items-center pt-[31px] pl-[33px]">
            <div className="text-[22px] tracking-[-0.55px] leading-[34px] w-[143px]">
              <div className="text-GREEN_800 font-extrabold">지역별 판매점</div>
              <div className="text-[18px] font-bold pt-[2px]">검색하기</div>
            </div>
            <div className="pl-[7px]">
              <RightArrow width="6.14" height="10.61" fill="#2D5500" />
            </div>
          </div>
          <div className="absolute bottom-[13px] right-[23px]">
            <Image src="/icon/map-search.png" alt="home" width="98" height="98" />
          </div>
        </div>

        {/* 아래 영역 */}
        <div className="rounded-[20px] relative drop-shadow-lg bg-GREEN_300 w-full h-[124px]">
          <div className="flex items-center pt-[31px] pl-[33px]">
            <div className="text-[22px] tracking-[-0.55px] leading-[34px] w-[143px]">
              <div className="text-GREEN_800 font-extrabold">브랜드 전문센터</div>
              <div className="text-[18px] font-bold pt-[2px]">검색하기</div>
            </div>
            <div className="pl-[7px]">
              <RightArrow width="6.14" height="10.61" fill="#2D5500" />
            </div>
          </div>
          <div className="absolute bottom-[13px] right-[23px]">
            <Image src="/icon/find.png" alt="home" width="98" height="98" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
