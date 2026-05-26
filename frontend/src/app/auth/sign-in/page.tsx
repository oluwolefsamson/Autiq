import { SignInForm } from "@/components";
import Link from "next/link";

const SignInPage = () => {
    return (
        <div className="flex flex-col items-start h-full overflow-hidden text-white">
            <SignInForm />

            <div className="flex flex-col items-start w-full">
                <p className="text-sm text-neutral-400">
                    Sign in to access your support dashboard and automation settings.
                </p>
            </div>
            <div className="flex items-start mt-auto border-t border-white/10 py-6 w-full">
                <p className="text-sm text-neutral-400">
                    Don&apos;t have an account?{" "}
                    <Link href="/auth/sign-up" className="text-white underline decoration-white/40 underline-offset-4">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
};

export default SignInPage
