import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle2, Phone, Clock, Shield } from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { trackLeadSubmission } from "@/lib/analytics";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().optional(),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  leaseOrFinance: z.enum(["lease", "finance"], {
    required_error: "Please select an option",
  }),
  misledOrPressured: z.enum(["yes", "no"], {
    required_error: "Please select an option",
  }),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      consent: false,
    },
  });

  const consent = watch("consent");
  const leaseOrFinance = watch("leaseOrFinance");
  const misledOrPressured = watch("misledOrPressured");

  const submitLeadMutation = useMutation({
    mutationFn: async (formData: ContactFormData) => {
      const leadData = {
        firstName: formData.firstName,
        lastName: formData.lastName || null,
        email: formData.email,
        phone: formData.phone,
        leaseOrFinance: formData.leaseOrFinance,
        misledOrPressured: formData.misledOrPressured,
        formType: "contact",
        state: null,
        wantsToExit: null,
        systemAge: null,
        monthlyPayment: null,
        callbackTime: null,
      };
      
      return await apiRequest("POST", "/api/leads", leadData);
    },
    onSuccess: () => {
      setSubmitted(true);
      trackLeadSubmission("contact");
      toast({
        title: "Success!",
        description: "Your information has been submitted. We'll contact you shortly.",
      });
    },
    onError: (error: any) => {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    submitLeadMutation.mutate(data);
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-primary/5 via-accent/20 to-primary/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Get Your Free Case Review Today
              </h2>
              <p className="text-lg text-muted-foreground">
                Take the first step toward freedom from your unfair solar contract. Our experts are ready to help you.
              </p>
            </div>

            {/* Phone CTA */}
            <div className="bg-green-500 text-white p-6 rounded-lg">
              <p className="text-sm font-medium mb-2 opacity-90">PREFER TO TALK?</p>
              <a 
                href="tel:877-511-8931" 
                className="flex items-center gap-3 group"
                data-testid="link-contact-phone"
              >
                <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-2xl md:text-3xl font-bold group-hover:underline">
                  877-511-8931
                </span>
              </a>
              <p className="text-sm mt-2 opacity-90">
                Toll-free • Available 7 days a week
              </p>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-card p-4 rounded-lg border">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">24-Hour Response</span>
              </div>
              <div className="flex items-center gap-3 bg-card p-4 rounded-lg border">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">100% Confidential</span>
              </div>
              <div className="flex items-center gap-3 bg-card p-4 rounded-lg border">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">No Obligation</span>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-xl border">
            {submitted ? (
              <div className="text-center space-y-4 py-8">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                <h3 className="text-2xl font-bold text-foreground">Thank You!</h3>
                <p className="text-muted-foreground">
                  We've received your information and will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground">Request Your Free Consultation</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-firstName" className="text-sm font-medium">
                      First Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="contact-firstName"
                      {...register("firstName")}
                      className="w-full"
                      data-testid="input-contact-first-name"
                    />
                    {errors.firstName && (
                      <p className="text-sm text-destructive">{errors.firstName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-lastName" className="text-sm font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="contact-lastName"
                      {...register("lastName")}
                      className="w-full"
                      data-testid="input-contact-last-name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-sm font-medium">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    {...register("email")}
                    className="w-full"
                    data-testid="input-contact-email"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone" className="text-sm font-medium">
                    Phone <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="(555) 123-4567"
                    className="w-full"
                    data-testid="input-contact-phone"
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Did You Lease or Finance the Panels? <span className="text-destructive">*</span>
                  </Label>
                  <RadioGroup
                    value={leaseOrFinance}
                    onValueChange={(value) => setValue("leaseOrFinance", value as "lease" | "finance")}
                    className="grid grid-cols-2 gap-3"
                  >
                    <label
                      htmlFor="contact-lease"
                      className={`flex items-center justify-center gap-2 p-3 rounded-md border-2 cursor-pointer transition-all ${
                        leaseOrFinance === "lease"
                          ? "border-primary bg-primary/5"
                          : "border-muted hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value="lease" id="contact-lease" data-testid="radio-contact-lease" className="sr-only" />
                      <span className="font-medium text-sm">I Leased Them</span>
                    </label>
                    <label
                      htmlFor="contact-finance"
                      className={`flex items-center justify-center gap-2 p-3 rounded-md border-2 cursor-pointer transition-all ${
                        leaseOrFinance === "finance"
                          ? "border-primary bg-primary/5"
                          : "border-muted hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value="finance" id="contact-finance" data-testid="radio-contact-finance" className="sr-only" />
                      <span className="font-medium text-sm">I Financed Them</span>
                    </label>
                  </RadioGroup>
                  {errors.leaseOrFinance && (
                    <p className="text-sm text-destructive">{errors.leaseOrFinance.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Were you misled or pressured into signing? <span className="text-destructive">*</span>
                  </Label>
                  <RadioGroup
                    value={misledOrPressured}
                    onValueChange={(value) => setValue("misledOrPressured", value as "yes" | "no")}
                    className="grid grid-cols-2 gap-3"
                  >
                    <label
                      htmlFor="contact-misled-yes"
                      className={`flex items-center justify-center gap-2 p-3 rounded-md border-2 cursor-pointer transition-all ${
                        misledOrPressured === "yes"
                          ? "border-primary bg-primary/5"
                          : "border-muted hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value="yes" id="contact-misled-yes" data-testid="radio-contact-misled-yes" className="sr-only" />
                      <span className="font-medium text-sm">Yes</span>
                    </label>
                    <label
                      htmlFor="contact-misled-no"
                      className={`flex items-center justify-center gap-2 p-3 rounded-md border-2 cursor-pointer transition-all ${
                        misledOrPressured === "no"
                          ? "border-primary bg-primary/5"
                          : "border-muted hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem value="no" id="contact-misled-no" data-testid="radio-contact-misled-no" className="sr-only" />
                      <span className="font-medium text-sm">No</span>
                    </label>
                  </RadioGroup>
                  {errors.misledOrPressured && (
                    <p className="text-sm text-destructive">{errors.misledOrPressured.message}</p>
                  )}
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="contact-consent"
                    checked={consent}
                    onCheckedChange={(checked) => setValue("consent", checked as boolean)}
                    data-testid="checkbox-contact-consent"
                  />
                  <Label htmlFor="contact-consent" className="text-xs text-muted-foreground leading-tight cursor-pointer">
                    By providing my contact details, I agree to receive marketing and customer care calls and text messages from Solar Cancellation Hub about cancelling my solar purchase agreement. I confirm that I have reviewed and accept the{" "}
                    <Link href="/terms" className="text-primary underline">
                      terms and conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary underline">
                      privacy policy
                    </Link>
                    . Message and data rates may apply.
                  </Label>
                </div>
                {errors.consent && (
                  <p className="text-sm text-destructive">{errors.consent.message}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg"
                  disabled={submitLeadMutation.isPending}
                  data-testid="button-submit-contact-form"
                >
                  {submitLeadMutation.isPending ? "Submitting..." : "Get My Free Consultation"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
