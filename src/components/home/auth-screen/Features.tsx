import UnderlinedText from "@/components/decorators/UnderlinedText";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureProps {
	title: string;
	description: string;
	image: string;
}

const features: FeatureProps[] = [
  {
    title: 'Signs You’re Genuinely Happy With Yourself',
    description:
      'All of us have highs and lows on a daily and weekly basis. But a deeper sense of inner happiness and the way your life is going is a lot different. Even when the road gets rough you feel a sense of fulfillment and purpose in your life. So, how can you separate the peaks and valleys of life from the true signs you’re happy with yourself and your life on a deeper level?',
    image: '/gifs/gif1.gif',
  },
  {
    title: 'Positive Character Traits Of A Quality Woman',
    description:
      'We all have admirable women with great traits that we look upon. While you might feel insecure initially, you can be as extraordinary and as strong as they are. You just need to have a starting point to improve your good side and the determination to be one.',
    image: '/gifs/gif4.gif',
  },
  {
    title: 'Ways To Tell She’s Monkey Branching You',
    description:
      'Your girlfriend is still in a relationship with you, but you’ve got the feeling she’s already lining up her next love interest – this is known as monkey branching and it’s more common than you’d think. Not only is it morally wrong, but some people even consider it to be cheating.',
    image: '/gifs/gif3.gif',
  },
]

const featureList: string[] = [
	"How To For Woman",
	"Relationship",
	"Breack Ups",
	"Life",
	"Spirituality",
	"Reviews",
];

const Features = () => {
	return (
		<section className='container py-24 sm:py-32 space-y-8'>
			<h2 className='text-3xl lg:text-4xl font-bold md:text-center'>
				Many <UnderlinedText className='underline-offset-8'>WonderLady</UnderlinedText> Features
			</h2>

			<div className='flex flex-wrap md:justify-center gap-4'>
				{featureList.map((feature) => (
					<div key={feature}>
						<Badge className='text-sm rounded-full' variant={"secondary"}>
							{feature}
						</Badge>
					</div>
				))}
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{features.map(({ title, description, image }) => (
					<Card key={title} className='flex flex-col'>
						<CardHeader>
							<CardTitle>{title}</CardTitle>
						</CardHeader>

						<CardContent>{description}</CardContent>

						<CardFooter className='mt-auto'>
							<img
								src={image}
								alt='Feature Item'
								className='rounded w-[250px] h-32 lg:w-[300px]  mx-auto z-0 select-none pointer-events-none'
							/>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
export default Features;
