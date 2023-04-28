import { motion } from 'framer-motion';
import React from 'react';
import Layout from '../components/Layout2';
import AnimatedTitle from '../components/AnimatedTitle';
// import CardWithGlow from '../components/CardWithGlow';
import ImageCard from '../components/ImageCard';
// import ScrollComp from '../components/ScrollComp';
// import CardFlip from '../components/CardFlip';
import AnimatedText from '../components/AnimatedText';
// import VerticalTimeline from '../components/Timeline';

const categories = [
  'Odysseus',
  'Hercules',
  'Achilles',
  'Perseus',
  'Theseus',
  'Aeneas',
  'Jason',
  'Orpheus',
];

const items = [
  {
    name: 'Origin',
    category: 'Odysseus',
    info:
      'Son of Laertes and Anticlea. From the island of Ithaca in the western coast of Greece. The exact time period is debatable, but it’s around the time of the Trojan War 1200 BCE',
  },
  {
    name: 'Heroic Act',
    category: 'Odysseus',
    info:
      'Devised the Trojan Horse, which led the Greeks to victory over the Trojans. He is extremely intelligent and he has an Unwavering loyalty to his family and homeland during his challenges going home to Ithaca',
  },
  {
    name: 'Other Contribution',
    category: 'Odysseus',
    info:
      'His cleverness and wit outsmart enemies. He tricked the cyclops Polyphemus into getting drunk, then blinded him and led his men to escape its lair.',
  },
  {
    name: 'Origin',
    category: 'Hercules',
    info:
      'He was son of Zeus and Alcmene. From the city of Thebes in Greece Around 1600 BCE to 1100 BCE. ',
  },
  {
    name: 'Heroic Act',
    category: 'Hercules',
    info:
      'Completed the Twelve Labors which included but not limited to slaying many monsters. He also saved Theseus from the underground',
  },
  {
    name: 'Other Contribution',
    category: 'Hercules',
    info:
      'There’s a constellation named Hercules after him. He held up the sky for Atlas.',
  },
  {
    name: 'Origin',
    category: 'Achilles',
    info:
      'Son of Peleus and Thetis. From the region of Thessaly in Greece. The exact time period is uncertain but was probably in 1200 BCE',
  },
  {
    name: 'Heroic Act',
    category: 'Achilles',
    info:
      'Greatest warrior among the Greeks and was invulnerable everywhere except for his heel. Played a major role during the Trojan War.',
  },
  {
    name: 'Other Contribution',
    category: 'Achilles',
    info:
      'He was invulnerable except for his heel, which became known as the “Achilles heel”. He also defeated Hector, the greatest Trojan warrior, during the Trojan War.',
  },
  {
    name: 'Origin',
    category: 'Perseus',
    info:
      'Son of Zeus and Danae. From the city of Argos in the northeastern part of the Peloponnese in Greece. Time period was approximately 1200 BCE.',
  },
  {
    name: 'Heroic Act',
    category: 'Perseus',
    info:
      'He Slayed Medusa and used her head to turn his enemies to stone. Rescued Andromeda from a sea monster. Heroic deeds as a founding member of the city of Mycenae',
  },
  {
    name: 'Other Contribution',
    category: 'Perseus',
    info:
      'Was aided on his quest to slay Medusa by many magical items like the helmet of invisibility, winged sandals, and a reflective shield. Perseus was the ancestry of many other Greek heroes, such as Hercules and Theseus.',
  },
  {
    name: 'Origin',
    category: 'Theseus',
    info:
      'Son of Aegeus and Aethra. From Athens, Greece. Believed to have lived around 1200 BCE',
  },
  {
    name: 'Heroic Act',
    category: 'Theseus',
    info:
      'Brave, intelligent, and cunning, with a strong sense of justice. Champion of the people and often fought against corrupt rulers to defend the rights of the common people. Son of Aegeus, the king of Athens Slayed the Minotaur and several other dangerous beasts and villains',
  },
  {
    name: 'Other Contribution',
    category: 'Theseus',
    info:
      'Was a skilled wrestler and athlete Invented famous athletic competitions like the Panathenaic Games',
  },
  {
    name: 'Origin',
    category: 'Aeneas',
    info:
      'Son of Anchises and Aphrodite. From Troy, a city located in modern-day Turkey Lived around 1200 BCE.',
  },
  {
    name: 'Heroic Act',
    category: 'Aeneas',
    info:
      'Pietous, brave, and a good leader. Founded Rome Trojan prince who survived the fall of Troy',
  },
  {
    name: 'Other Contribution',
    category: 'Aeneas',
    info:
      'Deeply religious person. Respected warrior and commander who was able to unite several different groups of people. He founded the city of Lavinium which eventually became one of the greatest powers in the ancient world',
  },
  {
    name: 'Origin',
    category: 'Jason',
    info:
      'Son of Aeson and Alcimede. From Iolcus, a city in Thessaly, Greece. Lived around 1200 BCE',
  },
  {
    name: 'Heroic Act',
    category: 'Jason',
    info:
      'Assembled a group of heroes called the Argonauts to find the Golden Fleece and overcame the obstacles to eventually reach the goal',
  },
  {
    name: 'Other Contribution',
    category: 'Jason',
    info:
      'Aided in his quest by Medea, who fell in love with him, Jason abandoned Medea and their children to marry another woman and Media killed his new wife and children, causing him to live in grief and misery.',
  },
  {
    name: 'Origin',
    category: 'Orpheus',
    info:
      'Son of Oeagrus and Calliope, From Thrace, a region in southeastern Europe that is now divided between Greece, Bulgaria, and Turkey. Lived around 1200 BCE',
  },
  {
    name: 'Heroic Act',
    category: 'Orpheus',
    info:
      'Musically talented and devoted to his wife, Eurydice Able to charm gods with music Moved Hades with his music and had a chance to bring back his wife from the underworld',
  },
  {
    name: 'Other Contribution',
    category: 'Orpheus',
    info:
      'Used his musical ability to win back his wife from the underworld after she died. When he looked back at his wife while leaving the underworld, she was lost to him forever. Said to have inspired the creation of the Orphic Mysteries, a religious cult whose influence can be seen in the writings of authors such as Plato and Ovid.',
  },
];

