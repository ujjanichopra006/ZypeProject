"use client";

export default function DataBreachPolicy() {
  return (
    <section className="bg-[#020f26] text-white min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-blue-500 mb-2">
          Data Breach Policy
        </h1>

        <p className="text-gray-300 text-sm">
          <strong>KeshvaCredit Services Pvt. Ltd.</strong>
        </p>

        <p className="text-gray-400 text-xs mt-1 mb-8">
          <span>Effective Date: Aug 18, 2025</span>
          <span className="mx-2">|</span>
          <span>Version: 1.0</span>
        </p>

        <div className="space-y-6 text-sm md:text-base leading-7">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">
              1. Purpose
            </h2>
            <p className="text-gray-200">
              This policy outlines the process for identifying, reporting, and
              responding to incidents that may affect the confidentiality,
              integrity, or availability of company or customer data.
              KeshvaCredit Services Pvt. Ltd. is committed to managing data
              breaches responsibly and in compliance with applicable laws.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">
              2. Scope
            </h2>
            <p className="text-gray-200 mb-2">
              This policy applies to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-200">
              <li>Employees, contractors, and third-party service providers.</li>
              <li>Personal, financial, technical, and operational data.</li>
              <li>All systems, applications, networks, and physical records.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">
              3. What is a Data Breach?
            </h2>
            <p className="text-gray-200 mb-2">
              A data breach is any suspected or confirmed incident involving
              unauthorized access, disclosure, alteration, or loss of data.
            </p>

            <ul className="list-disc pl-5 space-y-1 text-gray-200 mb-3">
              <li>Customer personal or financial information.</li>
              <li>Confidential business data.</li>
              <li>Critical IT systems and networks.</li>
            </ul>

            <p className="text-gray-200 mb-2">Examples:</p>

            <ul className="list-disc pl-5 space-y-1 text-gray-200">
              <li>Unauthorized system access.</li>
              <li>Loss or theft of devices.</li>
              <li>Accidental sharing of customer data.</li>
              <li>Malware, ransomware, or cyberattacks.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">
              4. Roles & Responsibilities
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-200">
              <li>
                <strong>Employees:</strong> Report suspected or actual breaches
                immediately.
              </li>
              <li>
                <strong>Information Security Officer:</strong> Lead
                investigation and response.
              </li>
              <li>
                <strong>Incident Response Team:</strong> Handle containment and
                recovery.
              </li>
              <li>
                <strong>Management:</strong> Ensure oversight and regulatory
                compliance.
              </li>
              <li>
                <strong>Third Parties:</strong> Report breaches involving shared
                data without delay.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">
              5. Breach Response Procedure
            </h2>

            <ol className="list-decimal pl-5 space-y-2 text-gray-200">
              <li>
                <strong>Identification:</strong> Detect or report the incident.
              </li>
              <li>
                <strong>Containment:</strong> Isolate affected systems and stop
                further impact.
              </li>
              <li>
                <strong>Assessment:</strong> Evaluate the extent and impact.
              </li>
              <li>
                <strong>Notification:</strong> Inform management, regulators,
                and affected customers where required.
              </li>
              <li>
                <strong>Recovery:</strong> Remove threats and restore systems.
              </li>
              <li>
                <strong>Review:</strong> Analyze root cause and improve
                safeguards.
              </li>
            </ol>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">
              6. Data Breach Notification
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-200">
              <li>
                Affected customers will be informed transparently when required.
              </li>
              <li>
                Notifications will explain the breach, impact, and recommended
                actions.
              </li>
              <li>
                All communications will comply with applicable legal and
                regulatory obligations.
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">
              7. Prevention & Preparedness
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-200">
              <li>Regular security audits and testing.</li>
              <li>Employee awareness and phishing training.</li>
              <li>Encryption, access controls, and monitoring tools.</li>
              <li>Periodic testing of business continuity plans.</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">
              8. Policy Review
            </h2>
            <p className="text-gray-200">
              This policy is reviewed annually or whenever significant changes
              occur in technology, regulations, or business operations.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-semibold text-blue-400 mb-2">
              9. Contact Information
            </h2>

            <div className="bg-[#081a3d] border border-blue-500/30 rounded-lg p-5 mt-3">
              <p className="text-base font-semibold text-white mb-2">
                Data Protection Officer (DPO)
              </p>

              <p className="text-gray-200 text-sm mb-1">
                KeshvaCredit Services Pvt. Ltd.
              </p>

              <p className="text-gray-200 text-sm mb-1">
                ✉{" "}
                <span className="text-blue-400">
                  info@keshvacredit.in
                </span>
              </p>

              <p className="text-gray-200 text-sm">
                📞 <span className="text-blue-400">8901229195</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}