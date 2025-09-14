export type Archetype =
    | "Unlikely Hero"
    | "Damsel"
    | "Female Warrior"
    | "Rogue"
    | "Companion"
    | "Iron Woman"
    | "Trickster"
    | "Wise Wizard"
    | "Maiden Warrior"
    | "Witch"
    | "Hunter"
    | "Anti-Hero"
    | "Barbarian"
    | "Shadow"
    | "Iron Woman"
    | "Magician"
    | "Hero's Muse"
    | "Warrior Princess"
    | "Mystic"
    | "Child-like or Innocent"

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
            { label: "Draw your sword and fight", archetype: "Female Warrior" },
            { label: "Distract it with illusions", archetype: "Trickster" },
            { label: "Attempt to negotiate", archetype: "Wise Wizard" },
            { label: "Slip away unnoticed", archetype: "Rogue" },
        ],
    },
    {
        id: "q2",
        question: "You discover a hidden door in the forest. What's your first move?",
        options: [
            { label: "Open it without hesitation", archetype: "Barbarian" },
            { label: "Study the runes first", archetype: "Magician" },
            { label: "Wait for someone else to try", archetype: "Damsel" },
            { label: "Plan your escape route before entering", archetype: "Anti-Hero" },
        ],
    },
    {
        id: "q3",
        question: "Your friend is captured by bandits. What do you do?",
        options: [
            { label: "Charge in to rescue them", archetype: "Unlikely Hero" },
            { label: "Try to strike a deal", archetype: "Companion" },
            { label: "Set a trap for the bandits", archetype: "Hunter" },
            { label: "Leave them behind—it's too risky", archetype: "Shadow" },
        ],
    },
    {
        id: "q4",
        question: "An ancient artifact glows in your hands. How do you react?",
        options: [
            { label: "Use it for strength in battle", archetype: "Iron Woman" },
            { label: "Research its secrets", archetype: "Mystic" },
            { label: "Crack a joke about selling it", archetype: "Trickster" },
            { label: "Drop it immediately", archetype: "Child-like or Innocent" },
        ],
    },
    {
        id: "q5",
        question: "A prophecy names you as the chosen one. What's your response?",
        options: [
            { label: "Accept the responsibility", archetype: "Unlikely Hero" },
            { label: "Doubt and resist it", archetype: "Anti-Hero" },
            { label: "Celebrate—fame at last!", archetype: "Hero's Muse" },
            { label: "Ignore it; destiny is nonsense", archetype: "Rogue" },
        ],
    },
    {
        id: "q6",
        question: "Your village is under attack. What role do you take?",
        options: [
            { label: "Lead the defense", archetype: "Warrior Princess" },
            { label: "Organize the resistance quietly", archetype: "Wise Wizard" },
            { label: "Help the children escape", archetype: "Maiden Warrior" },
            { label: "Burn everything and rebuild later", archetype: "Barbarian" },
        ],
    },
    {
        id: "q7",
        question: "A stranger offers you forbidden knowledge. Do you accept?",
        options: [
            { label: "Yes, I want to know everything", archetype: "Witch" },
            { label: "No, it's too dangerous", archetype: "Child-like or Innocent" },
            { label: "Only if it benefits me", archetype: "Anti-Hero" },
            { label: "Keep the offer in mind for later", archetype: "Mystic" },
        ],
    },
    {
        id: "q8",
        question: "Your companion is gravely injured. What's your reaction?",
        options: [
            { label: "Do whatever it takes to heal them", archetype: "Companion" },
            { label: "Seek vengeance immediately", archetype: "Hunter" },
            { label: "Sacrifice them for the mission", archetype: "Shadow" },
            { label: "Pray for a miracle", archetype: "Maiden Warrior" },
        ],
    },
    {
        id: "q9",
        question: "You stumble into a royal court. How do you behave?",
        options: [
            { label: "Speak boldly as if you belong", archetype: "Warrior Princess" },
            { label: "Charm them with stories", archetype: "Hero's Muse" },
            { label: "Mock their traditions", archetype: "Trickster" },
            { label: "Stay unnoticed in the crowd", archetype: "Rogue" },
        ],
    },
    {
        id: "q10",
        question: "You're offered unlimited power at a terrible cost. What's your choice?",
        options: [
            { label: "Accept it without hesitation", archetype: "Shadow" },
            { label: "Reject it to protect others", archetype: "Female Warrior" },
            { label: "Hesitate—tempted but unsure", archetype: "Anti-Hero" },
            { label: "Trick the giver into keeping the cost", archetype: "Magician" },
        ],
    },
    {
        id: "q11",
        question: "A powerful enemy challenges you to single combat. How do you respond?",
        options: [
            { label: "Face them head-on", archetype: "Iron Woman" },
            { label: "Refuse and find another way", archetype: "Mystic" },
            { label: "Delay until you gain an advantage", archetype: "Rogue" },
            { label: "Laugh and mock them", archetype: "Trickster" },
        ],
    },
    {
        id: "q12",
        question: "You inherit a throne unexpectedly. What do you do first?",
        options: [
            { label: "Rule with strength", archetype: "Warrior Princess" },
            { label: "Appoint wise advisors", archetype: "Wise Wizard" },
            { label: "Abandon the throne", archetype: "Unlikely Hero" },
            { label: "Exploit power for your gain", archetype: "Shadow" },
        ],
    },
];