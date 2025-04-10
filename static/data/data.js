
export const data = {
  links: [
    // ['instagram ↗', 'https://www.instagram.com/buitragojara'],
    ['about me', '/about'],
    ['linkedin ↗', 'https://www.linkedin.com/in/mateobuitrago/'],
    ['dmateobuitrago [at] gmail.com', 'mailto:dmateobuitrago@gmail.com'],
  ],
  projects: [
    {
      title: "Travelperk : Checkout",
      id:"7",
      slug:"travelperk-checkout",
      tagline: "Reduced friction for people booking travel on TravelPerk, while enhancing design patterns.",
      image: "checkout/hero.png",
      isExternal: false,
      tldr: "We revamped the checkout experience on TravelPerk, in order to reduce friction by improving UX and clarity for people booking business trips, while building scalable design patterns.",
      summary: {
        year: "2024-25",
        role: "product designer",
        team: "collaborated with PM, engineers, researchers and designers across the org"
      },
      content: [
        {
          type: "TitleAndText",
          title: "What is TravelPerk?",
          content: [
            {
              type: "body",
              text: "TravelPerk is an all-in-one business travel platform that empowers employees to easily book every aspect of their trips—from flights and hotels to trains and car rentals—while giving companies full control, visibility, and compliance over travel management."
            },
          ]
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "The problem from the user perspective",
          content: [
            {
              type: "body",
              text: "At TravelPerk, we used continuous feedback tools like NPS and CES, but noticed key insights weren’t reaching the right teams. Some of the biggest issues in our area were:"
            },
            {
              type: "list",
              list: [
                "Users thinking they’d finished booking when they hadn’t",
                "The flow feeling too long",
                "Navigation being confusing",
              ]
            },
            {
              type: "body",
              text: "We we're getting low scores and comments like:"
            },
            {
              type: "quote",
              text: "I thought I was done but it was still under drafts. I had to edit the draft to get to the confirmation page."
            },
            {
              type: "quote",
              text: "It's never really clear if the booking is finalised or not!"
            },
          ]
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "The problem from the design perspective",
          content: [
            {
              type: "body",
              text: "The booking experience was far from optimal. An design that didn't scale well and several teams working on it, wasn't helping users complete their bookings smoothly. "
            },
          ]
        },
        {
          type: "ImageWithCaption",
          caption: "A checkout page that worked when TravelPerk started worked well, but with time, new products offerings and a growing team, the page needed a review.",
          image: "checkout/01.png",
        },
        {
          type: "ImageWithCaption",
          caption: "The page was handling too many use cases and user types, leading to feature overload and a lack of clear structure.",
          image: "checkout/02.png",
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Heuristic review and reserach triangulation ",
          content: [
            {
              type: "body",
              text: "We knew checkout wasn’t working great, but needed proof and a way to make it clear to the rest of the team. So we:"
            },
            {
              type: "list",
              list: [
                "Ran a heuristic review with designers and PMs",
                "Cross-checked it with user feedback (NPS, CES, research, Fullstory)",
                "Summarized and prioritized the key issues"
              ]
            }
          ]
        },
        {
          type: "ImageWithCaption",
          caption: "The heuristic review was the opportunity for each designer and PM to raise issues from their domain but weren't able to prioritize.",
          image: "checkout/03.png",
        },
        {
          type: "ImageWithCaption",
          caption: "With help from our researcher, we triangulated the findings with customer feedback and grouped the issues. Giving each one a clear name and severity rating helped the message land across the team.",
          image: "checkout/04.png",
        },
        {
          type: "TitleAndText",
          title: "Prioritization",
          content: [
            {
              type: "body",
              text: "From the heuristic review, several initiatives were prioritized, like improving booking speed, or fixing ambigous booking confirmation. But for the sake of this case study, I'll focus on the checkout redesign"
            }
          ]
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Early validation with customers",
          content: [
            {
              type: "body",
              text: "We put together a first version of a revamped checkout page, prioritizing two things:"
            },
            {
              type: "list",
              list: [
                "Making it clear that this was the last step to complete the booking",
                "A layout that helped users to efficiently review and fill any missing information"
              ]
            },
            {
              type: "body",
              text: "And with that concept, we run a research study to make sure we were in the right direction. We found that:"
            },
            {
              type: "list",
              list: [
                "Users preferred the new checkout concept for its clearer, step-by-step flow and helpful confirmations.",
                "However, they found parts of the information repetitive."
              ]
            },
          ]
        },
        {
          type: "ImageWithCaption",
          caption: "We asked customers to complete a couple of tasks, both on the current checkout and the new concept.",
          image: "checkout/05.png",
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Design direction and scalable patterns",
          content: [
            {
              type: "body",
              text: "I defined a set of patterns, that helped me design, take decisions and later help people to contribute to the page."
            },
          ]
        },
        {
          type: "ImageWithCaption",
          caption: "An improved layout, where the main content and actions are on the main column.",
          image: "checkout/06.png",
          layout: "half"
        },
        {
          type: "ImageWithCaption",
          caption: "An expand and collapse pattern, to surface primary content, while keeping secondary content accessible.",
          image: "checkout/07.png",
          layout: "half"
        },
        {
          type: "ImageWithCaption",
          caption: "A sticky price breakdown, always visible to give piece of mind while booking.",
          image: "checkout/08.png",
          layout: "half"
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Consistency across service cards",
          content: [
            {
              type: "body",
              text: "Working with Flights, Trains, Hotels and Car rentals has the challenge to aim for consistency while keeping the particullarities of each one."
            },
          ]
        },
        {
          type: "ImageGallery",
          images: [
            "checkout/FlightCard.png",
            "checkout/TrainCard.png",
            "checkout/StayCard.png",
            "checkout/CarCard.png",
          ],
          columns: 4
        },
        {
          type: "ImageGallery",
          images: [
            "checkout/FlightCardExpanded.png",
            "checkout/TrainCardExpanded.png",
            "checkout/StayCardExpanded.png",
            "checkout/CarCardExpanded.png",
          ],
          columns: 2
        },
        {
          type: "TitleAndText",
          title: "Continuous release",
          content: [
            {
              type: "body",
              text: "Yep, the design wasn't great"
            },
          ]
        },
        {
          type: "TitleAndText",
          title: "How we managed to reduce friction",
          content: [
            {
              type: "body",
              text: "Yep, the design wasn't great"
            },
          ]
        },
      ]
    },
    {
      title: "TravelPerk : Design Tokens",
      id:"6",
      slug:"travelperk-design-tokens",
      isExternal: false,
      tagline: "Designed and built the structure to manage design tokens ",
      image: "tokens/hero.png",
      tldr:"Design tokens store the foundational design decisions, such as colors or text styles, in a single source of truth; so they can be used consistently across platforms (web, Android, iOS, Figma, etc).",
      summary: {
        year: "2023",
        role: "lead designer",
        team: "closely collaborated with frontend engineers and other product designers"
      },
      content: [
        {
          type: "TitleAndText",
          title: "What is TravelPerk?",
          content: [
            {
              type: "body",
              text: "TravelPerk is an all-in-one business travel platform that empowers employees to easily book every aspect of their trips—from flights and hotels to trains and car rentals—while giving companies full control, visibility, and compliance over travel management."
            },
          ]
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "My role",
          content: [
            {
              type: "body",
              text: "During this project, I led the Design System team to build a design token solution to improve the way we build UI, both from the design and engineering side. So let me walk you through the key improvements we achieve by implementing design tokens"
            },
          ]
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Intentional design decisions",
          content: [
            {
              type: "body",
              text: "Design tokens helped us to have more objective design decisions when building our products. Instead of choosing a color because how it looks, the decision will be based on the intention of the color, so we ensure consistency across features owned by different teams."
            },
          ]
        },
        {
          type: "ImageWithCaption",
          caption: "Before, we'd choose colors based on personal taste from a wide palette. This was a good system to begin, but proved to be a door for inconsistencies as the team grew.",
          image: "tokens/01.png",
        },
        {
          type: "ImageWithCaption",
          caption: "With design tokens, colors are narrowed to the UI element they will modify and its intention.",
          image: "tokens/02.png",
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "A real source of truth",
          content: [
            {
              type: "body",
              text: "Design tokens distribute these decisions across platforms so that we can ensure consistency across touchpoints (e.g. web, mobile, .com) and handle centralised updates."
            },
          ]
        },
        {
          type: "ImageWithCaption",
          caption: "Along with engineers, we implemented a set of workflows centralised from Figma to create/edit/delete design tokens.",
          image: "tokens/03.png",
        },
        {
          type: "Divider"
        },
        {
          type: "TitleAndText",
          title: "Accessible color pairings",
          content: [
            {
              type: "body",
              text: "Yellow text on white background? Yeah, not the best... So, we used this opportunity to audit our components and their color pairings to ensure they meet at least AA contrast ratio compliance."
            },
          ]
        },
        {
          type: "ImageWithCaption",
          caption: "We had several componets failing on AA contrast ratio, so we made sure Background and Text color tokens were compliant at least with AA contrast ratios.",
          image: "tokens/04.png",
        },
      ]
    },
    {
      title: "Verse App",
      id: "5",
      slug: "verse-app",
      isExternal: false,
      tagline: "Worked as Product Designer ",
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
      tagline: "I designed a website for an sports magazine ",
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
      tagline: "How would we eat in 2080? ",
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
      tagline: "Daily challenges for Barcelona's public transport system ",
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
      tagline: "Wes Anderson retrospective screening ",
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
