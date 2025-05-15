import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Gamepad2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


interface QuizStartProps {
    title: string;
    description: string;
    progress: number;
    difficulty: string;
}

export default function QuizStart({ title, description, progress, difficulty }: QuizStartProps) {
    return (
        <DialogContent className="flex flex-col items-start w-full gap-3">
            <DialogHeader className="flex flex-col items-start w-full gap-1">
                <div className="flex w-full gap-3 items-center">
                    <div>
                        <Gamepad2 size={32} strokeWidth={2} className="text-primary" />
                    </div>
                    <DialogTitle className="text-left text-lg font-semibold break-words pr-1">
                        {title}
                    </DialogTitle>
                </div>
                <div className="flex items-center gap-2 w-full">
                    <Progress value={progress} className="[&>div]:bg-[var(--chart-2)]" />
                    <p className="text-sm w-9 text-start text-secondary-foreground/80">{progress}%</p>
                </div>
            </DialogHeader>
            <div className={`flex gap-1 items-center font-medium px-2 py-0.5 rounded-lg text-sm
      ${difficulty === "Fácil" ? "bg-green-500"
                    : difficulty === "Média" ? "bg-yellow-400"
                        : difficulty === "Difícil" ? "bg-red-500"
                            : "bg-gray-400"}`}>
                <p>Dificuldade:</p>
                <span >
                    {difficulty}
                </span>
            </div>
            <DialogDescription className="text-left w-full">
                    {description}
            </DialogDescription>
            <div className="w-full flex items-center justify-center gap-2">
                <Button variant="secondary" className="rounded-xl"><Heart strokeWidth={3} /></Button>
                <Button className="w-[90%] rounded-xl font-normal shadow-lg">
                    {progress === 0 ? 'Iniciar' : 'Continuar'}
                </Button>
            </div>
        </DialogContent>
    );
}
