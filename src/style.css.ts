import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '0 20px',
  flexDirection: 'column',
  gap: '8px',
  borderRadius: '24px',
  background: 'linear-gradient(180deg, #998BFF 0%, #121213 87.98%)',
  alignItems: 'center',
  textAlign: 'center',
});

const boxImg = style({
  objectFit: 'contain',
  marginBottom: '-24px',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const cell = style({
  backgroundColor: '#1C1C1E',
  borderRadius: '16px',
  padding: '12px',
  textAlign: 'left',
});
const cell2 = style({
  backgroundColor: '#1C1C1E',
  borderRadius: '12px',
  padding: '12px 16px',
  overflow: 'hidden',
});
const cell2Img = style({
  marginRight: '-16px',
  marginBottom: '-12px',
});

const box2 = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem 20px 20px',
  borderRadius: '1rem',
  backgroundColor: '#1C1C1E',
});

const statusGrey = style({
  background: '#302F31 !important',
});

const box3 = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
  padding: '32px 16px',
  backgroundColor: '#1C1C1E',
  borderRadius: '1rem',
  textAlign: 'center',
});

const box3Inside = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  justifyContent: 'space-between',
  padding: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#29292C',
  textAlign: 'left',
  width: '100%',
});

const imgsStack = style({
  display: 'flex',
  alignItems: 'center',
});

const imgStack = recipe({
  base: {
    borderRadius: '8px',
    overflow: 'hidden',
    width: '32px',
    height: '32px',
  },
  variants: {
    aligned: {
      true: {
        marginLeft: '-8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    addon: {
      true: {
        backgroundColor: '#1C1C1E',
      },
    },
  },
});

const grid = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px',
  width: '100%',
  marginTop: '-16px',
});

const box3Inside2 = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#29292C',
  textAlign: 'left',
  justifyContent: 'center',
});

const stepStyle = style({});

globalStyle(`${stepStyle} > div > div > div:first-child`, {
  backgroundColor: '#1C1C1E',
  color: 'var(--color-light-text-primary-inverted)',
});
globalStyle(`${stepStyle} > div > div > div:nth-child(2)`, {
  borderLeft: '2px solid #898991',
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  cell,
  boxImg,
  cell2,
  cell2Img,
  box2,
  statusGrey,
  box3,
  box3Inside,
  imgsStack,
  imgStack,
  grid,
  box3Inside2,
  stepStyle,
};
