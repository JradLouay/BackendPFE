import mongoose, { Schema } from 'mongoose'

const variableSchema = new Schema({
  key: {
    type: String
  },
  value: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

variableSchema.methods = {
  view (full) {
    const view = { 
      // simple view
      id: this.id,
      key: this.key,
      value: this.value,
      client: this.client,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Variable', variableSchema)

export const schema = model.schema
export default model
