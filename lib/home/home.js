import o from 'component-dom';
import page from 'page';
import Home from './view';

var banner = 'hands.jpg';

page('/', (ctx, next) => {
  let homepage = new Home();
  let el = o('#content');
  homepage.replace(el[0]);
});