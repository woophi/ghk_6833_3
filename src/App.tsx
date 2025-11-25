import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Collapse } from '@alfalab/core-components/collapse';
import { Gap } from '@alfalab/core-components/gap';
import { PureCell } from '@alfalab/core-components/pure-cell';
import { Status } from '@alfalab/core-components/status';
import { Steps } from '@alfalab/core-components/steps';
import { Typography } from '@alfalab/core-components/typography';
import { BriefcaseMIcon } from '@alfalab/icons-glyph/BriefcaseMIcon';
import { BulbMIcon } from '@alfalab/icons-glyph/BulbMIcon';
import { ChevronDownMIcon } from '@alfalab/icons-glyph/ChevronDownMIcon';
import { ChevronUpMIcon } from '@alfalab/icons-glyph/ChevronUpMIcon';
import { ClockMIcon } from '@alfalab/icons-glyph/ClockMIcon';
import { FlashCircleMIcon } from '@alfalab/icons-glyph/FlashCircleMIcon';
import { HandHeartMIcon } from '@alfalab/icons-glyph/HandHeartMIcon';
import { StarPointerMIcon } from '@alfalab/icons-glyph/StarPointerMIcon';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import checkedImg from './assets/checked.svg';
import hb from './assets/hb.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import p1 from './assets/p1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';
import roman from './assets/roman.png';
import valya from './assets/valya.png';
import { ImgStack } from './ImgStack';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

const insideItems = [
  {
    title: 'Торговые сигналы',
    subtitle: 'в зависимости от твоей стратегии',
    img: img1,
  },
  {
    title: 'Обучение и ответы на вопросы',
    subtitle: 'помогает погрузить и разобраться в инвестициях',
    img: img2,
  },
  {
    title: 'Разбор событий на рынке',
    subtitle: 'помогает оставаться в контексте',
    img: img3,
  },
  {
    title: 'Спасение портфеля',
    subtitle: 'разбор текущего портфеля и помощь как его улучшить',
    img: img4,
  },
  {
    title: 'Отдельная группа с общением',
    subtitle: 'обсуждай все с единомышленниками',
    img: img5,
  },
];

const items = [
  {
    title: 'Есть портфель, но доходность не устраивает',
    text: 'Наставник поможет повысить доходность портфеля',
    IconComp: BriefcaseMIcon,
  },
  {
    title: 'Нет времени разбираться в инвестициях',
    text: 'На выбор два типа стратегий: для пассивного дохода и быстрого роста капитала',
    IconComp: BulbMIcon,
  },
  {
    title: 'Делаете свои первые инвест-шаги',
    text: 'Наставники ответят на возникшие вопросы',
    IconComp: StarPointerMIcon,
  },
  {
    title: 'Нет первоначального капитала',
    text: 'Вы можете начать со нуля и изучать новые стратегии инвестирования',
    IconComp: HandHeartMIcon,
  },
  {
    title: 'Хотите дополнительную торговую стратегию',
    text: 'Можете выбрать еще одного наставника с другим типом стратегии',
    IconComp: FlashCircleMIcon,
  },
];

const pItems = [
  {
    title: 'Понятно',
    text: 'Наставник объясняет сложные вещи простым языком',
    img: p1,
  },
  {
    title: 'Быстро',
    text: 'Не нужно искать материалы — всё собрано в одном месте',
    img: p2,
  },
  {
    title: 'С поддержкой',
    text: 'Вы не один: наставник и участники проходят путь вместе с вами',
    img: p3,
  },
  {
    title: 'На практике',
    text: 'Вы видите реальные подходы, а не теорию',
    img: p4,
  },
];

const faqs = [
  {
    question: 'Насколько выгодна подписка?',
    answer: [
      'Средний активный инвестор экономит от 300 до 500₽ в месяц только на комиссиях и получает идеи с доходностью выше рынка.',
    ],
  },
  {
    question: 'С какой суммы можно начать?',
    answer: [
      'Начать можно с любой суммы — даже от 100 ₽. Этого достаточно, чтобы сделать первые шаги по стратегии Наставников.',
      'Однако для того чтобы полностью следовать их рекомендациям и использовать все возможности стратегии, лучше рассмотреть инвестиции от 10 000 ₽ и выше.',
    ],
  },
  {
    question: 'Можно отменить в любой момент?',
    answer: ['Да, отменить можно в любой момент.'],
  },
];

