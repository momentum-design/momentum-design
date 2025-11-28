const commonArgs = {
  table: {
    category: 'Styling',
    type: {},
  },
  control: false,
};

const classArgType = {
  class: {
    description:
      'A space-separated list of the classes of the element.' +
      ' This is a string that can be used to add custom CSS classes to the element.',
    ...commonArgs,
  },
};

const styleArgType = {
  style: {
    description: 'A string that can be used to add custom CSS styles to the element.',
    ...commonArgs,
  },
};

export { classArgType, styleArgType };
