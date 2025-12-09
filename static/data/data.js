export const data = {
  links: [
    ["about me", "/about"],
    ["how I work with AI", "/how-i-work-with-ai"],
    ["linkedin ↗", "https://www.linkedin.com/in/mateobuitrago/"],
    ["dmateobuitrago [at] gmail.com", "mailto:dmateobuitrago@gmail.com"],
  ],
  projects: [
    {
      title: "TravelPerk : Rebranding",
      id: "8",
      slug: "travelperk-rebrand",
      tagline: "Bringing a new brand identity to life",
      image: "rebrand/hero.png",
      isExternal: false,
      tldr: "We translated TravelPerk’s new brand into product, overhauling our design system and key screens like the homepage. I led early explorations and helped drive scalable decisions across typography, components, and interaction models on the web platform.",
      summary: {
        year: "2024-2025",
        role: "senior product designer",
        team: "collaborated designers and frontend engineers",
      },
      content: [
        {
          type: "TitleAndText",
          title: "The challenge",
          content: [
            {
              type: "body",
              text: "TravelPerk partnered with an external agency to develop a refreshed brand. Our challenge was translating this new identity—typography, color, tone—into our product in a way that felt alive, cohesive, and scalable.",
            },
            {
              type: "body",
              text: "It was not just a visual facelift. It was an opportunity to improve our design system.",
            },
          ],
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Lime week - Initial explorations",
          content: [
            {
              type: "body",
              text: "We planned a week to start a exploration phase, working closely with a focused team of designers. Our approach was to diverge widely—playing with the new visual language in product contexts—and then converge to start defining UI foundations.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "We got together in Barcelona HQ to explore the new color palette, typography and get quick feedack between us (and some external stakeholders).",
          image: "rebrand/limeweek.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Design system updates",
          content: [
            {
              type: "body",
              text: "Together with other designers, I worked on an update of our design system. We redefined key foundations and component patterns, aligning them with the new brand while fixing some long-standing issues.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "Beyond using the new type and palette, we aligned text sizes between web and mobile, removed redundant sizes, made sure color contrast was accessible.",
          image: "rebrand/type and color.png",
        },
        {
          type: "ImageWithCaption",
          caption:
            "We defined an model for user interactions (e.g. hover) that applied across all of the interactive components, and built the token system for it.",
          image: "rebrand/interaction.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Component improvements",
          content: [
            {
              type: "body",
              text: "We took the opportunity to update several components. I was directly involved in improving structure, behavior, and clarity several of them. Here some examples:",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "Improved the interaction for the date picker on small screens, favoring clarity of selection.",
          image: "rebrand/datepicker.png",
        },
        {
          type: "ImageWithCaption",
          caption:
            "Created three different Card variants based on current (inconsistent) usages. Static card to wrap content. Clickable card to navigate somewhere and selectable card, to select from a list of options.",
          image: "rebrand/cards.png",
        },
        {
          type: "ImageWithCaption",
          caption:
            "Reduced the Badge colors, and improved the documentation to clarify usages.",
          image: "rebrand/badges.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Setting up the team for success",
          content: [
            {
              type: "body",
              text: "The plan was to in a single day, switch to the new brand, no soft launch, just a big bang moment. For that, we needed to prepare the products to support the two themes (great work from engineers), but also make sure the new components, typeface, colors worked well:",
            },
            {
              type: "list",
              list: [
                "Across the design team, we redesigned hundreds of screens so the engineers knew exactly how it should look.",
                "We run a couple of QA sessions, with different members of the company to gather feedback quickly",
                "I personally closelly collaborated with any engineer rebranding web screens, making sure the end result was up to our standards.",
              ],
            },
          ],
        },
        {
          type: "ImageGallery",
          images: [
            "rebrand/screens01.png",
            "rebrand/screens02.png",
            "rebrand/screens03.png",
            "rebrand/screens04.png",
          ],
          columns: 4,
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Redesigning the homepage",
          content: [
            {
              type: "body",
              text: "The homepage was a key surface to bring the brand to life. I designed a refreshed version that combined aesthetic choices with practical UX improvements.",
            },
            {
              type: "list",
              list: [
                "Brought in brand color and new iconography through the top selector and greeting",
                "Optimized layout for common flows, for example the majority of bookings are for one traveller",
                "Improved interaction and discoverability (e.g. train discount selector)",
              ],
            },
          ],
        },
        {
          type: "ImageGallery",
          images: [
            "rebrand/homeFlightsDesktop.png",
            "rebrand/homeStaysDesktop.png",
            "rebrand/homeTrainsDesktop.png",
            "rebrand/homeCarsDesktop.png",
          ],
          columns: 4,
        },
        {
          type: "ImageGallery",
          images: [
            "rebrand/homeFlightsMobile.png",
            "rebrand/homeStaysMobile.png",
            "rebrand/homeTrainsMobile.png",
            "rebrand/homeCarsMobile.png",
          ],
          columns: 2,
        },
        {
          type: "VideoWithCaption",
          caption:
            "A refreshed homepage balancing visual brand, motion and usability. Improved clarity, hierarchy and accessibility.",
          video: "rebrand/desktop_home.mov",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Impact and next steps",
          content: [
            {
              type: "body",
              text: "This rebranding was the start of a broader evolution in how TravelPerk’s product feels and functions. We shipped updated components, refined the design system, and set up a solid foundation for future product work.",
            },
            {
              type: "body",
              text: "By treating brand as an opportunity to revisit UX and system-level decisions, we made sure the rebrand wasn’t just cosmetic—but meaningful.",
            },
          ],
        },
      ],
    },
    {
      title: "TravelPerk : Checkout",
      id: "7",
      slug: "travelperk-checkout",
      tagline: "Reduced friction for people booking business travel",
      image: "checkout/hero.png",
      isExternal: false,
      tldr: "We revamped the checkout experience on TravelPerk, in order to reduce friction by improving UX and clarity for people booking business trips, while building scalable design patterns.",
      summary: {
        year: "2024-25",
        role: "product designer",
        team: "collaborated with PM, engineers, researchers and designers across the org",
      },
      content: [
        {
          type: "TitleAndText",
          title: "What is TravelPerk?",
          content: [
            {
              type: "body",
              text: "TravelPerk is an all-in-one business travel platform that empowers employees to easily book every aspect of their trips—from flights and hotels to trains and car rentals—while giving companies full control, visibility, and compliance over travel management.",
            },
          ],
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "The problem from the user perspective",
          content: [
            {
              type: "body",
              text: "At TravelPerk, we used continuous feedback tools like NPS and CES, but noticed key insights weren’t reaching the right teams. Some of the biggest issues in our area were:",
            },
            {
              type: "list",
              list: [
                "Users thinking they’d finished booking when they hadn’t",
                "The flow feeling too long",
                "Navigation being confusing",
              ],
            },
            {
              type: "body",
              text: "We we're getting low scores and comments like:",
            },
            {
              type: "quote",
              text: "I thought I was done but it was still under drafts. I had to edit the draft to get to the confirmation page.",
            },
            {
              type: "quote",
              text: "It's never really clear if the booking is finalised or not!",
            },
          ],
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "The problem from the design perspective",
          content: [
            {
              type: "body",
              text: "The booking experience was far from optimal. An design that didn't scale well and several teams working on it, wasn't helping users complete their bookings smoothly. ",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "A checkout page that worked when TravelPerk started worked well, but with time, new products offerings and a growing team, the page needed a review.",
          image: "checkout/01.png",
        },
        {
          type: "ImageWithCaption",
          caption:
            "The page was handling too many use cases and user types, leading to feature overload and a lack of clear structure.",
          image: "checkout/02.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Heuristic review and reserach triangulation ",
          content: [
            {
              type: "body",
              text: "We knew checkout wasn’t working great, but needed proof and a way to make it clear to the rest of the team. So we:",
            },
            {
              type: "list",
              list: [
                "Ran a heuristic review with designers and PMs",
                "Cross-checked it with user feedback (NPS, CES, research, Fullstory)",
                "Summarized and prioritized the key issues",
              ],
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "The heuristic review was the opportunity for each designer and PM to raise issues from their domain but weren't able to prioritize.",
          image: "checkout/03.png",
        },
        {
          type: "ImageWithCaption",
          caption:
            "With help from our researcher, we triangulated the findings with customer feedback and grouped the issues. Giving each one a clear name and severity rating helped the message land across the team.",
          image: "checkout/04.png",
        },
        {
          type: "TitleAndText",
          title: "Prioritization",
          content: [
            {
              type: "body",
              text: "From the heuristic review, several initiatives were prioritized, like improving booking speed, or fixing ambigous booking confirmation. But for the sake of this case study, I'll focus on the checkout redesign",
            },
          ],
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Early validation with customers",
          content: [
            {
              type: "body",
              text: "We put together a first version of a revamped checkout page, prioritizing two things:",
            },
            {
              type: "list",
              list: [
                "Making it clear that this was the last step to complete the booking",
                "A layout that helped users to efficiently review and fill any missing information",
              ],
            },
            {
              type: "body",
              text: "And with that concept, we run a research study to make sure we were in the right direction. We found that:",
            },
            {
              type: "list",
              list: [
                "Users preferred the new checkout concept for its clearer, step-by-step flow and helpful confirmations.",
                "However, they found parts of the information repetitive.",
              ],
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "We asked customers to complete a couple of tasks, both on the current checkout and the new concept.",
          image: "checkout/05.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Design direction and scalable patterns",
          content: [
            {
              type: "body",
              text: "I defined a set of patterns, that helped me design, take decisions and later help designers to contribute to the page.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "An improved layout, that helped users focus on the main content and actions.",
          image: "checkout/06.png",
          layout: "half",
        },
        {
          type: "ImageWithCaption",
          caption:
            "An expand and collapse pattern, to surface primary content, while keeping secondary content accessible.",
          image: "checkout/07.gif",
          layout: "half",
        },
        {
          type: "ImageWithCaption",
          caption:
            "A sticky price breakdown, always visible to give piece of mind while booking.",
          image: "checkout/08.png",
          layout: "half",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Consistency across service cards",
          content: [
            {
              type: "body",
              text: "Working with Flights, Trains, Hotels and Car rentals has the challenge to aim for consistency while keeping the particullarities of each one. Users wanted to have a clear overview of the service they were booking.",
            },
          ],
        },
        {
          type: "ImageGallery",
          images: [
            "checkout/FlightCard.png",
            "checkout/TrainCard.png",
            "checkout/StayCard.png",
            "checkout/CarCard.png",
          ],
          columns: 4,
        },
        {
          type: "ImageGallery",
          images: [
            "checkout/FlightCardExpanded.png",
            "checkout/TrainCardExpanded.png",
            "checkout/StayCardExpanded.png",
            "checkout/CarCardExpanded.png",
          ],
          columns: 2,
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Reviewing and completing traveller info",
          content: [
            {
              type: "body",
              text: "Booking travel requires some extra information, such a date of birth or a traveler document. It really depends. The redesigned checkout helped users to clearly review which information were they using to book, edit or add it in case it was missing.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "Clearly prompting the users to add the required information was important to avoid frustration later when trying to finish the booking.",
          image: "checkout/travellerDetails01.png",
          layout: "half",
        },
        {
          type: "ImageWithCaption",
          caption:
            "Once the information was added, it was clearly shown and labeled.",
          image: "checkout/travellerDetails02.png",
          layout: "half",
        },
        {
          type: "ImageWithCaption",
          caption:
            "The component also handled different type of personal information or limited access for other users.",
          image: "checkout/travellerDetails03.png",
          layout: "half",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Responsive and mobile experience",
          content: [
            {
              type: "body",
              text: "Although the main traffic from TravelPerk users came from desktop, we needed to make sure that the experience in a phone was optimal, mainly because our native app was transitioning to use more webviews, rather than native implementations.",
            },
          ],
        },
        {
          type: "ImageGallery",
          images: [
            "checkout/mobileCheckout01.png",
            "checkout/mobileCheckout02.png",
            "checkout/mobileCheckout03.png",
          ],
          columns: 2,
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Making it happen",
          content: [
            {
              type: "body",
              text: "We made sure to release value to costumers as fast as possible, splitting the release into milestone depending on the complexity of the requirements and the volume of bookings. So for example, we started with bookings with one service, while leaving for later bookings with multiple services (e.g. a flight and a hotel).",
            },
          ],
        },
        {
          type: "VideoWithCaption",
          caption: "Example of a live version of the checkout experience.",
          video: "checkout/demo1.mov",
        },
        {
          type: "Divider",
        },
        {
          type: "ImpactCallOut",
          title: "Impact",
          subtitle:
            "A continuous release strategy helped us to compare the old checkout with the new one, and see the impact of the changes.",
          content: [
            {
              top_content: "↓ time on task",
              bottom_content: "From 900s to 50s",
            },
            {
              top_content: "↑ conversion rate",
              bottom_content: "From 80% to 95%",
            },
            {
              top_content: "↓ friction",
              bottom_content:
                "Less booking attempts with warnings (for example missing mandatory fields)",
            },
          ],
        },
      ],
    },
    {
      title: "TravelPerk : Design Tokens",
      id: "6",
      slug: "travelperk-design-tokens",
      isExternal: false,
      tagline: "Designed and built the structure to manage design tokens",
      image: "tokens/hero.png",
      tldr: "Design tokens store the foundational design decisions, such as colors or text styles, in a single source of truth; so they can be used consistently across platforms (web, Android, iOS, Figma, etc).",
      summary: {
        year: "2023",
        role: "lead designer",
        team: "closely collaborated with frontend engineers and other product designers",
      },
      content: [
        {
          type: "TitleAndText",
          title: "What is TravelPerk?",
          content: [
            {
              type: "body",
              text: "TravelPerk is an all-in-one business travel platform that empowers employees to easily book every aspect of their trips—from flights and hotels to trains and car rentals—while giving companies full control, visibility, and compliance over travel management.",
            },
          ],
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "My role",
          content: [
            {
              type: "body",
              text: "During this project, I led the Design System team to build a design token solution to improve the way we build UI, both from the design and engineering side. So let me walk you through the key improvements we achieve by implementing design tokens",
            },
          ],
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Intentional design decisions",
          content: [
            {
              type: "body",
              text: "Design tokens helped us to have more objective design decisions when building our products. Instead of choosing a color because how it looks, the decision will be based on the intention of the color, so we ensure consistency across features owned by different teams.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "Before, we'd choose colors based on personal taste from a wide palette. This was a good system to begin, but proved to be a door for inconsistencies as the team grew.",
          image: "tokens/01.png",
        },
        {
          type: "ImageWithCaption",
          caption:
            "With design tokens, colors are narrowed to the UI element they will modify and its intention.",
          image: "tokens/02.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "A real source of truth",
          content: [
            {
              type: "body",
              text: "Design tokens distribute these decisions across platforms so that we can ensure consistency across touchpoints (e.g. web, mobile, .com) and handle centralised updates.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "Along with engineers, we implemented a set of workflows centralised from Figma to create/edit/delete design tokens.",
          image: "tokens/03.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Accessible color pairings",
          content: [
            {
              type: "body",
              text: "Yellow text on white background? Yeah, not the best... So, we used this opportunity to audit our components and their color pairings to ensure they meet at least AA contrast ratio compliance.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "We had several componets failing on AA contrast ratio, so we made sure Background and Text color tokens were compliant at least with AA contrast ratios.",
          image: "tokens/04.png",
        },
      ],
    },
    {
      title: "Verse App",
      id: "5",
      slug: "verse-app",
      isExternal: false,
      tagline: "Worked as Product Designer",
      tags: "ui design",
      image: "verse/hero.png",
      tldr: "Verse allow friends to send money between them, to pay their debts and share expenses easily by just sharing a phone number or an username.I work closely with PMs, developers and our CEO to improve and develop new experiences for our users. Most of my time I work on our mobile app (Android and iOS), some times in web experiences and few times helping our Marketing department.",
      summary: {
        year: "2019-20",
        role: "product design, ux - ui",
      },
      content: [
        {
          type: "TitleAndText",
          title: "User research",
          content: [
            {
              type: "body",
              text: "At Verse our users are one of the most important factors. I've been working closely with Customer Success and CRM teams to understand and know our users better through user interviews. In the other hand, it's also important to constantly test the usability of our app, of current and new features.",
            },
          ],
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Onboarding and KYC",
          content: [
            {
              type: "body",
              text: "Creating a seamless experience is critical for a payments app and we want to make it as easy as possible for our users.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "Tracking intereactions with tools such as Firebase is essential to improve the experience.",
          image: "verse/onboarding.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Groups feature",
          content: [
            {
              type: "body",
              text: "One of Verse differential features is Groups. Friends are able to easily share expenses and keep track of them. It's super useful for flatmates, trips and even to collect money for a present. We are constantly improving this feature, that much that people say that Verse is 'Spiltwise with Bizum(most popular payment app in Spain)'.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "Our users have a clear view of the expenses they are sharing and the balance of the group.",
          image: "verse/groups1.png",
        },
        {
          type: "ImageWithCaption",
          caption:
            "Users can choose if they want to settle their debts in the app or outside the app. This helps groups of friends where not all of them are Verse users.",
          image: "verse/groups2.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "VerseCard",
          content: [
            {
              type: "body",
              text: "Having a card for a fintech seems something trivial, but delivering the perfect card is essential. We are in the making of this card and it's experience both in and outside the app.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption: "",
          image: "verse/versecard.png",
        },
        {
          type: "Divider",
        },
      ],
    },
    {
      title: "Juan-on-Juan",
      id: "1",
      slug: "juan-on-juan",
      isExternal: false,
      tagline: "I designed a website for an sports magazine",
      tags: "ui design",
      image: "juan/juan_hero.png",
      tldr: "I designed the website for an online sports publication, featuring latin american athletes all over the world. This small publication releases between 3-4 stories a day and one weekly special story. I was asked to propose design for those type of stories and the homepage.",
      summary: {
        year: "2019",
        timeframe: "3 weeks",
        tools: "keynote, sketch, pen & paper",
        client: "school project at harbour.space",
        role: "ui design, branding",
      },
      content: [
        {
          type: "TitleAndText",
          title: "The brief: Designing media",
          content: [
            {
              type: "body",
              text: "Our fictional client was an online publication exploring life and culture through thematic , visually-oriented international coverage and commentary. They were part of a large publishing organization and they were an small team writing about several topics, focusing on releasing stories daily (about 4 or 6) and one long form weekly story.",
            },
            {
              type: "body",
              text: "Our client was looking to launch a new online publication, so they were asking us to come up with:",
            },
            {
              type: "list",
              list: [
                "Ideas about the name for our publication",
                "Initial art direction and look and feel",
                "Concept for home page",
                "Concept for short story",
                "Concept for long story",
              ],
            },
          ],
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "The brand",
          content: [
            {
              type: "body",
              text: "Since this was an international publication featuring latinamerican athletes, I decided to play with the languange: Juan on Juan = two latinos playing basketball. Regarding typography and colors, it was necessary to differentiate the brand from all this black and white, rude male-only sports publications.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          image: "juan/logo.png",
          caption: "Logo, typography and color palette.",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Sketches and initial explorations.",
          content: [
            {
              type: "body",
              text: "For me, the best way to start a project is on paper because is a fast way to getting ideas real and start deciding what would work and what not. One of the *(key learnings)* from this class was that you can define a grid on paper and sketch over it, then when you start working on the computer it would be easier to design and layout your components.",
            },
          ],
        },
        {
          type: "BigImage",
          image: "juan/sketches.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Daily stories - short form",
          content: [
            {
              type: "body",
              text: "Our client needed a short story format, which they could publish from the CMS, with predefined components that can be placed as thed wanted. They should be able to add text, images, quotes, etc.",
            },
            {
              type: "body",
              text: "Most of the components I decided to keep really simple: one column text, big quotes. The standing piece of the short story would be the opening. It would mix a court layout, that would change depending on the sport of the story, and photography, bringing a dynamic and always different design for each story, without needing to redesign it every time.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "Daily story design about best latin american basketball players.",
          image: "juan/short_story.gif",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Special story - long form",
          content: [
            {
              type: "body",
              text: "Manu Ginobili, one of the greatest latin american NBA players announced his retirement in 2018, and a journalist wrote an special story about how his career was so similar to Mo Rivera, one MLB latin american legend. I found this piece so interesting that I decided this to be my long story to pitch my design.",
            },
            {
              type: "body",
              text: "Long story form is the dream of any designer, you would be in a team of developers, writers and producers to create an special story. So there were no limits at all. (At least in class).",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "Long story intro about the comparison between Manu Ginobilli and Mo Rivera.",
          image: "juan/juan_long_story.png",
        },
        {
          type: "VideoWithCaption",
          caption:
            "Interactive quiz where readers had to guess facts about the players, as if they were playing with trading cards.",
          video: "juan/video.mp4",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Homepage and navigation",
          content: [
            {
              type: "body",
              text: "The homepage is the place where our publisher would be able to highlight stories, videos, and even writers. Also the visitors of Juan-on-Juan would be able to see and follow livescores from the top leagues.",
            },
            {
              type: "body",
              text: "The navigation of the website was very short and simple, we would rely on the leagues: NBA, NFL, MLS, Fútbol ('cause that's they way you say it), NCAA and More. Supporting pages such as About us, Terms of use and so on would live in the footer with a lower visual hierarchy.",
            },
          ],
        },
        {
          type: "BigImage",
          image: "juan/homepage_navigation.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Presenting",
          content: [
            {
              type: "body",
              text: "One of the biggest misconceptions that I had about working in Design, is that the work should speak by itself so you shouldn't have to sell it, because it was so well done that no words or presentations were needed. WRONG!",
            },
            {
              type: "body",
              text: "A big part of working as a Designer is selling your ideas. Yes! Presenting it in front of your clients or colleagues. The idea is as important as the story you tell when you present it. And no presentation would be awesome without preparing it.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "Sharing the framework of your design is important to support your decisions on the screen.",
          image: "juan/grid.gif",
        },
        {
          type: "ImageWithCaption",
          caption:
            "Even if it is 'just a ui project', storytelling is important when presenting an idea. ",
          image: "juan/presentation.png",
        },
      ],
    },
    {
      title: "Broken Symmetry",
      id: "3",
      slug: "broken-symmetry",
      isExternal: true,
      externalUrl:
        "https://www.behance.net/gallery/25519569/Broken-Symmetry-(D-AD-New-Blood-2015-Monotype)",
      tagline: "Wes Anderson retrospective screening",
      tags: "branding and graphic design",
      image: "broken/hero.png",
      tldr: "Wes Anderson's films are mostly recognized by his art direction: symmetric shots and a high detailed film craft. In the other hand his characters lack of this super organized attributes. Broken Symmetry is the retrospective screening where the audience see beyond the visual style and realize how his messed up characters break into that symmetry creating an engaging story. ",
      summary: {
        year: "2015",
        timeframe: "4 weeks",
        tools: "scanner, Adobe Illustrator, Adobe Photoshop",
        client: "Monotype - D&AD New Blood Awards",
        role: "concepting and art direction",
      },
    },
    {
      title: "Perk: Improving filtering experience",
      id: "9",
      slug: "perk-filtering",
      tagline: "A constant effort to increase customer satisfaction",
      image: "perk-filtering/hero.png",
      isExternal: false,
      tldr: "Through careful analysis of customer feedback and AI-powered insights, we identified and improved key pain points in our flight filtering experience, resulting in measurable decreases in customer detractors and improved satisfaction scores.",
      summary: {
        year: "2025",
        role: "product designer",
        team: "collaborated with PM, engineers, researchers and designers across the org",
      },
      content: [
        {
          type: "TitleAndText",
          title: "Context",
          content: [
            {
              type: "body",
              text: "In the past years, I've been working in a team with the mission to improve the booking experience at Perk: how business travellers book flights, hotels, trains and cars in order to increase their satisfaction and make sure they stay as our customers.",
            },
          ],
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Making sense of customer feedback",
          content: [
            {
              type: "body",
              text: "From our customer feedback surveys (Customer Effort Score, NPS) we knew our booking experience wasn't meeting their expectations. Our challenge was to understand why and mainly what could we do about it.",
            },
            {
              type: "body",
              text: "With the help of my Product Manager, the data team and AI, we identified the most impactful areas of opportunities:",
            },
            {
              type: "list",
              list: [
                "Filters are not behaving as expected and users find them unintuitive.",
                "The current search experience is not personalised and doesn't take into account traveller preferences",
                "Customers complain that they don't understand the travel policy or are confused why some offers are marked in policy and others aren't.",
              ],
            },
            {
              type: "quote",
              text: "I used AI to make sense of hundreds, if not thousands, of customer comments about our experience.",
            },
          ],
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Filtering flight offers: Devil is in details",
          content: [
            {
              type: "body",
              text: "Our flight filtering feature covers most of their customer needs and is at par of other players in the industry like Google Flights or Kayak. However, customer finds it frustrating or fiddly to use. The trick wasn't to add more ways to filter, but improve the ones we currently have.",
            },
            {
              type: "body",
              text: "By carefully reviewing customer feedback, observing users sessions and mindfully using the platform, we were able to make some meaningful improvements.",
            },
          ],
        },
        {
          type: "TitleAndText",
          title: "Persisting filters",
          content: [
            {
              type: "body",
              text: "We realised that customers were finding themselves applying filters again and again, as they updated their search parameters (e.g. changing a date to see more options).",
            },
            {
              type: "body",
              text: "We defined some simple but relevant logic on how to persist filters as customers explore different dates or locations for their upcoming travel.",
            },
          ],
        },
        {
          type: "VideoWithCaption",
          caption:
            "Example of how filters now persist when customers update their search parameters",
          video: "perk-filtering/persisting-filters.mov",
        },
        {
          type: "TitleAndText",
          title: "The time filter",
          content: [
            {
              type: "body",
              text: "Filtering flights just worked, but it was fiddly to use. We didn't need (nor had the capacity) to rebuilt it, so we identified and made some improvements:",
            },
            {
              type: "list",
              list: [
                "Localised the times. Our US customers were suffering and the initial implementation had a hard coded military time.",
                "Improved the usability of the handler, by increasing the tap/drag area.",
                "Added Morning, Afternoon, Night shortcuts. We knew most of business travellers prefer to flight in the morning.",
              ],
            },
            {
              type: "quote",
              text: "With the help of Cursor I made some of the changes myself, creating a PR and pushing it to production. Other improvements, I was able to prototype with code and later pass it to our engineers so it comply with our coding standards.",
            },
          ],
        },
        {
          type: "VideoWithCaption",
          caption:
            "Improved time filter with localized times and better usability",
          video: "perk-filtering/time-filter.mov",
        },
        {
          type: "ImageWithCaption",
          caption:
            "Before and after comparison of the time filter improvements",
          image: "perk-filtering/time-filter-comparison.png",
        },
        {
          type: "TitleAndText",
          title: "Optimising for mobile",
          content: [
            {
              type: "body",
              text: "Our filtering experience on mobile was time consuming and inefficient. Users needed to go filter by filter, while in the best in class mobile apps it wasn't like that.",
            },
            {
              type: "body",
              text: "We designed and contributed a brand new Mobile Filters Modal to our design system, and implemented it in our Flight Search Funnel.",
            },
            {
              type: "quote",
              text: "Again, with the help of AI I was able to prototype a Mobile Filters Modal component. It helped to convey the idea to engineers, but the implementation was not near close to our coding standards.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "New Mobile Filters Modal designed for the flight search experience",
          image: "perk-filtering/mobile-filters.png",
        },
        {
          type: "VideoWithCaption",
          caption: "Mobile filtering experience in action",
          video: "perk-filtering/mobile-demo.mov",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Reduction of detractors",
          content: [
            {
              type: "body",
              text: "After releasing all of this incremental improvements, we were able to see a decrease on our detractors on NPS and CES, specifically a within the Search Filters category.",
            },
            {
              type: "body",
              text: "This proved to be a huge win for us, since tying improvements to a quantitative metric was historically difficult and we were able to isolate improvements in the platform and prove impact to the rest of the business.",
            },
          ],
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Learning",
          content: [
            {
              type: "body",
              text: "My main learning from this project is that we don't always need a new shiny project or feature to prove impact. Often, initiatives to built a new feature from scratch can feel more exciting, but when reviewing what is there already and making a constant and consistent effort to improve the experience pays back in the long run.",
            },
          ],
        },
      ],
    },
  ],
};
