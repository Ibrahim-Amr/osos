import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <div>
      <div
        className={cn(
          'w-fit overflow-hidden mb-6',
          index === 0 && 'rounded-tl-[5rem]',
          index === 1 && 'rounded-tr-[5rem]',
          index === 2 && 'rounded-bl-[5rem]',
          index === 3 && 'rounded-br-[5rem]'
        )}
      >
        <Image
          src={project.image}
          alt={project.title}
          height={450}
          className='object-cover'
          loading='lazy'
          placeholder='blur'
        />
      </div>
      <div>
        <h3 className='text-primary-2 text-heading-3 font-bold'>
          {project.title}
        </h3>
        <p className='text-primary-4 text-heading-4'>
          {project.description.length > 100
            ? project.description.slice(0, 100) + '...'
            : project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
