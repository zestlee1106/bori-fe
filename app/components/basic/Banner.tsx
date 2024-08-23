'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import BannerSlide from '@/app/components/basic/BannerSlide'
import { Banner as BannerType } from '@/types/banner'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import '@/app/styles/swiper-custom.css'

interface BannerProps {
  banners: BannerType[]
}

const Banner = ({ banners }: BannerProps) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={24}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      loop
      style={{
        // 그림자가 잘리지 않게끔 스타일 추가
        width: 'calc(100% + 3rem)',
        padding: '0 1.5rem',
        marginLeft: '-1.5rem',
        paddingRight: '1.5rem',
        paddingBottom: '1.5rem',
      }}
    >
      {banners.map((banner) => (
        <SwiperSlide key={`banner-${banner.order}`}>
          <div className="rounded-[2rem] shadow-CARD_SHADOW">
            <BannerSlide
              startColor={`#${banner.backgroundColors[1]}`}
              endColor={`#${banner.backgroundColors[0]}`}
              title={banner.title}
              subTitle={banner.subTitle}
              imageLink={banner.imageUrl}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Banner
