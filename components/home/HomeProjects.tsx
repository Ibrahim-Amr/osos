import ProjectCard from '../ProjectCard';
import Wrapper from '../Wrapper';
import project1 from '@/public/projects/project_1.png';
import project2 from '@/public/projects/project_2.png';
import project3 from '@/public/projects/project_3.png';
import project4 from '@/public/projects/project_4.png';

const projects = [
  {
    id: 1,
    title: 'مشروع 1',
    description: 'وصف المشروع 1',
    image: project1,
  },
  {
    id: 2,
    title: 'مشروع 2',
    description: 'وصف المشروع 2',
    image: project2,
  },
  {
    id: 3,
    title: 'مشروع 3',
    description: 'وصف المشروع 3',
    image: project3,
  },
  {
    id: 4,
    title: 'مشروع 4',
    description: 'وصف المشروع 4',
    image: project4,
  },
];

const HomeProjects = () => {
  return (
    <section className='py-6 md:py-12'>
      <Wrapper>
        <div className='text-center mb-20'>
          <h2 className='text-primary-2 text-heading-2 sm:text-heading-1 font-bold'>
            نبذة من مشاريعنا
          </h2>
          <p className='text-primary-4 text-heading-5 sm:text-heading-4 max-w-[50ch] mx-auto'>
            إنها حقيقة مثبتة منذ زمن طويل أن المحتوى المقروء للصفحة
            سوف يشتت انتباه القارئ عند النظر إلى نقاط تخطيطاتها.
          </p>
        </div>
        <div className='grid md:grid-cols-2 place-items-center place-content-center gap-x-12 lg:gap-x-24 gap-y-7 lg:gap-y-14'>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title + project.id}
              index={index}
              project={project}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default HomeProjects;
