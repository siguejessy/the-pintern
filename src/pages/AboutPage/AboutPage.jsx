import "./AboutPage.css";
import LogoMemoji from "../../assets/logo-memoji.png";
import ReviewsBlurb from "../../components/ReviewsBlurb/ReviewsBlurb";

export default function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-20 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <section className="text-xl leading-8 text-gray-700">
                Greetings from the Pintern! This shop first opened in 2019 as a
                passion project to feed multiple curiosities, passions, and the
                wallet 😉
                <br />
                <br />
                Named the Pintern as a pun because this e-commerce & product
                design space was new and exciting to me. I wanted to be cleverly
                associated to the very thing I’d specialize in. Everyday
                brought, and continues to bring, an opportunity to learn and
                improve along fellow pin-slingers, small business owners,
                graphic & product designers, friends. I’ve enjoyed branding,
                designing physical products, and now solving problems with code
                thanks to The Pintern.
                <br />
                <br />I take a lot of joy from the process of ideation and
                creating, whether it be in the physical space as pins or in the
                digital space as this website. These pins are, more than
                anything, for humans that enjoy *the process* and for the lovers
                of creating & creators.
              </section>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 -ml-8 p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            src={LogoMemoji}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-none"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
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
                      📔💡 A book & a blog inspired the creation of this shop
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
              <div className="mt-8 grid grid-cols-2 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 -ml-8 p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            src={LogoMemoji}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-none"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewsBlurb />
    </div>
  );
}
