'use client'

import Image from 'next/image'
import React from 'react'
import MarkerIcon from '@/public/icon/marker.svg'
import MarkerWhiteIcon from '@/public/icon/marker-white.svg'
import PhoneIcon from '@/public/icon/phone.svg'
import SubwayIcon from '@/public/icon/subway.svg'
import useToast from '@/app/hooks/toast'

const CopyToastMessage = ({ text }: { text: string }) => {
  return (
    <div className="font-regular">
      <span className="font-semibold">{text}</span> 가 복사되었습니다.
    </div>
  )
}

const Shop = () => {
  const { toast } = useToast()

  const copyPhoneNumber = () => {
    toast(<CopyToastMessage text="전화번호" />)
  }

  return (
    <div className="bg-WHITE_1000 py-[1.8rem] px-[2.4rem] rounded-[2rem] tracking-[-0.025em] font-semibold shadow-CARD_SHADOW relative">
      <div className="font-extrabold text-[1.8rem] text-GREEN_800 leading-[3rem]">판매점 명</div>
      <div className="text-[1.2rem] leading-[2rem] text-GREY_700 flex items-center gap-[1rem]">
        <MarkerIcon />
        서울시 풍납동 성내동
      </div>
      <div className="flex text-[1.2rem] leading-[2rem] text-GREY_700 items-center">
        <div className="pr-[1rem]">
          <PhoneIcon />
        </div>
        02-123-1234&nbsp;
        <button
          className="w-[2.3rem] h-[2rem] text-green-800 text-[rem]"
          onClick={copyPhoneNumber}
          aria-label="전화번호 복사"
        >
          복사
        </button>
      </div>
      <div className="flex gap-[0.7rem] pt-[0.5rem]">
        <div className="flex px-[1rem] py-[0.4rem] text-[1rem] leading-none font-bold bg-GREY_700 text-WHITE_1000 rounded-[5rem] items-center h-[2rem]">
          <div className="mr-[0.2rem] flex items-center">
            <SubwayIcon />
          </div>
          <span className="flex items-center">지하철역 거리m</span>
        </div>
        <div className="flex px-[1rem] py-[0.4rem] text-[1rem] leading-none font-bold bg-GREY_700 text-WHITE_1000 rounded-[5rem] items-center h-[2rem]">
          <div className="mr-[0.2rem] flex items-center">
            <MarkerWhiteIcon />
          </div>
          <span className="flex items-center">풍납동</span>
        </div>
      </div>
      <div className="mt-[1rem] bg-WHITE_900 py-[0.3rem] px-[1.5rem] flex gap-[1.2rem] font-semibold tracking-[-0.025em] text-GREEN_800 rounded-[1rem]">
        <span className="text-[0.8rem] leading-[2rem]">#브랜드</span>
        <span className="text-[0.8rem] leading-[2rem]">#브랜드</span>
      </div>
      <Image
        className="absolute top-[1.8rem] right-[2.4rem] w-[7.1rem] h-[7.1rem] object-cover rounded-[1rem]"
        src="https://images.unsplash.com/photo-1709136494772-e7db10d0d1f6"
        width={71}
        height={71}
        alt="shop-image"
      />
    </div>
  )
}

export default Shop
