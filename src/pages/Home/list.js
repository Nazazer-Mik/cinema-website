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
        location: 'Crawley'
    },
    {
        imgPath: './images/movies/the-tank.jpg',
        technologies: ['3d', 'dolby-atmos'],
        title: 'The Tank',
        description: `After mysteriously inheriting an abandoned coastal property, Ben
         and his family accidentally unleash an ancient, long-dormant creature that
          terrorized the entire region—including his own ancestors—for generations.`,
        date: new Date(2023, 4, 20),
        location: 'Crawley'
    },
    {
        imgPath: './images/movies/the-best-man.jpg',
        technologies: ['2d', 'vr', 'dolby-atmos'],
        title: 'The Best Man',
        description: `When a team of ruthless mercenaries violently seize control of
         a remote resort hotel, former Special Ops soldiers attending their best friend's
          wedding must rely only on their wits and training to combat the terrorists and save the hostages held for ransom.`,
        date: new Date(2023, 4, 20),
        location: 'Crawley'
    },
    {
        imgPath: './images/movies/evil-dead-rise.jpg',
        technologies: ['3d', 'imax'],
        title: 'Evil Dead Rise',
        description: `Moving the action out of the woods and into the city, EVIL DEAD RISE tells the twisted tale of two
         estranged sisters, played by Sutherland and Sullivan, whose reunion is cut short by the rise of flesh-possessing demons,
          thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable. `,
        date: new Date(2023, 4, 21),
        location: 'Crawley'
    },
    {
        imgPath: './images/movies/fury-of-the-gods.jpg',
        technologies: ['2d'],
        title: 'Shazam! Fury Of The Gods',
        description: `From New Line Cinema comes “Shazam! Fury of the Gods,” which continues the story of teenage Billy Batson who,
         upon reciting the magic word “SHAZAM!,” is transformed into his adult Super Hero alter ego, Shazam. `,
        date: new Date(2023, 4, 22),
        location: 'Crawley'
    },
    {
        imgPath: './images/movies/how-to-blow-up-a-pipeline.jpg',
        technologies: ['2d', '3d', 'dolby-atmos'],
        title: 'How To Blow Up A Pipeline',
        description: `A crew of environmental activists plot a daring plan to disrupt an oil pipeline.`,
        date: new Date(2023, 4, 22),
        location: 'Crawley'
    },
    {
        imgPath: './images/movies/john-wick.jpg',
        technologies: ['2d', 'imax'],
        title: 'John Wick Chapter 4',
        description: `John Wick (Keanu Reeves) takes on his most lethal adversaries yet in the upcoming fourth instalment of the series.
         With the price on his head ever increasing, Wick takes his fight against the HighTable global as he seeks out the most powerful
          players in the underworld, from New York to Paris to Osaka to Berlin. `,
        date: new Date(2023, 4, 23),
        location: 'Crawley'
    },
    {
        imgPath: './images/movies/big-george-foreman.jpg',
        technologies: ['2d', '3d'],
        title: 'Big George Foreman',
        description: `The film will follow the remarkable life and times of George Foreman, from Olympic Gold medalist to World Heavyweight
         champion, the Rumble in the Jungle fight with Muhammad Ali in Zaire, to finding his faith, retiring, and becoming a preacher. `,
        date: new Date(2023, 4, 21),
        location: 'Brighton'
    },
    {
        imgPath: './images/movies/born-to-fly.jpg',
        technologies: ['vr', 'imax'],
        title: 'Born To Fly',
        description: `The story of a special operations team headed by elite pilots , being ordered to test new fighter jets.
         Test flight after test flight, they continue to challenge the sky and the limits of themselves. `,
        date: new Date(2023, 4, 23),
        location: 'Brighton'
    },
    {
        imgPath: './images/movies/chupa.jpeg',
        technologies: ['3d', 'dolby-atmos'],
        title: 'Chupa',
        description: `While visiting family in Mexico, a lonely boy befriends a mythical creature hiding
         on his grandfather's ranch and embarks on the adventure of a lifetime. `,
        date: new Date(2023, 4, 20),
        location: 'Tunbridge Wells'
    }
]

export const availability = [
    {
        title: 'Puss in Boots: The Last Wish',
        availableOn: [[new Date(2023, 4, 20, 12), new Date(2023, 4, 20, 16), new Date(2023, 4, 20, 18, 15)],
                      [new Date(2023, 4, 23, 10), new Date(2023, 4, 23, 15, 30), new Date(2023, 4, 20, 19)]]
    }
];