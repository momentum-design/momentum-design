// AI-Assisted
/**
 * @fileoverview Tests for command registry.
 */

import { Command } from 'commander';

import { listCommandNames, registerCommands } from '../../src/commands/registry';

describe('command registry', () => {
  it('should list registered command names', () => {
    const names = listCommandNames();
    expect(names).toContain('connect');
  });

  it('should register commands on a program instance', () => {
    const program = new Command('codeconnect-generator');

    registerCommands(program);

    const commandNames = program.commands.map((command) => command.name());
    expect(commandNames).toContain('connect');
  });
});
// End AI-Assisted
