export const clientIdentities = {
    A: {
        title: "The Vision Wrangler",
        description: "You're bursting with big ideas and experimental concepts, but you need a team that can help wrangle that vision into something concrete without stifling the creative energy."
    },
    B: {
        title: "The Strategic Scaler",
        description: "You value efficiency, straight talk, and high-energy sprints. You're looking to scale fast and need a team that moves quickly, strategically, and with precise execution."
    },
    C: {
        title: "The Creative Ally",
        description: "You want a true partnership. You prioritize warmth, inclusivity, and doing things right. You're looking for co-creators who share your values and empathy."
    },
    D: {
        title: "The Design-Led Operator",
        description: "You're highly structured and expect minimal, timeless excellence. You want quiet pros who respect true craft and understand that smart strategy and high standards come first."
    },
    E: {
        title: "The Cultural Builder",
        description: "You're focused on legacy, culture, and long-term impact. You want partners with global minds who understand storytelling and can build deeply rooted brand equity."
    }
};

export const talentIdentities = {
    A: {
        title: "The Visionary Executor",
        description: "You think in concepts and bring serious energy to execution. You need a client who trusts you to lead — and a brief that gives you room to move."
    },
    B: {
        title: "The Precision Operator",
        description: "You are the person who makes sure everything actually lands. Detail-oriented, delivery-focused, and allergic to ambiguity. You work best with clients who know what they want."
    },
    C: {
        title: "The Cultural Connector",
        description: "Your work is rooted in people, community, and meaning. You're drawn to brands that stand for something — and you tell stories that actually resonate."
    },
    D: {
        title: "The Strategic Creative",
        description: "You lead with thinking. The concept has to be right before anything else moves. You thrive with clients who value ideas as much as output."
    },
    E: {
        title: "The Adaptive Force",
        description: "You move fast, shift easily, and bring fresh energy to every brief. You're the person teams call when they need someone who can hit the ground running and figure it out as they go."
    }
};

export const clientQuiz = [
    {
        id: "q1",
        title: "Style / Aesthetic",
        subtitle: "How would you describe your brand's visual identity?",
        type: "multi",
        max: 3,
        options: [
            { label: "Minimal & modern", points: { D: 2 } },
            { label: "Bold & experimental", points: { A: 2, C: 1 } },
            { label: "Warm & human-centered", points: { C: 2 } },
            { label: "Timeless & classic", points: { D: 2, B: 1 } },
            { label: "Playful & expressive", points: { A: 2, C: 1 } },
            { label: "Cultural & heritage-inspired", points: { E: 2 } },
            { label: "Futuristic & tech-forward", points: { B: 2 } },
            { label: "Not sure — surprise me", points: { A: 1, C: 1 } }
        ]
    },
    {
        id: "q2",
        title: "Values & Influences",
        subtitle: "What drives your brand forward?",
        type: "multi",
        max: 3,
        options: [
            { label: "Community and inclusion", points: { C: 2, E: 1 } },
            { label: "Innovation and disruption", points: { B: 2, A: 1 } },
            { label: "Storytelling and authenticity", points: { E: 2, C: 1 } },
            { label: "Precision and excellence", points: { D: 2, B: 1 } },
            { label: "Sustainability and ethics", points: { C: 2 } },
            { label: "Legacy and cultural pride", points: { E: 2 } },
            { label: "Other", points: { A: 1 } }
        ]
    },
    {
        id: "q3",
        title: "Working Style",
        subtitle: "How do you prefer to collaborate?",
        type: "single",
        options: [
            { label: "Fast", points: { B: 2 } },
            { label: "Together", points: { C: 2, A: 1 } },
            { label: "Quiet", points: { D: 2 } },
            { label: "Structured", points: { B: 2, D: 1 } },
            { label: "Guided", points: { A: 2 } }
        ]
    },
    {
        id: "q4",
        title: "Team Vibe",
        subtitle: "What kind of team do you want in your corner?",
        type: "multi",
        max: 3,
        options: [
            { label: "High Energy", points: { A: 2 } },
            { label: "Quiet Pros", points: { D: 2, B: 1 } },
            { label: "Global Minds", points: { E: 2, C: 1 } },
            { label: "Straight Talkers", points: { B: 2 } },
            { label: "The Empaths", points: { C: 2 } },
            { label: "The Closers", points: { B: 2 } }
        ]
    },
    {
        id: "q5",
        title: "What Matters Most",
        subtitle: "If you had to prioritize, what's non-negotiable?",
        type: "multi",
        max: 3,
        options: [
            { label: "Everyone Included", points: { C: 2, E: 1 } },
            { label: "Fast & Efficient", points: { B: 2 } },
            { label: "True Craft", points: { D: 2, A: 1 } },
            { label: "New Ideas", points: { A: 2 } },
            { label: "Smart Strategy", points: { B: 2 } },
            { label: "Doing Right", points: { C: 2, E: 1 } },
            { label: "The Long Game", points: { E: 2, D: 1 } },
            { label: "No Guesses", points: { D: 2, B: 1 } }
        ]
    }
];

