
export type MCQ = {
  question: string;
  options: { text: string; isCorrect: boolean }[];
  feedbackCorrect: string;
  feedbackIncorrect: string;
};

export type Slider = {
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  impactTemplate: (value: number) => string;
};

export type ContentBlock = {
  type: 'text' | 'mcq' | 'slider';
  content?: string;
  mcq?: MCQ;
  slider?: Slider;
};

export type SlideSection = {
  title: string;
  blocks: ContentBlock[];
};

export type SlideData = {
  id: number;
  title: string;
  image: {
    id: string;
    alt: string;
  };
  sections: SlideSection[];
};

export const slides: SlideData[] = [
  {
    id: 0,
    title: "Welcome to Ningaloo Reef",
    image: {
      id: "ningaloo-hero",
      alt: "An aerial view of the beautiful Ningaloo Reef",
    },
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "text",
            content: "Welcome, future Ningaloo Guardian! You are about to embark on a journey to one of the Earth's most precious and vibrant marine ecosystems. The Ningaloo Coast, a UNESCO World Heritage site located on the remote western coast of Australia, is a place of breathtaking beauty and staggering biodiversity. Unlike many other large reef systems, Ningaloo is a fringing reef, which means it lies remarkably close to shore. In some places, you can step off the beach and be swimming amongst incredible coral gardens just a few meters away. This accessibility makes it a unique and popular destination for snorkelers and divers, but it also places it at greater risk from human activities. Spanning over 260 kilometers, the reef is home to over 500 species of fish, 300 species of coral, and countless other marine creatures. It's most famous for being one of the world's most reliable locations to encounter the gentle giant of the ocean, the whale shark, which congregates here annually to feed. This interactive experience is designed to not only showcase the wonders of Ningaloo but to equip you with the knowledge and understanding needed to help protect it. Your choices and actions, both big and small, have a real impact on the health of this fragile environment. By the end of this module, you'll understand the threats facing the reef and, more importantly, how you can become a vital part of its preservation for generations to come. Let's dive in and explore this underwater paradise together!"
          },
        ]
      },
      {
        title: "History & Significance",
        blocks: [
          {
            type: "text",
            content: "The Ningaloo Coast's story is written in the ancient limestone of the Cape Range peninsula and the living coral of the reef itself. For thousands of years, this has been the traditional land and sea country of the Baiyungu and Yinikurtira people, who hold a deep cultural and spiritual connection to the area. Their knowledge of the seasons, the wildlife, and the sustainable use of marine resources has been passed down through generations. The name 'Ningaloo' is an Aboriginal word meaning 'deepwater' or 'promontory'. The modern history of the region saw it become a remote pastoral area, but its true value as a global treasure was gradually recognized throughout the 20th century. Scientific research began to uncover the sheer scale of its biodiversity, particularly the annual whale shark aggregation, which brought international attention. This led to a growing tourism industry, but also to a powerful conservation movement. A major turning point came in the early 2000s when a proposal for a large-scale resort at Maud's Landing threatened a critical turtle nesting area. A massive public campaign, 'Protect Ningaloo,' was launched. This grassroots movement, involving scientists, conservationists, and the public, successfully halted the development and raised national awareness about the reef's vulnerability. This victory was a key factor in the Ningaloo Coast being inscribed on the UNESCO World Heritage List in 2011. This prestigious designation recognizes its outstanding universal value, not just for its marine life but also for the unique juxtaposition of a major reef system with a semi-arid terrestrial environment, creating a 'reef-to-range' ecosystem of global significance."
          },
          {
            type: 'mcq',
            mcq: {
              question: "What does the Aboriginal word 'Ningaloo' mean?",
              options: [
                { text: "Shallow Water", isCorrect: false },
                { text: "Coral Garden", isCorrect: false },
                { text: "Deepwater or Promontory", isCorrect: true },
                { text: "Land of Turtles", isCorrect: false },
              ],
              feedbackCorrect: "Excellent! The name reflects the deep connection of the traditional owners to this unique coastal environment.",
              feedbackIncorrect: "Not quite. The name 'Ningaloo' means 'deepwater' or 'promontory', given by the area's traditional owners."
            }
          }
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Ningaloo: A Natural Wonder",
    image: {
      id: "ningaloo-miracle",
      alt: "Sunlight filtering through clear blue water onto a vibrant coral reef.",
    },
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "text",
            content: "The Ningaloo Reef is more than just a beautiful destination; it's a vital, living system that plays a crucial role in the health of our planet. As one of the longest and most pristine fringing reefs in the world, its importance cannot be overstated. This section delves into the ecological services Ningaloo provides, from supporting a mind-boggling array of life to acting as a buffer against climate change. We will explore the unique geographical circumstances that created this 'miracle' reef and investigate the fascinating reasons behind its unusual resilience to the warming ocean temperatures that threaten so many other coral ecosystems. Understanding these fundamental aspects of Ningaloo is the first step to appreciating why its protection is a global priority. The intricate dance between geology, ocean currents, and biology has created a sanctuary that serves as both a natural laboratory and a source of wonder for all who experience it."
          }
        ]
      },
      {
        title: "A Geographical Miracle",
        blocks: [
          {
            type: "text",
            content: "The very existence of Ningaloo is a happy accident of geology and oceanography. The reef's foundation is built upon the fossilized remains of an ancient reef system, which provides a solid platform for modern corals to grow. Its most significant geographical advantage, however, comes from its proximity to the deep, cool waters of the continental shelf. Unlike the Great Barrier Reef, which sits in a wide, shallow lagoon, Ningaloo is perched on the edge of the abyss. This deep water is a lifeline. The Leeuwin Current, a warm tropical current, flows southward along the coast, bringing coral larvae and other tropical species to Ningaloo. Crucially, this is counteracted by the Ningaloo Current, a cooler, nutrient-rich current that flows northward, closer to the shore. This cooler current acts as a natural air conditioner for the reef, buffering it from the extreme temperature spikes that cause mass bleaching events elsewhere. Furthermore, seasonal upwellings bring cold, nutrient-rich water from the deep ocean to the surface, further cooling the reef and providing a vital food source that fuels the entire ecosystem, from the smallest plankton to the giant whale sharks. This unique interplay of currents is the secret to Ningaloo's resilience and its status as a refuge for marine life in a warming world."
          },
          {
            type: 'mcq',
            mcq: {
              question: "What is the primary reason for Ningaloo Reef's resilience to coral bleaching?",
              options: [
                { text: "The corals there are a special, heat-proof species.", isCorrect: false },
                { text: "The influence of the cool, nutrient-rich Ningaloo Current.", isCorrect: true },
                { text: "It is located in a very shady part of the coast.", isCorrect: false },
                { text: "There is a lot of rainfall which cools the reef.", isCorrect: false },
              ],
              feedbackCorrect: "Absolutely! The cooling effect of the Ningaloo Current and deep-water upwellings is the key to its remarkable resilience.",
              feedbackIncorrect: "While the corals are healthy, their resilience is primarily due to the unique ocean currents, especially the cooling Ningaloo Current."
            }
          }
        ]
      },
      {
        title: "Facts: An Ecological Powerhouse",
        blocks: [
          {
            type: "text",
            content: "The importance of Ningaloo can be measured in staggering numbers. Healthy coral reefs are among the most effective carbon sinks on the planet. The process of calcification, where corals build their skeletons, sequesters vast amounts of carbon dioxide from the atmosphere, locking it away in the reef structure. While estimates vary, a healthy reef like Ningaloo can absorb several kilograms of CO2 per square meter per year. Across its 260km length, this amounts to thousands of tons of CO2 captured annually, playing a small but significant role in mitigating climate change. \n\nPerhaps its greatest value lies in its biodiversity. The reef provides a home to over 500 species of fish, from tiny, colorful damselfish to large groupers and sharks. It supports over 300 species of coral, creating a complex, three-dimensional habitat. This structure is critical, offering shelter, breeding grounds, and nurseries for countless organisms. The reef is a vital stop on the migratory path for many species, including humpback whales, dolphins, and dugongs. Six of the world's seven species of sea turtles can be found at Ningaloo, with its beaches being critical nesting grounds for green and loggerhead turtles. The annual aggregation of whale sharks, the world's largest fish, is a testament to the reef's productivity. These gentle giants travel thousands of kilometers to feed on the abundant plankton and krill that bloom in Ningaloo's nutrient-rich waters. The reef doesn't just support life within its boundaries; it also replenishes fish stocks in surrounding waters, supporting local fisheries and livelihoods. Every part of this ecosystem is connected, and its health is a direct indicator of the health of the wider ocean."
          },
          {
            type: 'slider',
            slider: {
                label: "Species Supported by Ningaloo Reef",
                min: 0,
                max: 500,
                step: 25,
                defaultValue: 250,
                impactTemplate: (value: number) => {
                    const percentage = ((value / 500) * 100).toFixed(0);
                    return `A section of reef supporting ${value} fish species represents ${percentage}% of the total fish biodiversity found at Ningaloo.`;
                }
            }
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "The Threat of Sunscreen",
    image: {
      id: "sunscreen-beach",
      alt: "A bottle of sunscreen on a sandy beach",
    },
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "text",
            content: "Protecting our skin from the sun is crucial, especially in a place as sunny as Western Australia. However, the very product we use for protection can cause unintended and severe harm to the delicate coral ecosystems we come to enjoy. Every year, an estimated 14,000 tons of sunscreen wash off swimmers, snorkelers, and divers into coral reef environments worldwide. Many popular sunscreens contain chemical compounds that act as UV filters. While effective for humans, some of these chemicals are highly toxic to marine life, particularly corals. When these chemicals are introduced into the water, they can trigger a process called coral bleaching, disrupt coral reproduction, and even damage their DNA. This section will explore the science behind this 'invisible threat,' identify the specific ingredients to watch out for, and guide you on how to make responsible choices that protect both your skin and the vibrant life of the Ningaloo Reef."
          }
        ]
      },
      {
        title: "The Damaging Chemicals",
        blocks: [
          {
            type: "text",
            content: "The primary culprits in chemical-based sunscreens are oxybenzone and octinoxate. These are two of the most common UV-blocking chemicals used in non-mineral sunscreens. Scientific studies have demonstrated their harmful effects even at extremely low concentrations. Oxybenzone, in particular, is a known endocrine disruptor. For corals, this means it interferes with their reproductive cycles and can cause larval deformities, preventing new corals from growing. It also exacerbates coral bleaching. When corals are stressed by warming waters or pollution, they expel the symbiotic algae (zooxanthellae) living in their tissues, causing them to turn white. Oxybenzone lowers the temperature at which this bleaching occurs, making corals more vulnerable to climate change. Other harmful chemicals include octocrylene, homosalate, and certain parabens used as preservatives. These substances can accumulate in the tissues of marine animals, moving up the food chain and causing wider ecosystem damage. The sheer volume of tourists visiting reefs means these chemicals create a toxic 'film' on the water's surface in popular swimming spots, concentrating the pollution where it can do the most harm."
          },
          {
            type: 'mcq',
            mcq: {
              question: "What is the primary harmful effect of Oxybenzone on corals?",
              options: [
                { text: "It makes the water cloudy.", isCorrect: false },
                { text: "It acts as an endocrine disruptor, harming reproduction.", isCorrect: true },
                { text: "It attracts predators to the reef.", isCorrect: false },
                { text: "It strengthens the coral skeleton.", isCorrect: false },
              ],
              feedbackCorrect: "Correct! Oxybenzone's ability to interfere with hormonal systems is what makes it so damaging to coral reproduction and growth.",
              feedbackIncorrect: "While sunscreen can create a surface film, the most significant danger of Oxybenzone is its role as an endocrine disruptor, which harms coral reproduction."
            }
          }
        ]
      },
      {
        title: "How to Prevent Damage",
        blocks: [
          {
            type: "text",
            content: "The good news is that preventing sunscreen pollution is straightforward. The most effective method is to reduce the amount of sunscreen you need in the first place. Cover up with sun-protective clothing, such as long-sleeved rash guards, leggings, and wide-brimmed hats. This physically blocks UV rays and is the most reef-friendly option available. For exposed skin, choose a 'reef-safe' mineral sunscreen. These sunscreens use physical blockers like non-nano zinc oxide and titanium dioxide. The term 'non-nano' is critical; it means the particles are too large to be ingested by corals. These minerals form a physical barrier on the skin that reflects UV rays, rather than being absorbed by the skin and the environment. When shopping, actively read the ingredients list. Don't just trust front-of-bottle marketing terms like 'reef-friendly,' as these are often unregulated. Explicitly look for a label that says 'oxybenzone-free' and 'octinoxate-free,' and check that the active ingredients are non-nano mineral blockers. By making this simple switch, you directly contribute to the health and resilience of the Ningaloo Reef, ensuring its colors remain vibrant for years to come."
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Treading Lightly on the Reef",
    image: {
      id: "coral-reef",
      alt: "Close-up of colorful coral formations",
    },
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "text",
            content: "It's easy to think of coral reefs as robust, rock-like structures, but they are, in fact, colonies of thousands of tiny, fragile animals called polyps. These polyps build the intricate calcium carbonate skeletons that form the reef structure we see. A single coral head can represent decades, or even centuries, of slow, patient growth. This makes them incredibly vulnerable to physical damage. A misplaced step from a reef walker, a careless kick from a snorkeler's fin, or an anchor dropped in the wrong place can shatter years of growth in an instant. This section will highlight the fragility of the reef structure and provide you with the principles of 'treading lightly'—the essential etiquette for anyone entering the water at Ningaloo."
          },
        ]
      },
      {
        title: "The Damage of a Single Touch",
        blocks: [
          {
            type: "text",
            content: "Coral polyps are covered by a thin layer of living tissue and a protective mucus layer. Touching coral can damage this delicate membrane, leaving the coral skeleton exposed and vulnerable to infection and disease. The oils and bacteria on human skin can also be harmful to the polyps. Furthermore, the physical pressure can break the fragile branches of branching corals or crush the delicate structures of plate corals. This damage is not easily repaired. While some corals can regrow, the process is incredibly slow, with some species growing only a few millimeters per year. A broken section of coral is a wound that the colony must expend significant energy to heal, diverting resources away from growth and reproduction. If the damage is extensive, the entire colony can die. This has a ripple effect, as countless other organisms, from small fish to invertebrates, rely on the complex, three-dimensional structure of the coral for shelter and food."
          },
          {
            type: 'slider',
            slider: {
              label: "Cumulative Impact of Human Carelessness",
              min: 0,
              max: 20000,
              step: 1000,
              defaultValue: 5000,
              impactTemplate: (value: number) => {
                // Assuming each person stands on coral twice a day, and each instance destroys 50g (0.05kg) of coral.
                // Over one week (7 days):
                const dailyImpactPerPerson = 2 * 0.05; // kg
                const weeklyImpactPerPerson = dailyImpactPerPerson * 7;
                const totalImpact = (value * weeklyImpactPerPerson).toFixed(0);
                return `Hypothetically, if ${value.toLocaleString()} people stood on coral multiple times a day, over one week approximately ${totalImpact.toLocaleString()} kg of coral could be destroyed.`;
              }
            }
          }
        ]
      },
      {
        title: "How to Prevent Damage",
        blocks: [
          {
            type: "text",
            content: "Practicing good reef etiquette is simple and highly effective. First and foremost, never stand on, kick, or touch the coral. When snorkeling or diving, maintain a safe and respectful distance. Be aware of your fins at all times; a common mistake is kicking up sand, which can smother and kill corals, or kicking the coral itself. Practice buoyancy control so you can hover effortlessly above the reef without needing to push off or stand on anything. If you need to rest, find a sandy patch well away from any coral. When entering and exiting the water, use designated paths and avoid walking across shallow reef flats. If you're on a boat, ensure the skipper uses designated moorings instead of dropping an anchor on the reef. An anchor and its chain can cause immense destruction, leaving a 'scar' of rubble that can take decades to recover. By being mindful and deliberate with your movements, you can explore the wonders of Ningaloo without leaving a trace."
          },
          {
            type: 'mcq',
            mcq: {
              question: "What is the best way to avoid damaging coral while snorkeling?",
              options: [
                { text: "Wear gloves to protect your hands.", isCorrect: false },
                { text: "Maintain good buoyancy and keep your fins away from the coral.", isCorrect: true },
                { text: "Swim quickly through the reef.", isCorrect: false },
                { text: "Rest on the most stable-looking corals.", isCorrect: false },
              ],
              feedbackCorrect: "Perfect! Awareness of your body, especially your fins, and maintaining neutral buoyancy are the key skills for reef-safe snorkeling.",
              feedbackIncorrect: "Touching coral, even with gloves, can cause damage. The best practice is to avoid all contact by controlling your buoyancy and fin kicks."
            }
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Respecting Marine Wildlife",
    image: {
      id: "turtle-swimming",
      alt: "A sea turtle swimming in the ocean",
    },
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "text",
            content: "One of the greatest thrills of visiting Ningaloo is the chance to encounter its spectacular marine wildlife up close. From majestic whale sharks and graceful manta rays to sea turtles, dolphins, and dugongs, the reef is teeming with iconic species. These are wild animals in their natural habitat, and our interactions with them must be guided by respect and a commitment to their well-being. Actions that seem harmless, like getting too close, chasing an animal for a photo, or offering it food, can cause significant stress and disrupt vital behaviors like feeding, resting, and breeding. The principle is simple: we are visitors in their home. This section will outline the official codes of conduct and the ethical considerations for interacting with Ningaloo's incredible wildlife."
          }
        ]
      },
      {
        title: "The Impact of Human Interaction",
        blocks: [
          {
            type: "text",
            content: "When humans get too close to wild animals, it can trigger a stress response. For a sea turtle resting on the seafloor or a manta ray being cleaned at a 'cleaning station,' a nearby snorkeler can be perceived as a threat, causing it to flee. This wastes precious energy that the animal needs for foraging and migration. Chasing wildlife is particularly harmful. It can lead to exhaustion, cause a mother to become separated from her young, or interrupt mating rituals. Feeding marine life is another major issue. It alters their natural diet, which can lead to health problems, and it conditions them to associate humans with food. This can make them aggressive and dependent, losing their ability to forage for themselves. It also attracts large numbers of fish to one area, leading to unnatural competition and the potential spread of disease. At Ningaloo, there are strict, legally binding codes of conduct for interacting with key species like whale sharks and humpback whales to minimize this disturbance. These rules, developed through years of research, dictate minimum approach distances and the number of swimmers allowed in the water at any one time, ensuring the encounters are safe and sustainable for both humans and the animals."
          },
          {
            type: 'mcq',
            mcq: {
              question: "Why is feeding fish harmful?",
              options: [
                { text: "It helps them survive.", isCorrect: false },
                { text: "It's a great way to get a photo.", isCorrect: false },
                { text: "It can alter their natural behavior and diet.", isCorrect: true },
                { text: "It's a tradition at Ningaloo.", isCorrect: false },
              ],
              feedbackCorrect: "Exactly! Feeding wildlife disrupts the natural balance of the ecosystem and can lead to a host of problems for the animals.",
              feedbackIncorrect: "Feeding fish might seem helpful, but it actually harms them by making them dependent, altering their diet, and potentially causing aggression."
            }
          }
        ]
      },
      {
        title: "How to Interact Respectfully",
        blocks: [
          {
            type: "text",
            content: "The golden rule of wildlife encounters is to be a passive observer. Let the animal control the interaction. Never touch, chase, or block the path of any marine creature. If you are in the water, move slowly and deliberately. When observing an animal, maintain the recommended approach distance—for example, you must stay at least 3 meters from a whale shark's body and 4 meters from its tail. Do not use flash photography, as the sudden burst of light can startle animals. Choose your tour operator wisely. Reputable, eco-certified operators at Ningaloo are deeply committed to the codes of conduct and will provide a thorough briefing on respectful interaction before you get in the water. They play a crucial role in managing interactions and educating visitors. By following their lead and adhering to these simple but vital rules, you ensure that your unforgettable wildlife encounter doesn't come at the animal's expense."
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "The 'Protect Ningaloo' Legacy",
    image: {
      id: "ningaloo-coast",
      alt: "The rugged coastline of the Ningaloo region",
    },
    sections: [
      {
        title: "Overview",
        blocks: [
          {
            type: "text",
            content: "The protection of Ningaloo Reef is not just a matter of government policy; it is a story of passionate individuals and communities coming together to defend a place they love. The 'Protect Ningaloo' campaign is a powerful example of how grassroots advocacy can safeguard a global treasure from the pressures of industrialization. While the reef is now a World Heritage site, it still faces threats from climate change, pollution, and potential future development proposals. Understanding this history of advocacy is crucial, as it reminds us that the ongoing protection of Ningaloo depends on the vigilance and active participation of people like you. Your awareness and voice are a continuation of this legacy."
          }
        ]
      },
      {
        title: "A History of Advocacy",
        blocks: [
          {
            type: "text",
            content: "The defining moment for the 'Protect Ningaloo' movement came in 2003. A proposal was put forward to build a major marina and resort at Maud's Landing, right next to a critical nesting site for endangered loggerhead turtles. The initial environmental assessments were flawed, and the local community felt their concerns were being ignored. In response, a coalition of conservation groups, including the Australian Marine Conservation Society and the Cape Conservation Group, launched a massive public awareness campaign. They organized rallies, gathered petitions with tens of thousands of signatures, and generated widespread media coverage. The campaign used the powerful imagery of the reef and its iconic wildlife, particularly the turtles, to capture the public's imagination. Scientists provided crucial evidence on the environmental risks, while musicians and artists, like Tim Winton and John Butler, lent their voices to the cause. The pressure became immense, and eventually, the Western Australian government was forced to reject the proposal. This victory demonstrated the power of a united community and set a precedent for putting conservation first. It was this powerful advocacy that paved the way for the successful World Heritage nomination a few years later."
          }
        ]
      },
      {
        title: "Your Role in the Legacy",
        blocks: [
          {
            type: "text",
            content: "The spirit of the 'Protect Ningaloo' campaign lives on. While the threat of large-scale development has receded, the reef faces the pervasive challenge of climate change, which causes coral bleaching, as well as threats from plastic pollution and pressures from tourism. Your role as a Ningaloo Guardian is to be an informed and responsible visitor. By completing this module, you've already taken the first step. You can continue the legacy by sharing what you've learned with others, making conscious consumer choices (like choosing reef-safe sunscreen and sustainable seafood), and supporting the organizations that continue to work on the front lines of marine conservation. You can participate in citizen science projects, such as reporting wildlife sightings or participating in beach clean-ups. Every action, no matter how small, contributes to a culture of conservation that is essential for the reef's future. You are now part of a global community of people who care deeply about this extraordinary place. Welcome to the team."
          },
          {
            type: 'mcq',
            mcq: {
              question: "What was the main threat that sparked the 'Protect Ningaloo' campaign?",
              options: [
                { text: "A proposed oil rig", isCorrect: false },
                { text: "A large marina and resort development", isCorrect: true },
                { text: "Overfishing", isCorrect: false },
                { text: "Sunscreen pollution", isCorrect: false },
              ],
              feedbackCorrect: "Correct! The proposed development at Maud's Landing was the catalyst for one of Australia's most significant environmental campaigns.",
              feedbackIncorrect: "While those are all potential threats, the specific trigger for the major 'Protect Ningaloo' campaign was a large marina and resort proposal at Maud's Landing."
            }
          }
        ]
      }
    ]
  }
];
