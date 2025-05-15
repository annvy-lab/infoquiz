import ModuleCard from "./module-card";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"


export default function ModuleList() {
    return (
        <div className="w-full mt-[-2rem] bg-background rounded-3xl p-6 flex flex-col gap-5">
            <div className="relative w-full rounded-xl">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    type="text"
                    placeholder=" pesquisar quiz..."
                    className="pl-9 rounded-xl"
                />
            </div>
            <ModuleCard />
        </div>
    );
}