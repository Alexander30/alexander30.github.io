Ext.define('FinanceGuard.model.ModelRecord', {
    extend: 'Ext.data.Model',
    alias: 'model.modelrecord',

    fields: [
      { name: 'name', type: 'string' },
      { name: 'amount', type: 'int' },
      { name: 'currency', type: 'string' },
      { name: 'description', type: 'string' }
    ]
});
