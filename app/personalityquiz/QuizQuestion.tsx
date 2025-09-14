import {
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormControl,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Control } from "react-hook-form";

interface QuizQuestionProps {
    control: Control;
    name: string;
    question: string;
    options: { label: string }[];
}

export function QuizQuestion({ control, name, question, options }: QuizQuestionProps) {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="space-y-3">
                    <FormLabel className="text-base font-medium">{question}</FormLabel>
                    <FormControl>
                        <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="grid gap-2"
                        >
                            {options.map((opt) => (
                                <FormItem
                                    key={opt.label}
                                    className="flex items-center space-x-2 rounded-md border p-3 hover:bg-accent"
                                >
                                    <RadioGroupItem value={opt.label} id={`${name}-${opt.label}`} />
                                    <FormLabel htmlFor={`${name}-${opt.label}`} className="font-normal">
                                        {opt.label}
                                    </FormLabel>
                                </FormItem>
                            ))}
                        </RadioGroup>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
