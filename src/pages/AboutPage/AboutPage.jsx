import "./AboutPage.css";
import LogoMemoji from "../../assets/logo-memoji.png";
import ReviewsBlurb from "../../components/ReviewsBlurb/ReviewsBlurb";

export default function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-4 sm:py-20 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-8">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <section className="text-xl leading-8 text-gray-700">
                Hello, I'm Jessica! This shop first opened in 2019 as a
                passion project to practice and improve my design skills.
                <br />
                <br />
                Swiftly named the Pintern after a quick poll amongst friends.
                The name represented ecommerce & design 
                being new and exciting spaces for me, and of course that I'm into pins! Everyday
                continues to bring opportunities for learning and
                improvement. The Pintern is a space for me to deliberately practice, create, and play.
                I'm so grateful for the support received.
                <br />
                <br />These pins are, more than
                anything, for humans that enjoy *the process* and for the lovers
                of creating & creators.
              </section>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 p-4 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            src="https://the-pintern.s3.us-east-2.amazonaws.com/assets/jess-1.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://the-pintern.s3.us-east-2.amazonaws.com/assets/jess-2.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://the-pintern.s3.us-east-2.amazonaws.com/assets/jess-3.png"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://the-pintern.s3.us-east-2.amazonaws.com/assets/jess-4.png"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
        <div className="mt-8 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <h2 className="font-noto-sans-sinhala tracking-wide font-bold text-3xl text-zinc-800 sm:text-4xl">
              Quick Facts:
            </h2>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <ul role="list" className="mt-4 space-y-2 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                    🏖️🗽 Based in Long Island, NY
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                    🇸🇻 🇺🇸 Salvadoran American
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      👩🏼‍💻🧰 Developer by day & night
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      ✏️🕸️ Design generalist
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      📔💡 Creation of this shop was inspired by a book & blog
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      🎁🔦 Featured on BuzzFeed & MiTu
                    </strong>{" "}
                  </span>
                </li>
                <ul className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      🧷📍Community Vendor @ 
                      <li>
                      Bronx Night Market, Colored Colors LI Art Marketplace, College Campus Events
                      </li>
                    </strong>{" "}
                  </span>
                </ul>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      📦📬 500+ Orders Shipped across 14 states
                    </strong>{" "}
                  </span>
                </li>
              </ul>
              <br />
          <img
            src="https://the-pintern.s3.us-east-2.amazonaws.com/assets/display-sketch.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://the-pintern.s3.us-east-2.amazonaws.com/assets/display-actual.png"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
            </div>
          </div>
        </div>
      </div>
      <ReviewsBlurb />
    </div>
  );
}
