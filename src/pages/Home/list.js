//tachnologies available: 2d, 3d, dolby-atmos, imax, vr
export const currentDate = new Date(2023, 4, 20);
export const movies = [
    {
        imgPath: '',
        technologies: [],
        title: 'Murdery Mystery 2',
        description: ``,
        date: new Date(2023, 3, 19),
        location: 'Crawley'
    },
    {
        imgPath: '',
        technologies: [],
        title: 'Nobody',
        description: ``,
        date: new Date(2023, 4, 19),
        location: 'Brighton'
    },
    {
        imgPath: '',
        technologies: [],
        title: 'Home',
        description: ``,
        date: new Date(2023, 1, 18),
        location: 'Crawley'
    },
    {
        imgPath: '',
        technologies: [],
        title: 'Yes Day',
        description: ``,
        date: new Date(2023, 3, 2),
        location: 'Horley'
    },
    {
        imgPath: '',
        technologies: [],
        title: 'The Spy Next Door',
        description: ``,
        date: new Date(2023, 1, 28),
        location: 'Tunbridge Wells'
    },
    {
        imgPath: '',
        technologies: [],
        title: 'Time Trap',
        description: ``,
        date: new Date(2023, 4, 16),
        location: 'Crawley'
    },
    {
        imgPath: '',
        technologies: [],
        title: 'Slender Man',
        description: ``,
        date: new Date(2023, 2, 15),
        location: 'Brighton'
    },
    {
        imgPath: '',
        technologies: [],
        title: 'The Deep House',
        description: ``,
        date: new Date(2023, 4, 10),
        location: 'Horley'
    },
    {
        imgPath: './images/movies/puss-in-boots.jpg',
        technologies: ['2d', '3d'],
        title: 'Puss in Boots: The Last Wish',
        description: `When Puss in Boots discovers that his passion for adventure
        has taken its toll and he has burned through eight of his nine lives,
        he launches an epic journey to restore them by finding the mythical Last Wish.`,
        date: new Date(2023, 4, 20),
        location: 'Crawley',
        trailerLink: 'https://www.youtube.com/embed/OseB6af6PiE',
        trailerTitle: 'Puss in Boots: The Last Wish | Official Trailer (Universal Pictures) HD',
        detailedDescription: `This year, everyone’s favourite leche-loving, swashbuckling, fear-defying feline returns.
        For the first time in more than a decade, DreamWorks Animation presents a new adventure in the Shrek universe as 
        daring outlaw Puss in Boots discovers that his passion for peril and disregard for safety have taken their toll.
        Puss has burned through eight of his nine lives, though he lost count along the way. Getting those lives back will
        send Puss in Boots on his grandest quest yet. Academy Award® nominee Antonio Banderas returns as the voice of the
        notorious PiB as he embarks on an epic journey into the Black Forest to find the mythical Wishing Star and restore
        his lost lives. But with only one life left, Puss will have to humble himself and ask for help from his former 
        partner and nemesis: the captivating Kitty Soft Paws (Oscar® nominee Salma Hayek). In their quest, Puss and Kitty
        will be aided—against their better judgment—by a ratty, chatty, relentlessly cheerful mutt, Perro (Harvey Guillén,
        What We Do in the Shadows). Together, our trio of heroes will have to stay one step ahead of Goldilocks (Oscar® 
        nominee Florence Pugh, Black Widow) and the Three Bears Crime Family, “Big” Jack Horner (Emmy winner John Mulaney,
        Big Mouth) and terrifying bounty hunter, The Big Bad Wolf (Wagner Moura, Narcos).`,
        releaseDate: new Date(2023, 2, 3),
        runningTime: 102,
        director: 'Joel Crawford, Januel Mercado',
        cast: `Antonio Banderas, Olivia Colman, Salma Hayek, Wagner Moura, Ray Winstone, Florence Pugh, Harvey Guillén,
         Da'Vine Joy Randolph, Samson Kayo, John Mulaney, Anthony Mendez`,
        descImg: './images/movies/puss-in-boots2.jpg'
    },
    {
        imgPath: './images/movies/juniper.jpg',
        technologies: ['2d', 'dolby-atmos'],
        title: 'Juniper',
        description: `Juniper's story offers few surprises -- and it doesn't need any,
         with Charlotte Rampling holding the viewer rapt from start to finish.`,
        date: new Date(2023, 4, 20),
        location: 'Crawley',
        trailerLink: 'https://www.youtube.com/embed/XwR4CIeMCzs',
        trailerTitle: 'Juniper - Official Trailer',
        detailedDescription: `Sam (17) has been on a self-destructive spiral that could lead to his death.
         He returns home from boarding school to find his wheelchair-bound English grandmother, Ruth 
         has moved in. Ruth is an ex-war photographer with a lust for life and a love of the bottle.
          Sam soon finds himself profoundly confronted by her alcoholic wit and chutzpah. Their first 
          meeting is awkward; their second violent. Things get worse when Sam finds himself stranded
           alone with her and her nurse Sarah for the school holidays. Both strong-willed characters,
            a battle of supremacy ensues, enabling Sam to embrace life again and for Ruth to face her mortality. `,
        releaseDate: new Date(2023, 1, 23),
        runningTime: 94,
        director: 'Matthew Saville',
        cast: `Marton Csokas, Charlotte Rampling, George Ferrier, Edith Poor `,
        descImg: './images/movies/juniper2.jpg'
    },
    {
        imgPath: './images/movies/the-tank.jpg',
        technologies: ['3d', 'dolby-atmos'],
        title: 'The Tank',
        description: `After mysteriously inheriting an abandoned coastal property, Ben
         and his family accidentally unleash an ancient, long-dormant creature that
          terrorized the entire region—including his own ancestors—for generations.`,
        date: new Date(2023, 4, 20),
        location: 'Crawley',
        trailerLink: 'https://www.youtube.com/embed/RwpVvk6L-Lg',
        trailerTitle: 'The Tank - Official Trailer (2023)',
        detailedDescription: `Sam (17) has been on a self-destructive spiral that could lead to his death.
         He returns home from boarding school to find his wheelchair-bound English grandmother, Ruth 
         has moved in. Ruth is an ex-war photographer with a lust for life and a love of the bottle.
          Sam soon finds himself profoundly confronted by her alcoholic wit and chutzpah. Their first 
          meeting is awkward; their second violent. Things get worse when Sam finds himself stranded
           alone with her and her nurse Sarah for the school holidays. Both strong-willed characters,
            a battle of supremacy ensues, enabling Sam to embrace life again and for Ruth to face her mortality. `,
        releaseDate: new Date(2023, 2, 14),
        runningTime: 106,
        director: 'Scott Walker',
        cast: `Luciane Buchanan, Matthew Whelan, Zara Nausbaum, Regina Hegemann`,
        descImg: './images/movies/the-tank2.jpg'
    },
    {
        imgPath: './images/movies/the-best-man.jpg',
        technologies: ['2d', 'vr', 'dolby-atmos'],
        title: 'The Best Man',
        description: `When a team of ruthless mercenaries violently seize control of
         a remote resort hotel, former Special Ops soldiers attending their best friend's
          wedding must rely only on their wits and training to combat the terrorists and save the hostages held for ransom.`,
        date: new Date(2023, 4, 20),
        location: 'Crawley',
        trailerLink: 'https://www.youtube.com/embed/PBKckidprks',
        trailerTitle: 'The Best Man: The Final Chapters | Official Trailer | Peacock Original',
        detailedDescription: `The Best Man: The Final Chapters is an American comedy-drama miniseries created by Malcolm D. Lee
         and developed by Lee and Dayna Lynne North. The series takes place a few years after The Best Man Holiday and it premiered on Peacock on December 22, 2022. 
         As relationships evolve and past grievances resurface in the unpredictable stages of midlife crisis meets midlife renaissance.On February 9, 2021,
          Peacock gave production a limited series order consisting of ten episodes. It is created by Malcolm D. Lee and Dayna Lynne North who are also
           executive producing it.[1] Filming for the limited series began on March 14, 2022.[4] It was filmed in New York City, New Jersey, and Dominican Republic.`,
        releaseDate: new Date(2022, 6, 10),
        runningTime: 30,
        director: 'Malcolm D. Lee, Dayna Lynne North',
        cast: `Morris Chestnut, Melissa De Sousa, Regina Hall`,
        descImg: './images/movies/the-best-man2.jpg'
    },
    {
        imgPath: './images/movies/evil-dead-rise.jpg',
        technologies: ['3d', 'imax'],
        title: 'Evil Dead Rise',
        description: `Moving the action out of the woods and into the city, EVIL DEAD RISE tells the twisted tale of two
         estranged sisters, played by Sutherland and Sullivan, whose reunion is cut short by the rise of flesh-possessing demons,
          thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable. `,
        date: new Date(2023, 4, 21),
        location: 'Crawley',
        trailerLink: 'https://www.youtube.com/embed/smTK_AeAPHs',
        trailerTitle: 'EVIL DEAD RISE - Official Trailer - (Redband)',
        detailedDescription: `Moving the action out of the woods and into the city, EVIL DEAD RISE tells the twisted tale of two estranged sisters,
         played by Sutherland and Sullivan, whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for
          survival as they face the most nightmarish version of family imaginable.`,
        releaseDate: new Date(2023, 4, 21),
        runningTime: 94,
        director: 'Lee Cronin',
        cast: `Lily Sullivan, Nell Fisher, Alyssa Sutherland, Jayden Daniels, Gabrielle Echols, Billy Reynolds-McCarthy, Tai Wano, Morgan Davies`,
        descImg: './images/movies/evil-dead-rise2.jpg'
    },
    {
        imgPath: './images/movies/fury-of-the-gods.jpg',
        technologies: ['2d'],
        title: 'Shazam! Fury Of The Gods',
        description: `From New Line Cinema comes “Shazam! Fury of the Gods,” which continues the story of teenage Billy Batson who,
         upon reciting the magic word “SHAZAM!,” is transformed into his adult Super Hero alter ego, Shazam. `,
        date: new Date(2023, 4, 22),
        location: 'Crawley',
        trailerLink: 'https://www.youtube.com/embed/Zi88i4CpHe4',
        trailerTitle: 'SHAZAM! FURY OF THE GODS - Official Trailer',
        detailedDescription: `From New Line Cinema comes “Shazam! Fury of the Gods,” which continues the story of teenage Billy Batson who, upon reciting
         the magic word “SHAZAM!,” is transformed into his adult Super Hero alter ego, Shazam.`,
        releaseDate: new Date(2023, 3, 17),
        runningTime: 130,
        director: 'David F. Sandberg',
        cast: `Adam Brody, Zachary Levi, Lucy Liu, Helen Mirren, Rachel Zegler, Jack Dylan Grazer, Asher Angel, Marta Milans`,
        descImg: './images/movies/fury-of-the-gods2.jpg'
    },
    {
        imgPath: './images/movies/how-to-blow-up-a-pipeline.jpg',
        technologies: ['2d', '3d', 'dolby-atmos'],
        title: 'How To Blow Up A Pipeline',
        description: `A crew of environmental activists plot a daring plan to disrupt an oil pipeline.`,
        date: new Date(2023, 4, 22),
        location: 'Crawley',
        trailerLink: 'https://www.youtube.com/embed/bSb585bGYmQ',
        trailerTitle: 'How To Blow Up A Pipeline - Official Trailer',
        detailedDescription: `How to Blow Up a Pipeline is a 2022 American environmentalist action-thriller film directed by Daniel Goldhaber, who co-wrote
         the screenplay with Ariela Barer and Jordan Sjol. It relies on ideas advanced in Andreas Malm's 2021 book of the same name, published by Verso Books.`,
        releaseDate: new Date(2023, 4, 21),
        runningTime: 104,
        director: 'Daniel Goldhaber',
        cast: `Jake Weary, Sasha Lane, Marcus Scribner, Jayme Lawson, Forrest Goodluck, Kristine Froseth, Ariela Barer, Lukas Gage`,
        descImg: './images/movies/how-to-blow-up-a-pipeline2.jpg'
    },
    {
        imgPath: './images/movies/john-wick.jpg',
        technologies: ['2d', 'imax'],
        title: 'John Wick Chapter 4',
        description: `John Wick (Keanu Reeves) takes on his most lethal adversaries yet in the upcoming fourth instalment of the series.
         With the price on his head ever increasing, Wick takes his fight against the HighTable global as he seeks out the most powerful
          players in the underworld, from New York to Paris to Osaka to Berlin. `,
        date: new Date(2023, 4, 23),
        location: 'Crawley',
        trailerLink: 'https://www.youtube.com/embed/yjRHZEUamCc',
        trailerTitle: 'John Wick: Chapter 4 (2023) Final Trailer – Keanu Reeves, Donnie Yen, Bill Skarsgård',
        detailedDescription: `John Wick (Keanu Reeves) takes on his most lethal adversaries yet in the upcoming fourth instalment of the series.
         With the price on his head ever increasing, Wick takes his fight against the HighTable global as he seeks out the most powerful players in
         the underworld, from New York to Paris to Osaka to Berlin.`,
        releaseDate: new Date(2023, 4, 24),
        runningTime: 169,
        director: 'Chad Stahelski',
        cast: `Laurence Fishburne, Ian McShane, Keanu Reeves, Hiroyuki Sanada, Donnie Yen, Scott Adkins, Lance Reddick, Bill Skarsgård, Shamier Anderson, Rina Sawayama`,
        descImg: './images/movies/john-wick2.jpg'
    },
    {
        imgPath: './images/movies/big-george-foreman.jpg',
        technologies: ['2d', '3d'],
        title: 'Big George Foreman',
        description: `The film will follow the remarkable life and times of George Foreman, from Olympic Gold medalist to World Heavyweight
         champion, the Rumble in the Jungle fight with Muhammad Ali in Zaire, to finding his faith, retiring, and becoming a preacher. `,
        date: new Date(2023, 4, 21),
        location: 'Brighton',
        trailerLink: 'https://www.youtube.com/embed/urKDu40iaXk',
        trailerTitle: 'BIG GEORGE FOREMAN – Official Trailer (HD)',
        detailedDescription: `The film will follow the remarkable life and times of George Foreman, from Olympic Gold medalist to World Heavyweight champion,
         the Rumble in the Jungle fight with Muhammad Ali in Zaire, to finding his faith, retiring, and becoming a preacher. When financial hardship hits his 
         family and church, he steps back in the ring and regains the championship at age 45, the oldest heavyweight champion in boxing history. `,
        releaseDate: new Date(2023, 4, 28),
        runningTime: 129,
        director: 'George Tillman Jr.',
        cast: `John Magaro, Sonja Sohn, Forest Whitaker, Khris Davis, Sullivan Jones, Jasmine Mathews, Shein Mompremier `,
        descImg: './images/movies/big-george-foreman2.jpg'
    },
    {
        imgPath: './images/movies/born-to-fly.jpg',
        technologies: ['vr', 'imax'],
        title: 'Born To Fly',
        description: `The story of a special operations team headed by elite pilots , being ordered to test new fighter jets.
         Test flight after test flight, they continue to challenge the sky and the limits of themselves. `,
        date: new Date(2023, 4, 23),
        location: 'Brighton',
        trailerLink: 'https://www.youtube.com/embed/3pt3cpD8Pao',
        trailerTitle: 'BORN TO FLY (2023) Official International Trailer',
        detailedDescription: `Lei Yu and a group of elite aviators undergo rigorous training to be recognised as official test pilots. Led by the
         experienced Commander Zhang, they are tasked with testing the latest fighter jets. As they soar to new heights, the unexpected happens when
          the engine fails and catches fire, causing the aircraft to spiral out of control. Despite facing near-death situations repeatedly, they
           persevere and gather crucial data under extreme circumstances. However, with the deadline for delivery of the fighter jet quickly approaching,
            their challenges become increasingly difficult. Will they be able to triumph over adversity and successfully complete their mission? 
            With breathtaking aerial sequences and high-stakes action, "Born to Fly" is an adrenaline-fueled ride that showcases the unwavering determination and bravery of test pilots.`,
        releaseDate: new Date(2023, 4, 5),
        runningTime: 128,
        director: 'Xiaoshi Liu, Liu Xiaoshi',
        cast: `Yibo Wang, Jun Hu, Dongyu Zhou, Zhou Dongyu, Wang Yibo, Hu Jun, Xu Kaicheng, Bu Yu`,
        descImg: './images/movies/born-to-fly2.jpg'
    },
    {
        imgPath: './images/movies/chupa.jpeg',
        technologies: ['3d', 'dolby-atmos'],
        title: 'Chupa',
        description: `While visiting family in Mexico, a lonely boy befriends a mythical creature hiding
         on his grandfather's ranch and embarks on the adventure of a lifetime. `,
        date: new Date(2023, 4, 20),
        location: 'Tunbridge Wells',
        trailerLink: 'https://www.youtube.com/embed/ViKnrHjzgn4',
        trailerTitle: 'CHUPA | Official Trailer | Netflix',
        detailedDescription: `While visiting family in Mexico, teenage Alex gains an unlikely companion when he
         discovers a young chupacabra hiding in his grandpa's shed. To save the mythical creature, Alex and his cousins must embark on the adventure of a lifetime.`,
        releaseDate: new Date(2023, 3, 30),
        runningTime: 95,
        director: 'Jonás Cuarón',
        cast: `Demián Bichir, Christian Slater, Evan Whitten`,
        descImg: './images/movies/chupa2.jpg'
    },
    {
        imgPath: './images/movies/intouchables.jpeg',
        technologies: [],
        title: 'The Intouchables',
        description: `After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.`,
        date: new Date(2011, 9, 21),
        location: 'soon',
        trailerLink: 'https://www.youtube.com/embed/34WIbmXkewU',
        trailerTitle: 'The Intouchables Official Trailer #1 (2012) HD Movie',
        detailedDescription: `Philippe (Francois Cluzet) is a millionaire who was paralyzed from the neck down in a para-gliding accident. Driss (Omar Sy)
         is a man out on parole for robbery, who applies for the job of Philippe's caregiver only so he can be rejected and get a signature on his application for unemployment benefits.`,
        releaseDate: new Date(2011, 9, 21),
        runningTime: 112,
        director: 'Olivier Nakache, Éric Toledano',
        cast: `François Cluzet, Omar Sy, Anne Le Ny`,
        descImg: './images/movies/intouchables2.jpg'
    },
    {
        imgPath: './images/movies/wall-e.jpg',
        technologies: [],
        title: 'WALL-E',
        description: `In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.`,
        date: new Date(2011, 9, 21),
        location: 'soon',
        trailerLink: 'https://www.youtube.com/embed/3Mi62VKDhm0',
        trailerTitle: 'WALL·E - Official Trailer 2008 [HD]',
        detailedDescription: `WALL•E (Waste Allocation Load Lifter Earth-Class) is the last robot left on Earth, programmed to clean up the planet, one trash cube
         at a time. However, after 700 years, he's developed one little glitch—a personality. He's extremely curious, highly inquisitive, and a little lonely.`,
        releaseDate: new Date(2008, 6, 18),
        runningTime: 98,
        director: 'Andrew Stanton',
        cast: `Ben Burtt, Elissa Knight, Jeff Garlin`,
        descImg: './images/movies/wall-e2.jpg'
    },
    {
        imgPath: './images/movies/gentlemen.jpg',
        technologies: [],
        title: 'The Gentlemen',
        description: `An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.`,
        date: new Date(2011, 9, 21),
        location: 'soon',
        trailerLink: 'https://www.youtube.com/embed/vaN8BtA8OJk',
        trailerTitle: 'THE GENTLEMEN Trailer (2020)',
        detailedDescription: `An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.`,
        releaseDate: new Date(2019, 12, 3),
        runningTime: 113,
        director: 'Guy Ritchie',
        cast: `Matthew McConaughey, Charlie Hunnam, Michelle Dockery`,
        descImg: './images/movies/gentlemen2.jpg'
    }
]

