import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css/pagination';

export default function Jumbotron({ liveDatas }) {
  const [jumbotronSize, setJumbotronSize] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    // Get jumbotron width and height.
    setJumbotronSize({
      width: window.innerWidth,
      height: window.innerWidth * 1.333325,
    });

    // Swiper dot settings.
    const dots = document.querySelectorAll('.swiper-pagination');
    // dots[0]?.style.display = 'flex';
    // dots[0]?.style.justifyContent = 'center';

    const activatedDot = document.querySelectorAll(
      '.swiper-pagination-bullet-active'
    );
    // activatedDot[0]?.style.backgroundColor = '#979797';
  }, []);

  SwiperCore.use([Autoplay]);

  const title = liveDatas.title;
  const titleKr = title.split('(')[0];
  const scripture = title.split('(')[1].split(')')[1].trim();

  return (
    <Swiper
      className='w-screen'
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000 }}
      onSlideChange={() => {
        const activatedDot = document.querySelectorAll(
          '.swiper-pagination-bullet-active'
        );
        // activatedDot[0]?.style.backgroundColor = '#979797';
      }}
    >
      {/* 53주년 배너 */}
      <SwiperSlide>
        <img
          className='w-full bg-no-repeat bg-cover bg-center'
          src='images/banner_53.png'
        />
      </SwiperSlide>

      {/* 주일 설교 */}
      <SwiperSlide className={`h-[${jumbotronSize.height}px]`}>
        <div
          className={`w-full h-full
          bg-no-repeat bg-cover bg-center
          bg-[url('images/jumbotron_sermon.png')]
          pl-[64px]`}
        >
          <div className='absolute top-72'>
            <p
              className='text-xs text-white px-[11px] py-[5.5px] mb-3
              inline-block rounded-[100px] bg-[#D48830]/70 '
            >
              주일설교
            </p>

            <p
              className='text-white font-[500] text-[32px] mb-[18px]
              tracking-[-0.5px] break-keep max-w-xs leading-10'
            >
              {titleKr}
            </p>

            <p className='text-white text-[14px] leading-6'>
              {scripture} <br />
              김성현 감독님
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
