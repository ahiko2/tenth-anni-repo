import { useEffect, useRef, useState } from "react";

const chapters = [
  {
    id: "01",
    chapter: "Chapter 1",
    kicker: "July 2015",
    year: "2015",
    roadmapLabel: "Transferred to MEC",
    title: "I transferred to MEC Private School, and at first everything felt unfamiliar.",
    body:
      "I was the new student. New faces, new place, and that quiet feeling of not fully belonging yet. That is where our story began.",
    summary: "The beginning is you arriving at MEC as the new student.",
  },
  {
    id: "02",
    chapter: "Chapter 1",
    kicker: "Little by little",
    year: "2015",
    roadmapLabel: "Started noticing her",
    title: "Then one person slowly stopped feeling like part of the crowd.",
    body:
      "As the days passed, I started noticing her more and more. In a place that first felt strange, she became the person my attention kept returning to.",
    summary: "The whole school fades into the background, and one girl starts standing out.",
  },
  {
    id: "03",
    chapter: "Chapter 1",
    kicker: "Classroom glances",
    year: "2015",
    roadmapLabel: "My eyes kept finding her",
    title: "During class and after class, my eyes kept finding her.",
    body:
      "It was a soft, quiet kind of crush. Nothing loud. Just the feeling of always looking for the same person without meaning to.",
    summary: "This is the shy young-love part, when feelings grow quietly.",
  },
  {
    id: "04",
    chapter: "Chapter 1",
    kicker: "The promise",
    year: "2015",
    roadmapLabel: "I proposed to her",
    title: "One day, those hidden feelings became words and I made a promise to her.",
    body:
      "This was the turning point. The moment where looking became speaking, and where a quiet crush finally became brave enough to be real.",
    summary: "The story changes when your feelings are finally spoken.",
    image: "/assets/proposetoher.jpg",
    imageAlt: "Myanmar-language chat screenshot from the proposal moment",
    caption: "The message that changed the story from hidden feelings into something real.",
  },
  {
    id: "05",
    chapter: "Chapter 1",
    kicker: "Her answer",
    year: "2015",
    roadmapLabel: "She replied warmly",
    title: "She answered gently, and her reply became part of the reason our story could really begin.",
    body:
      "Her answer was soft and simple, but it carried so much warmth. It was enough to make everything after it possible.",
    summary: "A kind reply became the first real ground your relationship stood on.",
    image: "/assets/happytospendwithya.jpg",
    imageAlt: "Chat screenshot saying it is okay and she is happy to spend time together",
    caption: "Her reply: 'It's ok. I'm happy to spent my time with u.'",
  },
  {
    id: "06",
    chapter: "Chapter 1",
    kicker: "2016/03/16",
    year: "2016",
    roadmapLabel: "We officially started dating",
    title: "2016/03/16 was the day we finally started dating.",
    body:
      "This is the real ending of Chapter 1. Not just liking each other anymore, but becoming a real couple. A date worth celebrating every year.",
    summary: "This is your official anniversary date, the true finish line of Chapter 1.",
    special: "anniversary",
    mediaSections: [
      {
        type: "gallery",
        layout: "pair",
        caption: "Our first online couple profile photos, side by side.",
        images: [
          {
            src: "/assets/firstcouplepic-me.jpg",
            alt: "First online couple profile photo of him",
          },
          {
            src: "/assets/firstcouplepic-she.jpg",
            alt: "First online couple profile photo of her",
          },
        ],
      },
      {
        type: "image",
        src: "/assets/firstphotoofours.jpg",
        alt: "Early couple photo after you started dating",
        caption: "Our first photo together after we officially became a couple.",
      },
    ],
  },
  {
    id: "07",
    chapter: "Chapter 2",
    kicker: "The first months",
    year: "2016",
    roadmapLabel: "We spent time together",
    title: "For the first five months, we kept meeting, hanging out, and dating like usual.",
    body:
      "Those months were simple and happy. We were together normally, and nothing yet looked like it was about to break the shape of our everyday life.",
    summary: "Chapter 2 opens with ordinary happiness before the hard part arrives.",
  },
  {
    id: "08",
    chapter: "Chapter 2",
    kicker: "August or September 2016",
    year: "2016",
    roadmapLabel: "I lied before leaving",
    title: "Before I moved away, I told her I was only going on a long trip to another city.",
    body:
      "My move to Japan had already been decided, but I did not have the courage to tell her the truth. That became the biggest lie I ever told her.",
    summary: "Fear made you hide the truth at the last moment.",
    special: "lie",
  },
  {
    id: "09",
    chapter: "Chapter 2",
    kicker: "Leaving Myanmar",
    year: "2016",
    roadmapLabel: "I moved to Japan",
    title: "After we parted, I cried, and then I moved to Japan.",
    body:
      "The goodbye was not honest, and that made it heavier. After that meeting, I left Myanmar and everything between us changed into distance.",
    summary: "This is where your story turns into long distance.",
    special: "airplane",
  },
  {
    id: "10",
    chapter: "Chapter 2",
    kicker: "The truth",
    year: "2016",
    roadmapLabel: "She found out",
    title: "A few days later, she realized the truth and asked why I did not tell her.",
    body:
      "She trusted me, and I was too scared to face her with the truth before I left. She was angry at first, and she had every reason to be.",
    summary: "This is the emotional center of Chapter 2: love hurt by fear and silence.",
  },
  {
    id: "11",
    chapter: "Chapter 2",
    kicker: "Still together",
    year: "2016",
    roadmapLabel: "She forgave me",
    title: "Even after that, somehow she forgave me, and we kept dating across the distance.",
    body:
      "That forgiveness is one of the strongest things in your story. The relationship did not end there. It changed form and became something that had to survive online calls, missing each other, and still choosing each other.",
    summary: "Her forgiveness is what allowed the LDR chapter to begin instead of ending everything.",
    gallery: [
      {
        src: "/assets/welaugh-01.jpg",
        alt: "Online video call memory one",
      },
      {
        src: "/assets/welaugh-02.jpg",
        alt: "Online video call memory two",
      },
    ],
    caption: "We kept talking, laughing, and loving each other through calls.",
  },
  {
    id: "12",
    chapter: "Chapter 2",
    kicker: "2017",
    year: "2017",
    roadmapLabel: "We met again",
    title: "One year later, I came back to Myanmar and we saw each other again.",
    body:
      "After a year of distance, this meeting carried more weight. It was proof that the relationship had survived the hardest turn in the story so far.",
    summary: "Chapter 2 ends with reunion after a year of distance.",
    image: "/assets/wemeetagainin2017.jpg",
    imageAlt: "Photo of the couple meeting again in 2017",
    caption: "Us together again in 2017, after one long year apart.",
  },
  {
    id: "13",
    chapter: "Chapter 3",
    kicker: "The years kept moving",
    year: "2021",
    roadmapLabel: "Myanmar changed",
    title: "As time passed, the Myanmar coup happened, and visiting became much harder.",
    body:
      "Distance already repeated, and then the world around us changed too. The coup made visiting Myanmar much more difficult, and the relationship had to survive another kind of uncertainty.",
    summary: "Chapter 3 begins with bigger outside events making reunion harder.",
  },
  {
    id: "14",
    chapter: "Chapter 3",
    kicker: "A new direction",
    year: "2022",
    roadmapLabel: "She moved to Malaysia",
    title: "She worried about her future and eventually moved to Malaysia.",
    body:
      "That change was heavy, but it also created a new possibility. Visiting her in Malaysia became a more realistic chance than waiting for Myanmar to become easy again.",
    summary: "Her move to Malaysia opened a possible way for you to meet again.",
    special: "malaysia",
  },
  {
    id: "15",
    chapter: "Chapter 3",
    kicker: "April 2023",
    year: "2023",
    roadmapLabel: "I started working",
    title: "In April 2023, I started working and finally began saving enough money to see her.",
    body:
      "This part matters because it turns hope into action. Work, money, planning, and patience all became part of the love story too.",
    summary: "Saving money made the next reunion possible in a practical, real way.",
  },
  {
    id: "16",
    chapter: "Chapter 3",
    kicker: "August 2023",
    year: "2023",
    roadmapLabel: "We met in Malaysia",
    title: "In August 2023, I was finally able to meet her in Malaysia.",
    body:
      "After all the distance, changes, and waiting, this reunion carried the weight of everything that came before it. It was not an ordinary meeting. It was something earned.",
    summary: "Chapter 3 lands on a reunion made possible by time, work, and persistence.",
    special: "japan-malaysia",
    gallery: [
      {
        src: "/assets/malaysia-meet-firstime.jpg",
        alt: "First Malaysia reunion photo",
      },
      {
        src: "/assets/malaysia-meet-2.jpg",
        alt: "Malaysia reunion photo two",
      },
      {
        src: "/assets/malaysia-meet-3.jpg",
        alt: "Malaysia reunion photo three",
      },
      {
        src: "/assets/malaysia-meet-4.jpg",
        alt: "Malaysia reunion photo four",
      },
      {
        src: "/assets/malaysia-meet-5.jpg",
        alt: "Malaysia reunion photo five",
      },
    ],
    caption: "Meeting again in Malaysia, in August 2023.",
  },
  {
    id: "17",
    chapter: "Chapter 4",
    kicker: "2024",
    year: "2024",
    roadmapLabel: "I went again with a better budget",
    title: "Another year later, I went to Malaysia again, this time with a better budget.",
    body:
      "This return trip feels different. Not just another reunion, but a stronger one. You were more prepared, more stable, and able to come back to her with more confidence.",
    summary: "Chapter 4 starts with a more solid return: same love, stronger footing.",
    image: "/assets/malaysia-photo-2024-01.jpg",
    imageAlt: "Airport photo from the 2024 Malaysia trip",
    caption: "I am here again.",
  },
  {
    id: "18",
    chapter: "Chapter 4",
    kicker: "2024 Malaysia trip",
    year: "2024",
    roadmapLabel: "We made more memories together",
    title: "This trip became another chapter of us, filled with better days and better memories.",
    body:
      "By this point, the story is no longer only about surviving distance. It is also about returning, meeting again, and building new memories with more strength than before.",
    summary: "Chapter 4 turns reunion into a fuller season of memories, not just one meeting.",
    gallery: [
      {
        src: "/assets/malaysia-photo-2024-02.jpg",
        alt: "Malaysia 2024 trip photo two",
      },
      {
        src: "/assets/malaysia-photo-2024-03.jpg",
        alt: "Malaysia 2024 trip photo three",
      },
      {
        src: "/assets/malaysia-photo-2024-04.jpg",
        alt: "Malaysia 2024 trip photo four",
      },
      {
        src: "/assets/malaysia-photo-2024-05.jpg",
        alt: "Malaysia 2024 trip photo five",
      },
      {
        src: "/assets/malaysia-photo-2024-06.jpg",
        alt: "Malaysia 2024 trip photo six",
      },
      {
        src: "/assets/malaysia-photo-2024-07.jpg",
        alt: "Malaysia 2024 trip photo seven",
      },
      {
        src: "/assets/malaysia-photo-2024-08.jpg",
        alt: "Malaysia 2024 trip photo eight",
      },
    ],
    caption: "More memories from the 2024 Malaysia trip.",
  },
  {
    id: "19",
    chapter: "Chapter 5",
    kicker: "2025",
    year: "2025",
    roadmapLabel: "I went to Malaysia again",
    title: "In 2025, I went to Malaysia again and we made even more memories together.",
    body:
      "By then, the journey already carried years of history. Every trip meant more because it held the weight of everything we had survived to reach that moment.",
    summary: "Chapter 5 begins with another return, not out of chance, but because love kept choosing the road back.",
    image: "/assets/malaysia-photo-2025-01.jpg",
    imageAlt: "Malaysia 2025 trip opening photo",
    caption: "Back in Malaysia again, carrying another year of love with me.",
  },
  {
    id: "20",
    chapter: "Chapter 5",
    kicker: "2025 Malaysia memories",
    year: "2025",
    roadmapLabel: "We kept making memories",
    title: "The journey kept becoming fuller, warmer, and more precious with every year we stayed together.",
    body:
      "At this point, loving her is not just one moment or one season. It is years of choosing, forgiving, waiting, meeting again, and still wanting more life together after all of it.",
    summary: "This chapter shows that your love did not stand still. It kept growing in depth and meaning.",
    gallery: [
      {
        src: "/assets/malaysia-photo-2025-02.jpg",
        alt: "Malaysia 2025 photo two",
      },
      {
        src: "/assets/malaysia-photo-2025-03.jpg",
        alt: "Malaysia 2025 photo three",
      },
      {
        src: "/assets/malaysia-photo-2025-04.jpg",
        alt: "Malaysia 2025 photo four",
      },
      {
        src: "/assets/malaysia-photo-2025-05.jpg",
        alt: "Malaysia 2025 photo five",
      },
      {
        src: "/assets/malaysia-photo-2025-06.jpg",
        alt: "Malaysia 2025 photo six",
      },
    ],
    caption: "More moments from our 2025 Malaysia trip.",
  },
  {
    id: "21",
    chapter: "Finale",
    kicker: "2026/03/16",
    year: "10th Anniversary",
    roadmapLabel: "Our 10th anniversary",
    title: "2026/03/16. Ten years of us. Wow, what a beautiful time it has been.",
    body:
      "From the first time I noticed you in school, to the long-distance years, the pain, the waiting, the reunions, and every journey after, loving you has been one of the deepest and most beautiful parts of my life.",
    summary: "The whole story lands here: ten years of love, gratitude, apology, and promise.",
    special: "finale",
    queenGif: "/assets/anni-photo-her-gif.gif",
    letter: [
      "I love you so much. I loved you when I was still too shy to say anything, I loved you when distance made everything harder, and I love you now with even more certainty than before.",
      "Thank you for staying, for forgiving me, for trusting me again, for waiting through the difficult years, and for giving this story so much warmth. I know I made mistakes. I am sorry for the times I hurt you, especially when fear made me hide the truth from you.",
      "But through everything, my heart kept returning to you. That has never changed. If anything, every year has made me appreciate you more, respect you more, and love you more deeply.",
      "Ten years is wow for us. It is precious. It is beautiful. And from now on too, I want to keep loving you more, treating you better, and making even more memories with you. Thank you, and I love you always.",
    ],
  },
];