const LINK = 'alfabank://longread?endpoint=v1/adviser/longreads/85293';

if (LS.getItem(LSKeys.ShowThx, false)) {
  window.location.replace(LINK);
}

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [collapsedItems, setCollapsedItem] = useState<string[]>([]);

  useEffect(() => {
    if (!LS.getItem(LSKeys.UserId, null)) {
      LS.setItem(LSKeys.UserId, Date.now());
    }
  }, []);

  const submit = () => {
    window.gtag('event', '6833_card_activate', { var: 'var1' });

    setLoading(true);

    LS.setItem(LSKeys.ShowThx, true);
    setLoading(false);
    window.location.replace(LINK);
  };

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={hb} width="100%" height={156} className={appSt.boxImg} />
          <Typography.TitleResponsive
            color="primary-inverted"
            tag="h1"
            view="large"
            font="system"
            weight="semibold"
            style={{ marginBottom: '8px' }}
          >
            Инвестируем с наставником
          </Typography.TitleResponsive>
          <PureCell className={appSt.cell}>
            <PureCell.Graphics>
              <img src={checkedImg} width={24} height={24} alt="checked" />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-small" color="primary-inverted">
                  Наставник на своем примерепокажет, куда инвестировать часть зарплаты
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>
          <PureCell className={appSt.cell}>
            <PureCell.Graphics>
              <img src={checkedImg} width={24} height={24} alt="checked" />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-small" color="primary-inverted">
                  Превратите инвестиции в понятные и привычный процесс
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>
          <PureCell className={appSt.cell}>
            <PureCell.Graphics>
              <img src={checkedImg} width={24} height={24} alt="checked" />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-small" color="primary-inverted">
                  Экономьте время и силы, используя опыт наставника
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>
        </div>

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Что входит в подписку
        </Typography.TitleResponsive>

        {insideItems.map(item => (
          <PureCell key={item.title} className={appSt.cell2}>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text view="primary-medium" color="primary-inverted" weight="bold">
                  {item.title}
                </Typography.Text>
                <Typography.Text view="primary-small" color="secondary-inverted">
                  {item.subtitle}
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
            <PureCell.Addon verticalAlign="bottom">
              <img src={item.img} width={90} height={90} alt={item.title} className={appSt.cell2Img} />
            </PureCell.Addon>
          </PureCell>
        ))}

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Кому подойдёт подписка
        </Typography.TitleResponsive>

        {items.map(item => (
          <PureCell className={appSt.cell} key={item.title}>
            <PureCell.Graphics>
              <item.IconComp color="#FFFFFF" />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.Text color="primary-inverted" view="primary-small" weight="bold">
                  {item.title}
                </Typography.Text>

                <Typography.Text view="primary-small" color="secondary-inverted">
                  {item.text}
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>
        ))}

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Виды стратегий
        </Typography.TitleResponsive>

        <div className={appSt.box2}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Status view="contrast" color="red" size={20}>
              <Typography.Text view="secondary-small" weight="bold">
                ВЫСОКИЙ РИСК
              </Typography.Text>
            </Status>
            <Status className={appSt.statusGrey} view="muted" color="grey" size={20} uppercase={false}>
              <Typography.Text
                view="secondary-small"
                weight="bold"
                style={{ display: 'flex', alignItems: 'center', gap: 4 }}
                color="primary-inverted"
              >
                <ClockMIcon width={16} height={16} />
                <span style={{ marginTop: '1px' }}>Сделки каждый день</span>
              </Typography.Text>
            </Status>
          </div>
          <div>
            <Typography.TitleResponsive color="primary-inverted" tag="h2" view="small" font="system" weight="medium">
              Активная
            </Typography.TitleResponsive>

            <Typography.Text view="primary-small" color="secondary-inverted">
              Потенциальная доходность более <span style={{ color: '#fff' }}>30% в год.</span> Положительная доходность у
              более 80% сделок
            </Typography.Text>
          </div>
        </div>
        <div className={appSt.box2}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Status view="contrast" color="green" size={20}>
              <Typography.Text view="secondary-small" weight="bold">
                НИЗКИЙ РИСК
              </Typography.Text>
            </Status>
            <Status className={appSt.statusGrey} view="muted" color="grey" size={20} uppercase={false}>
              <Typography.Text
                view="secondary-small"
                weight="bold"
                style={{ display: 'flex', alignItems: 'center', gap: 4 }}
                color="primary-inverted"
              >
                <ClockMIcon width={16} height={16} />
                <span style={{ marginTop: '1px' }}>Низкая частота сделок</span>
              </Typography.Text>
            </Status>
          </div>
          <div>
            <Typography.TitleResponsive color="primary-inverted" tag="h2" view="small" font="system" weight="medium">
              Пассивная
            </Typography.TitleResponsive>

            <Typography.Text view="primary-small" color="secondary-inverted">
              потенциальная доходность выше вкладов на <span style={{ color: '#fff' }}>5-7%.</span> Срок инвестирования более
              1 года
            </Typography.Text>
          </div>
        </div>

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Рекомендуем для вас
        </Typography.TitleResponsive>

        <div>
          <Swiper style={{ marginLeft: '0' }} spaceBetween={16} slidesPerView="auto">
            <SwiperSlide style={{ maxWidth: '90%' }}>
              <div className={appSt.box3}>
                <img src={valya} width={90} height={90} alt="valya" />

                <div>
                  <Typography.TitleResponsive color="primary-inverted" tag="h2" view="small" font="system" weight="medium">
                    Валя Инвестор
                  </Typography.TitleResponsive>

                  <Typography.Text
                    tag="p"
                    defaultMargins={false}
                    style={{ maxWidth: '285px', marginTop: '8px' }}
                    view="primary-small"
                    color="primary-inverted"
                  >
                    Собираю долгосрочный портфель, и делюсь своими мыслями
                  </Typography.Text>
                </div>

                <div className={appSt.box3Inside}>
                  <div>
                    <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="primary-inverted">
                      до 150 000 ₽
                    </Typography.Text>
                    <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary-inverted">
                      Портфель
                    </Typography.Text>
                  </div>
                  <ImgStack additionalLength={3} />
                </div>

                <div className={appSt.grid}>
                  <div className={appSt.box3Inside2}>
                    <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="positive">
                      +17.3%
                    </Typography.Text>
                    <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary-inverted">
                      за год
                    </Typography.Text>
                  </div>
                  <div className={appSt.box3Inside2}>
                    <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="primary-inverted">
                      17
                    </Typography.Text>
                    <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary-inverted">
                      сделок / мес.
                    </Typography.Text>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ maxWidth: '90%' }}>
              <div className={appSt.box3}>
                <img src={roman} width={90} height={90} alt="roman" />

                <div>
                  <Typography.TitleResponsive color="primary-inverted" tag="h2" view="small" font="system" weight="medium">
                    Роман Трейдер
                  </Typography.TitleResponsive>

                  <Typography.Text
                    tag="p"
                    defaultMargins={false}
                    style={{ maxWidth: '285px', marginTop: '8px' }}
                    view="primary-small"
                    color="primary-inverted"
                  >
                    Все сделки в реальном времени
                  </Typography.Text>
                </div>

                <div className={appSt.box3Inside}>
                  <div>
                    <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="primary-inverted">
                      до 150 000 ₽
                    </Typography.Text>
                    <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary-inverted">
                      Портфель
                    </Typography.Text>
                  </div>
                  <ImgStack additionalLength={3} />
                </div>

                <div className={appSt.grid}>
                  <div className={appSt.box3Inside2}>
                    <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="positive">
                      +15.1%
                    </Typography.Text>
                    <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary-inverted">
                      за год
                    </Typography.Text>
                  </div>
                  <div className={appSt.box3Inside2}>
                    <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="primary-inverted">
                      12
                    </Typography.Text>
                    <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary-inverted">
                      сделок / мес.
                    </Typography.Text>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Как это работает
        </Typography.TitleResponsive>

        <Steps isVerticalAlign={true} interactive={false} className={appSt.stepStyle}>
          <span>
            <Typography.Text tag="p" defaultMargins={false} view="component-primary" color="primary-inverted">
              Оформите подписку
            </Typography.Text>
            <Typography.Text view="secondary-small" color="secondary-inverted">
              первый месяц бесплатно, далее 199 руб/мес
            </Typography.Text>
          </span>
          <span>
            <Typography.Text tag="p" defaultMargins={false} view="component-primary" color="primary-inverted">
              Зайдите в Альфа-Инвестиции
            </Typography.Text>
            <Typography.Text view="secondary-small" color="secondary-inverted">
              Доступ к сигналам, материалам и сообществу открывается сразу в чатах
            </Typography.Text>
          </span>
          <span>
            <Typography.Text tag="p" defaultMargins={false} view="component-primary" color="primary-inverted">
              Выберите стратегию
            </Typography.Text>
            <Typography.Text view="secondary-small" color="secondary-inverted">
              Подберем наставника под вашу стратегию
            </Typography.Text>
          </span>
          <span>
            <Typography.Text tag="p" defaultMargins={false} view="component-primary" color="primary-inverted">
              Применяете на практике
            </Typography.Text>
            <Typography.Text view="secondary-small" color="secondary-inverted">
              Делаете первые инвестиции осознанно и с поддержкой
            </Typography.Text>
          </span>
        </Steps>

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Преимущества
        </Typography.TitleResponsive>

        {pItems.map(item => (
          <PureCell key={item.title}>
            <PureCell.Graphics>
              <img src={item.img} width={48} height={48} alt={item.title} />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <Typography.TitleResponsive color="primary-inverted" tag="h4" view="xsmall" font="system" weight="semibold">
                  {item.title}
                </Typography.TitleResponsive>
                <Typography.Text view="primary-small" color="primary-inverted">
                  {item.text}
                </Typography.Text>
              </PureCell.Main>
            </PureCell.Content>
          </PureCell>
        ))}

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Дополнительные вопросы
        </Typography.TitleResponsive>

        {faqs.map((faq, index) => (
          <div style={{ marginTop: '1rem' }} key={index}>
            <div
              onClick={() => {
                window.gtag('event', '6833_card_faq', { faq: String(index + 1), var: 'var1' });

                setCollapsedItem(items =>
                  items.includes(String(index + 1))
                    ? items.filter(item => item !== String(index + 1))
                    : [...items, String(index + 1)],
                );
              }}
              className={appSt.row}
            >
              <Typography.Text view="primary-medium" weight="medium" color="primary-inverted">
                {faq.question}
              </Typography.Text>
              {collapsedItems.includes(String(index + 1)) ? (
                <div style={{ flexShrink: 0 }}>
                  <ChevronUpMIcon color="#FFFFFF" />
                </div>
              ) : (
                <div style={{ flexShrink: 0 }}>
                  <ChevronDownMIcon color="#FFFFFF" />
                </div>
              )}
            </div>
            <Collapse expanded={collapsedItems.includes(String(index + 1))}>
              {faq.answer.map((answerPart, answerIndex) => (
                <Typography.Text
                  key={answerIndex}
                  tag="p"
                  defaultMargins={false}
                  view="primary-medium"
                  color="primary-inverted"
                >
                  {answerPart}
                </Typography.Text>
              ))}
            </Collapse>
          </div>
        ))}
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          loading={loading}
          block
          view="primary"
          onClick={submit}
          style={{ backgroundColor: '#FFFFFF', color: '#030306E0' }}
          hint="Далее 199 ₽ в месяц"
        >
          Подключить бесплатно
        </ButtonMobile>
      </div>
    </>
  );
};
