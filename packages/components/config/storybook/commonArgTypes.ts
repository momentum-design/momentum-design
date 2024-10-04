const classArgType = {
  class: {
    description: `A space-separated list of the classes of the element. 
    This is a string that can be used to add custom CSS classes to the element.`,
    table: {
      category: 'Styling',
    },
  },
};

const styleArgType = {
  style: {
    description: 'A string that can be used to add custom CSS styles to the element.',
    table: {
      category: 'Styling',
    },
  },
};

export { classArgType, styleArgType };
