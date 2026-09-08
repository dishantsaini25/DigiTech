'use client';

import { Swiper } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider({
  children,

  /* Layout */
  slidesPerView = 1,
  spaceBetween = 24,
  breakpoints,

  /* Behavior */
  loop = true,
  autoplay = true,
  speed = 500,
  freeMode = false,
  grabCursor = true,

  /* Controls */
  navigation = false,
  pagination = false,

  /* Extra classes */
  className = '',
}) {
  const modules = [];

  if (autoplay) modules.push(Autoplay);
  if (freeMode) modules.push(FreeMode);
  if (navigation) modules.push(Navigation);
  if (pagination) modules.push(Pagination);

  return (
    <Swiper
      modules={modules}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      loop={loop}
      speed={speed}
      freeMode={freeMode}
      grabCursor={grabCursor}
      navigation={navigation}
      pagination={pagination}
      autoplay={
        autoplay
          ? {
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }
          : false
      }
      className={className}
    >
      {children}
    </Swiper>
  );
}