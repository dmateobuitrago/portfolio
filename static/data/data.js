export const data = {
  navBarLinks: [
    ["About me", "/about"],
    ["How I work with AI", "/how-i-work-with-ai"],
  ],
  footerLinks: [
    ["About me", "/about"],
    ["How I work with AI", "/how-i-work-with-ai"],
    ["Linkedin ↗", "https://www.linkedin.com/in/mateobuitrago/"],
    ["dmateobuitrago [at] gmail.com", "mailto:dmateobuitrago@gmail.com"],
  ],
  projects: [
    {
      title: "Rebranding",
      id: "8",
      slug: "travelperk-rebrand",
      tagline:
        "Implemented TravelPerk's new brand through the entire web product — improved components, screens redesigns for a single day launch.",
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
      title: "Checkout redesign",
      id: "7",
      slug: "travelperk-checkout",
      tagline:
        "Improved conversion from 80% to 95% and cut time on task by 94% — while building a checkout foundation for scale.",
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
          title: "The problem",
          content: [
            {
              type: "body",
              text: "We used continuous feedback tools like NPS and CES surveys to understand where our experience was falling short. Some of the biggest issues in our area were:",
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
              text: "We were getting comments like:",
            },
            {
              type: "quote",
              text: "I thought I was done but it was still under drafts. I had to edit the draft to get to the confirmation page.",
            },
            {
              type: "quote",
              text: "It's never really clear if the booking is finalised or not!",
            },
            {
              type: "body",
              text: "Looking at the checkout page itself, it was easy to see why. A design that worked well when TravelPerk started hadn't kept up with new product offerings and a growing team — the page was handling too many use cases and user types, with feature overload and no clear structure.",
            },
          ],
        },
        {
          type: "Divider",
          size: "small",
        },
        {
          type: "ImageWithCaption",
          caption:
            "A checkout page that worked when TravelPerk started, but with time, new product offerings and a growing team, the page needed a review.",
          image: "checkout/01.png",
        },
        {
          type: "Divider",
          size: "small",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "How we picked what to fix",
          content: [
            {
              type: "body",
              text: "We knew checkout wasn’t working well, but we needed a way to prioritize what to fix first and make the case to the rest of the team. So we ran a heuristic review with designers and PMs, then cross-checked it against customer feedback — NPS, CES, past research and Fullstory sessions.",
            },
            {
              type: "body",
              text: "Collaboration with UX researched, I grouped the issues we found and gave each one a name and a severity rating, which helped the message land across the teams.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "We triangulated heuristic findings with customer feedback and grouped the issues, giving each one a clear name and severity rating.",
          image: "checkout/04.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "The idea",
          content: [
            {
              type: "body",
              text: "With that list in hand, we put together a first version of a redesigned checkout page, focused on two things: making it clear this was the last step to complete the booking, and a layout that helped people review and fill in any missing information efficiently.",
            },
            {
              type: "body",
              text: "We tested that concept with customers. They preferred the new checkout for its clearer, step-by-step flow and helpful confirmations. But they also told us some of the information felt repetitive — which became the thing to solve for as we built out the rest of the page.",
            },
          ],
        },
        {
          type: "Divider",
          size: "small",
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
          title: "Putting it into practice",
          content: [
            {
              type: "body",
              text: "From there, the work was about applying that idea consistently: less repetition, one clear flow. I defined a set of patterns that helped me design, make decisions, and later helped other designers contribute to the page.",
            },
          ],
        },
        {
          type: "Divider",
          size: "small",
        },
        {
          type: "ImageWithCaption",
          caption:
            "An improved layout that helped users focus on the main content and actions.",
          image: "checkout/06.png",
        },
        {
          type: "Divider",
          size: "small",
        },
        {
          type: "ImageWithCaption",
          caption:
            "An expand and collapse pattern, to keep primary content visible while keeping secondary content within reach.",
          image: "checkout/07.gif",
        },
        {
          type: "Divider",
          size: "small",
        },
        {
          type: "ImageWithCaption",
          caption:
            "A sticky price breakdown, always visible to give peace of mind while booking.",
          image: "checkout/08.png",
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
              text: "Flights, trains, hotels and car rentals each have their own quirks, but users wanted a clear, consistent overview of whatever they were booking — without repeating the same details across cards.",
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
          columns: 4,
        },
        {
          type: "Divider",
          size: "small",
        },
        {
          type: "TitleAndText",
          title: "Reviewing and completing traveller info",
          content: [
            {
              type: "body",
              text: "Booking travel often requires extra information — a date of birth, a travel document — depending on the trip. The redesigned checkout made it clear which information was already uploaded, and let people add what was missing when needed.",
            },
          ],
        },
        {
          type: "Divider",
          size: "small",
        },
        {
          type: "ImageWithCaption",
          caption:
            "Clearly prompting users to add required information helped avoid frustration later, when trying to finish the booking.",
          image: "checkout/travellerDetails01.png",
        },
        {
          type: "ImageWithCaption",
          caption:
            "Once information was added, it was clearly shown and labeled.",
          image: "checkout/travellerDetails02.png",
        },
        {
          type: "ImageWithCaption",
          caption:
            "The component also handled different types of personal information, and limited access for other users.",
          image: "checkout/travellerDetails03.png",
        },
        {
          type: "Divider",
          size: "small",
        },
        {
          type: "TitleAndText",
          title: "Responsive and mobile experience",
          content: [
            {
              type: "body",
              text: "Most TravelPerk traffic came from desktop, but our native app was moving more of its flows to webviews, so the mobile experience needed to hold up just as well.",
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
          title: "Continuous release and learning",
          content: [
            {
              type: "body",
              text: "We released this in stages, starting with single-service bookings and leaving multi-service bookings (like a flight plus a hotel) for later, based on complexity and booking volume. That gradual rollout also let us compare the old checkout with the new one directly.",
            },
          ],
        },
        {
          type: "Divider",
          size: "small",
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
            "The new checkout was clearer to go through and faster to complete — while we built a surface for scale.",
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
      title: "Design Tokens",
      id: "6",
      slug: "travelperk-design-tokens",
      isExternal: false,
      tagline:
        "Built the design token system from scratch — a single source of truth for color, type, and spacing across web, mobile, and Figma.",
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
      title: "Improved flights filters",
      id: "9",
      slug: "filters",
      tagline:
        "Increased customer satisfaction, through detailed and consistent efforts to help travellers find the flight the need.",
      image: "filters/hero.png",
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
              text: "Collaborating with Product Designers, Product Managers and AI, we identified several areas of opportunities. One of them was the filtering experience.",
            },
            {
              type: "quote",
              text: "It was a pain to find the flights I wanted.  The defaults didnt stick. My choices didnt stick when I had to come back to it after a period of time.",
            },
            {
              type: "quote",
              text: "Selecting departure & arrival times was confusing, the layover/# of stops kind of confusing as well. I think its the sliders moving at both ends.",
            },
          ],
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Devil is in details",
          content: [
            {
              type: "body",
              text: "Our flight filtering feature covered most of their customer use cases and is at par of other players in the industry like Google Flights or Kayak. However, customer finds it frustrating or fiddly to use. The trick wasn't to add more ways to filter, but improve the ones we currently have.",
            },
            {
              type: "body",
              text: "By carefully reviewing customer feedback, observing users sessions and mindfully using the platform, we were able to make some meaningful improvements.",
            },
          ],
        },
        {
          type: "TitleAndText",
          title: "Improvement 1: Persisting filters",
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
          video: "filters/persisting-filters.mov",
        },
        {
          type: "TitleAndText",
          title: "Improvement 2: Time filter",
          content: [
            {
              type: "body",
              text: "Filtering flight times just worked, but it was fiddly to use. We didn't need (nor had the capacity) to rebuilt it, so we identified and made some powerful tweaks to the time filter:",
            },
            {
              type: "list",
              list: [
                "Localised the times. Our US customers were suffering since we had a hard coded military time.",
                "Improved the usability, by increasing the tap/drag area of the handler and increased the steps from 30 minutes to 15 minutes, since users didn't need so much control.",
                "Updated the layout to make it easier to understand while the time was changed.",
              ],
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "Before and after comparison of the time filter improvements",
          image: "filters/usability-improvements.png",
        },
        {
          type: "TitleAndText",
          title: "Improvement 3: Time presets",
          content: [
            {
              type: "body",
              text: "Rarely, travellers want to flight in an specific hour, but they have a preference on which time or the day to flight, to adjust to their business trip plans.",
            },
            {
              type: "body",
              text: "We wanted to streamline that decision with a Morning, Afternoon or Night preset.",
            },
          ],
        },
        {
          type: "VideoWithCaption",
          caption: "How can users quickly set time filters using presets",
          video: "filters/time-presets.mov",
        },
        {
          type: "TitleAndText",
          title: "Improvement 4: Optimising mobile experience",
          content: [
            {
              type: "body",
              text: "Our filtering experience on mobile was time consuming and inefficient. Users needed to go filter by filter, while in the best in class mobile apps it wasn't like that.",
            },
            {
              type: "body",
              text: "We designed and contributed a brand new <FiltersModal/> to our design system, and implemented it in our Flight Search Funnel.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "This component specs enabled this to be a smooth contribution to our design system",
          image: "filters/mobile-filters.png",
        },
        {
          type: "VideoWithCaption",
          caption: "Mobile filtering experience in action",
          video: "filters/mobile-demo.mp4",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Working with AI",
          content: [
            {
              type: "body",
              text: "I took this opportunity to explore prototyping within our real code base to speed up time to deliver, achieving some merges to production and sparkling conversation with engineers about AI-assisted code.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption:
            "With the help of AI-assisted tools, I was able to do some improvements and push to production.",
          image: "filters/ai-code.png",
        },
        {
          type: "ImageWithCaption",
          caption:
            "However, when the code went beyond my knowledge and AI wasn't up to our company standards, it was better for an engineer to finish the implementation.",
          image: "filters/ai-code2.png",
        },
        {
          type: "Divider",
        },
        {
          type: "ImpactCallOut",
          title: "Impact: Reduction of detractors",
          subtitle:
            "After releasing all of this incremental improvements, we were able to see a decrease on our detractors, specifically a within the Search Filters area.",
          content: [
            {
              top_content: "↓ detractors complaining about filters",
              bottom_content: "From 2% to 0.5% per month",
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
    {
      title: "Booking confirmation",
      id: "10",
      slug: "booking-confirmation",
      tagline:
        "Cut perceived wait time from 40s to 2s in a flow where booking outcomes arrive asynchronously. Clearer error recovery paths lifted booking completion from 40% to 50%.",
      image: "booking-confirmation/hero.png",
      isExternal: false,
      tldr: "TBA",
      summary: {
        year: "2025 - 2026",
        role: "product designer",
        team: "collaborated with PM, engineers",
      },
    },
    {
      title: "Name corrections",
      id: "110",
      slug: "name-corrections",
      tagline:
        "Helped bookers to add their “correct” name, to avoid issues at flight check-in or even boarding. Reduced this type of tickets by 50%",
      image: "name-corrections/hero.png",
      isExternal: false,
      tldr: "TODO: Name correction tickets add +0.17 to contact ratio and take 45+ minutes each to resolve. We tackled this with a series of checkout improvements that encourage bookers to check and edit traveller names, plus a fix for how special characters are handled.",
      summary: {
        year: "2025 - 2026",
        role: "product designer",
        team: "collaborated with PM, engineers",
      },
      content: [
        {
          type: "TitleAndText",
          title: "The problem",
          content: [
            {
              type: "body",
              text: "When a flight booking is made, the name sent to the provider doesn't always match the traveller's legal name on their passport. Once a booking is made, fixing the name is expensive: it takes Customer Care 45+ minutes on average, and in some cases airlines won't allow the correction at all.",
            },
            {
              type: "list",
              list: [
                "Name corrections add +0.17 to contact ratio, with 45+ minutes AHT per ticket",
                "79% of name correction cases happen when the booker isn't the traveller",
              ],
            },
            {
              type: "body",
              text: "Most of these tickets come from flight bookings where no travel document was provided, so the booking falls back to the traveller's profile name - often a preferred name, not their legal one. The fact that the majority of cases happen when the booker isn't the traveller made it clear this wasn't just a typo problem - it was a visibility problem.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption: "TODO: add image - hero/overview of the name corrections problem (e.g. Looker chart of contact ratio, or a booking with a mismatched name)",
          image: "name-corrections/hero.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Our first hypothesis: documents are the answer",
          content: [
            {
              type: "body",
              text: "When we looked at where name corrections were coming from, one pattern stood out - bookings that had a travel document attached almost never ran into this problem. That made the first solution feel obvious: if having a document on file solves it, why not require one for every booking? It's the kind of fix that looks airtight from the data alone, and it became our starting point.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption: "TODO: add image - early concept of forcing a travel document at checkout",
          image: "name-corrections/hypothesis-placeholder.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Testing that hypothesis against reality",
          content: [
            {
              type: "body",
              text: "Before committing to that direction, we looked at how other travel platforms handle this - and even for international flights, most don't require a passport to book. That was the first signal something was off.",
            },
            {
              type: "body",
              text: "So I ran the numbers on our own bookings, and the gap was stark: around 4,000 flight bookings a week would now need an extra step, to address roughly 150 cases where the name was actually wrong. Internally, that comparison was enough to change the direction of the project.",
            },
            {
              type: "list",
              list: [
                "~150 problem cases per week",
                "~4,000 bookings per week affected by a new requirement",
                "Other OTAs only require documents for international flights",
              ],
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption: "TODO: add image - competitive analysis of other OTAs / quantitative breakdown (4,000 vs 150)",
          image: "name-corrections/analysis-placeholder.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "A lighter-touch solution",
          content: [
            {
              type: "body",
              text: "So the question became: how do we get the same outcome - a correct name on the booking - without adding a step for everyone? The traveller's name was already there, but it was buried inside a details modal that most bookers never opened.",
            },
            {
              type: "body",
              text: "We added a checkbox prompting bookers to confirm the name matched the traveller's legal name, and made that name visible without extra clicks. The next step builds on this directly - exposing the name fields inline on checkout, so reviewing and editing happens in place.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption: "TODO: add image - checkout checkbox and improved traveller name visibility",
          image: "name-corrections/checkbox-placeholder.png",
        },
        {
          type: "ImageWithCaption",
          caption: "TODO: add image - inline editable name fields at checkout (next phase)",
          image: "name-corrections/inline-fields-placeholder.png",
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "Fixing the edge cases",
          content: [
            {
              type: "body",
              text: "A smaller piece of this - around 4% of cases - came down to how special characters get handled. Some providers would turn a character like \"ä\" into \"a\" instead of \"ae\", and reject the booking outright. That's a backend fix rather than a UI one: correcting the normalisation logic when a travel document is added, and showing a clear message if a character is going to change.",
            },
          ],
        },
        {
          type: "ImageWithCaption",
          caption: "TODO: add image - special character normalisation message at document upload",
          image: "name-corrections/special-characters-placeholder.png",
        },
        {
          type: "Divider",
        },
        {
          type: "ImpactCallOut",
          title: "Results so far",
          subtitle:
            "The first set of changes - the checkbox and improved visibility - went live at the end of March. By the time we checked the numbers in May, the contact ratio had already dropped, before the inline editing or special character fix had even shipped.",
          content: [
            {
              top_content: "↓ name corrections contact ratio",
              bottom_content: "From 0.17 (Jan) to 0.12 (March)",
            },
          ],
        },
        {
          type: "Divider",
        },
        {
          type: "TitleAndText",
          title: "What this taught me",
          content: [
            {
              type: "body",
              text: "What stuck with me from this project is that the data pointing toward \"documents reduce mismatches\" was true - but it didn't account for the cost of applying that fix everywhere. Comparing against what other platforms do, and running the numbers on our own bookings, turned a sweeping requirement into a much smaller, more targeted change. And that smaller change is already showing results.",
            },
          ],
        },
      ],
    },
  ],
};
