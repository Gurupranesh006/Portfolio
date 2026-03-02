import { InferSchemaType, Model, Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    technologies: { type: [String], default: [] },
    learning: { type: String, required: true, trim: true },
    githubUrl: { type: String, required: true, trim: true },
    status: { type: String, default: "", trim: true },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const WriteupSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    summary: { type: String, default: "", trim: true },
    status: { type: String, default: "Coming soon", trim: true },
    link: { type: String, default: "#", trim: true },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const CertificationSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    issuer: { type: String, default: "", trim: true },
    year: { type: String, default: "", trim: true },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export type ProjectDoc = InferSchemaType<typeof ProjectSchema>;
export type WriteupDoc = InferSchemaType<typeof WriteupSchema>;
export type CertificationDoc = InferSchemaType<typeof CertificationSchema>;

export const ProjectModel: Model<ProjectDoc> =
  (models.Project as Model<ProjectDoc>) || model<ProjectDoc>("Project", ProjectSchema);

export const WriteupModel: Model<WriteupDoc> =
  (models.Writeup as Model<WriteupDoc>) || model<WriteupDoc>("Writeup", WriteupSchema);

export const CertificationModel: Model<CertificationDoc> =
  (models.Certification as Model<CertificationDoc>) ||
  model<CertificationDoc>("Certification", CertificationSchema);
