import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import QuizStart from "@/components/module/quiz/quiz-start"

const modules = [
    {
        id: "1",
        title: "Introdução à Informática",
        description: "Conceitos básicos de hardware, software e sistemas operacionais para iniciantes na área de tecnologia.",
        progress: 0,
        difficulty: "Fácil",
    },
    {
        id: "2",
        title: "Internet e Redes",
        description: "Fundamentos de conexão à internet, protocolos TCP/IP e segurança básica na navegação online.",
        progress: 60,
        difficulty: "Média",
    },
    {
        id: "3",
        title: "Pacote Office",
        description: "Domine o uso essencial do Word, Excel e PowerPoint para produtividade no ambiente de trabalho.",
        progress: 15,
        difficulty: "Fácil",
    },
    {
        id: "4",
        title: "Algoritmos e Lógica",
        description: "Princípios fundamentais de programação e desenvolvimento de raciocínio lógico.",
        progress: 0,
        difficulty: "Difícil",
    },
    {
        id: "5",
        title: "Segurança Digital",
        description: "Noções básicas de proteção de dados e prevenção contra ameaças virtuais.",
        progress: 45,
        difficulty: "Média",
    },
    {
        id: "6",
        title: "Redes Sociais",
        description: "Uso profissional das principais plataformas de mídias sociais e marketing digital.",
        progress: 80,
        difficulty: "Fácil",
    }
];

export default function ModuleCard() {
    return (
        <div className="flex flex-col gap-6">
            {modules.map((module) => (
                <div key={module.id} className="w-full flex flex-col p-5 bg-card rounded-3xl gap-3">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xl font-medium tracking-wider line-clamp-2 overflow-hidden text-ellipsis mb-1">
                            {module.title}
                        </h1>
                        <div className="flex gap-3 items-center">
                            <Progress value={module.progress} className="[&>div]:bg-[var(--chart-2)]" />
                            <p className="text-sm w-9 text-start text-secondary-foreground/80">{module.progress}%</p>
                        </div>
                    </div>
                    <span className="w-full line-clamp-3 font-light">
                        {module.description}
                    </span>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="w-full rounded-xl font-normal shadow-lg">
                                {module.progress === 0 ? 'Fazer Quiz' : 'Continuar Quiz'}
                            </Button>
                        </DialogTrigger>
                        <QuizStart
                            title={module.title}
                            description={module.description}
                            progress={module.progress}
                            difficulty={module.difficulty} />
                    </Dialog>
                </div>
            ))}
        </div>
    );
}
