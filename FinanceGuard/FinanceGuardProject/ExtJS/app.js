Ext.application({
    name: 'FinanceGuard',
    models: ['ModelRecord'],
    stores: ['ModelRecords'],
    requires: [
        'FinanceGuard.view.main.MyPanel',
        'FinanceGuard.view.main.MyPanelController',
        'FinanceGuard.model.ModelRecord',
        'FinanceGuard.store.ModelRecords'
    ],
    views:['main.Main'],
    launch: function () {
        alert('Welcome Sir!');
    }
});