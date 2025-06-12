import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './project'
import {LearningObj} from './learning'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType,LearningObj],
}
