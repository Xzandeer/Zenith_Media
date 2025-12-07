export default function NotPosting() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] py-16 px-4">
      {/* Document Container */}
      <article className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12 leading-relaxed border border-gray-200">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#b23b23] mb-2">
          Not Posting Everything Anymore.. I guess?
        </h1>

        {/* Author */}
        <p className="text-gray-500 mb-8 text-sm">
          <span className="font-medium">By Princess Czyrah Jubilo</span> — {new Date().toLocaleDateString()}
        </p>

        {/* Thumbnail */}
        <div className="w-full h-64 md:h-80 overflow-hidden rounded-xl mb-10">
          <img
            src="/NOTPOSTING.jpg"
            alt="Blog Thumbnail"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-neutral prose-lg max-w-none">
          <p>
            Back in senior high school, I used to post everything. Every. Single. Thing. 
            I posted about my quiz results, random selfies in class, screenshots of funny 
            conversations, even my late-night thoughts when school got stressful. My feed 
            used to be a timeline of my everyday life. I didn’t think too much about it 
            because posting just felt natural to me. Maybe I liked the feeling of being 
            seen, or maybe it was my way of documenting memories I didn’t want to forget.
          </p>

          <p>
            If you follow me on my social media, specifically my private account, you’d 
            see over three thousand posts that basically tell the story of my life. Every 
            scroll down feels like a time machine and a reminder of how open and expressive 
            I used to be. But then you’d also notice that my last post was months ago. 
            Because somewhere along the way, posting started to feel like a chore.
          </p>

          <p>
            What used to be fun slowly became tiring. I’d take photos or write captions 
            and end up deleting them before I even hit the post button. It's not that I 
            stopped caring, I just stopped feeling the need to show everything. These days, 
            I only post when I need to clear up my phone storage. Like, literally just to 
            make space. I stopped posting not because I have less to say, but because I’ve 
            learned that not everything needs to be shared.
          </p>

          <p>
            Though, I’d be lying if I said I’ve completely stopped. There are days when I 
            rant or overshare on my private account, especially when life gets too heavy. 
            I can’t always keep it to myself because sometimes posting feels like the only 
            way to breathe. But even then, I know those posts don’t define me. You can 
            scroll through all my words and still not really know who I am outside the screen.
          </p>

          <p>
            So maybe I haven’t really stopped posting everything. Maybe I’m just posting 
            differently now, less for attention, more for relief. Less for others, more for 
            myself. It’s funny, really. I keep saying I’m done with posting, but somehow, 
            I always find my way back.
          </p>

          <p>
            So yes, I still post sometimes. My rants, random thoughts, and memories. But I 
            do it on my own terms. I no longer feel the need to share everything, and that’s 
            okay. I guess that’s what makes this title make sense, or not? I’m not posting 
            everything anymore... I guess? Because even when I say I’m done sharing, there’s 
            still a part of me that wants to be heard, even just a little.
          </p>
        </div>
      </article>
    </main>
  );
}
