import CampHeader from '../CampHeader/CampHeader';
import classNames from 'classnames/bind';
import styles from './CampWelcome.module.scss';

const cn = classNames.bind(styles);

const CampWelcome = () => {
  return (
    <section className={cn('CampWelcome')}>
      <CampHeader title='νμκΈ' />
      <img />
    </section>
  );
};

export default CampWelcome;
