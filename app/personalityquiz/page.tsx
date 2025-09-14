"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useRouter } from "next/navigation";

import { quizQuestions } from "./quizConfig";
import { QuizQuestion } from "./QuizQuestion";

const quizSchema = z.object(
    Object.fromEntries(
        quizQuestions.map((q) => [q.id, z.string().min(1, "Please select an answer")])
    )
);

type QuizSchema = z.infer<typeof quizSchema>;

export default function QuizPage() {
    const form = useForm<QuizSchema>({
        resolver: zodResolver(quizSchema),
        defaultValues: Object.fromEntries(quizQuestions.map((q) => [q.id, ""])),
    });

    const router = useRouter();

    function onSubmit(values: QuizSchema) {
        const scores: Record<string, number> = {};

        Object.entries(values).forEach(([qKey, answer]) => {
            const question = quizQuestions.find((q) => q.id === qKey);
            const selected = question?.options.find((opt) => opt.label === answer);
            if (selected) {
                scores[selected.archetype] = (scores[selected.archetype] || 0) + 1;
            }
        });

        const maxScore = Math.max(0, ...Object.values(scores));

        if (maxScore === 0) {
            router.push(`/results?archetype=none`);
            return;
        }

        const result = Object.entries(scores).find(
            ([, score]) => score === maxScore
        )?.[0];

        router.push(
            `/personalityquiz/results?archetype=${encodeURIComponent(result || "none")}`
        );
    }


    return (
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-6">
            <h1 className="scroll-m-20 pb-8 text-center text-4xl">
                Archetype Personality Quiz
            </h1>
            <Card>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            {quizQuestions.map((q) => (
                                <QuizQuestion
                                    key={q.id}
                                    control={form.control}
                                    name={q.id}
                                    question={q.question}
                                    options={q.options}
                                />
                            ))}
                            <Button type="submit" size="lg" className="w-full">
                                See My Archetype
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
