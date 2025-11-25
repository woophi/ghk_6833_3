import { globalStyle, style } from '@vanilla-extract/css';

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
  padding: '0 20px 24px',
  flexDirection: 'column',
  gap: '8px',
  borderRadius: '24px',
  backgroundColor: '#1C1C1E',
  alignItems: 'center',
  textAlign: 'center',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const cell = style({
  backgroundColor: '#1C1C1E',
  borderRadius: '16px',
  padding: '1rem',
});

const tag = style({
  backgroundColor: '#EEEDFF',
  borderRadius: '8px',
  padding: '3px 8px',
  color: '#7A63F1',
  marginTop: '8px',
  fontSize: '15px',
  lineHeight: '20px',
});

const listItem = style({});

globalStyle(`${listItem} > div:first-child`, {
  color: '#8F8F98',
  paddingLeft: 0,
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  cell,
  tag,
  listItem,
};
