Ext.define('Melisa.pens.view.mcp.WrapperController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.wrapper',
    
    config: {
        lastCopied: null
    },
    
    onPaintedColors: function() {
        
        var me = this;
        
        /* auto selected first color */
        me.getView().down('colorselector').setSelection(
            me.getViewModel().getStore('materialColors').first()
        );
        
    },
    
    /**
     * necesary change status before selection change
     */
    onSelectionchangeColorSelector: function() {
        
        var me = this,
            lastCopied = me.getLastCopied();
    
        if( lastCopied) {
            
            lastCopied.removeCls('js-copied');
            me.setLastCopied(null);
            
        }
        
    },
    
    onItemtapColors: function(dv, index, dom, record) {
        
        var me = this,
            lastCopied = me.getLastCopied(),
            $copiedIndicator = dom.el.down('.copied-indicator');
    
        if( lastCopied) {
            lastCopied.removeCls('js-copied');
        }
        
        me.setLastCopied($copiedIndicator);
        $copiedIndicator.addCls('js-copied');
        
        new Clipboard(dom.el.down('.wrapper').dom);
        
    }
    
});