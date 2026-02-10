export default function Hero() {
  return (
    <section
      id="hero"
      className="relative -ml-[calc(50vw-50%)] w-screen overflow-hidden"
    >
      <div className="relative flex h-[90vh] flex-col items-center justify-center px-6">
        <div className="flex max-w-[1200px] flex-col items-center gap-8 mx-auto">
          <h1
            className="text-center font-black uppercase leading-[0.95] tracking-[-0.03em] text-white"
            style={{ 
              fontSize: 'clamp(3rem, 10vw + 1rem, 8rem)',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              textShadow: '0 4px 30px rgba(0,0,0,0.5)'
            }}
          >
            Execution
            <br />
            Is Everything.
          </h1>

          <p
            className="text-center font-['Pretendard'] font-light tracking-wide text-white/70 mt-4"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
          >
            SKKU SPEC — 성균관대학교 창업 학회
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-[bounce_2.5s_ease-in-out_infinite]">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white/70"
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
