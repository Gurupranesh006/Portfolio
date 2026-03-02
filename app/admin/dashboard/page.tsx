"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ProjectItem = {
  _id: string;
  title: string;
};

type WriteupItem = {
  _id: string;
  title: string;
};

type CertificationItem = {
  _id: string;
  name: string;
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [writeups, setWriteups] = useState<WriteupItem[]>([]);
  const [certifications, setCertifications] = useState<CertificationItem[]>([]);
  const [message, setMessage] = useState("");

  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    technologies: "",
    learning: "",
    githubUrl: "",
    status: "",
    order: "0"
  });

  const [writeupForm, setWriteupForm] = useState({
    title: "",
    summary: "",
    status: "Coming soon",
    link: "#",
    order: "0"
  });

  const [certForm, setCertForm] = useState({
    name: "",
    issuer: "",
    year: "",
    order: "0"
  });

  const checkSession = async () => {
    const response = await fetch("/api/admin/session");
    const data = await response.json();
    if (!data.authenticated) {
      router.replace("/admin/login");
      return;
    }
    setReady(true);
  };

  const loadData = async () => {
    const [p, w, c] = await Promise.all([
      fetch("/api/admin/projects"),
      fetch("/api/admin/writeups"),
      fetch("/api/admin/certifications")
    ]);

    if (p.ok) setProjects(await p.json());
    if (w.ok) setWriteups(await w.json());
    if (c.ok) setCertifications(await c.json());
  };

  useEffect(() => {
    checkSession().then(loadData);
  }, []);

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  };

  const createProject = async () => {
    const response = await fetch("/api/admin/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...projectForm,
        technologies: projectForm.technologies
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      })
    });
    if (response.ok) {
      setMessage("Project uploaded.");
      setProjectForm({
        title: "",
        description: "",
        technologies: "",
        learning: "",
        githubUrl: "",
        status: "",
        order: "0"
      });
      loadData();
    }
  };

  const createWriteup = async () => {
    const response = await fetch("/api/admin/writeups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(writeupForm)
    });
    if (response.ok) {
      setMessage("Writeup uploaded.");
      setWriteupForm({ title: "", summary: "", status: "Coming soon", link: "#", order: "0" });
      loadData();
    }
  };

  const createCertification = async () => {
    const response = await fetch("/api/admin/certifications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(certForm)
    });
    if (response.ok) {
      setMessage("Certification uploaded.");
      setCertForm({ name: "", issuer: "", year: "", order: "0" });
      loadData();
    }
  };

  const deleteItem = async (kind: "projects" | "writeups" | "certifications", id: string) => {
    const response = await fetch(`/api/admin/${kind}/${id}`, { method: "DELETE" });
    if (response.ok) {
      setMessage("Entry deleted.");
      loadData();
    }
  };

  if (!ready) {
    return <main className="section-shell">Loading admin dashboard...</main>;
  }

  return (
    <main className="section-shell space-y-8">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </div>

      {message ? <p className="text-sm text-primary">{message}</p> : null}

      <Card>
        <CardHeader>
          <CardTitle>Upload Project Block</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <Input placeholder="Title" value={projectForm.title} onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })} />
          <Textarea placeholder="Description" value={projectForm.description} onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })} />
          <Input placeholder="Technologies (comma separated)" value={projectForm.technologies} onChange={(e) => setProjectForm({ ...projectForm, technologies: e.target.value })} />
          <Textarea placeholder="Key learning" value={projectForm.learning} onChange={(e) => setProjectForm({ ...projectForm, learning: e.target.value })} />
          <Input placeholder="GitHub URL" value={projectForm.githubUrl} onChange={(e) => setProjectForm({ ...projectForm, githubUrl: e.target.value })} />
          <Input placeholder="Status" value={projectForm.status} onChange={(e) => setProjectForm({ ...projectForm, status: e.target.value })} />
          <Input type="number" placeholder="Order" value={projectForm.order} onChange={(e) => setProjectForm({ ...projectForm, order: e.target.value })} />
          <Button onClick={createProject}>Upload Project</Button>
          <div className="space-y-2 text-sm text-muted-foreground">
            {projects.map((item) => (
              <div key={item._id} className="flex items-center justify-between rounded border border-border p-2">
                <span>{item.title}</span>
                <Button size="sm" variant="outline" onClick={() => deleteItem("projects", item._id)}>
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upload Writeup Block</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <Input placeholder="Title" value={writeupForm.title} onChange={(e) => setWriteupForm({ ...writeupForm, title: e.target.value })} />
          <Textarea placeholder="Summary" value={writeupForm.summary} onChange={(e) => setWriteupForm({ ...writeupForm, summary: e.target.value })} />
          <Input placeholder="Status (e.g. Coming soon)" value={writeupForm.status} onChange={(e) => setWriteupForm({ ...writeupForm, status: e.target.value })} />
          <Input placeholder="Link" value={writeupForm.link} onChange={(e) => setWriteupForm({ ...writeupForm, link: e.target.value })} />
          <Input type="number" placeholder="Order" value={writeupForm.order} onChange={(e) => setWriteupForm({ ...writeupForm, order: e.target.value })} />
          <Button onClick={createWriteup}>Upload Writeup</Button>
          <div className="space-y-2 text-sm text-muted-foreground">
            {writeups.map((item) => (
              <div key={item._id} className="flex items-center justify-between rounded border border-border p-2">
                <span>{item.title}</span>
                <Button size="sm" variant="outline" onClick={() => deleteItem("writeups", item._id)}>
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upload Certification Block</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <Input placeholder="Certification name" value={certForm.name} onChange={(e) => setCertForm({ ...certForm, name: e.target.value })} />
          <Input placeholder="Issuer" value={certForm.issuer} onChange={(e) => setCertForm({ ...certForm, issuer: e.target.value })} />
          <Input placeholder="Year" value={certForm.year} onChange={(e) => setCertForm({ ...certForm, year: e.target.value })} />
          <Input type="number" placeholder="Order" value={certForm.order} onChange={(e) => setCertForm({ ...certForm, order: e.target.value })} />
          <Button onClick={createCertification}>Upload Certification</Button>
          <div className="space-y-2 text-sm text-muted-foreground">
            {certifications.map((item) => (
              <div key={item._id} className="flex items-center justify-between rounded border border-border p-2">
                <span>{item.name}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => deleteItem("certifications", item._id)}
                >
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
