import { flatten } from '../common/utils';

// Text for Module Sections
export const sections = [];

// Generate Headers from Sections
export const headers = flatten(sections.map((section) => Object.keys(section)));
