/**
 * Emit an output directly to the CLI.
 *
 * @param {string} output details to be emitted when this method is called.
 * @returns {void}
 */
 const emit = (output) => process.stdout.write(output);

 export {
  emit,
 };
 