import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRegistrationSchema, insertTestimonialSchema, insertCoverageAreaSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/registrations", async (req, res) => {
    try {
      const validatedData = insertRegistrationSchema.parse(req.body);
      const registration = await storage.createRegistration(validatedData);
      res.json(registration);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/registrations", async (_req, res) => {
    try {
      const registrations = await storage.getRegistrations();
      res.json(registrations);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/testimonials", async (_req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.json(testimonial);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  app.get("/api/coverage-areas", async (_req, res) => {
    try {
      const areas = await storage.getCoverageAreas();
      res.json(areas);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/coverage-areas/:city", async (req, res) => {
    try {
      const area = await storage.checkCoverageByCity(req.params.city);
      if (!area) {
        res.status(404).json({ error: "City not found" });
        return;
      }
      res.json(area);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.post("/api/coverage-areas", async (req, res) => {
    try {
      const validatedData = insertCoverageAreaSchema.parse(req.body);
      const area = await storage.createCoverageArea(validatedData);
      res.json(area);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
