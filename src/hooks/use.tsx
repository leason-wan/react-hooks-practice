import { reRender } from '../index';
import { Deps } from './deps';

const { deps } = Deps;

export function useState(initState: any) {
  deps[Deps.point] = deps[Deps.point] || initState;

  const currentPoint = Deps.point;
  const setState = (newState: any) => {
    deps[currentPoint] = newState;
    reRender();
  }

  return [deps[Deps.point++], setState];
}

export function useEffect(cb: Function, watcher?: any[]) {
  if(watcher) {
    let hasChanged = (deps[Deps.point] as any[]).every(dep => watcher.includes(dep));
    if(hasChanged || !deps[Deps.point]) {
      deps[Deps.point++] = watcher;
      cb();
    }
  } else {
    if(deps[Deps.point] !== 'skip') {
      deps[Deps.point++] = 'skip';
      cb();
    }
  }
}