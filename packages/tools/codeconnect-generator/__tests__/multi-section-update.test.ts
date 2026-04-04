// AI-Assisted
import { GeneratedSectionName, GeneratedSectionPayload } from '../src/core/types';
import { applyGeneratedSectionUpdates } from '../src/io/section-updater';

describe('applyGeneratedSectionUpdates', () => {
  it('should handle multiple sequential section updates correctly', () => {
    const originalContent = `import { AlertChip } from '@momentum-design/components/dist/react';
import figma from '@figma/code-connect';

figma.connect('<FIGMA_ALERTCHIP_URL>', {
  // BEGIN GENERATED: props
  props: {
    disabled: figma.boolean('Disabled'),
  },
  // END GENERATED: props
  // BEGIN GENERATED: example
  example: props => {
    return <AlertChip {...props} />;
  },
  // END GENERATED: example
});
`;

    const sections: GeneratedSectionPayload[] = [
      {
        name: GeneratedSectionName.Props,
        content: `  props: {
    disabled: figma.boolean('Disabled'),
    label: figma.string('Label'),
  },`,
        markers: {
          start: '// BEGIN GENERATED: props',
          end: '// END GENERATED: props',
        },
      },
      {
        name: GeneratedSectionName.Example,
        content: `  example: props => {
    return <AlertChip label="Updated" {...props} />;
  },`,
        markers: {
          start: '// BEGIN GENERATED: example',
          end: '// END GENERATED: example',
        },
      },
    ];

    const result = applyGeneratedSectionUpdates(originalContent, sections);

    expect(result).not.toBeNull();
    expect(result).toContain('label: figma.string(\'Label\')');
    expect(result).toContain('return <AlertChip label="Updated" {...props} />');
    expect(result).not.toContain('// END GENERATED: props  // BEGIN GENERATED: example');
    expect(result).not.toContain('// END GENERATED: props  example:');

    // Verify markers are on separate lines
    const lines = result!.split('\n');
    const endPropsLine = lines.findIndex((line) => line.trim() === '// END GENERATED: props');
    const beginExampleLine = lines.findIndex((line) => line.trim() === '// BEGIN GENERATED: example');

    expect(endPropsLine).toBeGreaterThan(-1);
    expect(beginExampleLine).toBeGreaterThan(-1);
    expect(beginExampleLine).toBe(endPropsLine + 1);
  });
});
// End AI-Assisted
