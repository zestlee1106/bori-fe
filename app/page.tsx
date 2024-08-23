import RightArrow from '@/public/icon/right-arrow.svg'
import Image from 'next/image'
import Banner from './components/basic/Banner'
import { getBanners } from '@/app/api/modules/banner'
import Link from 'next/link'

const fetchData = async () => {
  try {
    const { banners } = await getBanners()
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
      <div className="h-[5.3rem] mt-[1rem] flex items-center">
        <Image src="/icon/home-marker.png" alt="home" width="53" height="53" />
        <div className="font-extrabold text-[2.2rem] tracking-[-0.025em] leading-[3.4rem]">
          우리 동네 <span className="text-GREEN_800">보청기 판매점</span> 찾기
        </div>
      </div>

      <div className="flex pt-[2rem] gap-[2rem] flex-col">
        <HomeCard
          title="지역별 판매점"
          subTitle="검색하기"
          backgroundColor="bg-GREEN_400"
          iconSrc="/icon/map-search.png"
          link="/shop"
        />
        <HomeCard title="브랜드 전문센터" subTitle="검색하기" backgroundColor="bg-GREEN_300" iconSrc="/icon/find.png" />
      </div>
    </div>
  )
}

interface HomeCardProps {
  title: string
  subTitle: string
  backgroundColor: string
  iconSrc: string
  link?: string
}

const HomeCard = ({ title, subTitle, backgroundColor, iconSrc, link }: HomeCardProps) => {
  const renderCardContent = (
    <div className={`rounded-[2rem] relative shadow-CARD_SHADOW ${backgroundColor} w-full h-[12.4rem]`}>
      <div className="flex items-center pt-[3.1rem] pl-[3.3rem]">
        <div className="text-[2.2rem] tracking-[-0.025em] leading-[3.4rem] w-[14.3rem]">
          <div className="text-GREEN_800 font-extrabold">{title}</div>
          <div className="text-[1.8rem] font-bold pt-[0.2rem]">{subTitle}</div>
        </div>
        <div className="pl-[0.7rem]">
          <RightArrow width="6.14" height="10.61" fill="#2D5500" />
        </div>
      </div>
      <div className="absolute bottom-[1.3rem] right-[2.3rem]">
        <Image src={iconSrc} alt="icon" width="98" height="98" style={{ width: '9.8rem', height: '9.8rem' }} />
      </div>
    </div>
  )

  return link ? <Link href={link}>{renderCardContent}</Link> : <div>{renderCardContent}</div>
}

export default Home
