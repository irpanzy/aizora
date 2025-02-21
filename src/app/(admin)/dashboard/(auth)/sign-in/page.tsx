import { cn } from "@/lib/utils"
import FormSignIn from "./components/form"


export default function SignInPage({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    return (
        <main className="w-full h-screen overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className={cn("flex flex-col gap-6", className)} {...props}>
                    <FormSignIn />
                </div>
            </div>
        </main>
    )
}