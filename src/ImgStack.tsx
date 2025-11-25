import { Typography } from '@alfalab/core-components/typography';
import gazpImg from './assets/gazp.png';
import sberImg from './assets/sber.png';
import tbankImg from './assets/tbank.png';
import yandexImg from './assets/yandex.png';
import { appSt } from './style.css';

type Props = {
  additionalLength: number;
};

export const ImgStack = ({ additionalLength }: Props) => {
  return (
    <div className={appSt.imgsStack}>
      <img src={tbankImg} width={32} height={32} className={appSt.imgStack()} />
      <img src={gazpImg} width={32} height={32} className={appSt.imgStack({ aligned: true })} />
      <img src={sberImg} width={32} height={32} className={appSt.imgStack({ aligned: true })} />
      <img src={yandexImg} width={32} height={32} className={appSt.imgStack({ aligned: true })} />
      <div className={appSt.imgStack({ aligned: true, addon: true })}>
        <Typography.Text view="secondary-medium" color="secondary-inverted" weight="medium">
          +{additionalLength}
        </Typography.Text>
      </div>
    </div>
  );
};
