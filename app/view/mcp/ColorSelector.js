Ext.define('Melisa.pens.view.mcp.ColorSelector', {
    extend: 'Ext.List',
    xtype: 'colorselector',
    
    reference: 'colorselector',
    cls: 'color-selector',
    itemTpl: '<label style="color: {[values.variations[5].hex]}"></label>',
    bind: {
        store: '{materialColors}'
    },
    listeners: {
        selectionchange: 'onSelectionchangeColorSelector'
    }
});