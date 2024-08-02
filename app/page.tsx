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
          className="rounded-[20px] relative"
        >
          <div className="w-[342px] h-[168px] pt-[38px] pl-[27px] pr-[56px]">
            <div className="font-bold text-[22px] tracking-[-0.55px] leading-[30px]">
              우리 동네{' '}
              <span
                style={{
                  color: fontColor,
                }}
              >
                보청기 판매점
              </span>{' '}
              정보를
              <br />다 모았어요
            </div>
            <div className="flex items-center pt-[8px] text-GRAY tracking-[-0.55px] leading-[30px] text-[14px] font-semibold">
              집 근처 보청기 판매점 찾는 방법
              <div className="pl-[6.75px]">
                <RightArrow />
              </div>
            </div>
            <div className="w-[121px] h-[68px] overflow-hidden absolute bottom-[21px] right-[17px]">
              <Image src={imageLink} alt="banner" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
