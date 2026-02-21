import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Kumar Enterprises",
    description: "Privacy Policy for applications developed by Kumar Enterprises.",
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto py-24 px-6 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose dark:prose-invert max-w-none space-y-6 text-gray-400">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
                    <p>
                        Welcome to Kumar Enterprises. We value your privacy and are committed to protecting your personal data.
                        This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile applications.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">2. Data Collection & Safety</h2>
                    <p>
                        Our applications are designed to be transparent about data usage. Depending on the specific app, we may collect:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Device & Interaction Data:</strong> We may collect device IDs, crash logs, and performance data to improve app stability.</li>
                        <li><strong>Personal Information:</strong> If you create an account, we may collect your name and email address.</li>
                        <li><strong>Payment Information:</strong> For premium services, payment processing is handled securely by third-party providers.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">3. Payments & Secure Transactions</h2>
                    <p>
                        We use <strong>Razorpay</strong> and <strong>Google Play Billing</strong> for processing payments.
                        We do not store your credit card or bank details on our servers. All transactions are encrypted and handled by these secure payment gateways in compliance with PCI-DSS standards.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">4. Advertisements</h2>
                    <p>
                        To keep our apps free, we use <strong>Google AdMob</strong> to show advertisements. AdMob may use device identifiers to personalize ads and provide analytics. You can manage your ad preferences in your Android device settings.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">5. Data Deletion & Account Removal</h2>
                    <p>
                        In compliance with Google Play's user data policy, we provide a simple way to delete your data.
                        If you wish to delete your account and all associated data, you can:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Use the "Delete Account" option within the Application settings.</li>
                        <li>Send an email to <strong>privacy@kumarenterprises.com</strong> with the subject "Data Deletion Request".</li>
                    </ul>
                    <p>We will process your request and delete all identifiable personal data within 30 days.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">6. Third-Party Services</h2>
                    <p>
                        Our apps may use the following third-party services which collect data according to their own policies:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Google Play Services</li>
                        <li>AdMob (Advertising)</li>
                        <li>Razorpay (Payments)</li>
                        <li>Firebase Analytics</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">7. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                        <br />
                        <strong>Email:</strong> privacy@kumarenterprises.com
                    </p>
                </section>
            </div>
        </div>
    );
}