const chapterOverview = [
  {
    id: "Chapter 1",
    years: "2015 - 2016",
    target: "chapter-1",
    image: "/assets/firstphotoofours.jpg",
    title: "How we became a couple",
    feeling: "The shy beginning, the promise, and the day we finally became us.",
  },
  {
    id: "Chapter 2",
    years: "2016 - 2023",
    target: "chapter-2",
    image: "/assets/wemeetagainin2017.jpg",
    title: "The move to Japan and our LDR beginning",
    feeling: "Distance hurt us, but love stayed and kept choosing to continue.",
  },
  {
    id: "Chapter 3",
    years: "2023 - keep going",
    target: "chapter-3",
    image: "/assets/malaysia-meet-firstime.jpg",
    title: "The coup, Malaysia, and meeting again",
    feeling: "Work, waiting, and finally earning the chance to meet again.",
  },
  {
    id: "Chapter 4",
    years: "2024",
    target: "chapter-4",
    image: "/assets/malaysia-photo-2024-01.jpg",
    title: "Going again with a better budget",
    feeling: "A stronger return, with more stability and more memories together.",
  },
  {
    id: "Chapter 5",
    years: "2025 - 2026",
    target: "chapter-5",
    image: "/assets/malaysia-photo-2025-01.jpg",
    title: "More journeys and our 10th anniversary",
    feeling: "A wonderful journey that keeps growing, all the way to our 10th anniversary.",
  },
  {
    id: "Finale",
    years: "2026/03/16",
    target: "chapter-finale",
    image: "/assets/anni-photo-her-gif.gif",
    title: "Ten years of us",
    feeling: "My queen, thank you, I love you, and I want to love you more from now on too.",
  },
];

