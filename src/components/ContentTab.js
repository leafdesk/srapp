import { useRouter } from 'next/router';
import ClickToMoveBack from './atom/ClickToMoveBack';
import ActionBar from './molecule/ActionBar';

export default function ContentTab() {
  const router = useRouter();
  return (
    <>
      <ActionBar center='콘텐츠' left={<ClickToMoveBack route='/SiteMap' />} />

      <div className='tab_wrap'>
        <ul className='tab_area'>
          <li
            onClick={() => router.push('/onmain')}
            className={router.pathname == '/onmain' ? 'on' : ''}
          >
            온시리즈
          </li>
          <li
            onClick={() => router.push('/returnMain')}
            className={router.pathname == '/returnMain' ? 'on' : ''}
          >
            환언특강
          </li>
          <li
            onClick={() => router.push('/prayerMain')}
            className={router.pathname == '/prayerMain' ? 'on' : ''}
          >
            주중 기도회
          </li>
          <li
            onClick={() => router.push('/faith')}
            className={router.pathname == '/faith' ? 'on' : ''}
          >
            1분 은혜
          </li>
        </ul>
      </div>
    </>
  );
}
