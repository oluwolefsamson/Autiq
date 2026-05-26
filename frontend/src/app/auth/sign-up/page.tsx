import { SignUpForm } from "@/components";
import Link from "next/link";

const SignUpPage = () => {
    return (
        <div className="flex flex-col items-start h-full overflow-hidden text-white">
            <SignUpForm />

            <div className="flex flex-col items-start w-full">
                <p className="text-sm text-neutral-400">
                    Create your account to configure your business profile, FAQs, and support channels.
                </p>
            </div>
            <div className="flex items-start mt-auto border-t border-white/10 py-6 w-full">
                <p className="text-sm text-neutral-400">
                    Already have an account?{" "}
                    <Link href="/auth/sign-in" className="text-white underline decoration-white/40 underline-offset-4">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
};

export default SignUpPage
