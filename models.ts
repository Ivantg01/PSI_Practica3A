import mongoose from 'npm:mongoose@7.6.3';

const Schema = mongoose.Schema;

type Disc = {
    name: string,
    author: string,
    format: string,
    matrix?: string,
    country: string,
    art: string,
    id: string,
}

const discSchema = new Schema(
    {
        name: String,
        author: String,
        format: String,
        matrix: String,
        country: String,
        art: String,
        //no incluimos id ya que mongoDB crea un campo _id automaticamente
    },
    { timestamps: true }
);

export type DiscModelType = mongoose.Document & Omit<Disc, "id">;

export default mongoose.model<DiscModelType>("Disc", discSchema);