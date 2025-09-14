export interface QuizOption {
    label: string;
    archetype: Archetype;
}

export interface QuizQuestion {
    id: string;
    question: string;
    options: QuizOption[];
}

export type Archetype =
    | "The Mythic Warrior"
    | "The Maiden Warrior"
    | "The Knight"
    | "The Barbarian"
    | "The Trickster"
    | "The Earth-Shaker"
    | "The Wise Wizard"
    | "The Warbringer"
    | "The Shadow"
    | "The Anti-Hero"
    | "The Witch"
    | "The Rogue"
    | "The Damsel"
    | "The Unlikely Hero"
    | "The Iron Woman"
    | "The Companion"
    | "The Magical prodigy"
    | "The Fool"
    | "The Mystic"
    | "The Hero's Muse";


export interface ArchetypeInfo {
    title: string;
    description: string;
    image: string;
}


export const archetypeConfig: Record<Archetype, ArchetypeInfo> = {
    "The Mythic Warrior": {
        title: "The Mythic Warrior",
        description:
            "A figure of legend, embodying strength and destiny. You fight not just battles, but for ideals greater than yourself.",
        image: "/archetype-images/mythic-warrior.webp",
    },
    "The Maiden Warrior": {
        title: "The Maiden Warrior",
        description:
            "Grace and courage define you. Though underestimated, your resolve makes you a formidable force.",
        image: "/archetype-images/maiden-warrior.jpg",
    },
    "The Knight": {
        title: "The Knight",
        description:
            "Bound by honor and duty, you defend others with loyalty and valor. Your code is your compass.",
        image: "/archetype-images/knight.webp",
    },
    "The Barbarian": {
        title: "The Barbarian",
        description:
            "Raw strength and fierce spirit guide you. You rely on instinct and might to carve your path.",
        image: "/archetype-images/barbarian.webp",
    },
    "The Trickster": {
        title: "The Trickster",
        description:
            "Wit and mischief are your tools. You bend rules, upend expectations, and thrive in chaos.",
        image: "/archetype-images/trickster.webp",
    },
    "The Earth-Shaker": {
        title: "The Earth-Shaker",
        description:
            "A force of nature, unstoppable and overwhelming. You change everything around you through sheer presence.",
        image: "/archetype-images/earth-shaker.png",
    },
    "The Wise Wizard": {
        title: "The Wise Wizard",
        description:
            "Keeper of knowledge and secrets, you guide others with wisdom. Your power lies in understanding.",
        image: "/archetype-images/wise-wizard.webp",
    },
    "The Warbringer": {
        title: "The Warbringer",
        description:
            "Conflict follows you, not by accident but by design. You inspire armies and reshape the world through strife.",
        image: "/archetype-images/warbringer.webp",
    },
    "The Shadow": {
        title: "The Shadow",
        description:
            "You embody the unknown, the hidden, the fears others dare not face. You move silently, but leave a lasting mark.",
        image: "/archetype-images/shadow.jpg",
    },
    "The Anti-Hero": {
        title: "The Anti-Hero",
        description:
            "Flawed, complex, and compelling. You do what must be done, even when it's not noble.",
        image: "/archetype-images/anti-hero.webp",
    },
    "The Witch": {
        title: "The Witch",
        description:
            "Mysterious and powerful, you walk the line between feared and revered. Magic is your weapon and your shield.",
        image: "/archetype-images/witch.webp",
    },
    "The Rogue": {
        title: "The Rogue",
        description:
            "Clever, resourceful, and always ready with a backup plan. You thrive in the shadows where others might falter.",
        image: "/archetype-images/rogue.png",
    },
    "The Damsel": {
        title: "The Damsel",
        description:
            "Often underestimated, but your vulnerability hides unexpected strength and resilience.",
        image: "/archetype-images/damsel.webp",
    },
    "The Unlikely Hero": {
        title: "The Unlikely Hero",
        description:
            "You rise to the occasion when no one expects it. Ordinary on the surface, extraordinary when it matters.",
        image: "/archetype-images/unlikely-hero.jpg",
    },
    "The Iron Woman": {
        title: "The Iron Woman",
        description:
            "Characterized by exceptional strength, resilience, and endurance",
        image: "/archetype-images/tron-woman.webp",
    },
    "The Companion": {
        title: "The Companion",
        description:
            "Loyal, supportive, and steadfast. You may not lead the story, but you're the heart that keeps it moving.",
        image: "/archetype-images/companion.webp",
    },
    "The Magical prodigy": {
        title: "The Magical Prodigy",
        description:
            "Gifted beyond your years, your power dazzles and intimidates. You are destined for greatness, ready or not.",
        image: "/archetype-images/magical-prodigy.jpg",
    },
    "The Fool": {
        title: "The Fool",
        description:
            "Naïve yet insightful, your lightheartedness uncovers truths others miss. You succeed where logic fails.",
        image: "/archetype-images/jester.jpg",
    },
    "The Mystic": {
        title: "The Mystic",
        description:
            "Connected to realms beyond sight, you channel insight and intuition. You find wisdom in the unseen.",
        image: "/archetype-images/mystic.jpg",
    },
    "The Hero's Muse": {
        title: "The Hero's Muse",
        description:
            "Inspiration and heart define you. You empower others to achieve greatness, even as your own story unfolds.",
        image: "/archetype-images/heros-muse.webp",
    },
};


