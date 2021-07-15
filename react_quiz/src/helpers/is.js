export const isArray = i => Array.isArray(i);
export const isObject = i => typeof i === 'object' && i !== null && !isArray(i);