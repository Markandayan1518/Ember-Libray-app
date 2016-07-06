import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
// import { hasMany } from 'ember-data/relationships';

export default Model.extend({

  title:        attr('string'),
  releaseYear:  attr('date'),

  author:       belongsTo('author', {inverse: 'books', async: true}),
  library:      belongsTo('library', {inverse: 'books', async: true}),

});
