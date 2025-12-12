/**
 * Enhances the argTypes by disabling the controls for event names
 * @param context - The story context
 * @returns The sorted argTypes
 */
export const sortArgTypes = context =>
  Object.fromEntries(Object.entries(context?.argTypes || context?.parameters?.argTypes || {}).sort());
