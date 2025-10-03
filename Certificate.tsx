
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Twitter, Facebook, Instagram, PartyPopper } from "lucide-react";

type CertificateProps = {
  onGoBack: () => void;
};

export function Certificate({ onGoBack }: CertificateProps) {

  return (
    <div key="certificate-complete" className="w-full max-w-lg animate-in fade-in duration-500">
      <Card>
        <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-2">
                <PartyPopper className="text-primary" />
                <CardTitle className="font-headline text-3xl md:text-4xl text-primary">
                Congratulations!
                </CardTitle>
            </div>
          <CardDescription className="pt-2 font-body text-base">
            You are now an official Ningaloo Guardian! Thank you for your commitment. Help spread the word and support the cause.
          </CardDescription>
        </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-2 text-center">
                    <p className="text-sm font-medium text-muted-foreground">Follow & Share</p>
                    <div className="flex gap-4">
                        <Button variant="outline" size="icon" asChild>
                            <a href="https://twitter.com/protectningaloo" target="_blank" rel="noopener noreferrer" aria-label="Follow on Twitter">
                                <Twitter />
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <a href="https://www.facebook.com/protectningaloo" target="_blank" rel="noopener noreferrer" aria-label="Follow on Facebook">
                                <Facebook />
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                            <a href="https://www.instagram.com/protectningaloo/" target="_blank" rel="noopener noreferrer" aria-label="Follow on Instagram">
                                <Instagram />
                            </a>
                        </Button>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center">
               <Button variant="outline" onClick={onGoBack} type="button">
                <ArrowLeft className="mr-2" /> Back to the Quiz
              </Button>
            </CardFooter>
      </Card>
    </div>
  );
}
