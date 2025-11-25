import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Collapse } from '@alfalab/core-components/collapse';
import { Gap } from '@alfalab/core-components/gap';
import { PureCell } from '@alfalab/core-components/pure-cell';
import { Typography } from '@alfalab/core-components/typography';
import { BubblesMIcon } from '@alfalab/icons-glyph/BubblesMIcon';
import { BulbMIcon } from '@alfalab/icons-glyph/BulbMIcon';
import { ChevronDownMIcon } from '@alfalab/icons-glyph/ChevronDownMIcon';
import { ChevronUpMIcon } from '@alfalab/icons-glyph/ChevronUpMIcon';
import { CrownMIcon } from '@alfalab/icons-glyph/CrownMIcon';
import { HeartMIcon } from '@alfalab/icons-glyph/HeartMIcon';
import { LightningMIcon } from '@alfalab/icons-glyph/LightningMIcon';
import { useEffect, useState } from 'react';
import hb from './assets/hb.png';
import heart from './assets/heart.png';
import house from './assets/house.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';

const items = [
  {
    title: 'Доступ в закрытый чат с инвестидеями',
    text: 'Каждый день новые идеи',
    IconComp: BubblesMIcon,
  },
  {
    title: 'Еженедельный дайджест событий на рынке',
    text: 'Полный разбор рынка в удобном формате',
    IconComp: BulbMIcon,
  },
  {
    title: 'AI стратегия для инвесторов с доходностью >25% в год',
    text: 'Все рекомендации можно исполнить в 1 клик — покупки и продажи выполняются автоматически',
    IconComp: CrownMIcon,
  },
  {
    title: 'Приоритетная поддержка',
    text: 'Любой вопрос в чатах Альфа Инвестиций решится быстрее и без ботов',
    IconComp: LightningMIcon,
  },
  {
    title: 'Ранний доступ к обновлениям',
    text: 'Для приложений Альфа Инвестиции и Альфа Инвестиции Онлайн',
    IconComp: HeartMIcon,
  },
];

const faqs = [
  {
    question: 'Насколько выгодна подписка?',
    answer:
      'Средний активный инвестор экономит от 300 до 500р в месяц только на комиссиях и получает идеи с доходностью выше рынка.',
  },
  {
    question: 'Можно отменить в любой момент?',
    answer:
      'Да, отменить можно в любой момент. Если вы отменили в бесплатный период, то привилегии станут недоступны сразу. Если вы отменили подписку после оплаты, привилегии станут недоступны по окончании оплаченного периода.',
  },
  {
    question: 'Есть ли какие-то ограничения по условию 5 сделок без комиссии?',
    answer:
      'Условие распространяется на оборот в месяц до 300 000 ₽ на первые 5 сделок в месяц. Если ваш оборот за первые 5 сделок превысил 300 000 ₽, комиссия взимается согласно тарифному плану на счете.',
  },
  {
    question: 'Есть ли какие-то ограничения по выплате кэшбека?',
    answer: 'Предельный уровень выплаты 1000 ₽ в месяц.',
  },
];

const LINK = 'alfabank://longread?endpoint=v1/adviser/longreads/60683';

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
    window.gtag('event', '6833_card_activate', { var: 'var3' });

    setLoading(true);

    LS.setItem(LSKeys.ShowThx, true);
    setLoading(false);
    window.location.replace(LINK);
  };

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <img src={hb} width={120} height={120} />
          <Typography.TitleResponsive color="primary-inverted" tag="h1" view="medium" font="system" weight="semibold">
            Смарт Инвестиции
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="primary-inverted">
            30 дней бесплатно,
            <br />
            далее — 199 ₽ в месяц
          </Typography.Text>

          <div className={appSt.tag}>
            Ежегодная экономия <b>~ 9000 ₽</b>
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
          Топ привилегии
        </Typography.TitleResponsive>

        <PureCell className={appSt.cell}>
          <PureCell.Graphics verticalAlign="center">
            <img src={house} width={48} height={48} alt="house" />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.TitleResponsive color="primary-inverted" tag="h3" view="xsmall" font="system" weight="semibold">
                0% комиссии на первые 5 сделок в месяц
              </Typography.TitleResponsive>

              <Typography.Text view="primary-small" color="secondary-inverted">
                Экономьте до 500 ₽ ежемесячно просто за то, что формируете капитал
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>

        <PureCell className={appSt.cell}>
          <PureCell.Graphics verticalAlign="center">
            <img src={heart} width={48} height={48} alt="heart" />
          </PureCell.Graphics>
          <PureCell.Content>
            <PureCell.Main>
              <Typography.TitleResponsive color="primary-inverted" tag="h3" view="xsmall" font="system" weight="semibold">
                20% кэшбек с каждой комиссии (после лимита)
              </Typography.TitleResponsive>

              <Typography.Text view="primary-small" color="secondary-inverted">
                Возврат в виде рублей в приложении Банка
              </Typography.Text>
            </PureCell.Main>
          </PureCell.Content>
        </PureCell>

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Дополнительные привилегии
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
          Подписка бесплатна? Легко
        </Typography.TitleResponsive>
        <Typography.Text view="primary-medium" color="secondary-inverted">
          Держите на брокерском счете от 25 000 ₽ 30 дней — подписка будет бесплатной весь следующий месяц
        </Typography.Text>

        <Typography.TitleResponsive
          color="primary-inverted"
          style={{ marginTop: '1rem' }}
          tag="h2"
          view="small"
          font="system"
          weight="semibold"
        >
          Частые вопросы
        </Typography.TitleResponsive>

        {faqs.map((faq, index) => (
          <div style={{ marginTop: '1rem' }} key={index}>
            <div
              onClick={() => {
                window.gtag('event', '6833_card_faq', { faq: String(index + 1), var: 'var3' });

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
              <Typography.Text view="primary-medium" color="secondary-inverted">
                {faq.answer}
              </Typography.Text>
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
