export default function Hero() {
  return (
    <section
      id="hero"
      className="relative -ml-[calc(50vw-50%)] w-screen overflow-hidden"
    >
      <div className="flex h-[90vh] flex-col items-center justify-center px-6">
        <div className="flex max-w-[1000px] flex-col items-center gap-12 mx-auto">
          <h1
            className="text-center font-['Source_Serif_4',serif] font-normal leading-[1.1] text-[#16140f]"
            style={{ fontSize: 'clamp(2.5rem, 5vw + 1rem, 5.25rem)' }}
          >
            YC turns builders
            <br />
            into <em className="italic">formidable founders</em>
            <sup className="ml-1 align-super font-normal not-italic" style={{ fontSize: 'clamp(0.875rem, 2vw + 0.25rem, 1.125rem)' }}>
              [1]
            </sup>
          </h1>

          <div
            className="text-center"
            style={{ maxWidth: 'clamp(280px, 60vw, 420px)' }}
          >
            <p
              className="text-left font-['Source_Serif_4',serif] italic leading-[1.6] text-[#16140f]"
              style={{ fontSize: 'clamp(1rem, 2vw + 0.25rem, 1.125rem)' }}
            >
              <span className="not-italic">[1]</span>{' '}
              &ldquo;A formidable person is one who seems like they&apos;ll get what they want, regardless of whatever obstacles are in the way.&rdquo;
            </p>
            <cite
              className="mt-2 block text-right font-['Source_Serif_4',serif] italic not-italic leading-[1.6] text-[#16140f]"
              style={{ fontSize: 'clamp(1rem, 2vw + 0.25rem, 1.125rem)' }}
            >
              &mdash; Paul Graham
            </cite>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-[bounce_2.5s_ease-in-out_infinite]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#16140f]"
          >
            <path
              d="M6 8L10 12L14 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
