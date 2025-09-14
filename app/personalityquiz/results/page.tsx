"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Archetype, archetypeConfig } from "../quizConfig";

export default function ResultsPage() {
    const params = useSearchParams();
    const archetype = params.get("archetype") as Archetype;

    if (!archetype || !archetypeConfig[archetype]!) {
        return (
            <div className="w-full max-w-2xl mx-auto p-6">
                <h1 className="text-3xl font-bold mb-4">Your Archetype</h1>
                <p>No archetype detected. Try again!</p>
            </div>
        );
    }

    const info = archetypeConfig[archetype];

    return (
        <div className="w-full max-w-2xl mx-auto p-6 space-y-6 text-center">
            <h1 className="scroll-m-20 pb-8 text-center text-4xl">
                {info.title}
            </h1>
            <Image
                src={info.image}
                alt={info.title}
                width={200}
                height={200}
                className="mx-auto rounded-lg shadow-md"
            />
            <p className="text-lg">{info.description}</p>
        </div>
    );
}
