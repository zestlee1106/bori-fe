import React from 'react'
import RightArrow from '@/public/icon/right-arrow.svg'
import Image from 'next/image'

interface BannerSlideProps {
  startColor: string
  endColor: string
  imageLink: string
  title: string
  subTitle: string
}

const BannerSlide = ({ startColor, endColor, imageLink, title, subTitle }: BannerSlideProps) => {
  return (
    <div className="pt-[8px]">
      <div
        style={{
          background: `linear-gradient(-59deg, ${startColor}, ${endColor})`,
        }}
        className="rounded-[20px] relative"
      >
        <div className="w-[342px] h-[168px] pt-[38px] pl-[27px] pr-[56px]">
          <div className="font-extrabold text-[22px] tracking-[-0.55px] leading-[30px]">{title}</div>
          <div className="flex items-center pt-[8px] text-GRAY tracking-[-0.55px] leading-[30px] text-[14px] font-semibold">
            {subTitle}
            <div className="pl-[6.75px]">
              <RightArrow width="4.91" height="8.49" fill="#767676" />
            </div>
          </div>
          <div className="overflow-hidden absolute bottom-[21px] right-[28px] pl-[6px]">
            <Image src={imageLink} alt="banner" width={99} height={68} objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSlide
