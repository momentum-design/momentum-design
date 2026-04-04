// AI-Assisted
/**
 * @fileoverview Tests for section-updater module.
 */

import { GeneratedSectionName } from '../../src/core/types';
import {
  applyGeneratedSectionUpdates,
  buildGeneratedSection,
  DEFAULT_SECTION_MARKERS,
  extractGeneratedSection,
  hasGeneratedSection,
  replaceGeneratedSection,
} from '../../src/io/section-updater';

describe('DEFAULT_SECTION_MARKERS', () => {
  it('should export expected markers', () => {
    expect(DEFAULT_SECTION_MARKERS).toEqual({
      start: '// BEGIN GENERATED',
      end: '// END GENERATED',
    });
  });
});

describe('hasGeneratedSection', () => {
  describe('positive cases', () => {
    it('should return true when both markers are present', () => {
      const content = `
// BEGIN GENERATED
const x = 1;
// END GENERATED
`;
      expect(hasGeneratedSection(content)).toBe(true);
    });

    it('should return true with custom markers', () => {
      const content = `
<!-- START -->
content
<!-- STOP -->
`;
      const markers = { start: '<!-- START -->', end: '<!-- STOP -->' };
      expect(hasGeneratedSection(content, markers)).toBe(true);
    });
  });

  describe('negative cases', () => {
    it('should return false when start marker is missing', () => {
      const content = `
const x = 1;
// END GENERATED
`;
      expect(hasGeneratedSection(content)).toBe(false);
    });

    it('should return false when end marker is missing', () => {
      const content = `
// BEGIN GENERATED
const x = 1;
`;
      expect(hasGeneratedSection(content)).toBe(false);
    });

    it('should return false for empty content', () => {
      expect(hasGeneratedSection('')).toBe(false);
    });

    it('should return false when neither marker is present', () => {
      expect(hasGeneratedSection('const x = 1;')).toBe(false);
    });
  });
});

describe('extractGeneratedSection', () => {
  describe('positive cases', () => {
    it('should extract content between markers', () => {
      const content = `// BEGIN GENERATED
const x = 1;
// END GENERATED`;
      expect(extractGeneratedSection(content)).toBe('const x = 1;');
    });

    it('should extract multi-line content between markers', () => {
      const content = `// BEGIN GENERATED
const x = 1;
const y = 2;
// END GENERATED`;
      expect(extractGeneratedSection(content)).toBe('const x = 1;\nconst y = 2;');
    });

    it('should preserve indentation in extracted content', () => {
      const content = `// BEGIN GENERATED
  const x = 1;
// END GENERATED`;
      expect(extractGeneratedSection(content)).toBe('  const x = 1;');
    });

    it('should handle markers on a single line', () => {
      const content = '// BEGIN GENERATED// END GENERATED';
      expect(extractGeneratedSection(content)).toBe('');
    });
  });

  describe('negative cases', () => {
    it('should return null when markers are missing', () => {
      expect(extractGeneratedSection('const x = 1;')).toBeNull();
    });

    it('should return null for empty content', () => {
      expect(extractGeneratedSection('')).toBeNull();
    });

    it('should return null when only start marker exists', () => {
      expect(extractGeneratedSection('// BEGIN GENERATED\nconst x = 1;')).toBeNull();
    });

    it('should return null when only end marker exists', () => {
      expect(extractGeneratedSection('const x = 1;\n// END GENERATED')).toBeNull();
    });
  });
});

describe('replaceGeneratedSection', () => {
  describe('positive cases', () => {
    it('should replace existing generated section', () => {
      const content = `// BEGIN GENERATED
const x = 1;
// END GENERATED`;
      const result = replaceGeneratedSection(content, 'const y = 2;');

      expect(result.status).toBe('replaced');
      expect(result.content).toContain('const y = 2;');
      expect(result.content).not.toContain('const x = 1;');
    });

    it('should insert generated section when no markers exist', () => {
      const content = 'const existing = true;';
      const result = replaceGeneratedSection(content, 'const y = 2;');

      expect(result.status).toBe('inserted');
      expect(result.content).toContain('const existing = true;');
      expect(result.content).toContain('// BEGIN GENERATED');
      expect(result.content).toContain('const y = 2;');
      expect(result.content).toContain('// END GENERATED');
    });

    it('should preserve surrounding content when replacing', () => {
      const content = `// Header comment
// BEGIN GENERATED
const x = 1;
// END GENERATED
// Footer comment`;
      const result = replaceGeneratedSection(content, 'const y = 2;');

      expect(result.content).toContain('// Header comment');
      expect(result.content).toContain('// Footer comment');
    });
  });

  describe('edge cases', () => {
    it('should return unchanged when content matches exactly', () => {
      const content = `// BEGIN GENERATED
const x = 1;
// END GENERATED
`;
      const result = replaceGeneratedSection(content, 'const x = 1;');

      expect(result.status).toBe('unchanged');
      expect(result.content).toBe(content);
    });

    it('should handle empty generated content', () => {
      const content = `// BEGIN GENERATED
const x = 1;
// END GENERATED`;
      const result = replaceGeneratedSection(content, '');

      expect(result.status).toBe('replaced');
      expect(result.content).toContain('// BEGIN GENERATED');
      expect(result.content).toContain('// END GENERATED');
    });

    it('should handle empty file content', () => {
      const result = replaceGeneratedSection('', 'const x = 1;');

      expect(result.status).toBe('inserted');
      expect(result.content).toContain('// BEGIN GENERATED');
    });

    it('should preserve CRLF line endings when replacing', () => {
      const content = '// BEGIN GENERATED\r\nold\r\n// END GENERATED';
      const result = replaceGeneratedSection(content, 'new');

      expect(result.content).toContain('\r\n');
    });

    it('should append without extra blank lines when content already ends with newline', () => {
      const content = 'const x = 1;\n';
      const result = replaceGeneratedSection(content, 'const y = 2;');

      expect(result.content).not.toContain('\n\n// BEGIN GENERATED');
    });
  });
});

describe('buildGeneratedSection', () => {
  describe('positive cases', () => {
    it('should build section with default markers', () => {
      const result = buildGeneratedSection('const x = 1;');

      expect(result).toBe('// BEGIN GENERATED\nconst x = 1;\n// END GENERATED\n');
    });

    it('should build section with custom markers', () => {
      const markers = { start: '<!-- START -->', end: '<!-- END -->' };
      const result = buildGeneratedSection('content', markers);

      expect(result).toBe('<!-- START -->\ncontent\n<!-- END -->\n');
    });

    it('should apply indentation to all lines', () => {
      const result = buildGeneratedSection('const x = 1;', DEFAULT_SECTION_MARKERS, '  ');

      expect(result).toBe('  // BEGIN GENERATED\n  const x = 1;\n  // END GENERATED\n');
    });

    it('should handle multi-line content with indentation', () => {
      const result = buildGeneratedSection('line1\nline2', DEFAULT_SECTION_MARKERS, '  ');

      expect(result).toContain('  line1');
      expect(result).toContain('  line2');
    });
  });

  describe('edge cases', () => {
    it('should handle empty content', () => {
      const result = buildGeneratedSection('');

      expect(result).toBe('// BEGIN GENERATED\n// END GENERATED\n');
    });

    it('should handle CRLF line endings', () => {
      const result = buildGeneratedSection('const x = 1;', DEFAULT_SECTION_MARKERS, '', '\r\n');

      expect(result).toBe('// BEGIN GENERATED\r\nconst x = 1;\r\n// END GENERATED\r\n');
    });
  });
});

describe('applyGeneratedSectionUpdates', () => {
  it('should update named sections while preserving manual content', () => {
    const content = [
      'figma.connect(\'url\', {',
      '  // BEGIN GENERATED: props',
      '  props: {',
      '    disabled: figma.boolean(\'Disabled\'),',
      '  },',
      '  // END GENERATED: props',
      '  custom: true,',
      '  // BEGIN GENERATED: example',
      '  example: () => html`<x></x>`,',
      '  // END GENERATED: example',
      '});',
    ].join('\n');

    const updated = applyGeneratedSectionUpdates(content, [
      {
        name: GeneratedSectionName.Props,
        content: ['props: {', '  label: figma.string(\'Label\'),', '},'].join('\n'),
      },
      {
        name: GeneratedSectionName.Example,
        content: 'example: () => html`<y></y>`,',
      },
    ]);

    expect(updated).not.toBeNull();
    expect(updated).toContain('label: figma.string(\'Label\')');
    expect(updated).toContain('custom: true,');
    expect(updated).toContain('// BEGIN GENERATED: props');
    expect(updated).toContain('// BEGIN GENERATED: example');
    expect(updated).not.toContain('disabled: figma.boolean(\'Disabled\')');
  });

  it('should return null when markers are not present', () => {
    const content = ['figma.connect(\'url\', {', '  custom: true,', '});'].join('\n');

    const updated = applyGeneratedSectionUpdates(content, [
      { name: GeneratedSectionName.Props, content: 'props: {},' },
      { name: GeneratedSectionName.Example, content: 'example: () => html`<x></x>`,' },
    ]);

    expect(updated).toBeNull();
  });

  it('should return null when sections list is empty', () => {
    const content = 'figma.connect(\'url\', {});';

    expect(applyGeneratedSectionUpdates(content, [])).toBeNull();
  });

  it('should return null when not all section markers are present', () => {
    const content = [
      'figma.connect(\'url\', {',
      '  // BEGIN GENERATED: props',
      '  props: {},',
      '  // END GENERATED: props',
      '});',
    ].join('\n');

    const updated = applyGeneratedSectionUpdates(content, [
      { name: GeneratedSectionName.Props, content: 'props: {}' },
      { name: GeneratedSectionName.Example, content: 'example: () => html`<x></x>`,' },
    ]);

    expect(updated).toBeNull();
  });

  it('should update when using explicit custom markers', () => {
    const content = ['/* START */', 'old', '/* END */'].join('\n');

    const updated = applyGeneratedSectionUpdates(content, [
      {
        content: 'new',
        markers: { start: '/* START */', end: '/* END */' },
      },
    ]);

    expect(updated).toContain('new');
  });

  it('should update default markers when section name is omitted', () => {
    const content = ['// BEGIN GENERATED', 'old', '// END GENERATED'].join('\n');

    const updated = applyGeneratedSectionUpdates(content, [{ content: 'new' }]);

    expect(updated).toContain('new');
  });
});
// End AI-Assisted