export interface QuizOption {
    label: string;
    archetype: Archetype;
}

export interface QuizQuestion {
    id: string;
    question: string;
    options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
    {
        id: "q1",
        question: "A dragon blocks your path. What do you do?",
        options: [
            { label: "Charge forward and fight with honor", archetype: "The Knight" },
            { label: "Unleash raw fury with brute force", archetype: "The Barbarian" },
            { label: "Use trickery to distract it", archetype: "The Trickster" },
            { label: "Call upon ancient magic", archetype: "The Wise Wizard" },
        ],
    },
    {
        id: "q2",
        question: "You find a mysterious book of spells. What's your reaction?",
        options: [
            { label: "Study it carefully, knowledge is power", archetype: "The Mystic" },
            { label: "Experiment recklessly, something fun will happen", archetype: "The Fool" },
            { label: "Harness it to protect others", archetype: "The Magical prodigy" },
            { label: "Destroy it before it corrupts", archetype: "The Warbringer" },
        ],
    },
    {
        id: "q3",
        question: "Your village is under siege. What's your role?",
        options: [
            { label: "Lead the defense on the front lines", archetype: "The Mythic Warrior" },
            { label: "Rally others with courage despite fear", archetype: "The Unlikely Hero" },
            { label: "Slip past enemy lines for sabotage", archetype: "The Rogue" },
            { label: "Tend to the wounded and offer comfort", archetype: "The Companion" },
        ],
    },
    {
        id: "q4",
        question: "You are offered unimaginable power at a cost. What do you do?",
        options: [
            { label: "Accept, it's better to rule than serve", archetype: "The Anti-Hero" },
            { label: "Refuse, true strength is in restraint", archetype: "The Knight" },
            { label: "Seize it to reshape the world", archetype: "The Earth-Shaker" },
            { label: "Use it secretly to manipulate events", archetype: "The Shadow" },
        ],
    },
    {
        id: "q5",
        question: "You're tasked with retrieving a lost artifact. How do you proceed?",
        options: [
            { label: "Fight through every obstacle head on", archetype: "The Barbarian" },
            { label: "Charm others into giving it up", archetype: "The Rogue" },
            { label: "Decode the ancient runes to find it", archetype: "The Wise Wizard" },
            { label: "Brave the odds with sheer luck", archetype: "The Fool" },
        ],
    },
    {
        id: "q6",
        question: "A friend is captured by enemies. What's your response?",
        options: [
            { label: "Charge in and save them no matter the odds", archetype: "The Maiden Warrior" },
            { label: "Strike fear into enemies with overwhelming force", archetype: "The Warbringer" },
            { label: "Sneak in under disguise", archetype: "The Trickster" },
            { label: "Offer yourself in exchange", archetype: "The Damsel" },
        ],
    },
    {
        id: "q7",
        question: "You're given leadership of an army. How do you lead?",
        options: [
            { label: "By inspiring honor and loyalty", archetype: "The Knight" },
            { label: "By terror and overwhelming strength", archetype: "The Warbringer" },
            { label: "By cunning strategy", archetype: "The Rogue" },
            { label: "By visions of destiny", archetype: "The Mystic" },
        ],
    },
    {
        id: "q8",
        question: "A cursed forest whispers to you. What do you do?",
        options: [
            { label: "Seek its secrets to grow stronger", archetype: "The Witch" },
            { label: "Ignore it, nothing good comes of this", archetype: "The Companion" },
            { label: "Walk bravely into the unknown", archetype: "The Unlikely Hero" },
            { label: "Twist the curse to your advantage", archetype: "The Shadow" },
        ],
    },
    {
        id: "q9",
        question: "You face an unbeatable foe. What's your approach?",
        options: [
            { label: "Fight to the last breath regardless", archetype: "The Mythic Warrior" },
            { label: "Outwit them with clever traps", archetype: "The Trickster" },
            { label: "Sacrifice yourself to save others", archetype: "The Hero's Muse" },
            { label: "Turn their power against them", archetype: "The Magical prodigy" },
        ],
    },
    {
        id: "q10",
        question: "You are invited to a royal court. How do you act?",
        options: [
            { label: "As a loyal protector of the crown", archetype: "The Knight" },
            { label: "As a jester making light of the moment", archetype: "The Fool" },
            { label: "As a manipulator seeking influence", archetype: "The Shadow" },
            { label: "As a mysterious advisor", archetype: "The Wise Wizard" },
        ],
    },
    {
        id: "q11",
        question: "A rebellion is rising. What's your role?",
        options: [
            { label: "Lead as the fearless warrior", archetype: "The Maiden Warrior" },
            { label: "Fuel it with raw destruction", archetype: "The Earth-Shaker" },
            { label: "Sneak among the rebels, sowing chaos", archetype: "The Anti-Hero" },
            { label: "Support quietly from the sidelines", archetype: "The Companion" },
        ],
    },
    {
        id: "q12",
        question: "You stumble into ancient ruins. What do you do?",
        options: [
            { label: "Search for glory and treasure", archetype: "The Rogue" },
            { label: "Seek the wisdom of the ancients", archetype: "The Mystic" },
            { label: "Destroy it before it's misused", archetype: "The Warbringer" },
            { label: "Study it to enhance your craft", archetype: "The Witch" },
        ],
    },
    {
        id: "q13",
        question: "An oracle warns of your downfall. What's your move?",
        options: [
            { label: "Defy fate with courage", archetype: "The Unlikely Hero" },
            { label: "Embrace destiny and reshape it", archetype: "The Mythic Warrior" },
            { label: "Seek hidden ways to subvert prophecy", archetype: "The Shadow" },
            { label: "Laugh at it, who cares?", archetype: "The Fool" },
        ],
    },
    {
        id: "q14",
        question: "You're asked to protect a sacred relic. How do you handle it?",
        options: [
            { label: "Guard it with honor and strength", archetype: "The Knight" },
            { label: "Use it to inspire others", archetype: "The Hero's Muse" },
            { label: "Unlock its secrets with arcane power", archetype: "The Magical prodigy" },
            { label: "Break it so no one controls it", archetype: "The Barbarian" },
        ],
    },
    {
        id: "q15",
        question: "An enemy mocks your weakness. What's your reaction?",
        options: [
            { label: "Fight harder to prove them wrong", archetype: "The Maiden Warrior" },
            { label: "Laugh it off with wit", archetype: "The Trickster" },
            { label: "Turn the insult back with intimidation", archetype: "The Warbringer" },
            { label: "Withdraw into shadows to plot revenge", archetype: "The Anti-Hero" },
        ],
    },
    {
        id: "q16",
        question: "You encounter advanced technology beyond comprehension. How do you respond?",
        options: [
            { label: "Master it as part of your destiny", archetype: "The Iron Woman" },
            { label: "Approach cautiously, seeking wisdom", archetype: "The Mystic" },
            { label: "Exploit it for personal gain", archetype: "The Rogue" },
            { label: "Destroy it before it corrupts humanity", archetype: "The Warbringer" },
        ],
    },
    {
        id: "q17",
        question: "You are betrayed by a close ally. How do you react?",
        options: [
            { label: "Face them directly with sword in hand", archetype: "The Mythic Warrior" },
            { label: "Slip away into the shadows, planning revenge", archetype: "The Shadow" },
            { label: "Forgive them despite the pain", archetype: "The Companion" },
            { label: "Strike them down mercilessly", archetype: "The Barbarian" },
        ],
    },
    {
        id: "q18",
        question: "You are chosen as the face of a prophecy. What's your response?",
        options: [
            { label: "Rise to the occasion with courage", archetype: "The Unlikely Hero" },
            { label: "Guide others with wisdom", archetype: "The Wise Wizard" },
            { label: "Refuse, prophecies are chains", archetype: "The Anti-Hero" },
            { label: "Channel mystical forces to fulfill it", archetype: "The Magical prodigy" },
        ],
    },
    {
        id: "q19",
        question: "Your allies are losing hope. How do you inspire them?",
        options: [
            { label: "With unyielding bravery in battle", archetype: "The Maiden Warrior" },
            { label: "With destructive displays of power", archetype: "The Earth-Shaker" },
            { label: "With humor that eases the tension", archetype: "The Fool" },
            { label: "With words of love and devotion", archetype: "The Hero's Muse" },
        ],
    },
    {
        id: "q20",
        question: "You stand at the final battle. What's your ultimate move?",
        options: [
            { label: "Clash steel against the enemy champion", archetype: "The Knight" },
            { label: "Shatter the ground beneath your foes", archetype: "The Earth-Shaker" },
            { label: "Call down arcane fire to annihilate them", archetype: "The Witch" },
            { label: "Sacrifice yourself for the cause", archetype: "The Hero's Muse" },
        ],
    },
];

