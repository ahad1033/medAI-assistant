"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";

import { Header } from "@/components/shared/Header";
import { getServiceConfig } from "@/lib/service-config";
import { ChatInterface } from "@/components/chat/ChatInterface";

export default function ChatPage() {
  const params = useParams();
  const serviceId = params.service as string;
  const serviceConfig = getServiceConfig(serviceId);

  if (!serviceConfig) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The requested service could not be found.
        </p>
        <Link href="/">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="container mx-auto px-4 pt-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${serviceConfig.color}`}
            >
              <serviceConfig.icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{serviceConfig.title}</h1>
              <p className="text-muted-foreground">
                {serviceConfig.description}
              </p>
            </div>
          </div>
        </div>

        <ChatInterface serviceId={serviceId} />
      </div>
    </>
  );
}