export const availability = [
    {
        title: 'Puss in Boots: The Last Wish',
        availableOn: [[new Date(2023, 4, 20, 12), new Date(2023, 4, 20, 16), new Date(2023, 4, 20, 18, 15)],
                      [new Date(2023, 4, 23, 10), new Date(2023, 4, 23, 15, 30), new Date(2023, 4, 20, 19)]]
    },
    {
        title: 'Juniper',
        availableOn: [[new Date(2023, 4, 20, 11), new Date(2023, 4, 20, 14), new Date(2023, 4, 20, 20)]]
    },
    {
        title: 'The Tank',
        availableOn: [[new Date(2023, 4, 20, 9), new Date(2023, 4, 20, 16), new Date(2023, 4, 20, 17)],
                      [new Date(2023, 4, 24, 11), new Date(2023, 4, 24, 14)]]
    },
    {
        title: 'The Best Man',
        availableOn: [[new Date(2023, 4, 20, 10), new Date(2023, 4, 20, 11, 30), new Date(2023, 4, 20, 15)],
        [new Date(2023, 4, 22, 11), new Date(2023, 4, 23, 14)]]
    },
    {
    title: 'Evil Dead Rise',
    availableOn: [[new Date(2023, 4, 21, 10), new Date(2023, 5, 16, 13), new Date(2023, 5, 16, 20)]]
    },
    {
    title: 'Shazam! Fury Of The Gods',
    availableOn: [[new Date(2023, 4, 22, 9), new Date(2023, 4, 22, 12), new Date(2023, 4, 22, 18)]]
    },
    {
    title: 'How To Blow Up A Pipeline',
    availableOn: [[new Date(2023, 2, 22, 11), new Date(2023, 4, 2, 14), new Date(2023, 6, 14, 19)]]
    },
    {
    title: 'John Wick Chapter 4',
    availableOn: [[new Date(2023, 4, 23, 10), new Date(2023, 4, 23, 13), new Date(2023, 4, 23, 17)]]
    },
    {
    title: 'Big George Foreman',
    availableOn: [[new Date(2023, 4, 21, 9), new Date(2023, 8, 1, 12), new Date(2023, 8, 1, 19)]]
    },
    {
    title: 'Born To Fly',
    availableOn: [[new Date(2023, 4, 23, 11), new Date(2023, 4, 23, 14), new Date(2023, 4, 23, 18)]]
    },
    {
        title: 'Chupa',
        availableOn: [[new Date(2023, 4, 20, 11), new Date(2023, 4, 20, 14), new Date(2023, 4, 20, 18)]]
    }
];

export let reviews = [
    {
        title: 'Puss in Boots: The Last Wish',
        comments: [
            {
                username: 'EgorPov',
                date: new Date(2023, 4, 20, 14, 17),
                message: `There’s an entire pick ’n’ mix stand of eye candy here – more than enough to satisfy younger viewers. But alas, it’s all empty calories.`
            },
            {
                username: 'HarryBodie',
                date: new Date(2023, 4, 20, 16, 1),
                message: `The Last Wish is a spellbinding, funny, and gorgeous piece of animated storytelling that restores this franchise to past glory.
                 The real cat in the hat is back, and his boots are very much made for walking! `
            }
        ]
    }
]