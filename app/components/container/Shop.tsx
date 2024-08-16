import Image from 'next/image'
import React from 'react'
import MarkerIcon from '@/public/icon/marker.svg'
import MarkerWhiteIcon from '@/public/icon/marker-white.svg'
import PhoneIcon from '@/public/icon/phone.svg'
import SubwayIcon from '@/public/icon/subway.svg'

const Shop = () => {
  return (
    <div className="bg-WHITE_1000 py-[18px] px-[24px] rounded-[20px] tracking-[-0.025em] font-semibold shadow-CARD_SHADOW relative">
      <div className="font-extrabold text-[18px] text-GREEN_800 leading-[30px]">판매점 명</div>
      <div className="text-[12px] leading-[20px] text-GREY_700 flex items-center gap-[10px]">
        <MarkerIcon />
        서울시 풍납동 성내동
      </div>
      <div className="flex text-[12px] leading-[20px] text-GREY_700 items-center">
        <div className="pr-[10px]">
          <PhoneIcon />
        </div>
        02-123-1234&nbsp;<button className="w-[23px] h-[20px] text-green-800 text-[10px]">복사</button>
      </div>
      <div className="flex gap-[7px] pt-[10px]">
        <div className="flex px-[10px] py-[4px] text-[6px] leading-[7.16px] font-bold bg-GREY_700 text-WHITE_1000 rounded-[50px] items-center">
          <SubwayIcon />
          지하철역 거리m
        </div>
        <div className="flex px-[10px] py-[4px] text-[6px] leading-[7.16px] font-bold bg-GREY_700 text-WHITE_1000 rounded-[50px] items-center">
          <MarkerWhiteIcon />
          풍납동
        </div>
      </div>
      <div className="mt-[10px] bg-WHITE_900 py-[3px] px-[15px] flex gap-[12px] font-semibold tracking-[-0.025em] text-GREEN_800 rounded-[10px]">
        <span className="text-[8px] leading-[20px]">#브랜드</span>
        <span className="text-[8px] leading-[20px]">#브랜드</span>
      </div>
      <Image
        className="absolute top-[18px] right-[24px] w-[71px] h-[71px] object-cover rounded-[10px]"
        src="https://images.unsplash.com/photo-1709136494772-e7db10d0d1f6"
        width={71}
        height={71}
        alt="shop-image"
      />
    </div>
  )
}

export default Shop
