import Fundamental from '../templates/Fundamental';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import classNames from 'classnames/bind';
import styles from './Sub15Meals.module.scss';
import CampMealCard from '../../CampMealCard/CampMealCard';
import { useEffect } from 'react';

const cn = classNames.bind(styles);

const Sub15AddOn = () => {
  const time = {
    breakfast: {
      text: '조식',
      description: '오전 6:00 - 7:30',
    },
    lunch: {
      text: '중식',
      description: '오후 12:00 - 1:30',
    },
    dinner: {
      text: '석식',
      description: '오후 6:00 - 7:30',
    },
  };

  const list = {
    firstDinner: [
      '잡곡밥 / 참치김치찌개 / 돈갈비찜 / 소고기잡채',
      '토마토카프레제샐러드 / 포기김치 / 메론',
    ],
    secondLunch: [
      '잡곡밥 / 꽃게된장찌개 / 고추장불고기 / 계란장조림',
      '브로컬리숙회&초고추장 / 포기김치 / 매실쥬스',
    ],
    secondDinner: [
      '잡곡밥 / 북어해장국 / 춘천식닭갈비 / 통살새우까스 &',
      '치폴레소스 / 도토리묵야채무침 / 포기김치 / 오색경단',
    ],
    thirdLunch: [
      '소고기콩나물밥&부추양념장 / 미역국 / 고메떡갈비',
      '오미산적 / 미나리무생채 / 열무김치 / 에이드',
    ],
    thirdDinner: [
      '백미밥 / 큰 만두설렁탕 / 오징어불고기',
      '궁중고기말이조림 / 취나물들기름볶음 / 섞박지 / 두유',
    ],
  };

  useEffect(() => {
    const dots = document.querySelectorAll('.swiper-pagination');
    dots[2].style.display = 'flex';
    dots[2].style.justifyContent = 'center';

    const activatedDot = document.querySelectorAll(
      '.swiper-pagination-bullet-active'
    );
    activatedDot[2].style.backgroundColor = 'black';
  }, []);

  return (
    <Swiper
      className={cn('Swiper')}
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSlideChange={() => {
        const activatedDot = document.querySelectorAll(
          '.swiper-pagination-bullet-active'
        );
        activatedDot[2].style.backgroundColor = 'black';
      }}
    >
      <SwiperSlide className={cn('SwiperSlide')}>
        <CampMealCard
          date='첫째날 8. 3(수)'
          dinner={time.dinner}
          dinnerList={list.firstDinner}
        />
      </SwiperSlide>

      <SwiperSlide className={cn('SwiperSlide')}>
        <CampMealCard
          date='둘째날 8. 4(목)'
          lunch={time.lunch}
          lunchList={list.secondLunch}
          dinner={time.dinner}
          dinnerList={list.secondDinner}
        />
      </SwiperSlide>

      <SwiperSlide className={cn('SwiperSlide')}>
        <CampMealCard
          date='셋째날 8. 5(금)'
          lunch={time.lunch}
          lunchList={list.thirdLunch}
          dinner={time.dinner}
          dinnerList={list.thirdDinner}
        />
      </SwiperSlide>
    </Swiper>
  );
};

const Sub15Meals = () => {
  return (
    <Fundamental
      addon={<Sub15AddOn />}
      title='15. 식당'
      place='센터 별관 2층 식당'
      date='8. 3(수) - 5(금)'
      time='중식 - 오후 12:00 - 1:30'
      timeAdditional='석식 - 오후 6:00 - 7:30'
      description={
        <pre>
          <li>사전구매한 식권만 사용 (식권 현장구매 및 환불 불가)</li>
          <li>조식은 베대원 조식서비스 및 인근 외부 식당 이용해 주세요</li>
        </pre>
      }
    />
  );
};

export default Sub15Meals;
