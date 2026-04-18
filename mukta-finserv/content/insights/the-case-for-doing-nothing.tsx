import type { Post } from "@/lib/insights";

const post: Post = {
  slug: "the-case-for-doing-nothing",
  title: "The Case for Doing Nothing",
  dek: "Why some of the best quarters we have for a client portfolio are the quarters in which nothing is done at all.",
  category: "Behavior",
  publishedAt: "2024-01-10",
  readMinutes: 4,
  author: { name: "[ Partner Name ]", role: "Managing Partner" },
  body: (
    <>
      <p>
        A senior client called last month, three weeks after the quarterly
        review, slightly irritated. "The letter says no changes recommended.
        That is the second quarter in a row. What am I paying you for?"
      </p>
      <p>
        It is a fair question. It is also the wrong one. The answer is that
        you are paying us, in part, for the quarters when we do not change
        anything — and for the discipline to say so clearly in writing.
      </p>
      <blockquote>
        Activity feels like effort. Patience looks like laziness. The market
        rewards the second and punishes the first, over long enough time.
      </blockquote>
      <h2>Why the bias is towards action</h2>
      <p>
        Advisors are under a peculiar professional pressure: the incentive
        to <em>appear</em> to be earning our fee is to do things. Trades.
        Switches. New schemes. Rebalancing at every tremor. The client can
        see the activity. The outcome is less legible, and arrives years
        later.
      </p>
      <p>
        In practice, well-built portfolios generally need one or two
        adjustments a year. Not ten. Not thirty. Anything more than that is
        usually the advisor's behaviour, not the client's need.
      </p>
      <h2>When we do act</h2>
      <p>
        We act when one of three things changes: the client's life (a goal
        arrives, a goal is met, an inheritance, a health event); the asset
        class (a structural, not cyclical, shift); or the product (a change
        in mandate, manager, or costs that materially alters the case we
        made for it).
      </p>
      <p>
        Every other quarter, we write a short note that says, effectively,
        "nothing has changed — and neither should anything in your
        portfolio". We understand it reads as uneventful. That is rather the
        point.
      </p>
    </>
  ),
};

export default post;
