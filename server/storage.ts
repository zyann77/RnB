import { 
  type User, 
  type InsertUser,
  type Registration,
  type InsertRegistration,
  type Testimonial,
  type InsertTestimonial,
  type CoverageArea,
  type InsertCoverageArea,
  registrations,
  testimonials,
  coverageAreas,
  users
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  getRegistrations(): Promise<Registration[]>;
  
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  getCoverageAreas(): Promise<CoverageArea[]>;
  checkCoverageByCity(city: string): Promise<CoverageArea | undefined>;
  createCoverageArea(area: InsertCoverageArea): Promise<CoverageArea>;
}

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  async createRegistration(registration: InsertRegistration): Promise<Registration> {
    const result = await db.insert(registrations).values(registration).returning();
    return result[0];
  }

  async getRegistrations(): Promise<Registration[]> {
    return await db.select().from(registrations);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return await db.select().from(testimonials);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const result = await db.insert(testimonials).values(testimonial).returning();
    return result[0];
  }

  async getCoverageAreas(): Promise<CoverageArea[]> {
    return await db.select().from(coverageAreas);
  }

  async checkCoverageByCity(city: string): Promise<CoverageArea | undefined> {
    const result = await db.select().from(coverageAreas).where(eq(coverageAreas.city, city));
    return result[0];
  }

  async createCoverageArea(area: InsertCoverageArea): Promise<CoverageArea> {
    const result = await db.insert(coverageAreas).values(area).returning();
    return result[0];
  }
}

export const storage = new DbStorage();
