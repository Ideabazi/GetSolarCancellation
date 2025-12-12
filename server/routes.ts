import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Lead submission endpoint
  app.post("/api/leads", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertLeadSchema.parse(req.body);
      
      // Store lead in database
      const lead = await storage.createLead(validatedData);
      
      // Return success response
      return res.status(201).json({
        success: true,
        leadId: lead.id,
        message: "Lead submitted successfully",
      });
    } catch (error: any) {
      console.error("Error submitting lead:", error);
      
      // Handle validation errors
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        return res.status(400).json({
          success: false,
          error: "Validation failed",
          details: validationError.toString(),
        });
      }
      
      // Handle other errors
      return res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
  });

  // Get all leads (for admin dashboard in future phase)
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      return res.json({
        success: true,
        leads,
      });
    } catch (error) {
      console.error("Error fetching leads:", error);
      return res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
