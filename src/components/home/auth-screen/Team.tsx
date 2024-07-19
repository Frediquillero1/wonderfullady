import RotatedText from "@/components/decorators/RotatedText";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamProps {
	imageUrl: string;
	name: string;
	position: string;
	description: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: '/sara.jpg',
    name: 'Sarah Thompson',
    position: 'Chief Editor and Founder',
    description:
      'Sarah has a psychology degree from Deakin University in Australia and for 15 years has deeply studied human psychology and practical ways to better our relationships. ',
  },
  {
    imageUrl: '/james.jpg',
    name: 'James Wilson',
    position: 'Senior Editor',
    description:
      'James is also the founder and chief publisher of Ideapod, a large media website focusing on self-development. Jame´s research interests span the intersection of politics, behavioral psychology, and political economy.',
  },
  {
    imageUrl: '/emily.jpg',
    name: 'Dr. Emily Carter',
    position: 'Psychology Writer',
    description:
      'Dr. Carter is an experienced Sales and Enablement professional turned writer whose passions span from psychology and relationships to continuous self-improvement, lifelong learning and pushing back on societal expectations to forge a life she loves.',
  },
  {
    imageUrl: '/michael.jpg',
    name: 'Michael Ramirez',
    position: 'Entrepreneur and Digital Media',
    description:
      'is an entrepreneur and thought leader in personal development and digital media, with a foundation in education from The London School of Economics and The Australian National University.',
  },
]

const Team = () => {
	return (
    <section className='container py-24 sm:py-32'>
      <h2 className='text-2xl sm:text-3xl md:text-5xl text-center tracking-tighter font-bold'>
        Our <RotatedText>Dedicated</RotatedText> Crew
      </h2>

      <p className='mt-4 mb-10 text-md md:text-xl text-muted-foreground text-center'>
        You’re on a journey to improve your relationships. And we’re right there with you.
      </p>

      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10'>
        {teamList.map(({ description, imageUrl, name, position }) => (
          <Card
            key={name}
            className='bg-muted/50 relative mt-7 flex flex-col justify-center items-center'
          >
            <CardHeader className='my-8 flex justify-center items-center pb-2'>
              <img
                src={imageUrl}
                alt='Team member'
                className='absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover'
              />
              <CardTitle className='text-center'>{name}</CardTitle>
              <CardDescription className='text-primary'>
                {position}
              </CardDescription>
            </CardHeader>

            <CardContent className='text-center pb-4 px-2'>
              <p>{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
};
export default Team;
