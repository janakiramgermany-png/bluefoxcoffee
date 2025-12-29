export default function Hero() {
  return (
    <section
      className="
        w-full
        bg-[#f9fbfd]
        flex
        items-center
        justify-center
        px-6
        py-24
        md:py-32
      "
    >
      <div className="max-w-3xl text-center">
        {/* Heading */}
        <h1
          className="
            text-4xl
            md:text-5xl
            font-semibold
            leading-tight
            tracking-tight
            text-slate-900
            mb-5
          "
        >
          Blue Fox Coffee
        </h1>

        {/* Subtitle */}
        <p
          className="
            text-base
            md:text-lg
            text-slate-600
            max-w-xl
            mx-auto
            mb-10
          "
        >
          Crafted brews. Calm vibes. Your daily coffee ritual.
        </p>

        {/* CTAs */}
        <div className="flex justify-center gap-4">
          <button
            className="
              px-8
              py-3
              rounded-md
              bg-blue-700
              text-white
              text-sm
              font-medium
              hover:bg-blue-800
              transition
            "
          >
            View Menu
          </button>

          <button
            className="
              px-8
              py-3
              rounded-md
              border
              border-blue-700
              text-blue-700
              text-sm
              font-medium
              hover:bg-blue-50
              transition
            "
          >
            Visit Us
          </button>
        </div>
      </div>
    </section>
  );
}