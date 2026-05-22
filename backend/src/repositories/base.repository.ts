import type { FilterQuery, Model, UpdateQuery } from "mongoose";

export class BaseRepository<TDocument = any> {
  constructor(protected readonly model: Model<any>) {}

  findAll(filter: FilterQuery<TDocument> = {}) {
    return this.model.find(filter);
  }

  findById(id: string) {
    return this.model.findById(id);
  }

  create(payload: Partial<TDocument>) {
    return this.model.create(payload);
  }

  updateById(id: string, payload: UpdateQuery<TDocument>) {
    return this.model.findByIdAndUpdate(id, payload, { new: true });
  }

  deleteById(id: string) {
    return this.model.findByIdAndDelete(id);
  }
}
