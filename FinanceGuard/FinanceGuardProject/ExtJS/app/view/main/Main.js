Ext.define('FinanceGuard.view.main.Main', {
    extend: 'Ext.Container',//container.viewport for browser support,
    requires:[
    'FinanceGuard.view.main.MyPanel',
    'FinanceGuard.view.main.MyPanelController'],
    requires: 'Ext.grid.Panel',

    items: [
      /*  {
            xtype: 'mypanel2',
            width: 650,
            height: 300,
            title:'necum'
        }*/
    ]

});