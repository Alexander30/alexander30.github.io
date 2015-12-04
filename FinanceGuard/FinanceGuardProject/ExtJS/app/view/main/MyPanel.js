Ext.define('FinanceGuard.view.main.MyPanel', {
    extend: 'Ext.tab.Panel',
    requires: ['FinanceGuard.model.ModelRecord',
    'FinanceGuard.store.ModelRecords'],//Bug not suggest subdirectories 
    xtype: 'mypanel2',
    controller: 'mypanel',
    border: true,

    items: [
        {
            title:'Add record',
            items:[
                {
                    xtype:'newrecord'
                }
            ]
        },{
            title:'Show records',
            items:[
                {
                    xtype: 'showrecords'
                }
            ]
        },
        {
            title:'Settings',
            html:'TO-DO'
        }
    ]
});