export const test = (): JSX.Element => (
  <motion.div
    initial="pageInitial"
    animate="pageAnimate"
    variants={{
      pageInitial: {
        opacity: 0,
      },
      pageAnimate: {
        opacity: 1,
      },
    }}
  >
    <Layout
      customMeta={{
        title: 'Greek Mythology',
      }}
    >
      <h3 className="flex items-center justify-center mb-14">
        <AnimatedTitle text="Heroes?" />
      </h3>
      <div>
        As I read the Odyssey with our hero Odysseus, I began to wonder how he
        fit in our definition of a hero, especially during our recent times as
        many heroes from Greek mythology have been redefined to fit our current
        modern times. I will be exploring the definition of a hero and how
        Odysseus fits and also how he has been redefined if any at all. And
        Lastly what this difference in his heroism says about the cultural
        values within the context? So let&apos;s begin with the definition of a
        hero. Merriam-Webster defines them to be more general as &ldquo;a
        mythological or legendary figure often of divine descent endowed with
        great strength or ability&rdquo; while Oxford Classical Dictionary
        defines them to be &ldquo;a class of beings worshipped by the Greeks,
        generally conceived as the powerful dead, and often as forming a class
        intermediate between gods and men&rdquo;. With these definitions in
        mind, let&apos;s compare 8 well-known heroes and their profiles to
        answer the question:
      </div>
      <div style={{ height: '20px' }} />
      <div className="text-center italic">
        <p className="mb-2">
          &ldquo;Is Odysseus even a hero and how does he differ from other
          heroes?&rdquo;
        </p>
        {/* <p className="font-bold">me</p> */}
      </div>
      <div style={{ height: '20px' }} />
      <div className="grid grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category}>
            <h2 className="mb-4">{category}</h2>
            {items
              .filter((item) => item.category === category)
              .map((item) => (
                <div key={item.name} className="mb-2">
                  <h3 className="mb-1 font-bold">{item.name}</h3>
                  <p className="text-sm">{item.info}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
      <div style={{ height: '20px' }} />
      <hr></hr>
      <div style={{ height: '20px' }} />
      <div>
        So those were some brief comparisons between some of the renowned
        heroes, and as we saw, we many heroes who slayed mythological creatures
        and even stood their ground against the Olympian Gods, however, it is
        apparent that there are other heroes such as Aeneas with his leadership,
        and even Theseus with his cleverness survives the labyrinth. So it is
        clear that Odysseus deserves his title of Hero in his ability to be
        cunning and clever in his journey and his connection to the Gods. The
        definition that I lean toward is the Merriam-Webster definition. Then
        why is it that sometimes we don&apos;t see Odysseus as a hero? Why is it
        that this question was even asked? Well, I think it lies in the
        development and the redefined characterization of heroes in our modern
        times. Let&apos;s take a look at some of the heroes that we see in our
        modern times in pictures, and see what that tells us about the cultural
        values and how it has changed since the time of the Greeks. Then,
      </div>
      <div style={{ height: '20px' }} />
      <div className="text-center italic">
        <p className="mb-2">
          &ldquo;How does modern depiction of hero impact cultural values over
          time, and how does that change how Odysseus is perceived?&rdquo;
        </p>
        {/* <p className="font-bold">me</p> */}
      </div>
      <div style={{ height: '20px' }} />
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <ImageCard
            imageUrl="/images/percy.png"
            title="Percy Jackson and the Lightning Theif"
            description="This is one of the most well known greek myth related literature, and often the first exposure to greek mythology for many children."
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <ImageCard
            imageUrl="/images/hercules.jpg"
            title="Hercules Movie"
            description="This is the Disney Hercules movie. Again, there are many emphasis on this all mighty powerful hero with massive strength."
          />
        </div>
      </div>
      <div style={{ height: '20px' }} />
      <div style={{ height: '20px' }} />
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <ImageCard
            imageUrl="/images/marvel.jpg "
            title="Marvel heroes"
            description="Collections of many original marvel heroes that have verious strengths and abilities. This goes beyond just strength, and briefly shows the diversity of heroes but still emphasizes on the pure power of many heroes and monsters most of the time"
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <ImageCard
            imageUrl="/images/hercules1.png"
            title="Hercules AI"
            description="This is an image that was queried on the Image generation AI, Dall-E and it shows a hercules with a trident which shows a mix of truth and modern fantasy."
          />
        </div>
      </div>
      <div style={{ height: '20px' }} />
      <div style={{ height: '20px' }} />
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <ImageCard
            imageUrl="/images/perseus1.png"
            title="Perseus AI"
            description="This is also similar to the Hercules AI, and it shows a mix of truth and modern fantasy, and it is possible that these depictions that AI created are pulled from the popular depiction of Percy Jackson who is son of Poseidon in the book series"
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <ImageCard
            imageUrl="/images/dalle1.png"
            title="Heroes AI"
            description="This is what Dall-E spits out when asked about the modern representation of heroes, which shows again, this flashy hero that is able to save people and show off their physical prowess, but also it displays children as heroes as well which feeds the narrative of children having one of the biggest influence of these modern hero representations."
          />
        </div>
      </div>
      <div style={{ height: '20px' }} />
      <h3 className="flex justify-center font-bold">Reflection</h3>
      <div style={{ height: '20px' }} />
      <AnimatedText
        text="As seen from some of the images, we see that there are many different ways that heroes are depicted. 
        I think we are initially obsessed with the physical prowess of the heroes, and that's purely due to how most of us grow up 
        loving the idea of becoming a powerful character saving the world, and it's often harder to see looking up to intelligence in any context.
        It is also apparent that many modern fantasies and media have created a diverging identity of some of the heroes. One of the biggest and the most obvious 
        examples is Percy Jackson. Many people often don't even know that Perseus is the son of Zeus, and as you saw from some of the AI generations, many images 
        have shown that mix of truth and modern fantasy.  I think this is a great example of how time has changed the perception of heroes. (Continue to the next paragraph below)"
      />
      <div style={{ height: '20px' }} />
      <AnimatedText
        text="I think this difference in the depiction of heroes gives us a measurement of how our cultural values have changed over time. It is also heavily more accepted
        now that heroes are not just the ones with physical prowess, but also the ones with intelligence and leadership. We have heavily moved past the simple idea of power from 
        the growth of technology, health, and education. This is more apparent in our society where we appreciate many working-class heroes such as doctors, nurses, teachers, etc. 
        However, even beyond that, we began to see heroes in fantasy such as Marvel that address leadership, and intelligence as their identity and not just extreme physical prowess.
        I would even argue Captain America is one of the heroes that fall into these categories. I think these changes in our cultural values have changed how we perceive Odysseus as a hero.
        Even though Odysseus was often seen as the hero partly due to his Godly connection since cultural values at the time heavily valued this, now we are able to redefine his position as a hero
        beyond just his connection, but instead through his character and strength in leadership and intelligence.  "
      />
      {/* <div style={{ height: '20px' }} />
      <h3 className="flex justify-center">THINGS1</h3>
      <AnimatedText
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        lectus eu elit laoreet, ac consectetur elit fringilla. Pellentesque
        tempor ex eget semper viverra. Fusce id luctus urna, in volutpat augue."
      />
      <div style={{ height: '20px' }} />
      <h3 className="flex justify-center">THINGS1</h3>
      <AnimatedText
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        lectus eu elit laoreet, ac consectetur elit fringilla. Pellentesque
        tempor ex eget semper viverra. Fusce id luctus urna, in volutpat augue."
      />
      <div style={{ height: '20px' }} />
      <h3 className="flex justify-center">THINGS1</h3>
      <AnimatedText
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        lectus eu elit laoreet, ac consectetur elit fringilla. Pellentesque
        tempor ex eget semper viverra. Fusce id luctus urna, in volutpat augue."
      />
      <div style={{ height: '20px' }} /> */}
      <div style={{ height: '20px' }} />
      <h2 className="flex justify-center">END</h2>
      <div style={{ height: '20px' }} />
      <hr></hr>
    </Layout>
  </motion.div>
);
export default test;
