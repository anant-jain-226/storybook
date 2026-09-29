import '../src/tokens.css';

export default {
  parameters: { controls: { expanded: true }, layout: 'centered' },
  globalTypes: {
    theme: {
      description: 'Color theme',
      toolbar: { title: 'Theme', icon: 'paintbrush', dynamicTitle: true, items: [{ value: 'orange', title: 'Light orange' }, { value: 'purple', title: 'Light purple' }] },
    },
  },
  initialGlobals: { theme: 'orange' },
  decorators: [
    (Story, ctx) => {
      document.documentElement.dataset.theme = ctx.globals.theme;
      document.body.style.fontFamily = 'var(--font)';
      document.body.style.background = 'var(--page-gradient)';
      document.body.style.color = 'var(--c-ink)';
      return Story();
    },
  ],
};