function StoryMedia({ chapter }) {
  if (chapter.special === "finale") {
    return (
      <div className="memory-stack finale-stack">
        <div className="finale-banner">
          <p className="finale-date">2026/03/16</p>
          <h3>Happy 10th Anniversary</h3>
        </div>
        <figure className="memory-block queen-block">
          <img src={chapter.queenGif} alt="Her gif in the final anniversary section" className="queen-gif" />
          <figcaption>My queen.</figcaption>
        </figure>
        <div className="letter-block">
          {chapter.letter.map((paragraph, index) => (
            <p key={`${chapter.id}-letter-${index}`}>{paragraph}</p>
          ))}
        </div>
      </div>
    );
  }

  if (chapter.special === "japan-malaysia") {
    return (
      <div className="memory-stack">
        <figure className="memory-block travel-block reunion-travel-block">
          <div className="travel-scene reunion-travel-scene" aria-hidden="true">
            <div className="country-marker reunion-marker reunion-marker-japan">
              <span className="country-pin"></span>
              <strong>Japan</strong>
            </div>
            <div className="country-marker reunion-marker reunion-marker-malaysia">
              <span className="country-pin"></span>
              <strong>Malaysia</strong>
            </div>

            <svg
              className="travel-path reunion-travel-path"
              viewBox="0 0 300 140"
              role="img"
              aria-label="Plane flying from Japan to Malaysia"
            >
              <path
                className="travel-dash"
                d="M38 102 C96 116, 142 96, 180 70 S236 34, 272 28"
                pathLength="100"
              />
            </svg>

            <div className="plane-icon reunion-plane">✈</div>
            <div className="cloud reunion-cloud reunion-cloud-left"></div>
            <div className="cloud reunion-cloud reunion-cloud-right"></div>
          </div>
          <figcaption>From Japan to Malaysia, you finally made the trip that brought you back to her.</figcaption>
        </figure>

        <figure className="memory-block">
          <div className="memory-grid multi-up">
            {chapter.gallery.map((image) => (
              <img key={image.src} src={image.src} alt={image.alt} className="memory-image" />
            ))}
          </div>
          <figcaption>{chapter.caption}</figcaption>
        </figure>
      </div>
    );
  }

  if (chapter.special === "malaysia") {
    return (
      <figure className="memory-block malaysia-block">
        <div className="malaysia-scene" aria-hidden="true">
          <div className="country-marker marker-myanmar">
            <span className="country-pin"></span>
            <strong>Myanmar</strong>
          </div>
          <div className="country-marker marker-malaysia">
            <span className="country-pin"></span>
            <strong>Malaysia</strong>
          </div>
          <div className="travel-arrow">→</div>
          <div className="travel-note">A new place meant a new chance to meet.</div>
        </div>
        <figcaption>Her move to Malaysia changed the direction of the story and made reunion possible again.</figcaption>
      </figure>
    );
  }

  if (chapter.special === "lie") {
    return (
      <figure className="memory-block lie-block">
        <div className="lie-scene" aria-hidden="true">
          <div className="lie-note note-front">I said it was just a long trip.</div>
          <div className="lie-note note-back">But the truth was Japan.</div>
          <div className="lie-thread"></div>
        </div>
        <figcaption>The hardest part here was not the move itself, but hiding the truth from her.</figcaption>
      </figure>
    );
  }

  if (chapter.special === "airplane") {
    return (
      <figure className="memory-block travel-block">
        <div className="travel-scene" aria-hidden="true">
          <div className="country-marker marker-myanmar">
            <span className="country-pin"></span>
            <strong>Myanmar</strong>
          </div>
          <div className="country-marker marker-japan">
            <span className="country-pin"></span>
            <strong>Japan</strong>
          </div>

          <svg className="travel-path" viewBox="0 0 300 140" role="img" aria-label="Plane flying from Myanmar to Japan">
            <path
              className="travel-dash"
              d="M34 104 C92 130, 152 98, 182 70 S252 26, 276 34"
              pathLength="100"
            />
          </svg>

          <div className="plane-icon">✈</div>
          <div className="cloud cloud-left"></div>
          <div className="cloud cloud-right"></div>
        </div>
        <figcaption>From Myanmar to Japan, the story changed into distance.</figcaption>
      </figure>
    );
  }

  if (chapter.mediaSections) {
    return (
      <div className="memory-stack">
        {chapter.mediaSections.map((section, index) => {
          if (section.type === "gallery") {
            return (
              <figure
                key={`${chapter.id}-section-${index}`}
                className={`memory-block ${
                  chapter.special === "anniversary" ? "anniversary-block" : ""
                }`}
              >
                {chapter.special === "anniversary" && index === 0 ? (
                  <div className="fireworks" aria-hidden="true">
                    <span className="firework firework-left"></span>
                    <span className="firework firework-center"></span>
                    <span className="firework firework-right"></span>
                  </div>
                ) : null}
                <div className={`memory-grid ${section.layout === "pair" ? "pair-grid" : ""}`}>
                  {section.images.map((image) => (
                    <img key={image.src} src={image.src} alt={image.alt} className="memory-image" />
                  ))}
                </div>
                <figcaption>{section.caption}</figcaption>
              </figure>
            );
          }

          return (
            <figure key={`${chapter.id}-section-${index}`} className="memory-block">
              <img src={section.src} alt={section.alt} className="memory-image" />
              <figcaption>{section.caption}</figcaption>
            </figure>
          );
        })}
      </div>
    );
  }

  if (chapter.gallery) {
    const galleryClass =
      chapter.gallery.length === 2
        ? "memory-grid two-up"
        : chapter.gallery.length > 2
          ? "memory-grid multi-up"
          : "memory-grid";

    return (
      <figure className={`memory-block ${chapter.special === "anniversary" ? "anniversary-block" : ""}`}>
        {chapter.special === "anniversary" ? (
          <div className="fireworks" aria-hidden="true">
            <span className="firework firework-left"></span>
            <span className="firework firework-center"></span>
            <span className="firework firework-right"></span>
          </div>
        ) : null}

        <div className={galleryClass}>
          {chapter.gallery.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} className="memory-image" />
          ))}
        </div>
        <figcaption>{chapter.caption}</figcaption>
      </figure>
    );
  }

  if (chapter.image) {
    return (
      <figure className="memory-block">
        <img src={chapter.image} alt={chapter.imageAlt} className="memory-image" />
        <figcaption>{chapter.caption}</figcaption>
      </figure>
    );
  }

  return null;
}

