export default function ArtificialJoy() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] px-5 pt-10 pb-32">

      {/* Container */}
      <article className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">
          The Artificial Joy Residing in our Home
        </h1>

        {/* Author Section — Medium style */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div> {/* Avatar placeholder */}
          <div>
            <p className="text-sm font-medium">Kristel Reyes</p>
            <p className="text-xs text-gray-500">Oct 30, 2025 · 6 min read</p>
          </div>
        </div>

        {/* Header Image — Full width, Medium style */}
        <div className="w-full h-[380px] md:h-[460px] mb-12 overflow-hidden rounded-lg">
          <img
            src="/BLOG1.jpg"
            alt="Blog Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body — Medium typography */}
        <div className="prose prose-lg prose-gray max-w-none leading-relaxed">

          <p>
            Would you ask someone to get out of the pool while they’re having so much fun,
            even if they just jumped in a few minutes ago?
          </p>

          <p>
            <i>Would you let them enjoy the water or save them from its depths?</i>
          </p>

          <p>
            The same thing keeps happening in our family—my sister initiating the AI-assisted
            image generation, and my parents rejoicing every result fed to them, leaving me
            with the dilemma of whether to cut their happiness short or just let them be.
          </p>

          <p>
            However, it’s getting out of hand—they use such scarily altered images as their
            display photos and brag about them in their profiles with a
            <b> #feelingblessed </b> caption. But blessed who, exactly?
          </p>

          <h3 className="text-2xl font-semibold mt-10 mb-4 leading-snug">
            Who benefits from these AI-generated images with real people’s faces plastered
            on a robot’s canvas, apart from our distorted perception of beauty?
          </h3>

          <p>
            This emerging technological epidemic, disguised as casual entertainment, reveals
            a gap in awareness about the real dangers of AI.
          </p>

          <p>
            According to Howarth (2025), AI usage increased by 84.58% in the last 12 months—
            ChatGPT alone accumulated 5.4 billion visits every month as of August this year.
            Locally, Google’s Gemini also made noise in the Philippines due to its newly
            introduced image generation feature.
          </p>

          <p>
            Reyes (2025) reported that Filipinos are the top users of generative AI,
            producing 25.5 million images in just a few days. It’s wild how trends move fast
            here—Filipinos are always online, always shifting from one trend to another.
          </p>

          <p>
            However, it’s alarming to know that as easy as it is to upload a photo to an AI
            server, anyone can also be a victim. That’s why having family members who
            actively engage in such image generation worries me.
          </p>

          <p>
            These AI tools don’t just contribute to environmental strain due to massive water
            consumption for cooling—they also risk exposing my family’s physical identities
            to potential misuse.
          </p>

          <p>Who would want that for the people they love?</p>

          <p>
            So, I tried starting small. I warned my sister about AI’s environmental impact.
            <i>Well, it didn’t work.</i> She laughed it off.
          </p>

          <p className="font-semibold">
            But conversations like this shouldn’t end with a shrug—these deserve deeper
            reflection and meaningful change.
          </p>

          <p>
            Let’s start with the people closest to us—family, neighbors, and the online
            communities we interact with. Let’s speak up and encourage our leaders to take
            action as well.
          </p>

          <p>
            Let’s begin the conversation, and more importantly, end it with compassion and
            purpose.
          </p>

          <p>
            That way, we don’t need to drag people out of the pool—we just need to teach
            them how to swim.
          </p>

          <h4 className="mt-10 font-semibold">References</h4>
          <p>
            <a href="https://share.google/M7Zg9Aj5WHf1ZUE9" className="text-green-700 underline">
              https://share.google/M7Zg9Aj5WHf1ZUE9
            </a>
            <br />
            <a href="https://share.google/7QSNGIHnM2PdrUoKFI" className="text-green-700 underline">
              https://share.google/7QSNGIHnM2PdrUoKFI
            </a>
          </p>
        </div>

      </article>
    </main>
  );
}
