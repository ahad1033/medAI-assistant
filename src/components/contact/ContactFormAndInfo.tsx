import { MapPin, Send } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import AnimatedSection from "../animation/AnimatedSection";

const officeLocations = [
  {
    city: "Dhaka",
    address: "House 10, Road 2, Gulshan 1",
    zipCode: "Dhaka 1212",
    phone: "01942382271",
  },
  {
    city: "Narayanganj",
    address: "25 Bangabandhu Road, Sadar",
    zipCode: "Narayanganj 1400",
    phone: "01636428995",
  },
];

const ContactFormAndInfo = () => {
  return (
    <AnimatedSection className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help you?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us more about your question or concern..."
                className="min-h-[120px]"
              />
            </div>
            <Button className="w-full" size="lg">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Office Locations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Office Locations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {officeLocations.map((office, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="font-semibold">{office.city}</h4>
                  <p className="text-sm text-muted-foreground">
                    {office.address}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {office.zipCode}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    {office.phone}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Emergency Notice */}
          <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                    Medical Emergency
                  </h4>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    If you&apos;re experiencing a medical emergency, please call
                    999 or your local emergency services immediately. Do not use
                    this contact form for urgent medical situations.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactFormAndInfo;
