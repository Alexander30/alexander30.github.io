Ext.define('FinanceGuard.store.ModelRecords', {
    extend: 'Ext.data.Store',
    alias: 'store.modelrecords',
    xtype: 'records',
    model: 'ModelRecord',
    sorters: ['amount'],


    requires: [
        'Ext.data.reader.Json',
        'FinanceGuard.model.ModelRecord',
        'Ext.data.proxy.Ajax'
    ],
    config: {
        autoLoad: true,
        autoSync:false,
        proxy: {
            type: 'ajax',
            url: 'model-records.php',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    }
});
