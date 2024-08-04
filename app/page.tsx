import RightArrow from '@/public/icon/right-arrow.svg'
import Image from 'next/image'

// TODO: 응답 데이터로부터 가져오도록 수정
const startColor = '#eec695'
const endColor = '#ffffff'
const fontColor = '#ff6600'
const imageLink = 'https://picsum.photos/400/400'

const Home = () => {
  return (
    <div>
      {/* 상단 영역 */}
      <div className="pt-[8px]">
        <div
          style={{
            background: `linear-gradient(-59deg, ${startColor}, ${endColor})`,
          }}
          className="rounded-[20px] relative drop-shadow-lg"
        >
          <div className="w-[342px] h-[168px] pt-[38px] pl-[27px] pr-[56px]">
            <div className="font-extrabold text-[22px] tracking-[-0.55px] leading-[30px]">
              우리 동네 보청기 판매점 정보를
              <br />다 모았어요
            </div>
            <div className="flex items-center pt-[8px] text-GRAY tracking-[-0.55px] leading-[30px] text-[14px] font-semibold">
              집 근처 보청기 판매점 찾는 방법
              <div className="pl-[6.75px]">
                <RightArrow width="4.91" height="8.49" fill="#767676" />
              </div>
            </div>
            <div className="w-[121px] h-[68px] overflow-hidden absolute bottom-[21px] right-[17px]">
              <Image src={imageLink} alt="banner" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>

      {/* 중간 텍스트 영역 */}
      <div className="h-[53px] mt-[25px] flex items-center">
        <Image src="/icon/home-marker.png" alt="home" width="53" height="53" />
        <div className="font-extrabold text-[22px] tracking-[-0.55px] leading-[34px]">
          우리 동네 <span className="text-GREEN">보청기 판매점</span> 찾기
        </div>
      </div>

      {/* 하단 영역 */}
      <div className="flex pt-[20px] gap-[20px] flex-col">
        {/* 위 영역 */}
        <div className="rounded-[20px] relative drop-shadow-lg bg-GREEN-50 w-full h-[124px]">
          <div className="flex items-center pt-[31px] pl-[33px]">
            <div className="text-[22px] tracking-[-0.55px] leading-[34px] w-[143px]">
              <span className="text-GREEN font-extrabold">지역별 판매점</span>
              <br />
              <div className="text-[18px] font-bold">검색하기</div>
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
        <div className="rounded-[20px] relative drop-shadow-lg bg-GREEN-20 w-full h-[124px]">
          <div className="flex items-center pt-[31px] pl-[33px]">
            <div className="text-[22px] tracking-[-0.55px] leading-[34px] w-[143px]">
              <span className="text-GREEN font-extrabold">브랜드 전문센터</span>
              <br />
              <div className="text-[18px] font-bold">검색하기</div>
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
