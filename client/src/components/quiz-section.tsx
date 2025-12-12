import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { trackLeadSubmission } from "@/lib/analytics";

const quizSchema = z.object({
  wantsToExit: z.string().min(1, "Please select an option"),
  misledOrPressured: z.string().min(1, "Please select an option"),
  leaseOrFinance: z.string().min(1, "Please select an option"),
  systemAge: z.string().min(1, "Please select an option"),
  monthlyPayment: z.string().min(1, "Please select an option"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  state: z.string().min(1, "Please select your state"),
  callbackTime: z.string().min(1, "Please select a callback time"),
});

type QuizFormData = z.infer<typeof quizSchema>;

export function QuizSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPages = 6;
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
    trigger,
  } = useForm<QuizFormData>({
    resolver: zodResolver(quizSchema),
    mode: "onChange",
  });

  const formData = watch();

  const submitLeadMutation = useMutation({
    mutationFn: async (quizData: QuizFormData) => {
      const leadData = {
        firstName: quizData.firstName,
        lastName: quizData.lastName,
        email: quizData.email,
        phone: quizData.phone,
        state: quizData.state,
        leaseOrFinance: quizData.leaseOrFinance,
        misledOrPressured: quizData.misledOrPressured,
        wantsToExit: quizData.wantsToExit,
        systemAge: quizData.systemAge,
        monthlyPayment: quizData.monthlyPayment,
        callbackTime: quizData.callbackTime,
        formType: "quiz",
      };
      
      return await apiRequest("POST", "/api/leads", leadData);
    },
    onSuccess: () => {
      setSubmitted(true);
      trackLeadSubmission("quiz");
      toast({
        title: "Congratulations!",
        description: "You qualify! We'll contact you at your preferred time.",
      });
    },
    onError: (error: any) => {
      console.error("Error submitting quiz:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your quiz. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: QuizFormData) => {
    submitLeadMutation.mutate(data);
  };

  const nextPage = async () => {
    const fieldsToValidate = getFieldsForPage(currentPage);
    const isValid = await trigger(fieldsToValidate as any);
    if (isValid && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: document.getElementById("take-the-quiz")?.offsetTop || 0, behavior: "smooth" });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: document.getElementById("take-the-quiz")?.offsetTop || 0, behavior: "smooth" });
    }
  };

  const getFieldsForPage = (page: number): (keyof QuizFormData)[] => {
    const fieldMap: Record<number, (keyof QuizFormData)[]> = {
      1: ["wantsToExit"],
      2: ["misledOrPressured"],
      3: ["leaseOrFinance"],
      4: ["systemAge"],
      5: ["monthlyPayment"],
      6: ["firstName", "lastName", "email", "phone", "state", "callbackTime"],
    };
    return fieldMap[page] || [];
  };

  const progress = (currentPage / totalPages) * 100;

  return (
    <section id="take-the-quiz" className="py-20 bg-accent/20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stop guessing if you can cancel your solar contract...
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Take this quiz to see if you're eligible for cancellation.
          </p>
        </div>

        <div className="bg-white rounded-md shadow-lg p-6 md:p-8">
          {submitted ? (
            <div className="text-center space-y-6 py-12">
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto" />
              <h3 className="text-3xl font-bold text-foreground">LOOKS LIKE YOU QUALIFY!</h3>
              <p className="text-lg text-muted-foreground">
                We'll contact you at your preferred time to discuss your case.
              </p>
            </div>
          ) : (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Page {currentPage} of {totalPages}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {Math.round(progress)}% Complete
                  </span>
                </div>
                <Progress value={progress} className="h-2" data-testid="quiz-progress" />
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Page 1 */}
                {currentPage === 1 && (
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">
                      Are you looking to exit your solar system contract? *
                    </Label>
                    <RadioGroup
                      value={formData.wantsToExit}
                      onValueChange={(value) => setValue("wantsToExit", value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-md hover-elevate">
                        <RadioGroupItem value="yes" id="exit-yes" data-testid="radio-exit-yes" />
                        <Label htmlFor="exit-yes" className="font-normal cursor-pointer flex-1">
                          Yes! I want out now!
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-md hover-elevate">
                        <RadioGroupItem value="unsure" id="exit-unsure" data-testid="radio-exit-unsure" />
                        <Label htmlFor="exit-unsure" className="font-normal cursor-pointer flex-1">
                          I'm not sure yet...
                        </Label>
                      </div>
                    </RadioGroup>
                    {errors.wantsToExit && (
                      <p className="text-sm text-destructive">{errors.wantsToExit.message}</p>
                    )}
                  </div>
                )}

                {/* Page 2 */}
                {currentPage === 2 && (
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">
                      Did you feel pressured or misled when purchasing your solar system? *
                    </Label>
                    <RadioGroup
                      value={formData.misledOrPressured}
                      onValueChange={(value) => setValue("misledOrPressured", value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-md hover-elevate">
                        <RadioGroupItem value="yes" id="misled-yes-quiz" data-testid="radio-misled-yes-quiz" />
                        <Label htmlFor="misled-yes-quiz" className="font-normal cursor-pointer flex-1">
                          Yes
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-md hover-elevate">
                        <RadioGroupItem value="no" id="misled-no-quiz" data-testid="radio-misled-no-quiz" />
                        <Label htmlFor="misled-no-quiz" className="font-normal cursor-pointer flex-1">
                          No
                        </Label>
                      </div>
                    </RadioGroup>
                    {errors.misledOrPressured && (
                      <p className="text-sm text-destructive">{errors.misledOrPressured.message}</p>
                    )}
                  </div>
                )}

                {/* Page 3 */}
                {currentPage === 3 && (
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">
                      Did you lease or finance the purchase of your solar system? *
                    </Label>
                    <RadioGroup
                      value={formData.leaseOrFinance}
                      onValueChange={(value) => setValue("leaseOrFinance", value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-md hover-elevate">
                        <RadioGroupItem value="lease" id="lease-quiz" data-testid="radio-lease-quiz" />
                        <Label htmlFor="lease-quiz" className="font-normal cursor-pointer flex-1">
                          Lease
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-md hover-elevate">
                        <RadioGroupItem value="finance" id="finance-quiz" data-testid="radio-finance-quiz" />
                        <Label htmlFor="finance-quiz" className="font-normal cursor-pointer flex-1">
                          Finance
                        </Label>
                      </div>
                    </RadioGroup>
                    {errors.leaseOrFinance && (
                      <p className="text-sm text-destructive">{errors.leaseOrFinance.message}</p>
                    )}
                  </div>
                )}

                {/* Page 4 */}
                {currentPage === 4 && (
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">
                      How long have you had your solar system? *
                    </Label>
                    <RadioGroup
                      value={formData.systemAge}
                      onValueChange={(value) => setValue("systemAge", value)}
                      className="space-y-3"
                    >
                      {["Less than 1 year", "1 to 3 years", "3 to 5 years", "5+ years"].map((option) => (
                        <div key={option} className="flex items-center space-x-3 p-4 border border-border rounded-md hover-elevate">
                          <RadioGroupItem value={option} id={`age-${option}`} data-testid={`radio-age-${option}`} />
                          <Label htmlFor={`age-${option}`} className="font-normal cursor-pointer flex-1">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    {errors.systemAge && (
                      <p className="text-sm text-destructive">{errors.systemAge.message}</p>
                    )}
                  </div>
                )}

                {/* Page 5 */}
                {currentPage === 5 && (
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold">
                      How much is your monthly payment? *
                    </Label>
                    <RadioGroup
                      value={formData.monthlyPayment}
                      onValueChange={(value) => setValue("monthlyPayment", value)}
                      className="space-y-3"
                    >
                      {["Less than $200", "$200-$300", "$300-$400", "$400-$500", "$500+"].map((option) => (
                        <div key={option} className="flex items-center space-x-3 p-4 border border-border rounded-md hover-elevate">
                          <RadioGroupItem value={option} id={`payment-${option}`} data-testid={`radio-payment-${option}`} />
                          <Label htmlFor={`payment-${option}`} className="font-normal cursor-pointer flex-1">
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    {errors.monthlyPayment && (
                      <p className="text-sm text-destructive">{errors.monthlyPayment.message}</p>
                    )}
                  </div>
                )}

                {/* Page 6 - Contact Information */}
                {currentPage === 6 && (
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        LOOKS LIKE YOU QUALIFY! *
                      </h3>
                      <p className="text-muted-foreground">
                        Please provide your contact information so we can assist you.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quiz-firstName">
                          First Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="quiz-firstName"
                          {...register("firstName")}
                          data-testid="input-quiz-first-name"
                        />
                        {errors.firstName && (
                          <p className="text-sm text-destructive">{errors.firstName.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quiz-lastName">
                          Last Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="quiz-lastName"
                          {...register("lastName")}
                          data-testid="input-quiz-last-name"
                        />
                        {errors.lastName && (
                          <p className="text-sm text-destructive">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quiz-email">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="quiz-email"
                        type="email"
                        {...register("email")}
                        data-testid="input-quiz-email"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quiz-phone">
                        Phone <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="quiz-phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="(555) 123-4567"
                        data-testid="input-quiz-phone"
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quiz-state">
                        State/Province <span className="text-destructive">*</span>
                      </Label>
                      <Controller
                        name="state"
                        control={control}
                        render={({ field }) => (
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger id="quiz-state" data-testid="select-state">
                              <SelectValue placeholder="Select your state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="CA">California</SelectItem>
                              <SelectItem value="TX">Texas</SelectItem>
                              <SelectItem value="FL">Florida</SelectItem>
                              <SelectItem value="NY">New York</SelectItem>
                              <SelectItem value="AZ">Arizona</SelectItem>
                              <SelectItem value="NV">Nevada</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                      {errors.state && (
                        <p className="text-sm text-destructive">{errors.state.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>
                        When is a good time to call you? <span className="text-destructive">*</span>
                      </Label>
                      <RadioGroup
                        value={formData.callbackTime}
                        onValueChange={(value) => setValue("callbackTime", value)}
                        className="space-y-2"
                      >
                        {["Call me right away!", "Call me later today", "Call me tomorrow"].map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <RadioGroupItem value={option} id={`callback-${option}`} data-testid={`radio-callback-${option}`} />
                            <Label htmlFor={`callback-${option}`} className="font-normal cursor-pointer">
                              {option}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                      {errors.callbackTime && (
                        <p className="text-sm text-destructive">{errors.callbackTime.message}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-border gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    data-testid="button-previous"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  {currentPage < totalPages ? (
                    <Button
                      type="button"
                      onClick={nextPage}
                      data-testid="button-next"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={submitLeadMutation.isPending}
                      data-testid="button-submit-quiz"
                    >
                      {submitLeadMutation.isPending ? "Submitting..." : "Submit"}
                    </Button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
