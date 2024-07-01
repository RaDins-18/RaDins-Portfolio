"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useForm, ValidationError } from '@formspree/react';

import { motion } from "framer-motion";

const Contact = () => {
  const [state, handleSubmit] = useForm("xnnaqagg");
  if (state.succeeded) {
    return <p className="h-[80vh] flex justify-center items-center text-4xl text-center">Message sent successfully!</p>;
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }}
      className="py-6"
    >
      <div className="container mx-auto flex justify-center">
        {/* form */}
        <div className="xl:w-[84%] order-2 xl:order-none">
          <form
            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            onSubmit={handleSubmit}
          >
            <h3 className="text-4xl text-accent">Let's work together</h3>
            <p className="text-white/60">
              Ready to turn ideas into reality? Let's connect and create something amazing together!
            </p>
            {/* input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" name="Firstname" placeholder="Firstname" />
              <Input type="lastname" name="Lastname" placeholder="Lastname" />
              <div className="grid gap-3">
                <Input type="email" name="Email" placeholder="Email address" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="ml-[18px]" />
              </div>
              <Input type="phone" name="Phone" placeholder="Phone number" />
            </div>
            {/* select */}
            <Select name="Service">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selects a service"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="web development">Web Development</SelectItem>
                  <SelectItem value="wordpress website">Wordpress Website</SelectItem>
                  <SelectItem value="python program">Python Program</SelectItem>
                  <SelectItem value="shopify store">Shopify Store</SelectItem>
                  <SelectItem value="ui/ux design">UI/UX Design</SelectItem>
                  <SelectItem value="logo design">Logo Design</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* textarea */}
            <Textarea
              className="h-[200px]"
              placeholder="Type your message here."
              name="message"
            />
            {/* btn */}
            <Button size="md" className="max-w-40" type="submit" disabled={state.submitting}>Send message</Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;