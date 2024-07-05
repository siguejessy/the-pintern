import './ContactPage.css';
import ContactForm from '../../components/ContactForm/ContactForm';
export default function ContactPage() {
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
       <ContactForm />
      </div>
        </div>
      </div>
  );
}
