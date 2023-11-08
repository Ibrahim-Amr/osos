'use client';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z
    .string({ required_error: 'الاسم مطلوب' })
    .min(2, 'الاسم  مطلوب, يجب ان يكون 2 احرف علي الأقل')
    .max(50, 'الاسم طويل جداً, يجب ان لا يزيد عن 50 حرف'),
  email: z
    .string({ required_error: 'البريد الإلكتروني مطلوب' })
    .email('البريد الإلكتروني غير صحيح'),
  phone: z
    .string({ required_error: 'رقم الهاتف مطلوب' })
    .min(5, 'رقم الهاتف قصير جداً, يجب ان يكون 5 ارقام علي الأقل')
    .max(20, 'رقم الهاتف طويل جداً, يجب ان لا يزيد عن 20 رقم'),
  message: z
    .string({ required_error: 'الرسالة مطلوبة' })
    .min(5, 'الرسالة قصيرة جداً, يجب ان تكون 5 احرف علي الأقل')
    .max(500, 'الرسالة طويلة جداً, يجب ان لا تزيد عن 500 حرف'),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const {
    formState: { isLoading, isSubmitting },
    reset,
  } = form;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (!isLoading && !isSubmitting) {
        const { name, email, phone, message } = values;
        const response = await fetch(
          'https://darmaaka.com/dr/api/setcontactus',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              phone,
              message,
            }),
          }
        ).then((res) => res.json());

        if (response === 'سيتم التواصل معكم للرد علي استفسارتكم') {
          toast.success(response);
        }
      }
      reset();
    } catch (err) {
      console.log(err);
      toast.error('حدث خطأ ما');
    }
  };

  return (
    <div className='flex-1 w-full'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-5 justify-between items-start'
        >
          <div className='flex flex-col lg:flex-row justify-between items-start gap-5 w-full'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      className='text-xl font-medium'
                      placeholder='الاسم'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormControl>
                    <Input
                      className='text-xl font-medium'
                      placeholder='البريد الإلكتروني'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Input
                    className='text-xl font-medium'
                    placeholder='رقم الهاتف'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem className='w-full'>
                <FormControl>
                  <Textarea
                    placeholder='الرسالة'
                    className='text-xl font-medium py-2 resize-none'
                    rows={5}
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            aria-label='Submit form'
            aria-disabled={isSubmitting || isLoading}
            type='submit'
            className='bg-[#9e8022] text-xl rounded-md shadow flex justify-center items-center mx-auto hover:opacity-70 transition-all duration-300 active:scale-90 w-full font-bold '
          >
            {isSubmitting || isLoading ? (
              <div
                className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                role='status'
              >
                <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                  Loading...
                </span>
              </div>
            ) : (
              'إرسال'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
