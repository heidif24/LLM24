"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Plus, Globe, ExternalLink, LogOut, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getCurrentUser,
  getUserSites,
  logout,
  deleteSite,
  type User,
  type SavedSite,
} from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [sites, setSites] = useState<SavedSite[]>([]);

  useEffect(() => {
    const u = getCurrentUser();
    if (!u) {
      router.push("/login");
      return;
    }
    setUser(u);
    setSites(getUserSites(u.id));
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this website?")) return;
    deleteSite(id);
    if (user) setSites(getUserSites(user.id));
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">NB</span>
            </div>
            <span className="font-bold">NaijaBuild</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600 hidden sm:block">{user.name}</span>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
            </Button>
            <Link href="/build">
              <Button size="sm">
                <Plus className="w-4 h-4" />
                New Website
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Your Websites</h1>
          <p className="text-sm text-gray-500 mt-1">
            Welcome back, {user.name.split(" ")[0]}. Manage and publish your sites.
          </p>
        </div>

        {sites.length === 0 ? (
          <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center">
            <Globe className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-gray-900">No websites yet</h2>
            <p className="text-gray-500 mt-2 mb-6">
              Create your first website with AI in under 2 minutes.
            </p>
            <Link href="/build">
              <Button>
                <Plus className="w-4 h-4" />
                Create Website
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sites.map((site) => (
              <div
                key={site.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div
                  className="h-28 flex items-center justify-center"
                  style={{ backgroundColor: (site.primaryColor || "#16a34a") + "18" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: site.primaryColor || "#16a34a" }}
                  >
                    {site.title?.charAt(0) || "W"}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">{site.title}</h3>
                      <p className="text-sm text-gray-500 truncate">{site.tagline}</p>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                        site.status === "published"
                          ? "bg-green-50 text-green-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {site.status}
                    </span>
                  </div>

                  <div className="mt-5 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={`/preview/${site.id}`}>
                        <ExternalLink className="w-3.5 h-3.5" />
                        Open
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-2 text-red-600 hover:text-red-700"
                      onClick={() => handleDelete(site.id)}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/build"
              className="rounded-2xl border-2 border-dashed border-gray-200 hover:border-green-400 hover:bg-green-50/50 flex flex-col items-center justify-center p-8 transition min-h-[220px]"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <Plus className="w-5 h-5 text-green-600" />
              </div>
              <span className="font-medium text-gray-700">Create new website</span>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
