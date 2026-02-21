import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | Kumar Enterprises",
    description: "Terms and Conditions for using applications developed by Kumar Enterprises.",
};

export default function TermsPage() {
    return (
        <div className="container mx-auto py-24 px-6 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
            <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-400">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By downloading or using any application developed by Kumar Enterprises, you agree to be bound by these Terms and Conditions.
                        If you do not agree, please do not use our services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">2. Payments & Subscriptions</h2>
                    <p>
                        Services provided within our applications may be subject to payment.
                        We use <strong>Razorpay</strong> for direct payments and <strong>Google Play Billing</strong> for in-app purchases.
                        By initiating a transaction, you agree to be bound by the terms of these payment processors.
                        All fees are non-refundable unless stated otherwise.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">3. License to Use</h2>
                    <p>
                        We grant you a personal, non-exclusive, non-transferable, limited license to use our apps for personal, non-commercial purposes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">4. Prohibited Conduct</h2>
                    <p>
                        You agree not to reverse engineer, decompile, or attempt to extract the source code of our applications.
                        You must not use our apps for any illegal or unauthorized purpose.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">5. Advertisements</h2>
                    <p>
                        The service may be supported by ad revenue and may display advertisements through AdMob.
                        You acknowledge that we may display such advertisements and that we are not responsible for the content of third-party ads.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
                    <p>
                        Kumar Enterprises shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our applications.
                        The apps are provided "as-is" without any warranties.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">7. Termination</h2>
                    <p>
                        We reserve the right to terminate your access to our applications at our sole discretion, without notice, for conduct that we believe violates these Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">8. Governing Law</h2>
                    <p>
                        These terms are governed by and construed in accordance with the laws of India.
                    </p>
                </section>
            </div>
        </div>
    );
}
