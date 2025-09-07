import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
      <section className="service section" id="services">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2 className="text-3xl font-semibold text-gray-800">Services</h2>
            </div>
          </div>
          <div className="row">
            {/* Service Item 1: Frontend Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-code" />
                </div>
                <h4 className="text-lg font-bold text-gray-700">
                  Frontend Development
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Build responsive and interactive websites using HTML, CSS, and
                  JavaScript. I focus on creating seamless user experiences and
                  clean, maintainable code.
                </p>
              </div>
            </div>
            {/* Service Item 1 End */}

            {/* Service Item 2: TypeScript Integration */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-cogs" />
                </div>
                <h4 className="text-lg font-bold text-gray-700">
                  TypeScript Integration
                </h4>
                <p className="text-green-600 text-sm leading-relaxed">
                  Improve your JavaScript projects with TypeScript for better
                  code quality, type safety, and reduced bugs. I help integrate
                  TypeScript into your existing or new projects seamlessly.
                </p>
              </div>
            </div>
            {/* Service Item 2 End */}

            {/* Service Item 3: Next.js Development */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-rocket" />
                </div>
                <h4 className="text-lg font-bold text-gray-700">
                  Next.js Development
                </h4>
                <p className="text-blue-600 text-sm leading-relaxed">
                  Build modern, fast, and SEO-friendly web applications using
                  Next.js. I leverage the power of server-side rendering (SSR)
                  and static site generation (SSG) for optimal performance.
                </p>
              </div>
            </div>
            {/* Service Item 3 End */}

            {/* Service Item 4: UI/UX Design */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-paint-brush" />
                </div>
                <h4 className="text-lg font-bold text-gray-700">
                  UI/UX Design
                </h4>
                <p className="text-indigo-600 text-sm leading-relaxed">
                  Create intuitive and user-friendly interfaces with a focus on
                  responsive design. I ensure your website looks great on all
                  devices and provides an excellent user experience.
                </p>
              </div>
            </div>
            {/* Service Item 4 End */}

             {/* Service Item 5: Web Designing */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-laptop" />
          </div>
            <h4 className="text-lg font-bold text-gray-700">
            Web Designing
            </h4>
          <p className="text-indigo-600 text-sm leading-relaxed">
         Build a powerful online presence with our expert web design services.
         I craft a visually stunning websites that not only captivate visitors 
         but also provide a user experience, ensuring your business in the 
         digital world. 
               </p>
             </div>
            </div>
            {/* Service Item 5 End */}

            {/* Service Item 6: Responsive Web Design */}
            <div className="service-item padd-15">
              <div className="service-item-inner">
                <div className="icon"><i className="fa fa-mobile" />
                </div>
                <h4 className="text-lg font-bold text-gray-700">
                  Responsive Web Design
                </h4>
                <p className="text-orange-600 text-sm leading-relaxed">
                  Ensure your website looks great on all devices with our
                  responsive web design services. I build mobile-first websites
                  that provide a seamless experience on smartphones, tablets,
                  and desktops.
                </p>
              </div>
            </div>
            {/* Service Item 6 End */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
