import localFont from 'next/font/local';

export const nunitoSans = localFont({
  src: [
    {
      path: '../../public/fonts/Nunito_Sans/NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf',
      style: 'normal',
      weight: '100 900',
    },
    {
      path: '../../public/fonts/Nunito_Sans/NunitoSans-Italic-VariableFont_YTLC,opsz,wdth,wght.ttf',
      style: 'italic',
      weight: '100 900',
    },
  ],
  display: 'swap',
});

export const eduQLDBeginner = localFont({
  src: '../../public/fonts/Edu_QLD_Beginner/EduQLDBeginner-VariableFont_wght.ttf',
  display: 'swap',
  weight: '100 700',
});
