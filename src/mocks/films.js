const getRandomFilmsID = (length, max) => {
  return Array(length)
    .fill()
    .map(() => Math.round(Math.random() * max));
};

export default [
  {
    id: 1,
    title: `Knocking on Heaven's Door`,
    genre: `Drama`,
    releaseDate: 1997,
    rating: {
      value: 8.6,
      count: 427000,
    },
    duration: `1h 39m`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `2 men - strangers to each other - meet at a hospital when they're both told they've just a few day of live left. The 2 set out on a 'bucket list'/road trip.`,
    director: `Thomas Yan`,
    starring: [
      `Til Schweiger`, `Jan Josef Liefers`, `Thierry Van Werveke`,
      `Moritz Bleibtreu`, `Huub Stapel`, `Leonard Lansink`,
      `Ralph Herforth`, `Cornelia Froboess`, `Rutger Hauer`,
      `Christiane Paul`
    ],
    coverImg: `heavens-door.jpg`,
    fullImg: `https://picsum.photos/273/410`,
    similarFilmsID: getRandomFilmsID(4, 10),
  },
  {
    id: 2,
    title: `Bohemian Rhapsody`,
    genre: `Drama`,
    releaseDate: 2018,
    rating: {
      value: 8.0,
      count: 437000,
    },
    duration: `1h 49m`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Музыкальный фестиваль Live Aid (1985).`,
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    coverImg: `bohemian-rhapsody.jpg`,
    fullImg: `https://picsum.photos/273/410`,
    similarFilmsID: getRandomFilmsID(4, 10),
  },
  {
    id: 3,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    genre: `Fantasy`,
    releaseDate: 2018,
    rating: {
      value: 6.6,
      count: 213000,
    },
    duration: `2h 19m`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `The second installment of the "Fantastic Beasts" series featuring the adventures of Magizoologist Newt Scamander.`,
    director: `David Yates`,
    starring: [`Eddie Redmayne`, `Katherine Waterston`, `Dan Fogler`],
    coverImg: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    fullImg: `https://picsum.photos/273/410`,
    similarFilmsID: getRandomFilmsID(4, 10),
  },
  {
    id: 4,
    title: `Macbeth`,
    genre: `History`,
    releaseDate: 2015,
    rating: {
      value: 6.6,
      count: 52000,
    },
    duration: `1h 43m`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
    director: `Justin Kurzel`,
    starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
    coverImg: `macbeth.jpg`,
    fullImg: `https://picsum.photos/273/410`,
    similarFilmsID: getRandomFilmsID(4, 10),
  },
  {
    id: 5,
    title: `The Aviator`,
    genre: `Drama`,
    releaseDate: 2004,
    rating: {
      value: 7.5,
      count: 328000,
    },
    duration: `1h 24m`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `A biopic depicting the early years of legendary Director and aviator Howard Hughes' career from the late 1920s to the mid 1940s.`,
    director: `Martin Scorsese`,
    starring: [`Leonardo DiCaprio`, `Cate Blanchett`, `Kate Beckinsale`],
    coverImg: `aviator.jpg`,
    fullImg: `https://picsum.photos/273/410`,
    similarFilmsID: getRandomFilmsID(4, 10),
  },
  {
    id: 6,
    title: `We Need to Talk About Kevin`,
    genre: `Drama`,
    releaseDate: 2011,
    rating: {
      value: 7.5,
      count: 135000,
    },
    duration: `1h 09m`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Kevin's mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.`,
    director: `Lynne Ramsay`,
    starring: [`Tilda Swinton`, `John C. Reilly`, `Ezra Miller`],
    coverImg: `we-need-to-talk-about-kevin.jpg`,
    fullImg: `https://picsum.photos/273/410`,
    similarFilmsID: getRandomFilmsID(4, 10),
  },
  {
    id: 7,
    title: `The Revenant`,
    genre: `Action`,
    releaseDate: 2015,
    rating: {
      value: 8.0,
      count: 689000,
    },
    duration: `1h 28m`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.`,
    director: `Alejandro G. Iñárritu`,
    starring: [`Leonardo DiCaprio`, `Tom Hardy`, `Will Poulter`],
    coverImg: `revenant.jpg`,
    fullImg: `https://picsum.photos/273/410`,
    similarFilmsID: getRandomFilmsID(4, 10),
  },
  {
    id: 8,
    title: `Shutter Island`,
    genre: `Mystery`,
    releaseDate: 2010,
    rating: {
      value: 8.2,
      count: 1104000,
    },
    duration: `2h 03m`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.`,
    director: `Martin Scorsese`,
    starring: [`Leonardo DiCaprio`, `Emily Mortimer`, `Mark Ruffalo`],
    coverImg: `shutter-island.jpg`,
    fullImg: `https://picsum.photos/273/410`,
    similarFilmsID: getRandomFilmsID(4, 10),
  },
  {
    id: 9,
    title: `Tenet`,
    genre: `Sci-Fi`,
    releaseDate: 2015,
    rating: {
      value: 7.8,
      count: 131000,
    },
    duration: `2h 07m`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.`,
    director: `Christopher Nolan`,
    starring: [`John David Washington`, `Robert Pattinson`, `Elizabeth Debicki`],
    coverImg: `tenet.jpg`,
    fullImg: `https://picsum.photos/273/410`,
    similarFilmsID: getRandomFilmsID(4, 10),
  },
  {
    id: 10,
    title: `What We Do in the Shadows`,
    genre: `Comedy`,
    releaseDate: 2019,
    rating: {
      value: 8.5,
      count: 31000,
    },
    duration: `2h 07m`,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    description: `A look into the daily (or rather, nightly) lives of three vampires, who've lived together for over 100 years, on Staten Island.`,
    director: `Jemaine Clement`,
    starring: [`Kayvan Novak`, `Matt Berry`, `Natasia Demetriou`],
    coverImg: `what-we-do-in-the-shadows.jpg`,
    fullImg: `https://picsum.photos/273/410`,
    similarFilmsID: getRandomFilmsID(4, 10),
  },
];

