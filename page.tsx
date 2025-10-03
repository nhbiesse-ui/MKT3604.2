
"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Award,
} from "lucide-react";
import { slides, type SlideData, type ContentBlock, type SlideSection } from "@/lib/slides";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Certificate } from "@/components/Certificate";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type AnswerKey = string; // e.g., "slide_1-section_0-block_1"

export default function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<AnswerKey, any>>({});
  const [showFeedback, setShowFeedback] = useState<Record<AnswerKey, boolean>>({});
  const mainRef = useRef<HTMLDivElement>(null);

  // Persist and retrieve the current slide index from localStorage
  useEffect(() => {
    const savedSlideIndex = localStorage.getItem("currentSlideIndex");
    if (savedSlideIndex !== null) {
      setCurrentSlideIndex(parseInt(savedSlideIndex, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentSlideIndex", currentSlideIndex.toString());
    // Scroll to top when slide changes
    if (mainRef.current) {
        mainRef.current.scrollTo(0, 0);
    }
    // Also scroll window to top for smaller screens
    window.scrollTo(0, 0);

  }, [currentSlideIndex]);


  const totalSlides = slides.length;
  const slide: SlideData | undefined = slides[currentSlideIndex];

  const handleNext = () => {
    if (currentSlideIndex < totalSlides) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const handleGoBackFromCertificate = () => {
    setCurrentSlideIndex(totalSlides - 1);
  };


  const handleSliderChange = (value: number[], answerKey: AnswerKey) => {
    setUserAnswers({ ...userAnswers, [answerKey]: value[0] });
  };

  const handleRadioChange = (value: string, answerKey: AnswerKey) => {
    setUserAnswers({ ...userAnswers, [answerKey]: value });
    setShowFeedback({ ...showFeedback, [answerKey]: true });
  };
  
  const isNextDisabled = useMemo(() => {
    if (!slide) return false;
    // Find all MCQ blocks in the current slide
    const mcqKeys: AnswerKey[] = [];
    slide.sections.forEach((section, sectionIndex) => {
        section.blocks.forEach((block, blockIndex) => {
            if (block.type === 'mcq') {
                mcqKeys.push(`slide_${currentSlideIndex}-section_${sectionIndex}-block_${blockIndex}`);
            }
        });
    });
    // Check if any of them have not been answered
    return mcqKeys.some(key => userAnswers[key] === undefined);
  }, [currentSlideIndex, userAnswers, slide]);


  if (currentSlideIndex >= totalSlides) {
    return (
      <main ref={mainRef} className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 bg-background">
        <Certificate onGoBack={handleGoBackFromCertificate} />
      </main>
    );
  }

  const progressValue = (currentSlideIndex / totalSlides) * 100;

  const renderBlock = (block: ContentBlock, sectionIndex: number, blockIndex: number) => {
    const answerKey: AnswerKey = `slide_${currentSlideIndex}-section_${sectionIndex}-block_${blockIndex}`;
    
    switch (block.type) {
      case 'text':
        return <p className="font-body text-base pb-4">{block.content}</p>;
      case 'slider':
        if (!block.slider) return null;
        const { slider } = block;
        return (
          <div className="space-y-4 pt-4 pb-6 my-4 rounded-lg border p-6">
             <h3 className="font-bold text-lg">{slider.label}</h3>
            <Slider
              defaultValue={[slider.defaultValue]}
              min={slider.min}
              max={slider.max}
              step={slider.step}
              onValueChange={(value) => handleSliderChange(value, answerKey)}
            />
            <p className="text-center text-muted-foreground">
              {slider.impactTemplate(
                userAnswers[answerKey] ?? slider.defaultValue
              )}
            </p>
          </div>
        );
      case 'mcq':
        if (!block.mcq) return null;
        const { mcq } = block;
        return (
            <div className="space-y-4 pt-4 pb-6 my-4 rounded-lg border p-6 bg-secondary/50">
                <h3 className="font-bold text-lg">{mcq.question}</h3>
                <RadioGroup onValueChange={(value) => handleRadioChange(value, answerKey)}>
                {mcq.options.map((option, index) => {
                    const isSelected = userAnswers[answerKey] === option.text;
                    const showResult = showFeedback[answerKey] && isSelected;
                    return (
                    <div
                        key={index}
                        className={cn(
                        "flex items-center space-x-2 rounded-lg border p-4 transition-all bg-background",
                        showResult && option.isCorrect && "border-green-500 bg-green-500/10",
                        showResult && !option.isCorrect && "border-red-500 bg-red-500/10"
                        )}
                    >
                        <RadioGroupItem value={option.text} id={`${answerKey}-r${index}`} />
                        <Label htmlFor={`${answerKey}-r${index}`} className="flex-1 cursor-pointer">{option.text}</Label>
                        {showResult && option.isCorrect && <CheckCircle2 className="text-green-500" />}
                        {showResult && !option.isCorrect && <XCircle className="text-red-500" />}
                    </div>
                    );
                })}
                </RadioGroup>
                {showFeedback[answerKey] && (
                <p className="text-sm text-muted-foreground animate-in fade-in duration-500">
                    {mcq.options.find(o => o.text === userAnswers[answerKey])?.isCorrect
                    ? mcq.feedbackCorrect
                    : mcq.feedbackIncorrect}
                </p>
                )}
            </div>
        );
      default:
        return null;
    }
  };

  if (!slide) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  }

  return (
    <main ref={mainRef} className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-12 bg-background overflow-y-auto">
      <div className="w-full max-w-3xl">
        <div className="flex items-center gap-4 mb-4">
          <Award className="text-primary" size={24} />
          <Progress value={progressValue} className="w-full h-3" />
        </div>
        <div key={currentSlideIndex} className="animate-in fade-in duration-500">
          <Card className="overflow-hidden shadow-2xl">
            <CardHeader>
              <CardTitle className="font-headline text-3xl md:text-4xl text-primary">
                {slide.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
                <Accordion type="multiple" defaultValue={slide.sections.map(s => s.title)} className="w-full">
                    {slide.sections.map((section, sectionIndex) => (
                        <AccordionItem value={section.title} key={sectionIndex}>
                            <AccordionTrigger className="text-xl font-bold hover:no-underline">{section.title}</AccordionTrigger>
                            <AccordionContent className="pt-2">
                                {section.blocks.map((block, blockIndex) => (
                                    <div key={blockIndex}>
                                        {renderBlock(block, sectionIndex, blockIndex)}
                                    </div>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentSlideIndex === 0}
              >
                <ArrowLeft className="mr-2" /> Back
              </Button>
              <Button onClick={handleNext} disabled={isNextDisabled}>
                {currentSlideIndex === totalSlides - 1
                  ? "Finish"
                  : "Next"}
                <ArrowRight className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
