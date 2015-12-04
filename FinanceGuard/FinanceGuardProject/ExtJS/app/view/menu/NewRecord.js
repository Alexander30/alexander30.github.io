Ext.define('FinanceGuard.view.menu.NewRecord', {
    extend: 'Ext.panel.Panel',
    title: 'Add details',
    xtype: 'newrecord',
    allowBlank: false,
    validateBlank: true,
    items: [
        {
            xtype: 'numberfield',
            id: 'fieldamount',
            fieldLabel: 'Amount',
            regex: new RegExp('^[1-9][0-9]*$|^[0-9].[1-9]*$', 'i'),
            regexText: 'ERRR',
            validator: function (val) {
                errMsg = 'Value can not be empty !!!';
                return (val != 0) ? true : errMsg;
            },
            listeners: {
                validitychange: function (me, isValid) {
                    Ext.getCmp('addamountbutton').setDisabled((!isValid));
                }
            }
        }, {
            xtype: 'combobox',
            id: 'currencyPicker',
            queryMode: 'local',
            fieldLabel: 'Currency',
            store: new Ext.data.ArrayStore({
                id: 0,
                fields: ['currency'],
                data: [
                    ["CZK"],
                    ["EUR"]
                ]
            }),
            valueField: 'currency',
            displayField: 'currency',
            triggerAction: 'all',
            listeners: {
                render: function () {
                    this.setValue("CZK");
                }
            },

        }, {
            xtype: 'textfield',
            id: 'textfield',
            fieldLabel: 'Description'

        }, {
            xtype: 'button',
            id: 'addamountbutton',
            text: 'OK',
            formBind: true,
            disabled: true,

            handler: function (button) {
                var fieldamount = Ext.getCmp('fieldamount')
                var currency = Ext.getCmp('currencyPicker');
                var description = Ext.getCmp('textfield').value;
                if (fieldamount.isValid() === true) {
                    Ext.Msg.alert('Success', 'Records was successfully stored. Amount: ' +
                        '' + fieldamount.value + ' Currency: ' + currency.getValue() + ' \ndescription: ' + description);
                }
                else {
                    Ext.Msg.alert('Failed', 'Si dojebal');
                }

            }
        }

    ]
});
