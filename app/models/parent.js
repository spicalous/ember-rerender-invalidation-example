import Model, { attr, hasMany } from '@ember-data/model';

export default class extends Model {
  @attr('string') name;
  @hasMany('child') children;
  
  get childrenLoading() {
    return this.hasMany('children').load().isPending;
  }
}
