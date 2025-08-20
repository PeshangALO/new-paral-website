"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { getAssetPath } from "@/utils/assets";

import { usePathname } from "next/navigation";

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pathname = usePathname();
  const ifKontaktOssPage = pathname === '/kontakt-oss/';

  const [formData, setFormData] = useState({
    company: "",
    email: "",
    title: "",
    phone: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState({
    message: "",
    isError: false
  });

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  async function submitContact(formData: unknown) {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const payload = await res.json().catch(() => ({ error: 'Invalid JSON' }));
    if (!res.ok) throw new Error(payload.error || 'Failed to send');
    return payload;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ message: "", isError: false });

    const mappedData = {
      firmname: formData.company,
      customer_email: formData.email,
      subject: formData.title,
      message: formData.message,
      tlf: formData.phone,
    };

    try {
      const responseData = await submitContact(mappedData);
      setFormStatus({ message: "Email sent successfully!", isError: false });
    } catch (error: any) {
      setFormStatus({ message: error?.message || "Failed to send email", isError: true });
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <>
      <section id="kontakt-oss" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#020a2047] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src={getAssetPath("/images/shape/shape-dotted-light.svg")}
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src={getAssetPath("/images/shape/shape-dotted-dark.svg")}
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 lg:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black  lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Ta kontakt uten forpliktelser!
              </h2>

              {formStatus.message && (
                <div
                  className={`mb-4 p-4 rounded ${formStatus.isError
                      ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100'
                      : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100'
                    }`}
                >
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Bedrift navn"
                    required
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Tittel"
                    required
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Telefon nummer"
                    required
                    className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Beskjed"
                    rows={ifKontaktOssPage ? 11 : 4}
                    required
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    aria-label="send message"
                    className="flex gap-3 items-center bg-white border-2 border-black rounded-lg px-6 py-3 text-black transition-all duration-[200ms] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_gray] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-white dark:border-white"
                  >
                    {isSubmitting ? 'Sender...' : 'Send'}
                    <svg
                      className="fill-current"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Adresse
              </h2>

              <div className="5 mb-7">
                <h3>Vår lokasjon</h3>
                <p className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Gimlemoen 15, 4630 Kristiansand
                </p>
              </div>
              <div className="5 mb-7">
                <h3>Email Address</h3>
                <p className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  <a href="mailto:kontakt@paral.no">kontakt@paral.no</a>
                </p>
              </div>

              {ifKontaktOssPage ? (
                <div className="mt-10 mb-7">
                  <h3 className="mb-4">Finn oss på kartet</h3>
                  <div className="w-full h-48 md:h-64 lg:h-80 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">

                    <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2093.7872365033765!2d8.002230!3d58.172200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463816cc87d5983b%3A0xf7da11b3d98a799!2sGimlemoen%2015%2C%204630%20Kristiansand!5e0!3m2!1sen!2sno!4v1665584783230!5m2!1sen!2sno&zoom=20"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        title="Our location"
                      ></iframe>
                    </div>
                  </div>
                </div>
              ) : null}

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;