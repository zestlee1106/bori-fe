'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import BannerSlide from '@/app/components/basic/BannerSlide'
import { banners } from '@/public/constants/mock'
import { Banner as BannerType } from '@/types/banner'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import '@/app/styles/swiper-custom.css'

const bannersData: BannerType[] = banners

const Banner = () => {
  return (
    <Swiper
      slidesPerView={1}
      className="drop-shadow-lg rounded-[20px]"
      pagination={{ clickable: true }}
      modules={[Pagination]}
      loop
    >
      {bannersData.map((banner) => (
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
