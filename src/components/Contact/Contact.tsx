import ContactForm from "@/components/ContactForm/ContactForm";
import SectionHeader from "@/ui/SectionHeader";
import Image from "next/image";

const Contact = () => {
  return (
    <div id="contact" className="relative">
      <Image
        alt="contact us background"
        src={"/common-bg.svg"}
        fill
        className="size-full z-[-1]"
      />

      <div className="flex-center flex-col">
        <SectionHeader
          title="contact"
          description="Feel free to reach me out through submitting the form below and i will respond as fast as possible"
        />

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
