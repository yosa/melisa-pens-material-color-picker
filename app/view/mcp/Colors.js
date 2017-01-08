Ext.define('Melisa.pens.view.mcp.Colors', {
    extend: 'Ext.List',
    xtype: 'colors',
    
    cls: 'colors',
    itemTpl: [
        '<div class="wrapper" style="background: {field1.hex}" data-clipboard-text="{field1.hex}">',
            '<span>{field1.weight}</span>',
            '<span class="fix-firefox">{field1.hex}</span>',
            '<span class="copied-indicator">Color copied!</span>',
        '</div>'
    ],
    bind: {
        store: '{currentRecord.variations}'
    },
    listeners: {
        painted: 'onPaintedColors',
        itemtap: 'onItemtapColors'
    }
});