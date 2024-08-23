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
    <div className="pt-[0.8rem]">
      <div
        style={{
          background: `linear-gradient(-65deg, ${startColor}, ${endColor})`,
        }}
        className="rounded-[2rem] relative"
      >
        <div className="w-[34.2rem] h-[16.8rem] pt-[3.8rem] pl-[2.7rem] pr-[5.6rem]">
          <div className="font-extrabold text-[2.2rem] tracking-[-0.025em] leading-[3rem]">{title}</div>
          <div className="flex items-center pt-[0.8rem] text-GREY_700 tracking-[-0.025em] leading-[0.3rem] text-[1.4rem] font-semibold">
            {subTitle}
            <div className="pl-[0.675rem]">
              <RightArrow width="4.91" height="8.49" fill="#555557" />
            </div>
          </div>
          <div className="overflow-hidden absolute bottom-[2.1rem] right-[2.8rem] pl-[0.6rem]">
            <Image src={imageLink} alt="banner" width={99} height={68} objectFit="cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerSlide
