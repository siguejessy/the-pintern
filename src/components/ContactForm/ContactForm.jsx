import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function ContactForm() {
  return (
    <form>
        <h2 className="font-noto-sans-sinhala tracking-wide font-bold text-3xl text-zinc-800 sm:text-4xl">
          📧 Connect with me
            </h2>
      <div className="space-y-4 p-4">
        <div className=" border-gray-900/10 ">
          <div className=" grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
        
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  placeholder="Write me an email..."
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
            <div className="sm:col-span-4">
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">your email:</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=""
                    autoComplete="email"
                    trim="true"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Send
        </button>
      </div>
        </div>

        <div className="border-t border-gray-900/10 pb-12 ">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Subscribe</h2>
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="comments"
                      name="comments"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="subscribe" className="font-medium text-gray-500">
                    <p>Receive shop updates.</p>
                    </label>
                  </div>
                </div>
        </div>
      </div>

    </form>
  )
}
