import o from 'component-dom';
import page from 'page';
import Category from './view';

page('/category', (ctx, next) => {
  let category = new Category();
  console.log("category");
  let el = o('#content');
  category.replace(el[0]);
});
