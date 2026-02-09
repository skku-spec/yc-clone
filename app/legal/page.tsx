import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal | Y Combinator",
  description:
    "Y Combinator Privacy Policy, Terms of Use, and Notice at Collection.",
};

export default function LegalPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-16">
      <div className="mb-8 text-center">
        <h1 className="font-serif text-[40px] font-medium leading-[1.2] text-[#16140f] md:text-[60px] md:leading-[75px]">
          Legal
        </h1>
      </div>

      <div className="mx-auto flex max-w-[900px] flex-col gap-8 md:flex-row-reverse">
        {/* Sidebar Navigation */}
        <nav className="shrink-0 md:w-[200px]">
          <ul className="sticky top-24 space-y-1 font-sans text-sm">
            <li className="mb-2 font-medium text-[#16140f]">Contents</li>
            <li>
              <a
                href="#privacy"
                className="text-[#ff6600] hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#tou"
                className="text-[#ff6600] hover:underline"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href="#trademarks"
                className="text-[#ff6600] hover:underline"
              >
                Trademarks
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <article className="min-w-0 flex-1 font-sans text-base leading-relaxed text-[#16140f]">
          {/* ==================== PRIVACY POLICY ==================== */}
          <section id="privacy" className="scroll-mt-24">
            <h3 className="mb-2 font-serif text-2xl font-semibold">
              Privacy Policy
            </h3>
            <p className="mb-6 text-sm text-[#16140f]/60">
              Last Updated February 2024
            </p>

            <p className="mb-4">
              Welcome to the website (including all websites to which this
              Privacy Policy is posted, the &ldquo;<strong>Site</strong>&rdquo;)
              operated by Y Combinator Management, LLC and its Affiliates
              (collectively &ldquo;<strong>Y Combinator</strong>&rdquo;,
              &ldquo;<strong>we</strong>&rdquo;, &ldquo;
              <strong>us</strong>&rdquo;, or &ldquo;<strong>our</strong>
              &rdquo;). This Site provides, among other things, information about
              our people, organization and application process, tools for
              applicants to submit applications and go through the application
              process, a platform for applying to work at Y Combinator startups,
              a free online course on how to start a company, our blog, and
              profiles of founders and companies that have participated in the Y
              Combinator program (collectively, the &ldquo;
              <strong>Services</strong>&rdquo;).
            </p>

            <p className="mb-4">
              This Privacy Policy explains what Personal Information we collect,
              how we use and disclose that data, and your choices concerning our
              data practices. This Privacy Policy is incorporated into and forms
              part of our{" "}
              <a href="#tou" className="text-[#ff6600] hover:underline">
                Terms of Use
              </a>
              .
            </p>

            <p className="mb-4">
              For deletion requests, please contact us at
              privacy@ycombinator.com. See Section 4 for additional information
              regarding changes to accounts generally as well as deletion of
              Personal Information (defined below).
            </p>

            <p className="mb-4">
              For California residents (defined below), please click{" "}
              <a
                href="#notice-at-collection"
                className="text-[#ff6600] hover:underline"
              >
                here
              </a>{" "}
              for additional disclosures, our Notice at Collection and Use of
              Personal Information, and a description of your rights under the
              California Consumer Privacy Act (with any implementing
              regulations, as amended by the California Privacy Rights Act
              (&ldquo;<strong>CPRA</strong>&rdquo;), and as may be amended from
              time to time, &ldquo;<strong>CCPA</strong>&rdquo;).
            </p>

            <p className="mb-8">
              Before using the Services or submitting any Personal Information to
              Y Combinator, please review this Privacy Policy carefully and
              contact us if you have any questions. By using the Services, you
              agree to the practices described in this Privacy Policy. If you do
              not agree to this Privacy Policy, please do not access the Site or
              otherwise use the Services.
            </p>

            {/* Section 1 */}
            <h3
              id="section1"
              className="mb-4 scroll-mt-24 font-serif text-xl font-semibold"
            >
              <strong>1. PERSONAL INFORMATION WE COLLECT</strong>
            </h3>

            <p className="mb-4">
              We collect information that alone or in combination with other
              information in our possession could be used to identify you
              (&ldquo;<strong>Personal Information</strong>&rdquo;).
            </p>

            <ul className="mb-4 list-none space-y-4 pl-0">
              <li>
                <strong>Personal Information You Provide.</strong> We may collect
                Personal Information when you create an account, subscribe to
                our newsletter, sign up for an event, or communicate with us as
                follows:
                <ul className="mt-3 list-none space-y-3 pl-6">
                  <li>
                    <p>
                      <strong>Event Information:</strong> If you attend one of
                      our events, or if you are an investor and you sign up to
                      attend Demo Day, you will be asked to provide Personal
                      Information, including your name, the name and a
                      description of your company or your fund, your contact
                      information and other information that we will use to
                      manage and administer your participation in our various
                      events (&ldquo;<strong>Event Information</strong>&rdquo;).
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Work at a Startup Information:</strong> If you sign
                      up for our Work at a Startup program (&ldquo;
                      <strong>WaaS</strong>&rdquo;), we will collect your name,
                      email, LinkedIn profile, and other information relevant to
                      the type of job you are seeking, such as your location,
                      eligibility to work in the United States, and your work
                      experience, education, and skills (&ldquo;
                      <strong>WaaS Information</strong>&rdquo;).
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Startup School Information:</strong> If you sign up
                      for our Startup School program (&ldquo;
                      <strong>SUS</strong>&rdquo;), we will collect your name,
                      email, location (city and country), LinkedIn profile,
                      gender (only if you choose to provide it), education, area
                      of expertise, company information, and cofounder email
                      addresses (&ldquo;<strong>SUS Information</strong>&rdquo;).
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Application Information:</strong> When a company
                      submits an application to Y Combinator, we will collect
                      Personal Information relating to the founders of the
                      applicant company, such as names, email addresses,
                      telephone numbers, education, employment history, and the
                      city/country in which they live. We will also collect
                      information about the applicant company, such as the name,
                      industry, and status of the company (together with
                      Personal Information relating to founder(s) and any other
                      information submitted in connection with the application
                      process, &ldquo;
                      <strong>Application Information</strong>&rdquo;).
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Hacker News Information:</strong> If you create a
                      Hacker News account (ID and profile), we do not collect
                      any Personal Information unless you choose to provide your
                      email address and/or information in the &ldquo;about&rdquo;
                      field (&ldquo;<strong>HN Information</strong>&rdquo;).
                      Your submissions to, and comments you make on, the Hacker
                      News site are not Personal Information and are not
                      &ldquo;HN Information&rdquo; as defined in this Privacy
                      Policy.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Communication Information:</strong> When you
                      subscribe to our newsletter or otherwise communicate with
                      us, we may collect your name, contact information, and the
                      contents of any messages you send (&ldquo;
                      <strong>Communication Information</strong>&rdquo;).
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        Personal Information We Collect Through Our Social Media
                        Pages.
                      </strong>{" "}
                      We have pages on social media sites like Instagram,
                      Facebook, Twitter, YouTube and LinkedIn (&ldquo;
                      <strong>Social Media Pages</strong>&rdquo;). When you
                      interact with our Social Media Pages, we will collect
                      Personal Information that you elect to provide to us, such
                      as your contact details (&ldquo;
                      <strong>Social Information</strong>&rdquo;). In addition,
                      the companies that host our Social Media Pages may provide
                      us with aggregate information and analytics regarding the
                      use of our Social Media Pages.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        Personal Information We Receive Automatically From Your
                        Use of the Site.
                      </strong>{" "}
                      When you visit, use, and interact with the Site, we may
                      receive certain information about your visit, use, or
                      interactions (&ldquo;<strong>Technical Information</strong>
                      &rdquo;). For example, we may monitor the number of people
                      that visit the Site, peak hours of visits, which page(s)
                      are visited, the domains our visitors come from (e.g.,
                      google.com, yahoo.com, etc.), and which browsers people
                      use to access the Services (e.g., Chrome, Firefox,
                      Microsoft Internet Explorer, etc.), broad geographical
                      information, and navigation pattern. In particular,
                      Technical Information includes the following, which is
                      created and automatically logged in our systems:
                    </p>
                    <ul className="mt-3 list-none space-y-2 pl-6">
                      <li>
                        <strong>Log data:</strong> Log data is information that
                        your browser automatically sends whenever you visit the
                        Site. Log data includes your Internet Protocol address,
                        browser type and settings, the date and time of your
                        request, and how you interacted with the Site.
                      </li>
                      <li>
                        <strong>Cookies:</strong> Please see the{" "}
                        <a
                          href="#cookies"
                          className="text-[#ff6600] hover:underline"
                        >
                          <strong>&ldquo;Cookies&rdquo;</strong>
                        </a>{" "}
                        section below to learn more about how we use cookies.
                      </li>
                      <li>
                        <strong>Device information:</strong> Includes name of
                        the device, operating system, and browser you are using.
                        Information collected may depend on the type of device
                        you use and its settings.
                      </li>
                      <li>
                        <strong>Usage Information:</strong> We collect
                        information about how you use our Services, such as the
                        types of content that you view or engage with, the
                        features you use, the actions you take, and the time,
                        frequency, and duration of your activities.
                      </li>
                      <li>
                        <strong>Session replay information:</strong> Session
                        replay information includes Device Information, broad
                        geographical information, and the contents of your
                        screen.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

            <p className="mb-4" id="cookies">
              <em>Cookies</em>: We use cookies to operate and administer our
              Site, gather usage data on our Site, and improve your experience on
              it. A &ldquo;cookie&rdquo; is a piece of information sent to your
              browser by a website you visit. Cookies can be stored on your
              computer for different periods of time. Some cookies expire after a
              certain amount of time, or upon logging out (session cookies),
              others survive after your browser is closed until a defined
              expiration date set in the cookie (as determined by the third party
              placing it), and help recognize your computer when you open your
              browser and browse the Internet again (persistent cookies). For
              more details on cookies please visit{" "}
              <a
                href="https://allaboutcookies.org/"
                className="text-[#ff6600] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                All About Cookies
              </a>
              .
            </p>

            <p className="mb-4">
              <em>Session Replay:</em> We use PostHog for session replay on SUS
              to help us analyze how users use the Site and to improve user
              experience.
            </p>

            <p className="mb-4">
              <em>Analytics:</em> Among other service providers, we use Google
              Analytics, a web analytics service provided by Google, Inc.
              (&ldquo;<strong>Google</strong>&rdquo;). Google Analytics uses
              cookies to help us analyze how users use the Site and enhance your
              experience when you use the Site. For more information on how
              Google uses this data, go to{" "}
              <a
                href="https://www.google.com/policies/privacy/partners/"
                className="text-[#ff6600] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.google.com/policies/privacy/partners/
              </a>
              . We also use New Relic, Amplitude, and PostHog.
            </p>

            <p className="mb-4">
              <em>Online Tracking and Do Not Track Signals:</em> We and our
              third party service providers may use cookies or other tracking
              technologies to collect information about your browsing activities
              over time and across different websites following your use of the
              Site. Our Site currently does not respond to &ldquo;Do Not
              Track&rdquo; (&ldquo;<strong>DNT</strong>&rdquo;) signals and
              operates as described in this Privacy Policy whether or not a DNT
              signal is received. If we do respond to DNT signals in the future,
              we will update this Privacy Policy to describe how we do so.
            </p>

            <p className="mb-4">
              <strong>Your Choices.</strong> On most web browsers, you will find
              a &ldquo;help&rdquo; section on the toolbar. Please refer to this
              section for information on how to receive a notification when you
              are receiving a new cookie and how to turn cookies off. Please see
              the links below for guidance on how to modify your web
              browser&apos;s settings on the most popular browsers:
            </p>

            <ul className="mb-4 list-disc space-y-1 pl-8">
              <li>
                <a
                  href="http://windows.microsoft.com/en-gb/internet-explorer/delete-manage-cookies#ie=ie-11"
                  className="text-[#ff6600] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Internet Explorer
                </a>
              </li>
              <li>
                <a
                  href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences?esab=a&s=cookies&r=6&as=s"
                  className="text-[#ff6600] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  href="https://support.google.com/accounts/answer/61416?hl=en"
                  className="text-[#ff6600] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Chrome
                </a>
              </li>
              <li>
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  className="text-[#ff6600] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Safari
                </a>
              </li>
            </ul>

            <p className="mb-4">
              Please note that if you limit the ability of websites to set
              cookies, you may be unable to access certain parts of the Site and
              you may not be able to benefit from the full functionality of the
              Site.
            </p>

            <p className="mb-4">
              Advertising networks may use cookies to collect Personal
              Information. Most advertising networks offer you a way to opt out
              of targeted advertising. If you would like to find out more
              information, please visit the Network Advertising
              Initiative&apos;s online resources at{" "}
              <a
                href="http://www.networkadvertising.org/"
                className="text-[#ff6600] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://www.networkadvertising.org
              </a>{" "}
              and follow the opt-out instructions there.
            </p>

            <p className="mb-8">
              If you access the Site on your mobile device, you may not be able
              to control tracking technologies through the settings.
            </p>

            {/* Section 2 */}
            <h3 className="mb-4 font-serif text-xl font-semibold">
              <strong>2. HOW WE USE PERSONAL INFORMATION</strong>
            </h3>

            <p className="mb-4">
              We may use Personal Information for the following purposes:
            </p>

            <ul className="mb-4 list-disc space-y-2 pl-8">
              <li>To provide and administer access to the Services;</li>
              <li>
                To grant access to and track attendance at our events;
              </li>
              <li>
                To respond to your inquiries, comments, feedback, or questions;
              </li>
              <li>
                To send administrative information to you, for example,
                information regarding the Services and changes to our terms,
                conditions, and policies;
              </li>
              <li>To analyze how you interact with our Services;</li>
              <li>
                To maintain and improve the content and functionality of the
                Services;
              </li>
              <li>To develop new programs and services;</li>
              <li>
                To prevent fraud, criminal activity, or misuses of our Services,
                and to ensure the security of our IT systems, architecture, and
                networks;
              </li>
              <li>To ensure compliance with sanctions regulations; and</li>
              <li>
                To comply with legal obligations and legal process and to
                protect our rights, privacy, safety, or property, and/or that of
                our Affiliates, you, or other third parties.
              </li>
            </ul>

            <p className="mb-8">
              <strong>Aggregated Information.</strong> We may aggregate Personal
              Information and use the aggregated information to analyze the
              effectiveness of our Services, to improve and add features to our
              Services, and for other similar purposes. In addition, from time to
              time, we may analyze the general behavior and characteristics of
              users of our Services and share aggregated information like general
              user statistics with prospective business partners. We may collect
              aggregated information through the Services, through cookies, and
              through other means described in this Privacy Policy.
            </p>

            {/* Section 3 */}
            <h3 className="mb-4 font-serif text-xl font-semibold">
              <strong>
                3. SHARING AND DISCLOSURE OF PERSONAL INFORMATION
              </strong>
            </h3>

            <p className="mb-4">
              In certain circumstances we may share your Personal Information
              with third parties without further notice to you, unless required
              by the law, as set forth below:
            </p>

            <ul className="mb-4 list-none space-y-4 pl-0">
              <li>
                <strong>Vendors and Service Providers:</strong> To assist us in
                meeting business operations needs and to perform certain
                services and functions, we may share Personal Information with
                vendors and service providers, including providers of hosting
                services, cloud services, and other information technology
                services providers, event management services, email
                communication software and email newsletter services, and web
                analytics services. Pursuant to our instructions, these parties
                will access, process, or store Personal Information in the
                course of performing their duties to us.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a
                merger, acquisition, financing due diligence, reorganization,
                bankruptcy, receivership, sale of all or a portion of our
                assets, or transition of service to another provider
                (collectively a &ldquo;<strong>Transaction</strong>&rdquo;),
                your Personal Information and other information may be shared in
                the diligence process with counterparties and others assisting
                with the Transaction and transferred to a successor or Affiliate
                as part of that Transaction along with other assets.
              </li>
              <li>
                <strong>Legal Requirements:</strong> If required to do so by law
                or in the good faith belief that such action is necessary to (i)
                comply with a legal obligation, including to meet national
                security or law enforcement requirements, (ii) protect and
                defend our rights or property, (iii) prevent fraud, (iv) act in
                urgent circumstances to protect the personal safety of users of
                the Services, or the public, or (v) protect against legal
                liability.
              </li>
              <li>
                <strong>Affiliates:</strong> We may share Personal Information
                with our Affiliates, meaning an entity that controls, is
                controlled by, or is under common control with Y Combinator. Our
                Affiliates will use the Personal Information we share in a
                manner consistent with this Privacy Policy.
              </li>
              <li>
                <strong>With Your Consent.</strong> We may disclose your
                Personal Information to third parties upon your request, at your
                direction, or with your consent.
              </li>
              <li>
                <strong>Other Users:</strong> certain actions you take may be
                visible to other users of the Services.
              </li>
            </ul>

            <p className="mb-4">
              Please note that for purposes of this section, &ldquo;sharing&rdquo;
              does not include &ldquo;sharing&rdquo; as defined under the CCPA.
              For additional disclosures and information on our CCPA practices,
              please review California Privacy Rights below.
            </p>

            <p className="mb-4">
              The following disclosures are intended to provide additional
              information about (1) the categories of Personal Information we
              collect, (2) the source of the Personal Information, (3) how we
              use each category of Personal Information, and (4) how we disclose
              Personal Information. These disclosures do not limit our ability to
              use or disclose information as described in Sections 2 and 3.
            </p>

            {/* Table 1 - Personal Information Categories */}
            <div className="mb-8 overflow-x-auto">
              <table className="w-full border-collapse border border-[#16140f]/20 text-sm">
                <thead>
                  <tr className="bg-[#16140f]/5">
                    <th className="border border-[#16140f]/20 p-3 text-left font-semibold">
                      Category of Personal Information
                    </th>
                    <th className="border border-[#16140f]/20 p-3 text-left font-semibold">
                      Sources Of Personal Information
                    </th>
                    <th className="border border-[#16140f]/20 p-3 text-left font-semibold">
                      Use of Personal Information
                    </th>
                    <th className="border border-[#16140f]/20 p-3 text-left font-semibold">
                      Disclosure of Personal Information
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      Event Information
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect Event Information directly from you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use Event Information to grant access to, and
                      administer your participation in, our events.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose Event Information to our Affiliates and the
                      companies participating in and the vendors helping to host
                      our events.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      WaaS Information
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect WaaS Information directly from you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use WaaS Information to help WaaS applicants get jobs
                      at Y Combinator-funded companies.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose WaaS Information to our Affiliates and Y
                      Combinator-funded companies.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      SUS Information
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect SUS Information directly from you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use SUS Information to evaluate SUS profiles, to
                      provide access to the SUS forums and network, to compile
                      and publish aggregated and anonymized statistics, and to
                      track participants, investments, and companies.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose SUS Information to our Affiliates. We make
                      reasonable efforts to treat your SUS Information
                      confidentially, but given the volume of participants we
                      disclaim all responsibility for preventing misuse or
                      unauthorized disclosure of or access to SUS Information.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      Application Information
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect Application Information directly from you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use Application Information to evaluate applications,
                      compile and publish aggregated statistics regarding
                      technology, companies, founders, industries, etc., and to
                      track applicants, founders, industries, companies, and
                      application trends.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose Application Information to our Affiliates.
                      Please see below for additional disclosures regarding
                      Application Information.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      HN Information
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect HN Information directly from you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use HN Information for logging you into your account
                      and granting you access to the Services, and in some
                      cases, for password recovery requested by you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We do not disclose HN Information to third parties, but
                      certain HN Information that you have chosen to include in
                      your profile is publicly available on the Internet.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      Social Information
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect Social Information from you when you interact
                      with our Social Media Pages.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use Social Information to perform analytics and to
                      communicate with you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose Social Information to our Affiliates.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      Communication Information
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect Communication Information directly from you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use Communication Information for providing our
                      Services and responding to you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose Communication Information to our Affiliates
                      and communication services providers.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      Technical Information
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect Technical Information from you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use Technical Information for analytics and in some
                      cases, for moderation and prevention of fraud and
                      malicious activity by users of our Services.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose Technical Information to our Affiliates and
                      analytics providers.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-8">
              <strong>Application Information Disclosures.</strong> Due to the
              large number of applications and related materials that we receive
              and review, and the similarity of much of the information provided
              in such applications, we cannot accept responsibility for
              protecting against the misuse or disclosure of any general
              information, knowledge or other materials (including without
              limitation any information generally known in your industry)
              included in your Application Information. Any such general
              information or knowledge you submit to Y Combinator may be used or
              disclosed by us or any person with whom we share your application
              for any purpose and in any manner. You submit applications at your
              own risk. We implement commercially reasonable technical,
              administrative, and organizational measures to protect Application
              Information both online and offline from loss, misuse, and
              unauthorized access, disclosure, alteration, or destruction.
              However, no Internet or email transmission is ever fully secure or
              error free. In particular, email sent to or from us may not be
              secure. Therefore, you should take special care in deciding what
              Application Information you send to us.
            </p>

            {/* Section 4 */}
            <h3 className="mb-4 font-serif text-xl font-semibold">
              <strong>
                4. YOUR CHOICES, DELETION REQUESTS, AND UPDATING YOUR
                INFORMATION
              </strong>
            </h3>

            <p className="mb-4">
              <strong>Your Rights and Choices:</strong> In certain circumstances
              providing Personal Information is optional. However, if you choose
              not to provide Personal Information that is needed to use some
              features of our Services, you may be unable to use those features.
              You can contact us at privacy@ycombinator.com to request to
              update, correct, or delete your Personal Information. Please note
              that you can correct or delete certain HN Information yourself, by
              modifying your Hacker News profile. If you request deletion of
              your Hacker News account, note that we reserve the right to refuse
              to (i) delete any of the submissions, favorites, or comments you
              posted on the Hacker News site or linked in your profile and/or
              (ii) remove their association with your Hacker News ID.
            </p>

            <p className="mb-2">
              <strong>Deletion Requests:</strong>
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-8">
              <li>
                If you would like to request that we delete your entire Y
                Combinator account and all Personal Information associated with
                it, contact us at privacy@ycombinator.com.
              </li>
              <li>
                If you would like to request that we delete your Application
                Information but otherwise maintain your Y Combinator account,
                contact us at apply@ycombinator.com.
              </li>
              <li>
                If you would like to request that we delete your WaaS
                Information but otherwise maintain your Y Combinator account,
                contact us at workatastartup@ycombinator.com.
              </li>
            </ul>

            <p className="mb-2">
              <strong>Account Update Requests:</strong>
            </p>
            <ul className="mb-4 list-disc space-y-2 pl-8">
              <li>
                Please log in to your Y Combinator account to change or correct
                your Personal Information. If you need help, contact us at
                accounts@ycombinator.com.
              </li>
              <li>
                With respect to Application Information, before you submit your
                application, you can update your Application Information by
                logging in and editing your application directly.
              </li>
              <li>
                If you need help updating your WaaS information, you can
                contact us at workatastartup@ycombinator.com.
              </li>
              <li>
                For Hacker News account recovery, contact us at
                hn@ycombinator.com.
              </li>
            </ul>

            <p className="mb-8">
              If you are a California resident, please review the below section,
              California Privacy Rights, for additional information on your
              rights under the CCPA.
            </p>

            {/* Section 5 */}
            <h3 className="mb-4 font-serif text-xl font-semibold">
              <strong>5. CALIFORNIA PRIVACY RIGHTS</strong>
            </h3>

            <p className="mb-4">
              The CCPA imposes certain obligations on us and grants certain
              rights to California residents (&ldquo;
              <strong>California Resident</strong>&rdquo;, &ldquo;
              <strong>you</strong>&rdquo; or &ldquo;<strong>your</strong>
              &rdquo;) with regard to &ldquo;personal information.&rdquo; If you
              are a California Resident, please review the following information
              about your potential rights with regard to your Personal
              Information under the CCPA. The rights described herein are subject
              to exemptions and other limitations under applicable law. Terms
              used herein have the meaning ascribed to them in the CCPA. We are
              a &ldquo;business.&rdquo;
            </p>

            <p className="mb-2 font-semibold" id="notice-at-collection">
              Notice at Collection and Use of Personal Information
            </p>

            <p className="mb-4">
              <strong>Information We Collect.</strong> Depending on how you
              interact with us, we may collect the categories of personal
              information from or about you as identified in Personal
              Information We Collect and including:
            </p>

            <ul className="mb-4 list-disc space-y-2 pl-8">
              <li>
                <strong>Identifiers and similar information</strong>, such as
                your name, address, date of birth, email address, online
                identifiers or other similar identifiers;
              </li>
              <li>
                <strong>Characteristics of Protected Classifications</strong>{" "}
                under certain federal or state laws, including gender, national
                origin, or marital status;
              </li>
              <li>
                <strong>Commercial information</strong>, including records of
                products or services purchased, obtained, or considered, or
                other purchasing histories or tendencies;
              </li>
              <li>
                <strong>Audio, electronic, visual</strong>, or similar
                information;
              </li>
              <li>
                <strong>Geolocation information</strong>, such as information
                about your location or the location of your device;
              </li>
              <li>
                <strong>Professional or employment-related information</strong>,
                including occupation, compensation, employer, and title;
              </li>
              <li>
                <strong>Education information</strong>, defined as information
                that is not publicly available personally identifiable
                information as defined in the Family Educational Rights and
                Privacy Act (20 U.S.C. section 1232g, 34 C.F.R. Part 99);
              </li>
              <li>
                <strong>
                  Internet or other electronic network activity information
                </strong>
                , including interactions with our website or use of certain
                online tools, and IP addresses; and
              </li>
              <li>
                <strong>
                  Inferences drawn from any of the information identified above
                  to
                </strong>{" "}
                create a profile reflecting your preferences or similar
                information.
              </li>
            </ul>

            <p className="mb-4">
              <strong>Our Use and Collection of Information.</strong> We may
              collect and use Personal Information from you for the purposes
              described above in How We Use Information and described below in
              Our Collection, Use, and Disclosure of Personal Information.
            </p>

            <p className="mb-4">
              <strong>Sale or Sharing of Personal Information.</strong> We do not
              sell or share your Personal Information (as those terms are defined
              under the CCPA).
            </p>

            <p className="mb-4">
              <strong>How Long We Keep Information.</strong> How long we keep
              your Personal Information will vary depending on the type of
              personal data and our reasons for collecting it. The retention
              period will be determined by various criteria, including the
              purposes for which we are using it (as it will need to be kept for
              as long as is necessary for any of those purposes) and our legal
              obligations (as laws or regulations may set a minimum period for
              which we have to keep your personal data). In general, we will
              retain your Personal Information unless your account is deleted, or
              for as long as we require it to fulfill the business purposes for
              which it was collected, perform our contractual rights and
              obligations, or for periods required by our legal and regulatory
              obligations.
            </p>

            <p className="mb-4">
              For more information about our privacy practices, please review
              our entire{" "}
              <a href="#privacy" className="text-[#ff6600] hover:underline">
                Privacy Policy
              </a>
              .
            </p>

            <p className="mb-2 font-semibold">
              Our Collection, Use, and Disclosure of Personal Information
            </p>

            <p className="mb-4">
              The following disclosures are intended to provide additional
              information about (1) the categories of Personal Information we
              have collected in the preceding 12 months (as listed in{" "}
              <a href="#section1" className="text-[#ff6600] hover:underline">
                Information We Collect
              </a>
              ), (2) the source of the Personal Information, (3) the business or
              commercial purposes for our collection of the Personal Information
              and (4) how we may disclose Personal Information for a business
              purpose. These disclosures do not limit our ability to use or
              disclose information as described in Sections 2 and 3. We do not
              sell or share your personal information (as those terms are defined
              under the CCPA). We do not knowingly sell or share the personal
              information of California Residents under 16 years old.
            </p>

            {/* Table 2 - CCPA Categories */}
            <div className="mb-4 overflow-x-auto">
              <table className="w-full border-collapse border border-[#16140f]/20 text-sm">
                <thead>
                  <tr className="bg-[#16140f]/5">
                    <th className="border border-[#16140f]/20 p-3 text-left font-semibold">
                      Category of Personal Information
                    </th>
                    <th className="border border-[#16140f]/20 p-3 text-left font-semibold">
                      Sources Of Personal Information
                    </th>
                    <th className="border border-[#16140f]/20 p-3 text-left font-semibold">
                      Business or Commercial Purpose for Collecting Personal
                      Information
                    </th>
                    <th className="border border-[#16140f]/20 p-3 text-left font-semibold">
                      Disclosure of Personal Information
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      Identifiers and similar information
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect this information directly from you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use this information for operational purposes,
                      including for logging you into your account and granting
                      you access to the Services, to provide you with the
                      Services, to enforce our community norms and policies, to
                      monitor the Site for security purposes, and in some cases,
                      for password recovery requested by you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose this information to our Affiliates, and in
                      some cases, to service providers, Y Combinator-funded
                      companies, and/or other users of the Services.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      Characteristics of Protected Classifications
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect this information directly from you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use this information as directed by you and in some
                      cases, to compile and publish aggregated statistics.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose this information to our Affiliates, and in
                      some cases, to Y Combinator-funded companies, and/or
                      other users of the Services.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      Commercial information
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect this information from you directly when you
                      sign up for the Services, and from your interactions with
                      the Services.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use this information to provide you with the Services
                      and to improve the Services.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose this information to our Affiliates and
                      analytics providers.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      Geolocation information
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect this information directly from you through your
                      interactions with the Services.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use this information for analytics purposes, regulatory
                      compliance, and in some cases, for moderation and
                      prevention of fraud and malicious activity by users of our
                      Services.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose this information to our Affiliates and
                      analytics providers.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      Professional or employment-related information
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect this information directly from you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use this information to provide you with the Services.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose this information to our Affiliates, and in
                      some cases, to Y Combinator-funded companies, and/or
                      other users of the Services.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      Education information
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect this information directly from you.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use this information to provide you with the Services.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose this information to our Affiliates, and in
                      some cases, to Y Combinator-funded companies, and/or
                      other users of the Services.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      Internet or other electronic network activity information
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect this information directly from you through your
                      interactions with the Services.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use this information to improve the Services, for
                      analytics, and in some cases, for moderation and
                      prevention of fraud and malicious activity by users of our
                      Services.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose this information to our Affiliates and
                      analytics providers.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-[#16140f]/20 p-3">
                      Inferences drawn from any of the information identified
                      above
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We collect this information directly from you through your
                      interactions with the Services.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We use this information to improve and personalize the
                      Services.
                    </td>
                    <td className="border border-[#16140f]/20 p-3">
                      We disclose this information to our Affiliates.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-4">
              In addition, in the preceding 12 months, we may have disclosed all
              of the categories of Personal Information identified in Information
              We Collect above to the following categories of third parties: (i)
              judicial courts, regulators, or other government agents purporting
              to have jurisdiction over us, our subsidiaries or our Affiliates,
              or opposing counsel and parties to litigation; and (ii) other third
              parties as may otherwise be permitted by law. We may disclose the
              categories of Personal Information identified in Information We
              Collect for the business or commercial purposes identified above
              in How We Use Information. Additionally, we may disclose your
              Personal Information to third parties upon your request, at your
              direction, or with your consent.
            </p>

            <p className="mb-4">
              We may also disclose your Personal Information or otherwise make it
              available to our service providers, other entities that have agreed
              to limitations on the use of your Personal Information, or
              entities that fit within other exemptions or exceptions in, or as
              otherwise permitted by, the CCPA.
            </p>

            <p className="mb-2 font-semibold">
              California Resident&apos;s Privacy Rights
            </p>

            <p className="mb-4">
              To the extent provided for by law and subject to applicable
              exceptions, California residents may have the following privacy
              rights in relation to the Personal Information we collect,
              including the right to:
            </p>

            <ul className="mb-4 list-disc space-y-2 pl-8">
              <li>
                Be informed, at or before the point of collection, of the
                categories of Personal Information to be collected, and the
                purposes for which the categories of Personal Information shall
                be used;
              </li>
              <li>
                Know what Personal Information we have collected and how we have
                used and disclosed that Personal Information (&ldquo;Request to
                Know&rdquo;);
              </li>
              <li>
                Request deletion of your Personal Information, subject to
                certain exemptions (&ldquo;Request to Delete&rdquo;);
              </li>
              <li>
                Opt-out of the &ldquo;sale&rdquo; (as that term is defined in
                the CCPA) of your personal information if a business sells your
                Personal Information (we do not);
              </li>
              <li>
                Opt-out of the &ldquo;sharing&rdquo; (as that term is defined in
                the CCPA) of your Personal Information if a business shares your
                Personal Information with third parties (we do not);
              </li>
              <li>
                Limit the use and disclosure of sensitive personal information
                where required by the CCPA (&ldquo;Right to Limit&rdquo;)
                (please note that we are not using your sensitive personal
                information for purposes that would require that we provide you
                with a Right to Limit);
              </li>
              <li>
                Correct inaccurate Personal Information (&ldquo;Request to
                Correct&rdquo;); and
              </li>
              <li>
                Be free from discrimination relating to the exercise of any of
                your privacy rights.
              </li>
            </ul>

            <p className="mb-4">
              The CCPA does not restrict our ability to do certain things like
              comply with other laws or comply with regulatory investigations. We
              also reserve the right to retain, and not to delete, certain
              Personal Information after receipt of a Request to Delete from you
              where permitted by the CCPA or another law or regulation.
            </p>

            <p className="mb-4">
              <strong>Exercising Your Rights.</strong> California residents can
              exercise their right to Request to Know, Request to Correct or
              Request to Delete (&ldquo;Consumer Rights Request&rdquo;) as
              described above, through the following toll-free telephone number
              +1 (415) 874-1528 or by contacting us at
              privacy@ycombinator.com.
            </p>

            <p className="mb-4">
              <strong>Verification.</strong> In order to protect your Personal
              Information from unauthorized access or deletion, we may require
              you to verify your login credentials before you can submit a
              Consumer Rights Request. In verifying your request, we may ask you
              to provide additional Personal Information and proof of residency
              for verification. Such information may include, at a minimum,
              depending on the sensitivity of the information you are requesting
              and the type of request you are making, your name and email
              address. Any information gathered as part of the verification
              process will be used for verification purposes only. If we cannot
              verify your identity, we will not provide, delete or correct your
              Personal Information.
            </p>

            <p className="mb-4">
              <strong>Authorized Agents.</strong> You may submit a Consumer
              Rights Request through an authorized agent. If you do so, the
              agent must present signed written permission to act on your behalf
              and you may also be required to independently verify your identity
              and submit proof of your residency with us.
            </p>

            <p className="mb-8">
              <strong>Shine the Light Disclosures.</strong> California law
              requires us to inform California residents who have provided us
              with personal information that they may request information from us
              about our disclosures to third parties for their direct marketing
              purposes. To request this information, please contract us at
              privacy@ycombinator.com. In your request, please specify that this
              is a &ldquo;California &lsquo;Shine the Light&rsquo;
              Request.&rdquo;
            </p>

            {/* Section 6 */}
            <h3 className="mb-4 font-serif text-xl font-semibold">
              <strong>6. CHILDREN</strong>
            </h3>

            <p className="mb-8">
              Our Services are not directed to children who are under the age of
              13. Y Combinator does not knowingly collect Personal Information
              from children under the age of 13. If you have reason to believe
              that a child under the age of 13 has provided Personal Information
              to Y Combinator through the Service, please contact us at
              privacy@ycombinator.com and we will endeavor to delete that
              information from our databases.
            </p>

            {/* Section 7 */}
            <h3 className="mb-4 font-serif text-xl font-semibold">
              <strong>7. LINKS TO OTHER WEBSITES</strong>
            </h3>

            <p className="mb-8">
              The Services may contain links to other websites not operated or
              controlled by Y Combinator, including social media services
              (&ldquo;<strong>Third Party Sites</strong>&rdquo;). The
              information that you disclose to Third Party Sites will be governed
              by the specific privacy policies and terms of service of the Third
              Party Sites and not by this Privacy Policy. By providing these
              links we do not imply that we endorse or have reviewed these sites.
              Please contact the Third Party Sites directly for information on
              their privacy practices and policies.
            </p>

            {/* Section 8 */}
            <h3 className="mb-4 font-serif text-xl font-semibold">
              <strong>8. SECURITY</strong>
            </h3>

            <p className="mb-8">
              You use the Services at your own risk. We implement commercially
              reasonable technical, administrative, and organizational measures
              designed to protect Personal Information both online and offline
              from loss, misuse, and unauthorized access, disclosure, alteration,
              or destruction. However, no Internet or email transmission is ever
              fully secure or error free. In particular, email sent to or from us
              may not be secure. Therefore, you should take special care in
              deciding what information you send to us via the Services or email.
              Please keep this in mind when disclosing any Personal Information
              to Y Combinator via the Internet. In addition, we are not
              responsible for circumvention of any privacy settings or security
              measures contained on the Services, or third party websites.
            </p>

            {/* Section 9 */}
            <h3 className="mb-4 font-serif text-xl font-semibold">
              <strong>9. INTERNATIONAL USERS</strong>
            </h3>

            <p className="mb-8">
              By using our Services, you understand and acknowledge that your
              Personal Information will be transferred from your location to our
              facilities and servers in the United States.
            </p>

            {/* Section 10 */}
            <h3 className="mb-4 font-serif text-xl font-semibold">
              <strong>10. CHANGES TO THE PRIVACY POLICY</strong>
            </h3>

            <p className="mb-8">
              The Services and our business may change from time to time. As a
              result we may change this Privacy Policy at any time. When we do,
              we will post an updated version on this page, unless another type
              of notice is required by the applicable law. By continuing to use
              our Services or providing us with Personal Information after we
              have posted an updated Privacy Policy, or notified you by other
              means if applicable, you consent to the revised Privacy Policy and
              practices described in it.
            </p>

            {/* Section 11 */}
            <h3 className="mb-4 font-serif text-xl font-semibold">
              <strong>11. QUESTIONS ABOUT THE PRIVACY POLICY</strong>
            </h3>

            <p className="mb-8">
              If you have any questions about our Privacy Policy or information
              practices or need to access this Privacy Policy in a different
              format, please feel free to contact the legal team at
              yclegal@ycombinator.com. For a downloadable copy of our Privacy
              Policy, please click{" "}
              <a
                href="https://s3.us-west-2.amazonaws.com/static.ycombinator.com/yc-privacy-policy.pdf"
                className="text-[#ff6600] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
              .
            </p>
          </section>

          {/* ==================== TERMS OF USE ==================== */}
          <section id="tou" className="scroll-mt-24">
            <h3 className="mb-4 font-serif text-2xl font-semibold">
              Terms of Use
            </h3>

            <p className="mb-4">
              Welcome to the Y Combinator website (including all subdomains, the
              &ldquo;<strong>Site</strong>&rdquo;), which is operated by Y
              Combinator Management, LLC and its affiliates (collectively,
              &ldquo;<strong>Y Combinator</strong>&rdquo;, &ldquo;
              <strong>we</strong>&rdquo;, &ldquo;<strong>us</strong>&rdquo;
              and/or &ldquo;<strong>our</strong>&rdquo;). This Site provides,
              among other things, information about our people, organization and
              application process, tools for applicants to submit applications
              and go through the application process, forums for discussions
              about topics relevant to startups, and profiles of founders and
              companies who have participated in the Y Combinator program.
            </p>

            <p className="mb-4 text-sm italic">
              <strong>
                THESE TERMS OF USE CONTAIN AN ARBITRATION AGREEMENT, WHICH WILL,
                WITH LIMITED EXCEPTION, REQUIRE YOU TO SUBMIT CLAIMS YOU HAVE
                AGAINST US TO BINDING AND FINAL ARBITRATION. UNDER THE
                ARBITRATION AGREEMENT, (1) YOU WILL ONLY BE PERMITTED TO PURSUE
                CLAIMS AGAINST Y COMBINATOR ON AN INDIVIDUAL BASIS, NOT AS A
                PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE ACTION
                OR PROCEEDING, AND (2) YOU WILL ONLY BE PERMITTED TO SEEK RELIEF
                (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) ON AN
                INDIVIDUAL BASIS
              </strong>
            </p>

            <p className="mb-4">
              We reserve the right, at our sole discretion, to change or modify
              portions of these Terms of Use at any time. If we do this, we will
              post the changes on this page and will indicate at the top of this
              page the date these terms were last revised. We will also notify
              you, either through the Site user interface, in an email
              notification or through other reasonable means. Any such changes
              will become effective no earlier than fourteen (14) days after they
              are posted, except that changes addressing new functions of the
              Site or changes made for legal reasons will be effective
              immediately. Your continued use of the Site after the date any
              such changes become effective constitutes your acceptance of the
              new Terms of Use.
            </p>

            <p className="mb-4">
              In addition, when using certain components of the Site, you will
              be subject to any additional terms, policies, rules or guidelines
              applicable to the Site or such components of the Site that may be
              posted on the Site from time to time, including, without
              limitation, the Privacy Policy located{" "}
              <a href="#privacy" className="text-[#ff6600] hover:underline">
                www.ycombinator.com/legal#privacy
              </a>{" "}
              and any Guidelines applicable to any components of the Site (e.g.,
              the Hacker News Guidelines located at{" "}
              <a
                href="https://news.ycombinator.com/newsguidelines.html"
                className="text-[#ff6600] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://news.ycombinator.com/newsguidelines.html
              </a>
              , Bookface Guidelines located at{" "}
              <a
                href="https://bookface.ycombinator.com/docs/forum/guidelines"
                className="text-[#ff6600] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://bookface.ycombinator.com/docs/forum/guidelines
              </a>
              , etc.). All such terms are hereby incorporated by reference into
              these Terms of Use.
            </p>

            <p className="mb-2 font-semibold">Access and Use of the Site</p>

            <p className="mb-4">
              <strong>Your Registration Obligations</strong>: You may be
              required to register with Y Combinator in order to access and use
              certain features of the Site. If you choose to register, you agree
              to provide and maintain true, accurate, current and complete
              information about yourself as prompted by the Site&apos;s
              registration form. Registration data and certain other information
              about you are governed by our Privacy Policy. If you are under 13
              years of age, you are not authorized to register to use the Site.
            </p>

            <p className="mb-4">
              <strong>Member Account, Password and Security</strong>: You are
              responsible for maintaining the confidentiality of your password
              and account, if any, and are fully responsible for any and all
              activities that occur under your password or account. You agree to
              (a) immediately notify Y Combinator of any unauthorized use of
              your password or account or any other breach of security, and (b)
              ensure that you exit from your account at the end of each session
              when accessing the Site. Y Combinator will not be liable for any
              loss or damage arising from your failure to comply with this
              Section.
            </p>

            <p className="mb-4">
              <strong>Modifications to Site</strong>: Y Combinator reserves the
              right to modify or discontinue, temporarily or permanently, the
              Site (or any part thereof) with or without notice. You agree that
              Y Combinator will not be liable to you or to any third party for
              any modification, suspension or discontinuance of the Site.
            </p>

            <p className="mb-4">
              <strong>General Practices Regarding Use and Storage</strong>: You
              acknowledge that Y Combinator may establish general practices and
              limits concerning use of the Site, including without limitation the
              maximum period of time that data or other content will be retained
              by the Site and the maximum storage space that will be allotted on
              Y Combinator&apos;s servers on your behalf. You agree that Y
              Combinator has no responsibility or liability for the deletion or
              failure to store any data or other content maintained or uploaded
              by the Site. You acknowledge that Y Combinator reserves the right
              to terminate accounts that are inactive for an extended period of
              time. You further acknowledge that Y Combinator reserves the right
              to change these general practices and limits at any time, in its
              sole discretion, with or without notice.
            </p>

            <p className="mb-2 font-semibold">Conditions Of Use</p>

            <p className="mb-4">
              <strong>User Conduct</strong>: In addition to any applicable
              guidelines or policies that may govern specific components of the
              Site, you agree to comply with the following conditions in using
              the Site. You are solely responsible for all code, video, images,
              information, data, text, software, music, sound, photographs,
              graphics, messages or other materials (&ldquo;content&rdquo;) that
              you upload, post, publish or display (hereinafter,
              &ldquo;upload&rdquo;) or email or otherwise transmit via the Site.
              The following are examples of the kind of content and/or use that
              is illegal or prohibited by Y Combinator. Y Combinator reserves
              the right to investigate and take appropriate legal action against
              anyone who, in Y Combinator&apos;s sole discretion, violates this
              provision, including without limitation, removing the offending
              content from the Site, suspending or terminating the account of
              such violators and reporting you to the law enforcement
              authorities. You agree to not use the Site to:
            </p>

            <ul className="mb-4 list-disc space-y-2 pl-8">
              <li>
                email or otherwise upload any content that (i) infringes any
                intellectual property or other proprietary rights of any party;
                (ii) you do not have a right to upload under any law or under
                contractual or fiduciary relationships; (iii) contains software
                viruses or any other computer code, files or programs designed
                to interrupt, destroy or limit the functionality of any computer
                software or hardware or telecommunications equipment; (iv) poses
                or creates a privacy or security risk to any person; (v)
                constitutes unsolicited or unauthorized advertising, promotional
                materials, commercial activities and/or sales, &ldquo;junk
                mail,&rdquo; &ldquo;spam,&rdquo; &ldquo;chain letters,&rdquo;
                &ldquo;pyramid schemes,&rdquo; &ldquo;contests,&rdquo;
                &ldquo;sweepstakes,&rdquo; or any other form of solicitation;
                (vi) is unlawful, harmful, threatening, abusive, harassing,
                tortious, excessively violent, defamatory, vulgar, obscene,
                pornographic, libelous, invasive of another&apos;s privacy,
                hateful racially, ethnically or otherwise objectionable; or
                (vii) in the sole judgment of Y Combinator, is objectionable or
                which restricts or inhibits any other person from using or
                enjoying the Site, or which may expose Y Combinator or its users
                to any harm or liability of any type;
              </li>
              <li>
                interfere with or disrupt the Site or servers or networks
                connected to the Site, or disobey any requirements, procedures,
                policies or regulations of networks connected to the Site;
              </li>
              <li>
                violate any applicable local, state, national or international
                law, or any regulations having the force of law;
              </li>
              <li>
                impersonate any person or entity, or falsely state or otherwise
                misrepresent your affiliation with a person or entity;
              </li>
              <li>
                solicit personal information from anyone under the age of 18;
              </li>
              <li>
                harvest or collect email addresses or other contact information
                of other users from the Site by electronic or other means for
                the purposes of sending unsolicited emails or other unsolicited
                communications;
              </li>
              <li>
                advertise or offer to sell or buy any goods or services for any
                business purpose that is not specifically authorized;
              </li>
              <li>
                further or promote any criminal activity or enterprise or
                provide instructional information about illegal activities; or
              </li>
              <li>
                obtain or attempt to access or otherwise obtain any materials or
                information through any means not intentionally made available
                or provided for through the Site.
              </li>
            </ul>

            <p className="mb-4">
              <strong>Commercial Use</strong>: Unless otherwise expressly
              authorized herein or in the Site, you agree not to display,
              distribute, license, perform, publish, reproduce, duplicate, copy,
              create derivative works from, modify, sell, resell, exploit,
              transfer or upload for any commercial purposes, any portion of the
              Site, use of the Site, or access to the Site.
              <strong>
                {" "}
                The buying, exchanging, selling and/or promotion (commercial or
                otherwise) of upvotes, comments, submissions, accounts (or any
                aspect of your account or any other account), karma, and/or
                content is strictly prohibited, constitutes a material breach of
                these Terms of Use, and could result in legal liability.
              </strong>
            </p>

            <p className="mb-2 font-semibold">Intellectual Property Rights</p>

            <p className="mb-4">
              <strong>Site Content, Software and Trademarks</strong>: You
              acknowledge and agree that the Site may contain content or features
              (&ldquo;Site Content&rdquo;) that are protected by copyright,
              patent, trademark, trade secret or other proprietary rights and
              laws. Except as expressly authorized by Y Combinator, you agree
              not to modify, copy, frame, scrape, rent, lease, loan, sell,
              distribute or create derivative works based on the Site or the
              Site Content, in whole or in part, except that the foregoing does
              not apply to your own User Content (as defined below) that you
              legally upload to the Site. In connection with your use of the
              Site you will not engage in or use any data mining, robots,
              scraping or similar data gathering or extraction methods. If you
              are blocked by Y Combinator from accessing the Site (including by
              blocking your IP address), you agree not to implement any measures
              to circumvent such blocking (e.g., by masking your IP address or
              using a proxy IP address). Any use of the Site or the Site Content
              other than as specifically authorized herein is strictly
              prohibited. Any rights not expressly granted herein are reserved
              by Y Combinator.
            </p>

            <p className="mb-4">
              The Y Combinator name and logos are trademarks of Y Combinator
              (collectively the &ldquo;Y Combinator Trademarks&rdquo;). Other
              trademarks used and displayed via the Site may be trademarks of
              their respective owners who may or may not endorse or be affiliated
              with or connected to Y Combinator. Nothing in this Terms of Use or
              the Site should be construed as granting, by implication, estoppel,
              or otherwise, any license or right to use any of Y Combinator
              Trademarks displayed on the Site, without our prior written
              permission in each instance. All goodwill generated from the use
              of Y Combinator Trademarks will inure to our exclusive benefit.
            </p>

            <p className="mb-4">
              <strong>Third Party Material</strong>: Under no circumstances will
              Y Combinator be liable in any way for any content or materials of
              any third parties (including founders, investors or other users),
              including, but not limited to, for any errors or omissions in any
              content, or for any loss or damage of any kind incurred as a
              result of the use of any such content. You acknowledge that Y
              Combinator does not pre-screen content, but that Y Combinator and
              its designees will have the right (but not the obligation) in
              their sole discretion to refuse or remove any content that is
              available via the Site. Without limiting the foregoing, Y
              Combinator and its designees will have the right to remove any
              content that violates these Terms of Use or is deemed by Y
              Combinator, in its sole discretion, to be otherwise objectionable.
              You agree that you must evaluate, and bear all risks associated
              with, the use of any content, including any reliance on the
              accuracy, completeness, or usefulness of such content.
            </p>

            <p className="mb-4">
              <strong>User Content Transmitted Through the Site</strong>: With
              respect to the content or other materials you upload through the
              Site or share with other users or recipients (collectively,
              &ldquo;User Content&rdquo;), you represent and warrant that you
              own all right, title and interest in and to such User Content,
              including, without limitation, all copyrights and rights of
              publicity contained therein. By uploading any User Content you
              hereby grant and will grant Y Combinator and its affiliated
              companies a nonexclusive, worldwide, royalty free, fully paid up,
              transferable, sublicensable, perpetual, irrevocable license to
              copy, display, upload, perform, distribute, store, modify and
              otherwise use your User Content for any Y Combinator-related
              purpose in any form, medium or technology now known or later
              developed. However, please review the Privacy Policy located{" "}
              <a href="#privacy" className="text-[#ff6600] hover:underline">
                here
              </a>{" "}
              for more information on how we treat information included in
              applications submitted to us.
            </p>

            <p className="mb-4">
              You acknowledge and agree that any questions, comments,
              suggestions, ideas, feedback or other information about the Site
              (&ldquo;Submissions&rdquo;) provided by you to Y Combinator are
              non-confidential and Y Combinator will be entitled to the
              unrestricted use and dissemination of these Submissions for any
              purpose, without acknowledgment or compensation to you.
            </p>

            <p className="mb-4">
              Without limiting the foregoing, you acknowledge and agree that Y
              Combinator may preserve content and may also disclose content if
              required to do so by law or in the good faith belief that such
              preservation or disclosure is reasonably necessary to: (a) comply
              with legal process, applicable laws or government requests; (b)
              enforce these Terms of Use; (c) respond to claims that any content
              violates the rights of third parties; or (d) protect the rights,
              property, or personal safety of Y Combinator, its users and the
              public. You understand that the technical processing and
              transmission of the Site, including your content, may involve (a)
              transmissions over various networks; and (b) changes to conform
              and adapt to technical requirements of connecting networks or
              devices.
            </p>

            <p className="mb-4">
              <strong>Copyright Complaints</strong>: Y Combinator respects the
              intellectual property of others, and we ask our users to do the
              same. If you believe that your work has been copied in a way that
              constitutes copyright infringement, or that your intellectual
              property rights have been otherwise violated, you should notify Y
              Combinator of your infringement claim in accordance with the
              procedure set forth below.
            </p>

            <p className="mb-4">
              Y Combinator will process and investigate notices of alleged
              infringement and will take appropriate actions under the Digital
              Millennium Copyright Act (&ldquo;DMCA&rdquo;) and other applicable
              intellectual property laws with respect to any alleged or actual
              infringement. A written notification of claimed copyright
              infringement should be faxed or mailed to:
            </p>

            <p className="mb-4">
              Y Combinator Management, LLC
              <br />
              335 Pioneer Way
              <br />
              Mountain View, CA 94041
              <br />
              Attn: General Counsel / Copyright Agent
            </p>

            <p className="mb-4">Fax: 650-360-3189</p>

            <p className="mb-4">
              To be effective, the notification must be in writing and contain
              the following information:
            </p>

            <ul className="mb-4 list-disc space-y-2 pl-8">
              <li>
                an electronic or physical signature of the person authorized to
                act on behalf of the owner of the copyright or other
                intellectual property interest;
              </li>
              <li>
                a description of the copyrighted work or other intellectual
                property that you claim has been infringed;
              </li>
              <li>
                a description of where the material that you claim is infringing
                is located on the Site, with enough detail that we may find it
                on the Site;
              </li>
              <li>your address, telephone number, and email address;</li>
              <li>
                a statement by you that you have a good faith belief that the
                disputed use is not authorized by the copyright or intellectual
                property owner, its agent, or the law;
              </li>
              <li>
                a statement by you, made under penalty of perjury, that the
                above information in your Notice is accurate and that you are
                the copyright or intellectual property owner or authorized to
                act on the copyright or intellectual property owner&apos;s
                behalf.
              </li>
            </ul>

            <p className="mb-4">
              <strong>Counter-Notice</strong>: If you believe that your User
              Content that was removed (or to which access was disabled) is not
              infringing, or that you have the authorization from the copyright
              owner, the copyright owner&apos;s agent, or pursuant to the law,
              to upload and use the content in your User Content, you may send a
              written counter-notice containing the following information to the
              Copyright Agent:
            </p>

            <ul className="mb-4 list-disc space-y-2 pl-8">
              <li>your physical or electronic signature;</li>
              <li>
                identification of the content that has been removed or to which
                access has been disabled and the location at which the content
                appeared before it was removed or disabled;
              </li>
              <li>
                a statement that you have a good faith belief that the content
                was removed or disabled as a result of mistake or a
                misidentification of the content; and
              </li>
              <li>
                your name, address, telephone number, and email address, a
                statement that you consent to the jurisdiction of the federal
                court located within Northern District of California and a
                statement that you will accept service of process from the
                person who provided notification of the alleged infringement.
              </li>
            </ul>

            <p className="mb-4">
              If a counter-notice is received by the Copyright Agent, Y
              Combinator will send a copy of the counter-notice to the original
              complaining party informing that person that it may replace the
              removed content or cease disabling it in 10 business days. Unless
              the copyright owner files an action seeking a court order against
              the content provider, member or user, the removed content may be
              replaced, or access to it restored, in 10 to 14 business days or
              more after receipt of the counter-notice, at our sole discretion.
            </p>

            <p className="mb-4">
              <strong>Repeat Infringer Policy</strong>: In accordance with the
              DMCA and other applicable law, Y Combinator has adopted a policy
              of terminating, in appropriate circumstances and at Y
              Combinator&apos;s sole discretion, users who are deemed to be
              repeat infringers. Y Combinator may also at its sole discretion
              limit access to the Site and/or terminate the registrations of any
              users who infringe any intellectual property rights of others,
              whether or not there is any repeat infringement.
            </p>

            <p className="mb-2 font-semibold">Third Party Websites</p>

            <p className="mb-4">
              The Site may provide, or third parties may provide, links or other
              access to other sites and resources on the Internet or to third
              party applications. Y Combinator has no control over such sites,
              resources or applications and Y Combinator is not responsible for
              and does not endorse such sites, resources or applications. You
              further acknowledge and agree that Y Combinator will not be
              responsible or liable, directly or indirectly, for any damage or
              loss caused or alleged to be caused by or in connection with use
              of or reliance on any content, events, goods or services available
              on or through any such sites, resources or applications. Any
              dealings you have with third parties found while using the Site
              are between you and the third party, and you agree that Y
              Combinator is not liable for any loss or claim that you may have
              against any such third party.
            </p>

            <p className="mb-2 font-semibold">Indemnity and Release</p>

            <p className="mb-4">
              You agree to release, indemnify and hold Y Combinator and its
              affiliates and their officers, employees, directors and agents
              harmless from any from any and all losses, damages, expenses,
              including reasonable attorneys&apos; fees, rights, claims, actions
              of any kind and injury (including death) arising out of or
              relating to your use of the Site or any related information, any
              User Content, your application(s) to Y Combinator or the results
              thereof, your violation of these Terms of Use or your violation of
              any rights of another. If you are a California resident, you waive
              California Civil Code Section 1542, which says: &ldquo;A general
              release does not extend to claims which the creditor does not know
              or suspect to exist in his favor at the time of executing the
              release, which if known by him must have materially affected his
              settlement with the debtor.&rdquo; If you are a resident of
              another jurisdiction, you waive any comparable statute or
              doctrine.
            </p>

            <p className="mb-2 font-semibold">Disclaimer of Warranties</p>

            <p className="mb-4">
              YOUR USE OF THE SITE IS AT YOUR SOLE RISK. THE SITE IS PROVIDED
              ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. Y
              COMBINATOR EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER
              EXPRESS, IMPLIED OR STATUTORY, INCLUDING, BUT NOT LIMITED TO THE
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, TITLE AND NON-INFRINGEMENT.
            </p>

            <p className="mb-4">
              Y COMBINATOR MAKES NO WARRANTY THAT (I) THE SITE WILL MEET YOUR
              REQUIREMENTS, (II) THE SITE WILL BE UNINTERRUPTED, TIMELY,
              SECURE, OR ERROR-FREE, OR (III) THE RESULTS THAT MAY BE OBTAINED
              FROM THE USE OF THE SITE WILL BE ACCURATE OR RELIABLE.
            </p>

            <p className="mb-2 font-semibold">Limitation of Liability</p>

            <p className="mb-4">
              <strong>
                YOU EXPRESSLY UNDERSTAND AND AGREE THAT Y COMBINATOR WILL NOT BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                EXEMPLARY DAMAGES, OR DAMAGES FOR LOSS OF PROFITS INCLUDING BUT
                NOT LIMITED TO, DAMAGES FOR LOSS OF GOODWILL, USE, DATA OR OTHER
                INTANGIBLE LOSSES (EVEN IF Y COMBINATOR HAS BEEN ADVISED OF THE
                POSSIBILITY OF SUCH DAMAGES), WHETHER BASED ON CONTRACT, TORT,
                NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, RESULTING FROM: (I)
                THE USE OR THE INABILITY TO USE THE SITE OR ANY RELATED
                INFORMATION; (II) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR
                TRANSMISSIONS OR DATA; (III) STATEMENTS OR CONDUCT OF ANY THIRD
                PARTY (INCLUDING USERS) ON THE SITE; OR (IV) ANY OTHER MATTER
                RELATING TO THE SITE. IN NO EVENT WILL Y COMBINATOR&apos;S TOTAL
                LIABILITY TO YOU FOR ALL DAMAGES, LOSSES OR CAUSES OF ACTION
                EXCEED ONE HUNDRED DOLLARS ($100).
              </strong>
            </p>

            <p className="mb-4">
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN
              WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR
              INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE
              ABOVE LIMITATIONS SET FORTH ABOVE MAY NOT APPLY TO YOU. IF YOU ARE
              DISSATISFIED WITH ANY PORTION OF THE SITE OR WITH THESE TERMS OF
              USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USE OF THE
              SITE.
            </p>

            <p className="mb-4">
              WITHOUT LIMITING THE FOREGOING, IF YOU ARE A USER FROM NEW JERSEY,
              THE &lsquo;DISCLAIMER OF WARRANTIES&rsquo; AND &lsquo;LIMITATION
              OF LIABILITY&rsquo; SECTIONS ABOVE ARE INTENDED TO BE ONLY AS
              BROAD AS IS PERMITTED UNDER NEW JERSEY LAW. IF ANY PORTION OF
              THESE SECTIONS IS HELD TO BE INVALID UNDER NEW JERSEY LAW, THE
              INVALIDITY OF SUCH PORTION SHALL NOT AFFECT THE VALIDITY OF THE
              REMAINING PORTIONS OF THE APPLICABLE SECTION.
            </p>

            <p className="mb-2 font-semibold">
              Dispute Resolution By Binding Arbitration: PLEASE READ THIS
              SECTION CAREFULLY AS IT AFFECTS YOUR RIGHTS.
            </p>

            <p className="mb-2">
              <strong>a. Agreement to Arbitrate</strong>
            </p>

            <p className="mb-4">
              This Dispute Resolution by Binding Arbitration section is referred
              to in this Terms of Use as the &ldquo;Arbitration Agreement.&rdquo;
              You agree that any and all disputes or claims that have arisen or
              may arise between you and Y Combinator, whether arising out of or
              relating to this Terms of Use (including any alleged breach
              thereof), the Site, any advertising, any aspect of the
              relationship or transactions between us, shall be resolved
              exclusively through final and binding arbitration, rather than a
              court, in accordance with the terms of this Arbitration Agreement,
              except that you may assert individual claims in small claims
              court, if your claims qualify. Further, this Arbitration Agreement
              does not preclude you from bringing issues to the attention of
              federal, state, or local agencies, and such agencies can, if the
              law allows, seek relief against us on your behalf. You agree that,
              by entering into this Terms of Use, you and Y Combinator are each
              waiving the right to a trial by jury or to participate in a class
              action. Your rights will be determined by a neutral arbitrator, not
              a judge or jury. The Federal Arbitration Act governs the
              interpretation and enforcement of this Arbitration Agreement.
            </p>

            <p className="mb-2">
              <strong>
                b. Prohibition of Class and Representative Actions and
                Non-Individualized Relief
              </strong>
            </p>

            <p className="mb-4 text-sm italic">
              <strong>
                YOU AND Y COMBINATOR AGREE THAT EACH OF US MAY BRING CLAIMS
                AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS AND NOT AS A
                PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                REPRESENTATIVE ACTION OR PROCEEDING. UNLESS BOTH YOU AND Y
                COMBINATOR AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE
                OR JOIN MORE THAN ONE PERSON&apos;S OR PARTY&apos;S CLAIMS AND
                MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A CONSOLIDATED,
                REPRESENTATIVE, OR CLASS PROCEEDING. ALSO, THE ARBITRATOR MAY
                AWARD RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY
                RELIEF) ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND
                ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF NECESSITATED BY
                THAT PARTY&apos;S INDIVIDUAL CLAIM(S).
              </strong>
            </p>

            <p className="mb-2">
              <strong>c. Pre-Arbitration Dispute Resolution</strong>
            </p>

            <p className="mb-4">
              Y Combinator is always interested in resolving disputes amicably
              and efficiently, and most user concerns can be resolved quickly and
              to the user&apos;s satisfaction by emailing us at{" "}
              <a
                href="mailto:yclegal@ycombinator.com"
                className="text-[#ff6600] hover:underline"
              >
                yclegal@ycombinator.com
              </a>
              . If such efforts prove unsuccessful, a party who intends to seek
              arbitration must first send to the other, by certified mail, a
              written Notice of Dispute (&ldquo;Notice&rdquo;). The Notice to Y
              Combinator should be sent to Y Combinator Management, LLC, 335
              Pioneer Way, Mountain View, CA 94041 Attention General Counsel
              (&ldquo;Notice Address&rdquo;). The Notice must (i) describe the
              nature and basis of the claim or dispute and (ii) set forth the
              specific relief sought. If Y Combinator and you do not resolve the
              claim within sixty (60) calendar days after the Notice is received,
              you or Y Combinator may commence an arbitration proceeding. During
              the arbitration, the amount of any settlement offer made by Y
              Combinator or you shall not be disclosed to the arbitrator until
              after the arbitrator determines the amount, if any, to which you
              or Y Combinator is entitled.
            </p>

            <p className="mb-2">
              <strong>d. Arbitration Procedures</strong>
            </p>

            <p className="mb-4">
              Arbitration will be conducted by a neutral arbitrator in
              accordance with the American Arbitration Association&apos;s
              (&ldquo;AAA&rdquo;) rules and procedures (collectively, the
              &ldquo;AAA Rules&rdquo;), as modified by this Arbitration
              Agreement. For information on the AAA, please visit its website,
              http://www.adr.org. If there is any inconsistency between any term
              of the AAA Rules and any term of this Arbitration Agreement, the
              applicable terms of this Arbitration Agreement will control unless
              the arbitrator determines that the application of the inconsistent
              Arbitration Agreement terms would not result in a fundamentally
              fair arbitration. The arbitrator must also follow the provisions of
              these Terms of Use as a court would. All issues are for the
              arbitrator to decide, including, but not limited to, issues
              relating to the scope, enforceability, and arbitrability of this
              Arbitration Agreement. Although arbitration proceedings are usually
              simpler and more streamlined than trials and other judicial
              proceedings, the arbitrator can award the same damages and relief
              on an individual basis that a court can award to an individual
              under the Terms of Use and applicable law. Decisions by the
              arbitrator are enforceable in court and may be overturned by a
              court only for very limited reasons.
            </p>

            <p className="mb-4">
              Unless Y Combinator and you agree otherwise, any arbitration
              hearings will take place in a reasonably convenient location for
              both parties with due consideration of their ability to travel and
              other pertinent circumstances. If the parties are unable to agree
              on a location, the determination shall be made by AAA. If your
              claim is for $10,000 or less, Y Combinator agrees that you may
              choose whether the arbitration will be conducted solely on the
              basis of documents submitted to the arbitrator, through a
              telephonic hearing, or by an in-person hearing as established by
              the AAA Rules. If your claim exceeds $10,000, the right to a
              hearing will be determined by the AAA Rules. Regardless of the
              manner in which the arbitration is conducted, the arbitrator shall
              issue a reasoned written decision sufficient to explain the
              essential findings and conclusions on which the award is based.
            </p>

            <p className="mb-2">
              <strong>e. Costs of Arbitration</strong>
            </p>

            <p className="mb-4">
              Payment of all filing, administration, and arbitrator fees
              (collectively, the &ldquo;Arbitration Fees&rdquo;) will be
              governed by the AAA Rules, unless otherwise provided in this
              Arbitration Agreement.
            </p>

            <p className="mb-2">
              <strong>f. Confidentiality</strong>
            </p>

            <p className="mb-4">
              All aspects of the arbitration proceeding, and any ruling,
              decision, or award by the arbitrator, will be strictly
              confidential for the benefit of all parties.
            </p>

            <p className="mb-2">
              <strong>g. Severability</strong>
            </p>

            <p className="mb-4">
              If a court or the arbitrator decides that any term or provision of
              this Arbitration Agreement (other than the subsection (b) titled
              &ldquo;Prohibition of Class and Representative Actions and
              Non-Individualized Relief&rdquo; above) is invalid or
              unenforceable, the parties agree to replace such term or provision
              with a term or provision that is valid and enforceable and that
              comes closest to expressing the intention of the invalid or
              unenforceable term or provision, and this Arbitration Agreement
              shall be enforceable as so modified. If a court or the arbitrator
              decides that any of the provisions of subsection (b) above titled
              &ldquo;Prohibition of Class and Representative Actions and
              Non-Individualized Relief&rdquo; are invalid or unenforceable,
              then the entirety of this Arbitration Agreement shall be null and
              void. The remainder of the Terms of Use will continue to apply.
            </p>

            <p className="mb-2">
              <strong>h. Future Changes to Arbitration Agreement</strong>
            </p>

            <p className="mb-4">
              Notwithstanding any provision in this Terms of Use to the
              contrary, Y Combinator agrees that if it makes any future change
              to this Arbitration Agreement (other than a change to the Notice
              Address) while you are a user of the Site, you may reject any such
              change by sending Y Combinator written notice within thirty (30)
              calendar days of the change to the Notice Address provided above.
              By rejecting any future change, you are agreeing that you will
              arbitrate any dispute between us in accordance with the language
              of this Arbitration Agreement as of the date you first accepted
              these Terms of Use (or accepted any subsequent changes to these
              Terms of Use).
            </p>

            <p className="mb-2 font-semibold">Termination</p>

            <p className="mb-4">
              You agree that Y Combinator, in its sole discretion, may suspend
              or terminate your account (or any part thereof) or use of the Site
              and remove and discard any content within the Site, for any reason,
              including, without limitation, for lack of use or if Y Combinator
              believes that you have violated or acted inconsistently with the
              letter or spirit of these Terms of Use. Any suspected fraudulent,
              abusive or illegal activity that may be grounds for termination of
              your use of Site, may be referred to appropriate law enforcement
              authorities. Y Combinator may also in its sole discretion and at
              any time discontinue providing the Site, or any part thereof, with
              or without notice. You agree that any termination of your access
              to the Site under any provision of this Terms of Use may be
              effected without prior notice, and acknowledge and agree that Y
              Combinator may (but has no obligation to) immediately deactivate
              or delete your account and all related information and files in
              your account and/or bar any further access to such files or the
              Site. Termination of your account or access to any component of
              the Site will not terminate Y Combinator&apos;s rights to your
              User Content. Further, you agree that Y Combinator will not be
              liable to you or any third party for any termination of your
              access to the Site.
            </p>

            <p className="mb-2 font-semibold">User Disputes</p>

            <p className="mb-4">
              You agree that you are solely responsible for your interactions
              with any other user in connection with the Site and Y Combinator
              will have no liability or responsibility with respect thereto. Y
              Combinator reserves the right, but has no obligation, to become
              involved in any way with disputes between you and any other user
              of the Site.
            </p>

            <p className="mb-2 font-semibold">General</p>

            <p className="mb-4">
              These Terms of Use constitute the entire agreement between you and
              Y Combinator and govern your use of the Site, superseding any
              prior agreements between you and Y Combinator with respect to the
              Site. These Terms of Use will be governed by the laws of the State
              of California without regard to its conflict of law provisions.
              With respect to any disputes or claims not subject to arbitration,
              as set forth above, you and Y Combinator agree to submit to the
              personal and exclusive jurisdiction of the state and federal
              courts located within San Francisco County, California. The
              failure of Y Combinator to exercise or enforce any right or
              provision of these Terms of Use will not constitute a waiver of
              such right or provision. If any provision of these Terms of Use is
              found by a court of competent jurisdiction to be invalid, the
              parties nevertheless agree that the court should endeavor to give
              effect to the parties&apos; intentions as reflected in the
              provision, and the other provisions of these Terms of Use remain
              in full force and effect. You agree that regardless of any statute
              or law to the contrary, any claim or cause of action arising out
              of or related to use of the Site or these Terms of Use must be
              filed within one (1) year after such claim or cause of action
              arose or be forever barred. A printed version of this agreement
              and of any notice given in electronic form will be admissible in
              judicial or administrative proceedings based upon or relating to
              this agreement to the same extent and subject to the same
              conditions as other business documents and records originally
              generated and maintained in printed form. You may not assign this
              Terms of Use without the prior written consent of Y Combinator,
              but Y Combinator may assign or transfer this Terms of Use, in
              whole or in part, without restriction. The section titles in these
              Terms of Use are for convenience only and have no legal or
              contractual effect. Notices to you may be made via either email or
              regular mail. The Site may also provide notices to you of changes
              to these Terms of Use or other matters by displaying notices or
              links to notices generally on the Site.
            </p>

            <p className="mb-2 font-semibold">Your Privacy</p>

            <p className="mb-4">
              At Y Combinator, we respect the privacy of our users. For details
              please see our Privacy Policy. By using the Site, you consent to
              our collection and use of personal data as outlined therein.
            </p>

            <p className="mb-2 font-semibold">Questions? Concerns?</p>

            <p className="mb-8">
              Please contact us at{" "}
              <a
                href="mailto:yclegal@ycombinator.com"
                className="text-[#ff6600] hover:underline"
              >
                yclegal@ycombinator.com
              </a>{" "}
              to report any violations of these Terms of Use or to pose any
              questions regarding this Terms of Use or the Site.
            </p>
          </section>

          {/* ==================== TRADEMARKS ==================== */}
          <section id="trademarks" className="scroll-mt-24">
            <h3 className="mb-4 font-serif text-2xl font-semibold">
              <strong>TRADEMARKS</strong>
            </h3>

            <p className="mb-4">
              The following is a non-exhaustive list of Y Combinator&apos;s
              trademarks and service marks. The absence of a product or service
              name or logo from this list does not constitute a waiver of Y
              Combinator&apos;s trademark, service mark or other intellectual
              property rights concerning that name or logo.
            </p>

            <p className="mb-8">
              Ad Innovation Conference&trade; Angel Conference&trade;
              AngelConf&trade; Bookface&trade; Female Founder Stories&trade;
              Female Founders Conference&trade; Hacker News&reg; How to Start a
              Startup&trade; Make something people want&trade; Startup
              News&trade; Startup School&trade; Summer Founders
              Program&trade; The Macro&trade; The Patent Pledge&trade; Winter
              Founders Program&trade; Work at a Startup&trade; Y
              Combinator&reg; Y Combinator Continuity&trade; Y Combinator
              Continuity Fund&trade; Y Combinator Fellowship&trade; YC&trade; YC
              Continuity&trade; YC Continuity Fund&trade; YC
              Fellowship&trade; YC Founders&trade; YC Hacks&trade; YC
              Startups&trade; YCC&trade; YCF&trade; YCNYC&trade;
            </p>
          </section>

          {/* ==================== COPYRIGHT ==================== */}
          <section className="scroll-mt-24">
            <h3 className="mb-4 font-serif text-2xl font-semibold">
              Copyright
            </h3>

            <p className="mb-4">
              Copyright &copy; 2005&ndash;2026 Y Combinator.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
