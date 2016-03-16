import View from '../view/view.js';
import template from './template.jade';

export default class Home extends View {

  constructor (topic) {
    super(template, { topic });
  }
}