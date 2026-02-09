import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Y Combinator Security and Reporting Security Issues | Y Combinator",
  description: "Report security issues",
};

export default function SecurityPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-24 pt-16">
      <h1 className="mb-8 text-center font-serif text-[40px] font-medium leading-[1.2] text-[#16140f] md:text-[60px] md:leading-[75px]">
        Y Combinator Security
      </h1>

      <div className="mx-auto flex max-w-[900px] flex-col gap-16 md:flex-row md:gap-12">
        <div className="flex-1">
          <p className="mb-4 font-sans text-base leading-relaxed text-[#16140f]">
            For security issues with Hacker News, please visit{" "}
             <a
               href="https://news.ycombinator.com/security.html"
               target="_blank"
               rel="noopener noreferrer"
               className="text-[#ff6600] underline hover:opacity-70"
             >
               https://news.ycombinator.com/security.html
             </a>
            .
          </p>

          <p className="mb-6 font-sans text-base leading-relaxed text-[#16140f]">
            Y Combinator considers the security of our systems and applications
            to be of the utmost importance.
          </p>

          <h4 className="mb-3 mt-8 font-sans text-lg font-semibold text-[#16140f]">
            Reporting Security Vulnerabilities
          </h4>
          <p className="mb-6 font-sans text-base leading-relaxed text-[#16140f]">
            Y Combinator welcomes input from the security research community.
            Through responsible disclosure we hope to improve the security of
            our applications and user data. To that end, we encourage security
            researchers to notify us of any potential vulnerabilities uncovered
            to security@ycombinator.com. Reports received through this channel
            should receive a prompt reply and if you do not receive a timely
            response we ask that you please attempt to contact us again. To
            protect our users we also request that you please refrain from
            sharing information about any potential vulnerabilities with anyone
            outside of YC. Once we have confirmed the vulnerability and
            mitigation we hope that you will join us in an announcement.
          </p>

          <h4 className="mb-3 mt-8 font-sans text-lg font-semibold text-[#16140f]">
            Exclusions
          </h4>
          <p className="mb-3 font-sans text-base leading-relaxed text-[#16140f]">
            While researching, we&apos;d like to ask you to refrain from:
          </p>
          <ul className="mb-6 ml-6 list-disc space-y-1 font-sans text-base leading-relaxed text-[#16140f]">
            <li>Denial of service</li>
            <li>Spamming</li>
            <li>
              Social engineering (including phishing) of Y Combinator staff or
              contractors
            </li>
            <li>
              Any physical attempts against Y Combinator property or data
              centers
            </li>
          </ul>

          <h4 className="mb-3 mt-8 font-sans text-lg font-semibold text-[#16140f]">
            Bug Bounties
          </h4>
          <p className="mb-6 font-sans text-base leading-relaxed text-[#16140f]">
            We do pay bug bounties at our discretion for significant
            vulnerabilities responsibly disclosed.
          </p>

          <h4 className="mb-3 mt-8 font-sans text-lg font-semibold text-[#16140f]">
            Thanks!
          </h4>
          <p className="mb-6 font-sans text-base leading-relaxed text-[#16140f]">
            Thanks to the following people who have discovered and responsibly
            disclosed security holes in Y Combinator software.
          </p>
        </div>

        <div className="flex-1 border-l-0 pl-0 md:border-l md:border-[#ddd] md:pl-8">
          <SecurityEntry
            date="20180304"
            name="Arkadiy Tetelman"
            url="https://twitter.com/arkadiyt"
            description="Our signature computation in SSO was vulnerable to an http parameter pollution attack that allowed account takeovers."
          />
          <SecurityEntry
            date="20180313"
            name="Wai Yan Aung"
            url="https://www.linkedin.com/in/waiyanaun9/"
            description="A static website that we served via S3 was leaking staff operating system usernames and ids."
          />
          <SecurityEntry
            date="20180429"
            name="Mohamed Sayed"
            url="https://www.facebook.com/FlEx0Geek"
            description="The YC blog's API was left enabled after a migration, no data was exposed but it should have been disabled."
          />
          <SecurityEntry
            date="20180501"
            name="Wai Yan Aung"
            url="https://www.linkedin.com/in/waiyanaun9/"
            description="Reported lack of SPF records on unused domains."
          />
          <SecurityEntry
            date="20180501"
            name="Faizal Abroni"
            url="https://www.linkedin.com/in/faizal-abroni-b87310110/"
            description="Reported that an unused subdomain could be hijacked via AWS Cloudfront"
          />
          <SecurityEntryNoLink
            date="20180606"
            name="nthack"
            description="Reported XSS vulnerabilities on www.workatastartup.com, fixed quickly. No data was exposed."
          />
          <SecurityEntry
            date="20180917"
            name="Philip Thomas"
            url="https://www.philipithomas.com/"
            description="Reported a vulnerability in Startup School that made founder email addresses accessible to other Startup School founders."
          />
          <SecurityEntry
            date="20181023"
            name="Philip Thomas"
            url="https://www.philipithomas.com/"
            description="Reported a vulnerability in our application that leaked recommendations that were left on previous applications."
          />
          <SecurityEntry
            date="20200714"
            name="Pritam Mukherjee"
            url="https://www.linkedin.com/in/pritam-mukherjee-urvil-b75ab9b9/"
            description="Reported an endpoint that needed to be rate limited."
          />
          <SecurityEntry
            date="20200720"
            name="Shiraz Ali Khan"
            url="https://www.linkedin.com/in/shiraz-ali-khan-1ba508180"
            description="Reported a missing DMARC record."
          />
          <SecurityEntry
            date="20201124"
            name="Anil Bhatt"
            url="http://linkedin.com/in/anil-bhatt-2760a1114"
            description="Reported that we were not stripping EXIF data from user-uploaded images"
          />
          <SecurityEntry
            date="20210524"
            name="Kuter Dinel"
            url="https://www.linkedin.com/in/kuter-dinel-1987b81b1/"
            description="Discovered a vulnerability in how we use Algolia indexes"
          />
          <SecurityEntry
            date="20220121"
            name="Shishir Shrestha"
            url="http://shresthashishir.com.np/"
            description="Discovered a stored XSS vulnerability."
          />
          <SecurityEntry
            date="20230812"
            name="Nessim Jerbi"
            url="https://twitter.com/jerbi_nessim"
            description="Discovered multiple XSS issues."
          />
          <SecurityEntry
            date="20231211"
            name="Kuter Dinel"
            url="https://www.linkedin.com/in/kuter-dinel-1987b81b1/"
            description="Discovered an OAuth Client Impersonation Attack"
          />
        </div>
      </div>
    </section>
  );
}

function SecurityEntry({
  date,
  name,
  url,
  description,
}: {
  date: string;
  name: string;
  url: string;
  description: string;
}) {
  return (
    <div className="mb-4">
      <p className="font-sans text-base text-[#16140f]">
        <strong>{date}</strong>{" "}
        <a
          href={url}
          className="text-[#ff6600] underline hover:opacity-70"
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </p>
      <ul className="ml-6 list-disc font-sans text-base leading-relaxed text-[#16140f]">
        <li>{description}</li>
      </ul>
    </div>
  );
}

function SecurityEntryNoLink({
  date,
  name,
  description,
}: {
  date: string;
  name: string;
  description: string;
}) {
  return (
    <div className="mb-4">
      <p className="font-sans text-base text-[#16140f]">
        <strong>{date}</strong> <strong>{name}</strong>
      </p>
      <ul className="ml-6 list-disc font-sans text-base leading-relaxed text-[#16140f]">
        <li>{description}</li>
      </ul>
    </div>
  );
}