function ChapterSelector({ activeChapter }) {
  return (
    <div className="chapter-selector-grid">
      {chapterOverview.map((item) => {
        const isActive = item.id === activeChapter.chapter;

        return (
          <a key={item.id} href={`#${item.target}`} className={`chapter-tile ${isActive ? "is-active" : ""}`}>
            <img src={item.image} alt={item.title} className="chapter-tile-image" />
            <div className="chapter-tile-body">
              <p className="chapter-tile-years">{item.years}</p>
              <h3>{item.id}</h3>
              <strong>{item.title}</strong>
              <p className="chapter-tile-feeling">{item.feeling}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}

function App() {
  const chapterRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        const nextIndex = Number(visible.target.getAttribute("data-index"));
        setActiveIndex(nextIndex);
      },
      {
        threshold: [0.35, 0.6, 0.8],
        rootMargin: "-8% 0px -18% 0px",
      },
    );

    const currentRefs = chapterRefs.current;
    currentRefs.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      currentRefs.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, []);

  const activeChapter = chapters[activeIndex];

  return (
    <div className="app-shell">
      <div className="ambient ambient-left"></div>
      <div className="ambient ambient-right"></div>

      <aside className="visual-panel">
        <div className="visual-card hero-card">
          <p className="eyebrow">Tap A Chapter</p>
          <h1>
            A photo for each chapter,
            <span> then tap to enter the memory.</span>
          </h1>
          <p className="lede">
            Each top photo now works like a chapter cover. Tap one to jump into
            its dates, memories, photos, and how you felt in that part of the
            journey.
          </p>

          <div className="badge-row">
            <span>Tap to jump</span>
            <span>Dates + photos</span>
            <span>Feelings included</span>
          </div>
        </div>

        <div className="visual-card map-card">
          <div className="poster-head">
            <div>
              <p className="label">Selected chapter</p>
              <strong>{activeChapter.chapter}</strong>
            </div>
            <div className="year-pill">{activeChapter.kicker}</div>
          </div>

          <ChapterSelector activeChapter={activeChapter} />

          <div className="poster-footer">
            <div>
              <p className="label">Scene meaning</p>
              <strong>{activeChapter.summary}</strong>
            </div>
            <div>
              <p className="label">Scene</p>
              <strong>
                {activeChapter.id} / {chapters.length}
              </strong>
            </div>
          </div>
        </div>
      </aside>

      <main className="story-column">
        {chapters.map((chapter, index) => (
          <section
            key={chapter.id}
            ref={(element) => {
              chapterRefs.current[index] = element;
            }}
            id={
              chapter.id === "01"
                ? "chapter-1"
                : chapter.id === "07"
                  ? "chapter-2"
                  : chapter.id === "13"
                    ? "chapter-3"
                    : chapter.id === "17"
                      ? "chapter-4"
                      : chapter.id === "19"
                        ? "chapter-5"
                        : chapter.id === "21"
                          ? "chapter-finale"
                          : undefined
            }
            data-index={index}
            className={`story-card ${activeIndex === index ? "is-active" : ""} ${
              chapter.special ? `is-${chapter.special}` : ""
            }`}
          >
            <div className="story-topline">
              <span className="story-index">{chapter.id}</span>
              <span className="story-chapter">{chapter.chapter}</span>
            </div>
            <p className="story-kicker">{chapter.kicker}</p>
            <h2>{chapter.title}</h2>
            <p>{chapter.body}</p>
            <StoryMedia chapter={chapter} />
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
