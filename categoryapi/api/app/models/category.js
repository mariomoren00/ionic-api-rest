'use strict';

import { Bookshelf } from '../../config/database';

// Declare collection, model and relation to table Categories
var Category = Bookshelf.Model.extend({
  tableName: 'categories',
  hasTimestamps: true,
  hidden: ['deleted'],
});

Category = Bookshelf.model('Category', Category);

var Categories = Bookshelf.Collection.extend({
	model : Category
});

export { Category, Categories };