export const talentQuiz = [
    {
        id: "q1",
        title: "Aesthetic DNA",
        subtitle: "What is your core visual or creative style?",
        type: "single",
        options: [
            { label: "Clean & Modern", points: { B: 2, D: 1 } },
            { label: "Bold & Edgy", points: { A: 2, E: 1 } },
            { label: "Warm & Human", points: { C: 2 } },
            { label: "Classic & Timeless", points: { B: 2, D: 1 } },
            { label: "Fun & Playful", points: { A: 2, E: 1 } },
            { label: "Rooted & Cultural", points: { C: 2 } },
            { label: "High-Tech & Future", points: { D: 2, B: 1 } },
            { label: "The Chameleon", points: { E: 2 } }
        ]
    },
    {
        id: "q2",
        title: "Ideal Partners",
        subtitle: "Who do you work best with?",
        type: "single",
        options: [
            { label: "The Visionaries", points: { A: 2, D: 1 } },
            { label: "The Explorers", points: { D: 2, A: 1 } },
            { label: "The Sprinters", points: { B: 2, E: 1 } },
            { label: "The Co-Creators", points: { C: 2, A: 1 } },
            { label: "The Hands-Off Pros", points: { B: 2, E: 1 } },
            { label: "The Culture-Firsts", points: { C: 2 } },
            { label: "The Analysts", points: { D: 2, B: 1 } }
        ]
    },
    {
        id: "q3",
        title: "How You Flow",
        subtitle: "What's your ideal working style?",
        type: "single",
        options: [
            { label: "The Sprinter", points: { E: 2, B: 1 } },
            { label: "The Loop", points: { C: 2, A: 1 } },
            { label: "The Deep Diver", points: { D: 2, B: 1 } },
            { label: "The Architect", points: { B: 2, D: 1 } },
            { label: "The Explorer", points: { A: 2, E: 1 } }
        ]
    },
    {
        id: "q4",
        title: "Communication Dialect",
        subtitle: "How do you prefer to communicate?",
        type: "single",
        options: [
            { label: "The Straight Shooter", points: { B: 2, E: 1 } },
            { label: "The Bridge Builder", points: { C: 2, A: 1 } },
            { label: "The Async Pro", points: { B: 2, D: 1 } },
            { label: "The Visual Thinker", points: { A: 2, D: 1 } },
            { label: "The Real-Timer", points: { C: 2, E: 1 } },
            { label: "The Librarian", points: { B: 2, D: 1 } }
        ]
    },
    {
        id: "q5",
        title: "Non-Negotiables",
        subtitle: "What's a dealbreaker for you?",
        type: "single",
        options: [
            { label: "Creative Freedom", points: { A: 2, D: 1 } },
            { label: "The Respect Factor", points: { B: 2, C: 1 } },
            { label: "Cultural Relevance", points: { C: 2 } },
            { label: "The Long Game", points: { C: 2, D: 1 } },
            { label: "Constant Growth", points: { D: 2, A: 1 } },
            { label: "The Big Impact", points: { C: 2, A: 1 } },
            { label: "Zero Guesswork", points: { B: 2, E: 1 } },
            { label: "The Credit", points: { A: 2, D: 1 } }
        ]
    },
    {
        id: "q6",
        title: "Creative Appetite",
        subtitle: "What kind of projects feed your soul?",
        type: "single",
        options: [
            { label: "The Ground Up", points: { D: 2, A: 1 } },
            { label: "The Big Idea", points: { A: 2, D: 1 } },
            { label: "The Engine", points: { B: 2, E: 1 } },
            { label: "The Lab", points: { A: 2, D: 1 } },
            { label: "The Narrative", points: { C: 2, D: 1 } },
            { label: "The Machine", points: { B: 2, E: 1 } },
            { label: "The Sprint", points: { E: 2, B: 1 } },
            { label: "The Partnership", points: { C: 2, D: 1 } }
        ]
    },
    {
        id: "q7",
        title: "Your Fuel",
        subtitle: "What makes it all worth it?",
        type: "single",
        options: [
            { label: "The Blueprint", points: { B: 2, D: 1 } },
            { label: "Creative Trust", points: { A: 2, D: 1 } },
            { label: "The Quick Loop", points: { C: 2, E: 1 } },
            { label: "Sanity-Check Timelines", points: { B: 2, C: 1 } },
            { label: "The Fair Exchange", points: { C: 2, B: 1 } },
            { label: "Radical Candor", points: { D: 2, B: 1 } },
            { label: "Show & Tell", points: { A: 2, E: 1 } }
        ]
    }
];
