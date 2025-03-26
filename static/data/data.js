
export const data = {
  links: [
    // ['instagram ↗', 'https://www.instagram.com/buitragojara'],
    ['about me', '/about'],
    ['linkedin ↗', 'https://www.linkedin.com/in/mateobuitrago/'],
    ['dmateobuitrago [at] gmail.com', 'mailto:dmateobuitrago@gmail.com'],
  ],
  projects: [
    {
      title: "Friction free checkout",
      id:"7",
      slug:"travelperk-checkout",
      isExternal: true,
      tagline: "Reduced friction for people booking travel on TravelPerk, while enhancing design patterns.",
      image: "checkout/hero.png",
      externalUrl:"https://travelperk.design",
    },
    {
      title: "TravelPerk Design Tokens",
      id:"6",
      slug:"travelperk-design-tokens",
      isExternal: true,
      tagline: "Designed and built the structure to manage design tokens on TravelPerk design system",
      image: "tokens/hero.png",
      externalUrl:"https://travelperk.github.io/frontend/?path=/docs/design-tokens-overview--docs",
    },
    {
      title: "Verse App",
      id: "5",
      slug: "verse-app",
      isExternal: false,
      tagline: "Worked as Product Designer →",
      tags: "ui design",
      image: "verse/hero.png",
      tldr:
        "Verse allow friends to send money between them, to pay their debts and share expenses easily by just sharing a phone number or an username.I work closely with PMs, developers and our CEO to improve and develop new experiences for our users. Most of my time I work on our mobile app (Android and iOS), some times in web experiences and few times helping our Marketing department.",
      summary: {
        year: "2019-20",
        role: "product design, ux - ui"
      },
      content: [
        {
          type: "TitleAndText",
          title: "User research",
          content: [
            {
              type: "body",
              text: "At Verse our users are one of the most important factors. I've been working closely with Customer Success and CRM teams to understand and know our users better through user interviews. In the other hand, it's also important to constantly test the usability of our app, of current and new features."
            },
          ]
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Onboarding and KYC",
          content: [
            {
              type: "body",
              text: "Creating a seamless experience is critical for a payments app and we want to make it as easy as possible for our users."
            },
          ]
        },
        {
          type: "ImageWithCaption",
          caption: "Tracking intereactions with tools such as Firebase is essential to improve the experience.",
          image: "verse/onboarding.png",
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Groups feature",
          content: [
            {
              type: "body",
              text: "One of Verse differential features is Groups. Friends are able to easily share expenses and keep track of them. It's super useful for flatmates, trips and even to collect money for a present. We are constantly improving this feature, that much that people say that Verse is 'Spiltwise with Bizum(most popular payment app in Spain)'."
            },
          ]
        },
        {
          type: "ImageWithCaption",
          caption: "Our users have a clear view of the expenses they are sharing and the balance of the group.",
          image: "verse/groups1.png",
        },
        {
          type: "ImageWithCaption",
          caption: "Users can choose if they want to settle their debts in the app or outside the app. This helps groups of friends where not all of them are Verse users.",
          image: "verse/groups2.png",
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "VerseCard",
          content: [
            {
              type: "body",
              text: "Having a card for a fintech seems something trivial, but delivering the perfect card is essential. We are in the making of this card and it's experience both in and outside the app."
            },
          ]
        },
        {
          type: "ImageWithCaption",
          caption: "",
          image: "verse/versecard.png",
        },
        {
          type: "Divider"
        },
      ]
    },
    {
      title: "Juan-on-Juan",
      id: "1",
      slug: "juan-on-juan",
      isExternal: false,
      tagline: "I designed a website for an sports magazine →",
      tags: "ui design",
      image: "juan/juan_hero.png",
      tldr:
        "I designed the website for an online sports publication, featuring latin american athletes all over the world. This small publication releases between 3-4 stories a day and one weekly special story. I was asked to propose design for those type of stories and the homepage.",
      summary: {
        year: "2019",
        timeframe: "3 weeks",
        tools: "keynote, sketch, pen & paper",
        client: "school project at harbour.space",
        role: "ui design, branding"
      },
      content: [
        {
          type: "TitleAndText",
          title: "The brief: Designing media",
          content: [
            {
              type: "body",
              text:
                "Our fictional client was an online publication exploring life and culture through thematic , visually-oriented international coverage and commentary. They were part of a large publishing organization and they were an small team writing about several topics, focusing on releasing stories daily (about 4 or 6) and one long form weekly story."
            },
            {
              type: "body",
              text:
                "Our client was looking to launch a new online publication, so they were asking us to come up with:"
            },
            {
              type: "list",
              list: [
                "Ideas about the name for our publication",
                "Initial art direction and look and feel",
                "Concept for home page",
                "Concept for short story",
                "Concept for long story"
              ]
            }
          ]
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "The brand",
          content: [
            {
              type: "body",
              text:
                "Since this was an international publication featuring latinamerican athletes, I decided to play with the languange: Juan on Juan = two latinos playing basketball. Regarding typography and colors, it was necessary to differentiate the brand from all this black and white, rude male-only sports publications."
            }
          ]
        },
        {
          type: "ImageWithCaption",
          image: "juan/logo.png",
          caption: "Logo, typography and color palette."
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Sketches and initial explorations.",
          content: [
            {
              type: "body",
              text:
                "For me, the best way to start a project is on paper because is a fast way to getting ideas real and start deciding what would work and what not. One of the *(key learnings)* from this class was that you can define a grid on paper and sketch over it, then when you start working on the computer it would be easier to design and layout your components."
            }
          ]
        },
        {
          type: "BigImage",
          image: "juan/sketches.png",
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Daily stories - short form",
          content: [
            {
              type: "body",
              text:
                "Our client needed a short story format, which they could publish from the CMS, with predefined components that can be placed as thed wanted. They should be able to add text, images, quotes, etc."
            },
            {
              type: "body",
              text:
                "Most of the components I decided to keep really simple: one column text, big quotes. The standing piece of the short story would be the opening. It would mix a court layout, that would change depending on the sport of the story, and photography, bringing a dynamic and always different design for each story, without needing to redesign it every time."
            }
          ]
        },
        {
          type: "ImageWithCaption",
          caption: "Daily story design about best latin american basketball players.",
          image: "juan/short_story.gif",
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Special story - long form",
          content: [
            {
              type: "body",
              text:
                "Manu Ginobili, one of the greatest latin american NBA players announced his retirement in 2018, and a journalist wrote an special story about how his career was so similar to Mo Rivera, one MLB latin american legend. I found this piece so interesting that I decided this to be my long story to pitch my design."
            },
            {
              type: "body",
              text:
                "Long story form is the dream of any designer, you would be in a team of developers, writers and producers to create an special story. So there were no limits at all. (At least in class)."
            }
          ]
        },
        {
          type: "ImageWithCaption",
          caption: "Long story intro about the comparison between Manu Ginobilli and Mo Rivera.",
          image: "juan/juan_long_story.png",
        },
        {
          type: "VideoWithCaption",
          caption: "Interactive quiz where readers had to guess facts about the players, as if they were playing with trading cards.",
          video: "juan/video.mp4",
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Homepage and navigation",
          content: [
            {
              type: "body",
              text:
                "The homepage is the place where our publisher would be able to highlight stories, videos, and even writers. Also the visitors of Juan-on-Juan would be able to see and follow livescores from the top leagues."
            },
            {
              type: "body",
              text: "The navigation of the website was very short and simple, we would rely on the leagues: NBA, NFL, MLS, Fútbol ('cause that's they way you say it), NCAA and More. Supporting pages such as About us, Terms of use and so on would live in the footer with a lower visual hierarchy."
            }
          ]
        },
        {
          type: "BigImage",
          image: "juan/homepage_navigation.png",
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Presenting",
          content: [
            {
              type: "body",
              text:
                "One of the biggest misconceptions that I had about working in Design, is that the work should speak by itself so you shouldn't have to sell it, because it was so well done that no words or presentations were needed. WRONG!"
            },
            {
              type: "body",
              text:
                "A big part of working as a Designer is selling your ideas. Yes! Presenting it in front of your clients or colleagues. The idea is as important as the story you tell when you present it. And no presentation would be awesome without preparing it."
            }
          ]
        },
        {
          type: "ImageWithCaption",
          caption: "Sharing the framework of your design is important to support your decisions on the screen.",
          image: "juan/grid.gif",
        },
        {
          type: "ImageWithCaption",
          caption: "Even if it is 'just a ui project', storytelling is important when presenting an idea. ",
          image: "juan/presentation.png",
        },
      ]
    },
    {
      title: "Print.eat",
      id: "2",
      slug: "print-eat",
      isExternal: false,
      tagline: "How would we eat in 2080? →",
      tags: "speculative design",
      image: "printeat/hero.png",
      tldr:
        "The planet is suffering and as a society we need to change our habits in order to save it. Within a more controlled dynamics, where meat and imported fruits are almost forbidden, we would adapt our dietary habits and thanks to technology and food printing we would be able to enjoy every meal.",
      summary: {
        year: "2019",
        timeframe: "6 weeks",
        tools: "keynote, sketch, pen & paper",
        team: "Rodrigo Salmerón and Vasudha Mundra",
        client: "school project at harbour.space",
        role: "brand and concept, ui design"
      },
      content: [
        {
          type: "TitleAndText",
          title: "The brief",
          content: [
            {
              type: "body",
              text: "The year is 2080. Our planet is in the best shape it's been in sixty years. It's recovering from the ecological emergency of 2020 and, as a global society, we're managing natural resources better thanks to a new economy."
            },
            {
              type: "body",
              text: "Design and develop innovation concepts (products, services, experiences) that generate and redefine personal wellbeing through this new economy. Your new-to-the-world concepts will act as proof of people and the planet living in balance."
            } 
          ]
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Research",
          content: [
            {
              type: "body",
              text: "To approach this future design project, we did research to find out how would a preferred future would looke like and which challenges we will have to face as a society. We did this through:"
            },
            {
              type: "list",
              list: [
                "Desk research: news articles, scientific papers, documentaries, etc",
                "Interviews with: Environmental scientists, Biologists, Lawyers, Internationalists, Organic shops owners, Common people",
              ]
            }
          ]
        },
        {
          type: "Divider"
        },
        {
          type: "BigImage",
          image: "printeat/research.jpg",
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Opportunities - How our future would look like?",
          content: [
            {
              type: "body",
              text: "One of the main takeaways of the research is to clearly define a problem to identify opportunities. The areas we decided to focus were:"
            },
            {
              type: "list",
              list: [
                "Dietary Shift: Livestock is responsible for over 15% of greenhouse gas emissions. 70% of global agricultural land is used for livestock production. All of this while 800 million people live chronically hungry, this cropland use is unacceptable.",
                "The closer the better: Local farming requires fewer chemicals, water, energy, and transportation compared to large scale agricultural practices that depend on heavy pesticides, monoculture, and account for 70% of Earth's fresh water usage.",
              ]
            }
          ]
        },
        {
          type: "TitleAndText",
          title: "2080: New dietary habits",
          content: [
            {
              type: "list",
              list: [
                "A local farm in every neighbourhood",
                "A membership to belong to the shared community",
                "A communal kitchen for every farm",
                "Meat is expensive",
                "Availability of foreign ingredients is limited",
                "Creating dishes and cooking has become dull"
              ]
            }
          ]
        },
        {
          type: "TitleAndText",
          title: "2080: New age, new needs",
          content: [
            {
              type: "body",
              text: "Cooking and eating has become boring in 2080. The joy of tasting has been dissapearing while we saved the planet. New ways of creating food will be needed and here's where our service was born. "
            }
          ]
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Our solution for the preferred future: Print.eat",
          content: [
            {
              type: "body",
              text: "An on demand 3D food printing platform that helps people innovate."
            },
            {
              type: "list",
              list: [
                "Create new food and flavors",
                "Print it in your shared kitchen",
                "Cook it or take it to your favorite restaurant"
              ]
            }
          ]
        },
        {
          type: "Divider"
        },
        {
          type: "ImageWithCaption",
          image: "printeat/printeat.gif",
          caption: "Logo, typography and color palette."
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Create",
          content: [
            {
              type: "body",
              text: "We allow chefs and any person to experiment, play and crete new food and flavors never seen before. They will be able to have a small personal printer, when they can try their creations. Later they will be able to publish them in the Print.ear marketplace."
            }
          ]
        },
        {
          type: "ImageWithCaption",
          caption: "Personal printer for chefs and creators",
          image: "printeat/printer.png",
        },
        {
          type: "ImageWithCaption",
          caption: "",
          image: "printeat/printer ui.png",
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Print"
        },
        {
          type: "ImageWithCaption",
          caption: "People will be able to browse and find new recipes and flavors.",
          image: "printeat/marketplace 1.png",
        },
        {
          type: "ImageWithCaption",
          caption: "As soon as they decide what to get, they can place a printing order that later can be pick in their commnual kitchen",
          image: "printeat/marketplace 2.png",
        },
        {
          type: "TitleAndText",
          title: "Enjoy",
          // content: [
          //   {
          //     type: "body",
          //     text: "TBD."
          //   }
          // ]
        },
        {
          type: "ImageWithCaption",
          caption: "People will pick their orders in the commnual kitchen, ready to cook.",
          image: "printeat/kitchen.png",
        },
        {
          type: "ImageWithCaption",
          caption: "",
          image: "printeat/paperbag.png",
        },
        {
          type: "Divider"
        },
        {
          type: "BigImage",
          image: "printeat/bonappetit.png",
        },
        {
          type: "Divider"
        },
      ]
    },
    {
      title: "TMB Trivia",
      id: "4",
      slug: "tmb-trivia",
      isExternal: false,
      tagline: "Daily challenges for Barcelona's public transport system →",
      tags: "branding and graphic design",
      image: "tmb/hero.png",
      tldr:
        "Commuting shouldn't be the same boring thing everyday. With the TMB Daily Trivia we bring fun and competition between riders, while they can learn about the city.",
      summary: {
        year: "2019",
        timeframe: "3 weeks",
        tools: "Skecth, pen & paper, Keynote",
        team: "Alex Sasov, Bilal Shabbir, Felix Peeck",
        client: "school project at harbour.space",
        role: "concepting, art direction, ui design"
      }
    },
    {
      title: "Broken Symmetry",
      id: "3",
      slug: "broken-symmetry",
      isExternal: true,
      externalUrl:"https://www.behance.net/gallery/25519569/Broken-Symmetry-(D-AD-New-Blood-2015-Monotype)",
      tagline: "Wes Anderson retrospective screening →",
      tags: "branding and graphic design",
      image: "broken/hero.png",
      tldr:
        "Wes Anderson's films are mostly recognized by his art direction: symmetric shots and a high detailed film craft. In the other hand his characters lack of this super organized attributes. Broken Symmetry is the retrospective screening where the audience see beyond the visual style and realize how his messed up characters break into that symmetry creating an engaging story. ",
      summary: {
        year: "2015",
        timeframe: "4 weeks",
        tools: "scanner, Adobe Illustrator, Adobe Photoshop",
        client: "Monotype - D&AD New Blood Awards",
        role: "concepting and art direction"
      }
    },
  ]
};
