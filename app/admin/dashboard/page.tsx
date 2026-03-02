"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ProjectItem = {
  _id: string;
  title: string;
  description: string;
  technologies: string[];
  learning: string;
  githubUrl: string;
  status?: string;
  order?: number;
};

type WriteupItem = {
  _id: string;
  title: string;
  summary?: string;
  status?: string;
  link?: string;
  order?: number;
};

type CertificationItem = {
  _id: string;
  name: string;
  issuer?: string;
  year?: string;
  order?: number;
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [writeups, setWriteups] = useState<WriteupItem[]>([]);
  const [certifications, setCertifications] = useState<CertificationItem[]>([]);
  const [message, setMessage] = useState("");
  const [deletingKey, setDeletingKey] = useState("");
  const [editingProjectId, setEditingProjectId] = useState("");
  const [editingWriteupId, setEditingWriteupId] = useState("");
  const [editingCertificationId, setEditingCertificationId] = useState("");

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
    publishMode: "coming-soon",
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

  const resetProjectForm = () => {
    setProjectForm({
      title: "",
      description: "",
      technologies: "",
      learning: "",
      githubUrl: "",
      status: "",
      order: "0"
    });
    setEditingProjectId("");
  };

  const submitProject = async () => {
    const payload = {
      ...projectForm,
      technologies: projectForm.technologies
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    };

    const endpoint = editingProjectId
      ? `/api/admin/projects/${editingProjectId}`
      : "/api/admin/projects";
    const method = editingProjectId ? "PUT" : "POST";

    const response = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      setMessage(editingProjectId ? "Project updated." : "Project uploaded.");
      resetProjectForm();
      loadData();
    }
  };

  const resetWriteupForm = () => {
    setWriteupForm({
      title: "",
      summary: "",
      publishMode: "coming-soon",
      status: "Coming soon",
      link: "#",
      order: "0"
    });
    setEditingWriteupId("");
  };

  const submitWriteup = async () => {
    const payload = {
      ...writeupForm,
      status: writeupForm.publishMode === "provide-link" ? "Live" : "Coming soon",
      link:
        writeupForm.publishMode === "provide-link" && writeupForm.link.trim()
          ? writeupForm.link.trim()
          : "#"
    };

    if (writeupForm.publishMode === "provide-link" && !writeupForm.link.trim()) {
      setMessage("Please provide a valid link for the writeup.");
      return;
    }

    const endpoint = editingWriteupId
      ? `/api/admin/writeups/${editingWriteupId}`
      : "/api/admin/writeups";
    const method = editingWriteupId ? "PUT" : "POST";

    const response = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      setMessage(editingWriteupId ? "Writeup updated." : "Writeup uploaded.");
      resetWriteupForm();
      loadData();
    }
  };

  const resetCertificationForm = () => {
    setCertForm({ name: "", issuer: "", year: "", order: "0" });
    setEditingCertificationId("");
  };

  const submitCertification = async () => {
    const endpoint = editingCertificationId
      ? `/api/admin/certifications/${editingCertificationId}`
      : "/api/admin/certifications";
    const method = editingCertificationId ? "PUT" : "POST";

    const response = await fetch(endpoint, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(certForm)
    });
    if (response.ok) {
      setMessage(editingCertificationId ? "Certification updated." : "Certification uploaded.");
      resetCertificationForm();
      loadData();
    }
  };

  const deleteItem = async (kind: "projects" | "writeups" | "certifications", id: string) => {
    setDeletingKey(`${kind}:${id}`);

    if (kind === "projects") {
      setProjects((previous) => previous.filter((item) => item._id !== id));
      if (editingProjectId === id) {
        resetProjectForm();
      }
    }

    if (kind === "writeups") {
      setWriteups((previous) => previous.filter((item) => item._id !== id));
      if (editingWriteupId === id) {
        resetWriteupForm();
      }
    }

    if (kind === "certifications") {
      setCertifications((previous) => previous.filter((item) => item._id !== id));
      if (editingCertificationId === id) {
        resetCertificationForm();
      }
    }

    const response = await fetch(`/api/admin/${kind}/${id}`, { method: "DELETE" });
    if (response.ok) {
      setMessage("Entry deleted.");
      setDeletingKey("");
      return;
    }

    setDeletingKey("");
    setMessage("Delete failed. Reloading latest data...");
    loadData();
  };

  const beginEditProject = (item: ProjectItem) => {
    setEditingProjectId(item._id);
    setProjectForm({
      title: item.title || "",
      description: item.description || "",
      technologies: (item.technologies || []).join(", "),
      learning: item.learning || "",
      githubUrl: item.githubUrl || "",
      status: item.status || "",
      order: String(item.order ?? 0)
    });
  };

  const beginEditWriteup = (item: WriteupItem) => {
    const hasLink = Boolean(item.link && item.link !== "#");
    setEditingWriteupId(item._id);
    setWriteupForm({
      title: item.title || "",
      summary: item.summary || "",
      publishMode: hasLink ? "provide-link" : "coming-soon",
      status: item.status || (hasLink ? "Live" : "Coming soon"),
      link: item.link || "#",
      order: String(item.order ?? 0)
    });
  };

  const beginEditCertification = (item: CertificationItem) => {
    setEditingCertificationId(item._id);
    setCertForm({
      name: item.name || "",
      issuer: item.issuer || "",
      year: item.year || "",
      order: String(item.order ?? 0)
    });
  };

  if (!ready) {
    return <main className="section-shell">Loading admin dashboard...</main>;
  }

  return (
    <main className="section-shell space-y-8">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="outline">Home</Button>
          </Link>
          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
        </div>
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
          <div className="flex flex-wrap gap-2">
            <Button onClick={submitProject}>{editingProjectId ? "Update Project" : "Upload Project"}</Button>
            {editingProjectId ? (
              <Button variant="outline" onClick={resetProjectForm}>
                Cancel Edit
              </Button>
            ) : null}
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            {projects.map((item) => (
              <div key={item._id} className="flex items-center justify-between rounded border border-border p-2">
                <span>{item.title}</span>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" onClick={() => beginEditProject(item)}>
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={deletingKey === `projects:${item._id}`}
                    onClick={() => deleteItem("projects", item._id)}
                  >
                    {deletingKey === `projects:${item._id}` ? "Deleting..." : "Delete"}
                  </Button>
                </div>
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

          <div className="rounded border border-border p-3">
            <p className="mb-2 text-sm font-medium text-foreground">Writeup Availability</p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="publishMode"
                  checked={writeupForm.publishMode === "coming-soon"}
                  onChange={() =>
                    setWriteupForm({
                      ...writeupForm,
                      publishMode: "coming-soon",
                      status: "Coming soon",
                      link: "#"
                    })
                  }
                />
                Coming soon
              </label>
              <label className="inline-flex items-center gap-2">
                <input
                  type="radio"
                  name="publishMode"
                  checked={writeupForm.publishMode === "provide-link"}
                  onChange={() =>
                    setWriteupForm({
                      ...writeupForm,
                      publishMode: "provide-link",
                      status: "Live"
                    })
                  }
                />
                Provide link
              </label>
            </div>
          </div>

          {writeupForm.publishMode === "provide-link" ? (
            <Input
              placeholder="Writeup URL"
              value={writeupForm.link}
              onChange={(e) => setWriteupForm({ ...writeupForm, link: e.target.value })}
            />
          ) : null}

          <Input type="number" placeholder="Order" value={writeupForm.order} onChange={(e) => setWriteupForm({ ...writeupForm, order: e.target.value })} />
          <div className="flex flex-wrap gap-2">
            <Button onClick={submitWriteup}>{editingWriteupId ? "Update Writeup" : "Upload Writeup"}</Button>
            {editingWriteupId ? (
              <Button variant="outline" onClick={resetWriteupForm}>
                Cancel Edit
              </Button>
            ) : null}
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            {writeups.map((item) => (
              <div key={item._id} className="flex items-center justify-between rounded border border-border p-2">
                <span>{item.title}</span>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" onClick={() => beginEditWriteup(item)}>
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={deletingKey === `writeups:${item._id}`}
                    onClick={() => deleteItem("writeups", item._id)}
                  >
                    {deletingKey === `writeups:${item._id}` ? "Deleting..." : "Delete"}
                  </Button>
                </div>
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
          <div className="flex flex-wrap gap-2">
            <Button onClick={submitCertification}>
              {editingCertificationId ? "Update Certification" : "Upload Certification"}
            </Button>
            {editingCertificationId ? (
              <Button variant="outline" onClick={resetCertificationForm}>
                Cancel Edit
              </Button>
            ) : null}
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            {certifications.map((item) => (
              <div key={item._id} className="flex items-center justify-between rounded border border-border p-2">
                <span>{item.name}</span>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => beginEditCertification(item)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={deletingKey === `certifications:${item._id}`}
                    onClick={() => deleteItem("certifications", item._id)}
                  >
                    {deletingKey === `certifications:${item._id}` ? "Deleting..." : "Delete"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
