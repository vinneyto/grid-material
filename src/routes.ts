import { createBoxDemo } from './demo/createBoxDemo';
import { Demo } from './demo/Demo';
import { createGridBoxDemo } from './demo/createGridBoxDemo';

export const routes = new Map<string, () => Demo>();
routes.set('box', createBoxDemo);
routes.set('gridBox', createGridBoxDemo);
