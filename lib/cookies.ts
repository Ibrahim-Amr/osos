import { cookies } from 'next/headers';

const getCookies = () => {
  const cookieStore = cookies();
  const lang = cookieStore.get('lang')?.value || 'ar';

  return lang;
};

export default getCookies;
