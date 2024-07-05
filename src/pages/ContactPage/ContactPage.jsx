import './ContactPage.css';
import ContactForm from '../../components/ContactForm/ContactForm';
import MemojiConnect from "../../assets/memoji-connect-coffee.png";


export default function ContactPage() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-20 lg:overflow-visible lg:px-0">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div className=" lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:gap-x-8 lg:px-8">
      <img
            src={MemojiConnect}
            alt="Memoji with coffee and laptop."
            className="rounded-lg bg-none p-4"
          />
      </div>    
      <div className=" lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
       <ContactForm />
      </div>
      </div>
        </div>
      </div>
  );
}
