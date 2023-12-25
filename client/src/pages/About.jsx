import React from 'react'

function About() {
  return (
    <div className="bg-blue-100 text-left">
      <div className="p-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-left mb-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to InfoConnect</h1>
            <p className="text-lg">
              Your hub for simplifying government processes and document filing.
              At Info Connect, we believe in the power of knowledge and making
              your rights and responsibilities accessible to everyone.
            </p>
          </div>
          <div className="text-left">
            <p className="mb-4">
              Our user-friendly platform breaks down complex government jargon
              into easily understandable language. Whether you're dealing with
              tax filings, legal documentation, or any bureaucratic maze, we
              offer comprehensive resources to guide you through each step.
            </p>
            <p className="mb-4">
              Our commitment to accessibility includes tutorials, guides, and
              FAQs crafted to empower you with the knowledge to handle
              government tasks confidently.
            </p>
            <p className="mb-4">
              Join us on a learning adventure at Info Connect, where we simplify
              the complexities of government procedures, empowering you to take
              control of your journey.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-2">Acceptance of Terms</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                By using Info Connect, you agree to these Terms of Service.
              </li>
              <li>
                If you do not agree with any part of these terms, please do not
                use our services.
              </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">
              User Responsibilities
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Users are responsible for understanding and complying with
                government regulations and processes.
              </li>
              <li>
                Info Connect provides informational resources, but users are
                advised to verify details with relevant authorities.
              </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Content Usage</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                The content provided on Info Connect is for informational
                purposes only.
              </li>
              <li>It does not constitute legal advice.</li>
              <li>
                Users should seek professional advice for specific situations.
              </li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Privacy Policy</h3>
            <ul className="list-disc pl-6">
              <li>
                Our Privacy Policy governs the collection, use, and disclosure
                of personal information.
              </li>
              <li>
                By using Info Connect, you consent to the terms outlined in our
                Privacy Policy.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
