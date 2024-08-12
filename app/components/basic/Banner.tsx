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
      className="drop-shadow-lg rounded-[20px]"
      pagination={{ clickable: true }}
      modules={[Pagination]}
      loop
    >
      {banners.map((banner) => (
        <SwiperSlide key={`banner-${banner.order}`}>
          <BannerSlide
            startColor={`#${banner.backgroundColors[1]}`}
            endColor={`#${banner.backgroundColors[0]}`}
            title={banner.title}
            subTitle={banner.subTitle}
            imageLink={banner.imageUrl}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Banner
