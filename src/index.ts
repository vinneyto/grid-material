import { createRenderer, resizeRendererToDisplaySize } from './util';
import { routes } from './routes';

const demoName =
  new URLSearchParams(window.location.search).get('demo') || 'box';

const createDemo = routes.get(demoName);

if (createDemo === undefined) {
  const msg = 'demo is not found';
  alert(msg);
  throw new Error(msg);
}

const renderer = createRenderer();
const demo = createDemo();

const render = () => {
  if (resizeRendererToDisplaySize(renderer)) {
    demo.resize(renderer);
  }

  demo.render(renderer);

  requestAnimationFrame(render);
};

render();
