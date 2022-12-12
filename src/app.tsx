import { FunctionalComponent, h, render } from 'preact';

const App: FunctionalComponent = () => {
  return <div>Hello There</div>;
};

render(<App />, document.querySelector('#app') as HTMLElement);
