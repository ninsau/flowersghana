import Link from "next/link";

const ContactComponent = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="divide-y-2 divide-gray-200">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                   Enquiries
                  </h3>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Contact name</dt>
                      <dd>Kojo</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd><Link href="tel:+233242877574">+233 (242) 877574</Link></dd>
                    </div>
                  </dl>
                  <dl className="mt-2 text-base text-gray-500">
                    <div>
                      <dt className="sr-only">Contact name</dt>
                      <dd>Kwabena</dd>
                    </div>
                    <div className="mt-1">
                      <dt className="sr-only">Phone number</dt>
                      <dd><Link href="tel:+233209859591">+233 (242) 877574</Link></dd>
                    </div>
                  </dl>
                </div>
              
              </div>
            </div>
            <div className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Locations
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Accra
                  </h3>
                  <div className="mt-2 text-base text-gray-500">
                    <p>Spintex</p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    <p>Osu</p>
                  </div>
                  <div className="mt-2 text-base text-gray-500">
                    <p>East Legon</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Kumasi
                  </h3>
                  <div className="mt-2 text-base text-gray-500">
                    <p>KNUST</p>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
