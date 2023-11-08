import { cn } from '@/lib/utils';

const info = [
  {
    ar_name: 'العنوان',
    en_name: 'Address',
    ar_value: 'السعودية,المركز الرئيسي ( مكة المكرمة )',
    en_value: 'Saudi Arabia, Main Office ( Makkah )',
  },
  {
    ar_name: 'تواصل معنا',
    en_name: 'Contact Us',
  },
  {
    ar_name: 'خدمة العملاء',
    en_name: 'Customer Service',
    ar_value: '0120399237',
  },
  {
    ar_name: 'فاكس',
    en_name: 'Fax',
    ar_value: '0120399237',
  },
];

const NavContactInfo = ({ lang }: { lang: string }) => {
  return (
    <div>
      <ul className='text-white flex flex-col justify-center items-start gap-3'>
        {info.map((item, index) => (
          <li
            key={item.ar_name}
            className={cn(
              index > 1 && 'flex justify-center items-center gap-2'
            )}
          >
            <p
              className={cn(
                'font-bold',
                index > 1 ? 'text-lg' : 'text-2xl'
              )}
            >
              {item.ar_name}:
            </p>
            <p
              className={cn(
                'font-medium',
                index > 1 ? 'text-sm' : 'text-lg'
              )}
            >
              {item.ar_value}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavContactInfo;
