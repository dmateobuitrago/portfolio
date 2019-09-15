export const data = {
  links: [
    ['instagram ↗', 'https://www.instagram.com/buitragojara'],
    ['linkedin ↗', 'https://www.linkedin.com/in/mateobuitrago/'],
    ['dribble ↗', 'https://dribbble.com/mateobuitrago'],
    ['dmateobuitrago [at] gmail.com', 'mailto:dmateobuitrago@gmail.com'],
  ],
  projects: [
    {
      title: "Juan-on-Juan",
      id: "1",
      slug: "juan-on-juan",
      tagline: "I designed a website for an sports magazine. →",
      tags: "ui design",
      image: "juan/juan_hero.png",
      tldr:
        "I designed the website for an online sports publication, featuring latin american athletes all over the world. This small publication releases between 3-4 stories a day and one weekly special story. I was asked to propose design for those type of stories and the homepage.",
      summary: {
        year: "2019",
        timeframe: "3 weeks",
        tools: "keynote, sketch, pen & paper",
        // teacher: "anton repponen",
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

      ]
    },
    {
      title: "Broken Symmetry",
      id: "2",
      slug: "broken-symmetry",
      tagline: "Wes Anderson retrospective screening →",
      tags: "branding and graphic design",
      image: "broken/hero.png",
      tldr:
        "Our fictional client was an online publication exploring life and culture through thematic , visually-oriented international coverage and commentary. They were part of a large publishing organization and they were an small team writing about several topics, focusing on releasing stories daily (about 4 or 6) and one long form weekly story.",
      summary: {
        year: "2019",
        timeframe: "3 weeks",
        tools: "keynote, sketch, pen & paper",
        // teacher: "anton repponen",
        client: "school project at harbour.space",
        role: "ui design, branding"
      }
    }
  ]
};
