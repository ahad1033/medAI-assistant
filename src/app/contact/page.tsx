import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";

import FAQ from "@/components/contact/FAQ";
import Hero from "@/components/shared/Hero";
import CallToAction from "@/components/shared/CallToAction";
import ContactMethods from "@/components/contact/ContactMethods";
import ContactFormAndInfo from "@/components/contact/ContactFormAndInfo";

export default function ContactPage() {
  return (
    <div>
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Hero
          title={
            <>
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </>
          }
          description=" Have questions about MedAI Assistant? Need technical support? Want
            to partner with us? We're here to help and would love to hear
            from you."
        />

        <ContactMethods />

        <ContactFormAndInfo />

        <FAQ />

        <CallToAction
          title="We're Here to Help"
          description="Our support team typically responds to inquiries within 24 hours
            during business days. For urgent technical issues, please use our
            live chat feature for immediate assistance."
          bcClass="bg-green-800 dark:bg-green-950"
        />
      </div>

      <Footer />
    </div>
  );
}
