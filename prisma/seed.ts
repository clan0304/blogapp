import { PrismaClient } from '@prisma/client';

const prisma: any = new PrismaClient();

const posts = [
  {
    title: 'Baguette Studio',
    author: 'Sang mo',
    location: '15-27 Wreckyn St, North Melbourne VIC 3051',
    content:
      'Sur uses the baguettes and other types of bread baked by Kwon to make his sandwiches. The ham and cheese on traditional baguette is a crowd favourite, and easily rivals sandwiches you find in the best Parisian bakeries. The trio tried many different hams but couldn’t find quite the right one for their baguette on the market, so Sur spent one of the past lockdowns perfecting his own curing recipe at home. When assembling the sandwich, he weighs every element (Black Berkshire ham, Gruyère cheese, pickles and butter) to create a consistent and flawless product.',
    website: 'https://www.baguettestudios.com',
    instagram: 'https://www.instagram.com/baguettestudios_nm/?hl=en',
    image: '/assets/baguettestudio.jpg',
  },
  {
    title: 'Calere Coffee',
    author: 'Sang mo',
    location: 'Shop 1/166 Gertrude St, Fitzroy VIC 3065',
    content:
      "Calēre is run by Alicia Feng, whose partner, Mo Zhou, runs fine-diner Gaea (situated next door). What you might not realise is that this tiny hole-in-the-wall smack-bang in the centre of heart of Gertrude Street dishes up some of Australia's best coffee. A huge claim to make, but one that's deserved. The café uses beans by one of Australia's best coffee roasters, Ona. The result is smooth coffee with various flavour profiles that staff educate you on if you ask. There's also a selected range of cakes, sandwiches and pastries available to accompany your coffee too.",
    website: 'https://www.calerecoffee.com.au',
    instagram: 'https://www.instagram.com/calerecoffee/',
    image: '/assets/calere.jpg',
  },
  {
    title: 'Code Black Coffee',
    author: 'Sang mo',
    location: '15/17 Weston St, Brunswick VIC 3056',
    content:
      'There is a pretty serious hit of coffee here, and the day-to-day operations are fairly formidable. Out the front, there’s the Code Black seasonal blend, as well as a rotating single origin that’s roasted in-house, pumped out by two machines. Suffice to say, the coffee itself, with the beans available for purchase over the counter, is on the favourable side of impressive.',
    website: 'https://codeblackcoffee.com.au/pages/brunswick-hq',
    instagram: 'https://www.instagram.com/codeblackcoffee/',
    image: '/assets/codeblack.jpg',
  },
  {
    title: 'Good Measure',
    author: 'Sang mo',
    location: '193 Lygon St, Carlton VIC 3053',
    content:
      ' Good Measure is a Carlton café by day, bar by night, opened by friends Max Allison, Brandon Jo and Mitchell Miller, at the end of 2021. The trio, inspired by the neighbourhood bars of Japan, have worked at some of Melbourne’s top cafes and bars, and they’ve created a space that fits the brief wonderfully.',
    website: 'https://www.goodmeasure.au',
    instagram: 'https://www.instagram.com/goodmeasuremelbourne/?hl=en',
    image: '/assets/goodmeasure.jpg',
  },
  {
    title: 'Hikari',
    author: 'Sang mo',
    location: '317 Swanston St, Melbourne VIC 3000',
    content:
      'The name Hikari comes from the Japanese word for ‘light’ which is very accurate considering the bright breezy feel at the CBD cafe; inside the minimally elegant Japanese-inspired cafe, wooden shelves and benches provide a refuge from the noise. Half cafe half retail space for Japanese coffee, glassware, and ceramics the entire venue has an almost gallery-esque feel, everything placed with a meaningful intention which adds to the calm atmosphere.',
    website: 'http://www.hikarilife.com.au',
    instagram: 'https://www.instagram.com/hikarilifeau/?hl=en',
    image: '/assets/hikari.jpg',
  },
  {
    title: 'Industry Beans',
    author: 'Sang mo',
    location: '70-76 Westgarth St, Fitzroy VIC 3065',
    content:
      'Industry Beans was founded by brothers Trevor and Steve Simmons. With the vision to create a truly immersive coffee and hospitality experience, they opened the original Industry Beans in Fitzroy in 2013 - a coffee roastery, cafe and brew bar all under one roof. Starting out with only one venue, and two signature espresso blends, Industry Beans quickly made its mark on the Melbourne coffee scene, with a unique brunch menu, welcoming coffee offering and personal service.',
    website: 'https://industrybeans.com/pages/fitzroy-cafe-and-roastery',
    instagram: 'https://www.instagram.com/industrybeans/',
    image: '/assets/industrybean.jpg',
  },
  {
    title: 'Ini Studio',
    author: 'Sang mo',
    location: '225 Queensberry St, Carlton VIC 3053',
    content:
      'INI studio is an inspired space in which the aesthetics of minimalist design revel. The unadorned decor contrasts the elaborate flavours of our artisanal coffee that we take pride in brewing. If you wander up the staircase you’ll arrive to a place where ideas come to life in our  professional photography studio.',
    website: 'https://inistudio.com.au',
    instagram: 'https://www.instagram.com/inistudio_melbourne/?hl=en',
    image: '/assets/inistudio.jpg',
  },
  {
    title: 'Ona Melbourne',
    author: 'Sang mo',
    location: '22 Ovens St, Brunswick VIC 3056',
    content:
      'One of Australia’s most highly regarded specialty roasters, Canberra-based Ona Coffee, makes it’s Melbourne debut in an understated and inviting Brunswick warehouse conversion. Reflective of Ona’s values of sustainability and approachability, this café is about creating an inviting, humble and personal space to enjoy, appreciate and learn about coffee.',
    website: 'https://www.onacoffeemelbourne.com',
    instagram: 'https://www.instagram.com/ona.melbourne/',
    image: '/assets/ona.jpg',
  },
  {
    title: 'The Flour Melbourne',
    author: 'Sang mo',
    location: '199 Victoria St, West Melbourne VIC 3003',
    content:
      "One of the unique features of The Flour Melbourne is its blend of traditional European flavours with inspiration from seasonal Australian produce and native Australian ingredients. There are also occasional Asian flourishes, adding to the diversity of flavours on offer. Some of the standout items include the layered pistachio cake, canelé, assorted cookies and dacquoise. But The Flour Shop isn't just about sweets; it's also known for its top-notch coffee program led by global award-winning barista Harry Ko. With a rotating selection of single-origin beans and unique drinks, The Flour Melbourne is a must-visit for pastry and coffee lovers.",
    website: 'https://www.theflourmelbourne.com',
    instagram: 'https://www.instagram.com/theflourmelbourne/?hl=en',
    image: '/assets/theflour.jpg',
  },
];

async function main() {
  console.log('Start Seeding!');
  for (const post of posts) {
    await prisma.post.create({ data: post });
  }
  console.log('Seeding Finished!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
