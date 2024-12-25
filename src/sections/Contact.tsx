import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20 relative z-50">
      <div className="container relative z-50">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left">
          <div
            className="absolute inset-0 opacity-5 -z-10 pointer-events-none"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                I&apos;m always open to discussing product design work or
                partnerships. Let&apos;s create something amazing together.
              </p>
              <p className="text-sm mt-2 md:text-base">
                I&apos;d like to connect with you.
              </p>
            </div>
            <div className="relative z-50">
              <a
                href="mailto:abhishek23main@gmail.com?subject=Contact%20Request&body=Hello%2C%20I%20would%20like%20to%20connect%20with%20you."
                role="button"
                className="relative z-50 text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 mt-2"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
