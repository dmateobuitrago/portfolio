export const data = {
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
        teacher: "anton repponen",
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
          title: "Daily stories",
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
        teacher: "anton repponen",
        client: "school project at harbour.space",
        role: "ui design, branding"
      }
    }
  ]
};