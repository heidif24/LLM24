"use client";

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

const USER_KEY = "naijabuild_user";
const SITES_KEY = "naijabuild_sites";

export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveUser(user: User) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function logout() {
  localStorage.removeItem(USER_KEY);
}

export function registerUser(name: string, email: string, password: string): User {
  // Simple client-side auth for MVP. Replace with real backend later.
  const users = JSON.parse(localStorage.getItem("naijabuild_users") || "[]");
  if (users.find((u: any) => u.email === email)) {
    throw new Error("Email already registered");
  }
  const user: User = {
    id: crypto.randomUUID(),
    name,
    email,
    createdAt: new Date().toISOString(),
  };
  users.push({ ...user, password }); // In production never store plain password
  localStorage.setItem("naijabuild_users", JSON.stringify(users));
  saveUser(user);
  return user;
}

export function loginUser(email: string, password: string): User {
  const users = JSON.parse(localStorage.getItem("naijabuild_users") || "[]");
  const found = users.find((u: any) => u.email === email && u.password === password);
  if (!found) throw new Error("Invalid email or password");
  const user: User = {
    id: found.id,
    name: found.name,
    email: found.email,
    createdAt: found.createdAt,
  };
  saveUser(user);
  return user;
}

export type SavedSite = {
  id: string;
  userId: string;
  title: string;
  tagline: string;
  primaryColor: string;
  status: "draft" | "published";
  data: any;
  createdAt: string;
  publishedAt?: string;
  subdomain?: string;
};

export function getUserSites(userId: string): SavedSite[] {
  const all: SavedSite[] = JSON.parse(localStorage.getItem(SITES_KEY) || "[]");
  return all.filter((s) => s.userId === userId).sort((a, b) => 
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function saveSite(site: SavedSite) {
  const all: SavedSite[] = JSON.parse(localStorage.getItem(SITES_KEY) || "[]");
  const idx = all.findIndex((s) => s.id === site.id);
  if (idx >= 0) all[idx] = site;
  else all.push(site);
  localStorage.setItem(SITES_KEY, JSON.stringify(all));
}

export function deleteSite(id: string) {
  const all: SavedSite[] = JSON.parse(localStorage.getItem(SITES_KEY) || "[]");
  localStorage.setItem(SITES_KEY, JSON.stringify(all.filter((s) => s.id !== id)));
}

export function getSiteById(id: string): SavedSite | null {
  const all: SavedSite[] = JSON.parse(localStorage.getItem(SITES_KEY) || "[]");
  return all.find((s) => s.id === id) || null;
}
