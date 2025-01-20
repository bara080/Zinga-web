import BackArrow from "@/components/icons/BackArrow";
import Link from "next/link";

function PrivacyPolicy() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h1 className="page-title">Privacy Policy</h1>
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            <BackArrow />
            Back to Home
          </Link>
        </div>

        <div>
          <h5>Effective Date: 01/01/2025</h5>
          <p>
            Zinga ("we," "our," "us") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our platform, including our
            mobile application (the "App") and website (the "Service"). By using
            Zinga, you agree to the collection and use of information in
            accordance with this policy.
          </p>
          <h3>Information We Collect</h3>
          <p>
            Personal Information: When you create an account, we may collect
            your name, email address, phone number, payment details, and other
            information you voluntarily provide.
          </p>
          <ul>
            <li>
              Usage Data: We collect information about your interactions with
              the App, such as searches, filters used, appointments booked, and
              ratings provided.
            </li>
            <li>
              Location Data: With your consent, we collect your location to
              enhance search results and service availability.
            </li>
            <li>
              Device Information: Information about your device, including IP
              address, operating system, and browser type, is collected
              automatically.
            </li>
          </ul>
          <h3>2. How We Use Your Information</h3>
          <ul>
            <li>To provide and improve our services.</li>
            <li>To facilitate appointments and communication between users.</li>
            <li>To process payments and send transaction receipts.</li>
            <li>To send promotional communications, with your consent.</li>
            <li>
              To ensure security, detect fraud, and comply with legal
              obligations.
            </li>
          </ul>
          <h3>3. Sharing Your Information</h3>
          <p>
            We do not sell your personal information. However, we may share your
            data with:
          </p>
          <ul>
            <li>
              Service Providers: To assist with payment processing, hosting, and
              analytics.
            </li>
            <li>
              Law Enforcement: When required by law or to protect our legal
              rights.
            </li>
            <li>
              Other Users: Limited information, such as your name and service
              availability, may be shared with other users.
            </li>
          </ul>
          <h3>4. Data Security</h3>
          <p>
            We implement industry-standard measures to protect your data.
            However, no system is 100% secure, and we cannot guarantee the
            absolute security of your data.
          </p>
          <h3>5. Your Rights</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Access and update your personal data.</li>
            <li>Request deletion of your account and associated data.</li>
            <li>Opt out of promotional communications.</li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:zingapp00@gmail.com">zingapp00@gmail.com</a>.
          </p>

          <h3>6. Changes to This Privacy Policy</h3>
          <p>
            We may update this policy from time to time. Changes will be
            communicated via the App or website, and the updated policy will
            take effect upon posting.
          </p>
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;
