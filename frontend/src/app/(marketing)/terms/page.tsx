import { AnimationContainer, MaxWidthWrapper } from "@/components";
import Link from "next/link";

const TermsPage = () => {
    return (
        <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
                    Terms and Conditions
                </h1>
                <p className="text-sm mb-2 italic mt-20">
                    Last updated: 22nd May 2026
                </p>
                <p className="mt-4">
                    Welcome to Autiq. These terms and conditions outline the rules and regulations for the use of Autiq&apos;s website and services.
                </p>

                <h2 className="text-xl font-medium mt-8">
                    Acceptance of Terms
                </h2>
                <p className="mt-8 text-muted-foreground">
                    By accessing and using Autiq, you accept and agree to be bound by these terms and conditions. If you do not agree to these terms, you may not use our website or services.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Changes to Terms
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Autiq reserves the right to modify these terms at any time. We will notify you of any changes by updating the &quot;Last updated&quot; date at the top of this page.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Use of Services
                </h2>
                <h3 className="text-lg mt-8">
                    Eligibility
                </h3>
                <p className="mt-8">
                    To use Autiq, you must be at least 18 years old and capable of entering into a binding contract.
                </p>

                <h3 className="text-lg mt-8">
                    Account Registration
                </h3>
                <div className="mt-8">
                    <ul className="list-disc ml-8 text-muted-foreground">
                        <li>You must provide accurate and complete information during registration.</li>
                        <li>You are responsible for maintaining the confidentiality of your account information.</li>
                        <li>You agree to notify us immediately of any unauthorized use of your account.</li>
                    </ul>
                </div>

                <h3 className="text-lg mt-8">
                    Acceptable Use
                </h3>
                <div className="mt-8">
                    You agree not to use Autiq for unlawful, harmful, or prohibited activities, including but not limited to:
                    <ul className="list-disc text-muted-foreground ml-8">
                        <li>Uploading harmful, abusive, or illegal content into the knowledge base.</li>
                        <li>Using the service to distribute spam or malicious content.</li>
                        <li>Attempting to gain unauthorized access to other accounts or Autiq&apos;s systems.</li>
                    </ul>
                </div>

                <h2 className="text-xl font-medium mt-12">
                    AI Support and Automations
                </h2>
                <h3 className="text-lg mt-8">
                    Website Chat and Email
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Autiq provides AI-powered website chat and email automation that can answer customer inquiries using the knowledge base you provide. You are responsible for reviewing and managing the accuracy of your business content.
                </p>

                <h3 className="text-lg mt-8">
                    Lead Storage
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Autiq may store customer inquiries, metadata, and conversation summaries in your dashboard so your team can follow up on leads and support requests.
                </p>

                <h3 className="text-lg mt-8">
                    Integrations
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You may connect third-party services such as Gmail or SMTP. You are responsible for maintaining access to those services and for complying with their terms.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    User Content
                </h2>
                <h3 className="text-lg mt-8">
                    Ownership
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You retain ownership of the content you upload into Autiq. By uploading content, you grant us a limited license to process that content so we can provide the service.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Responsibility
                </h2>
                <p className="mt-8 text-muted-foreground">
                    You are solely responsible for the content you upload, the responses generated from your knowledge base, and how you use the service with your customers.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Privacy
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Your privacy is important to us. Please review our <Link href="/privacy" className="underline">Privacy Policy</Link> to understand how we collect, use, and protect your information.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Termination
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Autiq reserves the right to suspend or terminate your account at any time, with or without notice, for violations of these terms or misuse of the service.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Disclaimers and Limitations of Liability
                </h2>
                <h3 className="text-lg mt-8">
                    No Warranties
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Autiq is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not warrant that the service will be uninterrupted, error-free, or free from harmful components.
                </p>

                <h3 className="text-lg mt-8">
                    Limitation of Liability
                </h3>
                <p className="mt-8 text-muted-foreground">
                    In no event shall Autiq be liable for indirect, incidental, special, or consequential damages arising from your use of the service.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Governing Law
                </h2>
                <p className="mt-8 text-muted-foreground">
                    These terms shall be governed and construed in accordance with the laws of Nigeria, without regard to conflict of law provisions.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Contact Us
                </h2>
                <p className="mt-8 text-muted-foreground">
                    If you have any questions or concerns about these terms, please contact us at support@autiq.ai.
                </p>

                <p className="mt-8 font-medium">
                    By using Autiq, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
                </p>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default TermsPage;
