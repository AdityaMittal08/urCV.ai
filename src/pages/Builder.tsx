
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, ArrowLeft, ArrowRight, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import PersonalInfoForm from "@/components/resume/PersonalInfoForm";
import EducationForm from "@/components/resume/EducationForm";
import ExperienceForm from "@/components/resume/ExperienceForm";
import SkillsForm from "@/components/resume/SkillsForm";
import ResumePreview from "@/components/resume/ResumePreview";
import ResumeAnalysisComponent from "@/components/resume/ResumeAnalysis";
import ResumeGenerator from "@/components/resume/ResumeGenerator";
import FloatingChatBot from "@/components/FloatingChatBot";

export interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    summary: string;
  };
  education: Array<{
    id: string;
    degree: string;
    school: string;
    location: string;
    graduationDate: string;
    gpa?: string;
  }>;
  experience: Array<{
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  skills: {
    technical: string[];
    languages: string[];
    certifications: string[];
  };
}

const Builder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      summary: "",
    },
    education: [],
    experience: [],
    skills: {
      technical: [],
      languages: [],
      certifications: [],
    },
  });

  const steps = [
    { title: "Personal Info", component: PersonalInfoForm },
    { title: "Education", component: EducationForm },
    { title: "Experience", component: ExperienceForm },
    { title: "Skills", component: SkillsForm },
  ];

  const CurrentStepComponent = steps[currentStep].component;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateResumeData = (section: keyof ResumeData, data: any) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleEnhanceResume = (enhancedData: ResumeData) => {
    setResumeData(enhancedData);
  };

  const getResumeContext = () => {
    return `Current resume data: ${JSON.stringify(resumeData, null, 2)}`;
  };

  const handleExtractedData = (extractedData: ResumeData) => {
    setResumeData(extractedData);
  };

  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -50 }
  };

  const slideTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.4
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-blue-50 dark:from-slate-950 dark:via-background dark:to-slate-900 theme-transition">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-professional rounded-lg flex items-center justify-center shadow-md">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              urCV.ai
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <span className="text-muted-foreground">Step {currentStep + 1} of {steps.length}</span>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="container mx-auto px-4 mb-8 animate-fade-in">
        <div className="bg-muted rounded-full h-2 max-w-md mx-auto">
          <div 
            className="bg-gradient-professional h-2 rounded-full transition-all duration-500 ease-out shadow-sm"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Form Section */}
          <Card className="lg:col-span-2 p-6 shadow-xl border-0 animate-slide-in-left bg-card">
            <Tabs defaultValue="form" className="w-full">
              <TabsList className="grid w-full grid-cols-3 transition-all duration-300 bg-muted">
                <TabsTrigger value="form" className="transition-all duration-200 hover:scale-105">Resume Form</TabsTrigger>
                <TabsTrigger value="analysis" className="transition-all duration-200 hover:scale-105">
                  <Bot className="w-4 h-4 mr-2" />
                  AI Analysis
                </TabsTrigger>
                <TabsTrigger value="generate" className="transition-all duration-200 hover:scale-105">Generate</TabsTrigger>
              </TabsList>

              <TabsContent value="form" className="mt-6">
                <div className="mb-6 animate-fade-in">
                  <h2 className="text-2xl font-bold text-card-foreground mb-2">
                    {steps[currentStep].title}
                  </h2>
                  <p className="text-muted-foreground">
                    Fill in your {steps[currentStep].title.toLowerCase()} details
                  </p>
                </div>

                <div className="transition-all duration-400 ease-in-out">
                  <CurrentStepComponent 
                    data={resumeData}
                    updateData={updateResumeData}
                  />
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="flex items-center space-x-2 transition-all duration-200 hover:scale-105 disabled:opacity-50 border-border hover:bg-accent"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </Button>

                  {currentStep === steps.length - 1 ? (
                    <Button className="btn-professional flex items-center space-x-2 transition-all duration-200 hover:scale-105">
                      <span>Generate Resume</span>
                    </Button>
                  ) : (
                    <Button
                      onClick={handleNext}
                      className="btn-professional flex items-center space-x-2 transition-all duration-200 hover:scale-105"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="analysis" className="mt-6 animate-fade-in">
                <ResumeAnalysisComponent 
                  data={resumeData}
                  onEnhance={handleEnhanceResume}
                  onExtractedData={handleExtractedData}
                />
              </TabsContent>

              <TabsContent value="generate" className="mt-6 animate-fade-in">
                <ResumeGenerator data={resumeData} />
              </TabsContent>
            </Tabs>
          </Card>

          {/* Preview Section */}
          <Card className="p-6 shadow-xl border-0 animate-slide-in-right bg-card">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-card-foreground mb-2">Live Preview</h2>
              <p className="text-muted-foreground">See your resume update in real-time</p>
            </div>
            <div className="transition-all duration-300 ease-in-out">
              <ResumePreview data={resumeData} />
            </div>
          </Card>
        </div>
      </div>

      {/* Floating Chat Bot */}
      <FloatingChatBot />
    </div>
  );
};

export default Builder;
